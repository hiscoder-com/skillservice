import { useForm } from '@formspree/react'

function Form() {
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
		<div className='w-full px-4 z-10 md:flex md:items-center md:gap-[3vh] md:px-6 justify-between xl:px-14 xl:gap-0 2xl:px-32'>
			<h3 className='text-white font-lexend text-[3.4vh] font-semibold text-center md:text-[7.18vw] md:text-left md:leading-[1.1] xl:text-[5vw] 2xl:text-[4.8vw]'>
				Coming this Winter 2025
			</h3>
			<form
				onSubmit={handleSubmit}
				className='w-full bg-primary-400 p-6 rounded-2xl text-center mt-[1vh] md:mt-0 md:w-[40.7rem] xl:w-[23rem]'>
				<h4 className='text-white font-sourGummy text-[3.14vh] md:text-[2.51vh] leading-none xl:text-2xl'>
					Subscribe for updates
				</h4>
				<input
					name='email'
					type='email'
					placeholder='Your email'
					className='w-full placeholder:text-sm placeholder:font-lexend p-[1.5vh] h-[6.29vh] rounded-lg text-sm mt-[3.14vh] md:mt-[2.51vh] md:h-[5.03vh] md:p-[1.11vh] xl:mt-4 xl:h-12'
				/>
				<button className='w-full bg-primary-300 h-[6.29vh] hover:bg-primary-200 active:bg-primary-100 rounded-lg mt-[2.09vh] font-lexend text-sm md:mt-[1.67vh] md:h-[5.03vh] xl:h-12 xl:mt-4'>
					Join wishlist
				</button>
			</form>
		</div>
	)
}

export default Form
