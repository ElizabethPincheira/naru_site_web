
interface ParrafoProps {
    text: string;
}

const Parrafo2 = ({ text }: ParrafoProps) => {
  return (
    <p className="font-sans text-sm">
      {text}
    </p>
  )
}

export default Parrafo2