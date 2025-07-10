import { useState } from 'react'


const StatisticalLine = (props) =>{

return (

            <tr>
            <td>
            {props.text}
            </td>
            <td>
            {props.value}{props.percent}
            </td>
            </tr>

)



}


const Statistics = (props)=>{

    if(props.bad+props.neutral+props.good===0){

        return (
            <div>
                <h1>statisitics</h1>
                no feed has been given.
            </div>
        )


    }
    const all= props.good+props.neutral+props.bad
    return (
        <div>
        <h1>statisitics</h1>
           <table>
            <StatisticalLine text="good" value={props.good}></StatisticalLine><br />
            <StatisticalLine text="neutral" value={props.neutral}></StatisticalLine><br />
            <StatisticalLine text="bad" value={props.bad}></StatisticalLine><br />
            <StatisticalLine text="all" value={props.good+props.neutral+props.bad}></StatisticalLine><br />
            <StatisticalLine text="average" value={(props.good+-1*props.bad)/all}></StatisticalLine><br />
            <StatisticalLine text="positive" value={(props.good/(props.good+props.bad+props.neutral))*100} percent={"%"}></StatisticalLine><br />
            </table>
           </div>
    )
}



const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const handleGoodClick = ()=>{
        const goodNum=good+1
        setGood(goodNum)
    }
    const handleNeutralClick = () =>{
        const numNeutral=neutral+1
        setNeutral(numNeutral)
    }
    const handleBadClick = () =>{
        const numBad=bad+1
        setBad(numBad)
    }


    return (
        <div>
            <h1>Give feed</h1>
            <button onClick={handleGoodClick}>good</button>
            <button onClick={handleNeutralClick}>neutral</button>
            <button onClick={handleBadClick}>bad</button>
            <Statistics good={good}bad={bad}neutral={neutral} ></Statistics>
        </div>
    )
}


export default App