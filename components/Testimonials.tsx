export default function Testimonials() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Secção */}
        <div className="text-center mb-16">
          <span className="text-[#003366] text-xs font-bold tracking-widest uppercase mb-4 block">
            Clientes
          </span>
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900">
            O que dizem os nossos <span className="text-[#003366] font-bold">clientes</span>
          </h2>
        </div>

        {/* Grelha de Testemunhos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Cartão 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm flex flex-col justify-between">
            <div>
              {/* Estrelas */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-8 text-[15px]">
                Entregaram os 80 uniformes da nossa equipa de segurança a tempo e com qualidade excecional. O bordado do logótipo ficou perfeito.
              </p>
            </div>
            
            <div className="border-t border-gray-100 pt-6 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#003366] flex items-center justify-center text-white font-bold text-sm shrink-0">
                AM
              </div>
              <div>
                <p className="text-gray-900 font-bold text-sm">António Machava</p>
                <p className="text-gray-400 text-xs">Director Operacional — Segurança Total</p>
              </div>
            </div>
          </div>

          {/* Cartão 2 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-8 text-[15px]">
                Encomendámos uniformes escolares para 300 alunos. Fizeram visitas à escola para medições e entregaram tudo dentro do prazo. Excelente serviço.
              </p>
            </div>
            
            <div className="border-t border-gray-100 pt-6 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#4A5568] flex items-center justify-center text-white font-bold text-sm shrink-0">
                FC
              </div>
              <div>
                <p className="text-gray-900 font-bold text-sm">Fátima Cossa</p>
                <p className="text-gray-400 text-xs">Directora — Escola Estrela do Mar</p>
              </div>
            </div>
          </div>

          {/* Cartão 3 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-8 text-[15px]">
                Os jalecos para a nossa clínica são de excelente qualidade. Já fizemos três encomendas e recomendamos a qualquer instituição de saúde em Maputo.
              </p>
            </div>
            
            <div className="border-t border-gray-100 pt-6 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#2F855A] flex items-center justify-center text-white font-bold text-sm shrink-0">
                DS
              </div>
              <div>
                <p className="text-gray-900 font-bold text-sm">Dr. David Simango</p>
                <p className="text-gray-400 text-xs">Director — Clínica Saúde Primeiro</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}