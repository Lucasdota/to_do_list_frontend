import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/components/AuthContext";

export default function page() {
	const { isAuthenticated } = useAuth();
  	const router = useRouter();

	useEffect(() => {
		if (!isAuthenticated) {
		router.push("/"); // Redirect to the login page if not authenticated
		}
    }, [isAuthenticated, router]);

	return (
		<div>page</div>
	)
}
