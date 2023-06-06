import { MovieParams } from "./types.d";
 
export const movieObjectMap: { [id: string]: MovieParams } = {
	"001": { id: "001", title: "Iron Man", param: "1726", poster: "01.jpg", trailer: "https://www.youtube.com/embed/8ugaeA-nMTc" },
	"002": { id: "002", title: "The Incredible Hulk", param: "1724", poster: "02.jpg", trailer: "https://www.youtube.com/embed/xbqNb2PFKKA" },
	"003": { id: "003", title: "Iron Man 2", param: "10138", poster: "03.jpg", trailer: "https://www.youtube.com/embed/wKtcmiifycU" },
	"004": { id: "004", title: "Thor", param: "10195", poster: "04.jpg", trailer: "https://www.youtube.com/embed/JOddp-nlNvQ" },
	"005": { id: "005", title: "Captain America: The First Avenger", param: "1771", poster: "05.jpg", trailer: "https://www.youtube.com/embed/JerVrbLldXw" },
	"006": { id: "006", title: "The Avengers", param: "24428", poster: "06.jpg", trailer: "https://www.youtube.com/embed/eOrNdBpGMv8" },
	"007": { id: "007", title: "Iron Man 3", param: "68721", poster: "07.jpg", trailer: "https://www.youtube.com/embed/YLorLVa95Xo" },
	"008": { id: "008", title: "Thor: The Dark World", param: "76338", poster: "08.jpg", trailer: "https://www.youtube.com/embed/npvJ9FTgZbM" },
	"009": { id: "009", title: "Captain America: The Winter Soldier", param: "100402", poster: "09.jpg", trailer: "https://www.youtube.com/embed/7SlILk2WMTI" },
	"010": { id: "010", title: "Guardians of The Galaxy", param: "118340", poster: "10.jpg", trailer: "https://www.youtube.com/embed/d96cjJhvlMA" },
	"011": { id: "011", title: "Avengers: Age of Ultron", param: "99861", poster: "11.jpg", trailer: "https://www.youtube.com/embed/tmeOjFno6Do" },
	"012": { id: "012", title: "Ant-Man", param: "102899", poster: "12.jpg", trailer: "https://www.youtube.com/embed/pWdKf3MneyI" },
	"013": { id: "013", title: "Captain America: Civil War", param: "271110", poster: "13.jpg", trailer: "https://www.youtube.com/embed/dKrVegVI0Us" },
	"014": { id: "014", title: "Doctor Strange", param: "284052", poster: "14.jpg", trailer: "https://www.youtube.com/embed/HSzx-zryEgM" },
	"015": { id: "015", title: "Guardians of The Galaxy Vol.2", param: "283995", poster: "15.jpg", trailer: "https://www.youtube.com/embed/dW1BIid8Osg" },
	"016": { id: "016", title: "Spider-Man: Homecoming", param: "315635", poster: "16.jpg", trailer: "https://www.youtube.com/embed/39udgGPyYMg" },
	"017": { id: "017", title: "Thor: Ragnarok", param: "284053", poster: "17.jpg", trailer: "https://www.youtube.com/embed/ue80QwXMRHg" },
	"018": { id: "018", title: "Black Panther", param: "284054", poster: "18.jpg", trailer: "https://www.youtube.com/embed/xjDjIWPwcPU" },
	"019": { id: "019", title: "Avengers: Infinity War", param: "299536", poster: "19.jpg", trailer: "https://www.youtube.com/embed/6ZfuNTqbHE8" },
	"020": { id: "020", title: "Ant-Man and The Wasp", param: "363088", poster: "20.jpg", trailer: "https://www.youtube.com/embed/UUkn-enk2RU" },
	"021": { id: "021", title: "Captain Marvel", param: "299537", poster: "21.jpg", trailer: "https://www.youtube.com/embed/0LHxvxdRnYc" },
	"022": { id: "022", title: "Avengers: End-Game", param: "299534", poster: "22.jpg", trailer: "https://www.youtube.com/embed/TcMBFSGVi1c" },
	"023": { id: "023", title: "Spider-Man: Far From Home", param: "429617", poster: "23.jpg", trailer: "https://www.youtube.com/embed/LFoz8ZJWmPs" },
	"024": { id: "024", title: "Black Widow", param: "497698", poster: "24.jpg", trailer: "https://www.youtube.com/embed/ybji16u608U" },
	"025": { id: "025", title: "Shang-Chi and The Legends of The Ten Rings", param: "566525", poster: "25.jpg", trailer: "https://www.youtube.com/embed/giWIr7U1deA" },
	"026": { id: "026", title: "Eternals", param: "524434", poster: "26.jpg", trailer: "https://www.youtube.com/embed/x_me3xsvDgk" },
	"027": { id: "027", title: "Spider-Man: No Way Home", param: "634649", poster: "27.jpg", trailer: "https://www.youtube.com/embed/ZYzbalQ6Lg8" },
	"028": { id: "028", title: "Doctor Strange in The Multiverse of Madness", param: "453395", poster: "28.jpg", trailer: "https://www.youtube.com/embed/aWzlQ2N6qqg" },
	"029": { id: "029", title: "Thor: Love and Thunder", param: "616037", poster: "29.jpg", trailer: "https://www.youtube.com/embed/Go8nTmfrQd8" },
	"030": { id: "030", title: "Black Panther: Wakanda Forever", param: "505642", poster: "30.jpg", trailer: "https://www.youtube.com/embed/_Z3QKkl1WyM" },
	"031": { id: "031", title: "Ant-Man and The Wasp: Quantumania", param: "640146", poster: "31.jpg", trailer: "https://www.youtube.com/embed/ZlNFpri-Y40" },
	"032": { id: "032", title: "Guardians of the Galaxy Vol.3", param: "447365", poster: "32.jpg", trailer: "https://www.youtube.com/embed/u3V5KDHRQvk" },
};
 
export function getMovieById(id: string) {
	return movieObjectMap[id]?.param;
}

export function getMoviePoster(id: string) {
	return movieObjectMap[id]?.poster;
}