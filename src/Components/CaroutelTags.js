export default function CarouselTags({img}) {
    const text = [
        "Symfony", 
        "NodeJS - ReactJs", 
        "Symfony", 
        "NodeJS - ReactJs", 
    ]

    return(
        <div className="CarouselInfoContainer">
            <p>{text[img]}</p>
        </div>
    )
    
}