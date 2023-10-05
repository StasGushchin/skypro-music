import React from "react";
// import NavMenu from "./components/NavMenu/NavMenu";
// import AudioPlayer from "../AudioPlayer/AudioPlayer";
// import Tracklist from "../Track/Tracklist";
// import Sidebar from "../Sidebar/Sidebar";
// import * as S from './App.styles'

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