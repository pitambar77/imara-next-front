"use client";

import React, { useEffect, useState } from "react";
import API from "../../api/axios.js";

const TeamForm = ({ editData, onSuccess }) => {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
  });

  const [mainImage, setMainImage] = useState(null);
  const [mainImagePreview, setMainImagePreview] = useState(null);

  // ================= Sections =================
  const [adventure, setAdventure] = useState([
    { heading: "", adventure: [] }
  ]);

  const [profile, setProfile] = useState([
    { title: "", description: "", profile: [] }
  ]);

  // Fill form in edit mode
  useEffect(() => {
    if (editData) {
      setFormData(editData);
      setAdventure(editData.adventure ?? []);
      setProfile(editData.profile ?? []);
      setMainImagePreview(editData.image);
    }
  }, [editData]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleMainImage = (e) => {
    const file = e.target.files[0];
    setMainImage(file);
    setMainImagePreview(URL.createObjectURL(file));
  };

  // =============== ADVENTURE Section ===================
  const addAdventureSection = () =>
    setAdventure([...adventure, { heading: "", adventure: [] }]);

  const removeAdventureSection = (i) => {
    const updated = [...adventure];
    updated.splice(i, 1);
    setAdventure(updated);
  };

  const handleAdventureHeading = (i, e) => {
    const updated = [...adventure];
    updated[i].heading = e.target.value;
    setAdventure(updated);
  };

  const addAdventureItem = (sectionIndex) => {
    const updated = [...adventure];
    updated[sectionIndex].adventure.push({
      title: "",
      subtitle: "",
      description: "",
      image: null,
      imagePreview: null,
    });
    setAdventure(updated);
  };

  const removeAdventureItem = (sectionIndex, itemIndex) => {
    const updated = [...adventure];
    updated[sectionIndex].adventure.splice(itemIndex, 1);
    setAdventure(updated);
  };

  const handleAdventureItemChange = (sectionIndex, itemIndex, e) => {
    const updated = [...adventure];
    updated[sectionIndex].adventure[itemIndex][e.target.name] = e.target.value;
    setAdventure(updated);
  };

  const handleAdventureItemImage = (sectionIndex, itemIndex, e) => {
    const file = e.target.files[0];
    const updated = [...adventure];
    updated[sectionIndex].adventure[itemIndex].image = file;
    updated[sectionIndex].adventure[itemIndex].imagePreview = URL.createObjectURL(file);
    setAdventure(updated);
  };

  // =============== PROFILE Section ===================
  const addProfileSection = () =>
    setProfile([...profile, { title: "", description: "", profile: [] }]);

  const removeProfileSection = (i) => {
    const updated = [...profile];
    updated.splice(i, 1);
    setProfile(updated);
  };

  const handleProfileHeaderChange = (i, e) => {
    const updated = [...profile];
    updated[i][e.target.name] = e.target.value;
    setProfile(updated);
  };

  const addProfileCard = (sectionIndex) => {
    const updated = [...profile];
    updated[sectionIndex].profile.push({
      name: "",
      location: "",
      image: null,
      imagePreview: null,
    });
    setProfile(updated);
  };

  const removeProfileCard = (sectionIndex, cardIndex) => {
    const updated = [...profile];
    updated[sectionIndex].profile.splice(cardIndex, 1);
    setProfile(updated);
  };

  const handleProfileCardChange = (sectionIndex, cardIndex, e) => {
    const updated = [...profile];
    updated[sectionIndex].profile[cardIndex][e.target.name] = e.target.value;
    setProfile(updated);
  };

  const handleProfileCardImage = (sectionIndex, cardIndex, e) => {
    const file = e.target.files[0];
    const updated = [...profile];
    updated[sectionIndex].profile[cardIndex].image = file;
    updated[sectionIndex].profile[cardIndex].imagePreview = URL.createObjectURL(file);
    setProfile(updated);
  };

  // =============== SUBMIT ===================
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("formData", JSON.stringify(formData));

    if (mainImage) data.append("mainImage", mainImage);

    data.append("adventure", JSON.stringify(adventure));
    data.append("profile", JSON.stringify(profile));

    adventure.forEach(section =>
      section.adventure.forEach((item) => item.image && data.append("adventureImages", item.image))
    );

    profile.forEach(section =>
      section.profile.forEach((item) => item.image && data.append("profileImages", item.image))
    );

    try {
      let res;
      if (editData) {
        res = await API.put(`/team/${editData._id}`, data);
      } else {
        res = await API.post(`/team`, data);
      }

      alert("Saved successfully");
      onSuccess && onSuccess(res.data);

    } catch (err) {
      console.error(err);
      alert("Error saving team");
    }
  };

  // ================= UI ===================
  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 pb-20">
      <h2 className="col-span-2 text-xl font-bold">
        {editData ? "Edit Team" : "Create Team"}
      </h2>

      <input className="border p-2" placeholder="Title" name="title" value={formData.title} onChange={handleChange} />
      <input className="border p-2" placeholder="Subtitle" name="subtitle" value={formData.subtitle} onChange={handleChange} />

      {/* Main Image */}
      <div className="col-span-2">
        <label>Main Image</label>
        <input type="file" className="border p-2 w-full" onChange={handleMainImage} />
        {mainImagePreview && <img src={mainImagePreview} className="w-40 rounded mt-2" />}
      </div>

      {/* ================= Adventure UI ================= */}
      <section className="col-span-2 mt-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">Adventure Section</h3>
          <button type="button" onClick={addAdventureSection} className="bg-green-600 text-white px-3 py-1 rounded">+ Add</button>
        </div>

        {adventure.map((section, i) => (
          <div key={i} className="border p-4 bg-gray-50 mt-3 rounded">
            <input className="border p-2 w-full mb-2"
              placeholder="Section Heading"
              value={section.heading}
              onChange={(e)=>handleAdventureHeading(i,e)} />

            <button type="button" onClick={() => addAdventureItem(i)} className="bg-blue-600 text-white px-3 py-1 rounded">
              + Add Adventure Item
            </button>

            {section.adventure.map((item,j)=>(
              <div key={j} className="border p-3 mt-2 bg-white rounded">
                <input className="border p-2 w-full mb-2" name="title" placeholder="Title" value={item.title} onChange={(e)=>handleAdventureItemChange(i,j,e)} />
                <input className="border p-2 w-full mb-2" name="subtitle" placeholder="Subtitle" value={item.subtitle} onChange={(e)=>handleAdventureItemChange(i,j,e)} />
                <textarea className="border p-2 w-full mb-2" name="description" placeholder="Description" value={item.description} onChange={(e)=>handleAdventureItemChange(i,j,e)}></textarea>

                <input type="file" className="border p-2 w-full" onChange={(e)=>handleAdventureItemImage(i,j,e)} />
                {item.imagePreview && <img src={item.imagePreview} className="w-32 rounded mt-2" />}

                <button type="button" className="bg-red-600 text-white px-3 py-1 rounded mt-2"
                  onClick={() => removeAdventureItem(i,j)}>Remove Item</button>
              </div>
            ))}

            <button type="button"
              className="bg-red-600 text-white px-3 py-1 rounded mt-3"
              onClick={() => removeAdventureSection(i)}>Remove Section</button>
          </div>
        ))}
      </section>

      {/* ================= PROFILE UI ================= */}
      <section className="col-span-2 mt-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">Profile Section</h3>
          <button type="button" onClick={addProfileSection} className="bg-green-600 text-white px-3 py-1 rounded">+ Add</button>
        </div>

        {profile.map((section,i)=>(
          <div key={i} className="border bg-gray-50 p-4 mt-3 rounded">
            <input className="border p-2 w-full mb-2" name="title" placeholder="Title" value={section.title} onChange={(e)=>handleProfileHeaderChange(i,e)} />
            <textarea className="border p-2 w-full mb-2" name="description" placeholder="Description" value={section.description} onChange={(e)=>handleProfileHeaderChange(i,e)} />

            <button type="button"
              className="bg-blue-600 text-white px-3 py-1 rounded"
              onClick={() => addProfileCard(i)}>+ Add Profile</button>

            {section.profile.map((person,j)=>(
              <div key={j} className="border p-3 mt-2 bg-white rounded">
                <input className="border p-2 w-full mb-2" name="name" placeholder="Name" value={person.name} onChange={(e)=>handleProfileCardChange(i,j,e)} />
                <input className="border p-2 w-full mb-2" name="location" placeholder="Location" value={person.location} onChange={(e)=>handleProfileCardChange(i,j,e)} />

                <input type="file" className="border p-2 w-full" onChange={(e)=>handleProfileCardImage(i,j,e)} />
                {person.imagePreview && <img src={person.imagePreview} className="w-32 rounded mt-2" />}

                <button type="button" onClick={()=>removeProfileCard(i,j)} className="bg-red-600 text-white px-3 py-1 rounded mt-2">
                  Remove Profile
                </button>
              </div>
            ))}

            <button type="button"
              className="bg-red-600 text-white px-3 py-1 rounded mt-3"
              onClick={()=>removeProfileSection(i)}>Remove Section</button>
          </div>
        ))}
      </section>

      <button type="submit" className="col-span-2 bg-blue-600 text-white py-2 rounded mt-4">
        {editData ? "Update Team" : "Save Team"}
      </button>
    </form>
  );
};

export default TeamForm;
