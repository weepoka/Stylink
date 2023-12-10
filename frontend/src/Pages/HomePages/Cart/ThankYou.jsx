import { Link } from "react-router-dom";

import Confetti from "react-confetti";
import { useEffect, useState } from "react";

const ThankYou = () => {
  const [confetti, setConfetti] = useState(false);

  const confettiConfig = {
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  };
  useEffect(() => {
    setConfetti(true);

    // Trigger confetti when the component is mounted
    return () => {
      // Reset confetti after a delay
      setTimeout(() => {
        setConfetti(false);
      }, 6000);
    };
  }, []);

  return (
    <div className="flexCenter z-[999999]">
      <div>
        {confetti && (
          <Confetti {...confettiConfig} className="w-full h-full z-[999999]" />
        )}
        <div className="bg-gray-100  mt-20">
          <div className="bg-white p-6 h-[60vh]  md:mx-auto">
            <svg
              viewBox="0 0 24 24"
              className="text-green-600 w-16 h-16 mx-auto my-6"
            >
              <path
                fill="currentColor"
                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
              ></path>
            </svg>
            <div className="text-center">
              <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
                Order Placement Done!
              </h3>
              <p className="text-gray-600 my-2">
                Thank you for completing your Details.
              </p>
              <p> Have a great day! </p>
              <div className="py-10 text-center">
                <Link
                  to="/"
                  className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3"
                >
                  Go Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default ThankYou;
