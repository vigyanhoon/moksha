import { createUseStyles } from 'react-jss'
import {
  createBrowserRouter,
  RouterProvider,
  Link
} from "react-router-dom";
import VishnuSahasranama from './views/VishnuSahasranama'
import MahisasurMardini from './views/MahisasurMardini'

const useStyles = createUseStyles({
  app: {
    textAlign: 'center',
    backgroundColor: '#FFCC99'
  },
  container: {
    overflowY: 'scroll',
    height: 'calc(100vh - 50px)'
  }
})

const List = ()=> {
  return (
    <>
    <div><Link to={`VishnuSahasranama`}>VishnuSahasranama</Link></div>
    <div><Link to={`MahisasurMardini`}>MahisasurMardini</Link></div>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <List/>,
  },
  {
    path: "/VishnuSahasranama",
    element: <VishnuSahasranama/>,
  },
  {
    path: "/MahisasurMardini",
    element: <MahisasurMardini/>,
  },
]);

const App = () => {
  const classes = useStyles()

  return (
      <RouterProvider router={router} />
  )
}

export default App
