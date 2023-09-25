import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="md:flex justify-between items-center text-center py-12 z-40">
            <div className="flex justify-center mb-5 ">
                <img className="" src="/public/Resources/Logo.png" alt="Logo" />
            </div>
            <div className="">
                <NavLink className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#FF444A] underline text-lg font-bold z-40" : "text-lg font-bold z-40 "
                } to='/'>Home</NavLink>
                <NavLink className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#FF444A] underline text-lg font-bold p-10" : "text-lg font-bold p-10"
                } to='/donation'>Donation</NavLink>
                <NavLink className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#FF444A] underline md:text-lg font-bold" : "md:text-lg font-bold  "
                } to='/statistics'>Statistics</NavLink>
            </div>
        </div>
    );
};

export default Navbar;