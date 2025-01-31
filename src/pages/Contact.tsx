import { useForm } from '@formspree/react'

function Contact() {
  const [state, handleSubmit] = useForm(
    `${import.meta.env.VITE_FORMSPREE_CODE}`
  )

  if (state.succeeded) {
    return (
      <p className='z-10 text-white text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl text-center font-koulen'>
        Thanks for your subscription! <br className='xl:hidden' />
        Stay tuned for updates.
      </p>
    )
  }

  return (
    <div className='px-0 py-0 md:px-12 xl:px-32 xl:pt-14 2xl:pt-40'>
      <div className='px-6 py-6 xl:px-20 xl:py-20 bg-primary-600 rounded-xl relative max-w-[108.75rem] 2xl:mx-auto'>
        <h2 className='text-4xl text-center md:text-left text-white xl:text-6xl uppercase font-semibold font-lexend'>
          Contact us!
        </h2>
        <p className='text-white font-lexend mt-6 xl:text-2xl w-full md:w-[39.25rem]'>
          We are here to assist you with any questions, concerns, or feedback
          regarding Skilldor. Feel free to reach out to us:
        </p>
        <form
          className='grid gap-4 mt-9 w-full md:w-[39.25rem]'
          onSubmit={handleSubmit}>
          <input
            className='h-12 rounded-lg px-4 placeholder:text-sm'
            type='text'
            name='name'
            placeholder='Your name'
          />
          <input
            className='h-12 rounded-lg px-4 placeholder:text-sm'
            type='email'
            name='email'
            placeholder='Your email'
          />
          <textarea
            className='resize-none sm:col-start-1 sm:col-end-3 rounded-lg py-3 px-4 placeholder:text-sm'
            id='contactForm'
            name='message'
            rows={5}
            placeholder='Your message'
          />
          <button className='sm:col-start-1 sm:col-end-3 rounded-lg bg-primary-300 h-12 font-medium text-sm'>
            Send
          </button>
        </form>
        <img
          src='/Basketball_ball.svg'
          alt='ball'
          className='absolute w-28 -top-20 -right-4 sm:-top-7 sm:-right-4 sm:w-28 lg:w-72 lg:-top-20 lg:-right-12 xl:w-80 xl:-top-20 xl:-right-18 2xl:w-[39.25rem] 2xl:-top-40 2xl:-right-24'
        />
      </div>
    </div>
  )
}

export default Contact
