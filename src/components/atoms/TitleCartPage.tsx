
interface titleCartProps {
    text : string
}


const TitleCartPage = ({text}:titleCartProps) => {
  return (
    <h2 className="font-sans">{text}</h2>
  )
}

export default TitleCartPage