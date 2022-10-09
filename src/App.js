import './index.css'
import './mobile.css'
import {ReactComponent as Jupiter} from  './SVGs/Jupiter.svg'
import {ReactComponent as Zenitsu} from  './SVGs/Zenitsu_1.svg'
import {ReactComponent as Girl} from  './SVGs/Girl.svg'
import  Stars from  './SVGs/Stars.svg'
import  Space from  './SVGs/Space.svg'



function App() {
  return (
    <div className="App">
        <div className="window2">
          <div className="title">
          <h2>Thunderclap & Flash</h2>
          <h6>Made with: Illustrator and CSS</h6>
          <h2 className="japnease-title">雷 <br /> の <br /> 呼 <br /> 吸</h2>
          </div>
          <Zenitsu className='Zenitsu' />
          <h2 className="japnease-title reflection">雷 <br /> の <br /> 呼 <br /> 吸</h2>
          <Zenitsu className='reflection' />
          <div className="White"></div>
        </div>
        <div className="window">
          <div className="title"> 
          <h2>The Jupiter POV</h2>
          <h6>Made with: Illustrator and CSS</h6>
          </div>
            <img src={Stars} alt='' className='stars' />
            <img src={Space} alt='' className='space' />
            <Jupiter className='jupiter' />
        </div>
        <div className="window3">
              <Girl />
        </div>
    </div>
  );
}

export default App;
