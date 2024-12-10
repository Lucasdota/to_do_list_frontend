"use client"
import React from 'react'
import { useEffect, useState } from "react";
import Spinner from "@/components/shared/Spinner";
import Todos from './Todos';
import TodosType from "./types/todos";
import { PiGearSix } from "react-icons/pi";

export default function Interface() {
	const [userId, setUserId] = useState<Number | null>(null);
  const [email, setEmail] = useState<string>("");
  const [todos, setTodos] = useState<TodosType[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
	const [popUp, setPopUp] = useState<boolean>(false);
	const [menu, setMenu] = useState<boolean>(false);
	const [redirectPopUp, setRedirectPopUp] = useState<boolean>(false);

  const fetchUserInfo = async () => {
    try {
      const response = await fetch("http://localhost:8080/user", {
        method: "GET",
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error("Failed to fetch user information");
      }
      const userDetails = await response.json();
			console.log("userDetails.id: " + userDetails.id);
			console.log("userDetails.email: " + userDetails.email);
			console.log("userDetails.todos: " + userDetails.todos);
			
      setEmail(userDetails.email);
      setTodos(userDetails.todos);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    } finally {
      setLoading(false);
			setPopUp(false);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

	return (
    <>
      {loading && <Spinner width={8} height={8} />}
      {error && <p className="text-red-500 font-bold">{error}</p>}
      {email && (
        <>
          <h1 className="text-xl font-bold md:text-base xs:text-sm">
            Welcome to your dashboard
          </h1>
          <div className="flex justify-between items-center gap-4">
            <h2 className="italic md:text-sm xs:text-[0.75rem]">
              {email}
            </h2>
            <button
              onClick={() => setMenu(true)}
              className={`shadow bg-white rounded p-0.5
								${menu || popUp || redirectPopUp ? "pointer-events-none" : null}`}
            >
              <PiGearSix className="text-gray-800 transform transition-transform active:rotate-45" />
            </button>
          </div>
          <Todos
            todos={todos}
						userId={userId}
            fetchUserInfo={fetchUserInfo}
            popUp={popUp}
            setPopUp={setPopUp}
            menu={menu}
            setMenu={setMenu}
            redirectPopUp={redirectPopUp}
            setRedirectPopUp={setRedirectPopUp}
          />
        </>
      )}
    </>
  );
}
