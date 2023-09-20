import React from "react"
import Skeleton from '../Skeleton/Skeleton'


function Track() {
  return (
    <div className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          {/* <div className="track__title-image">
            <svg className="track__title-svg" alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </svg>
          </div> */}
          <Skeleton className="track__title-image track__title-image__skeleton" width={51} height={51}
          />
          {/* <div className="track__title-text">
            <a className="track__title-link" href="http://">
              Guilt <span className="track__title-span"></span>
            </a>
          </div> */}
          <Skeleton className="track__title-text track__title-image__skeleton" width={356} height={19}
          />
        </div>
        {/* <div className="track__author">
          <a className="track__author-link" href="http://">
            Nero
          </a>
        </div> */}
        <Skeleton className="track__author track__title-image__skeleton" width={271} height={19}
        />
        {/* <div className="track__album">
          <a className="track__album-link" href="http://">
            Welcome Reality
          </a>
        </div> */}
        <Skeleton className="track__album track__title-image__skeleton" width={305} height={19}
        />
        <div className="track__time">
          <svg className="track__time-svg" alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </svg>
          <span className="track__time-text">4:44</span>
        </div>
      </div>
    </div>
  )
}

export default Track
