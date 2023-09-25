import React, { useState } from 'react'
import Skeleton from '../Skeleton/Skeleton'

function Track() {
  const [isVisible, setIsVisible] = useState(false)

  setTimeout(() => {
    setIsVisible(true)
  }, 4000)

  let TrackItem = isVisible ? (
    <div class="playlist__track track">
      <div class="track__title">
        <div class="track__title-image">
          <svg class="track__title-svg" alt="music">
            <use href="img/icon/sprite.svg#icon-note"></use>
          </svg>
        </div>
        <div class="track__title-text">
          <a class="track__title-link" href="http://">
            Guilt <span class="track__title-span"></span>
          </a>
        </div>
      </div>
      <div class="track__author">
        <a class="track__author-link" href="http://">
          Nero
        </a>
      </div>
      <div class="track__album">
        <a class="track__album-link" href="http://">
          Welcome Reality
        </a>
      </div>
      <div class="track__time">
        <svg class="track__time-svg" alt="time">
          <use href="img/icon/sprite.svg#icon-like"></use>
        </svg>
        <span class="track__time-text">4:44</span>
      </div>
    </div>
  ) : (
    <div className="playlist__track track">
      <Skeleton
        className="track__title-image track__title-image__skeleton"
        width={51}
        height={51}
      />
      <Skeleton
        className="track__title-text track__title-image__skeleton"
        width={356}
        height={19}
      />
      <Skeleton
        className="track__author track__title-image__skeleton"
        width={271}
        height={19}
      />
      <Skeleton
        className="track__album track__title-image__skeleton"
        width={305}
        height={19}
      />
    </div>
  )

  return (
    <div className="playlist__item">
      
      {TrackItem}

    </div>
  )
}

export default Track
