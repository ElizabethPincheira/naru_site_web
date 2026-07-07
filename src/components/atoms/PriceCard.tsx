
interface textPrice {
    text: string
}

const PriceCard = ({text}:textPrice) => {
  return (
    <p>{text}</p>
  )
}

export default PriceCard