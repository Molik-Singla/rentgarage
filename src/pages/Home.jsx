// Components
import Experience from "../components/home/Experience";
import FamousPlaces from "../components/home/FamousPlaces";
import FaqsSection from "../components/home/FaqsSection";
import HeroSlider from "../components/home/HeroSlider";
import Testimonials from "../components/home/Testimonials";
import WaySection from "../components/home/WaySection";
import WhatWeOffer from "../components/home/WhatWeOffer";
import WhyChooseUs from "../components/home/WhyChooseUs";

const Home = () => {
    return (
        <section className="HERO">
            <HeroSlider />
            <WaySection />
            <WhatWeOffer />
            <WhyChooseUs />
            <Experience />
            <Testimonials />
            <FamousPlaces />
            <FaqsSection />
        </section>
    );
};
export default Home;
