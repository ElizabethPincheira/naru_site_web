
interface ParrafoProps {
    text: string;
}

const Parrafo2 = ({ text }: ParrafoProps) => {
  return (
    <p className="font-sans text-xl">
      {text}
    </p>
  )
}

export default Parrafo2