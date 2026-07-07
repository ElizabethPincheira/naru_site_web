
interface TextHeroProps {
    text: string;
}

const TextHero = ({ text }: TextHeroProps) => {
  return (
    <p className="font-sans text-lg">
      {text}
    </p>
  )
}

export default TextHero