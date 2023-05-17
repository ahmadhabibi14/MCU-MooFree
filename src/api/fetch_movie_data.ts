export async function fetchMovieData(movie_id: string) {
	const api_key: string = "ddd659323326f11b9570281365551ef0";
	const access_token: string = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGQ2NTkzMjMzMjZmMTFiOTU3MDI4MTM2NTU1MWVmMCIsInN1YiI6IjYzYzUxZDQwOTg4YWZkMDA4YTMwZDliYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s-TH0FBGNWIUA_oBNH3vJhosTnOkkc3Xg5WFnywOfzg";
	const url: string = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${api_key}`;
	const options = {
        method: "GET",
        headers: {
           	accept: "application/json",
            Authorization: `Bearer ${access_token}`,
		}
	}
	
	const response = await fetch(url, options);
	if (!response.ok) {
		throw new Error("Request failed");
	}
	const data = await response.json();
	return data;
}