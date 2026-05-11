"use client";

import { useEffect, useRef } from "react";

const CustomRichEditor = ({ value, onChange }) => {
  const editorRef = useRef(null);

  // Load existing HTML
  useEffect(() => {
    if (editorRef.current && value !== editorRef.current.innerHTML) {
      editorRef.current.innerHTML = value || "";
    }
  }, [value]);

  // Save content
  const handleInput = () => {
    onChange(editorRef.current.innerHTML);
  };

  // Bold
  const handleBold = () => {
    document.execCommand("bold");
  };

  // Italic
  const handleItalic = () => {
    document.execCommand("italic");
  };

  // Underline
  const handleUnderline = () => {
    document.execCommand("underline");
  };

  // Highlight
  const handleHighlight = () => {
    document.execCommand("backColor", false, "yellow");
  };

  // Link
  const handleLink = () => {
    const url = prompt("Enter URL");

    if (url) {
      document.execCommand("createLink", false, url);

      const links = editorRef.current.querySelectorAll("a");

      links.forEach((link) => {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      });

      handleInput();
    }
  };

  return (
    <div className="border rounded-lg overflow-hidden">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-2 p-3 border-b bg-gray-50">
        <button
          type="button"
          onClick={handleBold}
          className="border px-3 py-1 rounded font-bold"
        >
          B
        </button>

        <button
          type="button"
          onClick={handleItalic}
          className="border px-3 py-1 rounded italic"
        >
          I
        </button>

        <button
          type="button"
          onClick={handleUnderline}
          className="border px-3 py-1 rounded underline"
        >
          U
        </button>

        <button
          type="button"
          onClick={handleHighlight}
          className="border px-3 py-1 rounded"
        >
          Highlight
        </button>

        <button
          type="button"
          onClick={handleLink}
          className="border px-3 py-1 rounded text-[#d87029]"
        >
          Link
        </button>
      </div>

      {/* Editor */}
      <div
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        className="
          min-h-[200px]
          p-4
          outline-none
          prose
          max-w-none
        "
      />
    </div>
  );
};

export default CustomRichEditor;
