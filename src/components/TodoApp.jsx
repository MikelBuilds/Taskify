export default function TodoApp() {
  return (
    <div className="min-h-screen bg-emerald-50 flex flex-col">
      
      {/* Navbar already from your side */}

      {/* Main container */}
      <main className="flex-grow max-w-3xl mx-auto px-4 py-8">
        
        {/* Add Task Input */}
        <div className="flex mb-6">
          <input
            type="text"
            placeholder="Add a new task..."
            className="flex-grow px-4 py-2 border border-emerald-300 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <button className="bg-emerald-600 text-white px-6 py-2 rounded-r-xl hover:bg-emerald-700 transition">
            Add
          </button>
        </div>

        {/* Todo List */}
        <ul className="space-y-3">
          {/* Single Todo Item */}
          <li className="flex items-center justify-between bg-white shadow p-4 rounded-xl border border-emerald-100">
            <div className="flex items-center space-x-3">
              <input type="checkbox" className="h-5 w-5 text-emerald-600" />
              <span className="text-gray-700">Finish React homework</span>
            </div>
            <button className="text-red-500 hover:text-red-700">Delete</button>
          </li>

          <li className="flex items-center justify-between bg-white shadow p-4 rounded-xl border border-emerald-100">
            <div className="flex items-center space-x-3">
              <input type="checkbox" className="h-5 w-5 text-emerald-600" />
              <span className="text-gray-700">Buy groceries</span>
            </div>
            <button className="text-red-500 hover:text-red-700">Delete</button>
          </li>
        </ul>
      </main>

      {/* Footer */}
      <footer className="bg-emerald-600 text-white text-center py-4 mt-auto">
        <p className="text-sm">&copy; 2025 TodoApp — Built with React + Tailwind</p>
      </footer>
    </div>
  );
}
