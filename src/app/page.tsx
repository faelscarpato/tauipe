import Link from 'next/link'
import SafetyMarquee from '@/components/SafetyMarquee'
import NewsletterForm from '@/components/NewsletterForm'
import PlaceholderImage from '@/components/PlaceholderImage'
import ImageCarousel from '@/components/ImageCarousel'

export default function HomePage() {
  const placeholderCarouselImages = [
    { src: '/fachada_empresa.png', alt: 'Fachada da empresa Tauípe' },
    { src: '/alcool_citronela.png', alt: 'Produto Tauípe' },
    { src: '/alcool_eucalipto.png', alt: 'Produto Tauípe' },
    { src: '/alcool_lavanda.png', alt: 'Produto Tauípe' },
    { src: '/acendedor_435.png', alt: 'Produto Tauípe' },
    { src: '/Produto_01.png', alt: 'Linha de produção da Tauípe' },
    { src: '/Produto_02.png', alt: 'Linha de produção da Tauípe' },
    { src: '/Produtos.png', alt: 'Linha de produção da Tauípe' },
    

    // Adicione mais imagens de produtos e produção aqui, por exemplo:
    // { src: '/produto1.png', alt: 'Produto Tauípe' },
    // { src: '/producao1.png', alt: 'Linha de produção' },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/fachada_empresa.png')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy" />

        <div className="relative z-10 section-container">
          <div className="max-w-3xl">
            <p className="label-tech text-safety-yellow mb-4">
              Tauípe | JH Química
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-off-white leading-tight mb-6">
              Confiabilidade química<br />
              <span className="text-safety-yellow">com capacidade industrial</span>
            </h1>
            <p className="text-lg md:text-xl text-tech-gray font-body mb-8 max-w-xl">
              A Tauípe é a marca da JH Química. Fabricamos, comercializamos e distribuímos
              produtos químicos, saneantes e álcool em gel acendedor com documentação técnica
              completa para operações B2B.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/catalogo" className="btn-safety">
                Conheça nossos produtos
              </Link>
              <Link href="/contato?intent=orcamento" className="btn-secondary border-tech-gray text-off-white hover:bg-safety-yellow hover:text-navy hover:border-safety-yellow">
                Solicitar orçamento
              </Link>
            </div>
          </div>
        </div>

        {/* Faixa de segurança inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-safety-yellow" />
      </section>

      {/* Bloco de Posicionamento */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="label-tech text-brand-blue mb-2 block">Atuação</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-6">
              Produtos químicos para operações que exigem resultado
            </h2>
            <div className="space-y-4 font-body text-dark-gray leading-relaxed">
              <p>
                A Tauípe desenvolve e fornece produtos para limpeza, uso profissional,
                food service e operações industriais.
              </p>
              <p>
                Nossas linhas atendem desde o consumidor final até distribuidores e
                operações B2B de grande volume, sempre com documentação técnica e
                conformidade documental.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-6">
              <div>
                <span className="font-mono text-3xl font-bold text-brand-blue">2</span>
                <p className="text-sm text-dark-gray mt-1">Linhas de produtos</p>
              </div>
              <div>
                <span className="font-mono text-3xl font-bold text-brand-blue">12+</span>
                <p className="text-sm text-dark-gray mt-1">Produtos no catálogo</p>
              </div>
              <div>
                <span className="font-mono text-3xl font-bold text-brand-blue">B2B</span>
                <p className="text-sm text-dark-gray mt-1">Atendimento comercial</p>
              </div>
            </div>
          </div>
          <div className="bg-tech-gray/30 p-1 rounded-sm">
            <ImageCarousel images={placeholderCarouselImages} />
          </div>
        </div>
      </section>

      {/* Safety Marquee */}
      <SafetyMarquee />

      {/* Linhas de Produtos */}
      <section className="bg-off-white section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Tauípe Limpeza */}
          <div className="bg-white border border-tech-gray/50 rounded-sm p-8 md:p-10 shadow-industrial">
            <span className="label-tech text-brand-blue mb-2 block">Linha 01</span>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-navy mb-4">
              Tauípe Limpeza
            </h3>
            <p className="font-body text-dark-gray mb-6">
              Produtos à base de álcool líquido, incluindo opções neutras, perfumadas,
              com bicarbonato de sódio e para uso profissional. Formulações desenvolvidas
              para diferentes necessidades de limpeza.
            </p>
            <Link href="/tauipe-limpeza" className="btn-primary inline-block">
              Conhecer linha Tauípe Limpeza
            </Link>
          </div>

          {/* Puro-Álcool */}
          <div className="bg-navy border border-safety-yellow/30 rounded-sm p-8 md:p-10 shadow-offset">
            <span className="label-tech text-safety-yellow mb-2 block">Linha 02</span>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-off-white mb-4">
              Puro-Álcool
            </h3>
            <p className="font-body text-tech-gray mb-6">
              Linha de álcool em gel acendedor para churrascarias, pizzarias, buffets,
              hotéis, camping, réchaud e operações food service. Ignição estável e
              formulação técnica segura.
            </p>
            <Link href="/puro-alcool" className="btn-safety inline-block">
              Conhecer Puro-Álcool
            </Link>
          </div>
        </div>
      </section>

      {/* Certificações e Documentação */}
      <section className="bg-navy section-container">
        <div className="max-w-3xl mx-auto text-center">
          <span className="label-tech text-safety-yellow mb-2 block">Documentação Técnica</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-off-white mb-6">
            Transparência e conformidade para sua operação
          </h2>
          <p className="font-body text-tech-gray mb-8">
            Documentação técnica para uma operação mais segura, transparente e preparada.
            Disponibilizamos FISPQ, FDS, alvarás e certificados para clientes e parceiros.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['FISPQ', 'FDS', 'AFE', 'Alvará Sanitário', 'Licença Ambiental', 'Documentação Técnica'].map((doc) => (
              <span
                key={doc}
                className="px-4 py-2 border border-tech-gray/40 text-tech-gray font-mono text-xs uppercase tracking-wider rounded-sm"
              >
                {doc}
              </span>
            ))}
          </div>
          <Link href="/documentacao" className="btn-safety inline-block">
            Acessar documentação
          </Link>
        </div>
      </section>

      {/* Seja Revendedor */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="label-tech text-brand-blue mb-2 block">Parceria B2B</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-6">
              Sua operação pode crescer com a Tauípe
            </h2>
            <ul className="space-y-3 font-body text-dark-gray mb-8">
              <li className="flex items-start gap-3">
                <span className="text-safety-yellow font-bold mt-1">→</span>
                Portfólio diversificado para diferentes perfis de operação.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-safety-yellow font-bold mt-1">→</span>
                Linhas para consumidor final, uso profissional e food service.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-safety-yellow font-bold mt-1">→</span>
                Atendimento comercial dedicado para parceiros.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-safety-yellow font-bold mt-1">→</span>
                Possibilidade de fornecimento recorrente com escala.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-safety-yellow font-bold mt-1">→</span>
                Estrutura para distribuição regional.
              </li>
            </ul>
            <Link href="/seja-revendedor" className="btn-primary inline-block">
              Quero ser revendedor
            </Link>
          </div>
          <PlaceholderImage text="Parceria comercial — aperto de mãos ou logística" />
        </div>
      </section>

      {/* Inscrição Catálogo */}
      <section className="bg-dark-gray section-container">
        <div className="max-w-xl mx-auto text-center">
          <span className="label-tech text-safety-yellow mb-2 block">Catálogo Virtual</span>
          <h2 className="font-display text-3xl font-bold text-off-white mb-4">
            Receba o catálogo completo
          </h2>
          <p className="font-body text-tech-gray mb-8">
            Inscreva-se para receber o catálogo virtual com todos os produtos,
            especificações técnicas e informações comerciais.
          </p>
          <NewsletterForm />
        </div>
      </section>

      {/* Onde Estamos */}
      <section className="section-container">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-8 text-center">
          Onde estamos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-sm overflow-hidden border border-tech-gray/30 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.0357845417393!2d-46.89612852469497!3d-22.726911279382136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8dec1260b55c5%3A0x5cdcd7d60702ca16!2sHJ%20QU%C3%8DMICA%20PEDREIRA!5e0!3m2!1spt-BR!2sbr!4v1786482059343!5m2!1spt-BR!2sbr"
              className="w-full h-80 md:h-[24rem]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Localização da HJ Química Pedreira"
            />
          </div>
          <div className="space-y-4">
            <h3 className="font-mono text-sm uppercase tracking-widest text-brand-blue">
              Localização
            </h3>
            <address className="not-italic font-body text-dark-gray space-y-1">
              <p className="text-lg font-medium text-navy">Rua Maximino Rossignoli, 50 e 53</p>
              <p>Jardim Emília</p>
              <p>Pedreira — São Paulo</p>
              <p>CEP 13928-204</p>
            </address>
            <p className="font-body text-dark-gray">
              Localização estratégica com acesso logístico regional, próxima a
              importantes rodovias do interior paulista.
            </p>
            <Link href="/contato" className="btn-primary inline-block">
              Falar com a empresa
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}