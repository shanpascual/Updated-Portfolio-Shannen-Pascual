import Hero from '../components/hero/Hero';
import Services from '../components/services/Services';
import Journey from '../components/journey/Journey';
import HireMe from '../components/hire/HireMe';
import Portfolio from '../components/portfolio/Portfolio';
import Testimonials from '../components/testimonials/Testimonials';
import Contact from '../components/contact/Contact';
import Marquee from '../components/marquee/Marquee';
import Certifications from '../components/certifications/Certifications';

const HOME_CERT_LIMIT = 4;

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Journey />
      <HireMe />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Marquee />
      <Certifications limit={HOME_CERT_LIMIT} seeAllTo="/about#certifications" />
    </>
  );
}
