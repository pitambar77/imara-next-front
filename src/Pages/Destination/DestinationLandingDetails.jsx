import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../../api/axios";

const DestinationLandingDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    API.get(`/destinationlanding/${id}`)
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="px-6 py-10">

      {/* MAIN */}
      <h1 className="text-3xl font-bold">{data.title}</h1>
      <p className="text-gray-600 mb-6">{data.subtitle}</p>

      {data.image && (
        <img src={data.image} className="rounded mb-10" />
      )}

      {/* OVERVIEW */}
      {data.overviewinfo.map((o, i) => (
        <section key={i} className="mb-10">
          <h2 className="text-xl font-semibold">{o.title}</h2>
          <p className="text-gray-500 mb-2">{o.subtitle}</p>

          {o.description.map((d, j) => (
            <p key={j} className="mb-2">{d.content}</p>
          ))}

          {o.image && <img src={o.image} className="rounded mt-4" />}
        </section>
      ))}

      {/* HIGHLIGHTS */}
      {data.highlight.map((h, i) => (
        <section key={i} className="mb-10">
          <h2 className="text-xl font-semibold">{h.heading}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {h.section.map((s, j) => (
              <div key={j} className="border p-4 rounded">
                {s.image && <img src={s.image} className="mb-3 rounded" />}
                <h3 className="font-semibold">{s.title}</h3>
                <p>{s.description}</p>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* BEST TIME */}
      {data.besttime.map((bt, i) => (
        <section key={i} className="mb-10">
          <h2 className="text-xl font-semibold">{bt.title}</h2>
          <p className="text-gray-500 mb-4">{bt.subtitle}</p>

          {bt.description.map((d, j) => (
            <p key={j} className="mb-2">{d.content}</p>
          ))}

          {bt.months.map((m, k) => (
            <div key={k} className="mt-4">
              <h4 className="font-semibold">{m.month}</h4>
              {m.content.map((c, x) => (
                <p key={x}>{c.content}</p>
              ))}
            </div>
          ))}
        </section>
      ))}
    </div>
  );
};

export default DestinationLandingDetails;
