"use client";

import React from "react";

// import API from "../../api/axios";
import OverviewSections from "../../components/OverviewSections";
import ChoosingSafariSection from "../SerengetiNationalPark/ChoosingSafariSection";
import AdventureTour from "../../components/AdventureTour";
import FAQSection from "../../components/FAQSection";
import BookWithConfidence from "../Home/BookWithConfidence";
import Featured from "../Home/Featured";
import TripsSection from "../../components/TripsSection";
import TailormadeSection from "../Home/TailormadeSection";
import Banner from "../../components/Banner";

const TravelgroupDetails = ({ slug,trips,item }) => {
  // const [item, setItem] = useState(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchTravelGroup = async () => {
  //     try {
  //       // 1️⃣ Get travelgroup by slug
  //       const res = await API.get(`/travelgroup/slug/${slug}`);

  //       if (!res.data) {
  //         setItem(null);
  //         return;
  //       }

  //       const group = res.data;

  //       // 2️⃣ Fetch SEO by ID
  //       const seoRes = await API.get(
  //         `/seo?referenceId=${group._id}&referenceType=travelgroup`,
  //       );

  //       // 3️⃣ Attach SEO
  //       setItem({
  //         ...group,
  //         seo: seoRes.data || null,
  //       });
  //     } catch (err) {
  //       console.error(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchTravelGroup();
  // }, [slug]);

  /* ================= DYNAMIC SEO ================= */


if (!item) return <p className="p-6">Not found</p>;

  /* ================= MAP ADVENTURE ================= */
  const adventureSections = item.adventure.map((a) => ({
    image: a.image,
    heading: a.title,
    subheading: a.subtitle,
    description: a.description,
  }));

  /* ================= MAP FAQ ================= */
  const safariFaqs = item.aboutBooking.map((q) => ({
    question: q.question,
    answerBlocks: q.answer.map((ans) => ({
      type: ans.type,
      text: ans.content,
      items: ans.type === "list" ? [ans.content] : undefined,
    })),
  }));

  return (
    <div>
      {/* ================= BANNER ================= */}
      {/* <LandingBanner
        bannerImg={item.image}
        title={item.title}
      /> */}

      <Banner image={item.image} title={item.title} />

      {/* ================= OVERVIEW ================= */}
      {item.overviewinfo.map((o) => (
        <OverviewSections
          key={o._id}
          label={o.title}
          title={o.subtitle}
          image={o.image}
          imagePosition="right"
          bg="#fcfcfc"
          paragraphs={o.description.map((d) => ({
            content: d.content,
          }))}
        />
      ))}

      <ChoosingSafariSection />
      <TripsSection
        bg="bg-[#fedec7]"
        trips={trips}
        destination="tanzania"
        layout="slider"
        btnname="See All Trips"
        btnlink="tanzania-safaris"
        showArrows={false}
      />

      {/* ================= ADVENTURE ================= */}
      <AdventureTour sections={adventureSections} />

      {/* ================= FAQ ================= */}
      <FAQSection title="Top Frequently ask questions" faqs={safariFaqs} />

      <BookWithConfidence />
      <Featured />
      <TailormadeSection />
    </div>
  );
};

export default TravelgroupDetails;
