export function timer(deadline) {
	const days = document.querySelector("#days"),
		hours = document.querySelector("#hours"),
		minutes = document.querySelector("#minutes"),
		seconds = document.querySelector("#seconds")

	const getTimeRemaining = (deadline) => {
		const t = Date.parse(deadline) - Date.parse(new Date()),
			second = Math.floor((t / 1000) % 60),
			minute = Math.floor((t / 1000 / 60) % 60),
			hour = Math.floor((t / (1000 * 60 * 60)) % 24),
			day = Math.floor(t / (1000 * 60 * 60 * 24))

		console.log(t)

		return {
			total: t,
			days: day,
			hours: hour,
			minutes: minute,
			seconds: second,
		}
	}

	const setClock = (deadline) => {
		const timeInterval = setInterval(updateClock, 1000)

		updateClock()

		function updateClock() {
			const t = getTimeRemaining(deadline)

			days.textContent = t.days
			hours.textContent = t.hours
			minutes.textContent = t.minutes
			seconds.textContent = t.seconds

			if (t.total <= 0) {
				days.textContent = "00"
				hours.textContent = "00"
				minutes.textContent = "00"
				seconds.textContent = "00"
				clearInterval(timeInterval)
			}
		}
	}
	setClock(deadline)
}
