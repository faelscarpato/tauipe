'use client'
import { useState } from 'react'
import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import ProductCard from '@/components/ProductCard'
import ProductModal from '@/components/ProductModal'
import CatalogFilters from '@/components/CatalogFilters'
import CatalogSearch from '@/components/CatalogSearch'
import { useCatalog } from '@/hooks/useCatalog'

export default function CatalogoPage() {
  const {
    filters,
    setFilters,
    filteredProducts,
    selectedProduct,
    isModalOpen,
    openProductModal,
    closeProductModal,
  } = useCatalog()

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Início', href: '/' }, { label: 'Catálogo' }]} />
      </div>

      {/* Header */}
      <section className="bg-navy py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold text-off-white mb-4">
            Catálogo de Produtos
          </h1>
          <p className="font-body text-tech-gray max-w-xl">
            Pesquise e filtre por nome, referência, categoria ou graduação.
            Encontre o produto certo para sua operação.
          </p>
        </div>
      </section>

      {/* Filtros e Busca */}
      <section className="bg-off-white border-b border-tech-gray/30 sticky top-16 md:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <CatalogSearch
              value={filters.search}
              onChange={(search) => setFilters({ ...filters, search })}
            />
            <CatalogFilters
              filters={filters}
              onChange={setFilters}
            />
          </div>
        </div>
      </section>

      {/* Lista de Produtos */}
      <section className="section-container">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <p className="font-display text-2xl text-dark-gray mb-2">
              Nenhum produto encontrado
            </p>
            <p className="font-body text-tech-gray">
              Tente ajustar os filtros ou o termo de busca.
            </p>
            <button
              onClick={() =>
                setFilters({ category: 'all', graduation: '', restricted: null, search: '' })
              }
              className="mt-4 text-brand-blue font-mono text-sm uppercase tracking-wider hover:underline"
            >
              Limpar todos os filtros
            </button>
          </div>
        ) : (
          <>
            <p className="font-mono text-xs text-dark-gray mb-6">
              {filteredProducts.length} produto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.ref}
                  product={product}
                  onClick={() => openProductModal(product)}
                />
              ))}
            </div>
          </>
        )}
      </section>

      {/* Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeProductModal}
      />
    </>
  )
}