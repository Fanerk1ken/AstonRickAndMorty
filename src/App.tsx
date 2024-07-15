import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages";
import { Header } from "./components";
import { useSelector } from "react-redux";
import { getTokenSelector } from "./redux/auth-slice.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/home",
    element: <div>test</div>,
  },
]);

function App() {
  const token = useSelector(getTokenSelector);
  console.log(token);

  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
