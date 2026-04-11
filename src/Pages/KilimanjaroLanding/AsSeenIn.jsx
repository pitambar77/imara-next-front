import React, { useEffect, useState } from "react";
import axios from "axios";
import TravelguideCard from "../../components/TravelguideCard";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

const AsSeenIn = ({ category = "Kilimanjaro Travel Guide" }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API_BASE}/api/blog/category/${encodeURIComponent(category)}`)
      .then((res) => {
        const blogs = Array.isArray(res.data) ? res.data : [];

        const mapped = blogs.map((blog, index) => ({
          id: blog._id || index,
          image: blog.thumbnail,
          title: blog.title,
          subtitle: blog.subtitle,
          description:
            blog.sections?.find((s) => s.type === "paragraph")?.text ||
            "Read our travel guide.",
          link: `/travel-guide/${blog.slug}`,
        }));

        setItems(mapped.slice(0, 6)); // limit cards
      })
      .catch((err) => console.error("Travel guide error:", err))
      .finally(() => setLoading(false));
  }, [category]);

  if (loading)
    return <p className="text-center py-10">Loading travel guides...</p>;
  if (!items.length) return null;

  return (
    <div className=" bg-white pt-8 md:pt-16">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-3 text-[#1a1a1a] capitalize">
        Kilimanjaro Travel Guides
      </h2>
      <p className="text-center text-[#444] text-[18px] mb-8 ">
        Your quiet companion for a higher climb.
      </p>

      <p className="text-center text-[#444] leading-relaxed max-w-5xl mx-auto">
        Sometimes you just want someone to lay things out clearly before you
        take on something as big as Mount Kilimanjaro. This Kilimanjaro travel
        guide section brings together the questions almost every climber
        whispers at some point—when to go, how to train, what to carry, and how
        to prepare your mind for the slow rise into thinner air. Think of it as
        gentle direction rather than strict rules, a way to feel ready without
        losing the sense of adventure that makes this climb worth dreaming
        about.
      </p>

      <TravelguideCard items={items} />
    </div>
  );
};

export default AsSeenIn;
