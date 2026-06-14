import { createUseStyles } from "react-jss";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import MantraPage from "./views/MantraPage.js";
import { mantraConfig } from "./mantraConfig.js";

const useStyles = createUseStyles({
  center: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
});

const base = "/moksha";

const List = () => {
  const classes = useStyles();

  return (
    <div className={classes.center}>
      {mantraConfig.map((mantra) => (
        <h1 key={mantra.name}>
          <Link to={`${base}/${mantra.path}`}>
            {mantra.name}
          </Link>
        </h1>
      ))}
    </div>
  );
};

const routes = [
  {
    path: base,
    element: <List />,
  },
  ...mantraConfig.map((mantra) => ({
    path: `${base}/${mantra.path}`,
    element: <MantraPage resource={mantra.resource} />,
  })),
];

const router = createBrowserRouter(routes);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
