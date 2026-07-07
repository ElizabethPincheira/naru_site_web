

//esta card cambia, me imagino que aqui se aplica el store?

interface titleCardProps {
    text : string
}

const TitleCard = ({text}:titleCardProps) => {
  return (
    <p className="font-sans">{text}</p>
  )
}

export default TitleCard