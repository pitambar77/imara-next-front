import CardThree from "../../components/LandingPage/CardThree";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const testimonials = [
    {
        title: "What an experience",
        rating: 5,
        description:
            "An unforgettable journey with Imara Kileleni Safaris, perfectly organized, knowledgeable guides, breathtaking wildlife, and warm hospitality throughout. Every detail exceeded expectations and created lifelong memories….",
        author: "Sarah M.",
        date: "Jan 2023",
    },
    {
        title: "One of the Best Experiences of My Life!",
        rating: 5,
        description:
            "Imara Kileleni Safaris delivered an exceptional safari experience, seamless logistics, luxury camps, and incredible game drives. The team’s professionalism and local knowledge made our adventure safe, inspiring, and memorable.",
        author: "James K.",
        date: "January 2023",
    },
    {
        title: "Reaching The Summit Together",
        rating: 5,
        description:
            "Imara Kileleni Safaris planned our Kilimanjaro climb perfectly, with skilled guides, steady acclimatization, reliable safety checks, and daily encouragement that helped our group reach Uhuru Peak confidently.",
        author: "Daniel R.",
        date: "September 2024",
    },
    {
        title: "Guided With Purpose Always",
        rating: 5,
        description:
            "From briefing to summit night, Imara Kileleni Safaris delivered a well-paced Kilimanjaro climb, strong support, caring guides, and clear communication that kept us motivated throughout the journey.",
        author: "Michael T.",
        date: "July 2024",
    }
];

const Reviews = () => {
    return (
        <section className="py-8 md:py-10 px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28 mx-auto">
            <div className="">
                {/* Heading */}
                <div className="mb-10 sm:mb-14 text-center ">
                    <h2 className="text-2xl md:text-[32px] lg:text-[36px] font-bold text-[#1a1a1a] mb-4 capitalize">
                        What Climbers Say
                    </h2>
                    
                    {/* <p className="text-sm sm:text-base text-gray-600 sm:ps-0 mx-auto sm:mx-0 text-center">
                        <span><FaQuoteLeft /></span>Climbers share honest feedback about their Kilimanjaro experiences with Imara Kileleni Safaris. These reviews reflect real journeys, careful planning, steady guidance, and the confidence gained as we move safely toward the summit, one well-paced day at a time. <span><FaQuoteRight /></span>
                    </p> */}
                    
                    <p className="text-[16px] md:text-[18px] text-[#555] mb-6 md:mb-10">
                        Climbers share honest feedback about their Kilimanjaro experiences with Imara Kileleni Safaris. These reviews reflect real journeys, careful planning, steady guidance, and the confidence gained as we move safely toward the summit, one well-paced day at a time.
                    </p>
                    
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <CardThree key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;