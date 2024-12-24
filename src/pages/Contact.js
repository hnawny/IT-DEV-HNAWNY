import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.message) {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } else {
      alert('กรุณากรอกข้อมูลให้ครบถ้วน');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-16 relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/20 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 mb-16">
          ติดต่อเรา
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-black/50 to-gray-800 p-8 rounded-2xl shadow-lg border border-orange-500/20">
            <h3 className="text-2xl font-bold text-orange-400 mb-6">ส่งข้อความถึงเรา</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-yellow-100 font-medium mb-2">ชื่อ-นามสกุล</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-4 rounded-lg bg-black/30 text-white placeholder-gray-400 border border-gray-700 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  placeholder="กรอกชื่อ-นามสกุล"
                />
              </div>
              <div>
                <label className="block text-yellow-100 font-medium mb-2">อีเมล</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-4 rounded-lg bg-black/30 text-white placeholder-gray-400 border border-gray-700 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  placeholder="กรอกอีเมล"
                />
              </div>
              <div>
                <label className="block text-yellow-100 font-medium mb-2">เบอร์โทรศัพท์</label>
                <input
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-4 rounded-lg bg-black/30 text-white placeholder-gray-400 border border-gray-700 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  placeholder="กรอกเบอร์โทรศัพท์"
                />
              </div>
              <div>
                <label className="block text-yellow-100 font-medium mb-2">ข้อความ</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-4 rounded-lg bg-black/30 text-white placeholder-gray-400 border border-gray-700 focus:ring-2 focus:ring-orange-500 focus:outline-none h-32"
                  placeholder="กรอกข้อความ"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-semibold hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 shadow-lg"
              >
                ส่งข้อความ
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-8">
            <div className="bg-gradient-to-br from-orange-900/40 to-yellow-900/40 p-8 rounded-2xl backdrop-blur-sm border border-orange-500/20 shadow-lg">
              <h3 className="text-2xl font-bold text-yellow-100 mb-4">ข้อมูลการติดต่อ</h3>
              <p className="text-lg text-gray-300 mb-2">โทรศัพท์: <span className="text-yellow-400">053 213 061</span></p>
              <p className="text-lg text-gray-300">อีเมล: <span className="text-yellow-400">lannapoly@lannapoly.ac.th</span></p>
            </div>
            <div className="h-64 bg-black/50 rounded-2xl overflow-hidden shadow-lg border border-orange-500/20 relative">
              {/* Google Map Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d667.6236497172528!2d98.99248262147901!3d18.813759208718576!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3b0000c3bd27%3A0xd04459bf9ebdede6!2zSVQg4LmC4Lib4Lil4Li0!5e0!3m2!1sth!2sth!4v1735026306891!5m2!1sth!2sth"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full z-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Popup */}
      {isSubmitted && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold text-orange-500">ข้อความของคุณถูกส่งเรียบร้อยแล้ว!</h3>
            <p className="mt-4 text-gray-700">ขอบคุณที่ติดต่อเรา เราจะตอบกลับคุณในเร็วๆ นี้</p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-6 py-2 px-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
            >
              ปิด
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
