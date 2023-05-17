import { MovieParams } from "./types.d";
 
export const movieObjectMap: { [id: string]: MovieParams } = {
	"001": { id: "001", param: "1726" },
	"002": { id: "002", param: "1724" },
	"003": { id: "003", param: "1726" },
	"004": { id: "004", param: "1726" },
	"005": { id: "005", param: "1726" },
	"006": { id: "006", param: "1726" },
};
 
export function getMovieById(id: string) {
	return movieObjectMap[id]?.param;
}
 