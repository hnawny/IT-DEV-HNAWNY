import { Tab } from '@headlessui/react';

const About = () => (
  <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
    {/* Background Effects */}
    <div className="absolute inset-0">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/20 rounded-full filter blur-3xl" />
    </div>

    <div className="container mx-auto px-4 py-16 relative z-10">
      {/* Header */}
      <h2 className="text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 animate-text">
        เกี่ยวกับเรา
      </h2>

      {/* Add Image Background */}
      <div className="relative mb-16">
        <img 
          src="/imgs/online-CCbMQO0w.jpg" 
          alt="About Image" 
          className="w-full h-72 object-cover rounded-xl shadow-lg" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl" />
      </div>

      {/* Content Tabs */}
      <Tab.Group>
        <Tab.List className="flex justify-center space-x-4 mb-12">
          {['วิสัยทัศน์', 'เป้าหมาย'].map((tab, index) => (
            <Tab
              key={index}
              className={({ selected }) =>
                `px-6 py-2 text-lg font-semibold rounded-lg transition-colors focus:outline-none ${
                  selected
                    ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-black'
                    : 'bg-gray-800 text-gray-400 hover:text-gray-200'
                }`
              }
            >
              {tab}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels>
          <Tab.Panel className="bg-gradient-to-br from-orange-900/40 to-yellow-900/40 p-8 rounded-2xl backdrop-blur-sm border border-orange-500/30 shadow-lg transition-transform transform-gpu scale-105 hover:scale-110">
            <h3 className="text-2xl font-bold mb-6 text-orange-400">วิสัยทัศน์</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              มุ่งสู่การเป็นผู้นำด้านการจัดการศึกษาด้านเทคโนโลยีสารสนเทศในภาคเหนือ
              ผลิตบุคลากรที่มีคุณภาพและตอบสนองความต้องการของตลาดแรงงาน
            </p>
          </Tab.Panel>

          <Tab.Panel className="bg-gradient-to-br from-orange-900/40 to-yellow-900/40 p-8 rounded-2xl backdrop-blur-sm border border-orange-500/30 shadow-lg transition-transform transform-gpu scale-105 hover:scale-110">
            <h3 className="text-2xl font-bold mb-6 text-orange-400">เป้าหมาย</h3>
            <ul className="space-y-4">
              {[
                'พัฒนาผู้เรียนให้มีความเชี่ยวชาญด้านเทคโนโลยีสารสนเทศ',
                'สร้างเครือข่ายความร่วมมือกับภาคอุตสาหกรรม',
                'ส่งเสริมการวิจัยและพัฒนานวัตกรรม',
              ].map((goal, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <span className="w-3 h-3 bg-yellow-400 rounded-full mr-3 animate-pulse"></span>
                  {goal}
                </li>
              ))}
            </ul>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  </div>
);

export default About;
