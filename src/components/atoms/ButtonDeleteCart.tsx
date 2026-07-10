interface ButtonDeleteProps {
    text: string;
    onClick: () => void;
}

const ButtonDeleteCart = ({text, onClick}:ButtonDeleteProps) => {
  return (
    <button className="text-red-600 font-bold py-2 px-4 rounded underline underline-offset-4s" onClick={onClick}>
            {text}
        </button>
  )
}

export default ButtonDeleteCart