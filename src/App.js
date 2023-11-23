import logo from './logo.svg';
import './App.css';
import HeaderBlock from './components/header/HeaderBlock';
import LeftContentBlock from './components/leftContent/LeftContentBlock';
import RightContentBlock from './components/rightContent/RightContentBlock';
import FooterBlock from './components/footer/FooterBlock';

function App() {
  return (
    <div className="App">
      <span className='redL light'/>
      <span className='purplL light'/>
      <img src="purple ball.png" className='purpl ball'/>
      <img src="red ball.png" className='red ball'/>
      <img src="red ball (1).png" className='redSmall ball'/>
      <div className='mainBody'>
        <HeaderBlock/>
        <div className='mainContent'>
          <LeftContentBlock/>
          <RightContentBlock/>
        </div>
        <FooterBlock/>
      </div>
    </div>
  );
}

export default App;
