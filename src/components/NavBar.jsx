const NavBar = () => {
    return (
      <nav className="bg-blue-900 text-white px-6 py-4 flex justify-between items-center">
        <div className="text-lg font-bold">DRDO Careers</div>
        <div className="flex items-center space-x-6">
          <button className="hover:underline">Home</button>
          <button className="hover:underline">About</button>
          <button className="hover:underline">Contact</button>
        </div>
      </nav>
    );
  };
  
  export default NavBar;