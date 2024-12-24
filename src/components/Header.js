const Header = () => (
  <header className="relative bg-black text-white py-16 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-yellow-500 opacity-50"></div>
    </div>
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-200">
          สาขาเทคโนโลยีสารสนเทศ
        </h1>
        <p className="text-2xl text-yellow-100">วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา</p>
      </div>
    </div>
  </header>
);

export default Header;