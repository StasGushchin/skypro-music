import React, { useState, useRef, useEffect } from 'react'
import Skeleton from '../Skeleton/Skeleton'
import * as S from './AudioPlayer.styles'
import { getEntireTrack } from '../../api'
import ProgressBar from '../ProgressBar/ProgressBar'

function AudioPlayer({ entireTrack, trackId }) {
  const [isVisible, setIsVisible] = useState(false)
  const [trackData, setTrackData] = useState(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const ref = useRef(null)
  const audioRef = useRef(null);
  const setVolume = value => audioRef.current.volume = value;
  const loopRef = useRef(false)
  const setLoop = value => audioRef.current.loop = value;

  useEffect(() => {
    setIsVisible(false)
    getEntireTrack(trackId).then((data) => {
      setTrackData(data)
      console.log(data)
      setIsVisible(true)
    })
    return () => {
      setIsPlaying(true)
    }
  }, [trackId])

  function handleClick() {
    const nextIsPlaying = !isPlaying
    setIsPlaying(nextIsPlaying)

    if (nextIsPlaying) {
      ref.current.play()
    } else {
      ref.current.pause()
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
      <audio
        ref={ref}
        src={trackData?.track_file}
        type="audio/mp3"
        autoPlay={true}
      ></audio>
      <S.BarContent>
        <ProgressBar></ProgressBar>
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
              <S.PlayerBtnRepeat>
                <S.PlayerBtnRepeatSvg alt="repeat">
                  <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
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
                max="100" 
                step="0.01" 
                defaultValue="1"
                onChange={e => setVolume(e.target.value)}/>
              </S.VolumeProgress>
            </S.VolumeContent>
          </S.BarVolumeBlock>
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  )
}

export default AudioPlayer
