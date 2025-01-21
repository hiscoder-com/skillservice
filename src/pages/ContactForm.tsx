import { useForm } from '@formspree/react'

function ContactForm() {
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
		<form
			className=' pt-10 flex flex-col gap-3 items-center'
			onSubmit={handleSubmit}>
			<label>
				<span>Name</span>
				<input className='border' type='text' name='name' />
			</label>
			<label>
				<span>Email</span>
				<input className='border' type='email' name='email' />
			</label>
			<label>
				<span>Message</span>
				<textarea
					className='border resize-none'
					id='contactForm'
					name='message'
					rows={5}
				/>
			</label>
			<button className='border'>Send</button>
		</form>
	)
}

export default ContactForm
