import RUF_logo from '../RUF_logo/RUF_logo.jsx'
import industry_icon from '/img/home_page/industry_icon.png';
import education_icon from '/img/home_page/education_icon.png';
import rse_icon from '/img/home_page/rse_icon.png';
import gov_tech_icon from '/img/home_page/gov_tech_icon.png';
import location_icon from '/img/home_page/location-dot-solid.svg';
import whatsapp_icon from '/img/home_page/whatsapp-brands-solid.svg';
import e_mail_icon from '/img/home_page/envelope-solid.svg';
import contact_icon from '/img/home_page/address-book-solid.svg';
import { Link } from 'react-router-dom';
import { getFileName } from '/src/js/functions.js';

const UnitCard = ({ img, title }) => {
    return(
        <>
            <Link to={title} className={title + ' unit_card'} >
                <img src={img} alt={ getFileName(img)}/>
                <h2>{title}</h2>
            </Link>
        </>
    )
}

const BussinesUnits = () => {
    return(
        <>
            <section id="bussines_units">
                <div id="banner">
                    <div className='intro'>
                        <h1>TÍTULO/ DESCRIPCIÓN</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam autem necessitatibus eos est in totam, placeat reiciendis, rerum eum fuga deleniti distinctio quidem non veniam provident nemo atque. Et, quasi nisi. Exercitationem, pariatur et possimus dolores laudantium atque sunt facilis distinctio assumenda officia, ad fuga.</p>
                        <p className='secondary_p'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam autem necessitatibus eos est in totam, placeat reiciendis, rerum eum fuga deleniti distinctio quidem non veniam provident nemo atque. Et, quasi nisi. Exercitationem, pariatur et possimus dolores laudantium atque sunt facilis distinctio assumenda officia, ad fuga.</p>
                    </div>

                    <div className="card_container">
                        <div className="row">
                            <UnitCard title={'Industrial'} img={industry_icon} />
                            <UnitCard title={'Educativo'} img={education_icon} />
                        </div>

                        <div className="row">
                            <UnitCard title={'GovTech'} img={gov_tech_icon} />
                            <UnitCard title={'RSE'} img={rse_icon} />    
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const Contact = () => {
    return(
        <>
            <section className="home_page_contact">
                <div className='links'>
                    <ul>
                        <h3>CONTÁCTANOS</h3>
                        <li>
                            <img src={location_icon} alt={getFileName(location_icon)} /> 
                            <p>Av. Martín Tissera 957, Mendiolaza, Argentina</p>
                        </li>
                        <li>
                            <img src={whatsapp_icon} alt={getFileName(whatsapp_icon)} />
                            <p>+54 9 3516 095013 / +54 9 3513 297292</p>
                        </li>
                        <li>
                            <img src={e_mail_icon} alt={getFileName(e_mail_icon)} />
                            <p>ruf.desarrollos@gmail.com</p>
                        </li>
                        <br />
                        <button className='contact_form_btn'>
                            <img src={contact_icon} alt={getFileName(contact_icon)} />
                            Ir al furmulario de contacto
                        </button>  
                    </ul>                  
                </div>
            </section>
        </>
    )
}

const Home = () => {
    return(
        <>
            <header id="home_header"> 
                <RUF_logo />
            </header>
            
            <BussinesUnits />
            <Contact />
        </>
    )
}

export default Home