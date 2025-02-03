import { useLottie } from 'lottie-react'
import animationData from '../assets/animations/data.json'

interface LottieProps {
  centering: string
}

const Lottie = ({ centering }: LottieProps) => {
  const options = {
    animationData: animationData,
    loop: true,
  }

  const { View } = useLottie(options)

  const classes = centering
    ? 'animate-display w-[29.45vh] md:w-[32.5vh] xl:w-[73.2vh] 2xl:w-[87vh]'
    : 'animate-display absolute -top-[7vh] -right-3 w-[29.45vh] mt-[4vh] md:w-[32.5vh] md:-top-[8.5vh] md:-right-[4vh] xl:-right-[10vh] xl:w-[73.2vh] xl:-top-[20vh] 2xl:-right-[19vh] 2xl:w-[87vh] 2xl:-top-[22vh]'

  return <div className={classes}>{View}</div>
}

export default Lottie
