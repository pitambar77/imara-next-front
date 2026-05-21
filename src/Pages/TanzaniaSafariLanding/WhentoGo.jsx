import React, { useEffect, useState } from "react";
import API from "../../api/axios";
import { CircleCheck, Cloudy, Star } from "lucide-react";

const WhentoGo = () => {
  const [bestTime, setBestTime] = useState(null);
  const [activeMonth, setActiveMonth] = useState("");

  /* ================= FETCH DATA ================= */
  useEffect(() => {
    API.get("/tanzaniadestinationlanding") // ✅ confirm endpoint
      .then((res) => {
        const data = res.data?.[0]?.besttime?.[0];
        setBestTime(data);
        setActiveMonth(data?.months?.[0]?.month || "");
      })
      .catch(console.error);
  }, []);

  if (!bestTime) return null;

  const extractHighlights = (html = "") => {
    if (typeof window === "undefined") return [];

    const temp = document.createElement("div");

    temp.innerHTML = html;

    return Array.from(temp.querySelectorAll("li")).map((li) => li.textContent);
  };

  const monthsData = bestTime.months.map((m) => ({
    month: m.month,

    icon: <Cloudy />,

    rating: 5,

    weatherIcon: <Cloudy />,

    view: "Good time to visit",

    content: m.content || "",

    highlights: extractHighlights(m.content || ""),
  }));
  const monthData = monthsData.find((m) => m.month === activeMonth);

  if (!monthData) return null;

  return (
    <div className=" bg-white py-10 sm:py-12 md:py-16 max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0">
      {/* ================= HEADER ================= */}
      <div className=" text-center mb-16 px-0 md:px-24 mx-auto text-[#222]">
        <h2 className="text-2xl md:text-[36px]  text-[#1a1a1a] mb-3 capitalize">
          {bestTime.title}
        </h2>

        <p className="text-[18px] text-[#444] mb-8 md:mb-12">
          {bestTime.subtitle}
        </p>

        <div className="text-[17px] leading-[1.9] space-y-6 text-[#444]">
          <div
            className="rich-text"
            dangerouslySetInnerHTML={{
              __html: bestTime.description || "",
            }}
          />
        </div>
      </div>

      {/* ================= MONTH CARD ================= */}
      <div className="border border-gray-200 rounded-md shadow-sm bg-white">
        {/* --- Month Tabs --- */}
        {/* <div className="grid grid-cols-6 sm:grid-cols-6 lg:grid-cols-12 text-center border-b border-gray-200"> */}
        <div className="flex lg:grid lg:grid-cols-12 overflow-x-auto scrollbar-hide border-b border-gray-200">
          {monthsData.map((m) => (
            <button
              key={m.month}
              onClick={() => setActiveMonth(m.month)}
              className={`min-w-[90px] lg:min-w-0 flex flex-col items-center py-4 px-2 text-sm font-medium transition-all flex-shrink-0 ${
                activeMonth === m.month
                  ? "text-[#d87028] border-b-[3px] border-[#d87028] bg-white"
                  : "text-gray-400 hover:text-[#d87028]"
              }`}
            >
              <div className="text-2xl cursor-pointer">{m.icon}</div>
              <span className="text-[13px] font-semibold mt-1 cursor-pointer">
                {m.month
                  ?.toLowerCase()
                  .replace(/\b\w/g, (c) => c.toUpperCase())}
              </span>
              <div className="flex justify-center mt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={10}
                    className={`${
                      i < m.rating ? "text-[#d87028] fill-[#d87028]" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </button>
          ))}
        </div>

        {/* --- Active Month Content --- */}
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-[#222] mb-4">
              Tanzania in{" "}
              {monthData.month
                ?.toLowerCase()
                .replace(/\b\w/g, (c) => c.toUpperCase())}
            </h3>

            <div
              className="rich-text text-[#444]"
              dangerouslySetInnerHTML={{
                __html: monthData.content
                  ?.replace(/<ul[\s\S]*?<\/ul>/gi, "")
                  ?.replace(/<ol[\s\S]*?<\/ol>/gi, ""),
              }}
            />
          </div>

          <div className="flex flex-col justify-center">
            {monthData.highlights.map((item, i) => (
              <div key={i} className="flex items-start gap-2 mb-3">
                <CircleCheck size={20} className="fill-[#d87028] text-white mt-0.5 " />
                <p className="text-[#444] text-[16px]">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- Divider --- */}
        <div className="border-t border-dotted border-gray-300 mx-8 my-4"></div>

        {/* --- Footer --- */}
   

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start px-5 sm:px-8 pb-8">
          {/* Our View */}
          <div>
            <p className="uppercase text-gray-500 text-sm font-semibold mb-4">
              Our View
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              {/* Stars */}
              <div className="flex items-center flex-wrap gap-1">
                {Array(monthData.rating)
                  .fill()
                  .map((_, i) => (
                    <div key={i} className="bg-[#d87028] p-1 rounded-sm">
                      <Star size={16} strokeWidth={1} className="text-white fill-white" />
                    </div>
                  ))}
              </div>

              {/* Text */}
              <p className="text-[#444] font-medium text-[15px] sm:text-[16px]">
                {monthData.view}
              </p>
            </div>
          </div>

          {/* Weather */}
          <div>
            <p className="uppercase text-gray-500 text-sm mb-4 font-semibold">
              Weather in {monthData.month}
            </p>

            <div className="inline-flex items-center justify-center bg-[#fde4d0] p-2 w-12 h-12 text-[#d87028] text-3xl rounded-md">
              {monthData.weatherIcon}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhentoGo;
