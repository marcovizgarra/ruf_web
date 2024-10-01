import { getFileName } from '/src/js/functions.js';
import graduation_cap from '/public/img/educativo/graduation-cap-solid.png';
import robot_icon from '/public/img/educativo/robot-solid.png';
import user_icon from '/public/img/educativo/chalkboard-user-solid.png';

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

const Educativo = () => {
    return(
        <>
            <section id="educativo">
                <header className='header_educativo'>
                    <div className="header_pic">

                    </div>
                    <article className="header_description">
                        <h1>TEXTO DESCRIPTIVO</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repudiandae ipsum consequuntur, at itaque nisi culpa veniam commodi in dolorum? Repudiandae veniam perferendis autem obcaecati?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, alias ipsum! Quisquam explicabo, deserunt odio ad deleniti labore harum dolor.
                        </p>
                    </article>
                </header>
            </section>
            <section className='educativo_products'>
                <div className="description">
                    <h2>Título descriptivo</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error odio adipisci exercitationem maiores fugiat soluta inventore veniam quasi iusto libero quibusdam explicabo, tenetur qui. Non.</p>
                </div>
                <div className="card_container">
                    <ProductCard title={"Kits educativos"} description={"Breve reseña descriptiva"} icon={user_icon} back_color={"black"}/>
                    <ProductCard title={"Cursos"} description={"Breve reseña descriptiva"} icon={graduation_cap} back_color={"orange"}/>
                    <ProductCard title={"Asesorías"} description={"Breve reseña descriptiva"} icon={robot_icon} back_color={"black"}/>
                    
                </div>
            </section>
        </>
    )
}

export default Educativo