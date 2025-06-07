const Course = ({name, id, parts}) =>{
    return (
            <div>
                <h1>{name}</h1>
                <ul>
                    {parts.map(part =>
                        <li key={part.id}>
                            <Part part={part}/>
                        </li>
                    )}
                </ul>
                <p><b>Total of {parts.reduce((total,part) => part.exercises + total, 0 )} exercises</b></p>

            </div>
            
        )
} 

const Part = ({part}) =>{
    return (
        <p>
            {part.name} {part.exercises}
        </p>
    )
}

export default Course