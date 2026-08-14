import Image from "next/image";
import Hero from "@/components/Hero";
import Link from "next/link";

export default function() {
    const pillText = "A Nossa História";
    const headingText = "Mais que fardas. Identidade vestida.";
    const descriptionText = "Somos uma marca moçambicana, com raízes em Maputo, que veste empresas, escolas, hospitais e instituições há vários anos. Cada peça que produzimos carrega o nosso compromisso com a qualidade, durabilidade e o orgulho de fabricar localmente.";
  
  return (
    <main className="w-full min-h-screen">
       
      <Hero 
        pillText={pillText}
        headingText={headingText}
        descriptionText={descriptionText}
        showButtons={false}
        showStats={false}
      />
      {/* 2. SECÇÃO: STATS BAND (STATS BAND.png) */}
      <section className="bg-white border-b border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200 text-center">
            
            <div className="py-6 lg:py-0 px-4 flex flex-col items-center justify-center">
              <span className="text-5xl font-light text-[#003366] mb-3">500+</span>
              <span className="text-[11px] font-bold tracking-widest text-gray-500 uppercase mb-1">Empresas Servidas</span>
              <span className="text-sm text-gray-400">Em Maputo, Matola</span>
            </div>
            
            <div className="py-6 lg:py-0 px-4 flex flex-col items-center justify-center">
              <span className="text-5xl font-light text-[#003366] mb-3">12+</span>
              <span className="text-[11px] font-bold tracking-widest text-gray-500 uppercase mb-1">Tipos de Uniforme</span>
              <span className="text-sm text-gray-400">Da camisa ao colete reflector</span>
            </div>
            
            <div className="py-6 lg:py-0 px-4 flex flex-col items-center justify-center">
              <span className="text-5xl font-light text-[#003366] mb-3">98%</span>
              <span className="text-[11px] font-bold tracking-widest text-gray-500 uppercase mb-1">Entregas no Prazo</span>
              <span className="text-sm text-gray-400">Compromisso é a nossa palavra</span>
            </div>
            
            <div className="py-6 lg:py-0 px-4 flex flex-col items-center justify-center">
              <span className="text-5xl font-light text-[#003366] mb-3">2</span>
              <span className="text-[11px] font-bold tracking-widest text-gray-500 uppercase mb-1">Locais Físicos</span>
              <span className="text-sm text-gray-400">Maputo (sede)</span>
            </div>

          </div>
        </div>
      </section>
      {/* 1. SECÇÃO: RAZÃO DE SER (IMAGEM.jpg) */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-[#0055A4] text-xs font-bold tracking-widest uppercase mb-4 block">A Nossa Razão de Ser</span>
            <h2 className="text-4xl md:text-5xl font-medium text-gray-500 mb-6">
              O que nos move <span className="text-[#0055A4] font-bold">todos os dias</span>
            </h2>
            <p className="text-gray-400 max-w-lg text-lg">
              Não é apenas tecido cosido. É a confiança da sua equipa transformada em uniforme.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Coluna Esquerda: Missão e Visão */}
            <div className="flex flex-col gap-6">
              {/* Missão */}
              <div className="bg-white rounded-[7px] border border-[#E8E8E6] p-10 flex-1 flex flex-col justify-center">
                <div className="w-12 h-12 border border-gray-200 rounded-xl flex items-center justify-center mb-8">
                  <svg className="w-6 h-6 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 12a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z" />
                  </svg>
                </div>
                <span className="text-[#003366] text-[10px] font-bold tracking-widest uppercase mb-4 block">Missão</span>
                <h3 className="text-3xl font-serif text-gray-900 mb-4">Vestir o profissionalismo de Moçambique</h3>
                <p className="text-gray-500 leading-relaxed">
                  Existimos para que cada colaborador, em cada empresa que servimos, sinta orgulho ao vestir o seu uniforme. Acreditamos que uma boa farda é o primeiro aperto de mão entre uma marca e o seu cliente.
                </p>
              </div>

              {/* Visão */}
              <div className="bg-[#043166] rounded-[7px] p-10 flex-1 flex flex-col justify-center">
                <div className="w-12 h-12 border border-white/20 rounded-xl flex items-center justify-center mb-8">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-white/70 text-[10px] font-bold tracking-widest uppercase mb-4 block">Visão</span>
                <h3 className="text-3xl font-serif text-white mb-4">Ser a referência nacional em fardamentos profissionais</h3>
                <p className="text-white/80 leading-relaxed">
                  Queremos que, quando uma empresa moçambicana pensar em uniformes de qualidade, o nome INDIWEARE seja o primeiro a aparecer — pela durabilidade, pelo serviço e pelo cuidado em cada detalhe.
                </p>
              </div>
            </div>

            {/* Coluna Direita: Imagem do Atelier */}
            <div 
              className="rounded-2xl relative min-h-[500px] lg:min-h-full overflow-hidden flex flex-col justify-end p-10"
              style={{ backgroundImage: "url('/maquina2.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="relative z-10">
                <span className="text-white/70 text-[10px] font-bold tracking-widest uppercase mb-2 block">Atelier Próprio</span>
                <h3 className="text-3xl font-serif text-white mb-3">Onde tudo nasce</h3>
                <p className="text-white/80">Maputo — controlo total da produção, da primeira costura ao bordado final.</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* 3. SECÇÃO: VALORES (Section - VALORES.png) */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-[#003366] text-xs font-bold tracking-widest uppercase mb-4 block">Os Nossos Valores</span>
            <h2 className="text-4xl md:text-5xl font-medium text-gray-800">
              Princípios que <span className="text-[#003366] font-bold">vestimos</span> todos os dias
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Valor 1 */}
            <div className="bg-white border border-gray-200 rounded-[7px] p-8 shadow-sm">
              <div className="w-10 h-10 bg-[#F0F4F8] text-[#003366] rounded-lg flex items-center justify-center mb-6">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.99653 11.9951L10.9957 13.9943L14.994 9.99593M20.6097 5.9816C17.4491 6.14945 14.351 5.0566 11.9953 2.94287C9.63953 5.0566 6.54145 6.14945 3.38087 5.9816C3.12651 6.96631 2.9982 7.97932 2.99903 8.99635C2.99903 14.585 6.82143 19.2821 11.9953 20.6135C17.1691 19.2821 20.9915 14.586 20.9915 8.99635C20.9915 7.95478 20.8586 6.9452 20.6097 5.9816Z" stroke="#043166" strokeWidth="1.79925" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Qualidade Primeiro</h3>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                Cada peça passa por controlo rigoroso antes de sair do atelier. Não comprometemos a qualidade — preferimos atrasar um dia do que entregar mal.
              </p>
            </div>

            {/* Valor 2 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <div className="w-10 h-10 bg-[#F0F4F8] text-[#003366] rounded-lg flex items-center justify-center mb-6">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.9953 7.99694V11.9953L14.994 14.994M20.9915 11.9953C20.9915 13.1767 20.7588 14.3465 20.3067 15.438C19.8546 16.5295 19.192 17.5212 18.3566 18.3566C17.5212 19.192 16.5295 19.8546 15.438 20.3067C14.3465 20.7588 13.1767 20.9915 11.9953 20.9915C10.8139 20.9915 9.64403 20.7588 8.55256 20.3067C7.46108 19.8546 6.46934 19.192 5.63396 18.3566C4.79858 17.5212 4.13593 16.5295 3.68382 15.438C3.23172 14.3465 2.99902 13.1767 2.99902 11.9953C2.99902 9.60932 3.94684 7.32109 5.63396 5.63396C7.32109 3.94684 9.60932 2.99902 11.9953 2.99902C14.3812 2.99902 16.6695 3.94684 18.3566 5.63396C20.0437 7.32109 20.9915 9.60932 20.9915 11.9953Z" stroke="#043166" strokeWidth="1.79925" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Pontualidade</h3>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                Quando dizemos 48 horas, são 48 horas. As nossas instituições parceiras dependem de prazos cumpridos e não vamos falhar com elas.
              </p>
            </div>

            {/* Valor 3 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <div className="w-10 h-10 bg-[#F0F4F8] text-[#003366] rounded-lg flex items-center justify-center mb-6">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.993 19.9916H21.9909V17.9925C21.9909 17.3693 21.7967 16.7615 21.4353 16.2538C21.0739 15.7461 20.5633 15.3635 19.9745 15.1594C19.3857 14.9552 18.7479 14.9396 18.1498 15.1147C17.5517 15.2897 17.023 15.6468 16.6372 16.1362M16.993 19.9916H6.99718M6.99718 19.9916V17.9925C6.99718 17.3367 7.12313 16.71 7.35304 16.1362C7.72424 15.2086 8.36486 14.4134 9.19227 13.8533C10.0197 13.2932 10.9959 12.9938 11.9951 12.9938C12.9943 12.9938 13.9705 13.2932 14.7979 13.8533C15.6253 14.4134 16.266 15.2086 16.6372 16.1362C16.8671 16.71 16.993 17.3367 16.993 17.9925V19.9916M6.99718 19.9916H1.99927V17.9925C1.99931 17.3693 2.19352 16.7615 2.5549 16.2538C2.91627 15.7461 3.42686 15.3635 4.01568 15.1594C4.6045 14.9552 5.24229 14.9396 5.8404 15.1147C6.43852 15.2897 6.96723 15.6468 7.35304 16.1362M14.9938 6.99704C14.9938 7.79236 14.6779 8.5551 14.1155 9.11748C13.5532 9.67985 12.7904 9.99579 11.9951 9.99579C11.1998 9.99579 10.437 9.67985 9.87466 9.11748C9.31229 8.5551 8.99635 7.79236 8.99635 6.99704C8.99635 6.20172 9.31229 5.43898 9.87466 4.8766C10.437 4.31423 11.1998 3.99829 11.9951 3.99829C12.7904 3.99829 13.5532 4.31423 14.1155 4.8766C14.6779 5.43898 14.9938 6.20172 14.9938 6.99704Z" stroke="#043166" strokeWidth="1.79925" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Proximidade</h3>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                Atendimento personalizado a cada cliente, sem chatbots nem respostas frias. Falamos consigo, ouvimos as suas necessidades, ajustamos a proposta.
              </p>
            </div>

            {/* Valor 4 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <div className="w-10 h-10 bg-[#F0F4F8] text-[#003366] rounded-lg flex items-center justify-center mb-6">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.99902 11.9953L4.99819 9.99611M4.99819 9.99611L11.9953 2.99902L18.9924 9.99611M4.99819 9.99611V19.9919C4.99819 20.257 5.1035 20.5113 5.29096 20.6988C5.47842 20.8862 5.73267 20.9915 5.99777 20.9915H8.99652M18.9924 9.99611L20.9915 11.9953M18.9924 9.99611V19.9919C18.9924 20.257 18.887 20.5113 18.6996 20.6988C18.5121 20.8862 18.2579 20.9915 17.9928 20.9915H14.994M8.99652 20.9915C9.26163 20.9915 9.51588 20.8862 9.70334 20.6988C9.89079 20.5113 9.99611 20.257 9.99611 19.9919V15.9936C9.99611 15.7285 10.1014 15.4743 10.2889 15.2868C10.4763 15.0993 10.7306 14.994 10.9957 14.994H12.9949C13.26 14.994 13.5142 15.0993 13.7017 15.2868C13.8891 15.4743 13.9944 15.7285 13.9944 15.9936V19.9919C13.9944 20.257 14.0998 20.5113 14.2872 20.6988C14.4747 20.8862 14.7289 20.9915 14.994 20.9915M8.99652 20.9915H14.994" stroke="#043166" strokeWidth="1.79925" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Produção Local</h3>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                Acreditamos em fabricar em Moçambique, criando emprego local e mantendo o controlo da qualidade. O nosso atelier é em Maputo, não importado.
              </p>
            </div>

            {/* Valor 5 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <div className="w-10 h-10 bg-[#F0F4F8] text-[#003366] rounded-lg flex items-center justify-center mb-6">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.99736 6.99736H7.00735M6.99736 2.99902H11.9953C12.5071 2.99902 13.0188 3.19394 13.4087 3.58478L20.4058 10.5819C20.7806 10.9568 20.9911 11.4652 20.9911 11.9953C20.9911 12.5254 20.7806 13.0338 20.4058 13.4087L13.4087 20.4058C13.0338 20.7806 12.5254 20.9911 11.9953 20.9911C11.4652 20.9911 10.9568 20.7806 10.5819 20.4058L3.58478 13.4087C3.20984 13.0339 2.99914 12.5254 2.99902 11.9953V6.99736C2.99902 5.93693 3.42028 4.91994 4.17011 4.17011C4.91994 3.42028 5.93693 2.99902 6.99736 2.99902Z" stroke="#043166" strokeWidth="1.79925" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Detalhe</h3>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                O bordado torto é inaceitável. As cores erradas, também. Cuidamos dos detalhes porque sabemos que é isso que distingue a sua empresa.
              </p>
            </div>

            {/* Valor 6 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <div className="w-10 h-10 bg-[#F0F4F8] text-[#003366] rounded-lg flex items-center justify-center mb-6">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.9953 2.99902C14.3812 2.99902 16.6695 3.94684 18.3566 5.63396C20.0437 7.32109 20.9915 9.60932 20.9915 11.9953C20.9915 14.3812 20.0437 16.6695 18.3566 18.3566C16.6695 20.0437 14.3812 20.9915 11.9953 20.9915M20.9915 11.9953H2.99902M11.9953 2.99902C9.60932 2.99902 7.32109 3.94684 5.63396 5.63396C3.94684 7.32109 2.99902 9.60932 2.99902 11.9953C2.99902 14.3812 3.94684 16.6695 5.63396 18.3566C7.32109 20.0437 9.60932 20.9915 11.9953 20.9915M11.9953 20.9915C13.6516 20.9915 14.994 16.9632 14.994 11.9953C14.994 7.02734 13.6516 2.99902 11.9953 2.99902M11.9953 20.9915C10.339 20.9915 8.99652 16.9632 8.99652 11.9953C8.99652 7.02734 10.339 2.99902 11.9953 2.99902" stroke="#043166" strokeWidth="1.79925" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Confiança</h3>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                A maioria dos nossos clientes volta. Não é por marketing — é porque cumprimos a palavra dada na primeira encomenda.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SECÇÃO: EQUIPA (Group 9.jpg) */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16">
            <span className="text-[#0055A4] text-xs font-bold tracking-widest uppercase mb-4 block">Quem Faz Acontecer</span>
            <h2 className="text-4xl md:text-5xl font-medium text-gray-500 mb-6">
              As mãos por detrás de <span className="text-[#0055A4] font-bold">cada peça</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-lg">
              Uma equipa pequena, dedicada, que conhece cada cliente pelo nome.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto text-left">
            {/* Equipa 1 */}
            <div className="bg-white rounded-2xl overflow-hidden flex-1 shadow-lg">
              <div className="h-80 w-full bg-gray-200 relative">
                <Image src="/samuel.png" alt="Samuel Joaquim Nhantumbo" fill className="object-cover object-top" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-medium text-gray-900 mb-1">Samuel Joaquim Nhantumbo</h3>
                <p className="text-[#003366] font-semibold text-sm mb-4">Responsável de Produção</p>
                <p className="text-gray-500 text-[15px] leading-relaxed">
                  Coordena o atelier e garante que cada peça sai com a qualidade que prometemos. Olho clínico, mãos firmes.
                </p>
              </div>
            </div>

            {/* Equipa 2 */}
            <div className="bg-white rounded-2xl overflow-hidden flex-1 shadow-lg">
              <div className="h-80 w-full bg-gray-200 relative">
                <Image src="/david.png" alt="David Alberto Luis" fill className="object-cover object-top" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-medium text-gray-900 mb-1">David Alberto Luis</h3>
                <p className="text-[#003366] font-semibold text-sm mb-4">Responsável de Bordados</p>
                <p className="text-gray-500 text-[15px] leading-relaxed">
                  Se o seu logótipo ficou perfeito, foi cuidado por estas mãos. Especialista em bordado industrial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECÇÃO: GALERIA (Section - GALERIA DO ATELIER.jpg) */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-[#003366] text-xs font-bold tracking-widest uppercase mb-4 block">Por Dentro do Atelier</span>
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4">
              Onde a sua farda <span className="text-[#003366] font-bold">ganha vida</span>
            </h2>
            <p className="text-gray-500 text-lg">
              Espreite o nosso espaço de trabalho e os bastidores da produção.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
            {/* Linha 1 */}
            <div className="rounded-xl overflow-hidden bg-gray-100 row-span-2 relative">
               <Image src="/maquina2.png" alt="Máquina de Costura" fill className="object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden bg-gray-100 relative">
               <Image src="/bordado.png" alt="Logótipo Bordado" fill className="object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden bg-gray-100 relative">
               <Image src="/fato.png" alt="Batas Médicas" fill className="object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden bg-gray-100 relative">
               <Image src="/bata.png" alt="Batas Médicas" fill className="object-cover" />
            </div>
            
            {/* Linha 2 */}
            <div className="rounded-xl overflow-hidden bg-gray-100 col-span-2 relative">
               <Image src="/farda.png" alt="Fardas Segurança" fill className="object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden bg-gray-100 relative">
               <Image src="/bata.png" alt="Batas Médicas Detalhe" fill className="object-cover" />
            </div>

            {/* Linha 3 */}
            <div className="rounded-xl overflow-hidden bg-gray-100 relative">
               <Image src="/fato.png" alt="Fardas em Cabide" fill className="object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden bg-gray-100 col-span-2 relative">
               <Image src="/farda.png" alt="Fardas Segurança Detalhe" fill className="object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden bg-gray-100 relative">
               <Image src="/bata.png" alt="Mais Fardas em Cabide" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      
      <section className="w-full bg-gradient-to-r from-[#B9D9F3] to-[#043166] py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          
          <div className="flex flex-col items-center justify-center mb-6">
            <span className="text-white text-[10px] font-bold tracking-widest uppercase mb-4">Vamos Conversar</span>
            <div className="w-8 h-[1px] bg-white/40 mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-medium text-white leading-tight">
              Pronto para vestir a sua equipa como ela merece?
            </h2>
          </div>

          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            A nossa equipa está pronta para ouvir o seu projecto. Pedimos um orçamento sem compromisso e respondemos em menos de 24 horas.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-[#003366] px-8 py-3.5 rounded-lg hover:bg-gray-100 transition-colors font-medium flex items-center justify-center gap-2">
              Pedir Orçamento
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <button className="border border-white/40 bg-transparent text-white px-8 py-3.5 rounded-lg hover:bg-white/10 transition-colors font-medium">
              Ver Catálogo
            </button>
          </div>

        </div>
      </section>

      

    </main>
  );
}