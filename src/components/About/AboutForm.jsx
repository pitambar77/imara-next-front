"use client";

import React, { useEffect, useState } from "react";
import API from "../../api/axios.js";
import CustomRichEditor from "../CustomRichEditor.jsx";

const AboutForm = ({ editData, onSuccess }) => {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
  });

  const [mainImage, setMainImage] = useState(null);
  const [mainImagePreview, setMainImagePreview] = useState(null);

  // ===================== Sections =====================
  const [overview, setOverview] = useState([
    { title: "", subtitle: "", description: "" },
  ]);
  const [overviewinfo, setOverviewinfo] = useState([
    {
      title: "",
      subtitle: "",
      description: "",
      image: null,
      imagePreview: null,
    },
  ]);

  const [adventure, setAdventure] = useState([{ heading: "", team: [] }]);
  const [faq, setFaq] = useState([{ question: "", answer: "" }]);

  useEffect(() => {
    if (editData) {
      setFormData({
        title: editData.title || "",
        subtitle: editData.subtitle || "",
      });

      setOverview(editData.overview ?? []);

      setOverviewinfo(
        (editData.overviewinfo || []).map((item) => ({
          ...item,
          image: null,
          existingImage: item.image || "",
          imagePreview: item.image || null,
        })),
      );

      setAdventure(editData.adventure ?? []);
      setFaq(editData.faq ?? []);
      setMainImagePreview(editData.image || null);
    }
  }, [editData]);

  // ================= Basic Field Handler ==============
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Main image handler
  const handleMainImage = (e) => {
    const file = e.target.files[0];
    setMainImage(file);
    setMainImagePreview(URL.createObjectURL(file));
  };

  // ===================================================================
  // ======================== OVERVIEW ================================
  // ===================================================================
  const addOverview = () =>
    setOverview([...overview, { title: "", subtitle: "", description: "" }]);
  const removeOverview = (i) => {
    const updated = [...overview];
    updated.splice(i, 1);
    setOverview(updated);
  };
  const handleOverviewChange = (i, e) => {
    const updated = [...overview];
    updated[i][e.target.name] = e.target.value;
    setOverview(updated);
  };

  // ===================================================================
  // ==================== OVERVIEW INFO ===============================
  // ===================================================================
  const addOverviewinfo = () =>
    setOverviewinfo([
      ...overviewinfo,
      {
        title: "",
        subtitle: "",
        description: "",
        image: null,
        existingImage: "",
        imagePreview: null,
      },
    ]);

  const removeOverviewinfo = (i) => {
    const updated = [...overviewinfo];
    updated.splice(i, 1);
    setOverviewinfo(updated);
  };

  const handleOverviewinfoBase = (i, e) => {
    const updated = [...overviewinfo];
    updated[i][e.target.name] = e.target.value;
    setOverviewinfo(updated);
  };

  const handleOverviewInfoImage = (i, e) => {
    const file = e.target.files[0];
    const updated = [...overviewinfo];

    updated[i].image = file;
    updated[i].imagePreview = URL.createObjectURL(file);

    setOverviewinfo(updated);
  };

  // ===================================================================
  // ====================== ADVENTURE =================================
  // ===================================================================
  const addAdventureSection = () =>
    setAdventure([...adventure, { heading: "", team: [] }]);
  const removeAdventureSection = (i) => {
    const updated = [...adventure];
    updated.splice(i, 1);
    setAdventure(updated);
  };
  const handleAdventureHeading = (i, e) => {
    let updated = [...adventure];
    updated[i].heading = e.target.value;
    setAdventure(updated);
  };

  const addTeamItem = (i) => {
    const updated = [...adventure];
    updated[i].team.push({
      title: "",
      subtitle: "",
      description: "",
      image: null,
      imagePreview: null,
    });
    setAdventure(updated);
  };

  const handleTeamChange = (i, j, e) => {
    const updated = [...adventure];
    updated[i].team[j][e.target.name] = e.target.value;
    setAdventure(updated);
  };

  const handleTeamImage = (i, j, e) => {
    const file = e.target.files[0];
    const updated = [...adventure];
    updated[i].team[j].image = file;
    updated[i].team[j].imagePreview = URL.createObjectURL(file);
    setAdventure(updated);
  };

  const removeTeamCard = (i, j) => {
    const updated = [...adventure];
    updated[i].team.splice(j, 1);
    setAdventure(updated);
  };

  // ===================================================================
  // ========================== FAQ ===================================
  // ===================================================================
  const addFaq = () => setFaq([...faq, { question: "", answer: "" }]);
  const removeFaq = (i) => {
    const updated = [...faq];
    updated.splice(i, 1);
    setFaq(updated);
  };

  const handleFaqChange = (i, e) => {
    const updated = [...faq];
    updated[i][e.target.name] = e.target.value;
    setFaq(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("formData", JSON.stringify(formData));

    if (mainImage) data.append("mainImage", mainImage);

    data.append("overview", JSON.stringify(overview));
    // data.append("overviewinfo", JSON.stringify(overviewinfo));
    const cleanedOverviewInfo = overviewinfo.map((item) => ({
      ...item,
      image: item.image ? item.image.name : item.existingImage,
    }));

    data.append("overviewinfo", JSON.stringify(cleanedOverviewInfo));
    data.append("adventure", JSON.stringify(adventure));
    data.append("faq", JSON.stringify(faq));

    // ✅ OverviewInfo images
    overviewinfo.forEach((item) => {
      if (item.image) data.append("overviewInfoImages", item.image);
    });

    // ✅ Adventure images
    adventure.forEach((section) =>
      section.team.forEach((item) => {
        if (item.image) data.append("adventureImages", item.image);
      }),
    );

    try {
      const res = editData
        ? await API.put(`/about/${editData._id}`, data)
        : await API.post("/about", data);

      alert("Saved Successfully!");
      onSuccess && onSuccess(res.data);
    } catch (err) {
      console.error(err);
      alert("Error saving About page");
    }
  };

  // ===================================================================
  // ============================ UI ==================================
  // ===================================================================
  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 pb-20">
      <h2 className="col-span-2 text-2xl font-bold">
        {editData ? "Edit About" : "Create About"}
      </h2>

      <input
        className="border p-2"
        name="title"
        placeholder="Title"
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

      {/* MAIN IMAGE UPLOAD */}
      <div className="col-span-2">
        <label>Main Banner Image</label>
        <input
          type="file"
          className="border p-2 w-full"
          onChange={handleMainImage}
        />
        {mainImagePreview && (
          <img src={mainImagePreview} className="w-40 rounded mt-2" />
        )}
      </div>

      {/* ===================== OVERVIEW ===================== */}
      <section className="col-span-2 mt-6">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">Overview</h3>
          <button
            type="button"
            className="bg-green-600 text-white px-4 py-1 rounded"
            onClick={addOverview}
          >
            + Add
          </button>
        </div>

        {overview.map((item, i) => (
          <div key={i} className="border bg-gray-50 p-4 rounded mt-3">
            <input
              className="border p-2 w-full mb-2"
              name="title"
              placeholder="Title"
              value={item.title}
              onChange={(e) => handleOverviewChange(i, e)}
            />
            <input
              className="border p-2 w-full mb-2"
              name="subtitle"
              placeholder="Subtitle"
              value={item.subtitle}
              onChange={(e) => handleOverviewChange(i, e)}
            />
            {/* <textarea
              className="border p-2 w-full mb-2"
              name="description"
              placeholder="Description"
              value={item.description}
              onChange={(e) => handleOverviewChange(i, e)}
            /> */}

            <CustomRichEditor
              value={item.description}
              onChange={(value) => {
                const updated = [...overview];
                updated[i].description = value;
                setOverview(updated);
              }}
            />

            <button
              type="button"
              className="bg-red-600 text-white px-3 py-1 mt-2 rounded"
              onClick={() => removeOverview(i)}
            >
              Remove
            </button>
          </div>
        ))}
      </section>

      {/* ===================== OVERVIEW INFO ===================== */}
      <section className="col-span-2 mt-6">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">Overview Info Blocks</h3>
          <button
            type="button"
            className="bg-green-600 text-white px-4 py-1 rounded"
            onClick={addOverviewinfo}
          >
            + Add
          </button>
        </div>

        {overviewinfo.map((item, i) => (
          <div key={i} className="border p-4 bg-gray-50 mt-3 rounded">
            <input
              className="border p-2 w-full mb-2"
              name="title"
              placeholder="Title"
              value={item.title}
              onChange={(e) => handleOverviewinfoBase(i, e)}
            />
            <input
              className="border p-2 w-full mb-2"
              name="subtitle"
              placeholder="Subtitle"
              value={item.subtitle}
              onChange={(e) => handleOverviewinfoBase(i, e)}
            />

            {/* Overview Info Image */}
            <input
              type="file"
              className="border p-2 w-full mb-2"
              onChange={(e) => handleOverviewInfoImage(i, e)}
            />

            {item.imagePreview && (
              <img src={item.imagePreview} className="w-32 rounded mb-2" />
            )}

            <CustomRichEditor
              value={item.description}
              onChange={(value) => {
                const updated = [...overviewinfo];
                updated[i].description = value;
                setOverviewinfo(updated);
              }}
            />

            <button
              type="button"
              className="bg-red-600 text-white px-3 py-1 rounded mt-3"
              onClick={() => removeOverviewinfo(i)}
            >
              Remove Section
            </button>
          </div>
        ))}
      </section>

      {/* ===================== ADVENTURE ===================== */}
      <section className="col-span-2 mt-6">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">Adventure & Team Section</h3>
          <button
            type="button"
            onClick={addAdventureSection}
            className="bg-green-600 text-white px-4 py-1 rounded"
          >
            + Add
          </button>
        </div>

        {adventure.map((item, i) => (
          <div key={i} className="border p-4 bg-gray-50 mt-3 rounded">
            <input
              className="border p-2 w-full mb-2"
              placeholder="Heading"
              value={item.heading}
              onChange={(e) => handleAdventureHeading(i, e)}
            />

            <button
              type="button"
              onClick={() => addTeamItem(i)}
              className="bg-blue-600 text-white px-3 py-1 rounded"
            >
              + Add Team Member
            </button>

            {item.team.map((person, j) => (
              <div key={j} className="border p-3 bg-white mt-2 rounded">
                <input
                  className="border p-2 w-full mb-2"
                  name="title"
                  placeholder="Name"
                  value={person.title}
                  onChange={(e) => handleTeamChange(i, j, e)}
                />
                <input
                  className="border p-2 w-full mb-2"
                  name="subtitle"
                  placeholder="Subtitle"
                  value={person.subtitle}
                  onChange={(e) => handleTeamChange(i, j, e)}
                />
                <CustomRichEditor
                  value={person.description}
                  onChange={(value) => {
                    const updated = [...adventure];

                    updated[i].team[j].description = value;

                    setAdventure(updated);
                  }}
                />

                <input
                  type="file"
                  className="border p-2 w-full"
                  onChange={(e) => handleTeamImage(i, j, e)}
                />
                {person.imagePreview && (
                  <img
                    className="w-32 rounded mt-2"
                    src={person.imagePreview}
                  />
                )}

                <button
                  type="button"
                  className="bg-red-600 text-white px-3 py-1 rounded mt-2"
                  onClick={() => removeTeamCard(i, j)}
                >
                  Remove
                </button>
              </div>
            ))}

            <button
              type="button"
              className="bg-red-600 text-white px-3 py-1 rounded mt-3"
              onClick={() => removeAdventureSection(i)}
            >
              Remove Section
            </button>
          </div>
        ))}
      </section>

      {/* ===================== FAQ ===================== */}
      <section className="col-span-2 mt-6">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">FAQ / About Booking</h3>
          <button
            type="button"
            className="bg-green-600 text-white px-3 py-1 rounded"
            onClick={addFaq}
          >
            + Add
          </button>
        </div>

        {faq.map((item, i) => (
          <div key={i} className="border bg-gray-50 p-4 mt-3 rounded">
            <input
              className="border p-2 w-full mb-2"
              name="question"
              placeholder="Question"
              value={item.question}
              onChange={(e) => handleFaqChange(i, e)}
            />

            <CustomRichEditor
              value={item.answer}
              onChange={(value) => {
                const updated = [...faq];
                updated[i].answer = value;
                setFaq(updated);
              }}
            />

            <button
              type="button"
              className="bg-red-600 text-white px-3 py-1 rounded mt-3"
              onClick={() => removeFaq(i)}
            >
              Remove Question
            </button>
          </div>
        ))}
      </section>

      <button
        type="submit"
        className="col-span-2 bg-blue-600 text-white py-2 rounded mt-4"
      >
        {editData ? "Update About Page" : "Save About Page"}
      </button>
    </form>
  );
};

export default AboutForm;
