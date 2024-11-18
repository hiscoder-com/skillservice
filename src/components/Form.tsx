function Form() {
	return (
		<div className='w-full px-4 z-10'>
			<h3 className='uppercase text-white font-koulen text-[3.5vh] text-center'>
				Coming this Winter 2025
			</h3>
			<form className='w-full bg-primary-400 p-[1.8vh] rounded-2xl text-center mt-[1vh]'>
				<h4 className='text-white font-lexend text-[2vh]'>
					Subscribe for updates
				</h4>
				<input
					type='email'
					placeholder='Your email'
					className='w-full placeholder:text-sm placeholder:font-lexend p-4 rounded-lg text-sm mt-[1.8vh]'
				/>
				<button className='w-full bg-primary-300 h-12 rounded-lg mt-4 font-lexend text-sm'>
					Join wishlist
				</button>
			</form>
		</div>
	)
}

export default Form
