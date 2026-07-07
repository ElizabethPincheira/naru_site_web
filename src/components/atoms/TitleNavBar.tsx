interface TitleNavBarProps {
    text: string;
}



const TitleNavBar = ({ text }: TitleNavBarProps) => {
  return (
    <p className="font-sans text-2xl">{text}</p>
  )
}

export default TitleNavBar