import React from 'react'

const App = () => {
    const [time, setTime] = React.useState(new Date())

    React.useEffect(() => {
        setInterval(() => {
            setTime(_oldTime => new Date())
        }, 1000)
    }, [])
    
    return (
        <div>
            <h1>You are in {time.getFullYear()}</h1>
            <hr />
            <h1>The time is
                {
                    time.getHours().toString().padStart(2, '0') + ":" +
                    time.getMinutes().toString().padStart(2, '0') + ":" +
                    time.getSeconds().toString().padStart(2, '0')
                }
            </h1>
        </div>
    )
}

export default App
