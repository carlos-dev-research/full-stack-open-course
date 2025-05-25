const Feedback = (props) => {
    return (
        <div>
            <h1>give feedback</h1>
            <button onClick={props.good}>good</button>
            <button onClick={props.neutral}>neutral</button>
            <button onClick={props.bad}>bad</button>
        </div>
        
    )
}

export default Feedback