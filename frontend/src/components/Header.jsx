import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userAtom } from "../atoms/userAtom";
import { uploaderAtom } from "../atoms/uploaderAtom";

function Header() {
	const [user, setUser] = useRecoilState(userAtom);
	const [uploader, setUploader] = useRecoilState(uploaderAtom);

	return (
		<div className="bg-[#f8c365] w-full flex justify-between md:px-36 p-5 font-[poppins]">
			<div className="flex justify-between items-center font-semibold text-sm gap-5">
				<ul className="hidden md:flex gap-5">
					<li>
						<Link to={"/"}>Home</Link>
					</li>
					{!uploader && <li>
						<Link to={"/courses"}>Courses</Link>
					</li>
					}
					{user && !uploader && <li>
						<Link to={"/mycourses"}>My Courses</Link>
					</li>
					}
					{uploader && 
					<li>
						<Link to={"/instructor/dashboard"}>Dashboard</Link>
					</li>
					}
					{uploader &&
					<li>
						 <Link to={"/instructor/upload-course"}>Upload Course</Link>
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
