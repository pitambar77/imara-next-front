import Featured from "./Featured";
import HeroSlider from "@/components/HeroSlider";
import PopularDestinations from "@/Pages/Home/PopularDestinations";
import BookWithConfidence from "./BookWithConfidence";
import PopularWay from "./PopularWay";
import TailormadeSection from "./TailormadeSection";
import TripsSection from "@/components/TripsSection";

const Home = ({ trips }) => {
  return (
    <div>
      <HeroSlider />

      <TripsSection
        title="Explore Our Signature Tanzania Safari"
        subtitle="Lorem Ipsum is simply dummy text of the printing"
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
        subtitle="Lorem Ipsum is simply dummy text of the printing"
        trips={trips}
        destination="kili"
        layout="slider"
        btnname="Explore Kilimanjaro"
        btnlink="mount-kilimanjaro"
        bg="bg-[#fedec7]"
        showArrows={true}
      />

      <PopularWay />
      <Featured />
      <TailormadeSection />
    </div>
  );
};

export default Home;
