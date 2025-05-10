import type firebase from "firebase/compat/app";
import { Link } from "react-router-dom";

type NavbarProps = {
    user: firebase.User | null;
};

const Navbar = ({ user } : NavbarProps) => {
	return (
		<nav className="bg-gray-900 px-4 py-6 flex items-center justify-between">
			<div className="flex space-x-5 max-w-md mx-auto">
				{!user && (
					<>
						<Link
							to="/login"
							className="text-blue-400 hover:underline font-medium"
						>
							Login
						</Link>
						<Link
							to="/signup"
							className="text-blue-400 hover:underline font-medium"
						>
							Sign Up
						</Link>
					</>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
