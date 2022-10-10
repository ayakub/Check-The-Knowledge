import { RouterProvider } from 'react-router-dom';
import './App.css';
import NavBar from './componants/Header';
import { router } from './utility/routes';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
