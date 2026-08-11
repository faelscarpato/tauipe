'use client'

interface CatalogSearchProps {
  value: string
  onChange: (value: string) => void
}

export default function CatalogSearch({ value, onChange }: CatalogSearchProps) {
  return (
    <div className="relative w-full md:w-80">
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar por nome, ref ou tag..."
        className="w-full pl-10 pr-4 py-2.5 bg-white border border-tech-gray rounded-sm font-body text-sm text-navy placeholder-tech-gray focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors"
        aria-label="Buscar produtos"
      />
      <svg
        className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-tech-gray"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-tech-gray hover:text-navy transition-colors"
          aria-label="Limpar busca"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  )
}