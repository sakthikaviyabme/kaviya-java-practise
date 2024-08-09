
import Binding from './components/Binding';
import Childcomponent from './components/Childcomponent';
import { Greet } from './components/Greet';
import Hello from './components/Hello';
import NameList from './components/NameList';
import Parentgreet from './components/Parentgreet';
import Welcome from './components/Welcome';


function App() {
  return (
    <div className="App">
      {/* <h1>App component code</h1>
     <Welcome name='Roshith' profession='dev'>
        <p>He lives in hyderabad</p>
     </Welcome>
     <Hello name='kvcet' city='chennai'>
      <p>Its a good college</p>
      </Hello>
      <Greet></Greet> */}
       <Parentgreet></Parentgreet>
       <NameList></NameList>
    </div>
  );
}

export default App;
