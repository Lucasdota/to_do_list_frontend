"use client"
import React from 'react'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Spinner from "@/components/shared/Spinner";
import Todos from './Todos';
import TodosType from "./types/todos";
import UserType from './types/user';

export default function Interface() {
	const router = useRouter();
  const [user, setUser] = useState<UserType | null>(null);
  const [todos, setTodos] = useState<TodosType[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

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
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const Logout = async () => {
    try {
      const response = await fetch("/api/logout", {
        method: "POST",
        credentials: "include", // include cookies in the request
      });

      if (response.ok) {
        console.log("Logged out successfully");
        router.push("/");
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("An error occurred while logging out:", error);
    }
  };

	return (
    <>
      {loading && <Spinner width={8} height={8} />}
      {error && <p className="text-red-500 font-bold">{error}</p>}
      {user && (
        <>
          <h1 className="text-xl font-bold">Welcome to your dashboard</h1>
          <h2 className="italic mb-8">{user?.email}</h2>
          <Todos
            todos={todos}
						userId={user.id}
            fetchUserInfo={fetchUserInfo}
          />
        </>
      )}
      {!loading && (
        <button
          onClick={Logout}
          className="text-xs py-1 px-2 shadow bg-slate-50 shadow-black/20 rounded transition-transform duration-150 ease-in-out transform active:scale-95"
        >
          Logout
        </button>
      )}
    </>
  );
}
