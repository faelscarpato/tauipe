'use client'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

type NavLink =
  | { href: string; label: string }
  | { label: string; children: { href: string; label: string }[] }

const navLinks: NavLink[] = [
  { href: '/', label: 'Início' },
  {
    label: 'Produtos',
    children: [
      { href: '/puro-alcool', label: 'Puro-Álcool' },
      { href: '/tauipe-limpeza', label: 'Tauípe Limpeza' },
      { href: '/catalogo', label: 'Catálogo Completo' },
    ],
  },
  { href: '/empresa', label: 'A Empresa' },
  { href: '/catalogo', label: 'Catálogo' },
  { href: '/documentacao', label: 'Documentação' },
  { href: '/seja-revendedor', label: 'Seja Revendedor' },
  { href: '/contato', label: 'Contato' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setProductsOpen(false)
  }, [pathname])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const closeMobile = useCallback(() => {
    setMobileOpen(false)
  }, [])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMobile()
      }
      if (e.key === 'Tab' && mobileOpen) {
        const focusableElements = document.querySelectorAll(
          '#mobile-menu a, #mobile-menu button, #mobile-menu input'
        )
        const firstFocusable = focusableElements[0] as HTMLElement
        const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement

        if (e.shiftKey) {
          if (document.activeElement === firstFocusable) {
            e.preventDefault()
            lastFocusable?.focus()
          }
        } else {
          if (document.activeElement === lastFocusable) {
            e.preventDefault()
            firstFocusable?.focus()
          }
        }
      }
    },
    [mobileOpen, closeMobile]
  )

  return (
    <header
      className={clsx(
        'sticky top-0 z-40 w-full transition-all duration-300',
        scrolled
          ? 'bg-navy/95 backdrop-blur-sm shadow-industrial border-b border-tech-gray/20'
          : 'bg-navy border-b border-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-safety-yellow rounded-sm">
            <Image
              src="/brand_blue-light.png"
              alt="Tauípe"
              width={140}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navegação principal">
            {navLinks.map((link) => {
              if ('children' in link) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setProductsOpen(true)}
                    onMouseLeave={() => setProductsOpen(false)}
                  >
                    <button
                      className={clsx(
                        'px-3 py-2 font-body text-sm uppercase tracking-wider transition-colors rounded-sm focus:outline-none focus:ring-2 focus:ring-safety-yellow',
                        productsOpen || pathname.startsWith('/puro-alcool') || pathname.startsWith('/tauipe-limpeza')
                          ? 'text-safety-yellow'
                          : 'text-tech-gray hover:text-off-white'
                      )}
                      aria-expanded={productsOpen}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <svg className="inline-block ml-1 w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {productsOpen && (
                      <div className="absolute top-full left-0 mt-1 bg-navy border border-tech-gray/30 rounded-sm shadow-offset py-2 min-w-[220px] z-50">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={clsx(
                              'block px-4 py-2 font-body text-sm transition-colors',
                              pathname === child.href
                                ? 'text-safety-yellow bg-brand-blue/20'
                                : 'text-tech-gray hover:text-off-white hover:bg-brand-blue/10'
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    'px-3 py-2 font-body text-sm uppercase tracking-wider transition-colors rounded-sm focus:outline-none focus:ring-2 focus:ring-safety-yellow',
                    pathname === link.href
                      ? 'text-safety-yellow'
                      : 'text-tech-gray hover:text-off-white'
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
            <Link
              href="/contato?intent=orcamento"
              className="ml-4 px-4 py-2 bg-safety-yellow text-navy font-mono text-xs uppercase tracking-widest font-bold rounded-sm hover:bg-safety-yellow/90 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-safety-yellow focus:ring-offset-navy"
            >
              Solicitar Orçamento
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-tech-gray hover:text-off-white focus:outline-none focus:ring-2 focus:ring-safety-yellow rounded-sm"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={clsx(
          'lg:hidden fixed inset-0 top-16 bg-navy z-50 transition-transform duration-300',
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        onKeyDown={handleKeyDown}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
      >
        <nav className="flex flex-col p-6 gap-2 overflow-y-auto max-h-[calc(100vh-4rem)]">
          {navLinks.map((link) => {
            if ('children' in link) {
              return (
                <div key={link.label} className="border-b border-tech-gray/20 pb-2">
                  <p className="font-mono text-xs uppercase tracking-widest text-tech-gray mb-2">
                    {link.label}
                  </p>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={closeMobile}
                      className={clsx(
                        'block py-3 px-4 font-body text-base rounded-sm transition-colors',
                        pathname === child.href
                          ? 'text-safety-yellow bg-brand-blue/20'
                          : 'text-off-white hover:bg-brand-blue/10'
                      )}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className={clsx(
                  'py-3 px-4 font-body text-base uppercase tracking-wider rounded-sm transition-colors border-b border-tech-gray/20',
                  pathname === link.href
                    ? 'text-safety-yellow bg-brand-blue/20'
                    : 'text-off-white hover:bg-brand-blue/10'
                )}
              >
                {link.label}
              </Link>
            )
          })}
          <Link
            href="/contato?intent=orcamento"
            onClick={closeMobile}
            className="mt-4 px-6 py-3 bg-safety-yellow text-navy font-mono text-sm uppercase tracking-widest font-bold rounded-sm text-center hover:bg-safety-yellow/90 transition-all"
          >
            Solicitar Orçamento
          </Link>
        </nav>
      </div>
    </header>
  )
}