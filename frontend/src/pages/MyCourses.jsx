import React, { useEffect } from "react";
import CourseCard from "../components/CourseCard";
import Container from "../components/Container";
import { useRecoilState } from "recoil";
import { userAtom } from "../atoms/userAtom";
import { useNavigate } from "react-router-dom";

function MyCourses() {
	const [data, setData] = React.useState([]);

	const [user, setUser] = useRecoilState(userAtom);

	const navigate = useNavigate();

	useEffect(() => {
		if (!user) return navigate("/authUser");

		fetch("/api/user/my-courses")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setData(data.data);
			});
	}, [navigate, user]);

	console.log(user);

	return (
		<Container>
			<div className="grid grid-cols-1 md:grid-cols-4  gap-5">
				{data.map((course, index) => {
					return (
						<div
							className="mx-auto flex justify-items-start"
							key={index}
						>
							<CourseCard
								delay={0}
								btnText={"Go to Course"}
								key={course.id}
								title={course.title}
								src={course.src}
								description={course.description}
								price={course.price}
							/>
						</div>
					);
				})}
			</div>
		</Container>
	);
}

export default MyCourses;
