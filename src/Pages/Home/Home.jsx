import Featured from "./Featured";
import HeroSlider from "@/components/HeroSlider";
import PopularDestinations from "@/Pages/Home/PopularDestinations";
import BookWithConfidence from "./BookWithConfidence";
import PopularWay from "./PopularWay";
import TailormadeSection from "./TailormadeSection";
import TripsSection from "@/components/TripsSection";
import FAQSection from "@/components/FAQSection";
import ReviewsSection from "../Aboutus/ReviewsSection";

const Home = ({ trips,home }) => {
  const faqSection = home?.faq?.[0];
  return (
    <div>
      <HeroSlider />

      <TripsSection
        title="Explore Our Signature Tanzania Safari"
        subtitle="Curated safari experiences designed for comfort, wildlife, and discovery."
        trips={trips}
        destination="tanzania"
        layout="slider"
        btnname="VIEW ALL TRIPS"
        btnlink="tanzania-safaris"
        showArrows={true}
      />

      <PopularDestinations />

      <BookWithConfidence />

      <TripsSection
        title="Kilimanjaro Climbing Packages For Every Climber"
        subtitle="Choose Kilimanjaro routes suited to different goals, fitness levels, climbing styles, and summit plans."
        trips={trips}
        destination="kili"
        layout="slider"
        btnname="Explore Kilimanjaro"
        btnlink="mount-kilimanjaro"
        bg="bg-[#fedec7]"
        showArrows={true}
      />

      <PopularWay />
       <FAQSection
        title={faqSection.title}
        subtitle={faqSection.subtitle}
        faqs={faqSection.faqs}
      />
      <ReviewsSection/>
      <Featured />
      <TailormadeSection />
    </div>
  );
};

export default Home;
