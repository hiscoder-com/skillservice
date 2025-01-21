import { Route, Routes } from 'react-router-dom'

import Layout from './Layout'

import HomePage from './pages/HomePage.jsx'
import Legal from './pages/Legal.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import Terms from './pages/Terms.jsx'
import ContactForm from './pages/ContactForm.jsx'
import NotFound from './pages/NotFound.jsx'

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
