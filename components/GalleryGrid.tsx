import type { GalleryImage } from '@/lib/types'

interface GalleryGridProps {
  images: GalleryImage[]
}

export function GalleryGrid({ images }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map(image => (
        <div
          key={image.id}
          className="relative group overflow-hidden rounded-lg cursor-pointer h-64 bg-muted"
        >
          {image.src && image.src !== '/images/placeholder.png' ? (
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-6xl">
              📸
            </div>
          )}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
            <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-center">
              <p className="font-semibold">{image.title}</p>
              <p className="text-sm text-white/80 capitalize">{image.category}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
