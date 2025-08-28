import React from "react";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

export default function TodoApp({
  todo,
  todos,
  showFinished,
  handleChange,
  handleAdd,
  handleCheckbox,
  handleEdit,
  handleDelete,
  toggleFinished,
}) {
  return (
    <div className="min-h-screen bg-emerald-50 flex flex-col">
      {/* Main container */}
      <main className="flex-grow max-w-3xl mx-auto px-4 py-8">
        {/* Add Task Input */}
        <div className="flex mb-6">
          <input
            onChange={handleChange}
            value={todo}
            type="text"
            placeholder="Add a new task..."
            className="flex-grow px-4 py-2 border border-emerald-300 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-emerald-400"
            onKeyPress={(e) => e.key === "Enter" && handleAdd()}
          />
          <button
            onClick={handleAdd}
            className="bg-emerald-600 text-white px-6 py-2 rounded-r-xl hover:bg-emerald-700 transition"
          >
            Add
          </button>
        </div>

        {/* Show Finished Checkbox */}
        <div className="flex items-center mb-4">
          <input
            className="mr-2"
            id="show"
            onChange={toggleFinished}
            type="checkbox"
            checked={showFinished}
          />
          <label className="text-gray-700" htmlFor="show">
            Show Finished
          </label>
        </div>

        <div className="h-[1px] bg-black opacity-15 w-[90%] mx-auto my-4"></div>

        <h2 className="text-2xl font-bold mb-4">Your Todos</h2>

        {/* Todo List */}
        <div className="todos">
          {todos.length === 0 && (
            <div className="m-5 text-gray-500">No Todos to display</div>
          )}

          {todos.map((item) => {
            return (
              (showFinished || !item.isCompleted) && (
                <div
                  key={item.id}
                  className="todo flex my-3 justify-between items-center bg-white shadow p-4 rounded-xl border border-emerald-100"
                >
                  <div className="flex gap-3 items-center">
                    <input
                      name={item.id}
                      onChange={handleCheckbox}
                      type="checkbox"
                      checked={item.isCompleted}
                      className="h-5 w-5 text-emerald-600"
                    />
                    <div
                      className={
                        item.isCompleted
                          ? "line-through text-gray-500"
                          : "text-gray-700"
                      }
                    >
                      {item.todo}
                    </div>
                  </div>
                  <div className="buttons flex gap-2">
                    <button
                      onClick={(e) => handleEdit(e, item.id)}
                      className="bg-violet-800 hover:bg-violet-950 p-2 text-sm font-bold text-white rounded-md"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={(e) => handleDelete(e, item.id)}
                      className="bg-red-600 hover:bg-red-700 p-2 text-sm font-bold text-white rounded-md"
                    >
                      <AiFillDelete />
                    </button>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-emerald-600 text-white text-center py-4 mt-auto">
        <p className="text-sm">
          &copy; 2025 TodoApp — Built with React + Tailwind
        </p>
      </footer>
    </div>
  );
}
