import Dashboard from "../pages/Dashboard";
import AddBudget from "../pages/AddBudget";
import Analytics from "../pages/Analytics";
import Expenses from "../pages/Expenses";
import { Route, Routes } from "react-router-dom";
import EditBudget from "../pages/EditBudget";

const AppRoute = () => {
  return (
    <div className="h-[85vh] w-full">
        <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/add" element={<AddBudget/>}/>
            <Route path="/analytics" element={<Analytics/>}/>
            <Route path="/budget/:id/expense" element={<Expenses/>}/>
            <Route path="/budget/edit/:id" element={<EditBudget/>}/>
        </Routes>
    </div>
  )
}

export default AppRoute;