import Link from "next/link";

interface TypeBiarGayaTSawkwkwk {
	overview: string;
	language: string;
	runtime: number;
	revenue: number;
}

export default function MovieDetailsData(prop: TypeBiarGayaTSawkwkwk) {
	return (
		<article className="w-11/12 mx-auto flex flex-row gap-x-14 py-10">
			<div className="grow flex flex-col space-y-6">
				<div className="flex flex-row space-x-6">
					<Link className="flex flex-row space-x-2 rounded-full shadow-lg text-lg py-2 px-6 bg-red-600 hover:bg-red-500 text-zinc-100"
						href="https://habibi2004.pages.dev/" target="_blank"
					>
						<svg className="fill-current w-[20px]" viewBox="0 0 512 512">
							<path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/>
						</svg>
						<span>Download</span>
					</Link>

					<Link className="flex flex-row space-x-2 rounded-full shadow-lg text-lg py-2 px-6 bg-sky-600 hover:bg-sky-500 text-zinc-100"
						href="https://habibi2004.pages.dev/" target="_blank"
					>
						<svg className="fill-current w-[14px]" viewBox="0 0 384 512">
							<path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
						</svg>
						<span>Watch</span>
					</Link>
				</div>
				{/* Details */}
				<div className="flex flex-col space-y-4">
					<p>{prop.overview}</p>
					<span className="w-full h-[1px] bg-zinc-400"></span>
					<div className="flex flex-col space-y-3 w-full">
    					<div className="flex flex-row gap-6">
      					<p className="w-52 h-auto font-light text-sm dark:text-zinc-300">Revenue</p>
      					<p className="grow text-left">USD ${prop.revenue}</p>
    					</div>

    					<div className="flex flex-row gap-6">
      					<p className="w-52 h-auto font-light text-sm dark:text-zinc-300">Runtime</p>
      					<p className="grow text-left">{prop.runtime} Minutes</p>
    					</div>

    					<div className="flex flex-row gap-6">
      					<p className="w-52 h-auto font-light text-sm dark:text-zinc-300">Language</p>
      					<p className="grow text-left">{prop.language} - English</p>
    					</div>
    				</div>
				</div>
			</div>
			<div className="basis-[65%] h-[300px] bg-zinc-400 dark:bg-zinc-800 rounded-xl">
			</div>
		</article>
	)
}