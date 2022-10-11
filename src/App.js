import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './componants/Blog';
import ErrorPage from './componants/ErrorPage';
import Home from './componants/Home';
import Quizes from './componants/Quizes';
import Statics from './componants/Statics';
import Main from './utility/Main';

const router = createBrowserRouter([
  {
    path: '/', element: <Main></Main>, children: [
      {
        path: '/',
        loader: async () => {
          return fetch('https://openapi.programming-hero.com/api/quiz');
        },
        element: <Home></Home>
      },

      {
        path: '/statics',
        loader: async () => {
          return fetch('https://openapi.programming-hero.com/api/quiz');
        },
        element: <Statics></Statics>
      },

      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/quiz/:quizId',
        loader: ({ params }) => {
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
        },
        element: <Quizes></Quizes>
      },
    ]
  },
  { path: '*', element: <ErrorPage></ErrorPage> }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
