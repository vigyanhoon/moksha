import { createUseStyles } from "react-jss";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import MantraPage from "./views/MantraPage";

const useStyles = createUseStyles({
  center: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
});

const base = "/moksha";

const MantraConfig = [
  { name: "Vishnu Sahasranama", resource: "vishnu_sahasranama", path: "VishnuSahasranama" },
  { name: "Mahisasur Mardini", resource: "mahisasur_mardini", path: "MahisasurMardini" },
  { name: "Hanuman Chalisa", resource: "hanuman_chalisa", path: "HanumanChalisa" },
  { name: "Shiv Tandav Strota", resource: "shiv_tandav_strota", path: "ShivTandavStrota" }
];

const List = () => {
  const classes = useStyles();

  return (
    <div className={classes.center}>
      {MantraConfig.map((mantra) => (
        <h1 key={mantra.name}>
          <Link to={`${base}/mantra/${mantra.path}`}>
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
]
for (const mantra of MantraConfig) {
  routes.push({
    path: base + `/${mantra.path}`,
    element: <MantraPage resource={mantra.resource} />,
  });
}
const router = createBrowserRouter(routes);


const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
