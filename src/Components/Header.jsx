import { FileText, Plus } from "lucide-react";
const Header = ({ modal }) => {
  return (
    <header className="py-2 px-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 bg-white shadow-md">
      <div className="flex items-center gap-2">
        <div className="bg-black h-10 w-10 rounded-xl flex items-center justify-center">
          <FileText className="text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold">My Notes</h1>
          <p className="text-sm text-gray-500 mt-[-2px]">
            Welcome to the Notes App
          </p>
        </div>
      </div>
      <div>
        <button
          className="bg-black text-white px-4 py-2 rounded cursor-pointer flex items-center"
          onClick={() => modal(true)}
        >
          <Plus className="inline-block mr-2" />
          Add Note
        </button>
      </div>
    </header>
  );
};

export default Header;
