import { createUseStyles } from 'react-jss'
import {
  createBrowserRouter,
  RouterProvider,
  Link
} from "react-router-dom";
import VishnuSahasranama from './views/VishnuSahasranama'
import MahisasurMardini from './views/MahisasurMardini'

const useStyles = createUseStyles({
  center: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
})

const List = () => {
  const classes = useStyles()

  return (
    <div className={classes.center}>
      <h1><Link to={`VishnuSahasranama`}>VishnuSahasranama</Link></h1>
      <h1><Link to={`MahisasurMardini`}>MahisasurMardini</Link></h1>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <List />,
  },
  {
    path: "/VishnuSahasranama",
    element: <VishnuSahasranama />,
  },
  {
    path: "/MahisasurMardini",
    element: <MahisasurMardini />,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
