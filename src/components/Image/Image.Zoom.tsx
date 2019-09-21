import * as React from "react"
import ImageWithZoom from "react-medium-image-zoom"
import { theme } from "@coterminous/ui"

function handleImageZoomBackground(background: string) {
  const images = Array.from(document.getElementsByClassName("Image__Zoom"))

  return images.map(img => {
    if (img.previousElementSibling.tagName === "DIV") {
      img.previousElementSibling.style.background = background
    }
  })
}

function ImageZoom(props) {
  console.dir(props)

  const image = {
    ...props,
    className: "Image__Zoom",
    style: {
      display: "block",
      margin: "0 auto",
      width: "100%",
    },
  }

  return (
    <ImageWithZoom
      image={image}
      zoomImage={image}
      onZoom={() => handleImageZoomBackground(theme.backgroundColor.primary)}
      defaultStyles={{
        zoomImage: {
          borderRadius: "5px",
        },
      }}
    />
  )
}

export default ImageZoom
