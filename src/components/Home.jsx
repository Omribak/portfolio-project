import { useEffect } from "react";
import { useState } from "react";

function Home() {
  const images = ["NodeJsLogo.png", "CSSLogo.webp", "HtmlLogo.png"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Function to update the current image index
    const nextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Set an interval to change the image every 5 seconds
    const interval = setInterval(nextImage, 3000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <div className="mt-20 text-blue-500 font-style: italic text-4xl font-extrabold">
        Hi , I am Omri Bakal
      </div>
      <div className="mt-10 text-white text-2xl font-extrabold">
        Web Applications Developer.
      </div>
      <div className="mt-3 text-white text-xl font-extrabold">
        developing applications in Javascript, CSS, HTML, React.
      </div>
      <div className="mt-5 flex justify-center items-center">
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          className="w-100 h-64 object-cover"
          style={{ background: "none" }}
        />
      </div>
    </div>
  );
}

export default Home;
