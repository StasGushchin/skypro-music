import Filter from '../Filter/Filter'
import Track from '../Track/Track'
import * as S from './Tracklist.styles'

function Tracklist({setActiveTrack}) {

  return (
    <S.MainCenterblock>
      <S.CenterblockSearch>
        <S.SearchSvg>
          <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
        </S.SearchSvg>
        <S.SearchText
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </S.CenterblockSearch>
      <S.CenterBlockH2>Треки</S.CenterBlockH2>

      <Filter/>

      <S.CenterBlock>
        <S.ContentTitle>
          <S.PlaylistTitleTrack>Трек</S.PlaylistTitleTrack>
          <S.PlaylistTitleSinger>ИСПОЛНИТЕЛЬ</S.PlaylistTitleSinger>
          <S.PlaylistTitleAlbum>АЛЬБОМ</S.PlaylistTitleAlbum>
          <S.PlaylistTitleTime>
            <S.PlaylistTitle alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
            </S.PlaylistTitle>
          </S.PlaylistTitleTime>
        </S.ContentTitle>
          <Track setActiveTrack={setActiveTrack}/>
      </S.CenterBlock>
    </S.MainCenterblock>
  )
}

export default Tracklist
