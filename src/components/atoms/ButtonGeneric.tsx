interface ButonGenericProps{
    text : string;
    onClick: () => void;

}

const ButtonGeneric = ({text,onClick}:ButonGenericProps) => {
  return (
    <button
     className="bg-pink-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"  onClick={onClick} >
      {text}
    </button>
  )
}

export default ButtonGeneric