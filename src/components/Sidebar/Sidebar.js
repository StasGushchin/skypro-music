import React, { useState } from 'react'
import Skeleton from '../Skeleton/Skeleton'
import * as S from './Sidebar.styles'
import { useNavigate } from 'react-router-dom'

function Sidebar() {
  const [isVisible, setIsVisible] = useState(false)

  setTimeout(() => {
    setIsVisible(true)
  }, 4000)

  let SideBarItem = isVisible ? (
    <S.SidebarList>
      <S.SidebarItem>
        <S.NewNavLink to="/category1">
          <S.SidebarImg
            src="img/playlist01.png"
            alt="day's playlist"
          />
        </S.NewNavLink>
      </S.SidebarItem>

      <S.SidebarItem>
        <S.NewNavLink to="/category2">
          <S.SidebarImg
            src="img/playlist02.png"
            alt="day's playlist"
          />
        </S.NewNavLink>
      </S.SidebarItem>

      <S.SidebarItem>
        <S.NewNavLink to="/category3">
          <S.SidebarImg
            src="img/playlist03.png"
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

      <S.SidebarItem>
        <Skeleton
        width={250}
        height={150}
        />
      </S.SidebarItem>

      <S.SidebarItem>
        <Skeleton
        width={250}
        height={150}
        />
      </S.SidebarItem>
      
    </S.SidebarList>
  )

  const handleLogOut = () => {
    localStorage.removeItem("user");
  };

  const navigate = useNavigate();

  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
        <S.SidebarIcon
        onClick={() => {
          handleLogOut();
          navigate("/login", { replace: false });
        }}>
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
