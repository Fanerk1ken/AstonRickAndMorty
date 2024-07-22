import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages";
import { Header } from "./components";
import { useSelector } from "react-redux";
import { getTokenSelector } from "./redux/auth-slice.ts";
import { useAppDispatch } from "./app/store.ts";
import { useEffect } from "react";
import { fetchData } from "./redux/data-slice.ts";

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
  const dispatch = useAppDispatch();
  console.log(token);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
