
interface H1TitleMobileProps {
    text: string;
}

const H1TitleMobile = ({ text }: H1TitleMobileProps) => {
  return (
    <h1 className="font-display-lg text-display-lg text-primary leading-none md:text-[60px]">{text}</h1>
  )
}

export default H1TitleMobile

