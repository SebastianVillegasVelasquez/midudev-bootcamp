import './App.css';
import Mensaje from './Mensaje'

function App() {


  return (
    <div className="App">
        <Mensaje color={'red'} message={'Hola'}/>
        <Mensaje color={'green'} message={'Desde'}/>
        <Mensaje color={'purple'} message={'Props'}/>
    </div>
  );
}

export default App;
