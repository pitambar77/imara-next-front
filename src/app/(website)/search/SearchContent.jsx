"use client";
import { useRouter } from "next/navigation";
import { FiSearch } from "react-icons/fi";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import imaralogo from "@/assets/imaralogo.png";

export default function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const router = useRouter();

  const [searchValue, setSearchValue] = useState(query);

  const [results, setResults] = useState([]);

  useEffect(() => {
    setSearchValue(query);
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();

    router.push(`/search?q=${searchValue}`);
  };

  const getLink = (item) => {
    switch (item.type) {
      case "package":
        return `/package/${item.slug}`;

      case "safari":
        return `/tanzania-safaris`;

      case "destination":
        if (item.title === "EXPLORE TANZANIA") {
          return `/tanzania-destinations`;
        }
        return "/";

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
        return "/";

      case "zanzibar":
        if (item.title === "ZANZIBAR BEACH HOLIDAYS") {
          return `/zanzibar-beach`;
        }
        return "/";

      case "fleet":
        return `/safari-fleet`;
      case "about":
        return `/about-us`;

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

      <Link href={"/"}>
        <div className="w-full flex justify-center">
          <Image
            src={imaralogo}
            alt="Imara Kileleni Safaris"
            width={100}
            height={60}
            priority
            className="h-[80px] w-auto"
          />
        </div>
      </Link>
      <h3 className="text-2xl my-10 text-center">
        Hey! What are you looking for?
      </h3>

      <form onSubmit={handleSearch} className="flex items-center gap-4 mb-12">
        <input
          type="text"
          placeholder="Search here... for example: Kilimanjaro"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="flex-1 border border-[#d87029]/30 rounded-md px-6 py-2 outline-none focus:ring-1 focus:ring-[#d87029]/30 transition"
        />

        <button
          type="submit"
          className="bg-[#d87029] hover:bg-[#ed9458] cursor-pointer text-white px-6 py-2 rounded-md flex items-center gap-3 transition"
        >
          <FiSearch size={20} />
          Search
        </button>
      </form>

      <div className="border-b border-dashed border-[#d87029]/40 mt-6 mb-8"></div>

      {!query ? (
        <p className="text-gray-500 text-center py-6">
          Please search something
        </p>
      ) : results.length === 0 ? (
        <p>No results found</p>
      ) : (
        <div className="space-y-10">
          {Object.entries(groupedResults).map(([type, items]) => (
            <div key={type}>
              <h3 className="text-xl  capitalize mb-5 pb-2">
                {items[0]?.label || type}
              </h3>

              <div className="grid gap-4 border-b border-dashed border-[#d87029]/40 pb-10">
                {items.map((item, i) => (
                  <Link key={i} href={getLink(item)}>
                    <div>
                      <p className="text-[#444] hover:text-[#d87029] ">
                        {item.title
                          .toLowerCase()
                          .replace(/\b\w/g, (char) => char.toUpperCase())}
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
