import InformationText from "../InformationText/InformationText";
import Title from "../Titles/Title/Title";
import "./home.css";

const informacionInicio =
  "Las colecciones científicas son una parte medular de los centros de información e investigacion" +
  "de la diversidad biológica; en ellas se encuentran depositados ejemplares" +
  "representativos de organismos, poblaciones y especies, que fueron recolectados en un tiempo " +
  "y lugar determinados, además proveen datos adicionales que los acompañan (geográficos," +
  "ecológicos, taxonómicos y nomenclaturales), así como colecciones accesorias, tales como " +
  "fotografías, ilustraciones, bibliografía, grabaciones y videos, entre otros. Lo anterior denota que" +
  "las colecciones biológicas albergan información para desarrollar investigaciones tales como " +
  "en biología comparada y que por lo tanto representan el marco de referencia del quehacer" +
  "taxonómico que a su vez constituye el sistema de comunicación de la biodiversidad." +
  "La finalidad de la presente propuesta es generar una plataforma digital que permita la " +
  "interacción entre estudiantes e investigadores, así como público en general al hacer uso del " +
  "material herborizado contenido en el herbario CIB de la Universidad Veracruzana. Dicha " +
  "plataforma pretende mostrar la información curada de aproximadamente de 30 mil " +
  "ejemplares de los cuales serán mostrados mediante imágenes, mapas y bases de datos sistematizadas.";

const Home = () => {
  return (
    <>
      <div className="container-inicio">
        <Title text="Herbario CIB" />
        <InformationText text={informacionInicio} />
      </div>
    </>
  );
};

export default Home;
