import React, { useState } from 'react'
import Skeleton from '../Skeleton/Skeleton'
import * as S from './Sidebar.styles'
import { useNavigate } from 'react-router-dom'
import cardImages from './CardImages'

function Sidebar({removeAuth}) {
  const [isVisible, setIsVisible] = useState(false)

  setTimeout(() => {
    setIsVisible(true)
  }, 4000)

  let SideBarItem = cardImages.map((cardImage) =>
    isVisible ? 
    (
      <S.SidebarList>
        <S.SidebarItem>
          <S.NewNavLink to={`/category/${cardImage.id}`}>
            <S.SidebarImg
              src={cardImage.src}
              key={cardImage.id}
              alt="day's playlist"
            />
          </S.NewNavLink>
        </S.SidebarItem>
      </S.SidebarList>
    ) : (
      <S.SidebarList>
  
        <S.SidebarItem>
          <Skeleton
          width={250}
          height={150}
          />
        </S.SidebarItem>
        
      </S.SidebarList>
    )
  );

  // const handleLogOut = () => {
  //   localStorage.removeItem("user");
  // };

  // const navigate = useNavigate();

  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>Stas Gushchin</S.SidebarPersonalName>
        <S.SidebarIcon
        onClick={
          removeAuth
        }>
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
        </S.SidebarIcon>
      </S.SidebarPersonal>
      <S.SidebarBlock>
          
        {SideBarItem}

      </S.SidebarBlock>
    </S.MainSidebar>
  )
}

export default Sidebar
