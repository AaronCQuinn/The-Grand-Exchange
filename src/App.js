import Homepage from "./components/layout/Homepage/Homepage";
import ItemView from "./components/layout/ItemView/ItemView";
import { 
  Routes, 
  Route 
} from 'react-router-dom';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/item/:id' element={<ItemView />} />
      </Routes>
  );
}

export default App;