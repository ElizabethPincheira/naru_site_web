interface ButtonNavBarProps {
    text: string;
    onClick: () => void;
}

const ButtonNavBar = ({ text, onClick }: ButtonNavBarProps) => {
    return (
        // Botón simple con utilidades de Tailwind
        <button className="text-gray font-medium py-2 px-4 rounded" onClick={onClick}>
            {text}
        </button>
    );
};

export default ButtonNavBar