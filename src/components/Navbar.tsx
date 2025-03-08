import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">موقعي</h1>
        <ul className="flex space-x-4">
          <li><Link to="/">الرئيسية</Link></li>
          <li><Link to="/features">المميزات</Link></li>
          <li><Link to="/about">من نحن</Link></li>
          <li><Link to="/contact">اتصل بنا</Link></li>
        </ul>
      </div>
    </nav>
  );
}
