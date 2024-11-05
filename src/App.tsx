//import { Users } from "./pages/users/users";
//import { CardsTasks } from './components/cards/cardsTasks';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./global.css";
import { Header } from "./components/header/header";
import { Users } from "./pages/users/users";
import { TasksCreate } from "./pages/createTasks/createTasks";
import { ManagementTasks } from "./pages/managementTasks/managementTasks";



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/cadastro-usuarios" element={<Users />} />
        <Route path="/cadastro-tarefas" element={<TasksCreate />} />
        <Route path="/gerenciar-tarefas" element={<ManagementTasks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
