
interface ParrafoProps {
    text: string;
}

const Parrafo1 = ({ text }: ParrafoProps) => {
  return (
    <p className="font-sans text-xl wrap-break-words whitespace-normal">
      {text}
    </p>
  )
}

export default Parrafo1

