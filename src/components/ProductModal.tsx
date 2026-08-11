'use client'
import { useEffect, useRef } from 'react'
import { Product } from '@/types'
import Link from 'next/link'

interface ProductModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      closeButtonRef.current?.focus()
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose()
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  if (!isOpen || !product) return null

  const whatsappMessage = encodeURIComponent(
    `Olá, gostaria de solicitar informações e orçamento para o produto ${product.name}, referência ${product.ref}.`
  )

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose()
      }}
      role="dialog"
      aria-modal="true"
      aria-label={`Detalhes do produto ${product.name}`}
    >
      <div className="bg-white rounded-sm max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-offset border border-tech-gray/30">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-xs text-brand-blue uppercase tracking-wider">
              {product.ref}
            </span>
            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="p-1 text-dark-gray hover:text-navy transition-colors rounded-sm focus:outline-none focus:ring-2 focus:ring-safety-yellow"
              aria-label="Fechar"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <h2 className="font-display text-2xl font-bold text-navy mb-4">
            {product.name}
          </h2>

          <div className="space-y-3 mb-6">
            <div>
              <span className="label-tech text-dark-gray">Graduação</span>
              <p className="font-mono text-sm text-navy">{product.graduation}</p>
            </div>
            <div>
              <span className="label-tech text-dark-gray">Apresentação</span>
              <p className="font-mono text-sm text-navy">{product.size}</p>
            </div>
            <div>
              <span className="label-tech text-dark-gray">Categoria</span>
              <p className="font-body text-sm text-navy">
                {product.category === 'tauipe' ? 'Tauípe Limpeza' : 'Puro-Álcool'}
              </p>
            </div>
            <div>
              <span className="label-tech text-dark-gray">Descrição</span>
              <p className="font-body text-sm text-dark-gray">{product.desc}</p>
            </div>
            {product.restricted && (
              <div className="bg-fire-orange/5 border border-fire-orange/30 p-3 rounded-sm">
                <p className="font-body text-xs text-fire-orange flex items-center gap-2">
                  <span>⚠</span>
                  Produto de uso profissional. Consulte o rótulo e a documentação técnica.
                </p>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-tech-gray/20 text-dark-gray font-mono text-[10px] uppercase tracking-wider rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={`https://wa.me/5519999999999?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-safety inline-block text-center"
            >
              Solicitar via WhatsApp
            </a>
            <Link
              href={`/contato?intent=orcamento&produto=${encodeURIComponent(product.name)}&ref=${product.ref}`}
              className="btn-primary inline-block text-center"
            >
              Solicitar orçamento
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}