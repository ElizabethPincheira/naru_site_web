
interface ButtonCardProps {
    text: string;
    onClick: () => void;
}

const ButtonCard = ({ text, onClick }: ButtonCardProps) => {
    return (
        // Botón simple con utilidades de Tailwind
        <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2  rounded w-full" onClick={onClick}>
            {text}
        </button>
    );
};

export default ButtonCard