import { getFileName } from '/src/js/functions.js';
import send_icon from '/img/contact_card/paper-plane-solid.svg'
import whatsapp_icon from '/img/contact_card/whatsapp-brands-solid.svg'
import location_icon from '/img/contact_card/location-dot-solid.svg'
import mail_icon from '/img/contact_card/envelope-solid.svg'

const Contact_card = () => {
    return(
        <>
            <div id="contact_card" className="d-flex justify-content-center mx-auto">
                <div className="info_container">
                    <h4>INFORMACIÓN DE CONTACTO</h4>
                    <ul>
                        <li>
                            <img src={location_icon} alt={getFileName(location_icon)} />
                            <p>Av. Martín Tissera 957, X5107, Mendiolaza, Córdoba, Argentina</p>
                        </li>
                        <li>
                            <img src={whatsapp_icon} alt={getFileName(whatsapp_icon)} />
                            <p>+54 9 3516 095013 / +54 9 3513 297292</p>
                        </li>
                        
                        <li>
                            <img src={mail_icon} alt={mail_icon} />
                            <p>ruf.desarrollos@gmail.com</p>
                        </li>
                    </ul>
                </div>

                <div className="form_container">
                    <h4>ENVÍENOS UN MENSAJE</h4>
                    <br />
                    <form className="row g-3">
                        <div className="col-md-6">
                            <input type="text" className="form-control" id="f_name" placeholder="Nombre"/>
                        </div>
                        <div className="col-md-6">
                            <input type="text" className="form-control" id="l_name" placeholder="Apellido"/>
                        </div>
                        <div className="col-md-6">
                            <input type="email" className="form-control" id="email" placeholder="Email"/>
                        </div>
                        <div className="col-md-6">
                            <input type="number" className="form-control" id="phone" placeholder="Teléfono"/>
                        </div>
                        
                        <div className="col">
                            <textarea className="form-control" id="question" rows="8" placeholder="SU CONSULTA"></textarea>
                        </div>

                        <div className="col-12">
                            <button type="submit" className="form_btn">
                                <img src={send_icon} alt={getFileName(send_icon)} />
                            </button>
                            <p>Enviar</p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact_card