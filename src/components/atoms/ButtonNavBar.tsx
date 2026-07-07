interface ButtonNavBarProps {
    text: string;
    onClick: () => void;
}


const ButtonNavBar = ({ text, onClick }: ButtonNavBarProps) => {
    return (
        // Botón simple con utilidades de Tailwind
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onClick}>
            {text}
        </button>
    );
};

export default ButtonNavBar