import { Image} from '@imagekit/react';

const IK_URL_ENDPOINT = import.meta.env.VITE_IK_URL_ENDPOINT;

const IKImage = ({src,className,w,h,alt}) => {
    console.log(`image url:${IK_URL_ENDPOINT}${src}`);
    return (
        <>
            <img src={IK_URL_ENDPOINT+src}
                 alt={alt}
                 className={className}
                 width={w}
                 height={h}

            />

            {/*<Image
                urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
                path={src}
                className={className}
                loading="lazy"
                lqip={{ active: true, quality: 20 }}
                alt={alt}
                width={w}
                height={h}
                transformation={[
                    {
                        width: w,
                        height: h,
                    },
                ]}/>*/}
        </>
    )
}

export default IKImage;