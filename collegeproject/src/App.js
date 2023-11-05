import './App.css';
import Outer from './component/OuterHeaderSlider'
import Navigation from './component/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './component/Slider';

function App() {
  return (
    <div className="App">
     <Outer>
       <Navigation></Navigation>
       <Slider></Slider>
     </Outer>
    </div>
  );
}

export default App;
