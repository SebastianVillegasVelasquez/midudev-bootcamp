const Content = ({part1,part2,part3,exercises1,exercises2,exercises3}) => {
    const Part = ({parte, exercise}) =>
        <p>{parte}: {exercise} </p>

    return (
        <div>
            <Part parte={part1} exercise={exercises1}></Part>
            <Part parte={part2} exercise={exercises2}></Part>
            <Part parte={part3} exercise={exercises3}></Part>

        </div>
    )
}

export default Content;