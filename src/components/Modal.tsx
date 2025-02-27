import { ModalProps } from '../types/props'

export function Modal({ children, setModal }: ModalProps) {
  const closeModal = (e: React.MouseEvent<HTMLDivElement | SVGSVGElement>) => {
    if (e.target === e.currentTarget) {
      setModal(false)
    }
  }

  return (
    <div
      className='fixed inset-0 z-40 flex items-center justify-center overflow-y-auto bg-primary-500/90'
      onClick={closeModal}>
      <div className='relative bg-primary-400 rounded-lg p-3'>
        <div
          className='cursor-pointer absolute top-5 right-5 w-8'
          onClick={() => setModal(false)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 130 127'
            className='w-full h-full hover:fill-primary-200 fill-white'>
            <g clipPath='url(#a)'>
              <path
                d='M62.365 76.063c-11.22 10.044-22.192 19.773-33.054 29.624-6.293 5.707-12.36 11.661-18.638 17.382a20.422 20.422 0 0 1-5.685 3.759c-1.032.433-3.259 0-3.767-.793-.672-1.053-.473-2.921-.108-4.295.265-1.002 1.345-1.832 2.16-2.636a60156.31 60156.31 0 0 1 46.492-45.728c1.74-1.708 3.53-3.364 5.528-5.262-6.776-7.509-13.562-14.755-20.04-22.27-10.34-12-20.472-24.178-30.69-36.282-.37-.44-.69-.921-1.065-1.361C1.71 6.087.449 3.809 2.485 1.245c1.525-1.92 5.17-1.633 7.707.979 6.32 6.502 12.477 13.162 18.582 19.872 11.149 12.247 22.21 24.573 33.318 36.856.476.447.981.86 1.513 1.238 8.59-8.21 17.084-16.393 25.65-24.506a5536.558 5536.558 0 0 1 29.905-28.1c3.752-3.507 6.761-4.14 9.064-2.093 2.386 2.12 2.164 5.66-1.642 9.458-10.289 10.267-20.827 20.285-31.355 30.314-8.02 7.642-16.169 15.153-24.705 23.136 6.937 7.174 13.57 14.325 20.526 21.145 6.68 6.55 13.734 12.721 20.546 19.137a78.127 78.127 0 0 1 7.464 7.768c1.86 2.314 2.135 5.187-.152 7.47-2.254 2.251-4.863 1.456-7.037-.249a141.568 141.568 0 0 1-11.942-9.934c-11.62-11.381-23.036-22.97-34.526-34.484-.908-.91-1.777-1.864-3.036-3.19Z'
                className='pointer-events-none'
              />
            </g>
            <defs>
              <clipPath id='a'>
                <path d='M.777 0h129v127h-129z' />
              </clipPath>
            </defs>
          </svg>
        </div>
        {children}
      </div>
    </div>
  )
}
