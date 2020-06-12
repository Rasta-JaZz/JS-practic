export function changeModalState(state) {
	const windowForm = document.querySelectorAll(".balcon_icons_img"),
		windowWidth = document.querySelectorAll("#width"),
		windowHeight = document.querySelectorAll("#height"),
		windowType = document.querySelectorAll("#view_type"),
		windowCheckbox = document.querySelectorAll(".checkbox")

	function bindAction(event, elements, prop) {
		elements.forEach((item, i) => {
			item.addEventListener(event, () => {
				switch (item.nodeName) {
					case "SPAN":
						state[prop] = i
						break
					case "INPUT":
						if (item.getAttribute("type") === "checkbox") {
							i === 0 ? (state[prop] = "холодное") : (state[prop] = "теплое")
							elements.forEach((box, j) => {
								box.checked = false
								if (i === j) return (box.checked = true)
							})
						} else {
							isNaN(item.value) ? (item.value = "") : (state[prop] = item.value)
						}
						break
					case "SELECT":
						state[prop] = item.value
						break
				}
				console.log(state)
			})
		})
		return bindAction
	}

	bindAction("click", windowForm, "form")("input", windowWidth, "width")(
		"input",
		windowHeight,
		"height"
	)("change", windowType, "type")("change", windowCheckbox, "checkbox")
}
