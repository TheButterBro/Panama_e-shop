import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
    speed={2}
    width={280}
    height={350}
    viewBox="0 0 298 350"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="38" y="20" rx="3" ry="3" width="220" height="190" /> 
    <rect x="233" y="289" rx="3" ry="3" width="32" height="31" /> 
    <rect x="29" y="238" rx="3" ry="3" width="240" height="22" /> 
    <rect x="31" y="281" rx="3" ry="3" width="57" height="53" />
  </ContentLoader>
)

export default Skeleton