import Slider from "./Slider";

const Navbar = () => {
    return (
        <>

            <div>

                <Slider  />

                <nav className="main-header navbar navbar-expand navbar-light">
                    <ul className='navbar-nav'>
                        <li className="nav-item">
                            <a className="nav-link" data-widget="pushmenu" href="#" role="button">
                                <i className="fas fa-bars">=</i>
                            </a>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                            <a href="/home" className="nav-link">
                                Home
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar;