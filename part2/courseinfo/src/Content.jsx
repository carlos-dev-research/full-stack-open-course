import Course  from "./Course"

const Content = ({courses}) => {
    return (
        <div>
            <ul>
                {courses.map(course =>
                    <Course key={course.id} {...course}/>
                )}
            </ul>
        </div>
        
    )
}



export default Content