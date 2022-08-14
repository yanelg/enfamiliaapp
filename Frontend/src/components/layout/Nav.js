import '../../style/layout.css';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <div className='holder'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/staff">Staff</Link></li>
                    <li><Link to="/galeria">Galeria</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </div>
        </nav >
    )

    function UncontrolledExample() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="imagenes/home/clinica.jgp"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="imagenes/home/ambulancia.jgp"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel>
        );
    }
}

export default Nav;