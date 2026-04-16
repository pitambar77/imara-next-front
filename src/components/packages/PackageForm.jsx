"use client";

import React, { useState } from "react";
import API from "../../api/axios.js";
import { useEffect } from "react";

const PackageForm = ({ editData }) => {
  /* ================= BASIC FIELDS ================= */
  const [formData, setFormData] = useState({
    destination: "",
    title: "",
    subtitle: "",
    startLocation: "",
    endLocation: "",
    duration: "",
    price: "",
    maxpeople: "",
    description: "",
    typeStyle: "",
    accomoType: "",
    transport: "",
    accomoDay: "",
    accomoNight: "",
    add: "",
  });

  const [mainImage, setMainImage] = useState(null);
  const [mainPreview, setMainPreview] = useState(null);

  const [landingImage, setLandingImage] = useState(null);
  const [landingPreview, setLandingPreview] = useState(null);

  /* ================= ITINERARY ================= */
  const [itinerary, setItinerary] = useState([
    {
      heading: "",
      map: "",
      image: null,
      imagePreview: null,
      section: [
        {
          day: "",
          title: "",
          startpoint: "",
          endpoint: "",
          accommodationName: "",
          description: [],
          image: null,
          imagePreview: null,
        },
      ],
    },
  ]);

  /* ================= EXPERIENCE ================= */
  const [experience, setExperience] = useState([
    {
      heading: "",
      subheading: "",
      section: [
        { title: "", description: "", image: null, imagePreview: null },
      ],
    },
  ]);

  /* ================= INCLUDE / EXCLUDE ================= */
  const [include, setInclude] = useState([
    { content: "", image: null, imagePreview: null },
  ]);

  const [exclude, setExclude] = useState([
    { content: "", image: null, imagePreview: null },
  ]);

  /* ================= HANDLERS ================= */
  // const handleChange = (e) =>
  //   setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMainImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setMainImage(file);
    setMainPreview(URL.createObjectURL(file));
  };

  const handleLandingImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLandingImage(file);
    setLandingPreview(URL.createObjectURL(file));
  };

  /* ================= Itinary HANDLERS ================= */

  const addItinerary = () => {
    setItinerary([
      ...itinerary,
      {
        heading: "",
        map: "",
        image: null,
        imagePreview: null,
        section: [
          {
            day: "",
            title: "",
            startpoint: "",
            endpoint: "",
            accommodationName: "",
            description: [],
            image: null,
            imagePreview: null,
          },
        ],
      },
    ]);
  };

  const removeItinerary = (i) => {
    const updated = [...itinerary];
    updated.splice(i, 1);
    setItinerary(updated);
  };

  const handleItineraryChange = (i, e) => {
    const updated = [...itinerary];
    updated[i][e.target.name] = e.target.value;
    setItinerary(updated);
  };

  const handleItineraryImage = (i, e) => {
    const file = e.target.files[0];
    const updated = [...itinerary];
    updated[i].image = file;
    updated[i].imagePreview = URL.createObjectURL(file);
    setItinerary(updated);
  };

  //   const handleDayLandingImage = (i, j, e) => {
  //   const file = e.target.files[0];
  //   if (!file) return;

  //   const updated = [...itinerary];
  //   updated[i].section[j].landingImage = file;
  //   updated[i].section[j].landingImagePreview = URL.createObjectURL(file);
  //   setItinerary(updated);
  // };

  const addDay = (i) => {
    const updated = [...itinerary];
    updated[i].section.push({
      day: "",
      title: "",
      startpoint: "",
      endpoint: "",
      accommodationName: "",
      description: [],
      image: null,
      imagePreview: null,
    });
    setItinerary(updated);
  };

  const removeDay = (i, j) => {
    const updated = [...itinerary];
    updated[i].section.splice(j, 1);
    setItinerary(updated);
  };

  const handleDayChange = (i, j, e) => {
    const updated = [...itinerary];
    updated[i].section[j][e.target.name] = e.target.value;
    setItinerary(updated);
  };

  const handleDayImage = (i, j, e) => {
    const file = e.target.files[0];
    const updated = [...itinerary];
    updated[i].section[j].image = file;
    updated[i].section[j].imagePreview = URL.createObjectURL(file);
    setItinerary(updated);
  };

  const addDescriptionBlock = (i, j) => {
    const updated = [...itinerary];
    updated[i].section[j].description.push({
      type: "paragraph",
      content: "",
    });
    setItinerary(updated);
  };

  const handleDescriptionChange = (i, j, k, e) => {
    const updated = [...itinerary];
    updated[i].section[j].description[k][e.target.name] = e.target.value;
    setItinerary(updated);
  };

  const removeDescriptionBlock = (i, j, k) => {
    const updated = [...itinerary];
    updated[i].section[j].description.splice(k, 1);
    setItinerary(updated);
  };

  /* ================= experience ================= */

  const addExperience = () => {
    setExperience([
      ...experience,
      {
        heading: "",
        subheading: "",
        section: [
          { title: "", description: "", image: null, imagePreview: null },
        ],
      },
    ]);
  };

  const removeExperience = (i) => {
    const updated = [...experience];
    updated.splice(i, 1);
    setExperience(updated);
  };

  const handleExperienceChange = (i, e) => {
    const updated = [...experience];
    updated[i][e.target.name] = e.target.value;
    setExperience(updated);
  };

  const addExperienceSection = (i) => {
    const updated = [...experience];
    updated[i].section.push({
      title: "",
      description: "",
      image: null,
      imagePreview: null,
    });
    setExperience(updated);
  };

  const removeExperienceSection = (i, j) => {
    const updated = [...experience];
    updated[i].section.splice(j, 1);
    setExperience(updated);
  };

  const handleExperienceSectionChange = (i, j, e) => {
    const updated = [...experience];
    updated[i].section[j][e.target.name] = e.target.value;
    setExperience(updated);
  };

  const handleExperienceImage = (i, j, e) => {
    const file = e.target.files[0];
    const updated = [...experience];
    updated[i].section[j].image = file;
    updated[i].section[j].imagePreview = URL.createObjectURL(file);
    setExperience(updated);
  };

  /* ================= Include ================= */

  const addInclude = () => {
    setInclude([...include, { content: "", image: null, imagePreview: null }]);
  };

  const removeInclude = (i) => {
    const updated = [...include];
    updated.splice(i, 1);
    setInclude(updated);
  };

  const handleIncludeChange = (i, e) => {
    const updated = [...include];
    updated[i].content = e.target.value;
    setInclude(updated);
  };

  const handleIncludeImage = (i, e) => {
    const file = e.target.files[0];
    const updated = [...include];
    updated[i].image = file;
    updated[i].imagePreview = URL.createObjectURL(file);
    setInclude(updated);
  };

  /* ================= Exlude ================= */

  const addExclude = () => {
    setExclude([...exclude, { content: "", image: null, imagePreview: null }]);
  };

  const removeExclude = (i) => {
    const updated = [...exclude];
    updated.splice(i, 1);
    setExclude(updated);
  };

  const handleExcludeChange = (i, e) => {
    const updated = [...exclude];
    updated[i].content = e.target.value;
    setExclude(updated);
  };

  const handleExcludeImage = (i, e) => {
    const file = e.target.files[0];
    const updated = [...exclude];
    updated[i].image = file;
    updated[i].imagePreview = URL.createObjectURL(file);
    setExclude(updated);
  };

  // useEffect(() => {
  //   if (!editData) return;

  //   setFormData({
  //     title: editData.title || "",
  //     subtitle: editData.subtitle || "",
  //     startLocation: editData.startLocation || "",
  //     endLocation: editData.endLocation || "",
  //     duration: editData.duration || "",
  //     price: editData.price || "",
  //     maxpeople: editData.maxpeople || "",
  //     description: editData.description || "",
  //     typeStyle: editData.typeStyle || "",
  //     accomoType: editData.accomoType || "",
  //     transport: editData.transport || "",
  //     accomoDay: editData.accomoDay || "",
  //     accomoNight: editData.accomoNight || "",
  //     add: editData.add || "",
  //   });

  //   if (editData.image) {
  //     setMainPreview(editData.image);
  //   }
  // }, [editData]);

  useEffect(() => {
    if (!editData) return;

    setFormData({
      destination: editData.destination || "",
      title: editData.title || "",
      subtitle: editData.subtitle || "",
      startLocation: editData.startLocation || "",
      endLocation: editData.endLocation || "",
      duration: editData.duration || "",
      price: editData.price || "",
      maxpeople: editData.maxpeople || "",
      description: editData.description || "",
      typeStyle: editData.typeStyle || "",
      accomoType: editData.accomoType || "",
      transport: editData.transport || "",
      accomoDay: editData.accomoDay || "",
      accomoNight: editData.accomoNight || "",
      add: editData.add || "",
    });

    /* Main image */
    if (editData.image) {
      setMainPreview(editData.image);
      setMainImage(null);
    }

    /* Landing image */
    if (editData.landingImage) {
      setLandingPreview(editData.landingImage);
      setLandingImage(null);
    }

    /* Itinerary */
    if (editData.itinerary?.length) {
      setItinerary(
        editData.itinerary.map((it) => ({
          ...it,
          image: null,
          imagePreview: it.image || null,
          section: it.section.map((s) => ({
            ...s,
            image: null,
            imagePreview: s.image || null,
          })),
        })),
      );
    }

    /* Experience */
    if (editData.experience?.length) {
      setExperience(
        editData.experience.map((ex) => ({
          ...ex,
          section: ex.section.map((s) => ({
            ...s,
            image: null,
            imagePreview: s.image || null,
          })),
        })),
      );
    }

    /* Include */
    if (editData.include?.length) {
      setInclude(
        editData.include.map((i) => ({
          ...i,
          image: null,
          imagePreview: i.image || null,
        })),
      );
    }

    /* Exclude */
    if (editData.exclude?.length) {
      setExclude(
        editData.exclude.map((i) => ({
          ...i,
          image: null,
          imagePreview: i.image || null,
        })),
      );
    }
  }, [editData]);

  /* ================= SUBMIT ================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    /* ================= BASIC FORM DATA ================= */
    data.append("formData", JSON.stringify(formData));

    if (mainImage) {
      data.append("mainImage", mainImage);
    }

    if (landingImage) {
      data.append("landingImage", landingImage);
    }

    /* ================= ITINERARY ================= */
    // data.append(
    //   "itinerary",
    //   JSON.stringify(
    //     itinerary.map(({ image, imagePreview, ...rest }) => ({
    //       ...rest,
    //       section: rest.section.map(({ image, imagePreview, ...sec }) => sec),
    //     }))
    //   )
    // );

    data.append(
      "itinerary",
      JSON.stringify(
        itinerary.map((it) => ({
          ...it,
          image: it.imagePreview || it.image || null, // ✅ KEEP OLD IMAGE
          section: it.section.map((sec) => ({
            ...sec,
            image: sec.imagePreview || sec.image || null, // ✅ KEEP OLD IMAGE
          })),
        })),
      ),
    );

    itinerary.forEach((item) => {
      if (item.image) {
        data.append("itineraryImages", item.image);
      }
    });

    itinerary.forEach((item) =>
      item.section.forEach((sec) => {
        if (sec.image) {
          data.append("itineraryImages", sec.image);
        }
      }),
    );

    /* ================= EXPERIENCE ================= */
    // data.append(
    //   "experience",
    //   JSON.stringify(
    //     experience.map(({ image, imagePreview, ...rest }) => ({
    //       ...rest,
    //       section: rest.section.map(({ image, imagePreview, ...sec }) => sec),
    //     }))
    //   )
    // );

    data.append(
      "experience",
      JSON.stringify(
        experience.map((ex) => ({
          ...ex,
          section: ex.section.map((sec) => ({
            ...sec,
            image: sec.imagePreview || sec.image || null,
          })),
        })),
      ),
    );

    experience.forEach((exp) =>
      exp.section.forEach((sec) => {
        if (sec.image) {
          data.append("experienceImages", sec.image);
        }
      }),
    );

    /* ================= INCLUDE ================= */
    // data.append(
    //   "include",
    //   JSON.stringify(include.map(({ image, ...rest }) => rest))
    // );

    data.append(
      "include",
      JSON.stringify(
        include.map((i) => ({
          ...i,
          image: i.imagePreview || i.image || null,
        })),
      ),
    );

    include.forEach((item) => {
      if (item.image) {
        data.append("includeImages", item.image);
      }
    });

    /* ================= EXCLUDE ================= */
    // data.append(
    //   "exclude",
    //   JSON.stringify(exclude.map(({ image, ...rest }) => rest))
    // );

    data.append(
      "exclude",
      JSON.stringify(
        exclude.map((i) => ({
          ...i,
          image: i.imagePreview || i.image || null,
        })),
      ),
    );

    exclude.forEach((item) => {
      if (item.image) {
        data.append("excludeImages", item.image);
      }
    });

    /* ================= API CALL ================= */
    try {
      if (editData?._id) {
        await API.put(`/packages/${editData._id}`, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await API.post("/packages", data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      alert(
        editData
          ? "✅ Package updated successfully"
          : "✅ Package created successfully",
      );
    } catch (err) {
      console.error("❌ Package create error:", err);
      alert("❌ Error creating package");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 ">
      {/* main section */}

      <section className="col-span-2 grid grid-cols-2 gap-4">
        <input
          className="border p-2"
          name="destination"
          placeholder="Destination"
          value={formData.destination}
          onChange={handleChange}
        />
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
        <input
          className="border p-2"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />
        <input
          className="border p-2"
          name="startLocation"
          placeholder="Start Location"
          value={formData.startLocation}
          onChange={handleChange}
        />

        <input
          className="border p-2"
          name="endLocation"
          placeholder="End Location"
          value={formData.endLocation}
          onChange={handleChange}
        />

        <input
          className="border p-2"
          name="transport"
          placeholder="Transport"
          value={formData.transport}
          onChange={handleChange}
        />

        <input
          className="border p-2"
          name="maxpeople"
          placeholder="Max People"
          value={formData.maxpeople}
          onChange={handleChange}
        />

        <input
          className="border p-2"
          name="accomoDay"
          placeholder="Accommodation Days"
          value={formData.accomoDay}
          onChange={handleChange}
        />

        <input
          className="border p-2"
          name="accomoNight"
          placeholder="Accommodation Nights"
          value={formData.accomoNight}
          onChange={handleChange}
        />

        <textarea
          className="border p-2 col-span-2"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />

        <textarea
          className="border p-2 col-span-2"
          name="add"
          placeholder="Additional Info"
          value={formData.add}
          onChange={handleChange}
        />

        <input
          className="border p-2"
          name="duration"
          placeholder="Duration (e.g. 7 Days)"
          value={formData.duration}
          onChange={handleChange}
        />

        <input
          className="border p-2"
          name="typeStyle"
          placeholder="Travel Style (Luxury / Budget)"
          value={formData.typeStyle}
          onChange={handleChange}
        />

        <input
          className="border p-2"
          name="accomoType"
          placeholder="Accommodation Type"
          value={formData.accomoType}
          onChange={handleChange}
        />
      </section>

      <section className="col-span-2 mt-6">
        <label className="font-semibold block mb-2">Main Image</label>

        <input
          type="file"
          accept="image/*"
          onChange={handleMainImage}
          className="border p-2 w-full"
        />

        {mainPreview && (
          <img
            src={mainPreview}
            className="w-40 mt-3 rounded shadow"
            alt="Main Preview"
          />
        )}
      </section>

      <section className="col-span-2 mt-6">
        <label className="font-semibold block mb-2">Landing Image</label>

        <input
          type="file"
          accept="image/*"
          onChange={handleLandingImage}
          className="border p-2 w-full"
        />

        {landingPreview && (
          <img
            src={landingPreview}
            className="w-40 mt-3 rounded shadow"
            alt="Landing Preview"
          />
        )}
      </section>

      {/* Include section  */}

      <section className="col-span-2 mt-8">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">Included</h3>
          <button
            type="button"
            onClick={addInclude}
            className="bg-green-600 text-white px-3 py-1 rounded"
          >
            + Add
          </button>
        </div>

        {include.map((item, i) => (
          <div key={i} className="border p-4 bg-gray-50 rounded mt-3">
            <textarea
              className="border p-2 w-full mb-2"
              placeholder="Included item"
              value={item.content}
              onChange={(e) => handleIncludeChange(i, e)}
            />

            <input type="file" onChange={(e) => handleIncludeImage(i, e)} />

            {item.imagePreview && (
              <img
                src={item.imagePreview}
                className="w-24 mt-2 rounded"
                alt="Preview"
              />
            )}

            <button
              type="button"
              onClick={() => removeInclude(i)}
              className="bg-red-600 text-white px-3 py-1 rounded mt-3"
            >
              Remove
            </button>
          </div>
        ))}
      </section>

      {/* Exlude section  */}

      <section className="col-span-2 mt-8">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">Excluded</h3>
          <button
            type="button"
            onClick={addExclude}
            className="bg-green-600 text-white px-3 py-1 rounded"
          >
            + Add
          </button>
        </div>

        {exclude.map((item, i) => (
          <div key={i} className="border p-4 bg-gray-50 rounded mt-3">
            <textarea
              className="border p-2 w-full mb-2"
              placeholder="Excluded item"
              value={item.content}
              onChange={(e) => handleExcludeChange(i, e)}
            />

            <input type="file" onChange={(e) => handleExcludeImage(i, e)} />

            {item.imagePreview && (
              <img
                src={item.imagePreview}
                className="w-24 mt-2 rounded"
                alt="Preview"
              />
            )}

            <button
              type="button"
              onClick={() => removeExclude(i)}
              className="bg-red-600 text-white px-3 py-1 rounded mt-3"
            >
              Remove
            </button>
          </div>
        ))}
      </section>

      {/* Experience section //  */}

      <section className="col-span-2 mt-8">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">Experience / Moments</h3>
          <button
            type="button"
            onClick={addExperience}
            className="bg-green-600 text-white px-3 py-1 rounded"
          >
            + Add Experience
          </button>
        </div>

        {experience.map((exp, i) => (
          <div key={i} className="border p-4 bg-gray-50 rounded mt-4">
            {/* EXPERIENCE HEADER */}
            <input
              className="border p-2 w-full mb-2"
              name="heading"
              placeholder="Heading"
              value={exp.heading}
              onChange={(e) => handleExperienceChange(i, e)}
            />

            <input
              className="border p-2 w-full mb-3"
              name="subheading"
              placeholder="Subheading"
              value={exp.subheading}
              onChange={(e) => handleExperienceChange(i, e)}
            />

            {/* EXPERIENCE SECTIONS */}
            <button
              type="button"
              onClick={() => addExperienceSection(i)}
              className="bg-blue-600 text-white px-3 py-1 rounded"
            >
              + Add Section
            </button>

            {exp.section.map((sec, j) => (
              <div key={j} className="border p-3 bg-white rounded mt-3">
                <input
                  className="border p-2 w-full mb-2"
                  name="title"
                  placeholder="Title"
                  value={sec.title}
                  onChange={(e) => handleExperienceSectionChange(i, j, e)}
                />

                <textarea
                  className="border p-2 w-full mb-2"
                  name="description"
                  placeholder="Description"
                  value={sec.description}
                  onChange={(e) => handleExperienceSectionChange(i, j, e)}
                />

                <input
                  type="file"
                  onChange={(e) => handleExperienceImage(i, j, e)}
                />

                {sec.imagePreview && (
                  <img
                    src={sec.imagePreview}
                    className="w-32 mt-2 rounded"
                    alt="Preview"
                  />
                )}

                <button
                  type="button"
                  onClick={() => removeExperienceSection(i, j)}
                  className="bg-red-600 text-white px-3 py-1 rounded mt-3"
                >
                  Remove Section
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={() => removeExperience(i)}
              className="bg-red-800 text-white px-3 py-1 rounded mt-4"
            >
              Remove Experience
            </button>
          </div>
        ))}
      </section>

      {/* Itinary section  */}

      <section className="col-span-2 mt-8">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">Itinerary</h3>
          <button
            type="button"
            onClick={addItinerary}
            className="bg-green-600 text-white px-3 py-1 rounded"
          >
            + Add Itinerary
          </button>
        </div>

        {itinerary.map((it, i) => (
          <div key={i} className="border p-4 bg-gray-50 rounded mt-4">
            {/* ITINERARY HEADER */}
            <input
              className="border p-2 w-full mb-2"
              name="heading"
              placeholder="Itinerary Heading"
              value={it.heading}
              onChange={(e) => handleItineraryChange(i, e)}
            />

            <input
              className="border p-2 w-full mb-2"
              name="map"
              placeholder="Map URL"
              value={it.map}
              onChange={(e) => handleItineraryChange(i, e)}
            />

            <input type="file" onChange={(e) => handleItineraryImage(i, e)} />
            {it.imagePreview && (
              <img src={it.imagePreview} className="w-32 mt-2 rounded" />
            )}

            {/* DAY SECTIONS */}
            <div className="mt-4">
              <button
                type="button"
                onClick={() => addDay(i)}
                className="bg-blue-600 text-white px-3 py-1 rounded"
              >
                + Add Day
              </button>

              {it.section.map((day, j) => (
                <div key={j} className="border p-3 bg-white rounded mt-3">
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      name="day"
                      placeholder="Day"
                      className="border p-2"
                      value={day.day}
                      onChange={(e) => handleDayChange(i, j, e)}
                    />

                    <input
                      name="title"
                      placeholder="Title"
                      className="border p-2"
                      value={day.title}
                      onChange={(e) => handleDayChange(i, j, e)}
                    />

                    <input
                      name="startpoint"
                      placeholder="Meals"
                      className="border p-2"
                      value={day.startpoint}
                      onChange={(e) => handleDayChange(i, j, e)}
                    />

                    <input
                      name="endpoint"
                      placeholder="End Point"
                      className="border p-2"
                      value={day.endpoint}
                      onChange={(e) => handleDayChange(i, j, e)}
                    />

                    <input
                      className="border p-2 col-span-2"
                      name="accommodationName"
                      placeholder="Accommodation"
                      value={day.accommodationName}
                      onChange={(e) => handleDayChange(i, j, e)}
                    />
                  </div>

                  {/* DESCRIPTION BLOCKS */}
                  <div className="mt-3">
                    <button
                      type="button"
                      onClick={() => addDescriptionBlock(i, j)}
                      className="bg-indigo-600 text-white px-3 py-1 rounded"
                    >
                      + Add Description
                    </button>

                    {day.description.map((d, k) => (
                      <div key={k} className="border p-2 mt-2 rounded">
                        <select
                          name="type"
                          className="border p-2 w-full mb-2"
                          value={d.type}
                          onChange={(e) => handleDescriptionChange(i, j, k, e)}
                        >
                          <option value="header">Header</option>
                          <option value="paragraph">Paragraph</option>
                          <option value="list">List</option>
                        </select>

                        <textarea
                          name="content"
                          className="border p-2 w-full"
                          placeholder="Content"
                          value={d.content}
                          onChange={(e) => handleDescriptionChange(i, j, k, e)}
                        />

                        <button
                          type="button"
                          onClick={() => removeDescriptionBlock(i, j, k)}
                          className="bg-red-600 text-white px-3 py-1 rounded mt-2"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* DAY IMAGE */}
                  <input
                    type="file"
                    className="mt-3"
                    onChange={(e) => handleDayImage(i, j, e)}
                  />
                  {day.imagePreview && (
                    <img src={day.imagePreview} className="w-32 mt-2 rounded" />
                  )}

                  <button
                    type="button"
                    onClick={() => removeDay(i, j)}
                    className="bg-red-700 text-white px-3 py-1 rounded mt-3"
                  >
                    Remove Day
                  </button>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => removeItinerary(i)}
              className="bg-red-800 text-white px-3 py-1 rounded mt-4"
            >
              Remove Itinerary
            </button>
          </div>
        ))}
      </section>

      {/* SUBMIT */}
      <button className="col-span-2 bg-blue-600 text-white py-2 rounded mt-4">
        Save Package
      </button>
    </form>
  );
};

export default PackageForm;
