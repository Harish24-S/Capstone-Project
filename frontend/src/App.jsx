import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Courses from "./pages/Courses";
import AuthSelect from "./pages/AuthSelect";
import MyCourses from "./pages/MyCourses";
import Course from "./pages/Course";
import Footer from "./components/Footer";
import UserAuth from "./pages/UserAuth";
import InstructorAuth from "./pages/instructor/InstructorAuth";
import Video from "./pages/Video";
import { useRecoilState } from "recoil";
import { userAtom } from "./atoms/userAtom";
import { useEffect } from "react";
import { uploaderAtom } from "./atoms/uploaderAtom";

function App() {
	const [user] = useRecoilState(userAtom);
	const [uploader] = useRecoilState(uploaderAtom);

	useEffect(() => {
		if (user) {
			window.localStorage.setItem("user-edw", JSON.stringify(user));
		} else {
			window.localStorage.removeItem("user-edw");
		}
	}, [user]);

	useEffect(() => {
		if (uploader) {
			window.localStorage.setItem(
				"uploader-edw",
				JSON.stringify(uploader)
			);
		} else {
			window.localStorage.removeItem("uploader-edw");
		}
	}, [uploader]);

	return (
		<div className="w-full bg-[#f8c365] min-h-[100dvh]">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/courses" element={<Courses />} />
				<Route path="/auth" element={<AuthSelect />} />
				<Route path="/userAuth" element={<UserAuth />} />
				<Route path="/mycourses" element={<MyCourses />} />
				<Route path="/course/:id" element={<Course />} />
				<Route path="/videos/:courseId" element={<Video />} />

				<Route path="/instructorAuth" element={<InstructorAuth />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
