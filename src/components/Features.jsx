
const Features = () => {
  const features = [
    {
      title: "Экспертиза в сфере финансов",
      description:
        "Наша команда обладает глубокими знаниями и опытом в области финансовых технологий.",
      icon: "🧠", // Можно заменить на иконку из библиотеки, например, Heroicons
    },
    {
      title: "Квалифицированный персонал",
      description:
        "Наши сотрудники имеют необходимые аттестации и разрешения для управления финансами.",
      icon: "👥",
    },
    {
      title: "Эффективное управление капиталом",
      description:
        "Мы предлагаем услуги по управлению с доходностью 5–8 % в месяц и сопровождение с доходностью до 30 % в месяц.",
      icon: "💰",
    },
    {
      title: "Индивидуальный подход",
      description:
        "Каждый клиент получает индивидуальное внимание и профессиональное обслуживание.",
      icon: "🌐",
    },
    {
      title: "Надёжность и прозрачность",
      description:
        "Все наши операции проводятся в соответствии с законодательством и международными стандартами.",
      icon: "👀",
    },
    {
      title: "Гарантия безопасности",
      description:
        "На все виды услуг с нашими клиентами составляются и подписываются договора.",
      icon: "🛡️",
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Преимущества работы с нами
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Финансовая экспертиза и надёжность.
          </p>
        </div>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-4 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-700 transition">
            Узнать больше
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;
