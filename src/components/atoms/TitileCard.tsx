

//esta card cambia, me imagino que aqui se aplica el store?

interface titileCardProps {
    text : string
}

const TitileCard = ({text}:titileCardProps) => {
  return (
    <p className="font-sans">{text}</p>
  )
}

export default TitileCard