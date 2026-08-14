import Image from "next/image";
import Link from "next/link";


export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  fullDescription?: string;
  colors: string[];
  sizes: string[];
  image: string;
  category: string;
  bestSeller?: number;
  features: string[];
  advantages?: string[];
}

interface ProductsGridProps {
  products: Product[];
}

export default function ProductsGrid({ products }: ProductsGridProps) {
  if (!products || products.length === 0) {
    return (
      <div className="w-full text-center py-20 text-gray-500">
        Nenhum produto encontrado.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-[7px] border border-[#E8E8E6] overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col group cursor-pointer">
          
          {/* Imagem do Produto */}
          <div className="relative h-72 w-full bg-[#F5F5F5] flex items-center justify-center p-4">
            {product.bestSeller === 1 && (
              <div className="absolute top-4 left-4 z-10 bg-[#003366] text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full shadow-sm">
                Mais Pedido
              </div>
            )}
            <div className="w-full h-full relative">

               <Image 
                 src={product.image} 
                 alt={product.name} 
                 fill 
                 className="object-cover group-hover:scale-105 transition-transform duration-500" 
                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
               />
            </div>
          </div>

          {/* Informação do Cartão */}
          <div className="p-6 flex flex-col flex-grow">
            <span className="text-[#003366] text-[10px] font-bold tracking-widest uppercase mb-2">
              {product.category}
            </span>
            
            <h3 className="text-xl font-medium text-gray-900 mb-3">
              {product.name}
            </h3>
            
            <p className="text-sm text-gray-500 mb-6 line-clamp-3 flex-grow leading-relaxed">
              {product.description}
            </p>
            
            {/* Features e Link */}
            <div className="flex items-center justify-between border-t border-gray-100 pt-5 mt-auto">
              <div className="flex flex-wrap gap-2">
                {product.features?.map((feature, idx) => (
                  <span key={idx} className="bg-gray-100 text-gray-500 border border-gray-200 text-[9px] font-bold tracking-wider uppercase px-2 py-1 rounded-full">
                    {feature}
                  </span>
                ))}
              </div>
              
              <Link href={`/catalogo/${product.id}`} className="text-[#003366] text-[13px] font-bold tracking-wide flex items-center gap-1 hover:gap-2 transition-all shrink-0 ml-2">
                Ver detalhes
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.91455 6.9954H11.0763M6.9954 11.0763L11.0763 6.9954L6.9954 2.91455" stroke="#043166" strokeWidth="1.16583" strokeLinecap="round"/>
                </svg>

              </Link>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
}