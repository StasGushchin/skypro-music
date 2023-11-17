import React, { useState, useRef, useEffect } from 'react'
import Skeleton from '../Skeleton/Skeleton'
import * as S from './AudioPlayer.styles'
import { getEntireTrack } from '../../api'
import ProgressBar from '../ProgressBar/ProgressBar'


function secondsToTimeString(seconds) {
  return (
    Math.floor(Math.round(seconds) / 60)
      .toString()
      .padStart(2, '0') +
    ':' +
    (Math.round(seconds) % 60).toString().padStart(2, '0')
  )
}

function AudioPlayer({ entireTrack, trackId }) {
  const [isVisible, setIsVisible] = useState(false)
  const [trackData, setTrackData] = useState(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoop, setIsLooped] = useState(false);
  const [volume, setVolume] = useState(30)
  const audioRef = useRef(null);

  useEffect(() => {
    const handleTimeUpdateEvent = () => {
      if (audioRef.current.currentTime) {
        setCurrentTime(audioRef.current.currentTime);
        setDuration(audioRef.current.duration);
        console.log(audioRef.current.currentTime);
      } else {
        setCurrentTime(0);
        setDuration(0);
      }
    }

    audioRef?.current.addEventListener("timeupdate", handleTimeUpdateEvent);
    setIsVisible(false)
    getEntireTrack(trackId).then((data) => {
      setTrackData(data)
      setIsVisible(true)
    })
    return () => {
      setIsPlaying(true)
      audioRef?.current.removeEventListener("timeupdate", handleTimeUpdateEvent);
    }
  }, [trackId])

  const handleToggleLoop = () => {
    setIsLooped((prev) => !prev)
    audioRef.current.loop = !audioRef.current.loop
  }

  const handleVolumeChange = (event) => {
    let newVolume = event.target.value;
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  }

  function handleClick() {
    const nextIsPlaying = !isPlaying
    setIsPlaying(nextIsPlaying)

    if (nextIsPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }

  let AudioPlayerItem = isVisible ? (
    <S.TrackPlayContain>
      <S.TrackPlayImage>
        <S.TrackPlaySvg alt="music">
          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
        </S.TrackPlaySvg>
      </S.TrackPlayImage>

      <S.TrackPlayAuthor>
        <S.TrackPlayAuthorLink href="http://">
          {trackData.name !== '-'
            ? `${trackData.name.slice(0, 6)} . . .`
            : ' -'}
        </S.TrackPlayAuthorLink>
      </S.TrackPlayAuthor>

      <S.TrackPlayAlbum>
        <S.TrackPlayAlbumLink href="http://">
          {trackData.author !== '-'
            ? `${trackData.author.slice(0, 3)} . . .`
            : ' -'}
        </S.TrackPlayAlbumLink>
      </S.TrackPlayAlbum>
    </S.TrackPlayContain>
  ) : (
    <S.TrackPlayContain>
      <S.TrackPlayImage>
        <Skeleton width={51} height={51} />
      </S.TrackPlayImage>

      <S.TrackPlayAuthor>
        <Skeleton width={59} height={15} />
      </S.TrackPlayAuthor>

      <S.TrackPlayAlbum>
        <Skeleton width={59} height={15} />
      </S.TrackPlayAlbum>
    </S.TrackPlayContain>
  )

  return (
    <S.Bar>
      <div>
        {secondsToTimeString(currentTime)} : {secondsToTimeString(duration)}
      </div>
      <audio
        ref={audioRef}
        src={trackData?.track_file}
        type="audio/mp3"
        autoPlay={true}
      ></audio>
      <S.BarContent>
        <ProgressBar
          currentTime={currentTime}
          audioRef={audioRef}
          duration={duration}
        >
        </ProgressBar>
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <S.PlayerControls>
              <S.PlayerBtnPrev>
                <S.PlayerBtnPrevSvg alt="prev">
                  <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                </S.PlayerBtnPrevSvg>
              </S.PlayerBtnPrev>
              <S.PlayerBtnPlay>
                <S.PlayerBtnPlaySvg alt="play" onClick={handleClick}>
                  {isPlaying ? (
                    <svg
                      width="15"
                      height="19"
                      viewBox="0 0 15 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="5" height="19" fill="#D9D9D9" />
                      <rect x="10" width="5" height="19" fill="#D9D9D9" />
                    </svg>
                  ) : (
                    <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                  )}
                </S.PlayerBtnPlaySvg>
              </S.PlayerBtnPlay>
              <S.PlayerBtnNext>
                <S.PlayerBtnNextSvg alt="next">
                  <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                </S.PlayerBtnNextSvg>
              </S.PlayerBtnNext>
              <S.PlayerBtnRepeat onClick={handleToggleLoop}>
                <S.PlayerBtnRepeatSvg alt="repeat">
                { isLoop ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 18" fill="none">
                    <path d="M10 3L5 0.113249V5.88675L10 3ZM7 14.5C3.96243 14.5 1.5 12.0376 1.5 9H0.5C0.5 12.5899 3.41015 15.5 7 15.5V14.5ZM1.5 9C1.5 5.96243 3.96243 3.5 7 3.5V2.5C3.41015 2.5 0.5 5.41015 0.5 9H1.5Z" fill="white"/>
                    <path d="M10 15L15 17.8868V12.1132L10 15ZM13 3.5C16.0376 3.5 18.5 5.96243 18.5 9H19.5C19.5 5.41015 16.5899 2.5 13 2.5V3.5ZM18.5 9C18.5 12.0376 16.0376 14.5 13 14.5V15.5C16.5899 15.5 19.5 12.5899 19.5 9H18.5Z" fill="white"/>
                    </svg>
                  ) : (
                    <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                  )}
                </S.PlayerBtnRepeatSvg>
              </S.PlayerBtnRepeat>
              <S.PlayerBtnShuffle>
                <S.PlayerBtnShuffleSvg alt="shuffle">
                  <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                </S.PlayerBtnShuffleSvg>
              </S.PlayerBtnShuffle>
            </S.PlayerControls>

            <S.PlayerTrackPlay>
              {AudioPlayerItem}

              <S.TrackPlayLikeDis>
                <S.TrackPlayLike>
                  <S.TrackPlayLikeSvg alt="like">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </S.TrackPlayLikeSvg>
                </S.TrackPlayLike>
                <S.TrackPlayDisLike>
                  <S.TrackPlayDisLikeSvg alt="dislike">
                    <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                  </S.TrackPlayDisLikeSvg>
                </S.TrackPlayDisLike>
              </S.TrackPlayLikeDis>
            </S.PlayerTrackPlay>
          </S.BarPlayer>
          <S.BarVolumeBlock>
            <S.VolumeContent>
              <S.VolumeImage>
                <S.VolumeSvg alt="volume">
                  <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                </S.VolumeSvg>
              </S.VolumeImage>
              <S.VolumeProgress>
                <S.VolumeProgressLine 
                type="range" 
                id="volume" 
                name="volume" 
                min="0" 
                max="1" 
                step="0.01" 
                onChange={handleVolumeChange}
                value={volume}
                />
              </S.VolumeProgress>
            </S.VolumeContent>
          </S.BarVolumeBlock>
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  )
}

export default AudioPlayer
