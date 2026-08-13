import Hero from "@/components/Hero";
import Contacts from "@/components/Contacts";

export default function Home() {
  return (
    <div className="w-full bg-white dark:bg-black">
      <Hero />
      <Contacts />
    </div>
  );
}
