import CardFour from "../../components/LandingPage/CardFour";
import commuty from '../../assets/images/commuty.webp'
import portersImage from '../../assets/images/porter.webp'
import envir from '../../assets/images/envir.webp'
import guide from '../../assets/images/guide.webp'


const benefits = [
  {
    image: portersImage,
    title: "Porters",
    subtitle: "Fair pay standards",
    description:
      "Climbers directly support fair wages, proper meals, safe loads, and ethical working conditions for Kilimanjaro porters throughout the climb on every expedition.",
  },
  {
    image: commuty,
    title: "Communities",
    subtitle: "Local economic support",
    description:
      "Travel spending benefits nearby communities through accommodation, transport, food supplies, and locally sourced services before and after each Kilimanjaro trek begins and ends.",
  },
  {
    image: envir,
    title: "Environment",
    subtitle: "Trail conservation efforts",
    description:
      "Responsible trekking practices help protect trails, manage waste, conserve water sources, and reduce long-term environmental impact on Kilimanjaro for future mountain access.",
  },
  {
    image: guide,
    title: "Guides",
    subtitle: "Skilled local leadership",
    description:
      "Certified mountain guides earn sustainable incomes while sharing knowledge, safety skills, and decision-making that support successful, well-managed Kilimanjaro climbs for all climbers.",
  },
];

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
  {benefits.map((item, index) => (
    <CardFour key={index} {...item} />
  ))}
</div>

const TravellersBenefit = () => {
    return (
        <section className="py-8 md:py-10 px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28 mx-auto">
            <div className="">
                {/* Heading */}
                <div className="mb-10 sm:mb-14 text-center ">
                    <h2 className="text-2xl md:text-[32px] lg:text-[36px] font-bold text-[#1a1a1a] mb-4 capitalize">
                        How Travelers Give Back
                    </h2>

                    <p className="text-[16px] md:text-[18px] text-[#555] mb-6 md:mb-10">
                        Every Kilimanjaro climb supports local people, fair porter treatment, and mountain conservation through responsible operations, wages, supplies, and community-linked services, carefully selected with long-term benefits in mind for local families, guides, and future generations across Tanzania.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit, index) => (
                        <CardFour key={index} {...benefit} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TravellersBenefit;