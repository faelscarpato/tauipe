interface PlaceholderImageProps {
  text: string
  className?: string
  width?: number
  height?: number
}

export default function PlaceholderImage({ text, className = '', width = 800, height = 600 }: PlaceholderImageProps) {
  return (
    <div
      className={`flex items-center justify-center bg-dark-gray/20 border-2 border-dashed border-tech-gray rounded-sm ${className}`}
      style={{ aspectRatio: `${width}/${height}` }}
    >
      <div className="text-center px-4">
        <span className="font-mono text-xs text-dark-gray uppercase tracking-widest">
          IMAGE_PLACEHOLDER
        </span>
        <p className="text-sm text-dark-gray/70 mt-1 font-body">
          {text}
        </p>
      </div>
    </div>
  )
}