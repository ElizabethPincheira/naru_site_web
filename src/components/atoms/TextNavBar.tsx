interface TextNavBarProps {
    text: string;
}



const TextNavBar = ({ text }: TextNavBarProps) => {
  return (
      <p className="font-sans text-lg">{text}</p>

  )
}

export default TextNavBar