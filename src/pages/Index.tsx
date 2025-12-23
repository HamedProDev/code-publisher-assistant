import { Helmet } from 'react-helmet-async';
import BackgroundElements from '@/components/ui/BackgroundElements';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Hamed Hussein | Full Stack Developer</title>
        <meta name="description" content="Hamed Hussein - Full Stack Developer based in Kigali, Rwanda. Expert in React, Node.js, Python, and modern web technologies. Available for hire." />
        <meta name="keywords" content="Hamed Hussein, Full Stack Developer, React Developer, Node.js Developer, Web Developer Rwanda, Kigali Developer" />
        <link rel="canonical" href="https://hameddev.com" />
      </Helmet>
      
      <div className="min-h-screen">
        <BackgroundElements />
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default Index;
