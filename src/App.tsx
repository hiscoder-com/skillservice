import { Route, Routes } from 'react-router-dom'

import Layout from './Layout.js'

import HomePage from './pages/HomePage.js'
import Legal from './pages/Legal.js'
import PrivacyPolicy from './pages/PrivacyPolicy.js'
import Terms from './pages/Terms.js'
import ContactForm from './pages/ContactForm.js'
import NotFound from './pages/NotFound.js'

function App() {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route element={<Layout />}>
				<Route path='/legal' element={<Legal />} />
				<Route path='/privacy-policy' element={<PrivacyPolicy />} />
				<Route path='/terms' element={<Terms />} />
				<Route path='/contact-form' element={<ContactForm />} />
				<Route path='*' element={<NotFound />} />
			</Route>
		</Routes>
	)
}

export default App
