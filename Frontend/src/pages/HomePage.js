import '../style/HomePage.css';
import Carousel from 'react-bootstrap/Carousel';
/*import '../../imagenes/home/ambulancia.jpg'
import '../../imagenes/home/clinica.jpg'
import '../../imagenes/home/logo.jpg'*/

const HomePage = (props) => {
    function UncontrolledExample() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img src="imagenes/home/ambulancia.jpg" alt="ambulancia"></img>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="imagenes/home/clinica.jpg" alt="ambulancia"></img>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="imagenes/home/logo.jpg" alt="ambulancia"></img>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }

    return (
        <div><h2>Bienvenidos</h2>
            <p>Contamos par su mejor atención con:</p>
            <p>Más de 108 camas de internación general con baño privado,</p>
            <p>Habitaciones dobles y simples</p>
            <p>14 camas de Terapia Intensiva Polivalente</p>
            <p>8 puestos de Unidad de Terapia Neonatal</p>
            <p>2 camas en el sector de Emergencias</p>
            <p>4 puestos para Hemoterapia, Hemodinamia, Cirugía Endovascular.</p>
            <p>Quimioterapia y/o recuperación post-operatorio de Cirugías Ambulatorias
                <p>Servicio de Diagnóstico por Imágenes</p>
                <p>Sector Destinado a ART.</p>
            </p>
            <p>Disponemos de una guardia pedíatrica de 24hs, servicio de asistencia inmediata y traslados para urgencias
                de alta complejidad.
            </p>
            <p>
                Calidad del servicio está basada en la convicción de poner al paciente como centro de todos
                nuestros actos, realizando esfuerzos constantes e incansables hacia la búsqueda de la mejora continua de
                los cuidados y prestaciones brindadas.</p>

            <p>El objetivo principal de la Política de Calidad es brindar prestaciones médicas y cuidados que sean: efectivos, eficientes, oportunos, equitativos, centrados en el Paciente, seguros</p>

            <p>Para asegurar estos objetivos, el liderazgo de la organización se compromete a desarrollar estrategias
                tendientes a:</p>
            <p>1. Identificar y reducir los desperdicios (ineficiencias) en los procesos.</p>
            <p>2. Detener o reducir el impacto de los potenciales fallos y errores.</p>
            <p>3. Favorecer la capacitación continua del personal y el uso de la mejor evidencia disponible.</p>
            <p>4. Crear una cultura de mejora continua y seguridad del paciente y las condiciones adecuadas para
                favorecer la elaboración de ideas innovadoras.</p>
            <p>5. Garantizar la satisfacción del personal, proveedores, pacientes y su familia.</p>
            <p>6. Asegurar cuidados y actos médicos atendiendo las buenas costumbres y principios éticos acordes la
                filosofía institucional.</p>
            <p>7. Alcanzar el compromiso con estos ideales de parte de todos los profesionales y trabajadores de la
                institución.</p>

            <p>DEFINICIONES
                Paciente Cualquier persona que experimente un proceso de salud enfermedad que amerite utilizar los
                servicios médicos y de soporte del Sanatorio Güemes.</p>
            <p>Liderazgo El conjunto de personas que ocupan puestos de trabajo que requiera toma de decisiones
                gerenciales u operativas o que posean influencia sobre éstas. Por caso puede citarse a los Directores,
                Gerentes, Jefes de Servicio y otros líderes.</p>

            <p>Misión
                Brindar atención de la salud en forma integral, segura y de excelencia, en un entorno humano, ético y de
                calidez, situando al paciente como centro de todos nuestros actos.
                El logro de la misma se sustenta en la evidencia científica, la investigación, la actualización de
                conocimientos y los máximos principios éticos.
                Somos Hospital Universitario asociado a la UBA, comprometidos con la formación y capacitación continua
                de futuros profesionales de la salud.</p>

            <p>Visión
                Ser un centro asistencial de alta complejidad al alcance de toda la comunidad, económicamente
                sustentable, reconocido por su calidad asistencial y una atención integral de excelencia, con destacado
                trato personal y humano a sus pacientes.</p>



            <p>Valores
                Compasión: percibir, comprender e intentar aliviar el sufrimiento del otro.</p>
            <p>Respeto: considerar y valorar a cada persona.</p>
            <p>Compromiso: pasión incondicional por hacer las cosas bien y asumir la responsabilidad sobre nuestros
                actos.</p>
            <p>Hospitalidad: hacer sentir bien al otro en todo lo que esté a nuestro alcance.</p>
            <p>Excelencia: eficiencia y coordinación, para garantizar que la atención integral del paciente y su
                seguridad, se efectúen de manera óptima.</p>
            <p>Ética Profesional: actuar siempre en congruencia con los valores humanos y principios morales más
                estrictos.
            </p></div>
    );
}

export default HomePage;