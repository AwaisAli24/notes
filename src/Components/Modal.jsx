import { useState } from "react";

const Modal = ({ onClose, onAddNote }) => {
  const [heading, setHeading] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (heading.trim() === "") return; // validation
    onAddNote({ heading, content });
    setHeading("");
    setContent("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-2">
      <div className="bg-white w-full max-w-md rounded-lg p-6 shadow-lg mx-auto">
        <h2 className="text-xl font-semibold mb-4">Add New Note</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm mb-1">Heading</label>
            <input
              type="text"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Note title"
              required
              maxLength={50}
            />
          </div>

          <div className="mb-2">
            <label className="block text-sm mb-1">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 h-32 resize-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write your note..."
              maxLength={200}
            ></textarea>
            <p className="text-xs text-gray-400 mt-1">{content.length}/200</p>
          </div>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded border border-gray-300 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-black text-white cursor-pointer"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
