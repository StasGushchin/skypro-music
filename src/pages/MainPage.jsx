import React, { useEffect, useState } from "react";
import NavMenu from "../components/NavMenu/NavMenu";
import AudioPlayer from "../components/AudioPlayer/AudioPlayer";
import Tracklist from "../components/Tracklist/Tracklist";
import Sidebar from "../components/Sidebar/Sidebar";
import * as S from '../App.styles'

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