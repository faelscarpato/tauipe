import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import PlaceholderImage from '@/components/PlaceholderImage'

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Entre em contato com a Tauípe | JH Química. Solicite orçamentos, documentação ou fale com nossa equipe comercial.',
}

export default function ContatoPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Início', href: '/' }, { label: 'Contato' }]} />
      </div>

      <section className="section-container">
        <h1 className="font-display text-4xl font-bold text-navy mb-4 text-center">
          Fale com a Tauípe
        </h1>
        <p className="font-body text-dark-gray text-center max-w-xl mx-auto mb-12">
          Solicite orçamentos, documentação técnica ou tire dúvidas sobre nossos produtos.
          Nossa equipe está pronta para atender você.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-2xl font-bold text-navy mb-4">
                Informações de contato
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-safety-yellow text-xl mt-0.5">📍</span>
                  <div>
                    <p className="font-body font-medium text-navy">Endereço</p>
                    <address className="not-italic font-body text-dark-gray">
                      Rua Maximino Rossignoli, 50 e 53<br />
                      Jardim Emília — Pedreira — SP<br />
                      CEP 13928-204
                    </address>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-safety-yellow text-xl mt-0.5">📞</span>
                  <div>
                    <p className="font-body font-medium text-navy">Telefone</p>
                    <a href="tel:+5519999999999" className="font-body text-dark-gray hover:text-brand-blue transition-colors">
                      (19) 99999-9999
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-safety-yellow text-xl mt-0.5">✉️</span>
                  <div>
                    <p className="font-body font-medium text-navy">E-mail</p>
                    <a href="mailto:contato@tauipe.com.br" className="font-body text-dark-gray hover:text-brand-blue transition-colors">
                      contato@tauipe.com.br
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-safety-yellow text-xl mt-0.5">💬</span>
                  <div>
                    <p className="font-body font-medium text-navy">WhatsApp</p>
                    <a
                      href="https://wa.me/5519999999999"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-dark-gray hover:text-brand-blue transition-colors"
                    >
                      Iniciar conversa
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-navy mb-4">
                Links rápidos
              </h2>
              <div className="flex flex-wrap gap-3">
                <Link href="/catalogo" className="btn-primary text-sm">
                  Catálogo de produtos
                </Link>
                <Link href="/documentacao" className="btn-secondary text-sm">
                  Documentação técnica
                </Link>
                <Link href="/seja-revendedor" className="btn-secondary text-sm">
                  Seja revendedor
                </Link>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div className="bg-tech-gray/20 rounded-sm h-80 flex items-center justify-center">
            <PlaceholderImage text="Google Maps — Pedreira, SP" />
          </div>
        </div>
      </section>
    </>
  )
}