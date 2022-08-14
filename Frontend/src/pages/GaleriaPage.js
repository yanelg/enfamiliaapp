import '../style/GaleriaPage.css';
/*import '../../imagenes/galeria/consultorio1.jpg'
import '../../imagenes/galeria/diagnostico_por_imagenes.jpg'
import '../../imagenes/galeria/gimnasio.jpg'
import '../../imagenes/galeria/sala_de_espera.jpg'*/

const GaleriaPage = (props) => {
    return (
        <div>Galeria</div>
    );
    <div className='galerias'>
        <div className='galeria'>
            <img src="imagenes/galeria/consultorio1.jpg" alt="consultorio"></img>
            <h5>Nuestros consultorios</h5>
        </div>
        <div className='galeria'>
            <img src="imagenes/galeria/diagonostico_por_imagenes.jpg" alt="imagenes"></img>
            <h5>Diagonostico_por_imagenes</h5>
        </div>
        <div className='galeria'>
            <img src="imagenes/galeria/gimnasio.jpg" alt="gimnasio"></img>
            <h5>Nuestros gimansio</h5>
        </div>
        <div className='galeria'>
            <img src="imagenes/galeria/sala_de_espera.jpg" alt="sala_de_espera"></img>
            <h5>Sala de espera</h5>
        </div>
    </div>
}
export default GaleriaPage;