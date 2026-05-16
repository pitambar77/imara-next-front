"use client";

import React, { useState, useEffect } from "react";
import API from "../../api/axios.js";
import CustomRichEditor from "@/components/CustomRichEditor";

const DestinationLandingFormNew = ({ editData, onSuccess }) => {
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
      description: "",
      image: null,
      imagePreview: null,
    },
  ]);

  const [taboverview, setTaboverview] = useState([
    {
      title: "",
      subtitle: "",
      description: "",
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
      description: "",
      months: [
        {
          month: "",
          content: "",
        },
      ],
    },
  ]);

  const [faq, setFaq] = useState([
    {
      title: "",
      subtitle: "",
      faqs: [
        {
          question: "",
          answer: "",
        },
      ],
    },
  ]);

  useEffect(() => {
    if (!editData) return;

    setFormData({
      title: editData.title || "",
      subtitle: editData.subtitle || "",
    });

    setOverviewinfo(
      editData.overviewinfo?.length
        ? editData.overviewinfo.map((o) => ({
            ...o,
            description: o.description?.length ? o.description : "",
            imagePreview: o.image || null,
          }))
        : [
            {
              title: "",
              subtitle: "",
              description: "",
              image: null,
              imagePreview: null,
            },
          ],
    );

    setTaboverview(
      editData.taboverview?.length
        ? editData.taboverview
        : [
            {
              title: "",
              subtitle: "",
              description: "",
            },
          ],
    );

    setHighlight(
      editData.highlight?.length
        ? editData.highlight.map((h) => ({
            ...h,
            section: h.section?.length
              ? h.section.map((s) => ({
                  ...s,
                  imagePreview: s.image || null,
                }))
              : [
                  {
                    title: "",
                    description: "",
                    image: null,
                    imagePreview: null,
                  },
                ],
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
          ],
    );

    setBesttime(
      editData.besttime?.length
        ? editData.besttime
        : [
            {
              title: "",
              subtitle: "",
              description: "",
              months: [
                {
                  month: "",
                  content: "",
                },
              ],
            },
          ],
    );

    setFaq(
      editData?.faq?.length
        ? editData.faq
        : [
            {
              title: "",
              subtitle: "",
              faqs: [
                {
                  question: "",
                  answer: "",
                },
              ],
            },
          ],
    );

    setMainImagePreview(editData.image || null);
  }, [editData]);

  // SECTION
  const addFaqSection = () => {
    setFaq([...faq, { title: "", subtitle: "", faqs: [] }]);
  };

  const removeFaqSection = (i) => {
    const updated = [...faq];
    updated.splice(i, 1);
    setFaq(updated);
  };

  const handleFaqSection = (i, e) => {
    const updated = [...faq];
    updated[i][e.target.name] = e.target.value;
    setFaq(updated);
  };

  // QUESTION
  const addFaq = (sectionIndex) => {
    const updated = [...faq];
    updated[sectionIndex].faqs.push({
      question: "",
      answer: "",
    });
    setFaq(updated);
  };

  const handleFaq = (sectionIndex, faqIndex, e) => {
    const updated = [...faq];
    updated[sectionIndex].faqs[faqIndex].question = e.target.value;
    setFaq(updated);
  };

  const removeFaq = (sectionIndex, faqIndex) => {
    const updated = [...faq];
    updated[sectionIndex].faqs.splice(faqIndex, 1);
    setFaq(updated);
  };

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
        description: "",
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

  const addHighlight = () =>
    setHighlight([
      ...highlight,
      {
        heading: "",
        section: [{ title: "", description: "", image: null }],
      },
    ]);

  const addHighlightSection = (i) => {
    const updated = [...highlight];
    updated[i].section.push({ title: "", description: "", image: null });
    setHighlight(updated);
  };

  const removeHighlight = (i) => {
    const updated = [...highlight];

    updated.splice(i, 1);

    setHighlight(updated);
  };

  const removeHighlightSection = (i, j) => {
    const updated = [...highlight];
    updated[i].section.splice(j, 1);
    setHighlight(updated);
  };

  const handleHighlightImage = (i, j, e) => {
    const file = e.target.files[0];
    const updated = [...highlight];
    updated[i].section[j].image = file;
    updated[i].section[j].imagePreview = URL.createObjectURL(file);
    setHighlight(updated);
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
      content: "",
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

  // =======================================================
  // SUBMIT FORM

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("formData", JSON.stringify(formData));
    data.append("taboverview", JSON.stringify(taboverview));
    data.append("overviewinfo", JSON.stringify(overviewinfo));
    data.append("highlight", JSON.stringify(highlight));
    data.append("besttime", JSON.stringify(besttime));
    data.append("faq", JSON.stringify(faq));

    if (mainImage) data.append("mainImage", mainImage);

    overviewinfo.forEach((o) => {
      if (o.image) data.append("overviewImages", o.image);
    });

    highlight.forEach((h) => {
      h.section.forEach((s) => {
        if (s.image) {
          data.append("highlightImages", s.image);
        }
      });
    });

    try {
      const res = editData
        ? await API.put(`/tanzaniadestinationlanding/${editData._id}`, data)
        : await API.post("/tanzaniadestinationlanding", data);

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

            <div className="mb-4">
              <label className="font-semibold block mb-2">Description</label>

              <CustomRichEditor
                value={item.description || ""}
                onChange={(html) => {
                  const updated = [...overviewinfo];

                  updated[i].description = html;

                  setOverviewinfo(updated);
                }}
              />
            </div>

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

      {/* -------- TAB OVERVIEW SECTION -------- */}
      <section className="col-span-2 mt-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">Tab Overview</h3>

          <button
            type="button"
            className="bg-green-600 text-white px-4 py-1 rounded"
            onClick={() =>
              setTaboverview([
                ...taboverview,
                {
                  title: "",
                  subtitle: "",
                  description: "",
                },
              ])
            }
          >
            + Add Tab
          </button>
        </div>

        {taboverview.map((item, i) => (
          <div key={i} className="border bg-gray-50 p-4 rounded mt-3">
            {/* TITLE */}
            <input
              className="border p-2 w-full mb-2"
              placeholder="Title"
              value={item.title}
              onChange={(e) => {
                const updated = [...taboverview];

                updated[i].title = e.target.value;

                setTaboverview(updated);
              }}
            />

            {/* SUBTITLE */}
            <input
              className="border p-2 w-full mb-2"
              placeholder="Subtitle"
              value={item.subtitle}
              onChange={(e) => {
                const updated = [...taboverview];

                updated[i].subtitle = e.target.value;

                setTaboverview(updated);
              }}
            />

            {/* DESCRIPTION */}
            <div className="mb-4">
              <label className="font-semibold block mb-2">Description</label>

              <CustomRichEditor
                value={item.description || ""}
                onChange={(html) => {
                  const updated = [...taboverview];

                  updated[i].description = html;

                  setTaboverview(updated);
                }}
              />
            </div>

            {/* REMOVE */}
            <button
              type="button"
              className="bg-red-600 text-white px-4 py-1 rounded"
              onClick={() => {
                const updated = [...taboverview];

                updated.splice(i, 1);

                setTaboverview(updated);
              }}
            >
              Remove Tab
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

                <CustomRichEditor
                  value={s.description || ""}
                  onChange={(html) => {
                    const updated = [...highlight];

                    updated[i].section[j].description = html;

                    setHighlight(updated);
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

            <div className=" flex justify-between items-center">
              <button
                type="button"
                className="bg-blue-600 text-white px-4 py-1 rounded"
                onClick={() => addHighlightSection(i)}
              >
                + Add Section
              </button>

              <button
                type="button"
                className="bg-red-700 text-white px-4 py-1 rounded mt-3"
                onClick={() => removeHighlight(i)}
              >
                Remove Highlight
              </button>
            </div>
          </div>
        ))}
      </section>

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

        <div className="mb-4">
          <label className="font-semibold block mb-2">Description</label>

          <CustomRichEditor
            value={besttime[0].description || ""}
            onChange={(html) => {
              const updated = [...besttime];

              updated[0].description = html;

              setBesttime(updated);
            }}
          />
        </div>

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

            <CustomRichEditor
              value={item.content || ""}
              onChange={(html) => {
                const updated = [...besttime];

                updated[0].months[i].content = html;

                setBesttime(updated);
              }}
            />

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

      {/* ================= FAQ SECTION ================= */}
      <section className="col-span-2 mt-6">
        <div className="flex justify-between">
          <h3 className="text-xl font-bold">FAQ</h3>
          <button
            type="button"
            onClick={addFaqSection}
            className="bg-green-600 text-white px-3 py-1 rounded"
          >
            + Add Section
          </button>
        </div>

        {faq.map((section, i) => (
          <div key={i} className="border p-4 mt-4 bg-gray-50 rounded">
            <input
              name="title"
              placeholder="Section Title"
              className="border p-2 w-full mb-2"
              value={section.title}
              onChange={(e) => handleFaqSection(i, e)}
            />

            <input
              name="subtitle"
              placeholder="Section Subtitle"
              className="border p-2 w-full mb-2"
              value={section.subtitle}
              onChange={(e) => handleFaqSection(i, e)}
            />

            <button
              type="button"
              onClick={() => addFaq(i)}
              className="bg-blue-600 text-white px-3 py-1 rounded"
            >
              + Add Question
            </button>

            {section.faqs.map((item, j) => (
              <div key={j} className="border p-3 bg-white mt-3 rounded">
                <input
                  className="border p-2 w-full mb-2"
                  placeholder="Question"
                  value={item.question}
                  onChange={(e) => handleFaq(i, j, e)}
                />

                <CustomRichEditor
                  value={item.answer || ""}
                  onChange={(html) => {
                    const updated = [...faq];

                    updated[i].faqs[j].answer = html;

                    setFaq(updated);
                  }}
                />

                <button
                  type="button"
                  onClick={() => removeFaq(i, j)}
                  className="bg-red-600 text-white px-3 py-1 mt-3 rounded"
                >
                  Remove Question
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={() => removeFaqSection(i)}
              className="bg-red-700 text-white px-3 py-1 mt-4 rounded"
            >
              Remove Section
            </button>
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

export default DestinationLandingFormNew;
