'use client'
import { CatalogFilters as FiltersType } from '@/types'
import { graduations } from '@/data/products'

interface CatalogFiltersProps {
  filters: FiltersType
  onChange: (filters: FiltersType) => void
}

export default function CatalogFilters({ filters, onChange }: CatalogFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {/* Categoria */}
      <select
        value={filters.category}
        onChange={(e) => onChange({ ...filters, category: e.target.value as FiltersType['category'] })}
        className="px-3 py-2.5 bg-white border border-tech-gray rounded-sm font-body text-sm text-navy focus:outline-none focus:border-brand-blue"
        aria-label="Filtrar por categoria"
      >
        <option value="all">Todas as categorias</option>
        <option value="tauipe">Tauípe Limpeza</option>
        <option value="puro">Puro-Álcool</option>
      </select>

      {/* Graduação */}
      <select
        value={filters.graduation}
        onChange={(e) => onChange({ ...filters, graduation: e.target.value })}
        className="px-3 py-2.5 bg-white border border-tech-gray rounded-sm font-body text-sm text-navy focus:outline-none focus:border-brand-blue"
        aria-label="Filtrar por graduação"
      >
        <option value="">Todas as graduações</option>
        {graduations.map((grad) => (
          <option key={grad} value={grad}>
            {grad}
          </option>
        ))}
      </select>

      {/* Restrito */}
      <select
        value={filters.restricted === null ? '' : filters.restricted.toString()}
        onChange={(e) => {
          const val = e.target.value
          onChange({
            ...filters,
            restricted: val === '' ? null : val === 'true',
          })
        }}
        className="px-3 py-2.5 bg-white border border-tech-gray rounded-sm font-body text-sm text-navy focus:outline-none focus:border-brand-blue"
        aria-label="Filtrar por restrição"
      >
        <option value="">Todos os tipos</option>
        <option value="false">Uso geral</option>
        <option value="true">Uso profissional</option>
      </select>

      {/* Limpar */}
      {(filters.category !== 'all' || filters.graduation || filters.restricted !== null) && (
        <button
          onClick={() =>
            onChange({ category: 'all', graduation: '', restricted: null, search: filters.search })
          }
          className="px-3 py-2.5 text-fire-orange font-mono text-xs uppercase tracking-wider hover:underline"
        >
          Limpar filtros
        </button>
      )}
    </div>
  )
}