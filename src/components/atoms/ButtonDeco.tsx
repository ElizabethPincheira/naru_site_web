interface ButtonDecoProps {
    text: string;
    onClick: () => void;
}

const ButtonDeco = ({ text, onClick }: ButtonDecoProps) => {
  return (
    <button
     className="border-2 border-green-700 hover:bg-green-300/35 text-green-900 font-medium py-2 px-4 rounded w-full"  onClick={onClick} >
      {text}
    </button>
  )
}

export default ButtonDeco