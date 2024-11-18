function Form() {
	return (
		<div className='w-full px-4 z-10'>
			<h3 className='uppercase text-white font-koulen text-[4.05vh]'></h3>
			<form className='w-full bg-primary-400 p-6 rounded-2xl text-center mt-3.5'>
				<h4 className='text-white font-lexend text-[2.7vh]'>
					Subscribe for updates
				</h4>
				<input
					type='email'
					placeholder='Your email'
					className='w-full placeholder:text-sm placeholder:font-lexend p-4 rounded-lg text-sm mt-6'
				/>
				<button className='w-full bg-primary-300 h-12 rounded-lg mt-4 font-lexend text-sm'>
					Join wishlist
				</button>
			</form>
		</div>
	)
}

export default Form
