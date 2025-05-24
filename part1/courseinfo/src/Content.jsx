const Content = (props) => {
    return (
        <div>
            <Part {...props.content1}/>
            <Part {...props.content2}/>
            <Part {...props.content3}/>
        </div>
        
    )
}

const Part = (props) =>{
    return (
        <p>
            {props.part} {props.exercises}
        </p>
    )
}

export default Content