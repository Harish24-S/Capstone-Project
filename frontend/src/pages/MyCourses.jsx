import React from 'react'
import CourseCard from '../components/CourseCard'
import Container from '../components/Container'

function MyCourses() {
    const data = [
        { id: 1, title: 'React', description: 'Learn React', price: 1500, src: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { id: 2, title: 'Nodejs', description: 'Learn Node', price: 1200, src: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },

    ]
    return (
        <Container>
            
            <div className='grid grid-cols-1 md:grid-cols-4  gap-5'>
                {
                    data.map((course) => {
                        return(
                            <div className='mx-auto flex justify-items-start'>
                            <CourseCard delay={0} btnText={"Go to Course"} key={course.id} title={course.title} src={course.src} description={course.description} price={course.price} />
                            </div>
                        ) 
                    })
                }
            </div>
        </Container>
    )
}

export default MyCourses