'use client'
import { useState, FormEvent } from 'react'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [consent, setConsent] = useState(false)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setErrorMessage('')

    if (!validateEmail(email)) {
      setErrorMessage('Por favor, insira um e-mail válido.')
      return
    }
    if (!consent) {
      setErrorMessage('É necessário aceitar o consentimento para receber o catálogo.')
      return
    }

    setStatus('loading')

    // Simulação de envio — preparado para integração com Supabase ou ferramenta de e-mail
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      // Aqui seria a chamada para API/Supabase
      // await supabase.from('newsletter_subscribers').insert([{ name, email, consent }])
      setStatus('success')
      setEmail('')
      setName('')
      setConsent(false)
    } catch {
      setStatus('error')
      setErrorMessage('Ocorreu um erro ao processar sua inscrição. Tente novamente.')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-navy border border-safety-yellow p-8 rounded-sm text-center">
        <p className="font-display text-2xl text-safety-yellow mb-2">
          Inscrição confirmada!
        </p>
        <p className="text-tech-gray font-body">
          O catálogo virtual será enviado para o seu e-mail em breve.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <label htmlFor="newsletter-name" className="block font-mono text-xs uppercase tracking-widest text-tech-gray mb-1">
          Nome (opcional)
        </label>
        <input
          type="text"
          id="newsletter-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 bg-transparent border border-tech-gray text-off-white font-body rounded-sm focus:outline-none focus:border-safety-yellow focus:ring-1 focus:ring-safety-yellow transition-colors"
          placeholder="Seu nome"
        />
      </div>
      <div>
        <label htmlFor="newsletter-email" className="block font-mono text-xs uppercase tracking-widest text-tech-gray mb-1">
          E-mail <span className="text-fire-orange">*</span>
        </label>
        <input
          type="email"
          id="newsletter-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-3 bg-transparent border border-tech-gray text-off-white font-body rounded-sm focus:outline-none focus:border-safety-yellow focus:ring-1 focus:ring-safety-yellow transition-colors"
          placeholder="seu@email.com"
        />
      </div>
      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          id="newsletter-consent"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-1 h-4 w-4 rounded-sm border-tech-gray text-brand-blue focus:ring-safety-yellow"
        />
        <label htmlFor="newsletter-consent" className="text-sm text-tech-gray font-body">
          Concordo em receber o catálogo virtual e comunicações comerciais da Tauípe. Posso cancelar a qualquer momento.
        </label>
      </div>
      {errorMessage && (
        <p className="text-fire-orange text-sm font-body" role="alert">
          {errorMessage}
        </p>
      )}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full px-6 py-3 bg-safety-yellow text-navy font-mono text-sm uppercase tracking-widest font-bold rounded-sm hover:bg-safety-yellow/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-safety-yellow focus:ring-offset-navy"
      >
        {status === 'loading' ? 'Enviando...' : 'Receber catálogo virtual'}
      </button>
    </form>
  )
}