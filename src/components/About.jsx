
const About = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start bg-gray-50 p-6 lg:p-12 rounded-lg shadow-md">
      <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
        <img
          src="https://via.placeholder.com/400"
          alt="Person working on a laptop"
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full lg:w-2/3 pl-0 lg:pl-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          О центре социальных технологий
        </h2>
        <div className="space-y-4">
          <p className="bg-gray-100 p-4 rounded-md text-gray-700 shadow-sm">
            <strong>Мы</strong> — команда экспертов в сфере финансовых технологий.
          </p>
          <p className="bg-green-100 p-4 rounded-md text-gray-700 shadow-sm">
            Наша деятельность направлена на валютный арбитраж. Мы обладаем
            огромным багажом знаний и предоставляем услуги по управлению
            финансами.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
