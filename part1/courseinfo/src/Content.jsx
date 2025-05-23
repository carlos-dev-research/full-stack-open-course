const Content = (props) => {
    return (
        <div>
            <Part part={props.parts[0]}/>
            <Part part={props.parts[1]}/>
            <Part part={props.parts[2]}/>
        </div>
        
    )
}

const Part = (props) =>{
    return (
        <p>
            {props.part.name} {props.part.exercises}
        </p>
    )
}

export default Content