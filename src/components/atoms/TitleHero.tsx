

interface TitleHeroProps {
    text: string;
}

const TitleHero = ({ text }: TitleHeroProps) => {
  return (
    <h1 className="font-sans text-4xl font-bold">{text}</h1>
  )
}

export default TitleHero