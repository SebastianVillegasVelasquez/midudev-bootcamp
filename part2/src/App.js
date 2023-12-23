import './App.css';
import {useState} from "react";
import "./App.css"

const Stadistics = ({good, neutral, bad}) => {
    return (
        <>
            <h2>Statistics</h2>
            <table>
                <tbody>
                <tr>
                    <td>Good</td>
                    <td>{good}</td>
                </tr>
                <tr>
                    <td>Neutral</td>
                    <td>{neutral}</td>
                </tr>
                <tr>
                    <td>Bad</td>
                    <td>{bad}</td>
                </tr>
                <tr>
                    <td>All:</td>
                    <td>{allFeedback(good, neutral, bad)}</td>
                </tr>
                <tr>
                    <td>Average:</td>
                    <td>{calculateAverage(good, neutral, bad)}</td>
                </tr>
                <tr>
                    <td>Positive:</td>
                    <td>{positive(good, neutral, bad)}%</td>
                </tr>
                </tbody>
            </table>
        </>
    )
}
const statdisticsResponse = (good, neutral, bad) => {
    if (good === 0 && neutral === 0 && bad === 0) {
        return 0;
    }
}

const FeedBackResponse = () => <h2>No Feedback given</h2>
const calculateAverage = (good, neutral, bad ) =>{
    return (good + neutral + bad) / 3;
}
const allFeedback = (good, neutral, bad) => {
    return good + neutral + bad
}

function positive(good, neutral, bad) {
    if (good + neutral + bad === 0) {
        return 0
    }
    return (good * 100) / (good + neutral + bad)
}

function App() {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [selected, setSelected] = useState(0)
    const points = [0,0,0,0,0]
    const copy = [...points]
    const voteAnecdotas = () =>{
        copy[selected] += 1
    }

    const handleGood = () => setGood(good + 1)
    const handleNeutral = () => setNeutral(neutral + 1)
    const handleBad = () => setBad(bad + 1)

    const numeroAleatorio = () => Math.floor(Math.random() * anecdotes.length)
    const handleSelected = () => setSelected(numeroAleatorio)


    return (
        <div className="App">
            <h1>GIVE FEEDBACK</h1>
            <button onClick={handleGood}>Good</button>
            <button onClick={handleNeutral}>Neutral</button>
            <button onClick={handleBad}>Bad</button>
            {statdisticsResponse(good, neutral, bad) === 0 ?
            <FeedBackResponse/> : <Stadistics good={good} neutral={neutral} bad={bad}/>}
            <h3>Anecdotas:</h3>
            <p>{anecdotes[selected]}</p>
            <button onClick={handleSelected}>Next anecdota</button>
            <button onClick={voteAnecdotas}>Vote</button>
            <p>points: {points[0]}</p>
        </div>
    );
}
export default App;
