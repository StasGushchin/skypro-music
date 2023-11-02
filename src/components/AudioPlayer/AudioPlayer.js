import React, { useState, useRef } from 'react'
import Skeleton from '../Skeleton/Skeleton'
import * as S from './AudioPlayer.styles'

function AudioPlayer({entireTrack}) {
  const [isVisible, setIsVisible] = useState(false)

  setTimeout(() => {
    setIsVisible(true)
  }, 4000)


  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef(null);

  function handleClick() {
      const nextIsPlaying = !isPlaying;
      setIsPlaying(nextIsPlaying);

      if (nextIsPlaying) {
          ref.current.play();
      } else {
          ref.current.pause();
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
        {entireTrack.name !== "-"
        ? `${entireTrack.name.slice(0, 6)} . . .`
        : " -"}
        </S.TrackPlayAuthorLink>
      </S.TrackPlayAuthor>

      <S.TrackPlayAlbum>
        <S.TrackPlayAlbumLink href="http://">
        {entireTrack.author !== "-"
        ? `${entireTrack.author.slice(0, 3)} . . .`
        : " -"}
        </S.TrackPlayAlbumLink>
      </S.TrackPlayAlbum>
    </S.TrackPlayContain>
  ) : (
    <S.TrackPlayContain>

      <S.TrackPlayImage>
        <Skeleton
          width={51}
          height={51}
        />
      </S.TrackPlayImage>

      <S.TrackPlayAuthor>
        <Skeleton
          width={59}
          height={15}
      />
      </S.TrackPlayAuthor>

      <S.TrackPlayAlbum>
        <Skeleton
        width={59}
        height={15}
      />
      </S.TrackPlayAlbum>
      
    </S.TrackPlayContain>
  )

  return (
    <S.Bar>
      <S.BarContent>
        <S.BarPlayerProgress></S.BarPlayerProgress>
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <S.PlayerControls>
              <S.PlayerBtnPrev>
                <S.PlayerBtnPrevSvg alt="prev">
                  <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                </S.PlayerBtnPrevSvg>
              </S.PlayerBtnPrev>
              <S.PlayerBtnPlay>
                <S.PlayerBtnPlaySvg alt="play">
                  <button onClick={handleClick}>
                  <img src={isPlaying ? "img/icon/sprite.svg#icon-pause" : "img/icon/sprite.svg#icon-play"}></img>
                </button>
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
                  name="range"
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
