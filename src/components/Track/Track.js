import React, { useEffect, useState, useRef } from 'react'
import Skeleton from '../Skeleton/Skeleton'
import * as S from './Track.styles'
import { getAllTracks } from '../../api'

function convertSecondsToMinutes(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
}

function Track({setActiveTrack, setTrackId}) {
  const [isVisible, setIsVisible] = useState(false)
  const onClickTrack = (track) => {
    setActiveTrack(track)
  }

  setTimeout(() => {
    setIsVisible(true)
  }, 4000)

  const [tracks, setTrack] = useState(null)



  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    getAllTracks()
      .then((tracks) => {
      setTrack(tracks);
    });
    
    }, []);
  
  
    function handleClick() {
        const nextIsPlaying = !isPlaying;
        setIsPlaying(nextIsPlaying);

        // if (nextIsPlaying) {
        //     ref.current.play();
        // } else {
        //     ref.current.pause();
        // }
    }

  return (
  
    <S.PlaylistItem>
      
    {isVisible ? tracks.map((list) => (
      
    <div
    onClick={(e) => {
      e.preventDefault();
      onClickTrack(list.id);
    }}
    >
  <S.ContentPlaylist>  
    <S.PlaylistTrack>
      <S.TrackTitle>
        <S.TrackTitleImage>
          <S.TrackTitleSvg alt="music">
            <use href="img/icon/sprite.svg#icon-note" onClick={() => {
              setTrackId(list.id)
            }}></use>
          </S.TrackTitleSvg>
        </S.TrackTitleImage>
        <S.TrackTitleText>
          <S.TrackTitleLink href="http://">
            <S.ButtonTrack onClick={() => {
              setTrackId(list.id)
            }}>
              {list.name} <S.TrackTitleSpan></S.TrackTitleSpan>
            </S.ButtonTrack>
            
          </S.TrackTitleLink>
        </S.TrackTitleText>
      </S.TrackTitle>
      <S.TrackAuthor>
        <S.TrackAuthorLink href="http://">
          {list.author}
        </S.TrackAuthorLink>
      </S.TrackAuthor>
      <S.TrackAlbum>
        <S.TrackAlbumLink href="http://">
          {list.album}
        </S.TrackAlbumLink>
      </S.TrackAlbum>
      <S.TrackTime>
        <S.TrackTimeSvg alt="time">
          <use href="img/icon/sprite.svg#icon-like"></use>
        </S.TrackTimeSvg>
        <S.TrackTimeText>
          {convertSecondsToMinutes(list.duration_in_seconds)}
        </S.TrackTimeText>
      </S.TrackTime>
    </S.PlaylistTrack>
  </S.ContentPlaylist>  
    </div>
  )) : (
    <S.ContentPlaylist> 
      <S.PlayListTrack>
        <Skeleton
          padding={0}
          width={51}
          height={51}
        />
        <Skeleton
          padding={0}
          width={356}
          height={19}
        />
        <Skeleton
          padding={0}
          width={271}
          height={19}
        />
        <Skeleton
          padding={0}
          width={305}
          height={19}
        />
      </S.PlayListTrack>
      </S.ContentPlaylist>
    )}

    </S.PlaylistItem>
  )
}

export default Track
