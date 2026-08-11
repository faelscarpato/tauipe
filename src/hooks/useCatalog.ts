'use client'
import { useState, useMemo } from 'react'
import { Product, CatalogFilters } from '@/types'
import { allProducts } from '@/data/products'

export function useCatalog() {
  const [filters, setFilters] = useState<CatalogFilters>({
    category: 'all',
    graduation: '',
    restricted: null,
    search: '',
  })
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      if (filters.category !== 'all' && product.category !== filters.category) {
        return false
      }
      if (filters.graduation && product.graduation !== filters.graduation) {
        return false
      }
      if (filters.restricted !== null && product.restricted !== filters.restricted) {
        return false
      }
      if (filters.search) {
        const searchLower = filters.search.toLowerCase()
        const matchesSearch =
          product.name.toLowerCase().includes(searchLower) ||
          product.ref.toLowerCase().includes(searchLower) ||
          product.tags.some((tag) => tag.toLowerCase().includes(searchLower))
        if (!matchesSearch) return false
      }
      return true
    })
  }, [filters])

  const openProductModal = (product: Product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const closeProductModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProduct(null), 200)
  }

  return {
    filters,
    setFilters,
    filteredProducts,
    selectedProduct,
    isModalOpen,
    openProductModal,
    closeProductModal,
  }
}