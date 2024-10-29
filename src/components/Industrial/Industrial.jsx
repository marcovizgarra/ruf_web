import { useState } from "react";
import Slider from "react-slick";
// components
import Navbar from '../Navbar/navbar'
// images
import industry_4d0_icon from '/img/industrial/40_icon.png';
import enterprise_icon from '/img/industrial/enterprise_icon.png';
import industry_icon from '/img/industrial/industry_icon.png';
import earth_icon from '/img/industrial/earth-americas-solid.svg';
import next_icon from '/img/industrial/arrow-right-solid.svg';
import prev_icon from '/img/industrial/arrow-left-solid.svg';
import sustainable_dev from '/img/industrial/sustain_dev.png';
import green_leave from '/img/industrial/green_leave.png';
import green_check from '/img/industrial/green_check.png';
// video
import unitree_demo from '/video/industrial/unitree_robotics_demo_1.mp4';

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div className={className + " next_arrow slide_arrow"} onClick={onClick} style={{ ...style, display: "block"}}>
            <img src={next_icon} alt="next_icon" />
        </div>
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div className={className + " prev_arrow slide_arrow"} onClick={onClick} style={{ ...style, display: "block"}}>
            <img src={prev_icon} alt="prev_icon" />
        </div>
    );
};

const Slide = () => {
    const [display, setDisplay] = useState(true);
    const [width, setWidth] = useState(1200);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };    

    return (
        <>
            <div className="slider-container d-flex justify-content-center flex-row align-items-center bussines_slider">
                <div
                    style={{
                        width: width + "px",
                        display: display ? "block" : "none"
                    }}
                >
                    <Slider {...settings}>
                        <div className="bussiness_slide">
                            <img src={industry_4d0_icon} alt='4.0_industry_icon' className="slide_icon" />
                            <h3>Automatización</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem iusto asperiores ullam aspernatur quasi perspiciatis est unde similique soluta placeat.
                            </p>
                        </div>

                        <div className="bussiness_slide">
                            <img src={industry_icon} alt='industry_icon' className="slide_icon" />
                            <h3>Industrias</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem iusto asperiores ullam aspernatur quasi perspiciatis est unde similique soluta placeat.
                            </p>
                        </div>

                        <div className="bussiness_slide">
                            <img src={enterprise_icon} alt='enterprise_icon' className="slide_icon" />
                            <h3>PyME</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem iusto asperiores ullam aspernatur quasi perspiciatis est unde similique soluta placeat.
                            </p>
                        </div>

                        <div className="bussiness_slide">
                            <img src={earth_icon} alt='eart_icon' className="slide_icon" />
                            <h3>Desarrollo sustentable</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem iusto asperiores ullam aspernatur quasi perspiciatis est unde similique soluta placeat.
                            </p>
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    );
}

const Industrial = () => {
    return (
        <>
            <Navbar type={'industrial'} />
            <section id="industrial">
                <article className='intro'>
                    <div id="carouselExampleIndicators" className="carousel slide industrial_carousel" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner slide_1 d-flex">
                            <div className="carousel-item active">
                                <article className='slide_content'>
                                    <h1>
                                        El Futuro de la Movilidad Robótica
                                    </h1>
                                    <p>
                                    Descubre el Dog Robot de Unitree: <strong>diseñado para tareas de exploración, inspección y asistencia en ambientes complejos.</strong> Una tecnología avanzada que redefine la interacción entre humanos y robots.
                                    <br /><br />
                                    Equipado con sensores de última generación y una agilidad sorprendente, el Dog Robot de Unitree <strong>puede desplazarse en terrenos irregulares, superar obstáculos y adaptarse a entornos cambiantes.</strong> Su capacidad para <strong>actuar de forma autónoma o responder a comandos</strong> lo convierte en una herramienta versátil para diversas industrias.
                                    <br /><br />
                                    Con un diseño robusto pero ligero, este robot cuadrúpedo está preparado para apoyar tanto en operaciones de rescate como en trabajos de vigilancia y patrullaje. Experimenta cómo la inteligencia artificial y la robótica están transformando la asistencia y la productividad en escenarios reales
                                    </p>
                                </article>
                            </div>

                            <div className="carousel-item">
                            <video autoPlay muted loop >
                                    <source src={unitree_demo} type='video/mp4'/>
                                </video>
                            </div>
                            
                            <div className="carousel-item slide_3 b_radius">
                            </div>
                        </div>

                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>

                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    
                    <article className='industrial_bussiness_units'>
                        <section className="units_description d-flex justify-content-center flex-column align-items-center">
                            <h2>
                                TÍTULO/ DESCRIPCIÓN SLOGAN
                            </h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, iure? Dolor voluptatibus doloribus numquam consequatur atque id, alias non veritatis. Deserunt tenetur quisquam nihil, harum molestias, esse molestiae, itaque cupiditate aperiam adipisci at quo ea fugiat mollitia! Amet cumque eos natus id, odit nobis, facere vel optio, laborum voluptatum praesentium.
                            </p>
                        </section>
                        <Slide />    
                    </article>
                
                    <article className="sustainable_development d-flex justify-content-space-between flex-row align-items-center">
                        <img src={sustainable_dev} alt="sustainable_development_img" className="earth_hands" />

                        <div className="goals container-fluid d-flex flex-column align-items-center">

                            <div className="row">
                                <div className="col title d-flex flex-row ">
                                    <img src={green_leave} alt="green_leave" className="row title_icon" />
                                </div>

                                <div className="col">
                                    <h3 className="row">Compromiso con el medio ambiente</h3>

                                    <p className="row">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem iusto     asperiores ullam aspernatur quasi perspiciatis est unde similique soluta placeat.
                                    </p>

                                    <div className="check row">
                                        <img src={green_check} alt="green_check" />
                                        <p className="col">Desarrollo sostenible</p>
                                    </div>

                                    <div className="check row">
                                        <img src={green_check} alt="green_check" />
                                        <p className="col">Disminución de la huella de carbono</p>
                                    </div>

                                    <div className="check row">
                                        <img src={green_check} alt="green_check" />
                                        <p className="col">Eficiencia energética</p>
                                    </div>

                                    <div className="check row">
                                        <img src={green_check} alt="green_check" />
                                        <p className="col">Transparencia</p>
                                    </div>
                                    
                                    <div className="check row">
                                        <img src={green_check} alt="green_check" />
                                        <p className="col">Estándares internacionales</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </article>

            </section>
        </>
    )
}

export default Industrial