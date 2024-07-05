import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages";
import { Header } from "./components";

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
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
