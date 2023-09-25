import React, { useState } from 'react'
import Skeleton from '../Skeleton/Skeleton'

function Sidebar() {
  const [isVisible, setIsVisible] = useState(false)

  setTimeout(() => {
    setIsVisible(true)
  }, 4000)

  let SideBarItem = isVisible ? (
    <div className="sidebar__list">
      <div className="sidebar__item">
        <a className="sidebar__link" href="#">
          <img
            className="sidebar__img"
            src="img/playlist01.png"
            alt="day's playlist"
          />
        </a>
      </div>

      <div className="sidebar__item">
        <a className="sidebar__link" href="#">
          <img
            className="sidebar__img"
            src="img/playlist02.png"
            alt="day's playlist"
          />
        </a>
      </div>

      <div className="sidebar__item">
        <a className="sidebar__link" href="#">
          <img
            className="sidebar__img"
            src="img/playlist03.png"
            alt="day's playlist"
          />
        </a>
      </div>
    </div>
  ) : (
    <div className="sidebar__list">
      <Skeleton
        className="sidebar__item track__title-image__skeleton"
        width={250}
        height={150}
      />
      <Skeleton
        className="sidebar__item track__title-image__skeleton"
        width={250}
        height={150}
      />
      <Skeleton
        className="sidebar__item track__title-image__skeleton"
        width={250}
        height={150}
      />
    </div>
  )

  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">Sergey.Ivanov</p>
        <div className="sidebar__icon">
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
        </div>
      </div>
      <div className="sidebar__block">
          
        {SideBarItem}

      </div>
    </div>
  )
}

export default Sidebar
