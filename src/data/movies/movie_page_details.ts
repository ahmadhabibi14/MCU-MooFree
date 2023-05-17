import { MovieParams } from "./types.d";
 
export const movieObjectMap: { [id: string]: MovieParams } = {
	"001": { id: "001", param: "1726", poster: "01.jpg" },
	"002": { id: "002", param: "1724", poster: "02.jpg" },
	"003": { id: "003", param: "10138", poster: "03.jpg" },
	"004": { id: "004", param: "10195", poster: "04.jpg" },
	"005": { id: "005", param: "1771", poster: "05.jpg" },
	"006": { id: "006", param: "24428", poster: "06.jpg" },
	"007": { id: "007", param: "68721", poster: "07.jpg" },
	"008": { id: "008", param: "76338", poster: "08.jpg" },
	"009": { id: "009", param: "100402", poster: "09.jpg" },
	"010": { id: "010", param: "118340", poster: "10.jpg" },
	"011": { id: "011", param: "99861", poster: "11.jpg" },
	"012": { id: "012", param: "102899", poster: "12.jpg" },
	"013": { id: "013", param: "271110", poster: "13.jpg" },
	"014": { id: "014", param: "284052", poster: "14.jpg" },
	"015": { id: "015", param: "283995", poster: "15.jpg" },
	"016": { id: "016", param: "315635", poster: "16.jpg" },
	"017": { id: "017", param: "284053", poster: "17.jpg" },
	"018": { id: "018", param: "284054", poster: "18.jpg" },
	"019": { id: "019", param: "299536", poster: "19.jpg" },
	"020": { id: "020", param: "363088", poster: "20.jpg" },
	"021": { id: "021", param: "299537", poster: "21.jpg" },
	"022": { id: "022", param: "299534", poster: "22.jpg" },
	"023": { id: "023", param: "429617", poster: "23.jpg" },
	"024": { id: "024", param: "497698", poster: "24.jpg" },
	"025": { id: "025", param: "566525", poster: "25.jpg" },
	"026": { id: "026", param: "524434", poster: "26.jpg" },
	"027": { id: "027", param: "634649", poster: "27.jpg" },
	"028": { id: "028", param: "453395", poster: "28.jpg" },
	"029": { id: "029", param: "616037", poster: "29.jpg" },
	"030": { id: "030", param: "505642", poster: "30.jpg" },
	"031": { id: "031", param: "640146", poster: "31.jpg" },
	"032": { id: "032", param: "447365", poster: "32.jpg" },
};
 
export function getMovieById(id: string) {
	return movieObjectMap[id]?.param;
}

export function getMoviePoster(id: string) {
	return movieObjectMap[id]?.poster;
}