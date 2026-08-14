"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

// Tipagem baseada no teu JSON
interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  fullDescription: string;
  fullDescription2: string;
  colors: string[];
  sizes: string[];
  image: string;
  gallery: string[];
  descriptionImage: string;
  caution: string;
  category: string;
  features: string[];
  advantages: string[];
}

export default function ProductDetailsPage() {
  const params = useParams();
  const id = params.id as string;

  // Estados
  const [productData, setProductData] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Estados da UI
  const [activeImage, setActiveImage] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(50);
  const [activeTab, setActiveTab] = useState("Descrição");

  // Fetch à API
  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3001/products/${id}`);
        if (!response.ok) throw new Error("Falha ao carregar o produto");
        
        const data: Product = await response.json();
        setProductData(data);
        
        setActiveImage(data.image);
        if (data.colors?.length > 0) setSelectedColor(data.colors[0]);
        if (data.sizes?.length > 0) setSelectedSize(data.sizes[1] || data.sizes[0]);
        
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // Loading State
  if (loading) {
    return (
      <main className="w-full min-h-screen bg-white flex flex-col items-center justify-center">
        <div className="w-12 h-12 border-4 border-gray-200 border-t-[#003366] rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-500 font-medium">A carregar detalhes da farda...</p>
      </main>
    );
  }

  // Error State
  if (error || !productData) {
    return (
      <main className="w-full min-h-screen bg-white flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Produto não encontrado</h2>
        <Link href="/catalogo" className="bg-[#003366] text-white px-6 py-3 rounded-lg font-medium mt-4">
          Voltar ao Catálogo
        </Link>
      </main>
    );
  }

 
  const nameWords = productData.name.split(" ");
  const highlightText = nameWords.length > 1 ? nameWords.splice(-2).join(" ") : "";
  const mainText = nameWords.join(" ");

  const allImages = [productData.image, ...(productData.gallery || [])];
  const uniqueImages = Array.from(new Set(allImages));

  return (
    <main className="w-full min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        
        {/* 1. BREADCRUMBS */}
        <nav className="flex text-[13px] text-gray-500 font-medium mb-10">
          <Link href="/" className="hover:text-[#003366] transition-colors">Início</Link>
          <span className="mx-3 text-gray-300">›</span>
          <Link href="/catalogo" className="hover:text-[#003366] transition-colors">Catálogo</Link>
          <span className="mx-3 text-gray-300">›</span>
          <span className="text-[#003366]">{productData.name}</span>
        </nav>

        {/* 2. SECTION: PRODUCT MAIN */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          
          {/* Lado Esquerdo: Galeria */}
          <div className="flex flex-col gap-4">
            <div className="relative w-full aspect-square bg-[#F8FAFC] rounded-2xl flex items-center justify-center overflow-hidden group">
              <Image 
                src={activeImage || "/placeholder.jpg"} 
                alt={productData.name} 
                fill 
                className="object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <button className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-semibold text-gray-700 shadow-sm flex items-center gap-2 hover:bg-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                Toque para ampliar
              </button>
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {uniqueImages.slice(0, 4).map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`relative aspect-square rounded-xl overflow-hidden bg-[#F8FAFC] flex items-center justify-center border-2 transition-all ${activeImage === img ? 'border-[#003366]' : 'border-transparent hover:border-gray-200'}`}
                >
                  <Image src={img} alt={`Galeria ${idx + 1}`} fill className="object-cover mix-blend-multiply" />
                </button>
              ))}
            </div>
          </div>

          {/* Lado Direito: Info */}
          <div className="flex flex-col">
            <span className="inline-flex items-center gap-2 bg-[#003366] text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full w-max mb-6">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
              {productData.category}
            </span>

            <h1 className="text-4xl md:text-5xl font-medium text-gray-900 leading-tight mb-6">
              {mainText} <span className="text-[#0055A4]">{highlightText}</span>
            </h1>

            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              {productData.description}
            </p>

            {/* Selector de Cor */}
            {productData.colors?.length > 0 && (
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold tracking-widest text-gray-900 uppercase">Cor</span>
                  <span className="text-sm text-gray-500">Selecionada: <span className="font-semibold text-gray-900">{selectedColor == '#FFFFFF' ? 'Branca' : selectedColor == '#1A1C1B' ? 'Preta' : selectedColor == '#043166' ? 'Azul' : selectedColor == '#266604' ? 'Verde' : selectedColor == '#94714E' ? 'Castanha' : 'Vermelha'}</span></span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {productData.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-10 h-10 rounded-full border-2 transition-all ${selectedColor === color ? 'border-[#003366] p-0.5' : 'border-transparent'}`}
                    >
                      <div className="w-full h-full rounded-full border border-gray-200 shadow-inner" style={{ backgroundColor: color }}></div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Selector de Tamanho */}
            {productData.sizes?.length > 0 && (
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold tracking-widest text-gray-900 uppercase">Tamanho</span>
                  <span className="text-sm text-gray-500">Selecionado: <span className="font-semibold text-gray-900">{selectedSize}</span></span>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {productData.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[3.5rem] h-12 rounded-lg text-sm font-semibold transition-all border ${selectedSize === size ? 'bg-[#003366] text-white border-[#003366]' : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                
                {/* Texto de Guia de Medidas adicionado aqui */}
                <p className="text-xs text-gray-500 flex items-center gap-1.5 mt-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Não sabe que tamanho escolher? <button className="text-[#0055A4] font-semibold hover:underline">Consultar guia de medidas</button>
                </p>
              </div>
            )}

            {/* Quantidade */}
            <div className="mb-10">
              <span className="text-[11px] font-bold tracking-widest text-gray-900 uppercase mb-3 block">Quantidade Estimada</span>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-200 rounded-lg bg-white h-12">
                  <button onClick={() => setQuantity(Math.max(10, quantity - 10))} className="px-4 text-gray-500 hover:text-black transition-colors font-medium">−</button>
                  <input 
                    type="number" 
                    value={quantity} 
                    onChange={(e) => setQuantity(Math.max(10, Number(e.target.value)))}
                    className="w-14 text-center font-semibold text-gray-900 outline-none appearance-none bg-transparent"
                    min="10"
                  />
                  <button onClick={() => setQuantity(quantity + 10)} className="px-4 text-gray-500 hover:text-black transition-colors font-medium">+</button>
                </div>
                <span className="text-sm text-gray-500">Pedido mínimo: 10 peças. Descontos a partir de 50.</span>
              </div>
            </div>

            {/* Botões de Ação */}
            <div className="flex gap-4 mb-8">
              <button className="flex-1 bg-[#003366] text-white h-14 rounded-xl hover:bg-[#001f3f] transition-colors flex items-center justify-center gap-2 font-medium text-lg shadow-md">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                Pedir Orçamento
              </button>
              
              <button className="w-14 h-14 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-[#25D366] hover:bg-gray-50 transition-colors shadow-sm shrink-0">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_35_602)">
                <path d="M9.03745 16.3388C7.70978 16.3389 6.40651 15.9819 5.2642 15.3053L4.99345 15.1448L2.1877 15.8813L2.9362 13.1453L2.75995 12.8648C2.01778 11.683 1.62516 10.3153 1.62745 8.91977C1.6282 4.83227 4.95445 1.50677 9.04345 1.50677C11.0235 1.50677 12.885 2.27927 14.2845 3.68027C14.975 4.36774 15.5223 5.18532 15.8947 6.08571C16.2671 6.98609 16.4573 7.95141 16.4542 8.92578C16.452 13.0133 13.1265 16.3388 9.04045 16.3388M13.104 10.7865C12.8812 10.6748 11.7855 10.1363 11.5815 10.0613C11.3767 9.98703 11.2282 9.95027 11.079 10.1738C10.9312 10.3965 10.5037 10.8983 10.374 11.0468C10.2442 11.196 10.1137 11.214 9.89095 11.103C9.6682 10.9905 8.9497 10.7558 8.09845 9.99678C7.4362 9.40578 6.98845 8.67603 6.8587 8.45253C6.72895 8.22978 6.8452 8.10902 6.9562 7.99802C7.0567 7.89827 7.1797 7.73778 7.2907 7.60803C7.40245 7.47753 7.4392 7.38453 7.5142 7.23528C7.58845 7.08678 7.5517 6.95702 7.49545 6.84527C7.4392 6.73352 6.9937 5.63628 6.80845 5.19003C6.62695 4.75578 6.4432 4.81502 6.3067 4.80752C6.17695 4.80152 6.02845 4.80002 5.8792 4.80002C5.7307 4.80002 5.4892 4.85552 5.2852 5.07902C5.0812 5.30177 4.5052 5.84103 4.5052 6.93828C4.5052 8.03478 5.30395 9.09452 5.41495 9.24377C5.5267 9.39227 6.98695 11.6438 9.2227 12.609C9.75445 12.8385 10.1692 12.9758 10.4932 13.0778C11.0272 13.248 11.5132 13.224 11.8965 13.1663C12.3247 13.1025 13.215 12.627 13.401 12.1065C13.587 11.586 13.587 11.1398 13.5307 11.0468C13.4752 10.9538 13.3275 10.8983 13.104 10.7865Z" stroke="#404942" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_35_602">
                <rect width="18" height="18" fill="white"/>
                </clipPath>
                </defs>
                </svg>

              </button>
            </div>

            {/* Vantagens / Trust Badges Completas */}
            <div className="flex flex-col gap-3 bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white text-[#003366] flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.75 9.00001L8.25 10.5L11.25 7.50001M15.4635 4.48801C13.0921 4.61394 10.7676 3.79397 9 2.20801C7.23245 3.79397 4.90793 4.61394 2.5365 4.48801C2.34565 5.22684 2.24938 5.98692 2.25 6.75001C2.25 10.9433 5.118 14.4675 9 15.4665C12.882 14.4675 15.75 10.944 15.75 6.75001C15.75 5.96851 15.6503 5.21101 15.4635 4.48801Z" stroke="#043166" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Personalização incluída</p>
                  <p className="text-xs text-gray-500 mt-0.5">Bordado do logótipo sem custos extra para encomendas a partir de 25 peças.</p>
                </div>
              </div>
              
              <div className="w-full h-px bg-gray-200 my-1"></div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white text-[#003366] flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6V9L11.25 11.25M15.75 9C15.75 9.88642 15.5754 10.7642 15.2362 11.5831C14.897 12.4021 14.3998 13.1462 13.773 13.773C13.1462 14.3998 12.4021 14.897 11.5831 15.2362C10.7642 15.5754 9.88642 15.75 9 15.75C8.11358 15.75 7.23583 15.5754 6.41689 15.2362C5.59794 14.897 4.85382 14.3998 4.22703 13.773C3.60023 13.1462 3.10303 12.4021 2.76381 11.5831C2.42459 10.7642 2.25 9.88642 2.25 9C2.25 7.20979 2.96116 5.4929 4.22703 4.22703C5.4929 2.96116 7.20979 2.25 9 2.25C10.7902 2.25 12.5071 2.96116 13.773 4.22703C15.0388 5.4929 15.75 7.20979 15.75 9Z" stroke="#043166" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Entrega em 48h em Maputo</p>
                  <p className="text-xs text-gray-500 mt-0.5">Para encomendas até 100 peças. Outras cidades: 5–7 dias úteis.</p>
                </div>
              </div>
              
              <div className="w-full h-px bg-gray-200 my-1"></div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white text-[#003366] flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.25 9L3.75 7.5M3.75 7.5L9 2.25L14.25 7.5M3.75 7.5V15C3.75 15.1989 3.82902 15.3897 3.96967 15.5303C4.11032 15.671 4.30109 15.75 4.5 15.75H6.75M14.25 7.5L15.75 9M14.25 7.5V15C14.25 15.1989 14.171 15.3897 14.0303 15.5303C13.8897 15.671 13.6989 15.75 13.5 15.75H11.25M6.75 15.75C6.94891 15.75 7.13968 15.671 7.28033 15.5303C7.42098 15.3897 7.5 15.1989 7.5 15V12C7.5 11.8011 7.57902 11.6103 7.71967 11.4697C7.86032 11.329 8.05109 11.25 8.25 11.25H9.75C9.94891 11.25 10.1397 11.329 10.2803 11.4697C10.421 11.6103 10.5 11.8011 10.5 12V15C10.5 15.1989 10.579 15.3897 10.7197 15.5303C10.8603 15.671 11.0511 15.75 11.25 15.75M6.75 15.75H11.25" stroke="#043166" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Visita às instalações</p>
                  <p className="text-xs text-gray-500 mt-0.5">Para encomendas grandes, deslocamo-nos para fazer medições no local.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* 3. SECTION: TABS DETALHES */}
      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center gap-8 border-b border-gray-800 mb-12 overflow-x-auto [&::-webkit-scrollbar]:hidden">
            {["Descrição", "Especificações", "Personalização", "Cuidados"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-sm font-medium transition-colors whitespace-nowrap border-b-2 ${activeTab === tab ? 'text-[#0055A4] border-[#0055A4]' : 'text-gray-500 border-transparent hover:text-gray-300'}`}
              >
                {tab}
              </button>
            ))}
          </div>

{activeTab === "Descrição" && (
            // Alterado de items-center para items-start
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"> 
              
              {/* Removido o mt-[-80px] */}
              <div> 
                <span className="text-[#003366] text-[10px] font-bold tracking-widest uppercase mb-4 block">
                  Sobre o Produto
                </span>
                
                {/* Alterado de text-white para text-gray-900 */}
                <h3 className="text-3xl font-medium text-gray-900 mb-6">
                  A camisa que veste a sua <span className="text-[#0055A4]">marca</span> todos os dias
                </h3>
                
                {/* Alterado de text-gray-400 para text-gray-600 para melhor leitura */}
                <p className="text-gray-600 leading-relaxed mb-6">
                    {productData.fullDescription}
                </p>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {productData.fullDescription2}
                </p>

                <ul className="space-y-4">
                  {productData.advantages?.map((adv, idx) => (
                    // Alterado de text-gray-300 para text-gray-600
                    <li key={idx} className="flex items-center gap-3 text-gray-600">
                      <svg className="w-5 h-5 text-[#0055A4] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {adv}
                    </li>
                  ))}
                </ul>
              </div>
              
              {productData.descriptionImage && (
                <div className="relative aspect-square rounded-3xl overflow-hidden bg-gray-100">
                  <Image src={productData.descriptionImage} alt="Detalhes do Produto" fill className="object-cover" />
                </div>
              )}
            </div>
          )}

          {activeTab === "Cuidados" && (
            <div className="text-gray-400 max-w-2xl">
              <p>{productData.caution}</p>
            </div>
          )}
          
          {(activeTab === "Especificações" || activeTab === "Personalização") && (
            <div className="text-gray-400">Conteúdo da tab {activeTab} em desenvolvimento...</div>
          )}

        </div>
      </section>

      {/* 4. SECTION: RELATED PRODUCTS (Fundo Escuro) */}
      <section className="w-full bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-[#003366] text-[10px] font-bold tracking-widest uppercase mb-4 block">Pode também gostar</span>
              <h2 className="text-3xl md:text-4xl font-medium text-gray-500">
                Produtos <span className="text-[#0055A4]">relacionados</span>
              </h2>
            </div>
            <Link href="/catalogo" className="bg-[#003366] text-white px-6 py-3 rounded-lg hover:bg-[#001f3f] transition-colors font-medium flex items-center gap-2 shrink-0 w-max">
              Ver todo o catálogo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Relacionado 1 */}
            <div className="bg-white rounded-xl overflow-hidden flex flex-col group cursor-pointer border border-gray-100">
              <div className="aspect-square bg-[#EAEAEA] relative overflow-hidden flex items-center justify-center">
                <Image src="/RELACIONADO 1_ Farda completa.png" alt="Farda Profissional Completa" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <span className="text-[#003366] text-[9px] font-bold tracking-widest uppercase block mb-1">Corporativo</span>
                <h4 className="text-gray-900 font-medium text-sm">Farda Profissional Completa</h4>
              </div>
            </div>
            
            {/* Relacionado 2 */}
            <div className="bg-white rounded-xl overflow-hidden flex flex-col group cursor-pointer border border-gray-100">
              <div className="aspect-square bg-[#EAEAEA] relative overflow-hidden flex items-center justify-center">
                <div className="text-gray-400 flex flex-col items-center">
                  <svg className="w-6 h-6 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  <span className="text-xs">T-shirt Premium</span>
                </div>
              </div>
              <div className="p-5">
                <span className="text-[#003366] text-[9px] font-bold tracking-widest uppercase block mb-1">Eventos</span>
                <h4 className="text-gray-900 font-medium text-sm">T-shirt Personalizada Premium</h4>
              </div>
            </div>

            {/* Relacionado 3 */}
            <div className="bg-white rounded-xl overflow-hidden flex flex-col group cursor-pointer border border-gray-100">
              <div className="aspect-square bg-[#EAEAEA] relative overflow-hidden flex items-center justify-center">
                <div className="text-gray-400 flex flex-col items-center">
                  <svg className="w-6 h-6 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  <span className="text-xs">Colete Reflector</span>
                </div>
              </div>
              <div className="p-5">
                <span className="text-[#003366] text-[9px] font-bold tracking-widest uppercase block mb-1">Segurança</span>
                <h4 className="text-gray-900 font-medium text-sm">Colete Reflector Alta Visibilidade</h4>
              </div>
            </div>

            {/* Relacionado 4 */}
            <div className="bg-white rounded-xl overflow-hidden flex flex-col group cursor-pointer border border-gray-100">
              <div className="aspect-square bg-[#EAEAEA] relative overflow-hidden flex items-center justify-center">
                <div className="text-gray-400 flex flex-col items-center">
                  <svg className="w-6 h-6 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  <span className="text-xs">Polo Profissional</span>
                </div>
              </div>
              <div className="p-5">
                <span className="text-[#003366] text-[9px] font-bold tracking-widest uppercase block mb-1">Corporativo</span>
                <h4 className="text-gray-900 font-medium text-sm">Polo Profissional Bordado</h4>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* 5. SECTION: CTA BAND */}
      <section className="w-full bg-gradient-to-b from-[#002244] to-[#7EA8C9] py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <span className="text-white/70 text-[10px] font-bold tracking-widest uppercase mb-4 block">Pronto para encomendar</span>
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 leading-tight">
            Vamos transformar isto numa<br/>encomenda?
          </h2>
          <p className="text-white/80 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
            Diga-nos quantas peças precisa, quando precisa e qual o seu logótipo. Recebe orçamento detalhado em menos de 24 horas.
          </p>
          <button className="bg-white text-[#003366] px-8 py-4 rounded-xl font-medium hover:bg-gray-50 transition-colors inline-flex items-center justify-center gap-2 shadow-lg">
            Pedir Orçamento Agora
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </button>
        </div>
      </section>

    </main>
  );
}