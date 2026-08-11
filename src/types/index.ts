export interface Product {
  ref: string
  name: string
  graduation: string
  category: 'tauipe' | 'puro'
  size: string
  desc: string
  highlight?: boolean
  restricted?: boolean
  tags: string[]
}

export interface CatalogFilters {
  category: 'all' | 'tauipe' | 'puro'
  graduation: string
  restricted: boolean | null
  search: string
}

export interface NewsletterFormData {
  name?: string
  email: string
  consent: boolean
}