import React, { useEffect, useState } from 'react';

function PaymentConfirmation() {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Simulate a delay to show the animation
    setTimeout(() => {
      setAnimationComplete(true);
    }, 1000); // You can adjust the duration as needed
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-400">
      {animationComplete ? (
        <div className="text-white text-4xl">
            <div className="w-48 h-48 rounded-full bg-white flex items-center justify-center relative mb-4 ml-14">            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-36 h-36 text-green-500 animate-tick absolute"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.293 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className='mr-5'>
          Payment Successful!!
          </div>
        </div>
      ) : (
        <div className="text-white text-4xl">Processing Payment...</div>
      )}
    </div>
  );
}

export default PaymentConfirmation;
