// functions
import { getFileName } from '/src/js/functions.js';
// components
import Navbar from '../Navbar/navbar';
import Contact_card from '../Contact_card/Contact_card';
// home images
import graduation_cap from '/public/img/educativo/graduation-cap-solid.png';
import robot_icon from '/public/img/educativo/robot-solid.png';
import user_icon from '/public/img/educativo/chalkboard-user-solid.png';
import childs_image from '/public/img/educativo/childs.jpg';
import check from '/public/img/educativo/check-solid.svg';
// footer images
import logo_ruf_educativo from '/public/img/footer/ruf_logo_educativo.png';
import whatsapp_icon from '/public/img/footer/whatsapp.svg';
import facebook_icon from '/public/img/footer/facebook.svg';
import instagram_icon from '/public/img/footer/instagram.svg';
import linkedin_icon from '/public/img/footer/linkedin.svg';
import x_icon from '/public/img/footer/x-twitter.svg';
import youtube_icon from '/public/img/footer/youtube.svg';
import envelope_icon from '/public/img/footer/envelope.svg';


const ProductCard = ({ title, description, icon, back_color }) => {

    return(
        <>
            <div className={'product_card ' + back_color} >
                <h3>{title}</h3>
                <p>{description}</p>
                <img src={icon} alt={getFileName(icon)} />
            </div>
        </>
    )
}

const Footer = () => {
    return (
        <>
            <footer id='educativo_footer'>
                <div className="logo">
                    <img src={logo_ruf_educativo} alt={getFileName(logo_ruf_educativo)} />
                    <p>® 2024 Robótica de Utilidades Funcionales<br />All rights reserved</p>
                </div>
                <div className="social_networks">
                    <h6>SEGUINOS EN</h6>

                    <div className="icons">
                        <img className="footer_icon" src={whatsapp_icon} alt={getFileName(whatsapp_icon)} />
                        <img className="footer_icon" src={linkedin_icon} alt={getFileName(linkedin_icon)} />
                        <img className="footer_icon" src={envelope_icon} alt={getFileName(envelope_icon)} />
                        <img className="footer_icon" src={instagram_icon} alt={getFileName(instagram_icon)} />
                        <img className="footer_icon" src={facebook_icon} alt={getFileName(facebook_icon)} />
                        <img className="footer_icon" src={x_icon} alt={getFileName(x_icon)} />
                        <img className="footer_icon" src={youtube_icon} alt={getFileName(youtube_icon)} />
                    </div>
                </div>
            </footer>
        </>
    )
}

const HomeEducativo = () => {
    return (
        <>
            <div id='educativo' >
                <header className='header_educativo'>
                    <div className="header_pic container m-0 p-0">
                    </div>

                    <article className="header_description">
                        <h1>TEXTO DESCRIPTIVO</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repudiandae ipsum consequuntur, at itaque nisi culpa veniam commodi in dolorum? Repudiandae veniam perferendis autem obcaecati?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, alias ipsum! Quisquam explicabo, deserunt odio ad deleniti labore harum dolor.</p>
                    </article>
                </header>

                <section className='products'>
                    <div className="description">
                        <h2>Título descriptivo</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error odio adipisci exercitationem maiores fugiat soluta inventore veniam quasi iusto libero quibusdam explicabo, tenetur qui. Non.</p>
                    </div>

                    <div className="card_container">
                        <ProductCard title={"Kits educativos"} description={"Breve reseña descriptiva"} icon={user_icon} back_color={"black"} />
                        <ProductCard title={"Cursos"} description={"Breve reseña descriptiva"} icon={graduation_cap} back_color={"orange"} />
                        <ProductCard title={"Asesorías"} description={"Breve reseña descriptiva"} icon={robot_icon} back_color={"black"} />
                    </div>
                </section>

                <section className="info_container">
                    <div className="check_list">
                        <div className="container">
                        </div>
                        <div className="img_container">
                            <img src={childs_image} alt={getFileName(childs_image)} />
                        </div>
                        <h4>SLOGAN O TÍTULO DESCRPTIVO</h4>
                        <p className='sec_description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolorem quidem molestiae amet labore veniam quis tempora minus. Exercitationem in reprehenderit fuga excepturi laboriosam laborum esse harum ipsum, aliquam dicta rem ratione aut facilis, quae voluptates inventore commodi voluptatibus vitae.</p>

                        <ul>
                            <li><img src={check} alt={getFileName(check)} className="check_icon" />Aliquam dicta rem ratione aut facilis, quae voluptates inventore commodi.</li>
                            <li><img src={check} alt={getFileName(check)} className="check_icon" />Maiores dolorem quidem molestiae amet labore veniam quis tempora minus</li>
                            <li><img src={check} alt={getFileName(check)} className="check_icon" />Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
                            <li><img src={check} alt={getFileName(check)} className="check_icon" />Aliquam dicta rem ratione aut facilis, quae voluptates inventore commodi.</li>
                        </ul>
                    </div>
                </section>

                <section className='contact'>
                    <Contact_card />
                </section>
            </div>
        </>
    )
}

const Educativo = () => {
    return(
        <>
            <Navbar type={"educativo"} />
            <HomeEducativo />
            <Footer />
        </>
    )
}

export default Educativo