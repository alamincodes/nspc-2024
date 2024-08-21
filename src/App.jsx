import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";

function App() {
  return (
    <div className="bg-zinc-50">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
