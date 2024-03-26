
import ImageGallery from "react-image-gallery";
import { imagenes } from "../scripts/Appian";
import { Flutter } from "../scripts/Flutter";
import { ProVuejs } from "../scripts/ProVuejs";
import "react-image-gallery/styles/css/image-gallery.css";
const Proyectos = () => {
  
  return (
    <div className="Container_Proyectos">
        <h1>Proyectos</h1>
        <div className="Container_Project">
          <div className="ImgSize">
          <ImageGallery items={imagenes} showPlayButton={false} showFullscreenButton={false} 
          className='imagenes'
          showBullets={true}
          autoPlay={true}
          slideInterval={2000}
          showNav={false}/>
          </div>
          <p>Sistemas de registro de viáticos<br/>Realizado en Appian</p>
        </div>
        <div className="Container_Project">
        <div className="ImgSize">
          <ImageGallery items={Flutter} showPlayButton={false} showFullscreenButton={false} 
          className='imagenes'
          showBullets={true}
          autoPlay={true}
          slideInterval={2000}
          showNav={false}/>
          </div>
        <p>Aplicación ambiental EcomPost<br />Realizada con Flutter</p>
        </div>
        <div className="Container_Project">
        <div className="ImgSize">
          <ImageGallery items={ProVuejs} showPlayButton={false} showFullscreenButton={false} 
          className='imagenes'
          showBullets={true}
          autoPlay={true}
          slideInterval={2000}
          showNav={false}/>
          </div>
        <p>Pagina de registro de proyectos <br />Realizada con Vuejs</p>
        </div>
    </div>
  )
}

export default Proyectos
