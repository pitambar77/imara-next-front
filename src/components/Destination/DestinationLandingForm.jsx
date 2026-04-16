"use client";

import React, { useState, useEffect } from "react";
import API from "../../api/axios.js";

const DestinationLandingForm = ({ editData, onSuccess }) => {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
  });

  const [mainImage, setMainImage] = useState(null);
  const [mainImagePreview, setMainImagePreview] = useState(null);

  // ================= Dynamic Sections =======================
const [overviewinfo, setOverviewinfo] = useState([
  {
    title: "",
    subtitle: "",
    description: [{ type: "paragraph", content: "" }],
    image: null,
    imagePreview: null,
  },
]);


  const [highlight, setHighlight] = useState([
    {
      heading: "",
      section: [
        {
          title: "",
          description: "",
          image: null,
          imagePreview: null,
        },
      ],
    },
  ]);

  const [besttime, setBesttime] = useState([
    {
      title: "",
      subtitle: "",
      description: [{ type: "paragraph", content: "" }],
      months: [
        {
          month: "",
          content: [{ type: "paragraph", content: "" }],
        },
      ],
    },
  ]);

  // Prefill values on Edit

  // useEffect(() => {
  //   if (!editData) return;

  //   setFormData({
  //     title: editData.title || "",
  //     subtitle: editData.subtitle || "",
  //   });

  //   setOverviewinfo(
  //     editData.overviewinfo?.length
  //       ? editData.overviewinfo
  //       : [{ title: "", subtitle: "", description: [], image: null }]
  //   );

  //   setHighlight(
  //     editData.highlight?.length
  //       ? editData.highlight
  //       : [{ heading: "", section: [{ title: "", description: "" }] }]
  //   );


  //   setBesttime(
  //     editData.besttime?.length
  //       ? editData.besttime
  //       : [
  //           {
  //             title: "",
  //             subtitle: "",
  //             description: [{ type: "paragraph", content: "" }],
  //             months: [
  //               { month: "", content: [{ type: "paragraph", content: "" }] },
  //             ],
  //           },
  //         ]
  //   );

  //   setMainImagePreview(editData.image || null);
  // }, [editData]);

  useEffect(() => {
  if (!editData) return;

  setFormData({
    title: editData.title || "",
    subtitle: editData.subtitle || "",
  });

  setOverviewinfo(
    editData.overviewinfo?.length
      ? editData.overviewinfo.map(o => ({
          ...o,
          description: o.description?.length
            ? o.description
            : [{ type: "paragraph", content: "" }],
          imagePreview: o.image || null,
        }))
      : [
          {
            title: "",
            subtitle: "",
            description: [{ type: "paragraph", content: "" }],
            image: null,
            imagePreview: null,
          },
        ]
  );

  setHighlight(
    editData.highlight?.length
      ? editData.highlight.map(h => ({
          ...h,
          section: h.section?.length
            ? h.section.map(s => ({
                ...s,
                imagePreview: s.image || null,
              }))
            : [{ title: "", description: "", image: null, imagePreview: null }],
        }))
      : [
          {
            heading: "",
            section: [
              {
                title: "",
                description: "",
                image: null,
                imagePreview: null,
              },
            ],
          },
        ]
  );

  setBesttime(
    editData.besttime?.length
      ? editData.besttime
      : [
          {
            title: "",
            subtitle: "",
            description: [{ type: "paragraph", content: "" }],
            months: [
              {
                month: "",
                content: [{ type: "paragraph", content: "" }],
              },
            ],
          },
        ]
  );

  setMainImagePreview(editData.image || null);
}, [editData]);


  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    setMainImage(file);
    setMainImagePreview(URL.createObjectURL(file));
  };

  // =======================================================
  // OVERVIEW INFO Dynamic Description Handlers
  const addOverview = () =>
    setOverviewinfo([
      ...overviewinfo,
      {
        title: "",
        subtitle: "",
        description: [{ type: "paragraph", content: "" }],
        image: null,
        imagePreview: null,
      },
    ]);

  const removeOverview = (i) => {
    const updated = [...overviewinfo];
    updated.splice(i, 1);
    setOverviewinfo(updated);
  };

  const handleOverviewChange = (i, e) => {
    const updated = [...overviewinfo];
    updated[i][e.target.name] = e.target.value;
    setOverviewinfo(updated);
  };

  const handleOverviewImage = (i, e) => {
    const file = e.target.files[0];
    const updated = [...overviewinfo];
    updated[i].image = file;
    updated[i].imagePreview = URL.createObjectURL(file);
    setOverviewinfo(updated);
  };

  const addOverviewDescription = (i) => {
    const updated = [...overviewinfo];
    updated[i].description.push({ type: "paragraph", content: "" });
    setOverviewinfo(updated);
  };

  const removeOverviewDescription = (i, j) => {
    const updated = [...overviewinfo];
    updated[i].description.splice(j, 1);
    setOverviewinfo(updated);
  };

  const handleOverviewDescriptionChange = (i, j, e) => {
    const updated = [...overviewinfo];
    updated[i].description[j][e.target.name] = e.target.value;
    setOverviewinfo(updated);
  };

  const addHighlight = () =>
    setHighlight([
      ...highlight,
      {
        heading: "",
        section: [{ title: "", description: "", image: null }],
      },
    ]);

  const removeHighlight = (i) => {
    const updated = [...highlight];
    updated.splice(i, 1);
    setHighlight(updated);
  };

  const addHighlightSection = (i) => {
    const updated = [...highlight];
    updated[i].section.push({ title: "", description: "", image: null });
    setHighlight(updated);
  };

  const removeHighlightSection = (i, j) => {
    const updated = [...highlight];
    updated[i].section.splice(j, 1);
    setHighlight(updated);
  };

  const handleHighlightChange = (i, e) => {
    const updated = [...highlight];
    updated[i][e.target.name] = e.target.value;
    setHighlight(updated);
  };

  const handleHighlightImage = (i, j, e) => {
    const file = e.target.files[0];
    const updated = [...highlight];
    updated[i].section[j].image = file;
    updated[i].section[j].imagePreview = URL.createObjectURL(file);
    setHighlight(updated);
  };

const addBesttimeDescription = () => {
  const updated = [...besttime];
  updated[0].description.push({ type: "paragraph", content: "" });
  setBesttime(updated);
};


  // const handleBesttimeMainChange = (e) =>
  //   setBesttime({ ...besttime, [e.target.name]: e.target.value });
  const handleBesttimeMainChange = (e) => {
  const updated = [...besttime];
  updated[0][e.target.name] = e.target.value;
  setBesttime(updated);
};


const addMonth = () => {
  const updated = [...besttime];
  updated[0].months.push({
    month: "",
    content: [{ type: "paragraph", content: "" }],
  });
  setBesttime(updated);
};


const removeMonth = (i) => {
  const updated = [...besttime];
  updated[0].months.splice(i, 1);
  setBesttime(updated);
};

const handleMonthChange = (i, e) => {
  const updated = [...besttime];
  updated[0].months[i][e.target.name] = e.target.value;
  setBesttime(updated);
};

const addMonthContent = (i) => {
  const updated = [...besttime];
  updated[0].months[i].content.push({ type: "paragraph", content: "" });
  setBesttime(updated);
};

const handleMonthContentChange = (i, j, e) => {
  const updated = [...besttime];
  updated[0].months[i].content[j][e.target.name] = e.target.value;
  setBesttime(updated);
};

const removeMonthContent = (i, j) => {
  const updated = [...besttime];
  updated[0].months[i].content.splice(j, 1);
  setBesttime(updated);
};


  // =======================================================
  // SUBMIT FORM

const handleSubmit = async (e) => {
  e.preventDefault();

  const data = new FormData();

  data.append("formData", JSON.stringify(formData));
  data.append("overviewinfo", JSON.stringify(overviewinfo));
  data.append("highlight", JSON.stringify(highlight));
  data.append("besttime", JSON.stringify(besttime));

  if (mainImage) data.append("mainImage", mainImage);

  overviewinfo.forEach(o => {
    if (o.image) data.append("overviewImages", o.image);
  });


  highlight.forEach(h => {
  h.section.forEach(s => {
    if (s.image) {
      data.append("highlightImages", s.image);
    }
  });
});


  try {
    const res = editData
      ? await API.put(`/destinationlanding/${editData._id}`, data)
      : await API.post("/destinationlanding", data);

    alert("Saved Successfully");
    onSuccess?.(res.data);
  } catch (err) {
    console.error(err);
    alert("Error saving data");
  }
};


  // =======================================================
  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 pb-20">
      <h2 className="col-span-2 text-xl font-bold">
        {editData ? "Edit Destination Landing" : "Create Destination Landing"}
      </h2>

      <input
        className="border p-2"
        name="title"
        placeholder="Main title"
        value={formData.title}
        onChange={handleChange}
      />
      <input
        className="border p-2"
        name="subtitle"
        placeholder="Subtitle"
        value={formData.subtitle}
        onChange={handleChange}
      />

      <div className="col-span-2">
        <label>Main Image</label>
        <input
          type="file"
          className="border p-2 w-full"
          onChange={handleMainImageChange}
        />
        {mainImagePreview && (
          <img src={mainImagePreview} className="w-40 rounded mt-2" />
        )}
      </div>

      {/* -------- Overview Section -------- */}
      <section className="col-span-2 mt-6">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">Overview Info</h3>
          <button
            type="button"
            className="bg-green-600 text-white px-4 py-1 rounded"
            onClick={addOverview}
          >
            + Add
          </button>
        </div>

        {overviewinfo.map((item, i) => (
          <div key={i} className="border bg-gray-50 p-4 rounded mt-3">
            <input
              className="border p-2 w-full mb-2"
              placeholder="Title"
              name="title"
              value={item.title}
              onChange={(e) => handleOverviewChange(i, e)}
            />
            <input
              className="border p-2 w-full mb-2"
              placeholder="Subtitle"
              name="subtitle"
              value={item.subtitle}
              onChange={(e) => handleOverviewChange(i, e)}
            />

            <div className="flex justify-between items-center">
              <h4 className="font-semibold">Description blocks</h4>
              <button
                type="button"
                onClick={() => addOverviewDescription(i)}
                className="bg-blue-600 text-white px-3 py-1 rounded"
              >
                + Part
              </button>
            </div>

            {item.description.map((desc, j) => (
              <div key={j} className="border p-2 rounded mt-2 bg-white">
                <select
                  name="type"
                  className="border p-2 w-full mb-2"
                  value={desc.type}
                  onChange={(e) => handleOverviewDescriptionChange(i, j, e)}
                >
                  <option value="header">Header</option>
                  <option value="paragraph">Paragraph</option>
                  <option value="list">List</option>
                </select>

                <textarea
                  name="content"
                  className="border p-2 w-full"
                  placeholder="Description part"
                  value={desc.content}
                  onChange={(e) => handleOverviewDescriptionChange(i, j, e)}
                ></textarea>

                <button
                  type="button"
                  className="bg-red-600 text-white px-3 py-1 rounded mt-1"
                  onClick={() => removeOverviewDescription(i, j)}
                >
                  Remove
                </button>
              </div>
            ))}

            <input
              type="file"
              className="border p-2 mb-2 w-full"
              onChange={(e) => handleOverviewImage(i, e)}
            />
            {item.imagePreview && (
              <img src={item.imagePreview} className="w-32 rounded" />
            )}

            <button
              type="button"
              className="bg-red-600 text-white px-3 py-1 rounded mt-3"
              onClick={() => removeOverview(i)}
            >
              Remove Overview
            </button>
          </div>
        ))}
      </section>

      {/* -------------- HIGHLIGHTS SECTION ---------------- */}
      <section className="col-span-2 mt-6">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">Highlights</h3>
          <button
            type="button"
            className="bg-green-600 text-white px-4 py-1 rounded"
            onClick={addHighlight}
          >
            + Add
          </button>
        </div>

        {/* {highlight.map((item, i) => (
          <div key={i} className="border p-4 bg-gray-50 mt-3 rounded">
            <input className="border p-2 w-full mb-2" name="heading" placeholder="Heading" value={item.heading} onChange={(e) => handleHighlightChange(i, e)} />
            <input className="border p-2 w-full mb-2" name="title" placeholder="Title" value={item.title} onChange={(e) => handleHighlightChange(i, e)} />
            <textarea className="border p-2 w-full mb-2" name="description" placeholder="Description" value={item.description} onChange={(e) => handleHighlightChange(i, e)}></textarea>

            <input type="file" className="border p-2 mb-2" onChange={(e) => handleHighlightImage(i, e)} />
            {item.imagePreview && <img src={item.imagePreview} className="w-32 rounded" />}

            <button type="button" className="bg-red-600 text-white px-3 py-1 rounded mt-2"
              onClick={() => removeHighlight(i)}>Remove</button>
          </div>
        ))} */}
        {highlight.map((h, i) => (
          <div key={i} className="border p-4 mt-3 bg-gray-50 rounded">
            <input
              className="border p-2 w-full mb-2"
              placeholder="Heading"
              value={h.heading}
              onChange={(e) => {
                const u = [...highlight];
                u[i].heading = e.target.value;
                setHighlight(u);
              }}
            />

            {h.section.map((s, j) => (
              <div key={j} className="border p-3 bg-white rounded mb-2">
                <input
                  className="border p-2 w-full mb-2"
                  placeholder="Title"
                  value={s.title}
                  onChange={(e) => {
                    const u = [...highlight];
                    u[i].section[j].title = e.target.value;
                    setHighlight(u);
                  }}
                />

                <textarea
                  className="border p-2 w-full mb-2"
                  placeholder="Description"
                  value={s.description}
                  onChange={(e) => {
                    const u = [...highlight];
                    u[i].section[j].description = e.target.value;
                    setHighlight(u);
                  }}
                />

                <input
                  type="file"
                  onChange={(e) => handleHighlightImage(i, j, e)}
                />

                {s.imagePreview && (
                  <img src={s.imagePreview} className="w-32 mt-2 rounded" />
                )}

                <button
                  type="button"
                  className="bg-red-600 text-white px-3 py-1 mt-2 rounded"
                  onClick={() => removeHighlightSection(i, j)}
                >
                  Remove Section
                </button>
              </div>
            ))}

            <button
              type="button"
              className="bg-blue-600 text-white px-4 py-1 rounded"
              onClick={() => addHighlightSection(i)}
            >
              + Add Section
            </button>
          </div>
        ))}
      </section>

      {/* ---------- BEST TIME SECTION --------- */}

      {/* ---------- BEST TIME SECTION --------- */}
<section className="col-span-2 mt-6">
  <h3 className="text-xl font-semibold mb-4">Best Time</h3>

  {/* Title */}
  <input
    className="border p-2 w-full mb-2"
    name="title"
    placeholder="Title"
    value={besttime[0]?.title || ""}
    onChange={handleBesttimeMainChange}
  />

  {/* Subtitle */}
  <input
    className="border p-2 w-full mb-4"
    name="subtitle"
    placeholder="Subtitle"
    value={besttime[0]?.subtitle || ""}
    onChange={handleBesttimeMainChange}
  />

  {/* ===== Description Blocks ===== */}
  <div className="flex justify-between items-center mb-2">
    <h4 className="font-semibold">Description</h4>
    <button
      type="button"
      className="bg-blue-600 text-white px-3 py-1 rounded"
      onClick={addBesttimeDescription}
    >
      + Add Content
    </button>
  </div>

  {besttime[0].description.map((d, i) => (
    <div key={i} className="border p-3 bg-white mb-3 rounded">
      <select
        className="border p-2 w-full mb-2"
        value={d.type}
        onChange={(e) => {
          const updated = [...besttime];
          updated[0].description[i].type = e.target.value;
          setBesttime(updated);
        }}
      >
        <option value="header">Header</option>
        <option value="paragraph">Paragraph</option>
        <option value="list">List</option>
      </select>

      <textarea
        className="border p-2 w-full"
        placeholder="Description content"
        value={d.content}
        onChange={(e) => {
          const updated = [...besttime];
          updated[0].description[i].content = e.target.value;
          setBesttime(updated);
        }}
      />

      {besttime[0].description.length > 1 && (
        <button
          type="button"
          className="bg-red-600 text-white px-3 py-1 rounded mt-2"
          onClick={() => {
            const updated = [...besttime];
            updated[0].description.splice(i, 1);
            setBesttime(updated);
          }}
        >
          Remove
        </button>
      )}
    </div>
  ))}

  {/* ===== Months Section ===== */}
  <div className="flex justify-between items-center mt-6 mb-2">
    <h4 className="text-lg font-semibold">Months</h4>
    <button
      type="button"
      className="bg-green-600 text-white px-4 py-1 rounded"
      onClick={addMonth}
    >
      + Add Month
    </button>
  </div>

  {besttime[0].months.map((item, i) => (
    <div key={i} className="border p-4 bg-gray-50 rounded mt-3">
      <input
        className="border p-2 w-full mb-2"
        placeholder="Month(s)"
        name="month"
        value={item.month}
        onChange={(e) => handleMonthChange(i, e)}
      />

      <button
        type="button"
        className="bg-blue-600 text-white px-3 py-1 rounded mb-2"
        onClick={() => addMonthContent(i)}
      >
        + Add Content
      </button>

      {item.content.map((c, j) => (
        <div key={j} className="border p-2 rounded mt-2 bg-white">
          <select
            name="type"
            className="border p-2 w-full mb-2"
            value={c.type}
            onChange={(e) => handleMonthContentChange(i, j, e)}
          >
            <option value="header">Header</option>
            <option value="paragraph">Paragraph</option>
            <option value="list">List</option>
          </select>

          <textarea
            className="border p-2 w-full"
            name="content"
            placeholder="Month description"
            value={c.content}
            onChange={(e) => handleMonthContentChange(i, j, e)}
          />

          {item.content.length > 1 && (
            <button
              type="button"
              className="bg-red-600 text-white px-3 py-1 rounded mt-2"
              onClick={() => removeMonthContent(i, j)}
            >
              Remove Content
            </button>
          )}
        </div>
      ))}

      {besttime[0].months.length > 1 && (
        <button
          type="button"
          className="bg-red-600 text-white px-3 py-1 rounded mt-4"
          onClick={() => removeMonth(i)}
        >
          Remove Month
        </button>
      )}
    </div>
  ))}
</section>


      <button
        type="submit"
        className="bg-blue-600 text-white py-2 rounded col-span-2 mt-6"
      >
        {editData ? "Update Destination Landing" : "Save Destination Landing"}
      </button>
    </form>
  );
};

export default DestinationLandingForm;
