import React, { useEffect, useMemo, useState, useRef } from "react";
import Torch from "../components/apps/Torch";

function Main() {
  const constraintsRef = useRef(null);
  const [isSleeping, setIsSleeping] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [actionType, setActionType] = useState(null);

  const [windows, setWindows] = useState({
    menu: false,
    start: false,
    explorer: false,
    browser: false,
    calculator: false,
    vscode: false,
    recycle: false,
    app: false,
  });

  const [aboutMe, setAboutMe] = useState(null);
  const [input, setInput] = useState(null);

  const toggleWindow = (window, input = null) => {
    setWindows({
      menu: false,
      start: false,
      explorer: false,
      browser: false,
      calculator: false,
      vscode: false,
      recycle: false,
      app: false,
      [window]: !windows[window],
    });

    if (window === "explorer" && input !== null) {
      setAboutMe(input);
    } else if (window === "app" && input !== null) {
      setInput(input);
    }
  };

  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const bounds = {
    left: 0,
    top: 0,
    right: screenWidth - 1128,
    bottom: screenHeight - 624,
  };

  function handleFadeOutClick() {
    setFadeOut(true);
    setTimeout(() => {
      setIsSleeping(false);
      setFadeOut(false);
    }, 1000);
  }

  const images = useMemo(() => [
    "/images/fun/1.gif",
    "/images/fun/2.jpg",
    "images/fun/3.jpg",
    "images/fun/4.jpg",
  ]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      {isSleeping && (
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black transition-opacity duration-1000 ease-in-out ${
            fadeOut ? "opacity-0" : "opacity-100"
          } z-50`}
          onClick={handleFadeOutClick}
        >
            {actionType === "sleep" && (
                <div className="flex flex-col gap-4 justify-center items-center w-full h-screen">
                    <img src={images[currentImageIndex]} alt="Random" className="w-64 h-64 object-cover rounded-lg shadow-lg" />
                    <div>Windows is now sleeping💤</div>
                    <audio src="/audio/sleep.mp3" autoPlay loop />
                    <audio src="/audio/lullaby.mp3" autoPlay loop />
                </div>
            )}

            {actionType === 'shutdown' && (
                <div className="flex flex-col gap-4 justify-center  items-center w-full h-screen">

                    <img src="images/fun/xp.jpg" alt="Random" className="w-1/2 h-1/2 object-cover rounded-lg shadow-lg" />
                    <div>BYE BYE👋🏻</div>
                    <audio src="/audio/shutdown.mp3" autoPlay />

                </div>
            )}
        </div>
      )}

      <Torch input={input} setInput={setInput} />
    </>
  );
}

export default Main;
