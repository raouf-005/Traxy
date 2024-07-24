import { motion, useMotionValue } from "framer-motion";
import React, { useEffect, useState } from "react";
import CameraSwipe2 from "./CameraSwipe2";
const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 8;
const DRAG_BUFFER = 40;

const SPRING_OPTIONS = {
    type: "spring",
    mass: 3,
    stiffness: 400,
    damping: 50,
  };
  



 export default function SlideCamera(props) {
    const [cardIndex, setCardIndex] = useState(0);
    const dragX = useMotionValue(0);
    useEffect(() => {
        const intervalRef = setInterval(() => {
            const x = dragX.get();

            if (x === 0) {
                setCardIndex((pv) => {
                    if (pv === props.list.length - 1) {
                        return 0;
                    }
                    return pv + 1;
                });
            }
        }, AUTO_DELAY);

        return () => clearInterval(intervalRef);
    }, []);

    const onDragEnd = () => {
        const x = dragX.get();

        if (x <= -DRAG_BUFFER && cardIndex < props.list.length - 1) {
            setCardIndex((pv) => pv + 1);
        } else if (x >= DRAG_BUFFER && cardIndex > 0) {
            setCardIndex((pv) => pv - 1);
        }
    };

    return(
        <div className="relative overflow-hidden  py-8 sm:hidden">
        <motion.div
            drag="x"
            dragConstraints={{
                left: 40,
                right: 50,
            }}
            style={{
                x: dragX,
            }}
            animate={{
                translateX: `-${cardIndex * 55}%`,
            }}
            transition={SPRING_OPTIONS}
            onDragEnd={onDragEnd}
            className="flex cursor-grab items-center active:cursor-grabbing sm:hidden gap-10"
        >
            {
                props.list.map((camera, index) => {
                    return <CameraSwipe2 key={index} {...camera} />
                })
            }
        </motion.div>
    </div>
    )
}