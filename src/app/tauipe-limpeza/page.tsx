import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import PlaceholderImage from '@/components/PlaceholderImage'

export const metadata: Metadata = {
  title: 'Tauípe Limpeza',
  description: 'Linha Tauípe Limpeza — produtos à base de álcool líquido para limpeza doméstica, profissional e industrial.',
}

const products = [
  {
    name: 'Álcool Líquido com Bicarbonato de Sódio',
    ref: 'TAU-BIC-46',
    graduation: '46,2° INPM',
    size: 'Frasco 1L / Cx 12un',
    desc: 'Formulação exclusiva para remoção de gorduras impregnadas, saponificação química e neutralização de odores.',
    highlight: true,
    restricted: false,
  },
  {
    name: 'Álcool Líquido Neutro',
    ref: 'TAU-NEU-46',
    graduation: '46,2° INPM',
    size: 'Frasco 1L / Cx 12un',
    desc: 'Limpador de uso geral. Concentração otimizada para superfícies variadas sem agressão ao material.',
    highlight: false,
    restricted: false,
  },
  {
    name: 'Álcool Perfumado — Lavanda',
    ref: 'TAU-LAV-46',
    graduation: '46,2° INPM',
    size: 'Kit 3L / Kit 5L',
    desc: 'Essência de lavanda de alta fixação. Evaporação uniforme sem manchas em superfícies delicadas.',
    highlight: false,
    restricted: false,
  },
  {
    name: 'Álcool Perfumado — Citronela',
    ref: 'TAU-CIT-46',
    graduation: '46,2° INPM',
    size: 'Kit 3L / Kit 5L',
    desc: 'Limpador com ação repelente. Fragância citronela combina limpeza e proteção contra insetos.',
    highlight: false,
    restricted: false,
  },
  {
    name: 'Álcool Perfumado — Eucalipto',
    ref: 'TAU-EUC-46',
    graduation: '46,2° INPM',
    size: 'Kit 3L / Kit 5L',
    desc: 'Essência de eucalipto para aromatização intensa. Banheiros, vestiários e áreas de grande circulação.',
    highlight: false,
    restricted: false,
  },
  {
    name: 'Álcool Desinfetante Hospitalar 70%',
    ref: 'TAU-HOS-70',
    graduation: '70° INPM',
    size: 'Galão 5L / 20L',
    desc: 'Ação bactericida/virucida. Uso estritamente profissional. Conformidade RDC 691/2022.',
    highlight: false,
    restricted: true,
  },
  {
    name: 'Álcool Técnico Secagem Ultrarrápida',
    ref: 'TAU-TEC-92',
    graduation: '92,8° INPM',
    size: 'Galão 5L / 20L / 50L',
    desc: 'Alta concentração para limpeza industrial técnica. Isento de umidade residual.',
    highlight: false,
    restricted: true,
  },
]

export default function TauipeLimpezaPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Início', href: '/' }, { label: 'Produtos', href: '/catalogo' }, { label: 'Tauípe Limpeza' }]} />
      </div>

      {/* Hero */}
      <section className="relative bg-gradient-to-b from-navy to-brand-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-off-white/30 rounded-full" />
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-off-white/20 rounded-full" />
        </div>
        <div className="relative z-10 section-container text-center md:text-left">
          <div className="max-w-3xl">
            <span className="label-tech text-tech-gray mb-4 block">Tauípe Limpeza</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-off-white leading-tight mb-6">
              Limpeza com<br />
              <span className="text-safety-yellow">formulações para diferentes necessidades</span>
            </h1>
            <p className="text-lg text-tech-gray font-body mb-8 max-w-xl">
              A linha Tauípe Limpeza reúne produtos à base de álcool líquido em opções neutras,
              perfumadas, com bicarbonato de sódio e formulações profissionais. Cada produto é
              desenvolvido para entregar o melhor resultado em sua aplicação.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link href="#produtos" className="btn-safety">
                Ver produtos
              </Link>
              <Link href="/contato?intent=orcamento" className="btn-secondary border-tech-gray text-off-white hover:bg-safety-yellow hover:text-navy hover:border-safety-yellow">
                Solicitar orçamento
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-safety-yellow" />
      </section>

      {/* Destaque Bicarbonato */}
      <section className="section-container bg-off-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <PlaceholderImage text="Produto com bicarbonato de sódio" />
          <div>
            <span className="label-tech text-brand-blue mb-2 block">Destaque da linha</span>
            <h2 className="font-display text-3xl font-bold text-navy mb-4">
              Álcool Líquido com Bicarbonato de Sódio
            </h2>
            <p className="font-body text-dark-gray leading-relaxed mb-6">
              Uma formulação exclusiva que combina o poder de limpeza do álcool com a ação
              do bicarbonato de sódio. Ideal para remoção de gorduras impregnadas em cozinhas
              e superfícies que exigem limpeza pesada.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue font-mono text-xs rounded-sm">
                Saponificação química
              </span>
              <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue font-mono text-xs rounded-sm">
                Neutralização de odores
              </span>
              <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue font-mono text-xs rounded-sm">
                46,2° INPM
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Lista de Produtos */}
      <section id="produtos" className="section-container">
        <h2 className="font-display text-3xl font-bold text-navy mb-10 text-center">
          Todos os produtos da linha
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product) => (
            <div
              key={product.ref}
              className={`bg-white border rounded-sm p-6 shadow-industrial ${
                product.restricted ? 'border-fire-orange/30' : 'border-tech-gray/30'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-brand-blue uppercase tracking-wider">
                  {product.ref}
                </span>
                <div className="flex gap-2">
                  {product.highlight && (
                    <span className="px-2 py-0.5 bg-safety-yellow/20 text-navy font-mono text-[10px] uppercase tracking-wider rounded-sm">
                      Destaque
                    </span>
                  )}
                  {product.restricted && (
                    <span className="px-2 py-0.5 bg-fire-orange/10 text-fire-orange font-mono text-[10px] uppercase tracking-wider rounded-sm">
                      Uso profissional
                    </span>
                  )}
                </div>
              </div>
              <h3 className="font-display text-xl font-bold text-navy mb-2">
                {product.name}
              </h3>
              <p className="font-mono text-xs text-dark-gray mb-2">
                {product.graduation} — {product.size}
              </p>
              <p className="font-body text-sm text-dark-gray mb-4">
                {product.desc}
              </p>
              {product.restricted && (
                <p className="font-body text-xs text-fire-orange mb-4 flex items-center gap-2">
                  <span>⚠</span>
                  Consulte o rótulo e a documentação técnica antes do uso.
                </p>
              )}
              <div className="flex gap-3">
                <Link
                  href={`/contato?intent=orcamento&produto=${encodeURIComponent(product.name)}&ref=${product.ref}`}
                  className="text-brand-blue font-mono text-xs uppercase tracking-wider hover:underline"
                >
                  Solicitar orçamento →
                </Link>
                {product.restricted && (
                  <Link
                    href="/documentacao"
                    className="text-fire-orange font-mono text-xs uppercase tracking-wider hover:underline"
                  >
                    Documentação →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-navy section-container text-center">
        <h2 className="font-display text-3xl font-bold text-off-white mb-4">
          Encontre o produto ideal para sua operação
        </h2>
        <p className="font-body text-tech-gray mb-8 max-w-xl mx-auto">
          Consulte nosso catálogo completo ou entre em contato para um atendimento personalizado.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/catalogo" className="btn-safety">
            Ver catálogo completo
          </Link>
          <Link href="/contato" className="btn-secondary border-tech-gray text-off-white hover:bg-safety-yellow hover:text-navy hover:border-safety-yellow">
            Falar com a equipe
          </Link>
        </div>
      </section>
    </>
  )
}