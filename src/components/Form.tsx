function Form() {
	return (
		<div className='w-full px-4 z-10 md:flex md:items-center md:gap-[3vh] md:px-6 justify-between xl:px-14 xl:gap-0 2xl:px-32'>
			<h3 className='uppercase text-white font-koulen text-[3.5vh] text-center md:text-[9.59vw] md:text-left md:leading-[0.9] xl:text-[6.7vw] 2xl:text-[5.3vw]'>
				Coming this Winter 2025
			</h3>
			<form className='w-full bg-primary-400 p-6 rounded-2xl text-center mt-[1vh] md:mt-0 md:w-[42.1rem] lg:w-[47rem] xl:w-96'>
				<h4 className='text-white font-lexend text-[2vh] md:text-[1.9vh] leading-none xl:text-2xl'>
					Subscribe for updates
				</h4>
				<input
					type='email'
					placeholder='Your email'
					className='w-full placeholder:text-sm placeholder:font-lexend p-[1.48vh] rounded-lg text-sm mt-[1.48vh] md:mt-[1.8vh] md:p-[1.11vh] xl:p-3.5 xl:mt-4'
				/>
				<button className='w-full bg-primary-300 h-[5.4vh] hover:bg-primary-200 active:bg-primary-100 rounded-lg mt-[1.48vh] font-lexend text-sm md:mt-[1.27vh] md:h-[3.82vh] xl:h-12 xl:mt-4'>
					Join wishlist
				</button>
			</form>
		</div>
	)
}

export default Form
