import logo from '../assets/Logo/drdo_round_logo.jpg';

const NavBar = () => {
  return (
    <nav className="bg-gradient-to-r from-custom-blue-1 to-custom-blue-2 text-white px-16 py-4 flex justify-between items-center z-10 fixed w-full top-0 left-0 shadow-md">
      <div className="flex items-center space-x-4">
        <img src={logo} alt="DRDO Careers Logo" className="h-8" />
        <div className="text-lg font-bold">DRDO Careers</div>
      </div>
      <div className="flex items-center space-x-6">
        <button className="hover:underline">Home</button>
        <button className="hover:underline">About</button>
        <button className="hover:underline">Contact</button>
      </div>
    </nav>
  );
};

export default NavBar;
