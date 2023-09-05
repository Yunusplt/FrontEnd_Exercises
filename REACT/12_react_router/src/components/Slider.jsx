import Carousel from "react-bootstrap/Carousel";
import isa from "../img/isa.jpeg"
import about from "../img/about.jpeg"
import devops from "../img/devops.jpeg"

function DarkVariantExample() {
  return (
    <Carousel fade data-bs-theme="dark" interval={3000} >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={isa}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={about}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={devops}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
