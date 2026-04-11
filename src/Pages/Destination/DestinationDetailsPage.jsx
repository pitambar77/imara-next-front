import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../api/axios";

const DestinationDetailsPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    API.get(`/destinationdetails/${id}`).then((res) => {
      setData(res.data);
    });
  }, [id]);

  if (!data) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
      <p className="text-gray-600 mb-4">{data.subtitle}</p>

      {data.image && (
        <img src={data.image} className="w-full rounded mb-6" />
      )}

      {/* OVERVIEW */}
      {data.overviewinfo?.map((o, i) => (
        <div key={i} className="mb-6">
          <h2 className="text-xl font-semibold">{o.title}</h2>
          <p className="italic mb-2">{o.subtitle}</p>

          {o.description?.map((d, j) => (
            <p key={j} className="mb-2">
              {d.content}
            </p>
          ))}

          {o.image && (
            <img src={o.image} className="w-80 rounded mt-3" />
          )}
        </div>
      ))}

      {/* HIGHLIGHTS */}
      {data.highlight?.map((h, i) => (
        <div key={i} className="mb-6">
          <h2 className="text-xl font-semibold">{h.heading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            {h.section.map((s, j) => (
              <div key={j} className="border p-3 rounded">
                <h3 className="font-semibold">{s.title}</h3>
                <p>{s.description}</p>
                {s.image && (
                  <img src={s.image} className="w-full rounded mt-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DestinationDetailsPage;
