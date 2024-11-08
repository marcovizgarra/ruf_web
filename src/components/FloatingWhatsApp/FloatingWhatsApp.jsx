import Whatsapp_icon from '/public/img/Floating_whatsapp/whatsapp.png';

function FloatingWhatsApp() {
    return (
        <div className="floating-whatsapp">
            <a href="https://wa.me/543513297292" target="_blank" rel="noopener noreferrer">
                <img src={Whatsapp_icon} alt="WhatsApp" />
            </a>
        </div>
    );
}

export default FloatingWhatsApp;