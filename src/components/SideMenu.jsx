import {Search} from "./Search.jsx";
import {Link} from "react-router-dom";

export const SideMenu = () => {
    return (
        <div className={`px-4 h-max sticky top-8`}>
            <h1 className={`mb-4 text-sm font-medium`}>Search</h1>
            <Search/>
            <h1 className={`mt-4 mb-4 text-sm font-medium`}>Filters</h1>
            <div className={`flex flex-col gap-2 text-sm`}>

                <label htmlFor="" className={`flex items-center gap-2 cursor-pointer`}>
                    <input type="radio"
                           name="sort"
                           value="newest"
                           className={`appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800`} />
                    Newest
                </label>

                <label htmlFor="" className={`flex items-center gap-2 cursor-pointer`}>
                    <input type="radio"
                           name="sort"
                           value="popular"
                           className={`appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800`} />
                    Most Popular
                </label>

                <label htmlFor="" className={`flex items-center gap-2 cursor-pointer`}>
                    <input type="radio"
                           name="sort"
                           value="trending"
                           className={`appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800`} />
                    Trending
                </label>

                <label htmlFor="" className={`flex items-center gap-2 cursor-pointer`}>
                    <input type="radio"
                           name="sort"
                           value="oldest"
                           className={`appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800`} />
                    Oldest
                </label>
            </div>
            <h1 className={`mt-4 mb-4 text-sm font-medium`}>Categories</h1>
            <div className={`flex flex-col gap-2 text-sm`}>
                <Link className={undefined} to={`/posts`}>All</Link>
                <Link className={undefined} to={`/posts?cat=web-design`}>Web Design</Link>
                <Link className={undefined} to={`/posts?cat=developmnet`}>Development</Link>
                <Link className={undefined} to={`/posts?cat=database`}>Databases</Link>
                <Link className={undefined} to={`/posts?cat=seo`}>Search Engine</Link>
                <Link className={undefined} to={`/posts?cat=marketing`}>Marketing</Link>
            </div>
        </div>
    )
}