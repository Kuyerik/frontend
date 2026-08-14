import Hero from "@/components/Hero";
import Contacts from "@/components/Contacts";
import Essencia from "@/components/Essencia";
import Segmentos from "@/components/Segmentos";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import TrustBar from "@/components/TrustBar";
export default function Home() {
  const pillText = "Maputo & Vilankulo, Moçambique";
  const headingText = "Fardamentos que representam a sua marca";
  const descriptionText = "Uniformes profissionais personalizados para empresas, escolas, hospitais e hotéis em toda Moçambique. Bordados precisos, tecidos duráveis, entregas rápidas.";
  return (
    <div className="w-full bg-white dark:bg-black">
      <Hero 
        pillText={pillText}
        headingText={headingText}
        descriptionText={descriptionText}
      />
      <TrustBar />
      <Essencia />
      <Segmentos />
      <Testimonials />
      <Contact />
      <Contacts />
    </div>
  );
}
