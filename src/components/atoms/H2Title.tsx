
interface H2TitleProps {
    text: string
}

const H2Title = ({text}:H2TitleProps) => {
  return (
    <h2 className="font-headline-lg text-headline-lg text-primary">{text}</h2>
  )
}

export default H2Title