import { useState, useEffect } from "react";
import image1 from "../assets/heroImage1.jpg";
import image2 from "../assets/heroImage2.jpg";

import image4 from "../assets/heroImage4.jpg";

const images = [image1, image2, image4];
const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const updateImage = () => {
      setCurrentImage((prevImage) =>
        prevImage === images.length - 1 ? 0 : prevImage + 1
      );
    };
    const interval = setInterval(updateImage, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-b from-slate-800 to-slate-600  flex items-center justify-center py-20  px-10">
      <div className="grid grid-cols-2 gap-6">
        <div className="mx-20 mt-5 flex flex-col ">
          <h1 className=" text-gray-200 text-5xl font-extrabold mb-4">
            You&apos;re in good <span className="text-yellow-600">Hands</span>{" "}
            on our Watch
          </h1>
          <div className="mt-20">
            <button className="bg-gray-800 py-3 px-5 text-gray-100 font-semibold rounded-lg border-b-2 border-yellow-600 hover:bg-gradient-to-t from-yellow-600 via-yellow-600 to-gray-800">
              Shop now &gt;
            </button>
          </div>
        </div>

        <div className="shadow-2xl shadow-gray-600">
          <img
            src={images[currentImage]}
            alt={`Image ${currentImage + 1}`}
            className=" rounded-lg bg-transparent"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
