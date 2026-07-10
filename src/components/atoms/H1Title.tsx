
interface H1TitleProps {
    text: string;
}

const H1Title = ({ text }: H1TitleProps) => {
  return (
    <h1 className="font-display-lg text-display-lg text-primary leading-none md:text-[60px]">{text}</h1>
  )
}

export default H1Title

