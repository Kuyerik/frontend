export default function Contact() {
  return (
    <section className="w-full bg-gradient-to-b from-[#043166] to-[#B9DDF3] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Lado Esquerdo: Texto e Informações */}
          <div className="flex-1 w-full text-white">
            <span className="text-white/70 text-xs font-bold tracking-widest uppercase mb-4 block">
              Vamos trabalhar juntos
            </span>
            <h2 className="text-4xl md:text-5xl font-medium leading-tight mb-6">
              Pronto para equipar<br />a sua equipa?
            </h2>
            <p className="text-white/80 text-lg mb-12 max-w-md">
              Preencha o formulário e entraremos em contacto em menos de 24 horas com uma proposta personalizada.
            </p>

            <div className="space-y-6">
              {/* Telefone */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/60 text-[10px] font-bold tracking-widest uppercase">Telefone / WhatsApp</p>
                  <p className="text-white font-medium text-lg">+258 84 000 0000</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/60 text-[10px] font-bold tracking-widest uppercase">Email</p>
                  <p className="text-white font-medium text-lg">geral@indiweare.co.mz</p>
                </div>
              </div>

              {/* Localização */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/60 text-[10px] font-bold tracking-widest uppercase">Localização</p>
                  <p className="text-white font-medium text-lg">Maputo, Moçambique</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Direito: Formulário */}
          <div className="flex-1 w-full">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <form className="space-y-5">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Nome</label>
                    <input type="text" placeholder="O seu nome" className="w-full bg-[#F8FAFC] border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 outline-none focus:border-[#003366] transition-colors" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Empresa</label>
                    <input type="text" placeholder="Nome da empresa" className="w-full bg-[#F8FAFC] border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 outline-none focus:border-[#003366] transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Telefone / WhatsApp</label>
                    <input type="text" placeholder="+258 84..." className="w-full bg-[#F8FAFC] border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 outline-none focus:border-[#003366] transition-colors" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Email</label>
                    <input type="email" placeholder="email@empresa.mz" className="w-full bg-[#F8FAFC] border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 outline-none focus:border-[#003366] transition-colors" />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Tipo de Uniforme</label>
                  <select className="w-full bg-[#F8FAFC] border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-500 outline-none focus:border-[#003366] transition-colors appearance-none">
                    <option value="">Seleccionar categoria...</option>
                    <option value="corporativo">Corporativo</option>
                    <option value="hospitalar">Saúde e Hospitalar</option>
                    <option value="seguranca">Segurança</option>
                    <option value="escolar">Escolar</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Quantidade Aproximada</label>
                  <select className="w-full bg-[#F8FAFC] border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-500 outline-none focus:border-[#003366] transition-colors appearance-none">
                    <option value="">Seleccionar quantidade...</option>
                    <option value="1-20">1 a 20 peças</option>
                    <option value="21-50">21 a 50 peças</option>
                    <option value="51-100">51 a 100 peças</option>
                    <option value="100+">Mais de 100 peças</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Detalhes do Pedido</label>
                  <textarea rows={4} placeholder="Descreva o pedido: cores, logótipo, prazo, especificações..." className="w-full bg-[#F8FAFC] border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 outline-none focus:border-[#003366] transition-colors resize-none"></textarea>
                </div>

                <button type="submit" className="w-full bg-[#003366] text-white py-3.5 rounded-lg hover:bg-[#001f3f] transition-colors flex items-center justify-center gap-2 font-medium mt-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_10_543)">
                    <path d="M14.6575 1.33252L7.32877 8.66127M7.32877 8.66127L1.33252 5.99627L14.6575 1.33252L9.99377 14.6575L7.32877 8.66127Z" stroke="white" strokeWidth="1.3325" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_10_543">
                    <rect width="15.99" height="15.99" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>

                  Enviar Pedido de Orçamento
                </button>
                
                <p className="text-center text-xs text-gray-400 mt-4">
                  Respondemos em menos de 24 horas. Pode também contactar-nos diretamente pelo WhatsApp.
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}