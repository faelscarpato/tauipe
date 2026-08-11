'use client'
import { useEffect, useRef } from 'react'

const messages = [
  'Produtos para limpeza',
  'Soluções para food service',
  'Atendimento B2B',
  'Documentação técnica',
  'Distribuição e revenda',
]

export default function SafetyMarquee() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div
      className="bg-safety-yellow overflow-hidden py-3 border-y-2 border-navy"
      role="marquee"
      aria-label="Informações sobre produtos e serviços"
    >
      <div
        ref={containerRef}
        className="flex gap-12 animate-marquee motion-reduce:animate-none"
        style={{ width: 'max-content' }}
      >
        {/* Duplicar para loop contínuo */}
        {[...messages, ...messages].map((msg, i) => (
          <span
            key={i}
            className="font-mono text-sm text-navy font-bold uppercase tracking-widest whitespace-nowrap"
          >
            {msg}
          </span>
        ))}
      </div>
    </div>
  )
}