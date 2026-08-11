import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import FlameSVG from '@/components/FlameSVG'

export const metadata: Metadata = {
  title: 'Puro-Álcool',
  description: 'Linha Puro-Álcool — álcool em gel acendedor para churrascarias, pizzarias, buffets, hotéis e operações food service.',
}

const products = [
  { name: 'Puro-Álcool Gel Acendedor 425g', ref: 'PA-GEL-425', size: 'Frasco PET 425g / Cx 12un', desc: 'Gelificação técnica que previne expansões bruscas. Ignição estável, sem fumaça tóxica.' },
  { name: 'Puro-Álcool Gel Acendedor 1kg', ref: 'PA-GEL-1K', size: 'Embalagem 1kg', desc: 'Formato intermediário para camping, lazer e eventos. Alta viscosidade, chama controlada.' },
  { name: 'Barrica Industrial Puro-Álcool 10kg', ref: 'PA-BAR-10K', size: 'Bombona 10kg', desc: 'Operações comerciais intensivas. Churrascarias, pizzarias, hotéis e cozinhas industriais.' },
  { name: 'Barrica Industrial Puro-Álcool 13kg', ref: 'PA-BAR-13K', size: 'Bombona 13kg', desc: 'Tamanho ideal para buffets e fornos a lenha. Custo-benefício por kg.' },
  { name: 'Barrica Industrial Puro-Álcool 15kg', ref: 'PA-BAR-15K', size: 'Bombona 15kg', desc: 'Máxima capacidade para operações de grande porte. Menor custo por quilo da linha.' },
]

export default function PuroAlcoolPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Início', href: '/' }, { label: 'Produtos', href: '/catalogo' }, { label: 'Puro-Álcool' }]} />
      </div>

      {/* Hero — tema escuro */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 opacity-10">
          <FlameSVG className="w-full h-full text-fire-orange" animate={true} />
        </div>
        <div className="absolute left-0 bottom-0 w-64 h-64 opacity-5">
          <FlameSVG className="w-full h-full text-safety-yellow" animate={true} />
        </div>

        <div className="relative z-10 section-container">
          <div className="max-w-3xl">
            <div className="mb-6">
              <Image
                src="/logo_puro_alcool_branco.png"
                alt="Puro-Álcool"
                width={200}
                height={60}
                className="h-14 w-auto"
              />
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-off-white leading-tight mb-6">
              Ignição estável para<br />
              <span className="text-fire-orange">operações que não podem parar</span>
            </h1>
            <p className="text-lg text-tech-gray font-body mb-8 max-w-xl">
              A linha Puro-Álcool oferece álcool em gel acendedor com formulação técnica
              segura, desenvolvido para food service profissional, churrascarias, pizzarias,
              buffets, hotéis e uso em réchaud.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#produtos" className="btn-safety">
                Ver produtos
              </Link>
              <Link
                href="/contato?intent=orcamento"
                className="px-6 py-3 border-2 border-fire-orange text-fire-orange font-mono text-sm uppercase tracking-widest font-bold rounded-sm hover:bg-fire-orange hover:text-off-white transition-all"
              >
                Solicitar orçamento
              </Link>
            </div>
          </div>
        </div>

        {/* Faixa de segurança */}
        <div className="relative z-10 safety-stripe py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-4 items-center justify-center md:justify-start">
            <span className="font-mono text-xs uppercase tracking-widest font-bold">⚠ Produto inflamável</span>
            <span className="hidden md:inline text-navy/40">|</span>
            <span className="font-mono text-xs">Manter afastado de fontes de calor</span>
          </div>
        </div>
      </section>

      {/* Produtos */}
      <section id="produtos" className="section-container bg-off-white">
        <h2 className="font-display text-3xl font-bold text-navy mb-10 text-center">
          Produtos da linha Puro-Álcool
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.ref}
              className="bg-navy border border-tech-gray/20 rounded-sm p-6 shadow-offset hover:shadow-offset transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <FlameSVG className="w-8 h-8 text-fire-orange" animate={false} />
                <span className="font-mono text-xs text-fire-orange uppercase tracking-wider">
                  {product.ref}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-off-white mb-2">
                {product.name}
              </h3>
              <p className="font-mono text-xs text-tech-gray mb-3">
                {product.size}
              </p>
              <p className="font-body text-sm text-tech-gray mb-4">
                {product.desc}
              </p>
              <Link
                href={`/contato?intent=orcamento&produto=${encodeURIComponent(product.name)}&ref=${product.ref}`}
                className="text-safety-yellow font-mono text-xs uppercase tracking-wider hover:underline"
              >
                Solicitar orçamento →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Segurança */}
      <section className="bg-dark-gray section-container">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">⚠️</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-off-white">
              Informações de segurança
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Produto inflamável — manter afastado de fontes de calor quando armazenado.',
              'Usar conforme o rótulo e a documentação técnica.',
              'Manter fora do alcance de crianças.',
              'Não utilizar em aplicações diferentes das indicadas.',
              'Consultar a documentação antes do uso profissional.',
              'Armazenar em local fresco e ventilado.',
            ].map((warning) => (
              <div key={warning} className="flex items-start gap-3 p-4 bg-navy/50 border border-fire-orange/30 rounded-sm">
                <span className="text-fire-orange font-bold flex-shrink-0">!</span>
                <p className="font-body text-sm text-tech-gray">{warning}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/documentacao" className="btn-safety inline-block">
              Consultar documentação técnica
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}