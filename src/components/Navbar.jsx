import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-white shadow p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-xl font-bold">AmbizTech</h1>
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-blue-500">Home</Link>
        <Link to="/about" className="text-gray-700 hover:text-blue-500">About</Link>
        <Link to="/services" className="text-gray-700 hover:text-blue-500">Services</Link>
        <Link to="/contact" className="text-gray-700 hover:text-blue-500">Contact</Link>
      </div>
    </div>
  </nav>
);
export default Navbar;