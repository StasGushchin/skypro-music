import React, { useEffect, useState } from "react";
import NavMenu from "../components/NavMenu/NavMenu";
import AudioPlayer from "../components/AudioPlayer/AudioPlayer";
import Tracklist from "../components/Tracklist/Tracklist";
import Sidebar from "../components/Sidebar/Sidebar";
import * as S from '../App.styles'
import { getEntireTrack } from "../api";

export const MainPage = ({removeAuth}) => {

const [activeTrack, setActiveTrack] = useState(null);
const [entireTrack, setEntireTrack] = useState([])
const [trackId, setTrackId] = useState(null);


useEffect(() => {
  if (activeTrack) {
    getEntireTrack(setEntireTrack, activeTrack);
  }
}, [activeTrack]);


    return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <NavMenu/>
          <Tracklist setTrackId={setTrackId} setActiveTrack={setActiveTrack}/>
          <Sidebar removeAuth={removeAuth}/>
        </S.Main>
          {activeTrack ? <AudioPlayer trackId={trackId} entireTrack={entireTrack} /> : null}
      </S.Container>
    </S.Wrapper>

      
    );
  }

  export default MainPage;