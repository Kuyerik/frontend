export default function Essencia() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header da Secção */}
        <div className="mb-12">
          <span className="text-[#003366] text-xs font-bold tracking-widest uppercase mb-4 block">A Nossa Essência</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-600 mb-4">
            Porquê escolher a <span className="text-[#0055A4]">INDIWEAR</span>
          </h2>
          <p className="text-gray-400 max-w-lg text-lg">
            Os pilares que fazem de nós a referência em fardamentos profissionais em Moçambique.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
          
          {/* Bloco 1: Máquina/Produção (Ocupa 2 colunas e 2 linhas na grelha Desktop) */}
          <div className="md:col-span-2 md:row-span-2 relative rounded-[7px] border border-[#E8E8E6] overflow-hidden min-h-[400px] flex flex-col justify-end p-8" style={{ backgroundImage: "url('/maquina.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
            <div className="relative z-10">
              <span className="text-white/70 text-[10px] font-bold tracking-widest uppercase mb-2 block">Produção Local</span>
              <h3 className="text-3xl font-bold text-white mb-2">Fabricamos em <span className="text-white">Moçambique</span>,<br/>para <span className="text-white">Moçambique</span></h3>
              <p className="text-white/80 text-sm">Atelier próprio em Maputo. Controlo total da qualidade do início ao fim.</p>
            </div>
          </div>

          {/* Bloco 2: Clientes (Branco) */}
          <div className="bg-white rounded-[7px] border border-[#E8E8E6] p-8 flex flex-col justify-center">
            <span className="text-[#003366] text-[10px] font-bold tracking-widest uppercase mb-4 block">Clientes Satisfeitos</span>
            <div className="text-5xl font-bold text-[#003366] mb-2">500+</div>
            <p className="text-gray-500 text-sm mb-6">empresas e instituições servidas</p>
            <div className="flex gap-2">
              <span className="border border-gray-200 text-gray-500 text-[10px] px-3 py-1 rounded-full uppercase tracking-wider font-semibold">Maputo</span>
              <span className="border border-gray-200 text-gray-500 text-[10px] px-3 py-1 rounded-full uppercase tracking-wider font-semibold">Matola</span>
            </div>
          </div>

          {/* Bloco 3: Personalização (Azul) */}
          <div className="bg-[#003366] rounded-[7px] border border-[#043166] p-8 flex flex-col justify-center">
            <span className="text-white/70 text-[10px] font-bold tracking-widest uppercase mb-4 block">Personalização</span>
            <h3 className="text-2xl font-bold text-white mb-4 leading-tight">O seu logótipo bordado com precisão</h3>
            <p className="text-white/80 text-sm">Cores institucionais, nomes, patches. Cada peça transformada na voz visual da sua marca.</p>
          </div>

          {/* Bloco 4: Cobertura (Azul) */}
          <div className="bg-[#003366] rounded-[7px] border border-[#1A1C1B] p-8 flex flex-col justify-between h-full">
            <div>
              <span className="text-white/70 text-[10px] font-bold tracking-widest uppercase mb-4 block">Cobertura</span>
              <h3 className="text-2xl font-bold text-white mb-8">Entregamos onde precisar</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <div className="flex items-center gap-2 text-white">
                  <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                  <span>Maputo</span>
                </div>
                <span className="text-white/70 text-sm">48h</span>
              </div>
              <div className="flex justify-between items-center pt-1">
                <div className="flex items-center gap-2 text-white">
                  <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                  <span>Matola</span>
                </div>
                <span className="text-white/70 text-sm">48-72h</span>
              </div>
            </div>
          </div>

          {/* Bloco 5: Qualidade (Imagem + Texto) */}
          <div className="bg-white rounded-[7px] border border-[#E8E8E6] overflow-hidden flex flex-col">
            <div className="h-40 w-full" style={{ backgroundImage: "url('/summit.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className="p-8">
              <span className="text-[#003366] text-[10px] font-bold tracking-widest uppercase mb-4 block">Qualidade</span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tecidos premium para climas quentes</h3>
              <p className="text-gray-500 text-sm">Selecionados especialmente para o calor de Moçambique.</p>
            </div>
          </div>

          {/* Bloco 6: Testemunho (Cinzento Claro) */}
          <div className="bg-[#F8FAFC] rounded-[7px] border border-[#02366626] p-8 flex flex-col justify-between">
            <div>
              <svg className="w-8 h-8 text-[#003366] mb-4" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
              <p className="text-gray-800 text-lg font-medium italic mb-8">
                "Entregaram os 80 uniformes da nossa equipa a tempo e com qualidade excecional."
              </p>
            </div>
            <div className="flex items-center gap-3 border-t border-gray-200 pt-6">
              <div className="w-10 h-10 rounded-full bg-[#003366] flex items-center justify-center text-white font-bold text-sm">AM</div>
              <div>
                <p className="text-gray-900 font-bold text-sm">António Machava</p>
                <p className="text-gray-500 text-xs">Director — Segurança Total</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}