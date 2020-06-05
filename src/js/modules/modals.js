export function modals(triggerSelector, modalSelector, closeSelector) {
	function bindModal() {
		const trigger = document.querySelectorAll(triggerSelector),
			modal = document.querySelector(modalSelector),
			close = document.querySelector(closeSelector)

		trigger.forEach((elem) => {
			elem.addEventListener("click", (e) => {
				if (e.target) e.preventDefault()

				modal.style.display = "block"
				document.body.style.overflow = "hidden"
			})
		})

		close.addEventListener("click", () => {
			modal.style.display = "none"
			document.body.style.overflow = ""
		})

		modal.addEventListener("click", (e) => {
			if (e.target === modal) {
				modal.style.display = "none"
				document.body.style.overflow = ""
			}
		})
	}

	function showModalByTime(selector, time) {
		setTimeout(() => {
			document.querySelector(selector).style.display = "block"
			document.body.style.overflow = "hidden"
		}, time)
	}

	// showModalByTime(".popup", 2000)

	bindModal(triggerSelector, modalSelector, closeSelector)
}
