export function modals(
	triggerSelector,
	modalSelector,
	closeSelector,
	closeClick = true
) {
	function bindModal() {
		const trigger = document.querySelectorAll(triggerSelector),
			modal = document.querySelector(modalSelector),
			close = document.querySelector(closeSelector),
			dataClose = document.querySelectorAll("[data-modal]")

		trigger.forEach((elem) => {
			elem.addEventListener("click", (e) => {
				if (e.target) e.preventDefault()

				dataClose.forEach((elem) => (elem.style.display = "none"))

				modal.style.display = "block"
				document.body.style.overflow = "hidden"
			})
		})

		close.addEventListener("click", () => {
			dataClose.forEach((elem) => (elem.style.display = "none"))

			modal.style.display = "none"
			document.body.style.overflow = ""
		})

		modal.addEventListener("click", (e) => {
			if (e.target === modal && closeClick) {
				dataClose.forEach((elem) => (elem.style.display = "none"))
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
