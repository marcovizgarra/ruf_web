import { useState, useEffect } from "react";
import whatsapp_icon from "/public/img/floating_whatsapp/whatsapp-brands-solid.svg";
import envelope_icon from "/public/img/floating_whatsapp/envelope-solid.svg";
import plus_icon from "/public/img/floating_whatsapp/plus-solid.svg"
import minus_icon from "/public/img/floating_whatsapp/minus-solid.svg";
import { use } from "react";

function FloatingWhatsApp() {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownVisible(prevState => !prevState);
    }

    useEffect(() => {
        if (isDropdownVisible === true) {
            setTimeout(() => {
                setIsDropdownVisible(false);
            }, 6000)
        };
    }, [isDropdownVisible]);

    return (
        <div 
            className={`${isDropdownVisible ? 'toggle-floating' : 'floating-whatsapp '}` } 
            onClick={toggleDropdown}
        >
            <div className="plus_icon" title="Contactanos" >
                <img src={isDropdownVisible ? minus_icon : plus_icon } alt="WhatsApp" />
            </div>

            <div className='dropdown'>
                <a href="https://wa.me/543513297292" target="_blank" rel="noopener noreferrer" className="dropdown-item whatsapp" >
                    <img src={whatsapp_icon} alt="Contacto por WhatsApp" />
                </a>
                <a href="/formulario-contacto" className="dropdown-item mail" >
                    <img src={envelope_icon} alt="Formulario de Contacto" />
                </a>
            </div>
        </div>
    );
}

export default FloatingWhatsApp;