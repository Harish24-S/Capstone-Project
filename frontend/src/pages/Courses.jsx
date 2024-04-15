import React, { useEffect } from "react";
import CourseCard from "../components/CourseCard";
import Container from "../components/Container";

function Courses() {
	const [data, setData] = React.useState([]);

	useEffect(() => {
		fetch("/api/user/all-courses")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setData(data.data);
			});
	}, []);

	return (
		<Container>
			<div className="flex justify-center pb-10">
				<div className=" w-[100%] md:w-[50%]  flex justify-between overflow-hidden rounded-xl bg-white">
					<input
						className="p-2 rounded-full flex-1 outline-none"
						type="Search"
						placeholder="Search Course Category..."
					/>
					<button className="px-2">Search</button>
				</div>
			</div>
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

export default Courses;
