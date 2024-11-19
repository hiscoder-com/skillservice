import { useLottie } from "lottie-react";
import animationData from "../assets/animations/data.json";

const Lottie = () => {
  const options = {
    animationData: animationData,
    loop: true
  };

  const { View } = useLottie(options);

  return <div className='absolute -top-[9vh] -left-16 w-[40vh] md:w-[40vh] md:-left-20 xl:w-[70vh] 2xl:w-[87vh] 2xl:-top-[22vh]'>{View}</div>;
};

export default Lottie;
