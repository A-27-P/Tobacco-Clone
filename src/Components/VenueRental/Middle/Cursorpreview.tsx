import React, { useRef } from 'react'
import "./Cursorpreview.css"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Cursorpreview = ({ hoveredRoom, position }: { hoveredRoom: { image: string } | null, position: { x: number, y: number } }) => {

    const ref = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        if (!ref.current) return;
        gsap.to(".cursor-preview", {
            x: position.x + 1,
            y: position.y - 260
        })
    }, [position])


    useGSAP(() => {
        if (!ref.current) return;
        
        const origin = Math.random() > 0.5
            ? "bottom left"
            : "bottom right";

        
        gsap.set(ref.current, {
            transformOrigin: origin,
        });
       
        gsap.fromTo(
            ref.current,
            { scale: 0 },
            {
                scale: 1,
                duration: 0.4,
                ease: "power3.out",
            }
        );
    }, [hoveredRoom?.image]);


    
    if (!hoveredRoom) return;

    return (
        <div className='cursor-preview'
            ref={ref}
        >

            <img src={hoveredRoom.image} alt=""

                className='cursor-preview-image'
            />






        </div>
    )
}

export default Cursorpreview