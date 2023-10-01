import './App.css';
import AudioPlayer from './components/AudioPlayer/AudioPlayer';
import NavMenu from './components/NavMenu/NavMenu';
import Sidebar from './components/Sidebar/Sidebar';
import Tracklist from './components/Tracklist/Tracklist';
import { createGlobalStyle } from 'styled-components'
import * as S from './App.styles'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  
  *&:before,
  *&:after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  
  a,
  a:visited {
    text-decoration: none;
    font-family: "StratosSkyeng", sans-serif;
    cursor: pointer;
  }
  
  button,
  ._btn {
    cursor: pointer;
  }
  
  ul li {
    list-style: none;
  }
  
  @font-face {
    font-family: "StratosSkyeng";
    src: local("StratosSkyeng"), local("StratosSkyeng"),
      url("../public/fonts/StratosSkyeng.woff2") format("woff2"),
      url("../public/fonts/StratosSkyeng.woff") format("woff");
    font-weight: 400;
    font-style: normal;
  }
  
  html,
  body {
    width: 100%;
    height: 100%;
    font-family: "StratosSkyeng", sans-serif;
    color: #ffffff;
  }
  
`;


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
  <GlobalStyle/>
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
</html>
  );
}

export default App;