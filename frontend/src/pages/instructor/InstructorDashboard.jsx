import React, { useState, useEffect, useCallback } from 'react';
import Container from '../../components/Container';
import CourseCard from '../../components/CourseCard';
import { useToast } from "@chakra-ui/react";


function InstructorDashboard() {
  const [data, setData] = useState([]);
  const toast = useToast({ isClosable: true });

  const handleDeleteCourse = (courseId) => {
    // Implement your delete course logic here
    // For example, send a delete request to the server
    // and then update the state to reflect the changes
      fetch(`/api/uploader/delete-course/${courseId}`,{
        method: 'DELETE'
      }).then(res=>res.json()).then(data=>{
        console.log(data)
        if(data.success){
          setData(prevData => prevData.filter(course => course._id !== courseId));
          toast({title: "Course Deleted", status: "success"})
        }
      })
    console.log("Deleting course with ID:", courseId);
  };


  useEffect(() => {
    fetch("/api/uploader/course/uploadedCourses")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setData(data.data);
      });
  }, []);

  return (
    <Container>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((course, index) => (
          <div key={index}>
            <CourseCard
              title={course.title}
              description={course.description}
              uploader={course.uploaderName}
              poster={course.poster}
              price={course.price}
              isUploader={true}
              handleDeleteCourse = {handleDeleteCourse}
              courseId={course._id}
            />
            
          </div>
        ))}
      </div>
    </Container>
  );
}

export default InstructorDashboard;
