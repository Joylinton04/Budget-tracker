import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className=" w-full border-2 h-[12vh] bg-txt rounded-b-[2.5rem] flex justify-between items-center px-10">
        <div>
          <button className="rounded-full bg-addb-bg py-2 px-4 text-lg">
              <Link to="/add">
                <span className="pr-4 text-3xl">+</span> 
                Add a Budget
              </Link>
          </button>
        </div>
        <div className=" w-32 flex justify-around items-center">
          <div className="w-1/2 rounded-full">
            <img 
              src="https://img.freepik.com/premium-vector/gamers-mascot-logo-esport-template-design_142989-595.jpg" 
              alt="" 
              className="w-full h-full object-cover object-center rounded-full"
            />
          </div>
          <p><ExpandMoreIcon fontSize='large'/></p>
        </div>
    </div>
  )
}

export default Navbar;