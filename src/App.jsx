import { useState } from "react";
import Card from "./components/Card";
import Search from "./components/Search";
import Modal from "./components/Modal";
import Header from "./components/Header";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notesAppNotes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const [searchTerm, setSearchTerm] = useState("");
  // function to add a new note.
  const addNote = (newNote) => {
    setNotes((prev) => [...prev, newNote]);
    localStorage.setItem("notesAppNotes", JSON.stringify([...notes, newNote]));
  };

  return (
    <div className="min-h-screen w-screen bg-gray-50">
      {/* Header */}
      <Header modal={setIsModalOpen} />

      <main className="p-4 w-full">
        <Search onType={setSearchTerm} />
        <div className="flex flex-wrap gap-6 sm:gap-8 justify-center mt-10">
          {notes.map((note, index) =>
            note.heading.includes(searchTerm) ||
            note.content.includes(searchTerm) ? (
              <Card key={index} heading={note.heading} content={note.content} />
            ) : null
          )}
        </div>
      </main>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)} onAddNote={addNote} />
      )}
    </div>
  );
};

export default App;
