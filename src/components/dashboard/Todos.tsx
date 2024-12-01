import React from 'react'
import TodosType from "./types/todos";

type Props = {
  todos: TodosType[] | null;
	userId: number;
  fetchUserInfo: () => void;
};

export default function Todos({ todos, userId, fetchUserInfo }: Props) {

  const createTodo = async () => {		
    try {
      const response = await fetch("/api/createTodo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId }),
      });
      if (!response.ok) {
        throw new Error("Failed to create todo.");	
      }     
			fetchUserInfo();
    } catch (err) {
      console.error("Error:", err);
    }
  };

	const deleteTodo = async (todoId: Number) => {
    try {
      const response = await fetch("/api/deleteTodo", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ todoId }),
      });
      if (!response.ok) {
        throw new Error("Failed to create todo.");
      }
     	fetchUserInfo();
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <section className="mb-8 rounded shadow shadow-black/20 w-4/5 min-h-96 bg-slate-50/60">
      {todos!.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 text-left border-b">Name</th>
                <th className="p-2 text-left border-b">Description</th>
                <th className="p-2 text-left border-b">Done</th>
                <th className="p-2 text-left border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {todos!.map((todo, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="p-2 border-b">{todo.name}</td>
                  <td className="p-2 border-b">{todo.description}</td>
                  <td className="p-2 border-b">
                    {todo.done.data[0] === 1 ? "Done" : "Not Done"}
                  </td>
                  <td className="p-2 border-b flex gap-1">
                    <button
                      onClick={() => deleteTodo(todo.id)}
                      className="text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <button
          onClick={createTodo}
          className="p-2 bg-blue-500 text-white rounded"
        >
          Create To-do
        </button>
      )}
    </section>
  );
}
