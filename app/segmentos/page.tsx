import Image from "next/image";
import Link from "next/link";

export default function SegmentosPage() {
  return (
    <main className="w-full min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="w-full bg-gradient-to-b from-[#002244] to-[#7EA8C9] pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative flex flex-col items-center text-center">
        

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white mb-6 shadow-sm">
          <div className="w-1.5 h-1.5 rounded-full bg-[#003366]"></div>
          <span className="text-[10px] font-bold tracking-widest text-[#003366] uppercase">
            Soluções por Setor
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight mb-12 max-w-4xl">
          Vestimos os setores que movem Moçambique
        </h1>


        <div className="bg-white p-2 rounded-full shadow-xl flex flex-wrap items-center justify-center gap-2 md:gap-4 max-w-fit mx-auto text-sm">
          <span className="text-gray-400 font-bold tracking-widest text-[10px] uppercase pl-4 pr-2">Ir para</span>
          <div className="w-px h-6 bg-gray-200 hidden md:block"></div>
          
          <a href="#empresas" className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-100 text-gray-700 transition-colors font-medium">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            Empresas
          </a>
          <a href="#saude" className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-100 text-gray-700 transition-colors font-medium">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            Saúde
          </a>
          <a href="#educacao" className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-100 text-gray-700 transition-colors font-medium">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
            Educação
          </a>
          <a href="#hotelaria" className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-100 text-gray-700 transition-colors font-medium">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            Hotelaria
          </a>
          <a href="#seguranca" className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-100 text-gray-700 transition-colors font-medium">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            Segurança
          </a>
        </div>
      </section>

      {/* SETOR 01*/}
      <section id="empresas" className="w-full bg-white py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 text-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#003366]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-medium">
                Empresas <span className="text-[#0055A4] font-bold">Privadas</span>
              </h2>
            </div>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              A imagem da sua marca começa no primeiro contacto com o cliente — e muitas vezes esse contacto é feito por quem está fardado. Trabalhamos com empresas de logística, construção, retalho e serviços, criando uniformes que comunicam profissionalismo, sem perder o conforto exigido por longas jornadas.
            </p>

            <div className="bg-white rounded-2xl p-8 mb-8 text-gray-900 shadow-xl">
              <span className="text-gray-400 text-[10px] font-bold tracking-widest uppercase mb-6 block">O que entregamos</span>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#003366] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Camisas e fardas corporativas com bordado do logótipo
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#003366] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Cores institucionais — replicamos qualquer Pantone
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#003366] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Fardas diferenciadas por departamento ou hierarquia
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#003366] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Reposições rápidas sempre que precisar
                </li>
              </ul>
            </div>

            <div>
              <span className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-4 block">Produtos Recomendados</span>
              <div className="flex flex-wrap gap-3">
                <Link href="#" className="bg-white text-gray-900 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors inline-flex items-center gap-2">
                  Camisa Profissional <span className="text-gray-400">→</span>
                </Link>
                <Link href="#" className="bg-white text-gray-900 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors inline-flex items-center gap-2">
                  Farda Completa <span className="text-gray-400">→</span>
                </Link>
                <Link href="#" className="bg-white text-gray-900 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors inline-flex items-center gap-2">
                  Polo Bordado <span className="text-gray-400">→</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 w-full h-[600px] relative rounded-3xl overflow-hidden bg-gray-800">
            <Image src="/empresas2.png" alt="Equipa em ambiente corporativo" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* SETOR 02 */}
      <section id="saude" className="w-full bg-[#002244] py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="w-full h-[600px] relative rounded-3xl overflow-hidden bg-white/10">
            <Image src="/saude2.png" alt="Profissionais de Saúde" fill className="object-fit" />
          </div>

          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Saúde e Hospitais
            </h2>
            
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              No setor da saúde, o uniforme não é só identidade — é higiene, segurança e respeito pelo paciente. Fornecemos jalecos, batas e fardas hospitalares para clínicas, hospitais, farmácias e laboratórios em Maputo, com tecidos que resistem a lavagens diárias a alta temperatura sem perder forma nem cor.
            </p>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8 backdrop-blur-sm">
              <span className="text-white/50 text-[10px] font-bold tracking-widest uppercase mb-6 block">O que entregamos</span>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-white shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Jalecos brancos com tecido anti-manchas
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-white shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Batas cirúrgicas e pijamas hospitalares
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-white shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Identificação bordada com nome e especialidade
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-white shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Tecido que aguenta lavagem a 90ºC
                </li>
              </ul>
            </div>

            <div>
              <span className="text-white/50 text-[10px] font-bold tracking-widest uppercase mb-4 block">Produtos Recomendados</span>
              <div className="flex flex-wrap gap-3">
                <Link href="#" className="border border-white/20 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-white/10 transition-colors inline-flex items-center gap-2">
                  Jaleco Hospitalar <span className="text-white/50">→</span>
                </Link>
                <Link href="#" className="border border-white/20 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-white/10 transition-colors inline-flex items-center gap-2">
                  Bata Clínica <span className="text-white/50">→</span>
                </Link>
                <Link href="#" className="border border-white/20 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-white/10 transition-colors inline-flex items-center gap-2">
                  Pijama Cirúrgico <span className="text-white/50">→</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SETOR 03*/}
      <section id="educacao" className="w-full bg-white py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 text-white">
            <span className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-4 block">Setor 03</span>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#003366]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-medium">
                Escolas e <span className="text-[#0055A4] font-bold">Educação</span>
              </h2>
            </div>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Uniformes escolares aguentam tudo: recreios, mochilas pesadas, lavagens diárias e o calor moçambicano. Fornecemos a escolas primárias, secundárias e privadas em Maputo, com prazos pensados para o ritmo do ano lectivo — incluindo visitas à escola para medições de turmas inteiras.
            </p>

            <div className="bg-white rounded-2xl p-8 mb-8 text-gray-900 shadow-xl">
              <span className="text-gray-400 text-[10px] font-bold tracking-widest uppercase mb-6 block">O que entregamos</span>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#003366] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Camisas, calças e saias em tecido confortável
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#003366] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Bordado do brasão da escola incluído
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#003366] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Medições no local — vamos até à escola
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#003366] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Pagamentos parcelados para pais e encarregados
                </li>
              </ul>
            </div>

            <div>
              <span className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-4 block">Produtos Recomendados</span>
              <div className="flex flex-wrap gap-3">
                <Link href="#" className="bg-white text-gray-900 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors inline-flex items-center gap-2">
                  Uniforme Escolar Completo <span className="text-gray-400">→</span>
                </Link>
                <Link href="#" className="bg-white text-gray-900 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors inline-flex items-center gap-2">
                  Bata Escolar <span className="text-gray-400">→</span>
                </Link>
                <Link href="#" className="bg-white text-gray-900 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors inline-flex items-center gap-2">
                  T-shirt Educação Física <span className="text-gray-400">→</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 w-full h-[600px] relative rounded-3xl overflow-hidden bg-gray-800">
            <Image src="/escola.png" alt="Estudantes com uniforme escolar" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* SETOR 04 */}
      <section id="hotelaria" className="w-full bg-[#FAFAFA] py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="w-full h-[600px] relative rounded-3xl overflow-hidden bg-gray-200 shadow-md">
            <Image src="/hotelaria.png" alt="Colaboradores de Hotelaria" fill className="object-cover" />
          </div>

          <div className="text-gray-900">
            <span className="text-gray-400 text-[10px] font-bold tracking-widest uppercase mb-4 block">Setor 04</span>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white border border-gray-100 rounded-xl flex items-center justify-center text-[#003366] shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-medium">
                Hotelaria e <span className="text-[#003366] font-bold">Restauração</span>
              </h2>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Num resort em Vilankulo ou num restaurante em Maputo, o uniforme é parte da experiência do hóspede. Trabalhamos com hotéis, restaurantes e cooperativas turísticas para criar uniformes elegantes — desde a recepção ao serviço de mesa, da governanta ao chef — que combinam imagem refinada com tecidos práticos para horas a fio em pé.
            </p>

            <div className="bg-white border border-gray-100 rounded-2xl p-8 mb-8 shadow-sm">
              <span className="text-gray-400 text-[10px] font-bold tracking-widest uppercase mb-6 block">O que entregamos</span>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-[#003366] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Uniformes diferenciados por função (F&B, housekeeping, recepção)
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-[#003366] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Aventais, blusas e fatos de chef profissionais
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-[#003366] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Cores e detalhes alinhados com a identidade do hotel
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-[#003366] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Entregas em Vilankulo, Inhambane e zona costeira
                </li>
              </ul>
            </div>

            <div>
              <span className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-4 block">Produtos Recomendados</span>
              <div className="flex flex-wrap gap-3">
                <Link href="#" className="bg-white border border-gray-200 text-gray-700 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors inline-flex items-center gap-2">
                  Uniforme de Hotelaria Premium <span className="text-gray-400">→</span>
                </Link>
                <Link href="#" className="bg-white border border-gray-200 text-gray-700 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors inline-flex items-center gap-2">
                  Avental Profissional <span className="text-gray-400">→</span>
                </Link>
                <Link href="#" className="bg-white border border-gray-200 text-gray-700 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors inline-flex items-center gap-2">
                  Fato de Chef <span className="text-gray-400">→</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SETOR 05*/}
      <section id="seguranca" className="w-full bg-white py-24 scroll-mt-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 text-gray-900">
            <span className="text-gray-400 text-[10px] font-bold tracking-widest uppercase mb-4 block">Setor 05</span>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-[#003366] shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-medium">
                Segurança <span className="text-[#003366] font-bold">Privada</span>
              </h2>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Fardas de segurança têm de transmitir autoridade, durabilidade e visibilidade — muitas vezes em turnos de 12 horas, ao calor ou à noite. Servimos empresas de segurança privada, condomínios e centros comerciais com uniformes tácticos, coletes reflectores certificados e calçado profissional.
            </p>

            <div className="mb-10">
              <span className="text-gray-400 text-[10px] font-bold tracking-widest uppercase mb-6 block">O que entregamos</span>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-[#003366] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Fardas tácticas com bolsos funcionais
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-[#003366] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Coletes reflectores com faixas certificadas
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-[#003366] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Galões, patches e identificação por hierarquia
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-[#003366] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Botas de segurança e acessórios complementares
                </li>
              </ul>
            </div>

            <div>
              <span className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-4 block">Produtos Recomendados</span>
              <div className="flex flex-wrap gap-3">
                <Link href="#" className="bg-white border border-gray-200 text-gray-700 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors inline-flex items-center gap-2">
                  Farda Táctica <span className="text-gray-400">→</span>
                </Link>
                <Link href="#" className="bg-white border border-gray-200 text-gray-700 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors inline-flex items-center gap-2">
                  Colete Reflector <span className="text-gray-400">→</span>
                </Link>
                <Link href="#" className="bg-white border border-gray-200 text-gray-700 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors inline-flex items-center gap-2">
                  Botas Profissionais <span className="text-gray-400">→</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 w-full h-[600px] relative rounded-3xl overflow-hidden bg-gray-200 shadow-lg shadow-gray-200/50">
            <Image src="/seguranca2.png" alt="Profissionais de Segurança" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="w-full bg-gradient-to-b from-[#002244] to-[#7EA8C9] py-28 text-center">
        <div className="max-w-4xl mx-auto px-4">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white mb-8 shadow-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-[#003366]"></div>
            <span className="text-[10px] font-bold tracking-widest text-[#003366] uppercase">
              Não encontrou o seu setor?
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 leading-tight">
            Se o seu setor não está aqui,<br className="hidden md:block"/>
            provavelmente <span className="text-white/60">já trabalhámos</span> com ele
          </h2>
          
          <p className="text-white/80 text-lg mb-12 leading-relaxed max-w-3xl mx-auto">
            De cooperativas agrícolas a equipas desportivas, de organizações religiosas a clubes recreativos — temos experiência a vestir realidades muito diferentes. Conte-nos o seu caso e fazemos uma proposta à medida.
          </p>
          
          <button className="bg-[#002244] text-white px-8 py-4 rounded-xl font-medium hover:bg-[#00152b] transition-colors inline-flex items-center justify-center gap-2 shadow-lg border border-white/10">
            Falar com a Nossa Equipa
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </button>

        </div>
      </section>

    </main>
  );
}