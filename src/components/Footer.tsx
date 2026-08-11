import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-navy border-t-2 border-safety-yellow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Info */}
          <div className="lg:col-span-1">
            <Image
              src="/brand_blue-light.png"
              alt="Tauípe"
              width={140}
              height={40}
              className="h-10 w-auto mb-4"
            />
            <p className="font-mono text-xs uppercase tracking-widest text-safety-yellow mb-2">
              JH Química
            </p>
            <p className="text-tech-gray text-sm font-body leading-relaxed">
              Fabricação, comercialização e distribuição de produtos químicos, saneantes e álcool em gel acendedor.
            </p>
          </div>

          {/* Links Principais */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-safety-yellow mb-4">
              Institucional
            </h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-tech-gray hover:text-off-white transition-colors text-sm font-body">Início</Link></li>
              <li><Link href="/empresa" className="text-tech-gray hover:text-off-white transition-colors text-sm font-body">A Empresa</Link></li>
              <li><Link href="/catalogo" className="text-tech-gray hover:text-off-white transition-colors text-sm font-body">Catálogo</Link></li>
              <li><Link href="/documentacao" className="text-tech-gray hover:text-off-white transition-colors text-sm font-body">Documentação</Link></li>
            </ul>
          </div>

          {/* Produtos */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-safety-yellow mb-4">
              Produtos
            </h3>
            <ul className="space-y-2">
              <li><Link href="/puro-alcool" className="text-tech-gray hover:text-off-white transition-colors text-sm font-body">Puro-Álcool</Link></li>
              <li><Link href="/tauipe-limpeza" className="text-tech-gray hover:text-off-white transition-colors text-sm font-body">Tauípe Limpeza</Link></li>
              <li><Link href="/catalogo" className="text-tech-gray hover:text-off-white transition-colors text-sm font-body">Catálogo Completo</Link></li>
              <li><Link href="/seja-revendedor" className="text-tech-gray hover:text-off-white transition-colors text-sm font-body">Seja Revendedor</Link></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-safety-yellow mb-4">
              Contato
            </h3>
            <address className="not-italic space-y-2 text-sm font-body text-tech-gray">
              <p>Rua Maximino Rossignoli, 50 e 53</p>
              <p>Jardim Emília — Pedreira — SP</p>
              <p>CEP 13928-204</p>
              <p className="mt-2">
                <a href="tel:+5519999999999" className="hover:text-off-white transition-colors">
                  (19) 99999-9999
                </a>
              </p>
              <p>
                <a href="mailto:contato@tauipe.com.br" className="hover:text-off-white transition-colors">
                  contato@tauipe.com.br
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-tech-gray/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-tech-gray">
            &copy; {new Date().getFullYear()} Tauípe | JH Química. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <Link href="/politica-de-privacidade" className="font-mono text-xs text-tech-gray hover:text-off-white transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/termos-de-uso" className="font-mono text-xs text-tech-gray hover:text-off-white transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}