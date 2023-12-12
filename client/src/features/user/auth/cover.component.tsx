import cover from "../../../assets/cover.png"

export const CoverImage = () => {
    return (
        <picture className="hidden md:w-full md:h-full md:block">
            <img src={cover} className="object-cover w-full h-full "/>
        </picture>
    )
}