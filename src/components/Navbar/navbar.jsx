import RUF_logo from "../RUF_logo/RUF_logo"

const Navbar = () => {
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-white">
                <RUF_logo type={'educative'}/>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active gradient" aria-current="page" href="#">PRODUCTOS Y SERVICIOS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">SOBRE NOSOTROS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">CONTÁCTENOS</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar