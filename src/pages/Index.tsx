import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import HeroCarousel from "@/components/home/HeroCarousel";
import QuickLinks from "@/components/home/QuickLinks";
import WelcomeSection from "@/components/home/WelcomeSection";
import ProgramsSection from "@/components/home/ProgramsSection";
import StatsSection from "@/components/home/StatsSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Lycée de Ruhango Ikirezi TSS | Technical Secondary School of Excellence in Rwanda</title>
        <meta 
          name="description" 
          content="Lycée de Ruhango Ikirezi Technical Secondary School - A leading TVET institution in Rwanda offering programs in Masonry, Culinary Arts, Computer Application, Automobile Technology, Tailoring, and Tourism." 
        />
        <meta name="keywords" content="Lycée de Ruhango, TVET Rwanda, Technical School Rwanda, Vocational Training Rwanda, Ruhango District" />
      </Helmet>
      <Layout>
        <HeroCarousel />
        <QuickLinks />
        <WelcomeSection />
        <ProgramsSection />
        <StatsSection />
      </Layout>
    </>
  );
};

export default Index;
