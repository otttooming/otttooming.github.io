import * as React from "react"
import ImageWithZoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"

function ImageZoom(props) {
  const image = {
    ...props,
    className: "Image__Zoom",
    style: {
      display: "block",
      margin: "0 auto",
      width: "100%",
      borderRadius: "5px",
    },
  }

  return (
    <ImageWithZoom>
      <img {...image} />
    </ImageWithZoom>
  )
}

export default ImageZoom
