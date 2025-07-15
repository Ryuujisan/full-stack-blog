import IKImage from "../components/IKImage.jsx";
import {Link} from "react-router-dom";
import PostMenuAction from "../components/PostMenuAction.jsx";
import {Search} from "../components/Search.jsx";
import {Comments} from "../components/Comments.jsx";

const SinglePostPage = () => {
    return(
        <div className="flex flex-col gap-8">
            {/*Details*/}
            <div className={`flex gap-8`}>
               <div className={`lg:w-3/5 flex flex-col gap-8`}>
                   <h1 className={`text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, repellat.</h1>

                   <div className={`flex items-center gap-2 text-gray-400 text-sm`}>
                       <span>Write by</span>
                       <Link className={`text-blue-800`}>John Doe</Link>

                       <span>on</span>
                       <Link className={`text-blue-800`}>Web design</Link>

                       <span>2 day ago</span>
                   </div>
                <p className={`text-gray-500 font-medium`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At doloremque harum porro quaerat. Culpa cumque dolorem eveniet, fuga harum impedit laborum obcaecati, quod sequi sunt suscipit voluptatibus! A, ex veritatis!</p>
               </div>
               <div className={`hidden lg:block w-2/5`}>
                   <IKImage src={`postImg.jpeg`} w={600} className={`rounded-3xl`}/>
               </div>
            </div>

            {/*content*/}
            <div className={`flex flex-col  md:flex-row gap-8`}>
                {/* text */}
                <div className={`lg:text-lg flex flex-col gap-6 text-justify`}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolorum id nisi voluptate? Accusamus aliquam aliquid amet atque autem commodi cumque cupiditate debitis deserunt, dignissimos dolorum ducimus enim error exercitationem explicabo fuga illum ipsam laborum laudantium maiores nam necessitatibus optio possimus quasi quibusdam quod repellendus repudiandae rerum sint ullam! Consequatur distinctio ea explicabo facere hic incidunt nulla perspiciatis ratione vero?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolorum id nisi voluptate? Accusamus aliquam aliquid amet atque autem commodi cumque cupiditate debitis deserunt, dignissimos dolorum ducimus enim error exercitationem explicabo fuga illum ipsam laborum laudantium maiores nam necessitatibus optio possimus quasi quibusdam quod repellendus repudiandae rerum sint ullam! Consequatur distinctio ea explicabo facere hic incidunt nulla perspiciatis ratione vero?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolorum id nisi voluptate? Accusamus aliquam aliquid amet atque autem commodi cumque cupiditate debitis deserunt, dignissimos dolorum ducimus enim error exercitationem explicabo fuga illum ipsam laborum laudantium maiores nam necessitatibus optio possimus quasi quibusdam quod repellendus repudiandae rerum sint ullam! Consequatur distinctio ea explicabo facere hic incidunt nulla perspiciatis ratione vero?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolorum id nisi voluptate? Accusamus aliquam aliquid amet atque autem commodi cumque cupiditate debitis deserunt, dignissimos dolorum ducimus enim error exercitationem explicabo fuga illum ipsam laborum laudantium maiores nam necessitatibus optio possimus quasi quibusdam quod repellendus repudiandae rerum sint ullam! Consequatur distinctio ea explicabo facere hic incidunt nulla perspiciatis ratione vero?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolorum id nisi voluptate? Accusamus aliquam aliquid amet atque autem commodi cumque cupiditate debitis deserunt, dignissimos dolorum ducimus enim error exercitationem explicabo fuga illum ipsam laborum laudantium maiores nam necessitatibus optio possimus quasi quibusdam quod repellendus repudiandae rerum sint ullam! Consequatur distinctio ea explicabo facere hic incidunt nulla perspiciatis ratione vero?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolorum id nisi voluptate? Accusamus aliquam aliquid amet atque autem commodi cumque cupiditate debitis deserunt, dignissimos dolorum ducimus enim error exercitationem explicabo fuga illum ipsam laborum laudantium maiores nam necessitatibus optio possimus quasi quibusdam quod repellendus repudiandae rerum sint ullam! Consequatur distinctio ea explicabo facere hic incidunt nulla perspiciatis ratione vero?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolorum id nisi voluptate? Accusamus aliquam aliquid amet atque autem commodi cumque cupiditate debitis deserunt, dignissimos dolorum ducimus enim error exercitationem explicabo fuga illum ipsam laborum laudantium maiores nam necessitatibus optio possimus quasi quibusdam quod repellendus repudiandae rerum sint ullam! Consequatur distinctio ea explicabo facere hic incidunt nulla perspiciatis ratione vero?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolorum id nisi voluptate? Accusamus aliquam aliquid amet atque autem commodi cumque cupiditate debitis deserunt, dignissimos dolorum ducimus enim error exercitationem explicabo fuga illum ipsam laborum laudantium maiores nam necessitatibus optio possimus quasi quibusdam quod repellendus repudiandae rerum sint ullam! Consequatur distinctio ea explicabo facere hic incidunt nulla perspiciatis ratione vero?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolorum id nisi voluptate? Accusamus aliquam aliquid amet atque autem commodi cumque cupiditate debitis deserunt, dignissimos dolorum ducimus enim error exercitationem explicabo fuga illum ipsam laborum laudantium maiores nam necessitatibus optio possimus quasi quibusdam quod repellendus repudiandae rerum sint ullam! Consequatur distinctio ea explicabo facere hic incidunt nulla perspiciatis ratione vero?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolorum id nisi voluptate? Accusamus aliquam aliquid amet atque autem commodi cumque cupiditate debitis deserunt, dignissimos dolorum ducimus enim error exercitationem explicabo fuga illum ipsam laborum laudantium maiores nam necessitatibus optio possimus quasi quibusdam quod repellendus repudiandae rerum sint ullam! Consequatur distinctio ea explicabo facere hic incidunt nulla perspiciatis ratione vero?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolorum id nisi voluptate? Accusamus aliquam aliquid amet atque autem commodi cumque cupiditate debitis deserunt, dignissimos dolorum ducimus enim error exercitationem explicabo fuga illum ipsam laborum laudantium maiores nam necessitatibus optio possimus quasi quibusdam quod repellendus repudiandae rerum sint ullam! Consequatur distinctio ea explicabo facere hic incidunt nulla perspiciatis ratione vero?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolorum id nisi voluptate? Accusamus aliquam aliquid amet atque autem commodi cumque cupiditate debitis deserunt, dignissimos dolorum ducimus enim error exercitationem explicabo fuga illum ipsam laborum laudantium maiores nam necessitatibus optio possimus quasi quibusdam quod repellendus repudiandae rerum sint ullam! Consequatur distinctio ea explicabo facere hic incidunt nulla perspiciatis ratione vero?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolorum id nisi voluptate? Accusamus aliquam aliquid amet atque autem commodi cumque cupiditate debitis deserunt, dignissimos dolorum ducimus enim error exercitationem explicabo fuga illum ipsam laborum laudantium maiores nam necessitatibus optio possimus quasi quibusdam quod repellendus repudiandae rerum sint ullam! Consequatur distinctio ea explicabo facere hic incidunt nulla perspiciatis ratione vero?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolorum id nisi voluptate? Accusamus aliquam aliquid amet atque autem commodi cumque cupiditate debitis deserunt, dignissimos dolorum ducimus enim error exercitationem explicabo fuga illum ipsam laborum laudantium maiores nam necessitatibus optio possimus quasi quibusdam quod repellendus repudiandae rerum sint ullam! Consequatur distinctio ea explicabo facere hic incidunt nulla perspiciatis ratione vero?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolorum id nisi voluptate? Accusamus aliquam aliquid amet atque autem commodi cumque cupiditate debitis deserunt, dignissimos dolorum ducimus enim error exercitationem explicabo fuga illum ipsam laborum laudantium maiores nam necessitatibus optio possimus quasi quibusdam quod repellendus repudiandae rerum sint ullam! Consequatur distinctio ea explicabo facere hic incidunt nulla perspiciatis ratione vero?</p>
                </div>
                {/* menu */}
                <div className={`px-4 h-max sticky top-8`}>
                    <h1 className = "mb-4 text-sm font-medium">Author</h1>
                    <div className={`flex flex-col gap-4`}>

                    <div className={`flex items-center gap-8`}>
                        <IKImage src={`userImg.jpeg`} className={`w-12 h-12 rounded-full object-cover`} w={48} h={48}/>
                        <Link className={`text-blue-800`}>John Doe</Link>
                    </div>
                        <p className={`text-sm text-gray-500`}>Lorem ipsum dolor sit amet, consectetur.</p>
                        <div className={`flex gap-2`}>
                            <Link>
                                <IKImage src={"facebook.svg"}/>
                            </Link>

                            <Link>
                                <IKImage src={"instagram.svg"}/>
                            </Link>
                        </div>
                    </div>
                    <PostMenuAction />
                    <h1 className = "mt-8 mb-4 text-sm font-medium">Categories</h1>
                    <div className={`flex flex-col gap-2 text-sm`}>
                        <Link className={`underline`}>All</Link>

                        <Link className={`underline`} to="/">
                            Web Design
                        </Link>

                        <Link className={`underline`} to="/">
                            Development
                        </Link>

                        <Link className={`underline`} to="/">
                            Database
                        </Link>

                        <Link className={`underline`} to="/">
                            Search Engine
                        </Link>

                        <Link className={`underline`} to="/">
                            Marketing
                        </Link>

                    </div>
                    <h1 className={`mt-8 mb-4 text-sm font-medium`}>Search</h1>
                    <Search/>
                </div>
            </div>
            <Comments/>
        </div>
    )
}

export default SinglePostPage;