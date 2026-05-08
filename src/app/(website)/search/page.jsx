"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  const [results, setResults] = useState([]);

  const getLink = (item) => {
    switch (item.type) {
      case "package":
        return `/package/${item.slug}`;
      case "safari":
        return `/tanzania-safaris/${item.slug}`;
      case "destination":
        // ✅ MANUAL ROUTES

        if (item.title === "EXPLORE TANZANIA") {
          return `/tanzania-destinations`;
        }
        return `/`;
      case "destinationdetails":
        return `/tanzania-destinations/${item.slug}`;
      case "travelguide":
        return `/travel-guide/${item.slug}`;
      case "travelgroup":
        return `/travelgroup/${item.slug}`;
      case "kilimanjaro":
        if (item.title === "MOUNT KILIMANJARO CLIMBING") {
          return `/mount-kilimanjaro`;
        }
      case "zanzibar":
        if (item.title === "ZANZIBAR BEACH HOLIDAYS") {
          return `/zanzibar-beach`;
        }

      default:
        return "/";
    }
  };

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/search?q=${query}`,
      );
      const data = await res.json();
      setResults(data);
    };

    fetchData();
  }, [query]);

  const groupedResults = results.reduce((acc, item) => {
    if (!acc[item.type]) {
      acc[item.type] = [];
    }

    acc[item.type].push(item);

    return acc;
  }, {});

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-center text-xl text-[#d87029]/80 mb-10">
        Imara kileleni Safaris. <span className="text-[#d87029]">Search</span>
      </h1>
      <div className="w-full flex justify-center">
        <Image
          src="https://thumbs.dreamstime.com/b/illustration-vector-graphic-lion-search-logo-perfect-to-use-technology-company-231077576.jpg"
          alt="Imara Kileleni Safaris"
          width={280}
          height={260}
          priority
          className="h-[200px] w-auto"
        />
      </div>

      <h2 className="text-2xl font-bold mb-2 text-center">
        Hey! What are you looking for?
      </h2>

      <p className="text-center text-[#d87029] mb-10">"{query}"</p>

      {results.length === 0 ? (
        <p>No results found</p>
      ) : (
        <div className="space-y-10">
          {Object.entries(groupedResults).map(([type, items]) => (
            <div key={type}>
              {/* Heading */}
              <h2 className="text-xl font-bold capitalize mb-5  pb-2">
                {type}
              </h2>

              {/* Items */}
              <div className="grid gap-4 border-b border-dashed border-gray-400 pb-10 ">
                {items.map((item, i) => (
                  <Link key={i} href={getLink(item)}>
                    <div className=" ">
                      <p className=" text-[#444] hover:text-[#d87029] text-sm">
                        {item.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
