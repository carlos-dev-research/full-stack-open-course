const Statistics = (props) => {

    if (props.all === 0){
        return (
            <div>
                <h1>statistics</h1>
                <p>No feedback given</p>
            </div>
            
        )
    }
    return (
        <div>
            <h1>statistics</h1>
            <table>
                <tbody>
                    <StatisticLine text="good" value={props.good}/>
                    <StatisticLine text="bad" value={props.bad}/>
                    <StatisticLine text="neutral" value={props.neutral}/>
                    <StatisticLine text="all" value={props.all}/>
                    <StatisticLine text="average" value={props.average.toFixed(2)}/>
                    <StatisticLine text="positive" value={props.positive.toFixed(1)+"%"}/>
                </tbody>
            </table>
            
        </div>
        
    )
}

const StatisticLine = (props) => {
    return (
        <tr>
            <td>{props.text}</td>
            <td>{props.value}</td>
        </tr>
    )
}

export default Statistics