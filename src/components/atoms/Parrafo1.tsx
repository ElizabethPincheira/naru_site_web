
interface ParrafoProps {
    text: string;
}

const Parrafo1 = ({ text }: ParrafoProps) => {
  return (
    <p className="font-sans text-sm">
      {text}
    </p>
  )
}

export default Parrafo1