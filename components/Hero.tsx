import Whatsapp from "./Whatsapp";
export default function Hero() {
  return (
    <section 
      className="relative w-full h-screen min-h-[700px] flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }} 
    >
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-white/70"></div>
          <span className="text-[10px] font-bold tracking-widest text-white/90 uppercase">
            Maputo & Vilankulo, Moçambique
          </span>
        </div>

        
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Fardamentos que representam a sua marca
          </h1>
          <p className="text-lg text-gray-300 mb-10 max-w-xl leading-relaxed">
            Uniformes profissionais personalizados para empresas, escolas, hospitais e hotéis em toda Moçambique. Bordados precisos, tecidos duráveis, entregas rápidas.
          </p>

          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button className="bg-[#003366] text-white px-8 py-3.5 rounded-md hover:bg-[#001f3f] transition-colors flex items-center justify-center gap-2 font-medium">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Solicitar Orçamento
            </button>
            <button className="border border-white/40 text-white px-8 py-3.5 rounded-md hover:bg-white/10 transition-colors flex items-center justify-center gap-2 font-medium">
              Ver Catálogo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

          
          <div className="flex items-center gap-8">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">500+</span>
              <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mt-1">Empresas Servidas</span>
            </div>
            <div className="w-[1px] h-10 bg-white/20"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">12+</span>
              <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mt-1">Tipos de Uniforme</span>
            </div>
            <div className="w-[1px] h-10 bg-white/20"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">48h</span>
              <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mt-1">Entrega Maputo</span>
            </div>
          </div>
        </div>
      </div>

      
      <button className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md items-center justify-center text-white border border-white/20 transition-all z-20">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      
      <button className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md items-center justify-center text-white border border-white/20 transition-all z-20">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
        <button className="w-6 h-1.5 rounded-full bg-white"></button>
        <button className="w-1.5 h-1.5 rounded-full bg-white/40"></button>
        <button className="w-1.5 h-1.5 rounded-full bg-white/40"></button>
      </div>


      <Whatsapp />
      
    </section>
  );
}