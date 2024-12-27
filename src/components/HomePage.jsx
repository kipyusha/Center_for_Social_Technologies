import { FaTelegram } from "react-icons/fa6";
import { FaVk } from "react-icons/fa6";

const HomePage = () => {
    return (
      <div className="flex flex-col mt-[150px] mb-20 items-center justify-center bg-white text-gray-900 font-sans border-b border-neutral-900">
        {/* Header */}
        <header className="absolute top-4 left-8 text-xl font-semibold">
          <span className="text-black">ЦСТ</span>
        </header>
  
        {/* Social Icons */}
        <div className="absolute top-4 right-8 flex space-x-4">
          <a href="#" className="text-blue-500 hover:text-blue-400 text-3xl">
            <FaTelegram/>
          </a>
          <a href="#" className="text-blue-600 hover:text-blue-400 text-3xl">
            <FaVk/>
          </a>
        </div>
  
        {/* Main Content */}
        <main className="text-center px-4 mb-10">
          <h1 className="text-5xl font-light tracking-wide mb-6">
            Центр <span className="border-b-2 border-black">социальных</span> технологий
          </h1>
          <p className="text-lg font-medium text-green-600 uppercase mb-4">
            Финансовые технологии для вашего успеха
          </p>
          <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">
            Наши услуги — это профессиональное управление активами с гарантированной
            доходностью и предоставление консультационно-информационных услуг для
            осуществления предпринимательской деятельности.
          </p>
        </main>
  
        
      </div>
    );
  };
  
  export default HomePage;