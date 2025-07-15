import IKImage from "./IKImage.jsx";
import {Link} from "react-router-dom";

const PostListItem = () => {
    return (
        <div className={`flex flex-col items-center xl:flex-row gap-8`}>
                {/*Image*/}
            <div className={`md:hidden xl:block`}>
                <IKImage src={`postImg.jpeg`} alt={`Post Image`}   className={`rounded-3xl object-cover`} w={895}/>
            </div>
            {/*Details*/}
            <div className={`flex flex-col gap-4 xl:2/3`}>
                <Link to={`/test`} className={`text-4xl font-semibold`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor.</Link>
                <div className={`flex items-center gap-2 text-gray-400 text-sm`}>
                    <span>Write by</span>
                    <Link className={`text-blue-800`}>John Doe</Link>
                    <span>On</span>
                    <Link className={`text-blue-800`}>Web Design</Link>
                    <span>2 day ago</span>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto, asperiores at cum delectus dolorum ducimus earum eos esse incidunt libero magni minima neque nesciunt nobis non nulla omnis perferendis provident qui quis reiciendis repellat repellendus sed sit tempore totam vel veniam voluptate voluptates. Consequatur delectus enim ipsum laborum recusandae!</p>
                <Link to={`/test`} className={`underline text-sm text-blue-800`}>Read More</Link>
            </div>
        </div>
    )
};

export default PostListItem;