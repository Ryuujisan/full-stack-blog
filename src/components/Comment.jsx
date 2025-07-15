import IKImage from "./IKImage.jsx";

export const Comment = () => {
    return (
        <div className={`p-4 bg-slate-50 rounded-lg mb-8`}>
            <div className={`flex items-center gap-4`}>
                <IKImage src="userImg.jpeg" alt="User" className={`rounded-full w-10 h-10 object-cover`} w={40} />
                <span className={`font-medium`}>John Doe</span>
                <span className={`text-sm text-gray-500`}>2 day ago</span>
            </div>
            <div className={`mt-4`}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequatur eius eveniet, ex
                    excepturi id illo in incidunt, libero mollitia officia recusandae repudiandae soluta temporibus
                    totam voluptatem voluptates? Assumenda dolore enim, eum eveniet modi molestias neque odio
                    praesentium quas sequi. Consequuntur deleniti dignissimos dolorem illum iusto numquam perferendis
                    similique unde.</p>
            </div>

        </div>
    )
}