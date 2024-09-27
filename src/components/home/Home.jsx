import ruf_logo from '/img/home_page/ruf_logo.png';
import industry_icon from '/img/home_page/industry_icon.png';
import education_icon from '/img/home_page/education_icon.png';
import rse_icon from '/img/home_page/rse_icon.png';
import gov_tech_icon from '/img/home_page/gov_tech_icon.png';
import { getFileName } from '/src/js/functions.js';

const UnitCard = ({ img, title }) => {
    return(
        <>
            <div className={title + ' unit_card'}>
                <img src={img} alt={ getFileName(img)}/>
                <h2>{title}</h2>
            </div>
        </>
    )
}

const BussinesUnits = () => {
    return(
        <>
            <section id="bussines_unit">
                <div id="banner">
                    <div className='intro'>
                        <h1>TÍTULO/ DESCRIPCIÓN</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur eos inventore itaque distinctio temporibus voluptas architecto! Sunt sequi quis libero quisquam minima quod quos iure numquam nulla necessitatibus.</p>
                    </div>

                    <div className="card_container">
                        <div className="row">
                            <UnitCard title={'Eduactivo'} img={education_icon}/>
                            <UnitCard title={'Industrial'} img={industry_icon}/>
                        </div>

                        <div className="row">
                            <UnitCard title={'RSE'} img={rse_icon}/>
                            <UnitCard title={'GovTech'} img={gov_tech_icon}/>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

const Home = () => {
    return(
        <>
            <header id="home_header">
                <img className='ruf_logo' src={ruf_logo} alt={getFileName(ruf_logo)} />
            </header>

            <BussinesUnits />
        </>
    )
}

export default Home