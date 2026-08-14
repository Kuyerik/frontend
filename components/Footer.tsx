import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#FFFEFD] pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16">
          
          
          <div className="md:col-span-2 pr-8">
            <Link href="/" className="inline-block mb-4">
              <Image 
                src="/logo.png" 
                alt="Indiwear Logo" 
                width={160} 
                height={40} 
                className="w-auto h-8"
              />
            </Link>
            <p className="text-[#9CA3AF] text-[15px] leading-relaxed max-w-sm">
              Excelência em fardamentos profissionais.<br />
              Qualidade, personalização e entregas<br />
              rápidas em Moçambique.
            </p>
          </div>

          
          <div className="md:col-span-1">
            <h3 className="text-[#6B809B] text-xs font-bold tracking-widest uppercase mb-6">
              Produtos
            </h3>
            <ul className="space-y-4 text-[15px]">
              <li><Link href="#" className="text-[#374151] hover:text-[#003366] transition-colors">Uniformes Corporativos</Link></li>
              <li><Link href="#" className="text-[#374151] hover:text-[#003366] transition-colors">Uniformes Escolares</Link></li>
              <li><Link href="#" className="text-[#374151] hover:text-[#003366] transition-colors">Jalecos Hospitalares</Link></li>
              <li><Link href="#" className="text-[#374151] hover:text-[#003366] transition-colors">Fardas de Segurança</Link></li>
              <li><Link href="#" className="text-[#374151] hover:text-[#003366] transition-colors">T-shirts Personalizadas</Link></li>
            </ul>
          </div>

         
          <div className="md:col-span-1">
            <h3 className="text-[#6B809B] text-xs font-bold tracking-widest uppercase mb-6">
              Segmentos
            </h3>
            <ul className="space-y-4 text-[15px]">
              <li><Link href="#" className="text-[#374151] hover:text-[#003366] transition-colors">Empresas Privadas</Link></li>
              <li><Link href="#" className="text-[#374151] hover:text-[#003366] transition-colors">Saúde e Hospitais</Link></li>
              <li><Link href="#" className="text-[#374151] hover:text-[#003366] transition-colors">Hotelaria</Link></li>
              <li><Link href="#" className="text-[#374151] hover:text-[#003366] transition-colors">Educação</Link></li>
              <li><Link href="#" className="text-[#374151] hover:text-[#003366] transition-colors">Segurança Privada</Link></li>
            </ul>
          </div>

          
          <div className="md:col-span-1">
            <h3 className="text-[#6B809B] text-xs font-bold tracking-widest uppercase mb-6">
              Empresa
            </h3>
            <ul className="space-y-4 text-[15px]">
              <li><Link href="#" className="text-[#374151] hover:text-[#003366] transition-colors">Quem Somos</Link></li>
              <li><Link href="#" className="text-[#374151] hover:text-[#003366] transition-colors">Como Funciona</Link></li>
              <li><Link href="#" className="text-[#374151] hover:text-[#003366] transition-colors">Clientes</Link></li>
              <li><Link href="#" className="text-[#374151] hover:text-[#003366] transition-colors">Catálogo Digital</Link></li>
              <li><Link href="/contacto" className="text-[#374151] hover:text-[#003366] transition-colors">Contacto</Link></li>
            </ul>
          </div>

        </div>

        
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          
          <p className="text-[#9CA3AF] text-sm">
            © 2025 INDIWEAR, Fardas e Uniformes, Lda. Maputo, Moçambique.
          </p>

          
          <div className="flex items-center gap-3">
            {/* Facebook */}
            <Link href="#" className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 bg-[#F9FAFB] text-gray-500 hover:border-gray-300 hover:text-gray-700 transition-all">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_10_476)">
                <path d="M11.25 1.25H9.375C8.5462 1.25 7.75134 1.57924 7.16529 2.16529C6.57924 2.75134 6.25 3.5462 6.25 4.375V6.25H4.375V8.75H6.25V13.75H8.75V8.75H10.625L11.25 6.25H8.75V4.375C8.75 4.20924 8.81585 4.05027 8.93306 3.93306C9.05027 3.81585 9.20924 3.75 9.375 3.75H11.25V1.25Z" stroke="#1A1C1B" strokeOpacity="0.5" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_10_476">
                <rect width="15" height="15" fill="white"/>
                </clipPath>
                </defs>
                </svg>

            </Link>
            
            {/* Instagram */}
            <Link href="#" className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 bg-[#F9FAFB] text-gray-500 hover:border-gray-300 hover:text-gray-700 transition-all">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_10_479)">
                <path d="M10.625 1.25H4.375C2.64911 1.25 1.25 2.64911 1.25 4.375V10.625C1.25 12.3509 2.64911 13.75 4.375 13.75H10.625C12.3509 13.75 13.75 12.3509 13.75 10.625V4.375C13.75 2.64911 12.3509 1.25 10.625 1.25Z" stroke="#1A1C1B" strokeOpacity="0.5" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.99994 7.10644C10.0771 7.62659 9.98823 8.15782 9.74604 8.62457C9.50385 9.09132 9.12066 9.46982 8.65096 9.70623C8.18126 9.94265 7.64897 10.0249 7.12981 9.9414C6.61064 9.85786 6.13104 9.61274 5.75921 9.24091C5.38739 8.86909 5.14227 8.38949 5.05873 7.87032C4.97519 7.35116 5.05748 6.81887 5.29389 6.34917C5.53031 5.87947 5.90881 5.49628 6.37555 5.25409C6.8423 5.0119 7.37354 4.92306 7.89369 5.00019C8.42427 5.07887 8.91547 5.3261 9.29475 5.70538C9.67402 6.08466 9.92126 6.57586 9.99994 7.10644Z" stroke="#1A1C1B" strokeOpacity="0.5" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.9375 4.6875C11.2827 4.6875 11.5625 4.40768 11.5625 4.0625C11.5625 3.71732 11.2827 3.4375 10.9375 3.4375C10.5923 3.4375 10.3125 3.71732 10.3125 4.0625C10.3125 4.40768 10.5923 4.6875 10.9375 4.6875Z" fill="#1A1C1B" fillOpacity="0.5"/>
                </g>
                <defs>
                <clipPath id="clip0_10_479">
                <rect width="15" height="15" fill="white"/>
                </clipPath>
                </defs>
                </svg>

            </Link>

            {/* WhatsApp */}
            <Link href="#" className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 bg-[#F9FAFB] text-gray-500 hover:border-gray-300 hover:text-gray-700 transition-all">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_10_484)">
                <path d="M10.92 8.98878C10.7344 8.89565 9.82127 8.4469 9.65127 8.3844C9.48064 8.32253 9.35689 8.2919 9.23252 8.47815C9.1094 8.66378 8.75314 9.0819 8.64502 9.20565C8.53689 9.33003 8.42814 9.34503 8.24252 9.25253C8.05689 9.15878 7.45814 8.96315 6.74877 8.33065C6.19689 7.83815 5.82377 7.23003 5.71564 7.04378C5.60752 6.85815 5.70439 6.75753 5.79689 6.66503C5.88064 6.5819 5.98314 6.44815 6.07564 6.34003C6.16877 6.23128 6.19939 6.15378 6.26189 6.0294C6.32377 5.90565 6.29314 5.79753 6.24627 5.7044C6.19939 5.61128 5.82814 4.6969 5.67377 4.32503C5.52252 3.96315 5.36939 4.01253 5.25564 4.00628C5.14752 4.00128 5.02377 4.00003 4.89939 4.00003C4.77564 4.00003 4.57439 4.04628 4.40439 4.23253C4.23439 4.41815 3.75439 4.86753 3.75439 5.7819C3.75439 6.69565 4.42002 7.57878 4.51252 7.70315C4.60564 7.8269 5.82252 9.70315 7.68564 10.5075C8.12877 10.6988 8.47439 10.8132 8.74439 10.8982C9.18939 11.04 9.59439 11.02 9.91377 10.9719C10.2706 10.9188 11.0125 10.5225 11.1675 10.0888C11.3225 9.65503 11.3225 9.28315 11.2756 9.20565C11.2294 9.12815 11.1063 9.0819 10.92 8.98878ZM7.53127 13.6157H7.52877C6.42237 13.6157 5.33632 13.3183 4.38439 12.7544L4.15877 12.6207L1.82064 13.2344L2.44439 10.9544L2.29752 10.7206C1.67904 9.73582 1.35186 8.59608 1.35377 7.43315C1.35439 4.0269 4.12627 1.25565 7.53377 1.25565C9.18377 1.25565 10.735 1.8994 11.9013 3.0669C12.4767 3.63979 12.9328 4.3211 13.2431 5.07143C13.5535 5.82175 13.712 6.62618 13.7094 7.43815C13.7075 10.8444 10.9363 13.6157 7.53127 13.6157ZM12.7894 2.18003C12.1008 1.48685 11.2814 0.937236 10.3788 0.563026C9.47623 0.188815 8.50835 -0.00254765 7.53127 2.5611e-05C3.43439 2.5611e-05 0.10002 3.3344 0.0981445 7.43253C0.0981445 8.74253 0.440019 10.0213 1.09064 11.1481L0.0356445 15L3.97627 13.9663C5.06601 14.56 6.28717 14.8711 7.52814 14.8713H7.53127C11.6275 14.8713 14.9625 11.5369 14.9644 7.43815C14.9674 6.46145 14.7767 5.49384 14.4034 4.5913C14.0301 3.68875 13.4815 2.86919 12.7894 2.18003Z" fill="#1A1C1B" fillOpacity="0.5"/>
                </g>
                <defs>
                <clipPath id="clip0_10_484">
                <rect width="15" height="15" fill="white"/>
                </clipPath>
                </defs>
                </svg>

            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}