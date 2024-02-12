import Image from "next/image"

type CardImageProps = {
    image: string;
    title: string
}

const CardImage = ({ image, title }: CardImageProps ) => {
  return (
    <div className="flex flex-1">
        <Image
            src={image}
            alt={title}
            width={550}
            height={250}
        />
    </div>
  )
}

export default CardImage
