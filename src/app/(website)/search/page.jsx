"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/search?q=${query}`
      );
      const data = await res.json();
      setResults(data);
    };

    fetchData();
  }, [query]);

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">
        Results for: <span className="text-orange-500">{query}</span>
      </h1>

      {results.length === 0 ? (
        <p>No results found</p>
      ) : (
        <div className="space-y-4">
          {results.map((item, i) => (
            <div key={i} className="p-4 border rounded-lg">
              {item.title} ({item.type})
            </div>
          ))}
        </div>
      )}
    </div>
  );
}