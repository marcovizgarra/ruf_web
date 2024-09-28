import { getFileName } from '/src/js/functions.js';
import { useState } from 'react';
import ruf_logo from '/img/home_page/ruf_logo.png'

const RUF_logo = () => {
    const [hover, setHover] = useState(true)
    return(
        <>
            <div className="logo_container">
                <img className='ruf_logo' src={ruf_logo} alt={getFileName(ruf_logo)} onMouseEnter={() => {setHover(false)}} onMouseOut={() => {setHover(true)}}/>
                <p className={ hover ? 'hide_initials' : 'initials_enter animate__animated animate__fadeInDown'}>
                    Robótica de Utilidades Funcionales
                    <br />
                    <span className='copy_right'></span>
                </p>
            </div>
        </>
    )
}

export default RUF_logo