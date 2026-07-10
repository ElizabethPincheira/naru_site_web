
interface H2TitleProps {
    text: string
}

const H2Title = ({text}:H2TitleProps) => {
  return (
    <h2 className="text-2xl">{text}</h2>
  )
}

export default H2Title