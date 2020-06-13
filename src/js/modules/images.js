export function imageScale() {
	const imgPopup = document.createElement("div"),
		workSection = document.querySelector(".works"),
		bigImage = document.createElement("img")

	imgPopup.classList.add("popup")
	workSection.appendChild(imgPopup)

	imgPopup.style.justifyContent = "center"
	imgPopup.style.alignItems = "center"
	imgPopup.style.display = "none"
	// imgPopup.style.backgroundSize = "100px 200px"

	imgPopup.appendChild(bigImage)

	workSection.addEventListener("click", (e) => {
		e.preventDefault()

		let target = e.target
		if (target && target.classList.contains("preview")) {
			imgPopup.style.display = "flex"

			const path = target.parentNode.getAttribute("href")

			document.body.style.overflow = "hidden"
			document.body.style.marginRight = "15px"

			bigImage.setAttribute("src", path)
		}

		if (target.matches("div.popup")) {
			imgPopup.style.display = "none"
			document.body.style.overflow = ""
			document.body.style.marginRight = "0px"
		}
	})
}
