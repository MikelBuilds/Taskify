export default function Navbar() {
  return (
    <nav className="bg-emerald-500 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          <div className="flex items-center">
            <span className="text-3xl font-bold tracking-wide">Taskify</span>
          </div>

          {/* Links */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-indigo-100">Home</a>
            <a href="#" className="hover:text-indigo-200">Tasks</a>
            <a href="#" className="hover:text-indigo-200">Completed</a>
          </div>

          {/* Button (optional) */}
          <div>
            <button className="bg-white text-emerald-500 px-4 py-2 rounded-xl font-medium hover:bg-indigo-100 transition">
              Add Task
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
