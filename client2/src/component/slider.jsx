
import SimpleImageSlider from "react-simple-image-slider";

function Slider({ img }) {
    const images = img?.map((i) => {
        return {
            url: "http://localhost:5000/getImage/" + i.name
        }
    })
    return (<>
        <div>
            <SimpleImageSlider
                width={500}
                height={500}
                images={images}
                showBullets={true}
                showNavs={true}
            />
        </div>
    </>);
}
export default Slider;




