import FamilySection from "@/components/organism/FamilySection";
import Hero from "@/components/organism/Hero";
import NewSection from "@/components/organism/NewSection";
import PlanetsSection from "@/components/organism/PlanetSection";
import SectionWithCatalog from "@/components/organism/SectionWithCatalog";
import Sponsorships from "@/components/organism/Sponsorship";
import Vantagens from "@/components/organism/Subscription";
import ParceirosSection from "@/components/organism/ParceirosSection";
import ContatoFooter from "@/components/organism/ContatoFooter";


export default function Home() {
  return (
    <main className="">
      <Hero />
      <Sponsorships />
      <Vantagens />
      <FamilySection />
      <SectionWithCatalog />
      
      <NewSection />
      <ParceirosSection />
      <ContatoFooter />
    </main>
  );
}
