import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={props.width}
    height={props.height}
    viewBox={`0 0 ${props.width} ${props.height}`}
    backgroundColor="#1f1f1f"
    foregroundColor="#313131"
    {...props}
  >
    <rect x={0} y={0} rx="0" ry="0" width={props.width} height={props.height} />
  </ContentLoader>
);

export default Skeleton;