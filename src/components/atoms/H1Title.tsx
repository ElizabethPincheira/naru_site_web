
interface H1TitleProps {
    text: string;
}

const H1Title = ({ text }: H1TitleProps) => {
  return (
    <h1 className="font-display-lg text-display-lg text-primary leading-none md:text-[60px] text-4xl md:text-6xl">{text}</h1>
  )
}

export default H1Title

