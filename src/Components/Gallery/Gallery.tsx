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
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Gallery = () => {

  const IMG_MIN = 190 ;
  const IMG_MAX = 520 ;
  const PAD_MIN = 0 ;
  const PAD_MAX = 60 ;

  const parentRef = useRef<HTMLDivElement>(null) ;
  useGSAP(() => {
    const imagedivs = gsap.utils.toArray<HTMLDivElement>(".image-div") ;

    imagedivs.forEach((imagediv) => {
      gsap.to(imagediv, {
        scale: 0,
        scrollTrigger : {
          trigger: imagediv, 
          start: "top top",
          end: "bottom top", 
          scrub: true
        }
      })
    })

     
    let xoffset = 0;
    let yoffset = 0;
    const parent = parentRef?.current?.getBoundingClientRect() ;
    const images = gsap.utils.toArray<HTMLDivElement>(".image") ;
    if(parent == null) return ;
    images.forEach((img) => {
      const itemrect = img.getBoundingClientRect() ;
      const random = gsap.utils.random(-1, 1);
        xoffset =
          parent.width / 2 - (itemrect.left - parent.left + itemrect.width / 2);

        yoffset = parent.top - itemrect.top ;
        
      
         gsap.set(img, {
            transformOrigin: `${random < 0 ? "left" : "right"}`,
            x: xoffset,
            y: yoffset,
            rotation: gsap.utils.random(-5, 5),
        });

        gsap.to(img, {
        x: 0,
        y: 0,
        rotation: 0,
        duration: 1.3,
        scrollTrigger: {
          trigger: ".galllery-images",
          start: "top center",
          end: "top+=1300 center",
          // markers: true
        },
      });




    })

        


  


  }) ;









  return (
    <div className='gallery-main'>
      <div className="gallery-tagline">
        <span className='italics'>the</span>
        <br />
        <div className="bebas-gallery">

          GALLERY
        </div>
      </div>


      <div className="galllery-images"
        ref = {parentRef}
      >
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px",
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px",
          
        } as React.CSSProperties } > <img src={img2} alt="" className="image" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px",
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px"} as React.CSSProperties }> <img className="image" src={img3} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px" ,
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px"} as React.CSSProperties }> <img className="image" src={img11} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px" ,
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px"} as React.CSSProperties }> <img className="image" src={img10} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px" ,
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px"} as React.CSSProperties }> <img className="image" src={img9} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px" ,
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px"} as React.CSSProperties }> <img className="image" src={img8} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px" ,
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px"} as React.CSSProperties }> <img className="image" src={img7} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px" ,
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px"} as React.CSSProperties }> <img className="image" src={img6} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px" ,
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px"} as React.CSSProperties }> <img className="image" src={img5} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px" ,
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px"} as React.CSSProperties }> <img className="image" src={img4} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px",
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px",
          
        } as React.CSSProperties } > <img className="image" src={img2} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px",
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px"} as React.CSSProperties }> <img className="image" src={img3} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px" ,
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px"} as React.CSSProperties }> <img className="image" src={img11} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px" ,
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px"} as React.CSSProperties }> <img className="image" src={img10} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px" ,
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px"} as React.CSSProperties }> <img className="image" src={img9} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px" ,
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px"} as React.CSSProperties }> <img className="image" src={img8} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px" ,
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px"} as React.CSSProperties }> <img className="image" src={img7} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px" ,
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px"} as React.CSSProperties }> <img className="image" src={img6} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px" ,
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px"} as React.CSSProperties }> <img className="image" src={img5} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px" ,
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px"} as React.CSSProperties }> <img className="image" src={img4} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px",
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px",
          
        } as React.CSSProperties } > <img className="image" src={img2} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px",
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px"} as React.CSSProperties }> <img className="image" src={img3} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px" ,
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px"} as React.CSSProperties }> <img className="image" src={img11} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px" ,
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px"} as React.CSSProperties }> <img className="image" src={img10} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px" ,
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px"} as React.CSSProperties }> <img className="image" src={img9} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px" ,
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px"} as React.CSSProperties }> <img className="image" src={img8} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px" ,
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px"} as React.CSSProperties }> <img className="image" src={img7} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px" ,
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px"} as React.CSSProperties }> <img className="image" src={img6} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px" ,
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px"} as React.CSSProperties }> <img className="image" src={img5} alt="" /> </div>
        <div className="image-div" style={{"--h": Math.floor(Math.random() *(IMG_MAX - IMG_MIN) + IMG_MIN) + "px" ,
          "--p" : Math.floor(Math.random() *(PAD_MAX - PAD_MIN) + PAD_MIN) + "px"} as React.CSSProperties }> <img className="image" src={img4} alt="" /> </div>




      </div>


    </div>
  )
}

export default Gallery