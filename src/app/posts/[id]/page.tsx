// import { GetStaticProps, InferGetStaticPropsType, GetStaticPaths, } from "next";
// import { fetchMovieData } from "@/api/fetch_movie_data";
// import { getPostIdList } from "@/lib/posts";
import { movieObjectMap, getMovieById } from "@/data/movies/movie_page_details";

// export const getStaticPaths: GetStaticPaths = async () =>  {
//   const paths = await getPostIdList();
//   return {
//     paths,
//     fallback: false,
//   };
// }

export function generateStaticParams() {
  return [
    { id: "11" }
  ];
}

// type Post = {
//   title: string;
//   description: string;
//   date: string;
// }

// export const getStaticProps: GetStaticProps = () => {
//   const postData: Post = {
//     title: "Post 1",
//     description: "Lorem ipsum dolor sit amet...",
//     date: "Oct 10, 2022"
//   }

//   return {
//     props: {
//       postData,
//     },
//   };
// }

export default function Post({ params }: { params: { id: string } }) {
  const { id } = params;
  console.log(getMovieById(id))
  const postData = getMovieById(id)
  return (
    <div className="bg-gray-800 h-screen p-16 text-gray-100">
      <div className="text-center font-bold text-3xl">
        {postData.param}
      </div>
      <div className="text-justify my-8 text-gray-200">
        fksnf
      </div>
      <div className="text-gray-400">
        osfwj9r09h
      </div>
    </div>
  );
}