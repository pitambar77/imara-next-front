import React, { useState } from "react";
import { FaAngleDown,FaAngleUp  } from "react-icons/fa";

const FilterSidebar = ({ filters, setFilters }) => {
  const [open, setOpen] = useState({
    route: true,
    days: false,
    adventure: false,
  });

  const toggle = (key) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleRoute = (route) => {
    setFilters((prev) => {
      const exists = prev.routes.includes(route);

      return {
        ...prev,
        routes: exists
          ? prev.routes.filter((r) => r !== route)
          : [...prev.routes, route],
      };
    });
  };

  const handleAdventure = (type) => {
    setFilters((prev) => {
      const exists = prev.adventure.includes(type);

      return {
        ...prev,
        adventure: exists
          ? prev.adventure.filter((r) => r !== type)
          : [...prev.adventure, type],
      };
    });
  };

  return (
    <div className="border rounded-lg bg-gray-50 overflow-hidden">

      {/* ROUTE */}
      <div className="border-b">

        <button
          onClick={() => toggle("route")}
          className="flex justify-between w-full p-4 font-semibold"
        >
          Choose Your Route
          {open.route ? <FaAngleUp  size={20} /> : <FaAngleDown size={20} />}
        </button>

        {open.route && (
          <div className="px-4 pb-4 space-y-3">
            {["Lemosho", "Machame", "Rongai", "Northern Circuit"].map(
              (route) => (
                <label key={route} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    onChange={() => handleRoute(route)}
                  />
                  {route}
                </label>
              ),
            )}
          </div>
        )}
      </div>

      {/* DAYS */}
      <div className="border-b">

        <button
          onClick={() => toggle("days")}
          className="flex justify-between w-full p-4 font-semibold"
        >
          Itinerary Lengths
          {open.days ? <FaAngleUp  size={20} /> : <FaAngleDown size={20} />}
        </button>

        {open.days && (
          <div className="px-4 pb-4">
            <input
              type="range"
              min="1"
              max="15"
              value={filters.days}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  days: Number(e.target.value),
                }))
              }
              className="w-full"
            />

            <p className="mt-2 font-semibold">
              Days: <span className="text-green-600">{filters.days}</span>
            </p>
          </div>
        )}
      </div>

      {/* ADVENTURE */}
      <div>

        <button
          onClick={() => toggle("adventure")}
          className="flex justify-between w-full p-4 font-semibold"
        >
          Adventure Options
          {open.adventure ? <FaAngleUp  size={20} /> : <FaAngleDown size={20} />}
        </button>

        {open.adventure && (
          <div className="px-4 pb-4 space-y-3">
            {["Luxury", "Ultra-Luxury"].map((opt) => (
              <label key={opt} className="flex items-center gap-3">
                <input
                  type="checkbox"
                  onChange={() => handleAdventure(opt)}
                />
                {opt}
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterSidebar;