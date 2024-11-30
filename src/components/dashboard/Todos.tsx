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

  return (
    <section className="mb-8 rounded shadow shadow-black/20 w-4/5 min-h-96 bg-slate-50/60">
      {todos!.length > 0 ? (
        <ul>
          {todos!.map((todo, index) => (
            <li key={index}>{todo.name}</li>
          ))}
        </ul>
      ) : (
        <button onClick={createTodo}>Create To-do</button>
      )}
    </section>
  );
}
