import AudioPlayer from './components/AudioPlayer/AudioPlayer';
import NavMenu from './components/NavMenu/NavMenu';
import Sidebar from './components/Sidebar/Sidebar';
import Tracklist from './components/Tracklist/Tracklist';
import * as S from './App.styles'

export const MainPage = () => {
    return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <NavMenu/>
          <Tracklist/>
          <Sidebar/>
        </S.Main>
          <AudioPlayer/>
      </S.Container>
    </S.Wrapper>

      
    );
  }

  export default MainPage;