

{/*react components are all capitalized*/}
{/*In React, the individual things rendered in braces must be primitive values, such as numbers or strings.*/}
import { useState } from 'react'
{/*In React, useState, as well as any other function starting with “use”, is called a Hook.
Hooks are special functions that are only available while React is rendering
(which we’ll get into in more detail on the next page).
They let you “hook into” different React features.
When you call useState, you are telling React that you want this component to remember something:
*/}
{/*'s recommended to write React components that are small
and reusable across the application and even across projects.*/}
{/*     it is forbidden in React to mutate state directly   */}
const Display = (props) => {
    return (
        <div>{props.counter}</div>
    )
}



const Header= (obj)=>{
    return (
        <h1>{obj.course}</h1>
    )
}
const Total = ({number})=>{
return (
    <p>
    Number of exercises: {number[0].exercises+number[1].exercises+number[2].exercises}
    </p>
)
}

const Content = ({ar}) => {
    return (
        <div>
            <p>{ar[0].name}: {ar[0].exercises}</p>
            <p>{ar[1].name}: {ar[1].exercises}</p>
            <p>{ar[2].name}: {ar[2].exercises}</p>
        </div>
    );
}
const App = (counter) => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    return (
        <div>
            <Header course={course.name}/>
            <Content ar={course.parts} />
            <Total number={course.parts}/>
        </div>
    )
}


export default App