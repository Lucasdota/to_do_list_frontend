import React, { Dispatch, SetStateAction, useState } from 'react'
import TodosType from "./types/todos";
import { CiSquarePlus } from "react-icons/ci";
import PopUp from './PopUp';
import { MdDeleteForever } from "react-icons/md";

type Props = {
  todos: TodosType[] | null;
  userId: number;
  fetchUserInfo: () => void;
  popUp: boolean;
  setPopUp: Dispatch<SetStateAction<boolean>>;
};

export default function Todos({ todos, userId, fetchUserInfo, popUp, setPopUp }: Props) {
  const handleCreate = () => {
    setPopUp(true);
  };

  const handleCheckboxChange = async (status: number, todoId: Number) => {
    try {
      const response = await fetch("/api/updateStatus", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status, todoId }),
      });
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Failed to update todo: ${errorMessage}`);
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
    <section
      className={`my-8 rounded shadow shadow-black/20 w-4/5 min-h-96 bg-slate-50/60 relative border-black/10 border
		${todos!.length > 0 ? null : "flex justify-center items-center"}
		`}
    >
      {todos!.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 text-left border-black/10 border-b border-r"></th>
                <th className="p-2 text-left border-black/10 border-b border-r md:text-sm xs:text-[0.7rem]">
                  Name
                </th>
                <th className="p-2 text-left border-black/10 border-b border-r md:text-sm xs:text-[0.7rem]">
                  Description
                </th>
                <th className="p-2 border-black/10 border-b"></th>
              </tr>
            </thead>
            <tbody>
              {todos!.map((todo, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-100 border-b border-black/10"
                >
                  <td className="px-0.5 py-2 border-r flex items-center justify-center">
                    <input
                      type="checkbox"
                      checked={todo.done.data[0] === 1}
                      onChange={() =>
                        handleCheckboxChange(todo.done.data[0], todo.id)
                      }
                      className="cursor-pointer"
                    />
                  </td>
                  <td
                    className={`p-2 md:py-1 border-r max-w-56 xxl:max-w-44 lg:max-w-32 md:max-w-20 md:text-sm xs:text-[0.7rem] text-pretty ${
                      todo.done.data[0] === 1 ? "line-through" : null
                    }`}
                  >
                    {todo.name}
                  </td>
                  <td
                    className={`p-2 md:py-1 border-r max-w-96 xxl:max-w-72 lg:max-w-64 md:max-w-52 sn:max-w-32 md:text-sm xs:text-[0.7rem] text-pretty ${
                      todo.done.data[0] === 1 ? "line-through" : null
                    }`}
                  >
                    {todo.description}
                  </td>
                  <td className="px-0.5 py-2 flex items-center justify-center">
                    <button
                      onClick={() => deleteTodo(todo.id)}
                      className="text-red-500 transition-transform active:translate-y-0.5"
                    >
                      <MdDeleteForever className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <button
          onClick={handleCreate}
          className="flex-col items-center justify-center"
        >
          <p className="font-semibold">Create To-do</p>
          <CiSquarePlus className="w-6 h-6 mx-auto" />
        </button>
      )}
      {popUp && (
        <PopUp
          setPopUp={setPopUp}
          userId={userId}
          fetchUserInfo={fetchUserInfo}
        />
      )}
    </section>
  );
}
