import React, { useEffect, useMemo, useState } from "react";
// import API from "../../api/axios";
import TripCard from "../../components/TripCard";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import TripQuickViewModal from "../../components/TripQuickViewModal";

/* ================= REGIONS ================= */

const getDays = (value) => {
  const match = String(value).match(/\d+/);
  return match ? Number(match[0]) : 0;
};

/* ================= COMPONENT ================= */

const TripsWithFilters = ({
  trips = [],
  destination = [],
  regions = [],
  title = "",
  subtitle = "",
  category = "Region",
}) => {
  // const [trips, setTrips] = useState([]);
  // const [loading, setLoading] = useState(true);

  const [region, setRegion] = useState([]);
  const [days, setDays] = useState(15);
  const [style, setStyle] = useState([]);

  // const [openDays, setOpenDays] = useState(true);
  // const [openRegion, setOpenRegion] = useState(true);
  // const [openStyle, setOpenStyle] = useState(true);
  const [openSection, setOpenSection] = useState("region");

  const [selectedTrip, setSelectedTrip] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  const handleCloseModal = () => {
    setIsClosing(true);

    setTimeout(() => {
      setSelectedTrip(null);
      setIsClosing(false);
    }, 300);
  };

  /* ================= FETCH DATA ================= */

  // useEffect(() => {
  //   const fetchTrips = async () => {
  //     try {
  //       const res = await API.get("/packages");

  //       const data = res.data || [];

  //       setTrips(data);

  //       /* detect max days automatically */
  //       const maxDays = Math.max(
  //         ...data.map((trip) => getDays(trip.accomoDay)),
  //         1,
  //       );

  //       setDays(maxDays);
  //     } catch (err) {
  //       console.error("Trip fetch error:", err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchTrips();
  // }, []);

  const getRegionFromTitle = (title = "") => {
    return (
      regions.find((r) => title.toLowerCase().includes(r.toLowerCase())) || null
    );
  };

  useEffect(() => {
    document.body.style.overflow = selectedTrip ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [selectedTrip]);

  /* ================= FILTER ================= */

  const filteredTrips = useMemo(() => {
    return trips.filter((trip) => {
      /* DESTINATION FILTER */
      //   if (
      //     destination &&
      //     trip.destination?.toLowerCase() !== destination.toLowerCase()
      //   ) {
      //     return false;
      //   }

      if (
        destination.length > 0 &&
        !destination.includes(trip.destination?.toLowerCase())
      ) {
        return false;
      }

      const tripRegion = getRegionFromTitle(trip.title);
      const tripDays = getDays(trip.accomoDay);

      const regionMatch = region.length === 0 || region.includes(tripRegion);

      const dayMatch = days === 0 || tripDays <= days;

      //   const styleMatch =
      //     style.length === 0 || style.includes(trip.category || "");
      const styleMatch =
        style.length === 0 ||
        !trip.category || // if category not present show trip
        style.includes(trip.category);

      return regionMatch && dayMatch && styleMatch;
    });
  }, [trips, region, days, style, destination]);

  /* ================= TOGGLE FILTER ================= */

  const toggleFilter = (value, state, setState) => {
    if (state.includes(value)) {
      setState(state.filter((v) => v !== value));
    } else {
      setState([...state, value]);
    }
  };

  /* ================= LOADING ================= */

  // if (loading) {
  //   return <p className="text-center py-10">Loading trips...</p>;
  // }

  return (
    <section className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0 py-8 md:py-12">
      <div>
        {title && (
          <h2 className="text-2xl md:text-3xl text-center mb-4 font-bold w-full text-[#1a1a1a] capitalize">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="text-center text-[#444] mb-12">{subtitle}</p>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* ================= FILTER SIDEBAR ================= */}

        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <div className="flex justify-between mb-6">
              <h3 className="text-xl font-bold">Filter</h3>

              <button
                onClick={() => {
                  setRegion([]);
                  setStyle([]);
                  setDays(
                    Math.max(...trips.map((t) => getDays(t.accomoDay)), 1),
                  );
                }}
                className="border px-4 py-1 cursor-pointer rounded-full text-sm hover:bg-gray-100"
              >
                RESET
              </button>
            </div>

            <div className="border border-[#f6f3f1] rounded-md overflow-hidden">
              {/* REGION */}
              <div className="border-b border-[#f6f3f1]">
                <button
                  onClick={() =>
                    setOpenSection(openSection === "region" ? null : "region")
                  }
                  className="flex justify-between items-center cursor-pointer shadow bg-gray-50 p-3 w-full font-semibold"
                >
                  {category}
                  {openSection === "region" ? <FaAngleUp /> : <FaAngleDown />}
                </button>

                {openSection === "region" && (
                  <div className="p-4 space-y-2 text-[#444] ">
                    {regions.map((r) => (
                      <label
                        key={r}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={region.includes(r)}
                          onChange={() => toggleFilter(r, region, setRegion)}
                          className="w-5 h-5 accent-[#d86f29]"
                        />
                        {r}
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* DAYS */}
              <div className="border-b border-[#f6f3f1]">
                <button
                  onClick={() =>
                    setOpenSection(openSection === "days" ? null : "days")
                  }
                  className="flex justify-between items-center  cursor-pointer bg-gray-50 p-3 w-full font-semibold"
                >
                  Itinerary Lengths
                  {openSection === "days" ? <FaAngleUp /> : <FaAngleDown />}
                </button>

                {openSection === "days" && (
                  <div className="p-4">
                    <input
                      type="range"
                      min="1"
                      max={Math.max(
                        ...trips.map((t) => getDays(t.accomoDay)),
                        1,
                      )}
                      value={days}
                      onChange={(e) => setDays(Number(e.target.value))}
                      className="w-full custom-range"
                    />

                    <p className="mt-2 font-semibold ">
                      Days: <span className="text-[#d86f29]">{days}</span>
                    </p>
                  </div>
                )}
              </div>

              {/* STYLE */}
              <div>
                <button
                  onClick={() =>
                    setOpenSection(openSection === "style" ? null : "style")
                  }
                  className="flex justify-between items-center cursor-pointer bg-gray-50 p-3 w-full font-semibold"
                >
                  Travel Style
                  {openSection === "style" ? <FaAngleUp /> : <FaAngleDown />}
                </button>

                {openSection === "style" && (
                  <div className="p-4 space-y-2 text-[#444]">
                    {["Luxury", "Ultra-Luxury"].map((s) => (
                      <label
                        key={s}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={style.includes(s)}
                          onChange={() => toggleFilter(s, style, setStyle)}
                          className="w-5 h-5 accent-[#d86f29]"
                        />
                        {s}
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ================= TRIPS GRID ================= */}

        <div className="lg:col-span-3">
          {filteredTrips.length === 0 ? (
            <p className="text-gray-500 text-lg">No trips found.</p>
          ) : (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredTrips.map((trip) => (
                <TripCard
                  key={trip._id}
                  trip={{
                    id: trip._id,
                    image: trip.landingImage || trip.image,
                    title: trip.title,
                    days: trip.accomoDay,
                    country: "Tanzania",
                    discountedPrice: trip.price,
                    description: trip.description,
                  }}
                  onQuickView={() => setSelectedTrip(trip)}
                />
              ))}
            </div>
          )}
        </div>
        <TripQuickViewModal
          trip={selectedTrip}
          isClosing={isClosing}
          onClose={handleCloseModal}
        />
      </div>
    </section>
  );
};

export default TripsWithFilters;
