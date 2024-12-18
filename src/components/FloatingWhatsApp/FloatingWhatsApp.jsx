import React, { useState, useEffect, useRef } from "react";
import "./_floatingWhatsApp.scss";
import Whatsapp_icon from "/public/img/Floating_whatsapp/whatsapp.png";
import contactIcon from "/public/img/Floating_whatsapp/contact-icon.png";

function FloatingWhatsApp() {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);
    const iconRef = useRef(null);

    
    const toggleDropdown = () => {
        setIsDropdownVisible(prevState => !prevState);
    };


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
            
            <div 
                className="whatsapp-icon" 
                onClick={toggleDropdown} 
                ref={iconRef}
            >
                <img src={Whatsapp_icon} alt="WhatsApp" />
            </div>
            
            <div 
                className={`dropdown ${isDropdownVisible ? 'show' : ''}`} 
                ref={dropdownRef}
            >
                <a 
                    href="https://wa.me/543513297292" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="dropdown-item"
                >
                    <img src={Whatsapp_icon} alt="Contacto por WhatsApp" />
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
