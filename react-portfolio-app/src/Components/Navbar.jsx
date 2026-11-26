import { Link } from "react-router-dom";

function Navbar () {
	return (
		<>
			<nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/project">Project</Link></li>
          <li><Link to="/events">Events test page</Link></li>
        </ul>
      </nav>
		</>
	)
}

export default Navbar;
