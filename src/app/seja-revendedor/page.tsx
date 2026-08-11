import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Seja Revendedor',
  description: 'Torne-se um revendedor ou distribuidor dos produtos Tauípe e amplie seu portfólio com produtos de qualidade.',
}

const benefits = [
  {
    title: 'Portfólio diversificado',
    desc: 'Acesso às linhas Tauípe Limpeza e Puro-Álcool, com produtos para diferentes perfis de cliente e operação.',
  },
  {
    title: 'Atendimento comercial',
    desc: 'Equipe preparada para oferecer suporte comercial e informações técnicas sobre os produtos.',
  },
  {
    title: 'Fornecimento recorrente',
    desc: 'Possibilidade de fornecimento contínuo para operações que demandam regularidade e escala.',
  },
  {
    title: 'Estrutura para distribuição',
    desc: 'Localização estratégica em Pedreira (SP) com acesso logístico regional facilitado.',
  },
  {
    title: 'Documentação técnica',
    desc: 'Acesso a FISPQ, FDS e documentação regulatória para suporte às vendas B2B.',
  },
  {
    title: 'Flexibilidade comercial',
    desc: 'Modelos de parceria adaptáveis ao perfil e volume de operação de cada revendedor.',
  },
]

export default function SejaRevendedorPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Início', href: '/' }, { label: 'Seja Revendedor' }]} />
      </div>

      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="label-tech text-safety-yellow mb-4 block">Parceria B2B</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-off-white leading-tight mb-6">
              Sua operação pode crescer<br />
              <span className="text-safety-yellow">com a Tauípe</span>
            </h1>
            <p className="text-lg text-tech-gray font-body">
              Seja um revendedor ou distribuidor dos produtos Tauípe. Amplie seu portfólio
              com produtos de qualidade, documentação técnica completa e suporte comercial.
            </p>
          </div>
        </div>
      </section>

      <section className="section-container">
        <h2 className="font-display text-3xl font-bold text-navy mb-10 text-center">
          Por que ser um parceiro Tauípe?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white border border-tech-gray/30 rounded-sm p-6 shadow-industrial"
            >
              <h3 className="font-display text-xl font-bold text-navy mb-3">
                {benefit.title}
              </h3>
              <p className="font-body text-dark-gray text-sm">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-off-white section-container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-navy mb-4">
            Interessado em revender?
          </h2>
          <p className="font-body text-dark-gray mb-8">
            Entre em contato com nossa equipe comercial para conhecer as condições
            de parceria, preços e disponibilidade de produtos para revenda.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contato" className="btn-primary">
              Falar com a equipe comercial
            </Link>
            <a
              href="https://wa.me/5519999999999?text=Olá, tenho interesse em me tornar revendedor dos produtos Tauípe."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-safety"
            >
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}