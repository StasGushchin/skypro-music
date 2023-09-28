import React, { useState } from 'react'
import Skeleton from '../Skeleton/Skeleton'
import * as S from './Track.styles'

function Track() {
  const [isVisible, setIsVisible] = useState(false)

  setTimeout(() => {
    setIsVisible(true)
  }, 4000)

  let TrackItem = isVisible ? (
  <S.ContentPlaylist>  
    <S.PlaylistTrack>
      <S.TrackTitle>
        <S.TrackTitleImage>
          <S.TrackTitleSvg alt="music">
            <use href="img/icon/sprite.svg#icon-note"></use>
          </S.TrackTitleSvg>
        </S.TrackTitleImage>
        <S.TrackTitleText>
          <S.TrackTitleLink href="http://">
            Guilt <S.TrackTitleSpan></S.TrackTitleSpan>
          </S.TrackTitleLink>
        </S.TrackTitleText>
      </S.TrackTitle>
      <S.TrackAuthor>
        <S.TrackAuthorLink href="http://">
          Nero
        </S.TrackAuthorLink>
      </S.TrackAuthor>
      <S.TrackAlbum>
        <S.TrackAlbumLink href="http://">
          Welcome Reality
        </S.TrackAlbumLink>
      </S.TrackAlbum>
      <S.TrackTime>
        <S.TrackTimeSvg alt="time">
          <use href="img/icon/sprite.svg#icon-like"></use>
        </S.TrackTimeSvg>
        <S.TrackTimeText>4:44</S.TrackTimeText>
      </S.TrackTime>
    </S.PlaylistTrack>
  </S.ContentPlaylist>  
  ) : (
    <S.PlayListTrack>
      <Skeleton
        className="track__title-image track__title-image__skeleton"
        width={51}
        height={51}
      />
      <Skeleton
        className="track__title-text track__title-image__skeleton"
        width={356}
        height={19}
      />
      <Skeleton
        className="track__author track__title-image__skeleton"
        width={271}
        height={19}
      />
      <Skeleton
        className="track__album track__title-image__skeleton"
        width={305}
        height={19}
      />
    </S.PlayListTrack>
  )

  return (
    <S.PlaylistItem>
      
      {TrackItem}

    </S.PlaylistItem>
  )
}

export default Track
