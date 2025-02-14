import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';

export default function Slider({isMenuOpen, toggleMenu}){

    const [currentTime, setCurrentTime] = useState(new Date());
    const [funFact, setFunFact] = useState("");

    useEffect(() => {
         const fetchFunFact = async () => {
            try {

                const response = await fetch("https://uselessfacts.jsph.pl/random.json?language=en");
                const data = await response.json();
                setFunFact(data.txt);
                
            } catch (error) {
                console.log("Error fetching fun fact : ", error);
            }
         }

         fetchFunFact();

         const intervalId = setInterval(fetchFunFact, 10000);

         return () => clearInterval(intervalId);
    },[]);

    useEffect(() => {

        const updateTime = () => setCurrentTime(new Date());
        const intervalId = setInterval(updateTime, 1000);

        return () => clearInterval(intervalId);

    }, []);

    useEffect(() => {

        const handleVisibilityChange = () => {
            if(document.hidden) {
                toggleMenu();
            }
        }

        document.addEventListener("visibilitychange",handleVisibilityChange);

    },[toggleMenu])
}