import Dashboard from "../pages/Dashboard";
import AddBudget from "../pages/AddBudget";
import Analytics from "../pages/Analytics";
import Expenses from "../pages/Expenses";
import { Route, Routes } from "react-router-dom";

const AppRoute = () => {
  return (
    <div className="h-[85vh] w-full">
        <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/add" element={<AddBudget/>}/>
            <Route path="/analytics" element={<Analytics/>}/>
            <Route path="/budget/:id/expense" element={<Expenses/>}/>
        </Routes>
    </div>
  )
}

export default AppRoute;