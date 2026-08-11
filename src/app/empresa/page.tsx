import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import PlaceholderImage from '@/components/PlaceholderImage'

export const metadata: Metadata = {
  title: 'A Empresa',
  description: 'Conheça a história e a estrutura da JH Química, fabricante da marca Tauípe em Pedreira, São Paulo.',
}

const timelineEvents = [
  { year: 'Fundação', title: 'Início por Jean e Henrique', desc: 'A JH Química foi fundada com foco na formulação e entrega de produtos químicos de elevada confiabilidade técnica.' },
  { year: 'Fórmula própria', title: 'Desenvolvimento de formulação exclusiva', desc: 'Consolidação de uma fórmula química própria que serve como base para as linhas de produção da empresa.' },
  { year: 'Consolidação', title: 'Estruturação das linhas de produtos', desc: 'Definição e lançamento das linhas Tauípe Limpeza e Puro-Álcool, com foco em qualidade e segurança.' },
  { year: 'Transição', title: 'Administração atual', desc: 'A sócia-administradora Regina Celia Veiga da Silva assume a administração societária, mantendo os valores fundacionais e ampliando a capacidade comercial.' },
  { year: 'Expansão', title: 'Crescimento e atuação B2B', desc: 'Ampliação da atuação comercial, fortalecimento de parcerias B2B e consolidação da presença no mercado de saneantes e produtos químicos.' },
]

export default function EmpresaPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Início', href: '/' }, { label: 'A Empresa' }]} />
      </div>

      {/* Hero */}
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="label-tech text-safety-yellow mb-4 block">JH Química</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-off-white leading-tight mb-6">
              Uma empresa construída sobre<br />
              <span className="text-safety-yellow">formulação, segurança e confiança</span>
            </h1>
            <p className="text-lg text-tech-gray font-body">
              Da fundação por dois empreendedores visionários à consolidação como referência
              em produtos químicos e saneantes, conheça a trajetória da JH Química.
            </p>
          </div>
        </div>
      </section>

      {/* História */}
      <section className="section-container">
        <div className="max-w-3xl">
          <p className="font-body text-dark-gray leading-relaxed text-lg mb-6">
            A JH Química foi fundada pelos empreendedores Jean e Henrique, com foco inicial
            na formulação e entrega de produtos químicos de elevada confiabilidade técnica.
            Ao longo de sua evolução, a empresa consolidou uma fórmula química própria que
            serve como base para suas linhas de produção.
          </p>
          <p className="font-body text-dark-gray leading-relaxed">
            Atualmente, a administração societária está sob responsabilidade da
            sócia-administradora Regina Celia Veiga da Silva, mantendo os valores
            fundacionais e ampliando a capacidade comercial da empresa.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-off-white section-container">
        <h2 className="font-display text-3xl font-bold text-navy mb-12 text-center">
          Nossa trajetória
        </h2>
        <div className="max-w-3xl mx-auto relative">
          {/* Linha vertical */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-tech-gray md:-translate-x-px" />

          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className={`relative flex items-start mb-10 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Ponto na timeline */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-safety-yellow rounded-full -translate-x-1/2 mt-2 z-10 border-2 border-navy" />

              {/* Conteúdo */}
              <div className={`ml-10 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-white border border-tech-gray/30 rounded-sm p-6 shadow-industrial">
                  <span className="font-mono text-xs text-brand-blue uppercase tracking-widest font-bold">
                    {event.year}
                  </span>
                  <h3 className="font-display text-xl font-bold text-navy mt-1 mb-2">
                    {event.title}
                  </h3>
                  <p className="font-body text-dark-gray text-sm">{event.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dados Institucionais */}
      <section className="section-container">
        <h2 className="font-display text-3xl font-bold text-navy mb-8">Dados institucionais</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { label: 'Nome fantasia', value: 'Tauípe' },
            { label: 'Razão social', value: 'JH Química' },
            { label: 'Localização', value: 'Pedreira, São Paulo' },
            { label: 'Regime tributário', value: 'Simples Nacional' },
            { label: 'Enquadramento', value: 'Empresa de Pequeno Porte — EPP' },
            { label: 'Capital social', value: 'R$ 50.000,00' },
            { label: 'Atuação', value: 'Produtos de limpeza, saneantes, álcool em gel acendedor, comércio e private label' },
          ].map((item) => (
            <div key={item.label} className="flex flex-col gap-1 p-4 border-l-2 border-brand-blue bg-white rounded-sm shadow-industrial">
              <span className="label-tech text-brand-blue">{item.label}</span>
              <span className="font-body text-navy font-medium">{item.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="bg-navy section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-tech-gray/30 p-8 rounded-sm">
            <h3 className="font-display text-2xl font-bold text-safety-yellow mb-4">Missão</h3>
            <p className="font-body text-tech-gray">
              Oferecer soluções eficazes para clientes e consumidores finais.
            </p>
          </div>
          <div className="border border-tech-gray/30 p-8 rounded-sm">
            <h3 className="font-display text-2xl font-bold text-safety-yellow mb-4">Visão</h3>
            <p className="font-body text-tech-gray">
              Ser uma referência no setor químico, reconhecida por clientes, colaboradores,
              fornecedores e investidores pela qualidade dos produtos e dos relacionamentos.
            </p>
          </div>
          <div className="border border-tech-gray/30 p-8 rounded-sm">
            <h3 className="font-display text-2xl font-bold text-safety-yellow mb-4">Valores</h3>
            <ul className="font-body text-tech-gray space-y-2">
              <li>• Satisfação do cliente</li>
              <li>• Respeito e valorização das pessoas</li>
              <li>• Responsabilidade ambiental</li>
              <li>• Segurança como prioridade</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Capacidades Operacionais */}
      <section className="section-container">
        <h2 className="font-display text-3xl font-bold text-navy mb-8">Capacidades operacionais</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            'Comércio varejista de produtos saneantes domissanitários',
            'Envasamento e empacotamento sob contrato',
            'Operações private label (sob avaliação)',
            'Armazenamento e distribuição',
            'Comércio atacadista',
            'Atendimento a varejistas e distribuidores',
            'Atendimento a operações profissionais',
            'Fornecimento B2B',
          ].map((cap) => (
            <div key={cap} className="flex items-center gap-3 p-4 bg-white border border-tech-gray/30 rounded-sm shadow-industrial">
              <span className="text-safety-yellow text-lg">◆</span>
              <span className="font-body text-dark-gray text-sm">{cap}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}