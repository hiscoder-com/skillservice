import { useLottie } from "lottie-react";
import animationData from "../assets/animations/data.json";

const Lottie = () => {
  const options = {
    animationData: animationData,
    loop: true
  };

  const { View } = useLottie(options);

  return <div className='animate-display absolute -top-[9vh] -right-16 w-[40vh] md:w-[40vh] md:-right-[8vh] xl:-right-[10vh] xl:w-[70vh] 2xl:-right-[19vh] 2xl:w-[87vh] 2xl:-top-[22vh]'>{View}</div>;
};

export default Lottie;
