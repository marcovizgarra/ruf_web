import RUF_logo from '../RUF_logo/RUF_logo.jsx'
import industry_icon from '/img/home_page/industry_icon.png';
import education_icon from '/img/home_page/education_icon.png';
import rse_icon from '/img/home_page/rse_icon.png';
import gov_tech_icon from '/img/home_page/gov_tech_icon.png';
import { getFileName } from '/src/js/functions.js';
import { useState } from 'react';

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
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est nesciunt culpa recusandae vero odio quas dolorum mollitia! Eaque fuga explicabo tenetur quia praesentium, voluptatum, cumque reprehenderit dicta cupiditate architecto ut!</p>
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
                <RUF_logo />
            </header>
            <BussinesUnits />
        </>
    )
}

export default Home