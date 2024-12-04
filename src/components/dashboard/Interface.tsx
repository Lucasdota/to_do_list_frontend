"use client"
import React from 'react'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Spinner from "@/components/shared/Spinner";
import Todos from './Todos';
import TodosType from "./types/todos";
import UserType from './types/user';
import { PiGearSix } from "react-icons/pi";

export default function Interface() {
  const [user, setUser] = useState<UserType | null>(null);
  const [todos, setTodos] = useState<TodosType[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
	const [popUp, setPopUp] = useState<boolean>(false);
	const [menu, setMenu] = useState<boolean>(false);
	const [redirectPopUp, setRedirectPopUp] = useState<boolean>(false);

  const fetchUserInfo = async () => {
    try {
      const response = await fetch("/api/getUser", {
        method: "GET",
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error("Failed to fetch user information");
      }
      const data = await response.json();
      const { user, todos } = data;
      setUser(user);
      setTodos(todos);
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
      {user && (
        <>
          <h1 className="text-xl font-bold md:text-base xs:text-sm">
            Welcome to your dashboard
          </h1>
          <div className="flex justify-between items-center gap-4">
            <h2 className="italic md:text-sm xs:text-[0.75rem]">
              {user?.email}
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
            userId={user.id}
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
