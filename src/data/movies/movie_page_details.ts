import { MovieParams } from "./types.d";
 
export const movieObjectMap: { [id: string]: MovieParams } = {
	"001": { id: "001", param: "1726" },
	"002": { id: "002", param: "1724" },
	"003": { id: "003", param: "10138" },
	"004": { id: "004", param: "10195" },
	"005": { id: "005", param: "1771" },
	"006": { id: "006", param: "24428" },
	"007": { id: "007", param: "68721" },
	"008": { id: "008", param: "76338" },
	"009": { id: "009", param: "100402" },
	"010": { id: "010", param: "118340" },
	"011": { id: "011", param: "99861" },
	"012": { id: "012", param: "102899" },
	"013": { id: "013", param: "271110" },
	"014": { id: "014", param: "284052" },
	"015": { id: "015", param: "283995" },
	"016": { id: "016", param: "315635" },
	"017": { id: "017", param: "284053" },
	"018": { id: "018", param: "284054" },
	"019": { id: "019", param: "299536" },
	"020": { id: "020", param: "363088" },
	"021": { id: "021", param: "299537" },
	"022": { id: "022", param: "299534" },
	"023": { id: "023", param: "429617" },
	"024": { id: "024", param: "497698" },
	"025": { id: "025", param: "566525" },
	"026": { id: "026", param: "524434" },
	"027": { id: "027", param: "634649" },
	"028": { id: "028", param: "453395" },
	"029": { id: "029", param: "616037" },
	"030": { id: "030", param: "505642" },
	"031": { id: "031", param: "640146" },
	"032": { id: "032", param: "447365" },
};
 
export function getMovieById(id: string) {
	return movieObjectMap[id]?.param;
}
 