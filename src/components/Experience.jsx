import { useState } from 'react';

const ServicesComponent = () => {
  const [selectedService, setSelectedService] = useState("Сопровождение");
  const serviceDetails = {
    "Сопровождение": [
      "Мы предоставляем индивидуальное сопровождение каждому клиенту, благодаря которому приобретаются знания в предпринимательской деятельности.",
      "При осуществлении предпринимательской деятельности наш клиент обеспечивает себя доходностью от 30% в месяц.",
      "Услуга Сопровождение предоставляется бессрочно, при которой бессрочно оказываются информационная поддержка консультации по данному виду деятельности."
      
    ],
    "Управление": [
      "Управление финансами наших клиентов с гарантированной доходностью для нашего клиента 5% в месяц"
    ]
    
  };

  return (
    <div className="bg-[rgb(242,245,247)] text-neutral-950 py-10 px-5 rounded-xl mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 h-[400px]">
        {/* Left Section */}
        <div>
          <h1 className="text-2xl font-bold mb-6 text-center">Мы предлагаем услуги в сфере финансовых технологий, обеспечивая доходность 5% в месяц при управлении и от 30 % в месяц — при сопровождении.</h1>
          <ul className="space-y-4">
            {Object.keys(serviceDetails).map((service) => (
              <li
                key={service}
                className={`text-lg cursor-pointer ${selectedService === service ? ' text-neutral-950 font-bold bg-[rgba(177,200,219,0.68)]' : 'text-neutral-950 bg-[rgba(219,225,230,0.68)]'} hover:text-neutral-800  px-[16px] py-[12px] rounded-2xl w-fit`}
                onClick={() => setSelectedService(service)}
              >
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="bg-white p-6 rounded-lg text-black h-fit">
          <h2 className="text-2xl font-bold mb-4">{selectedService}</h2>
          <ul className="space-y-2 ">
            {serviceDetails[selectedService].map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
          <button className="mt-6 bg-[#148F2B] text-white hover:bg-[#267033]  py-2 px-4 rounded">
            Получить консультацию
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;

