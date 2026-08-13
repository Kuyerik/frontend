"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  
  const getLinkClasses = (path: string) => {
    const isActive = pathname === path;
    
    return isActive 
      ? "text-[#003366] font-semibold relative after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:w-full after:h-[2px] after:bg-[#003366]"
      : "text-gray-500 hover:text-[#003366] transition-colors";
  };

  return (
    <nav className="w-full fixed top-0 z-50 bg-white border-b-[0.91px] border-[#DADAD8] shadow-[0_1px_32px_0_#1A1C1B0F] backdrop-blur-[20px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Indiwear Logo" width={92} height={64} className="w-auto h-auto" />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-[15px]">
            
            <Link href="/" className={getLinkClasses("/")}>
              Home
            </Link>
            
            <Link href="/sobre" className={getLinkClasses("/sobre")}>
              Sobre
            </Link>
            
            <button className="flex items-center gap-1 text-gray-500 hover:text-[#003366] transition-colors">
              Segmentos
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <Link href="/catalogo" className={`${getLinkClasses("/catalogo")} flex items-center gap-1`}>
              Catálogo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            
            <Link href="/contacto" className={getLinkClasses("/contacto")}>
              Contacto
            </Link>
          </div>

          <div className="hidden md:flex items-center">
            <button className="bg-[#003366] text-white px-6 py-2.5 rounded-md hover:bg-[#001f3f] transition-colors flex items-center gap-2 font-medium text-[15px]">
              Pedir Orçamento
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
          
        </div>
      </div>
    </nav>
  );
}