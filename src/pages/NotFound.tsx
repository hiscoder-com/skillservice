import Lottie from '../components/LottieAnimation'
import Title from '../components/Title'

function NotFound() {
  return (
    <div className='flex flex-col items-center relative'>
      <Title type='h2'>404: Not found page!!!</Title>
      <Lottie centering='center' />
    </div>
  )
}

export default NotFound
