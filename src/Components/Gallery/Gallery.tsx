import "./Gallery.css"
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";
import img8 from "../../assets/img8.jpg";
import img9 from "../../assets/img9.png";
import img10 from "../../assets/img10.jpg";
import img11 from "../../assets/img11.jpg";

const Gallery = () => {

  const IMG_MIN = 190 ;
  const IMG_MAX = 520 ;
  const PAD_MIN = 0 ;
  const PAD_MAX = 60 ;

  return (
    <div className='gallery-main'>
      <div className="gallery-tagline">
        <span className='italics'>the</span>
        <br />
        <div className="bebas-gallery">

          GALLERY
        </div>
      </div>


      <div className="galllery-images">
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px",
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px",
          
        } as React.CSSProperties } > <img src={img2} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px",
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px"} as React.CSSProperties }> <img src={img3} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px" ,
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px"} as React.CSSProperties }> <img src={img11} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px" ,
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px"} as React.CSSProperties }> <img src={img10} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px" ,
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px"} as React.CSSProperties }> <img src={img9} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px" ,
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px"} as React.CSSProperties }> <img src={img8} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px" ,
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px"} as React.CSSProperties }> <img src={img7} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px" ,
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px"} as React.CSSProperties }> <img src={img6} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px" ,
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px"} as React.CSSProperties }> <img src={img5} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px" ,
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px"} as React.CSSProperties }> <img src={img4} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px",
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px",
          
        } as React.CSSProperties } > <img src={img2} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px",
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px"} as React.CSSProperties }> <img src={img3} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px" ,
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px"} as React.CSSProperties }> <img src={img11} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px" ,
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px"} as React.CSSProperties }> <img src={img10} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px" ,
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px"} as React.CSSProperties }> <img src={img9} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px" ,
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px"} as React.CSSProperties }> <img src={img8} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px" ,
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px"} as React.CSSProperties }> <img src={img7} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px" ,
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px"} as React.CSSProperties }> <img src={img6} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px" ,
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px"} as React.CSSProperties }> <img src={img5} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px" ,
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px"} as React.CSSProperties }> <img src={img4} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px",
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px",
          
        } as React.CSSProperties } > <img src={img2} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px",
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px"} as React.CSSProperties }> <img src={img3} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px" ,
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px"} as React.CSSProperties }> <img src={img11} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px" ,
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px"} as React.CSSProperties }> <img src={img10} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px" ,
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px"} as React.CSSProperties }> <img src={img9} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px" ,
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px"} as React.CSSProperties }> <img src={img8} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px" ,
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px"} as React.CSSProperties }> <img src={img7} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px" ,
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px"} as React.CSSProperties }> <img src={img6} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px" ,
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px"} as React.CSSProperties }> <img src={img5} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px" ,
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px"} as React.CSSProperties }> <img src={img4} alt="" /> </div>




      </div>


    </div>
  )
}

export default Gallery