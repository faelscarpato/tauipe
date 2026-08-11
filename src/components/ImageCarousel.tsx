'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

interface ImageCarouselProps {
  images: Array<{ src: string; alt: string }>
  className?: string
  interval?: number
}

export default function ImageCarousel({ images, className = '', interval = 4500 }: ImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length)
    }, interval)

    return () => window.clearInterval(timer)
  }, [images.length, interval])

  return (
    <div className={`relative overflow-hidden rounded-sm ${className}`}>
      <div className="relative aspect-[4/3] w-full">
        {images.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === activeIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            aria-hidden={index !== activeIndex}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`block h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
              index === activeIndex ? 'bg-safety-yellow' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
