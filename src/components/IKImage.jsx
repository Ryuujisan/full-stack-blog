import { Image } from '@imagekit/react';

const IK_URL_ENDPOINT = import.meta.env.VITE_IK_URL_ENDPOINT;

const IKImage = ({ src, className,w,h,alt}) => {
    console.log(`image url:${IK_URL_ENDPOINT}${src}`);
    return (
        <>
        <Image
            urlEndpoint={IK_URL_ENDPOINT}
               path={src}
               className={className}
               loading={"lazy"}
               width={w}
               height={h}
               alt={alt} />
        </>
    )
}

export default IKImage;