import ReactDOM from 'react-dom/client'

import App from './App'
let counter=1
const root=
    ReactDOM.createRoot(document.getElementById('root')).render(<App counter={counter}/>)

const refresh = () => {
    root.render(
        <App counter={counter} />
    )
}

refresh()
counter += 1
refresh()
counter += 1
refresh()

{/*e. React waits until all code in the event handlers has run before processing your state updates.
This is why the re-render only happens after all these setNumber() calls.*/}