import './App.css';
import AudioPlayer from './components/AudioPlayer/AudioPlayer';
import NavMenu from './components/NavMenu/NavMenu';
import Sidebar from './components/Sidebar/Sidebar';
import Tracklist from './components/Tracklist/Tracklist';
import GlobalStyle from './createGlobal.styles'
import * as P from './createGlobal.styles';
import * as S from './App.styles'



function App() {
  return (
<html lang="ru">
  <head>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="stylesheet" href="css/style.css" />
    <title>Skypro</title>
  </head>
  <P.GlobalStyle>
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <NavMenu/>
          <Tracklist/>
          <Sidebar/>
        </S.Main>
          <AudioPlayer/>
        <footer className="footer"/>
      </S.Container>
    </S.Wrapper>
  </P.GlobalStyle>
</html>
  );
}

export default App;