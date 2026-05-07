"use client";

import { useEffect, useState } from "react";
import API from "@/api/axios";

export default function HomepagePage() {
  const [form, setForm] = useState({
    title: "",
    subtitle: "",
    bannerImage: "",
    faq: [],
  });

  const [isEdit, setIsEdit] = useState(false);
  const [pageId, setPageId] = useState(null);

  const [loading, setLoading] = useState(true);

  /* ================= FETCH ================= */

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await API.get("/homepage");

        if (res.data && res.data._id) {
          setIsEdit(true);
          setPageId(res.data._id);

          setForm({
            title: res.data.title || "",
            subtitle: res.data.subtitle || "",
            bannerImage: res.data.bannerImage || "",
            faq: res.data.faq?.length
              ? res.data.faq
              : [
                  {
                    title: "",
                    subtitle: "",
                    faqs: [
                      {
                        question: "",
                        answer: [{ type: "paragraph", content: "" }],
                      },
                    ],
                  },
                ],
          });
        }
      } catch (error) {
        console.error("Fetch homepage error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  /* ================= BASIC INPUT ================= */

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* ================= FAQ SECTION ================= */

  const addFaqSection = () => {
    setForm({
      ...form,
      faq: [
        ...form.faq,
        {
          title: "",
          subtitle: "",
          faqs: [],
        },
      ],
    });
  };

  const removeFaqSection = (i) => {
    const updated = [...form.faq];
    updated.splice(i, 1);
    setForm({ ...form, faq: updated });
  };

  const handleFaqSection = (i, e) => {
    const updated = [...form.faq];
    updated[i][e.target.name] = e.target.value;
    setForm({ ...form, faq: updated });
  };

  /* ================= FAQ ================= */

  const addFaq = (sectionIndex) => {
    const updated = [...form.faq];
    updated[sectionIndex].faqs.push({
      question: "",
      answer: [{ type: "paragraph", content: "" }],
    });
    setForm({ ...form, faq: updated });
  };

  const handleFaq = (sectionIndex, faqIndex, e) => {
    const updated = [...form.faq];
    updated[sectionIndex].faqs[faqIndex].question = e.target.value;
    setForm({ ...form, faq: updated });
  };

  const removeFaq = (sectionIndex, faqIndex) => {
    const updated = [...form.faq];
    updated[sectionIndex].faqs.splice(faqIndex, 1);
    setForm({ ...form, faq: updated });
  };

  /* ================= ANSWERS ================= */

  const addAnswer = (sectionIndex, faqIndex) => {
    const updated = [...form.faq];
    updated[sectionIndex].faqs[faqIndex].answer.push({
      type: "paragraph",
      content: "",
    });
    setForm({ ...form, faq: updated });
  };

  const handleAnswer = (sectionIndex, faqIndex, ansIndex, e) => {
    const updated = [...form.faq];
    updated[sectionIndex].faqs[faqIndex].answer[ansIndex][e.target.name] =
      e.target.value;
    setForm({ ...form, faq: updated });
  };

  const removeAnswer = (sectionIndex, faqIndex, ansIndex) => {
    const updated = [...form.faq];
    updated[sectionIndex].faqs[faqIndex].answer.splice(ansIndex, 1);
    setForm({ ...form, faq: updated });
  };

  /* ================= SAVE ================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/homepage", {
        ...form,
        faq: JSON.stringify(form.faq),
      });

      alert(isEdit ? "Updated successfully" : "Created successfully");
    } catch (error) {
      console.error("Save error:", error);
      alert("Error saving homepage");
    }
  };

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 max-w-6xl">
      <h1 className="text-2xl font-bold mb-6">
        {isEdit ? "Edit Homepage" : "Create Homepage"}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* ================= BASIC ================= */}
        <input
          name="title"
          placeholder="Title"
          className="border p-2 w-full"
          value={form.title}
          onChange={handleChange}
        />

        <textarea
          name="subtitle"
          placeholder="Subtitle"
          className="border p-2 w-full"
          value={form.subtitle}
          onChange={handleChange}
        />

        <input
          name="bannerImage"
          placeholder="Banner Image URL"
          className="border p-2 w-full"
          value={form.bannerImage}
          onChange={handleChange}
        />

        {/* ================= FAQ SECTION ================= */}
        <section>
          <div className="flex justify-between">
            <h3 className="text-xl font-bold">FAQ Sections</h3>
            {/* <button
              type="button"
              onClick={addFaqSection}
              className="bg-green-600 text-white px-3 py-1 rounded"
            >
              + Add Section
            </button> */}
          </div>

          {form.faq.map((section, i) => (
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

              {section.faqs.map((faq, j) => (
                <div key={j} className="border p-3 bg-white mt-3 rounded">
                  <input
                    className="border p-2 w-full mb-2"
                    placeholder="Question"
                    value={faq.question}
                    onChange={(e) => handleFaq(i, j, e)}
                  />

                  <button
                    type="button"
                    onClick={() => addAnswer(i, j)}
                    className="bg-purple-600 text-white px-3 py-1 rounded"
                  >
                    + Add Answer
                  </button>

                  {faq.answer.map((ans, k) => (
                    <div key={k} className="border p-2 mt-2 rounded">
                      <select
                        name="type"
                        className="border p-2 w-full mb-2"
                        value={ans.type}
                        onChange={(e) => handleAnswer(i, j, k, e)}
                      >
                        <option value="header">Header</option>
                        <option value="paragraph">Paragraph</option>
                        <option value="list">List</option>
                      </select>

                      <textarea
                        name="content"
                        className="border p-2 w-full"
                        value={ans.content}
                        onChange={(e) => handleAnswer(i, j, k, e)}
                      />

                      <button
                        type="button"
                        onClick={() => removeAnswer(i, j, k)}
                        className="bg-red-600 text-white px-2 py-1 mt-2 rounded"
                      >
                        Remove
                      </button>
                    </div>
                  ))}

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
          className="bg-blue-600 text-white px-6 py-2 rounded"
        >
          {isEdit ? "Update Homepage" : "Save Homepage"}
        </button>
      </form>
    </div>
  );
}
