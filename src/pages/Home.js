import React, { useState } from 'react';

// ImageDialog Component (Tailwind CSS-based Modal with Smooth Transition)
const ImageDialog = ({ isOpen, setIsOpen, imageSrc, title, details }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-500 ease-in-out">
          <div className="relative bg-white rounded-xl overflow-hidden shadow-2xl max-w-4xl w-full mx-4 transform transition-all duration-500 ease-in-out scale-100 opacity-100">
            <div className="relative">
              {imageSrc ? (
                <img src={imageSrc} alt="Enlarged view" className="w-full h-auto rounded-t-xl" />
              ) : (
                <p className="text-center py-8">No image available</p>
              )}
              <div className="absolute top-4 left-4 text-white font-bold text-lg">{title}</div>
              <div className="absolute bottom-4 left-4 text-sm text-white bg-black/50 px-4 py-2 rounded-lg shadow-lg">{details}</div>
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/75 transition-colors"
              >
                &times;
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const images = [
    { 
      src: '/imgs/465985343_1089521756507249_4254757350376348131_n.jpg', 
      title: 'การแข่งขันทักษะวิชาชีพ', 
      details: "ทักษะการเขียนโปรแกรมคอมพิวเตอร์ ระดับ ปวช. ได้รับรางวัลชนะเลิศเหรียญทอง และได้เป็นตัวแทนไปแข่งขันต่อในระดับภาคเหนือ ทักษะเทคโนโลยีเครือข่าย ระดับ ปวส. ได้รับรางวัลรองชนะเลิศอันดับ 1 เหรียญทอง" 
    },
    { 
      src: '/imgs/459239445_1038987911560634_7282358072979799197_n.jpg', 
      title: 'รางวัลชนะเลิศ POLY Folksong Contest', 
      details: "ยินดีกับพี่ๆ ปวส. ไอที กับรางวัลชนะเลิศ POLY Folksong Contest ที่จัดโดยองค์การนักวิชาชีพในอนาคตแห่งประเทศไทย ประจำปีการศึกษา 2567 โดยมีอาจารย์ประสิทธิ์ ชูดวง เป็นผู้มอบรางวัลในครั้งนี้ " 
    },
    { 
      src: '/imgs/458765151_1035385221920903_4211212604950277426_n.jpg', 
      title: 'กีฬาสานสัมพันธ์', 
      details: "ประมวลภาพกีฬาสานสัมพันธ์ สาขาเทคโนโลยีสารสนเทศ ปีการศึกษา 2567 ที่มีสาขาบริหารธุรกิจกับอุตสาหกรรมการท่องเที่ยวและการโรงแรมร่วมด้วยสนุกสนานไปด้วยกัน" 
    },
    { 
      src: '/imgs/450558210_991943116265114_8867956823412987958_n.jpg', 
      title: 'เข้าร่วมการแข่งขันฝีมือแรงงาน (World Skills)', 
      details: "สาขาเทคโนโลยีสารสนเทศ เข้าร่วมการแข่งขันฝีมือแรงงาน (World Skills) ครั้งที่ 30 ระดับภาค ณ จังหวัดนครสวรรค์" 
    }
  ];

  const handleImageClick = (imageSrc, title, details) => {
    setSelectedImage(imageSrc);
    setIsOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black relative">
    {/* Background Effects */}
    <div className="absolute inset-0">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/20 rounded-full filter blur-3xl animate-pulse" />
    </div>
  
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 drop-shadow-lg">
            ยินดีต้อนรับสู่สาขาเทคโนโลยีสารสนเทศ
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            เรามุ่งมั่นในการผลิตบุคลากรด้านเทคโนโลยีสารสนเทศที่มีคุณภาพ 
            พร้อมด้วยทักษะที่จำเป็นสำหรับอุตสาหกรรมดิจิทัล
          </p>
          
          {/* Philosphy Box */}
          <div className="bg-gradient-to-r from-orange-900/50 to-yellow-900/50 p-8 rounded-2xl backdrop-blur-sm border border-orange-500/30 shadow-2xl">
            <h3 className="text-3xl font-semibold text-orange-300 mb-4">ปรัชญาของสาขา</h3>
            <p className="text-lg text-yellow-100">
              "มุ่งสู่ความเป็นเลิศด้านเทคโนโลยี สร้างคนดีสู่สังคม"
            </p>
          </div>
  
          {/* Call-to-Action */}
          <div className="text-center">
            <div className=" p-8 rounded-2xl bg-gradient-to-br from-black/80 to-orange-900/30 backdrop-blur-xl border border-orange-500/20">
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
  
        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={() => handleImageClick(image.src, image.title, image.details)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-white font-bold text-lg">{image.title}</h4>
                  <p className="text-sm text-gray-300">{image.details.substring(0, 50)}...</p>
                  <button className="mt-2 text-sm text-orange-400 hover:underline">ดูเพิ่มเติม</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  
    {/* Image Dialog */}
    <ImageDialog 
      isOpen={isOpen} 
      setIsOpen={setIsOpen} 
      imageSrc={selectedImage} 
      title={images.find(img => img.src === selectedImage)?.title} 
      details={images.find(img => img.src === selectedImage)?.details} 
    />
  </div>
  

  );
};

export default Home;
