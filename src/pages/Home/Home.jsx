import Hero from './Hero/Hero';
import About from './About/About';
import FocusAreas from './FocusAreas/FocusAreas';
import WhereWeWork from './WhereWeWork/WhereWeWork';
import Approach from './Approach/Approach';
import Goals from './Goals/Goals';
import Partner from './Partner/Partner';
import Volunteer from './Volunteer/Volunteer';
import Donate from './Donate/Donate';
import Contact from './Contact/Contact';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <FocusAreas />
      <WhereWeWork />
      <Approach />
      <Goals />
      <Partner />
      <Volunteer />
      <Donate />
      <Contact />
    </>
  );
}

export default Home;
