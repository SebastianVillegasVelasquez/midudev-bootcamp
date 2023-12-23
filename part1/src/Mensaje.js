const Saludo = (props) => {
    const {name, age} = props
    const getBornYear = () => new Date().getFullYear() - age;

    return(
        <div>
    <h1>Hello, {name}. Your age is {age}</h1>
    <h2>So, probably you born in {getBornYear()} </h2>
   </div>
    )
}

export  default Saludo;