import Image from "next/image";
import Link from "next/link";
import ProductsGrid from "@/components/ProductsGrid";
import Contacts from "@/components/Contacts";
import Whatsapp from "@/components/Whatsapp";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  fullDescription: string;
  colors: string[];
  sizes: string[];
  image: string;
  category: string;
  bestSeller: number;
  features: string[];
  advantages: string[];
}


async function getProducts(): Promise<Product[]> {
  const res = await fetch('http://localhost:3001/products', { cache: 'no-store' });
  if (!res.ok) throw new Error('Falha ao carregar o catálogo');
  return res.json();
  
}

export default async function Catalogo() {
  const products = await getProducts();

  return (
    <main className="w-full min-h-screen bg-white">
      
      {/* HERO */}
      <section className="w-full bg-gradient-to-b from-[#002244] to-[#7EA8C9] pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          

          <div className="w-full flex justify-start mb-8 text-[11px] text-white/80 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Início</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Catálogo</span>
          </div>

  
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-white/70"></div>
            <span className="text-[10px] font-bold tracking-widest text-white uppercase">
              Catálogo Completo
            </span>
          </div>

          {/* Títulos */}
          <h1 className="text-4xl md:text-6xl font-medium text-white leading-tight mb-6">
            Todos os nossos uniformes,<br />num só sítio
          </h1>
          <p className="text-white/90 text-lg mb-12 max-w-2xl leading-relaxed">
            Explore a gama completa de fardamentos profissionais. Cada peça é personalizável com o logótipo, cores e detalhes da sua empresa.
          </p>

          {/* Pesquisa */}
          <div className="w-full max-w-3xl relative">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input 
              type="text" 
              placeholder="Pesquise por um termo ou por palavra-chave..." 
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-white shadow-lg text-gray-700 outline-none focus:ring-2 focus:ring-[#003366]/50 transition-shadow"
            />
          </div>
          <Whatsapp />
        </div>
      </section>

      {/* Filtros */}
      <div className="w-full bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            <div className="flex items-center gap-4 overflow-x-auto whitespace-nowrap pb-2 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <span className="text-[11px] font-bold tracking-widest text-gray-500 uppercase mr-2 shrink-0">Filtrar por:</span>
              
              {/* Filtro Activo */}
              <button className="flex items-center gap-2 bg-[#003366] text-white px-5 py-2 rounded-full text-sm font-medium shrink-0 transition-colors">
                Todos <span className="bg-white/20 px-2 py-0.5 rounded-full text-[10px]">8</span>
              </button>
              
              {/* Filtros Inactivos */}
              <button className="flex items-center gap-2 border border-gray-200 text-gray-600 bg-white hover:bg-gray-50 px-5 py-2 rounded-full text-sm font-medium shrink-0 transition-colors">
                Corporativos <span className="bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full text-[10px]">2</span>
              </button>
              
              <button className="flex items-center gap-2 border border-gray-200 text-gray-600 bg-white hover:bg-gray-50 px-5 py-2 rounded-full text-sm font-medium shrink-0 transition-colors">
                Saúde <span className="bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full text-[10px]">1</span>
              </button>
              
              <button className="flex items-center gap-2 border border-gray-200 text-gray-600 bg-white hover:bg-gray-50 px-5 py-2 rounded-full text-sm font-medium shrink-0 transition-colors">
                Industrial <span className="bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full text-[10px]">2</span>
              </button>
              
              <button className="flex items-center gap-2 border border-gray-200 text-gray-600 bg-white hover:bg-gray-50 px-5 py-2 rounded-full text-sm font-medium shrink-0 transition-colors">
                Educação <span className="bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full text-[10px]">1</span>
              </button>

              <button className="flex items-center gap-2 border border-gray-200 text-gray-600 bg-white hover:bg-gray-50 px-5 py-2 rounded-full text-sm font-medium shrink-0 transition-colors">
                Hotelaria <span className="bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full text-[10px]">1</span>
              </button>

              <button className="flex items-center gap-2 border border-gray-200 text-gray-600 bg-white hover:bg-gray-50 px-5 py-2 rounded-full text-sm font-medium shrink-0 transition-colors">
                Acessórios <span className="bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full text-[10px]">1</span>
              </button>
            </div>

            <div className="text-sm text-gray-500 shrink-0 hidden md:block">
              A mostrar 8 produtos
            </div>
          </div>
        </div>
      </div>

      {/* PRODUCTS GRID */}
      <section className="bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <ProductsGrid products={products} />

        
      </section>


      <section className="bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="w-full bg-gradient-to-r from-[#043166] to-[#B9DDF3] rounded-[7px] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          
          <div className="text-white max-w-2xl">
            <span className="text-white/70 text-[10px] font-bold tracking-widest uppercase mb-4 block">
              Não encontrou o que procura?
            </span>
            <h2 className="text-3xl md:text-4xl font-medium mb-4">
              Produzimos sob medida para a sua empresa
            </h2>
            <p className="text-white/80 text-lg leading-relaxed">
              Se o seu projecto é especial, nós adaptamos. Bordados específicos, cores institucionais, tecidos técnicos — fale connosco e desenhamos a solução à medida.
            </p>
          </div>

          <button className="bg-white text-[#003366] px-8 py-4 rounded-xl font-medium hover:bg-gray-50 transition-colors flex items-center gap-2 shrink-0 shadow-sm w-full md:w-auto justify-center">
            Falar com a Equipa
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.33105 7.99505H12.6586M7.99481 12.6588L12.6586 7.99505L7.99481 3.3313" stroke="#043166" strokeWidth="1.3325" strokeLinecap="round"/>
            </svg>

          </button>
          
        </div>
      </section>

      <section>
        
        <Contacts />

        
      </section>

    </main>
  );
}