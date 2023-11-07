import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import SettingsIcon from '@mui/icons-material/Settings';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Link } from 'react-router-dom';

const Lsidebar = () => {
  return (
    <aside className=" lg:w-80 h-screen pl-6 pt-6 bg-sidebar-bg text-txt gap-16 rounded-r-[2.5rem]">
        <h1 className="text-2xl mt-5 mb-10"><span className="pr-1"><AttachMoneyIcon className="border-2 border-yellow-500 text-yellow-500 rounded-full" fontSize="large"/></span> YourBudget</h1>
        <ul className="flex flex-col list-none gap-16 text-lg capitalize">
          <li className="bg-app-bg p-5 text-black rounded-l-full"><Link to="/"><span className="pr-2"><DashboardIcon/></span>Dashboard</Link></li>
          <li><Link to='/analytics'><span className="pr-2"><EqualizerIcon/></span>Analytic</Link></li>
          <li><Link><span className="pr-2"><CheckCircleOutlineIcon/></span> Plan budget</Link></li>
          <li><Link><span className="pr-2"><SettingsIcon/></span>settings</Link></li>
        </ul>
    </aside>
  )
}

export default Lsidebar;