import projectImg from "../assets/projects/projectImg.png";
import projectVK from "../assets/projects/projectVK.png";
import projectBot from "../assets/projects/projectBot.png";
import projectVector from "../assets/projects/projectVector.png";
export const HERO_CONTENT = `Наши услуги — это профессиональное управление активами с гарантированной доходностью и предоставление консультационно-информационных услуг для осуществления предпринимательской деятельности.`;

export const ABOUT_TEXT = `Наша деятельность направлена на валютный арбитраж. Мы обладаем огромным багажом знаний и предоставляем услуги по управлению финансами.`;

export const EXPERIENCES = [
  {
    year: "2022",
    role: "Frontend Developer Стажер",
    company: "Вектор",
    description: `Разрабатывал новостное веб-приложение в качестве Frontend разработчика, использовал JavaScript, React.js и Node.js. Работал в команде из 4-х человек, где у каждого были свои задачи. Развертывал веб-приложение на Wordpress с использованием php.`,
    technologies: ["Javascript", "React.js", "php", "HTML", "CSS"],
  },
  {
    year: "2023",
    role: "Frontend Developer",
    company: "Учебный проект",
    description: `Разрабатывал веб-приложение в качестве Frontend разработчика, использовал Typescript, React.js и Node.js. Работал в команде из 5-х человек, где у каждого были свои задачи.`,
    technologies: ["Typescript", "React.js", "HTML", "Tailwind CSS"],
  },
  {
    year: "2024",
    role: "Frontend Developer + Технический специалист по Telegram ботам",
    company: "ИП Сазонов Станислав Сергеевич",
    description: `Разрабатывал Telegram ботов, используя платформу Salebot и кодовая реализация на Python. Так же создавал WebApp-приложения для Telegram, использовал JavaScript, React.js, Node.js, Postgresql и Google Sheets`,
    technologies: ["Python", "JavaScript", "React.js", "Node.js", "Postgresql", "Tailwind CSS", "Google Sheets"],
  }
  
];

export const PROJECTS = [
  {
    title: "Новостное веб-приложение",
    image: projectVector,
    description:
      "Разработка новостного веб-проекта, для автошколы. Проект создавался в команде, проект является первым в моей разработке.",
    technologies: ["HTML", "CSS", "React.js", "php", "mySQL"],
  },
];

export const OTHERPROJECTS = [
  {
    title: "Скрипт для генерации изображений по шаблону",
    image: projectImg,
    description:
      "Проект написан для компании по продажам автомобильных ковриков. Для них необходимо было написать скрипт, который будет по шаблону генерировать более 1 000 изображений. Скрипт написан на Python с использованием Гугл таблицы, в которой находились наименования и ссылки на изображения. Запуск происходил через .bat файл, для удобства использования, так же были отдельно вынесены все необходимые переменные, для изменения шрифтов,путей,координат и т.п.",
    technologies: ["Python", "Google Sheets", "Pillow"],
  },
  {
    title: "Скрипт для вывода статистики из Рекламного кабинета Вконтакте (API)",
    image: projectVK,
    description:
      "Для рекламнной компании необходимо было написать скрипт на Python, который по API запросу будет выводить необходимую статистику из Рекламного кабинета. Скрипт используется в Telegram боте.",
    technologies: ["Python", "API"],
  },
  {
    title: "Telegram bot",
    image: projectBot,
    description:
      "Необходимо было написать бота на Python, который ранее работал на шаблоном проекте Salebot. В проекте происходило оформление подписки на клуб. Использовалась платежная система Tinkoff API. Так же необходимо было сделать систему промокодов для скидки на подписку. Деплой бота на сервер.",
    technologies: ["Python", "API", "MySql"],
  },
];

export const CONTACT = {
  address: "г. Омск ул. Звездова 132/1",
  phoneNo: "+7 (3812) 21-39-35",
  email: "InvestRUBUSD@yandex.ru",
};
