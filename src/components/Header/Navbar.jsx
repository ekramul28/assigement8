import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="md:flex justify-between items-center text-center py-12 z-40">
            <div className="flex justify-center mb-5 ">
                <img className="" src="Logo.png" alt="Logo" />
            </div>
            <div className=" flex gap-8 font-bold md:text-lg">
                <NavLink className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#FF444A] underline  " : "  "
                } to='/'>Home</NavLink>
                <NavLink className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#FF444A] underline " : ""
                } to='/donation'>Donation</NavLink>
                <NavLink className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#FF444A] underline " : "  "
                } to='/statistics'>Statistics</NavLink>
            </div>
        </div>
    );
};

export default Navbar;