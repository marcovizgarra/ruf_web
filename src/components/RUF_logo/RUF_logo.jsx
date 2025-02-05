import { useEffect, useState } from 'react';
import ruf_logo from '/img/home_page/ruf_logo.png'
import ruf_logo_educative from '/img/logos/educative_logo.png'
import ruf_logo_industrial from '/img/logos/industrial_logo.png'

const RUF_logo = ({ type }) => {
    const [hover, setHover] = useState(true);
    const [logo, setLogo] = useState('');

    useEffect(() => {
        if (type == 'educativo') {
            setLogo(ruf_logo_educative);
        } else if (type == 'industrial') {
            setLogo(ruf_logo_industrial)
        } else {
            setLogo(ruf_logo);
        }
    }, [])

    return(
        <>
            <div className="logo_container">
                <img className='ruf_logo' src={logo} alt='logo_ruf' onMouseEnter={() => {setHover(false)}} onMouseOut={() => {setHover(true)}}/>
                <p className={ hover ? 'hide_initials' : 'initials_enter animate__animated animate__fadeInUp'}>
                    Robótica de Utilidades Funcionales
                    <br />
                    <span className='copy_right'></span>
                </p>
            </div>
        </>
    )
}

export default RUF_logo