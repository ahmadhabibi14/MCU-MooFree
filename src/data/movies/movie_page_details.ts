import { MovieParams } from "./types.d";
 
export const movieObjectMap: { [id: string]: MovieParams } = {
	"11": { id: "1", param: "0913u0847" }
};
 
export function getMovieById(id: string) {
	return movieObjectMap[id];
}
 