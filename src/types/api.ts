export interface ModalProps {
	children: React.ReactNode
	setModal: (isOpen: boolean) => void
}

export interface CookiesModalProps {
	children: React.ReactNode
	handleAfterClick: () => void
}
