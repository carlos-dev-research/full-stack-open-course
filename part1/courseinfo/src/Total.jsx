const Total = (props) => {
    return (
        <div>
            <p>Number of exercises {props.content1.exercises + props.content2.exercises + props.content3.exercises}</p>
        </div>
        
    )
}

export default Total