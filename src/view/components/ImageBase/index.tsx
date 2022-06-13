import React from 'react'
import Image from 'next/image'

export type ImageBaseProps = {
  width: number
  height: number
  src: string
  alt?: string
}

const ImageBase = ({ width, height, src, alt }: ImageBaseProps) => {
  return <Image width={width} height={height} src={src} alt={alt} />
}

export default ImageBase
