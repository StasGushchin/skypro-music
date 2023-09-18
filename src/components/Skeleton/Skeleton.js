import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    className="sidebar__item"
    speed={2}
    width={250}
    height={150}
    viewBox="0 0 250 150"
    backgroundColor="#1f1f1f"
    foregroundColor="#313131"
    {...props}
  >
    <rect x="5" y="-12" rx="0" ry="0" width="250" height="150" />
  </ContentLoader>
)

export default Skeleton