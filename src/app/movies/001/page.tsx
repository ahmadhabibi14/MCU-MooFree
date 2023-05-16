"use client"
import { useEffect, useState } from "react";
import { fetchMovieData } from "@/api/fetch_movie_data"

export default function movie_001() {
	const [data, setData] = useState<any>(null);
	useEffect(() => {
		const responseData = fetchMovieData("505642");
		setData(responseData);
		console.log(data);
	}, []);
	return (
		<div>
			Iron Man
		</div>
	);
}