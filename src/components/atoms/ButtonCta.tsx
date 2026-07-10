interface ButtonCtaProps {
    text: string;
    onClick: () => void;
}

const ButtonCta = ({ text, onClick }: ButtonCtaProps) => {
  return (
    <button
     className="bg-pink-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"  onClick={onClick} >
      {text}
    </button>
  )
}

export default ButtonCta