'use client'
import { Product } from '@/types'

interface ProductCardProps {
  product: Product
  onClick: () => void
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <button
      onClick={onClick}
      className={`text-left bg-white border rounded-sm p-6 shadow-industrial hover:shadow-offset transition-all w-full focus:outline-none focus:ring-2 focus:ring-safety-yellow ${
        product.restricted ? 'border-fire-orange/30' : 'border-tech-gray/30'
      }`}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-xs text-brand-blue uppercase tracking-wider">
          {product.ref}
        </span>
        <div className="flex gap-2">
          {product.highlight && (
            <span className="px-2 py-0.5 bg-safety-yellow/20 text-navy font-mono text-[10px] uppercase tracking-wider rounded-sm">
              Destaque
            </span>
          )}
          {product.restricted && (
            <span className="px-2 py-0.5 bg-fire-orange/10 text-fire-orange font-mono text-[10px] uppercase tracking-wider rounded-sm">
              Uso profissional
            </span>
          )}
        </div>
      </div>
      <h3 className="font-display text-lg font-bold text-navy mb-2">
        {product.name}
      </h3>
      <p className="font-mono text-xs text-dark-gray mb-2">
        {product.graduation}
      </p>
      <p className="font-mono text-xs text-tech-gray mb-3">
        {product.size}
      </p>
      <p className="font-body text-sm text-dark-gray line-clamp-2">
        {product.desc}
      </p>
      <span className="inline-block mt-3 text-brand-blue font-mono text-xs uppercase tracking-wider">
        Ver detalhes →
      </span>
    </button>
  )
}