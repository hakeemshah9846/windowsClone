import React, {useState, useEffect, useMemo} from "react";
import {motion, useMotionValue, useSpring} from "framer-motion";


export default function Torch(input, setInput) {

    const cursorSize = 7000;
    const mouse = {
            x : useMotionValue(0),
            y : useMotionValue(0),
    }

    const smoothOptions = {damping : 20, stiffness : 300, mass : 0.5};

    const smoothMouse = {
        x : useSpring(mouse.x, smoothOptions),
        y : useSpring(mouse.y, smoothOptions),
    };


    return(
        <main className="cursor-custom w-full h-full">
            Torch Component
        </main>
    )



}