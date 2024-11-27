import {useState, useCallback} from "react";
import MobileDetection from "../components/utilities/MobileDetection";
import Login from "../components/user/Login";


function LockScreen() {

    const [isMobile, setIsMobile] = useState(false);

    const handleMobileDetection = useCallback((mobile) => {
        setIsMobile(mobile);
    });

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

        <div className="bg-black w-full h-screen blur-sm absolute" style={{background : "url(https://images8.alphacoders.com/134/1346089.png)  no-repeat center center", backgroundSize : "cover"}}></div>

        <div className="absolute left-0 top-0 h-screen w-full flex flex-col items-center z-10">
            <Login />
        </div>
        </>
    )
}

export default LockScreen;