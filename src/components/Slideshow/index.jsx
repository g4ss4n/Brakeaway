import React from "react";
import "./style.css";
import { Slide } from "react-slideshow-image"
import img1 from "../../assets/images/img1.jpeg"
import img2 from "../../assets/images/img2.jpeg"


const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true

}

const Slideshow = () => {
    return (
        <div className="containerSlide">
            <Slide {...proprietes}>
                <div className="each-slide">
                    <div>
                        <img src={img1} alt="img1" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img2} alt="img2" />
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Slideshow;