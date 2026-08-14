export default function Contacts() {
  return (
    <div className="w-full bg-[#F3F7F9] py-10 border-t border-[#DADAD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          
          <div className="flex flex-col">
            <div className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-[#003366] mb-4 shadow-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <span className="text-[11px] font-bold text-gray-400 tracking-widest uppercase mb-1">Sede</span>
            <span className="text-[15px] font-bold text-gray-900 mb-1">Maputo, Moçambique</span>
            <span className="text-[13px] text-gray-500">Também presentes em Vilankulo</span>
          </div>

          
          <div className="flex flex-col">
            <div className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-[#003366] mb-4 shadow-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <span className="text-[11px] font-bold text-gray-400 tracking-widest uppercase mb-1">Telefone</span>
            <span className="text-[15px] font-bold text-gray-900 mb-1">+258 84 000 0000</span>
            <span className="text-[13px] text-gray-500">WhatsApp Business disponível</span>
          </div>

          
          <div className="flex flex-col">
            <div className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-[#003366] mb-4 shadow-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-[11px] font-bold text-gray-400 tracking-widest uppercase mb-1">Horário</span>
            <span className="text-[15px] font-bold text-gray-900 mb-1">Seg–Sex: 08h–17h</span>
            <span className="text-[13px] text-gray-500">Sábado: 08h–12h</span>
          </div>

          
          <div className="flex flex-col">
            <div className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-[#003366] mb-4 shadow-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <span className="text-[11px] font-bold text-gray-400 tracking-widest uppercase mb-1">Email</span>
            <span className="text-[15px] font-bold text-gray-900 mb-1">geral@indiweare.co.mz</span>
            <span className="text-[13px] text-gray-500">Resposta em até 24 horas</span>
          </div>

        </div>
      </div>
    </div>
  );
}