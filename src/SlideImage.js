import SimpleImageSlider from "react-simple-image-slider";
import img1 from "./Image/1922909411home-banner3.jpg";
import img2 from "./Image/1952342548home-banner5.jpg";
import { FaColonSign } from "react-icons/fa6";
const images = [{ url: img1 }, { url: img2 }];

const Slider = () => {
  return (
    <div>
      <SimpleImageSlider
        width="99%"
        height={500}
        images={images}
        showNavs={true}
        navMargin={5}
        navSize={30}
        navStyle={{FaColonSign,FaColonSign}}
      
      />
    </div>
  );
};

export default Slider;
