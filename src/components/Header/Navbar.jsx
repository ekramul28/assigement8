import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center py-12">
            <div>
                <img className="" src="/public/Resources/Logo.png" alt="Logo" />
            </div>
            <div className="">
                <NavLink className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#FF444A] underline text-lg font-bold" : "text-lg font-bold "
                } to='/'>Home</NavLink>
                <NavLink className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#FF444A] underline text-lg font-bold p-10" : "text-lg font-bold p-10"
                } to='/donation'>Donation</NavLink>
                <NavLink className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#FF444A] underline text-lg font-bold" : "text-lg font-bold  "
                } to='/statistics'>Statistics</NavLink>
            </div>
        </div>
    );
};

export default Navbar;