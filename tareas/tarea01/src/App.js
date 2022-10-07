import './App.css';
import Header from './componentes/header/Header';
import Body from './componentes/body/Body';
import Footer from './componentes/footer/Footer';
import Modals from './componentes/Modal/Modals';

function App() {
  return (
    <>
    <hr/>
    <Modals />
    <hr/>
    {/* <div className="App">
    <div className='App-header'>
    <Header text={'My first react App'}/>
    </div>
    <div className='App__body'>
    <Body />
    </div>
    <div className='App__footer'>
    <Footer />
    </div>
    </div> */}
    </>
  );
}

export default App;
