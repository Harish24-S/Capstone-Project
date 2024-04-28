import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userAtom } from "../atoms/userAtom";
import { uploaderAtom } from "../atoms/uploaderAtom";
import "/Users/harish/Documents/GitHub/Capstone-Project/frontend/src/App.css"

function Header() {
	const [user, setUser] = useRecoilState(userAtom);
	const [uploader, setUploader] = useRecoilState(uploaderAtom);

	return (
		<div className="bg-[#f8c365] w-full flex justify-between md:px-36 p-5 font-[poppins]">
			<div className="flex justify-between items-center font-semibold text-sm gap-5">
				<ul className="hidden md:flex gap-5">
					<li>
						<NavLink to={"/"} activeClassName='active'>Home</NavLink>
					</li>
					{!uploader && <li>
						<NavLink to={"/courses"} activeClassName='active'>Courses</NavLink>
					</li>
					}
					{user && !uploader && <li>
						<NavLink to={"/mycourses"} activeClassName='active' >My Courses</NavLink> 
					</li>
					}
					{uploader && 
					<li>
						<NavLink to={"/instructor/dashboard"} activeClassName='active'>Dashboard</NavLink>
					</li>
					}
					{uploader &&
					<li>
						 <NavLink to={"/instructor/upload-course"} activeClassName='active'>Upload Course</NavLink>
					</li>
					}
				</ul>
			</div>
			<div className="font-bold text-2xl">Eduwave</div>

			<div className="flex justify-between items-center font-semibold text-sm gap-5 ">
				{user || uploader ? (
					<button
						className="bg-black rounded-full px-5 py-2 text-white hidden md:inline-block"
						onClick={() => {
							setUser(null);
							setUploader(null);
							user && fetch("/api/user/logout");
							uploader && fetch("/api/uploader/logout");
						}}
					>
						<Link to={"/"}>Logout</Link>
					</button>
				) : (
					<button className="bg-black rounded-full px-5 py-2 text-white hidden md:inline-block">
						<Link to={"/auth"}>Login</Link>
					</button>
				)}
			</div>
		</div>
	);
}

export default Header;
