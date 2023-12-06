
import SimpleImageSlider from "react-simple-image-slider";
 import SliderImages from '../data/ImagesApi';

const ImageSlider = () => {

  return (
    <>
    <div>
      <SimpleImageSlider
        width={790}
        height={320}
        images={SliderImages.map((item)=>item.image)}
        showBullets={true}
        showNavs={true}
      />
    </div>
    </>
  );
};

export default ImageSlider;
