export default function Segmentos() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header da Secção */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <span className="text-[#003366] text-xs font-bold tracking-widest uppercase mb-4 block">Segmentos</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-600 mb-4">
              Servimos todos os <span className="text-[#0055A4]">setores</span>
            </h2>
            <p className="text-gray-400 max-w-lg text-lg">
              Da empresa privada à instituição pública, temos soluções adaptadas à sua realidade.
            </p>
          </div>
          <button className="mt-6 md:mt-0 bg-[#003366] text-white px-6 py-3 rounded-md hover:bg-[#001f3f] transition-colors flex items-center gap-2 font-medium">
            Ver o Catálogo
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 17C18 17.5523 17.5523 18 17 18C16.4477 18 16 17.5523 16 17V9.41406L7.70703 17.707C7.31651 18.0976 6.68349 18.0976 6.29297 17.707C5.90244 17.3165 5.90244 16.6835 6.29297 16.293L14.5859 8H7C6.44772 8 6 7.55228 6 7C6 6.44772 6.44772 6 7 6H17C17.5523 6 18 6.44772 18 7V17Z" fill="white"/>
                </svg>
          </button>
        </div>

        {/* Grelha 3x2 Alternada */}
        <div className="grid grid-cols-1 md:grid-cols-3 w-full h-auto min-h-[800px]">
          
          {/* 1. Empresas Privadas (Imagem) */}
          <div className="relative group bg-gray-800 p-8 flex flex-col justify-end min-h-[400px]" style={{ backgroundImage: "url('/empresas.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/90 to-transparent"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2">Empresas Privadas</h3>
              <p className="text-white/80 text-sm mb-4">Uniformes corporativos que reforçam a identidade da marca com profissionalismo.</p>
              <div className="flex gap-2">
                <span className="border border-white/30 text-white/90 text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">Logística</span>
                <span className="border border-white/30 text-white/90 text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">Construção</span>
                <span className="border border-white/30 text-white/90 text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">Segurança</span>
              </div>
            </div>
            <div className="absolute top-6 right-6 w-10 h-10 border border-white/20 rounded-lg flex items-center justify-center text-white/50 group-hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
            </div>
          </div>

          {/* 2. Escolas e Educação (Branco) */}
          <div className="bg-white p-10 flex flex-col min-h-[400px]">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Escolas e Educação</h3>
            <p className="text-gray-500 text-sm">Uniformes escolares duráveis e confortáveis, para o calor de Moçambique.</p>
          </div>

          {/* 3. Saúde e Hospitais (Imagem) */}
          <div className="relative group bg-gray-800 p-8 flex flex-col justify-end min-h-[400px]" style={{ backgroundImage: "url('/saude.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/90 to-transparent"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2">Saúde e Hospitais</h3>
              <p className="text-white/80 text-sm mb-4">Jalecos e batas hospitalares com tecidos higiénicos e de fácil lavagem.</p>
              <div className="flex gap-2">
                <span className="border border-white/30 text-white/90 text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">Hospitais</span>
                <span className="border border-white/30 text-white/90 text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">Clínicas</span>
                <span className="border border-white/30 text-white/90 text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">Farmácias</span>
              </div>
            </div>
            <div className="absolute top-6 right-6 w-10 h-10 border border-white/20 rounded-lg flex items-center justify-center text-white/50 group-hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
            </div>
          </div>

          {/* 4. Hotelaria e Restauração (Branco) */}
          <div className="bg-white p-10 flex flex-col justify-end min-h-[400px]">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Hotelaria e Restauração</h3>
            <p className="text-gray-500 text-sm">Uniformes elegantes para hotéis, restaurantes e resorts com acabamentos de luxo.</p>
          </div>

          {/* 5. Segurança Privada (Imagem) */}
          <div className="relative group bg-gray-800 p-8 flex flex-col min-h-[400px]" style={{ backgroundImage: "url('/seguranca.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-gradient-to-b from-[#003366]/90 to-transparent"></div>
            <div className="relative z-10 pt-4">
              <h3 className="text-2xl font-bold text-white mb-2">Segurança Privada</h3>
              <p className="text-white/80 text-sm mb-4">Fardas táticas para empresas de segurança, com coletes e acessórios reflectores.</p>
              <div className="flex gap-2">
                <span className="border border-white/30 text-white/90 text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">Coletes</span>
                <span className="border border-white/30 text-white/90 text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">Reflectores</span>
                <span className="border border-white/30 text-white/90 text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">Tácticos</span>
              </div>
            </div>
            <div className="absolute bottom-6 right-6 w-10 h-10 border border-white/20 rounded-lg flex items-center justify-center text-white/50 group-hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
            </div>
          </div>

          {/* 6. ONGs e Instituições (Branco) */}
          <div className="bg-white p-10 flex flex-col justify-end min-h-[400px]">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">ONGs e Instituições</h3>
            <p className="text-gray-500 text-sm">Soluções para organizações internacionais, ONGs e instituições governamentais.</p>
          </div>

        </div>
      </div>
    </section>
  );
}