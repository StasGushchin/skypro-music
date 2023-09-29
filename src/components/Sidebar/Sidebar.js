import React, { useState } from 'react'
import Skeleton from '../Skeleton/Skeleton'
import * as S from './Sidebar.styles'

function Sidebar() {
  const [isVisible, setIsVisible] = useState(false)

  setTimeout(() => {
    setIsVisible(true)
  }, 4000)

  let SideBarItem = isVisible ? (
    <S.SidebarList>
      <S.SidebarItem>
        <S.SidebarLink href="#">
          <S.SidebarImg
            src="img/playlist01.png"
            alt="day's playlist"
          />
        </S.SidebarLink>
      </S.SidebarItem>

      <S.SidebarItem>
        <S.SidebarLink href="#">
          <S.SidebarImg
            src="img/playlist02.png"
            alt="day's playlist"
          />
        </S.SidebarLink>
      </S.SidebarItem>

      <S.SidebarItem>
        <S.SidebarLink href="#">
          <S.SidebarImg
            src="img/playlist03.png"
            alt="day's playlist"
          />
        </S.SidebarLink>
      </S.SidebarItem>
    </S.SidebarList>
  ) : (
    <S.SidebarList>
      <Skeleton
        className="sidebar__item"
        width={250}
        height={150}
      />
      <Skeleton
        className="sidebar__item"
        width={250}
        height={150}
      />
      <Skeleton
        className="sidebar__item"
        width={250}
        height={150}
      />
    </S.SidebarList>
  )

  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
        <S.SidebarIcon>
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
