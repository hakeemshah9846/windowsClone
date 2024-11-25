import { useEffect } from "react"

const MobileDetection = ({onDetectMobile}) => {
    useEffect(() => {
        const checkIfMobile = () => {
            const userAgent = navigator.userAgent || navigator.vendor || window.opera;
            console.log("navigator.userAgent : ", navigator.userAgent);
            console.log("navigator.vendor : ", navigator.vendor);
            console.log("window.opera : ", window.opera);
            
            console.log("userAgent : ", userAgent);
            console.log("window.MSStream : ", window.MSStream);

            if(/android/i.test(userAgent) || (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream)) {
                onDetectMobile(true);
            }else {
                onDetectMobile(false);
            }
        };

        checkIfMobile();
    },[onDetectMobile]);

    return null;
}

export default MobileDetection;