import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Documentação Técnica',
  description: 'Acesse FISPQ, FDS, alvarás, licenças e certificados da Tauípe | JH Química.',
}

const documents = [
  { title: 'FISPQ — Álcool Líquido Neutro 46,2° INPM', ref: 'TAU-NEU-46', type: 'FISPQ' },
  { title: 'FISPQ — Álcool com Bicarbonato 46,2° INPM', ref: 'TAU-BIC-46', type: 'FISPQ' },
  { title: 'FISPQ — Álcool Perfumado Lavanda 46,2° INPM', ref: 'TAU-LAV-46', type: 'FISPQ' },
  { title: 'FISPQ — Álcool Hospitalar 70° INPM', ref: 'TAU-HOS-70', type: 'FISPQ' },
  { title: 'FISPQ — Álcool Técnico 92,8° INPM', ref: 'TAU-TEC-92', type: 'FISPQ' },
  { title: 'FISPQ — Puro-Álcool Gel Acendedor 80° INPM', ref: 'PA-GEL-425', type: 'FISPQ' },
  { title: 'Ficha de Segurança (FDS) — Linha Tauípe Limpeza', ref: 'FDS-TAU', type: 'FDS' },
  { title: 'Ficha de Segurança (FDS) — Linha Puro-Álcool', ref: 'FDS-PA', type: 'FDS' },
  { title: 'Autorização de Funcionamento de Empresa (AFE)', ref: 'AFE-JH', type: 'Licença' },
  { title: 'Alvará Sanitário', ref: 'ALV-JH', type: 'Licença' },
  { title: 'Licença Ambiental', ref: 'LIC-JH', type: 'Licença' },
  { title: 'Certificado de Regularidade Técnica', ref: 'CRT-JH', type: 'Certificado' },
]

export default function DocumentacaoPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Início', href: '/' }, { label: 'Documentação' }]} />
      </div>

      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="label-tech text-safety-yellow mb-4 block">Documentação Técnica</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-off-white leading-tight mb-6">
              Transparência e<br />
              <span className="text-safety-yellow">conformidade documental</span>
            </h1>
            <p className="text-lg text-tech-gray font-body">
              Disponibilizamos documentação técnica completa para clientes, parceiros e
              operações que exigem conformidade regulatória. Consulte FISPQ, FDS, alvarás
              e certificados.
            </p>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {documents.map((doc) => (
            <div
              key={doc.ref}
              className="bg-white border border-tech-gray/30 rounded-sm p-6 shadow-industrial flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-brand-blue">
                  {doc.type}
                </span>
                <h3 className="font-display text-lg font-bold text-navy mt-1 mb-2">
                  {doc.title}
                </h3>
                <p className="font-mono text-xs text-tech-gray mb-4">
                  Ref: {doc.ref}
                </p>
              </div>
              <button
                disabled
                className="text-tech-gray font-mono text-xs uppercase tracking-wider border border-tech-gray/30 rounded-sm px-3 py-2 text-center cursor-not-allowed"
                title="Documentação disponível mediante solicitação"
              >
                Solicitar acesso
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-safety-yellow/5 border border-safety-yellow/30 rounded-sm p-6 text-center">
          <p className="font-body text-dark-gray mb-4">
            Para acessar a documentação técnica completa, entre em contato com nossa equipe.
          </p>
          <Link href="/contato" className="btn-primary inline-block">
            Solicitar documentação
          </Link>
        </div>
      </section>
    </>
  )
}