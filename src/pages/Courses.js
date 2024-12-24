import React, { useState } from 'react';

const CourseCard = ({ level, subjects, duration, description, pdfLinks }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleDownload = (url) => {
    console.log("Downloading PDF from:", url);
    window.open(url, "_blank");
  };

  return (
    <div
      className={`relative p-8 rounded-2xl transition-all duration-500 
      ${isHovered ? 'bg-gradient-to-br from-black/80 to-orange-900/30' : 'bg-black/40'}
      backdrop-blur-xl border border-orange-500/20 hover:border-orange-400/50`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/10 to-yellow-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500" />
      
      {/* Level Badge */}
      <div className="relative z-10">
        <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg shadow-orange-500/20">
          {level}
        </span>
      </div>

      {/* Duration */}
      <div className="mt-4 text-yellow-400 text-sm font-medium">{duration}</div>

      {/* Description */}
      <p className="mt-4 text-gray-300 leading-relaxed">{description}</p>

      {/* Subjects */}
      <div className="mt-8 space-y-4">
        {subjects.map((subject, idx) => (
          <div key={idx} className="relative overflow-hidden group p-4 rounded-xl bg-black/30 hover:bg-black/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <h4 className="font-medium text-white mb-2 relative z-10">{subject.name}</h4>
            <p className="text-sm text-gray-400 relative z-10">{subject.description}</p>
          </div>
        ))}
      </div>

      {/* PDF Button */}
      <div className="relative mt-6 flex justify-center z-50">  {/* เพิ่ม z-50 หรือค่าอื่นที่เหมาะสม */}
        {pdfLinks.map((pdf, index) => (
          <button
            key={index}
            onClick={() => handleDownload(pdf.url)}
            className=" px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-medium hover:from-orange-600 hover:to-yellow-600 transition-colors duration-300 shadow-lg shadow-orange-500/20 mx-3"
          >
            ดูหลักสูตร {pdf.name}
          </button>
        ))}
      </div>
    </div>
  );
};

const Courses = () => {
  const coursesData = [
    {
      level: "ประกาศนียบัตรวิชาชีพ (ปวช.)",
      duration: "ระยะเวลา 3 ปี",
      description: "หลักสูตรที่เน้นการพัฒนาทักษะพื้นฐานด้าน IT และการเขียนโปรแกรม เพื่อเตรียมความพร้อมสู่การทำงานหรือศึกษาต่อในระดับที่สูงขึ้น",
      pdfLinks: [
        { name: "21901v1.pdf", url: "/pdf/21901v1.pdf" },
        { name: "21901v1.pd", url: "/pdf/21901v1.pd" }
      ],
      subjects: [
        { name: "การพัฒนาเว็บแอปพลิเคชัน", description: "HTML5, CSS3, JavaScript และ Modern Web Frameworks" },
        { name: "การเขียนโปรแกรมพื้นฐาน", description: "หลักการเขียนโปรแกรม, Python, Java พร้อมทั้งการแก้ปัญหาเชิงตรรกะ" },
        { name: "ระบบฐานข้อมูล", description: "การออกแบบและจัดการฐานข้อมูล SQL, NoSQL และการประยุกต์ใช้งาน" }
      ]
    },
    {
      level: "ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)",
      duration: "ระยะเวลา 2 ปี",
      description: "หลักสูตรที่มุ่งเน้นการพัฒนาความเชี่ยวชาญเฉพาะทาง เพื่อตอบโจทย์อุตสาหกรรมดิจิทัลสมัยใหม่",
      pdfLinks: [
        { name: "31903v3.pdf", url: "/pdf/31903v3.pdf" },
        { name: "31901v5.pdf", url: "/pdf/31901v5.pdf" }
      ],
      subjects: [
        { name: "Mobile Application Development", description: "พัฒนาแอปพลิเคชันบน iOS และ Android ด้วยเทคโนโลยีล่าสุด" },
        { name: "Cloud Computing & DevOps", description: "การจัดการระบบคลาวด์, Container และ CI/CD Pipeline" },
        { name: "AI & Data Analytics", description: "Machine Learning, Data Science และการวิเคราะห์ข้อมูลขั้นสูง" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/20 rounded-full filter blur-3xl" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-400">
            หลักสูตรของเรา
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            เรียนรู้และพัฒนาทักษะด้านเทคโนโลยีสารสนเทศกับหลักสูตรที่ออกแบบมาเพื่อตอบโจทย์ตลาดแรงงานยุคดิจิทัล
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {coursesData.map((course, idx) => (
            <CourseCard key={idx} {...course} pdfLinks={course.pdfLinks} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-black/80 to-orange-900/30 backdrop-blur-xl border border-orange-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              พร้อมที่จะเริ่มต้นการเรียนรู้กับเรา?
            </h3>
            <p className="text-gray-400 mb-6">
              สมัครผ่านช่องทางระบบออนไลน์ของเราได้เลย
            </p>
            <a href='https://www.lannapoly.ac.th/admission/#/?from=website'  className="px-8 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-medium hover:from-orange-600 hover:to-yellow-600 transition-colors duration-300 shadow-lg shadow-orange-500/20">
              สมัครเรียนตอนนี้
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;