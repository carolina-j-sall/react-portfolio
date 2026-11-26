// This is a testpage for React lessons

function Events () {
	const handleEvent = () => {
		console.log("You clicked me");
	}

	return (
		<div>
			<button className="home-btn" onClick={handleEvent}>Click me</button>
		</div>
	)
}

export default Events;
