import Whatsapp from "./Whatsapp";

interface HeroProps {
  pillText: string;
  headingText: string;
  descriptionText: string;
  showButtons?: boolean;
  showStats?: boolean;
}

export default function Hero({
  pillText,
  headingText,
  descriptionText,
  showButtons = true,
  showStats = true,
}: HeroProps) {
  return (
    <section 
      className="relative w-full h-screen min-h-[700px] flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero-bg.png')" }} 
    >
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Pill (Text Section 1) */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-white/70"></div>
          <span className="text-[11px] font-medium tracking-[0.99px] leading-[22px] text-white uppercase">
            {pillText}
          </span>
        </div>

        <div className="max-w-2xl">
          {/* Heading (Text Section 2) */}
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            {headingText}
          </h1>
          
          {/* Description (Text Section 3) */}
          <p className="text-lg text-gray-300 mb-10 max-w-xl leading-relaxed">
            {descriptionText}
          </p>

          {/* Conditional Buttons */}
          {showButtons && (
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <button className="bg-[#003366] text-white px-8 py-3.5 rounded-md hover:bg-[#001f3f] transition-colors flex items-center justify-center gap-2 font-medium">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.99625 7.99503H9.99375M5.99625 10.66H9.99375M11.3263 13.9913H4.66375C4.31035 13.9913 3.97143 13.8509 3.72153 13.601C3.47164 13.3511 3.33125 13.0122 3.33125 12.6588V3.33128C3.33125 2.97788 3.47164 2.63895 3.72153 2.38906C3.97143 2.13917 4.31035 1.99878 4.66375 1.99878H8.38543C8.56211 1.99882 8.73155 2.06904 8.85646 2.19399L12.4635 5.80107C12.5885 5.92598 12.6587 6.09542 12.6588 6.27211V12.6588C12.6588 13.0122 12.5184 13.3511 12.2685 13.601C12.0186 13.8509 11.6797 13.9913 11.3263 13.9913Z" stroke="white" strokeWidth="1.3325" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                Solicitar Orçamento
              </button>
              <button className="border border-white/40 text-white px-8 py-3.5 rounded-md hover:bg-white/10 transition-colors flex items-center justify-center gap-2 font-medium">
                Ver Catálogo
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.293 4.29295C11.6835 3.90243 12.3165 3.90243 12.707 4.29295L19.707 11.293C20.0976 11.6835 20.0976 12.3165 19.707 12.707L12.707 19.707C12.3165 20.0975 11.6835 20.0975 11.293 19.707C10.9024 19.3165 10.9024 18.6835 11.293 18.293L16.5859 13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H16.5859L11.293 5.70702C10.9024 5.31649 10.9024 4.68348 11.293 4.29295Z" fill="white"/>
                </svg>

              </button>
            </div>
          )}

          {/* Conditional Stats */}
          {showStats && (
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
          )}
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