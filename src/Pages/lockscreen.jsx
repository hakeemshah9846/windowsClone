import {useState, useCallback} from "react";
import MobileDetection from "../components/utilities/MobileDetection";


function LockScreen() {

    const [isMobile, setIsMobile] = useState(false);

    const handleMobileDetection = useCallback((mobile) => {
        setIsMobile(mobile);
    })

    if(isMobile) {
        return (
            <div className="bg-black w-full h-screen text-center text-3xl px-7 overflow-hidden flex flex-col justify-center items-center text-white">
                😔
                <br />
                Sorry, this app is not supported on mobile devices{" "}
                <div className="font-bold text-red-500">YET.</div>
            </div>
        )
    }

    return (
        <>
        {!isMobile && <MobileDetection onDetectMobile={handleMobileDetection}/>}
        </>
    )
}

export default LockScreen;