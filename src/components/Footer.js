import { Link } from 'react-router-dom';

const menuItems = [
  { label: 'หน้าแรก', path: '/' },
  { label: 'เกี่ยวกับเรา', path: '/about' },
  { label: 'หลักสูตร', path: '/courses' },
  { label: 'ติดต่อเรา', path: '/contact' },
];

const Footer = () => (
  <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
    <div className="container mx-auto px-6 md:px-12 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div className="text-center md:text-left space-y-6">
          <h3 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
            ติดต่อเรา
          </h3>
          <p className="text-gray-300">สาขาเทคโนโลยีสารสนเทศ วท.โปลิฯ</p>
          <p className="text-gray-300">วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา เชียงใหม่</p>
        </div>

        {/* Quick Links */}
        <div className="text-center space-y-6">
          <h3 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
            ลิงก์ด่วน
          </h3>
          <ul className="space-y-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="text-gray-300 hover:text-yellow-400 transition-all duration-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div className="text-center md:text-right space-y-6">
          <h3 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
            ติดตามเรา
          </h3>
          <div className="space-y-4">
            <a href="https://www.facebook.com/InformationTechnologyLannapoly">
              <p className="text-gray-300 hover:text-yellow-400 cursor-pointer transition-all duration-300">
                Facebook ( เทคโนโลยีสารสนเทศ วท.โปลิฯ )
              </p>
            </a>
            <a href="https://www.facebook.com/lannapolyCNX">
              <p className="text-gray-300 hover:text-yellow-400 cursor-pointer transition-all duration-300">
                Facebook ( วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา เชียงใหม่ )
              </p>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา. สงวนลิขสิทธิ์.</p>
        
        {/* Developer Info */}
        <div className="mt-4 text-sm text-gray-500">
          <p>Developed by: <span className="font-semibold">ธีรภัทร์ ถาวัง (67319010012) IT.4501</span></p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
