import NextImage from "next/image"

export default function Image(props: React.ComponentProps<typeof NextImage>) {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""
    // Prepend basePath to the src if it's a string and doesn't already start with basePath
    let src = props.src
    if (typeof src === "string" && !src.startsWith(basePath)) {
        src = `${basePath}${src}`
    }
    return <NextImage {...props} src={src} />
}
