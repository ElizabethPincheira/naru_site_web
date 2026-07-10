import { Dropdown } from "@/components/base/dropdown/dropdown";
import { useNavigate } from "react-router";

export const DropdownIconSimple = () => {

    const navigate = useNavigate();

    const irACart = () => {
        console.log("Estoy yendo al carrito");
        navigate("/cart");
    };

    return (
        <Dropdown.Root>
            <Dropdown.DotsButton className="text-primary p-2" />

            <Dropdown.Popover className="w-54">
                <Dropdown.Menu>
                    <Dropdown.Section>
                        <Dropdown.Item onClick={irACart}>
                            Carrito
                        </Dropdown.Item>

                        <Dropdown.Item>
                            Nosotros
                        </Dropdown.Item>
                    </Dropdown.Section>
                </Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown.Root>
    );
};