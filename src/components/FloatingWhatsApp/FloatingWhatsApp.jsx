import React, { useState, useEffect, useRef } from "react";
import "./_floatingWhatsApp.scss";
import whatsapp_icon from "/public/img/Floating_whatsapp/whatsapp.png";
import contact_dropd_icon from "/public/img/Floating_whatsapp/comments-solid.svg";
import plus_icon from "/public/img/Floating_whatsapp/plus-solid.svg"
import contactIcon from "/public/img/Floating_whatsapp/contact-icon.png";

function FloatingWhatsApp() {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);
    const iconRef = useRef(null);

    // Función para cambiar el estado de visibilidad de los íconos
    const toggleDropdown = () => {
        setIsDropdownVisible(prevState => !prevState);
    };

    // Cerrar el dropdown si se hace clic fuera de él
    const handleClickOutside = (event) => {
        if (
            dropdownRef.current && !dropdownRef.current.contains(event.target) && 
            iconRef.current && !iconRef.current.contains(event.target)
        ) {
            setIsDropdownVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="floating-whatsapp">
            {/* Icono de WhatsApp que al hacer clic activa el dropdown */}
            <div className="plus_icon" title="Contactanos" onClick={toggleDropdown} ref={iconRef} >
                <img src={contact_dropd_icon} alt="WhatsApp" />
            </div>

            {/* Los íconos desplegados se muestran solo si isDropdownVisible es true */}
            <div className={`dropdown ${isDropdownVisible ? 'show' : ''}`} ref={dropdownRef}>
                <a 
                    href="https://wa.me/543513297292" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="dropdown-item"
                >
                    <img src={whatsapp_icon} alt="Contacto por WhatsApp" />
                </a>
                <a 
                    href="/formulario-contacto"
                    className="dropdown-item"
                >
                    <img src={contactIcon} alt="Formulario de Contacto" />
                </a>
            </div>
        </div>
    );
}

export default FloatingWhatsApp;
