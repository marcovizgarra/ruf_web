import { getFileName } from '/src/js/functions.js';
import Navbar from '../Navbar/navbar'
import unitree_demo from '/video/industrial/unitree_robotics_demo_1.mp4';

const Industrial = () => {
    return (
        <>
            <Navbar type={'industrial'} />
            <section id="industrial">
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
                    
                </article>
            </section>
        </>
    )
}

export default Industrial