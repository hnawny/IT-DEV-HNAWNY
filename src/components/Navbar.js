import { Link } from 'react-router-dom'; 
const Navbar = () => {
  const menuItems = [
    { label: 'หน้าแรก', path: '/' },
    { label: 'เกี่ยวกับเรา', path: '/about' },
    { label: 'หลักสูตร', path: '/courses' },
    { label: 'ติดต่อเรา', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/80 border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-12 py-4">
          {/* แสดงเมนูทั้งหมด */}
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path} // ใช้ path จากอ็อบเจ็กต์ menuItems
              className="text-white hover:text-yellow-400 transition-all duration-300 transform hover:scale-110 relative group"
            >
              {item.label} {/* แสดงชื่อเมนูในภาษาไทย */}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
