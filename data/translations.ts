export type Locale = 'uk' | 'ru' | 'en' | 'es';

const common = {
  uk: {
    nav: ['Вілли', 'Процес', 'Про нас', 'Контакти'],
    start: 'Розпочати проєкт',
    close: 'Закрити меню',
    open: 'Відкрити меню',
    navigation: 'Навігація',
    contact: 'Контакти',
    legal: 'Правова інформація',
    follow: 'Соціальні мережі',
    privacy: 'Політика конфіденційності',
    cookies: 'Файли cookie',
    notice: 'Правова інформація',
    rights: 'Усі права захищені.',
    phone: 'Телефон',
    messageUs: 'Написати нам',
    email: 'Електронна пошта',
    location: 'Розташування',
    whatsapp: 'Написати у WhatsApp',
    backHome: 'На головну',
    pageMissing: 'Сторінку не знайдено.',
    pageMissingText: 'Сторінка, яку ви шукаєте, не існує або була переміщена.',
    concept: 'Архітектурна концепція',
    disclaimer:
      'Зображення є архітектурними візуалізаціями та референсами, що ілюструють масштаб і стиль. Це не фотографії завершених проєктів SKYLINE Engineering.',
    ctaEyebrow: 'РОЗПОЧНІТЬ СВІЙ ПРОЄКТ',
    ctaButton: 'Розпочати проєкт',
    waMessage: 'Вітаю! Хочу обговорити будівництво вілли в Іспанії.',
    region: 'Бенідорм · Іспанія',
    tagline: 'Вілли під ключ в Іспанії.',
  },
  ru: {
    nav: ['Виллы', 'Процесс', 'О нас', 'Контакты'],
    start: 'Начать проект',
    close: 'Закрыть меню',
    open: 'Открыть меню',
    navigation: 'Навигация',
    contact: 'Контакты',
    legal: 'Правовая информация',
    follow: 'Социальные сети',
    privacy: 'Политика конфиденциальности',
    cookies: 'Файлы cookie',
    notice: 'Правовая информация',
    rights: 'Все права защищены.',
    phone: 'Телефон',
    messageUs: 'Написать нам',
    email: 'Электронная почта',
    location: 'Расположение',
    whatsapp: 'Написать в WhatsApp',
    backHome: 'На главную',
    pageMissing: 'Страница не найдена.',
    pageMissingText: 'Страница, которую вы ищете, не существует или была перемещена.',
    concept: 'Архитектурная концепция',
    disclaimer:
      'Изображения являются архитектурными визуализациями и референсами, иллюстрирующими масштаб и стиль. Это не фотографии завершённых проектов SKYLINE Engineering.',
    ctaEyebrow: 'НАЧНИТЕ СВОЙ ПРОЕКТ',
    ctaButton: 'Начать проект',
    waMessage: 'Здравствуйте! Хочу обсудить строительство виллы в Испании.',
    region: 'Бенидорм · Испания',
    tagline: 'Виллы под ключ в Испании.',
  },
  en: {
    nav: ['Villas', 'Process', 'About', 'Contact'],
    start: 'Start Your Project',
    close: 'Close menu',
    open: 'Open menu',
    navigation: 'Navigation',
    contact: 'Contact',
    legal: 'Legal',
    follow: 'Follow',
    privacy: 'Privacy Policy',
    cookies: 'Cookies',
    notice: 'Legal Notice',
    rights: 'All rights reserved.',
    phone: 'Phone',
    messageUs: 'Message us',
    email: 'Email',
    location: 'Location',
    whatsapp: 'WhatsApp Us',
    backHome: 'Back to Home',
    pageMissing: 'Page not found.',
    pageMissingText: 'The page you’re looking for doesn’t exist, or has moved.',
    concept: 'Architectural Concept',
    disclaimer:
      'Concept images are architectural visualizations and references used to illustrate scale and style. They are not photographs of completed SKYLINE Engineering projects.',
    ctaEyebrow: 'START YOUR PROJECT',
    ctaButton: 'Start Your Project',
    waMessage: "Hi, I'd like to talk about building a villa in Spain.",
    region: 'Benidorm · Spain',
    tagline: 'Turnkey villas in Spain.',
  },
  es: {
    nav: ['Villas', 'Proceso', 'Nosotros', 'Contacto'],
    start: 'Iniciar el proyecto',
    close: 'Cerrar menú',
    open: 'Abrir menú',
    navigation: 'Navegación',
    contact: 'Contacto',
    legal: 'Información legal',
    follow: 'Síguenos',
    privacy: 'Política de privacidad',
    cookies: 'Política de cookies',
    notice: 'Aviso legal',
    rights: 'Todos los derechos reservados.',
    phone: 'Teléfono',
    messageUs: 'Escríbenos',
    email: 'Correo electrónico',
    location: 'Ubicación',
    whatsapp: 'Escribir por WhatsApp',
    backHome: 'Volver al inicio',
    pageMissing: 'Página no encontrada.',
    pageMissingText: 'La página que buscas no existe o ha cambiado de ubicación.',
    concept: 'Concepto arquitectónico',
    disclaimer:
      'Las imágenes son visualizaciones y referencias arquitectónicas utilizadas para ilustrar la escala y el estilo. No son fotografías de proyectos terminados de SKYLINE Engineering.',
    ctaEyebrow: 'INICIA TU PROYECTO',
    ctaButton: 'Iniciar el proyecto',
    waMessage: 'Hola, me gustaría hablar sobre la construcción de una villa en España.',
    region: 'Benidorm · España',
    tagline: 'Villas llave en mano en España.',
  },
};

const pages = {
  uk: {
    hero: {
      title1: 'Ваша вілла',
      title2: 'в Іспанії.',
      subtitle: 'Вілла під ключ від €400 000',
      services: 'Архітектура · Інженерія · Будівництво · Дизайн',
      discuss: 'Обговорити проєкт',
      explore: 'Переглянути вілли',
      alt: 'Сучасна середземноморська вілла з видом на море у Бенідормі',
    },
    home: {
      helpEyebrow: 'Як ми допомагаємо',
      helpTitle: 'Будівництво вілли\nне має бути складним.',
      helpText:
        'Вам не потрібно самостійно координувати архітекторів, інженерів, будівельників, постачальників і дозволи. SKYLINE Engineering керує всім процесом.',
      talk: 'Поговорити з командою',
      plans: [
        {
          title: 'У вас є ділянка?',
          text: 'Ми проаналізуємо землю, містобудівні можливості та потенціал забудови.',
        },
        {
          title: 'У вас є проєкт?',
          text: 'Ми координуємо технічну розробку й будівництво вашої вілли.',
        },
        {
          title: 'Починаєте з нуля?',
          text: 'Допоможемо визначити концепцію, бюджет і наступні кроки.',
        },
      ],
      investment: 'Інвестиція',
      priceTitle: 'Вілли від €400 000',
      priceNote:
        'Це орієнтовні стартові ціни, а не фіксовані пропозиції. Остаточна вартість залежить від ділянки, розташування, площі, архітектури й комплектації.',
      estimate: 'Отримати попередній розрахунок',
      process: 'Процес',
      processTitle: 'Від ділянки\nдо ключів.',
      one: 'Єдиний контакт',
      oneTitle: 'Одна компанія.\nОдна відповідальність.',
      oneText: 'Одна контактна особа. Один скоординований процес.',
      collection: 'Колекція вілл',
      collectionTitle: 'Концепції вілл для Бенідорма',
      collectionText:
        'Архітектурні концепції, що демонструють масштаб, стиль і стартову вартість — відправна точка для вашої власної вілли.',
      why: 'Чому SKYLINE',
      whyTitle: 'Інженерія\nв кожній деталі.',
      whyText:
        'SKYLINE об’єднує архітектуру, інженерію, будівництво та управління проєктом в одній відповідальній команді.',
      finalTitle: 'Створімо\nвашу віллу.',
      finalText:
        'У вас є ділянка, готовий проєкт чи лише ідея? Розкажіть нам про свої плани.',
    },
    villasPage: {
      eyebrow: 'Колекція вілл',
      title: 'Ваша вілла починається\nз ідеї.',
      intro:
        'Кожна резиденція створюється навколо клієнта, ділянки та бажаного способу життя.',
      concepts: 'Архітектурні концепції',
      examples: 'Приклади конфігурацій',
      examplesText:
        'Орієнтир щодо масштабу, стилю та бюджету — остаточний проєкт завжди адаптується до вашої ділянки й побажань.',
      factorsEye: 'Що впливає на остаточну вартість',
      factorsTitle: 'Не існує двох однакових за ціною вілл.',
      factors: [
        {
          title: 'Ділянка й розташування',
          text: 'Рельєф, орієнтація, під’їзд і конкретний район впливають на проєкт та вартість.',
        },
        {
          title: 'Площа й планування',
          text: 'Загальна площа, кількість рівнів і складність планування.',
        },
        {
          title: 'Архітектура',
          text: 'Рівень індивідуалізації та конструктивна складність.',
        },
        {
          title: 'Комплектація',
          text: 'Матеріали, оздоблення, інженерні системи та інтер’єрні рішення.',
        },
      ],
      note: 'Остаточна ціна залежить від розташування, ділянки, площі, архітектури й комплектації. Після першої розмови ми підготуємо попередній розрахунок.',
      cta: 'Сформуймо концепцію\nвашої вілли.',
      ctaText:
        'Надішліть нам інформацію про ділянку або свою ідею — ми допоможемо визначити наступний крок.',
    },
    processPage: {
      eyebrow: 'Процес',
      title: 'Від порожньої ділянки\nдо готового будинку.',
      nine: 'Дев’ять етапів',
      team: 'Одна команда від початку до завершення.',
      text: 'Архітектуру, інженерію та будівництво координує одна команда, тому проєкт не передається між не пов’язаними компаніями.',
      call: 'У вас є одна команда, до якої можна звернутися.',
      cta: 'Готові розпочати\nсвій проєкт?',
    },
    about: {
      eyebrow: 'Про нас',
      title: 'Інженерія\nза втіленням ідеї.',
      why: 'Чому SKYLINE',
      reasonsTitle: 'Чотири причини, чому клієнти обирають нас',
      reasons: [
        {
          title: 'Єдина відповідальна команда',
          text: 'Архітектура, інженерія та будівництво координуються разом.',
        },
        {
          title: 'Зрозумілий процес',
          text: 'Клієнт розуміє, що відбувається на кожному етапі.',
        },
        {
          title: 'Інженерний підхід',
          text: 'Проєктування й будівництво розглядаються як єдине ціле.',
        },
        {
          title: 'Пряма комунікація',
          text: 'Клієнт спілкується безпосередньо з командою проєкту.',
        },
      ],
      cta: 'Обговорімо\nваш проєкт.',
    },
    contactPage: {
      eyebrow: 'Контакти',
      title: 'Обговорімо\nвашу віллу.',
      text: 'Розкажіть нам про ділянку, готовий проєкт або лише ідею — представник команди зв’яжеться з вами особисто.',
    },
  },
  ru: {
    hero: {
      title1: 'Ваша вилла',
      title2: 'в Испании.',
      subtitle: 'Вилла под ключ от €400 000',
      services: 'Архитектура · Инженерия · Строительство · Дизайн',
      discuss: 'Обсудить проект',
      explore: 'Посмотреть виллы',
      alt: 'Современная средиземноморская вилла с видом на море в Бенидорме',
    },
    home: {
      helpEyebrow: 'Как мы помогаем',
      helpTitle: 'Строительство виллы\nне должно быть сложным.',
      helpText:
        'Вам не нужно самостоятельно координировать архитекторов, инженеров, строителей, поставщиков и разрешения. SKYLINE Engineering управляет всем процессом.',
      talk: 'Поговорить с командой',
      plans: [
        {
          title: 'У вас есть участок?',
          text: 'Мы проанализируем землю, градостроительные возможности и потенциал застройки.',
        },
        {
          title: 'У вас есть проект?',
          text: 'Мы координируем техническую разработку и строительство вашей виллы.',
        },
        {
          title: 'Начинаете с нуля?',
          text: 'Поможем определить концепцию, бюджет и следующие шаги.',
        },
      ],
      investment: 'Инвестиции',
      priceTitle: 'Виллы от €400 000',
      priceNote:
        'Это ориентировочные стартовые цены, а не фиксированные предложения. Итоговая стоимость зависит от участка, расположения, площади, архитектуры и комплектации.',
      estimate: 'Получить предварительный расчёт',
      process: 'Процесс',
      processTitle: 'От участка\nдо ключей.',
      one: 'Единый контакт',
      oneTitle: 'Одна компания.\nОдна ответственность.',
      oneText: 'Одно контактное лицо. Один скоординированный процесс.',
      collection: 'Коллекция вилл',
      collectionTitle: 'Концепции вилл для Бенідорма',
      collectionText:
        'Архитектурные концепции, показывающие масштаб, стиль и стартовую стоимость — отправная точка для вашей собственной виллы.',
      why: 'Почему SKYLINE',
      whyTitle: 'Инженерия\nв каждой детали.',
      whyText:
        'SKYLINE объединяет архитектуру, инженерию, строительство и управление проектом в одной ответственной команде.',
      finalTitle: 'Создадим\nвашу виллу.',
      finalText:
        'У вас есть участок, готовый проект или только идея? Расскажите нам о своих планах.',
    },
    villasPage: {
      eyebrow: 'Коллекция вилл',
      title: 'Ваша вилла начинается\nс идеи.',
      intro:
        'Каждая резиденция создаётся вокруг клиента, участка и желаемого образа жизни.',
      concepts: 'Архитектурные концепции',
      examples: 'Примеры конфигураций',
      examplesText:
        'Ориентир по масштабу, стилю и бюджету — итоговый проект всегда адаптируется к вашему участку и пожеланиям.',
      factorsEye: 'Что влияет на итоговую стоимость',
      factorsTitle: 'Не существует двух одинаковых по цене вилл.',
      factors: [
        {
          title: 'Участок и расположение',
          text: 'Рельеф, ориентация, подъезд и конкретный район влияют на проект и стоимость.',
        },
        {
          title: 'Площадь и планировка',
          text: 'Общая площадь, количество уровней и сложность планировки.',
        },
        {
          title: 'Архитектура',
          text: 'Уровень индивидуализации и конструктивная сложность.',
        },
        {
          title: 'Комплектация',
          text: 'Материалы, отделка, инженерные системы и интерьерные решения.',
        },
      ],
      note: 'Итоговая цена зависит от расположения, участка, площади, архитектуры и комплектации. После первой беседы мы подготовим предварительный расчёт.',
      cta: 'Сформируем концепцию\nвашей виллы.',
      ctaText:
        'Пришлите информацию об участке или свою идею — мы поможем определить следующий шаг.',
    },
    processPage: {
      eyebrow: 'Процесс',
      title: 'От пустого участка\nдо готового дома.',
      nine: 'Девять этапов',
      team: 'Одна команда от начала до завершения.',
      text: 'Архитектуру, инженерию и строительство координирует одна команда, поэтому проект не передаётся между несвязанными компаниями.',
      call: 'У вас есть одна команда, к которой можно обратиться.',
      cta: 'Готовы начать\nсвой проект?',
    },
    about: {
      eyebrow: 'О нас',
      title: 'Инженерия\nза воплощением идеи.',
      why: 'Почему SKYLINE',
      reasonsTitle: 'Четыре причины, почему клиенты выбирают нас',
      reasons: [
        {
          title: 'Единая ответственная команда',
          text: 'Архитектура, инженерия и строительство координируются вместе.',
        },
        {
          title: 'Понятный процесс',
          text: 'Клиент понимает, что происходит на каждом этапе.',
        },
        {
          title: 'Инженерный подход',
          text: 'Проектирование и строительство рассматриваются как единое целое.',
        },
        {
          title: 'Прямая коммуникация',
          text: 'Клиент общается непосредственно с командой проекта.',
        },
      ],
      cta: 'Обсудим\nваш проект.',
    },
    contactPage: {
      eyebrow: 'Контакты',
      title: 'Обсудим\nвашу виллу.',
      text: 'Расскажите нам об участке, готовом проекте или только идее — представитель команды свяжется с вами лично.',
    },
  },
  en: {
    hero: {
      title1: 'Your Villa',
      title2: 'in Spain.',
      subtitle: 'Turnkey villa from €400,000',
      services: 'Architecture · Engineering · Construction · Design',
      discuss: 'Discuss Your Project',
      explore: 'Explore Villas',
      alt: 'Contemporary Mediterranean villa with a sea view on Benidorm',
    },
    home: {
      helpEyebrow: 'How We Help',
      helpTitle: 'Building a villa\nshouldn’t be complicated.',
      helpText:
        'You do not need to coordinate architects, engineers, builders, suppliers and permits yourself. SKYLINE Engineering manages the entire process.',
      talk: 'Talk to Our Team',
      plans: [
        {
          title: 'Have a Plot?',
          text: 'We analyse your land, planning possibilities and development potential.',
        },
        {
          title: 'Have a Project?',
          text: 'We coordinate the technical development and construction of your villa.',
        },
        {
          title: 'Starting From Zero?',
          text: 'We help you define the concept, budget and next steps.',
        },
      ],
      investment: 'Investment',
      priceTitle: 'Villas from €400,000',
      priceNote:
        'These are indicative starting prices, not fixed quotations. The final price depends on the plot, location, size, architecture and specifications.',
      estimate: 'Get a Preliminary Estimate',
      process: 'The Process',
      processTitle: 'From plot\nto keys.',
      one: 'One Point of Contact',
      oneTitle: 'One company.\nOne responsibility.',
      oneText: 'One point of contact. One coordinated process.',
      collection: 'Villa Collection',
      collectionTitle: 'Villa concepts for Benidorm',
      collectionText:
        'Architectural concepts illustrating scale, style and starting price — a starting point for your own villa.',
      why: 'Why SKYLINE',
      whyTitle: 'Engineering\nbehind every detail.',
      whyText:
        'SKYLINE combines architecture, engineering, construction and project management under one responsible team.',
      finalTitle: 'Let’s create\nyour villa.',
      finalText: 'Have a plot, a project or just an idea? Tell us what you have in mind.',
    },
    villasPage: {
      eyebrow: 'Villa Collection',
      title: 'Your villa starts\nwith an idea.',
      intro:
        'Every residence is designed around the client, the land and the way they want to live.',
      concepts: 'Architectural Concepts',
      examples: 'Example configurations',
      examplesText:
        'A starting point for scale, style and budget — every villa is ultimately shaped around your plot and brief.',
      factorsEye: 'What Affects the Final Price',
      factorsTitle: 'No two villas cost the same.',
      factors: [
        {
          title: 'Plot & Location',
          text: 'Terrain, orientation, access and the specific area all affect design and cost.',
        },
        {
          title: 'Size & Layout',
          text: 'Total built area, number of levels and the complexity of the layout.',
        },
        {
          title: 'Architecture',
          text: 'The level of architectural customisation and structural complexity.',
        },
        {
          title: 'Specifications',
          text: 'Materials, finishes, technical installations and interior specification.',
        },
      ],
      note: 'The final price depends on location, plot, size, architecture and specifications. We provide a preliminary estimate after an initial conversation.',
      cta: 'Let’s shape\nyour villa concept.',
      ctaText:
        'Send us your plot or your idea, and we will help you define the next step.',
    },
    processPage: {
      eyebrow: 'The Process',
      title: 'From empty plot\nto finished home.',
      nine: 'Nine Stages',
      team: 'One team, start to finish.',
      text: 'Architecture, engineering and construction are coordinated by the same team, so nothing is handed off between disconnected companies.',
      call: 'You have one team to call.',
      cta: 'Ready to start\nyour project?',
    },
    about: {
      eyebrow: 'About',
      title: 'Engineering\nbehind the vision.',
      why: 'Why SKYLINE',
      reasonsTitle: 'Four reasons clients choose us',
      reasons: [
        {
          title: 'One Responsible Team',
          text: 'Architecture, engineering and construction coordinated together.',
        },
        {
          title: 'Clear Process',
          text: 'The client understands what happens at every stage.',
        },
        {
          title: 'Engineering Approach',
          text: 'Design and construction are considered together.',
        },
        {
          title: 'Direct Communication',
          text: 'The client communicates directly with the project team.',
        },
      ],
      cta: 'Let’s talk about\nyour project.',
    },
    contactPage: {
      eyebrow: 'Contact',
      title: 'Let’s talk\nabout your villa.',
      text: 'Tell us about your plot, your project or just your idea — a member of the team will contact you directly.',
    },
  },
  es: {
    hero: {
      title1: 'Tu villa',
      title2: 'en España.',
      subtitle: 'Villa llave en mano desde 400.000 €',
      services: 'Arquitectura · Ingeniería · Construcción · Diseño',
      discuss: 'Hablar sobre tu proyecto',
      explore: 'Ver las villas',
      alt: 'Villa mediterránea contemporánea con vistas al mar en Benidorm',
    },
    home: {
      helpEyebrow: 'Cómo te ayudamos',
      helpTitle: 'Construir una villa\nno debería ser complicado.',
      helpText:
        'No necesitas coordinar por tu cuenta arquitectos, ingenieros, constructores, proveedores y licencias. SKYLINE Engineering gestiona todo el proceso.',
      talk: 'Hablar con nuestro equipo',
      plans: [
        {
          title: '¿Ya tienes parcela?',
          text: 'Analizamos el terreno, las posibilidades urbanísticas y su potencial edificable.',
        },
        {
          title: '¿Ya tienes proyecto?',
          text: 'Coordinamos el desarrollo técnico y la construcción de tu villa.',
        },
        {
          title: '¿Empiezas desde cero?',
          text: 'Te ayudamos a definir el concepto, el presupuesto y los siguientes pasos.',
        },
      ],
      investment: 'Inversión',
      priceTitle: 'Villas desde 400.000 €',
      priceNote:
        'Son precios iniciales orientativos, no presupuestos cerrados. El precio final depende de la parcela, la ubicación, la superficie, la arquitectura y las especificaciones.',
      estimate: 'Solicitar una estimación inicial',
      process: 'El proceso',
      processTitle: 'De la parcela\na las llaves.',
      one: 'Un único interlocutor',
      oneTitle: 'Una empresa.\nUna responsabilidad.',
      oneText: 'Un solo interlocutor. Un proceso coordinado.',
      collection: 'Colección de villas',
      collectionTitle: 'Conceptos de villas para Benidorm',
      collectionText:
        'Conceptos arquitectónicos que ilustran escala, estilo y precio inicial: un punto de partida para tu propia villa.',
      why: 'Por qué SKYLINE',
      whyTitle: 'Ingeniería\nen cada detalle.',
      whyText:
        'SKYLINE reúne arquitectura, ingeniería, construcción y dirección de proyecto en un único equipo responsable.',
      finalTitle: 'Creemos\ntu villa.',
      finalText:
        '¿Tienes una parcela, un proyecto o solo una idea? Cuéntanos qué tienes en mente.',
    },
    villasPage: {
      eyebrow: 'Colección de villas',
      title: 'Tu villa empieza\ncon una idea.',
      intro:
        'Cada residencia se diseña en torno al cliente, la parcela y su forma de vivir.',
      concepts: 'Conceptos arquitectónicos',
      examples: 'Configuraciones de ejemplo',
      examplesText:
        'Un punto de partida en cuanto a escala, estilo y presupuesto; cada villa se adapta finalmente a tu parcela y tus necesidades.',
      factorsEye: 'Qué influye en el precio final',
      factorsTitle: 'No hay dos villas con el mismo coste.',
      factors: [
        {
          title: 'Parcela y ubicación',
          text: 'La topografía, la orientación, el acceso y la zona concreta influyen en el diseño y el coste.',
        },
        {
          title: 'Superficie y distribución',
          text: 'La superficie construida, el número de plantas y la complejidad de la distribución.',
        },
        {
          title: 'Arquitectura',
          text: 'El grado de personalización arquitectónica y la complejidad estructural.',
        },
        {
          title: 'Especificaciones',
          text: 'Materiales, acabados, instalaciones técnicas y diseño interior.',
        },
      ],
      note: 'El precio final depende de la ubicación, la parcela, la superficie, la arquitectura y las especificaciones. Preparamos una estimación inicial después de la primera conversación.',
      cta: 'Demos forma al concepto\nde tu villa.',
      ctaText:
        'Envíanos la información de tu parcela o tu idea y te ayudaremos a definir el siguiente paso.',
    },
    processPage: {
      eyebrow: 'El proceso',
      title: 'De una parcela vacía\na una vivienda terminada.',
      nine: 'Nueve etapas',
      team: 'Un equipo, de principio a fin.',
      text: 'El mismo equipo coordina la arquitectura, la ingeniería y la construcción, sin traspasos entre empresas desconectadas.',
      call: 'Tienes un único equipo al que llamar.',
      cta: '¿Listo para iniciar\ntu proyecto?',
    },
    about: {
      eyebrow: 'Nosotros',
      title: 'Ingeniería\ndetrás de la visión.',
      why: 'Por qué SKYLINE',
      reasonsTitle: 'Cuatro razones por las que nos eligen',
      reasons: [
        {
          title: 'Un equipo responsable',
          text: 'Arquitectura, ingeniería y construcción coordinadas conjuntamente.',
        },
        { title: 'Un proceso claro', text: 'El cliente sabe qué sucede en cada etapa.' },
        {
          title: 'Enfoque de ingeniería',
          text: 'El diseño y la construcción se conciben conjuntamente.',
        },
        {
          title: 'Comunicación directa',
          text: 'El cliente se comunica directamente con el equipo del proyecto.',
        },
      ],
      cta: 'Hablemos de\ntu proyecto.',
    },
    contactPage: {
      eyebrow: 'Contacto',
      title: 'Hablemos de\ntu villa.',
      text: 'Cuéntanos sobre tu parcela, tu proyecto o simplemente tu idea; un miembro del equipo se pondrá en contacto contigo directamente.',
    },
  },
};

const supporting = {
  uk: {
    founder: {
      name: 'Denys Druz',
      eyebrow: 'Особисте звернення',
      role: 'Архітектор · Інженер-будівельник · 25 років досвіду',
      alt: 'Denys Druz, засновник SKYLINE Engineering',
      paragraphs: [
        'Добрий день, мене звати Denys Druz. Я архітектор та інженер-будівельник із 25-річним досвідом проєктування й реалізації об’єктів цивільного та промислового будівництва.',
        'Мій професійний шлях розпочався у Кременчуці, продовжився в Харкові, а згодом — у Лондоні, де я працював протягом трьох років. Сьогодні я живу й працюю в Бенідормі та разом із командою SKYLINE Engineering створюю вілли під ключ — від архітектурної концепції й інженерних рішень до будівництва та передачі готового будинку.',
        'Спираючись на профільну освіту, багаторічний практичний досвід та експертне бачення, я особисто відповідаю за цілісність кожного проєкту й пропоную вам надійний, прозорий і професійно організований шлях до власної вілли в Іспанії.',
      ],
    },
    stats: ['Років досвіду в будівництві', 'Роки досвіду в Іспанії'],
    prices: [
      {
        name: 'ESSENTIAL',
        price: 'Від €400 тис.',
        features: ['3 спальні', 'Тераса', 'Сучасна архітектура'],
      },
      {
        name: 'SIGNATURE',
        price: 'Від €550 тис.',
        features: [
          '4 спальні',
          'Приватний басейн',
          'Великі відкриті зони',
          'Індивідуальна архітектура',
        ],
      },
      {
        name: 'PREMIUM',
        price: 'Від €750 тис.',
        features: [
          '4–5 спалень',
          'Преміальна комплектація',
          'Великі тераси',
          'Архітектура підвищеної складності',
        ],
      },
    ],
    chain: [
      'Ділянка',
      'Архітектура',
      'Інженерія',
      'Дозволи',
      'Будівництво',
      'Дизайн',
      'Ландшафт',
      'Ключі',
    ],
    process: [
      [
        'Вивчення',
        'Ми з’ясовуємо особливості ділянки, ваші побажання, бюджет і спосіб життя.',
      ],
      ['Ділянка', 'Оцінюємо містобудівний потенціал, орієнтацію та технічні обмеження.'],
      ['Проєктування', 'Архітектуру та інженерію розробляємо разом, а не послідовно.'],
      ['Дозволи', 'Керуємо ліцензуванням і технічною документацією в місцевих органах.'],
      [
        'Будівництво',
        'Повний комплекс будівельних робіт виконує наша команда без залучення сторонніх підрядників, за дії яких ніхто не відповідає.',
      ],
      [
        'Передача',
        'Передаємо готову до проживання віллу з чітко організованою процедурою.',
      ],
    ],
    fullProcess: [
      ['Консультація', 'Пряма розмова про ділянку, проєкт або ідею та наступні кроки.'],
      ['Аналіз ділянки', 'Перевіряємо землю, містобудівні норми й потенціал забудови.'],
      [
        'Концепція',
        'Створюємо першу архітектурну концепцію відповідно до завдання й бюджету.',
      ],
      [
        'Архітектура та інженерія',
        'Одночасно розробляємо архітектуру, конструкції та інженерні системи.',
      ],
      ['Ліцензування', 'Готуємо й подаємо технічний проєкт та документи на дозволи.'],
      [
        'Будівництво',
        'Повний комплекс будівельних робіт виконує наша команда без залучення сторонніх підрядників.',
      ],
      ['Дизайн', 'Узгоджуємо дизайн інтер’єру з архітектурою від самого початку.'],
      ['Ландшафт', 'Реалізуємо зовнішні простори, басейн і озеленення за єдиним планом.'],
      ['Передача', 'Передаємо об’єкт, документацію та забезпечуємо зрозумілий контакт.'],
    ],
  },
  ru: {
    founder: {
      name: 'Denys Druz',
      eyebrow: 'Личное обращение',
      role: 'Архитектор · Инженер-строитель · 25 лет опыта',
      alt: 'Denys Druz, основатель SKYLINE Engineering',
      paragraphs: [
        'Добрый день, меня зовут Denys Druz. Я архитектор и инженер-строитель с 25-летним опытом проектирования и реализации объектов гражданского и промышленного строительства.',
        'Мой профессиональный путь начался в Кременчуге, продолжился в Харькове, а затем — в Лондоне, где я работал в течение трёх лет. Сегодня я живу и работаю в Бенидорме и вместе с командой SKYLINE Engineering создаю виллы под ключ — от архитектурной концепции и инженерных решений до строительства и передачи готового дома.',
        'Объединяя профильное образование, многолетний практический опыт и экспертное видение, я лично отвечаю за целостность каждого проекта и предлагаю вам надёжный, прозрачный и профессионально организованный путь к собственной вилле в Испании.',
      ],
    },
    stats: ['Лет опыта в строительстве', 'Года опыта в Испании'],
    prices: [
      {
        name: 'ESSENTIAL',
        price: 'От €400 тыс.',
        features: ['3 спальни', 'Терраса', 'Современная архитектура'],
      },
      {
        name: 'SIGNATURE',
        price: 'От €550 тыс.',
        features: [
          '4 спальни',
          'Частный бассейн',
          'Большие открытые зоны',
          'Индивидуальная архитектура',
        ],
      },
      {
        name: 'PREMIUM',
        price: 'От €750 тыс.',
        features: [
          '4–5 спален',
          'Премиальная комплектация',
          'Большие террасы',
          'Архитектура повышенной сложности',
        ],
      },
    ],
    chain: [
      'Участок',
      'Архитектура',
      'Инженерия',
      'Разрешения',
      'Строительство',
      'Дизайн',
      'Ландшафт',
      'Ключи',
    ],
    process: [
      [
        'Изучение',
        'Мы выясняем особенности участка, ваши пожелания, бюджет и образ жизни.',
      ],
      [
        'Участок',
        'Оцениваем градостроительный потенциал, ориентацию и технические ограничения.',
      ],
      [
        'Проектирование',
        'Архитектуру и инженерию разрабатываем вместе, а не последовательно.',
      ],
      [
        'Разрешения',
        'Управляем лицензированием и технической документацией в местных органах.',
      ],
      [
        'Строительство',
        'Полный комплекс строительных работ выполняет наша команда без привлечения сторонних подрядчиков, за действия которых никто не отвечает.',
      ],
      [
        'Передача',
        'Передаём готовую к проживанию виллу с чётко организованной процедурой.',
      ],
    ],
    fullProcess: [
      ['Консультация', 'Прямой разговор об участке, проекте или идее и следующих шагах.'],
      [
        'Анализ участка',
        'Проверяем землю, градостроительные нормы и потенциал застройки.',
      ],
      [
        'Концепция',
        'Создаём первую архитектурную концепцию в соответствии с задачей и бюджетом.',
      ],
      [
        'Архитектура и инженерия',
        'Одновременно разрабатываем архитектуру, конструкции и инженерные системы.',
      ],
      [
        'Лицензирование',
        'Готовим и подаём технический проект и документы на разрешения.',
      ],
      [
        'Строительство',
        'Полный комплекс строительных работ выполняет наша команда без привлечения сторонних подрядчиков.',
      ],
      ['Дизайн', 'Согласовываем дизайн интерьера с архитектурой с самого начала.'],
      [
        'Ландшафт',
        'Реализуем внешние пространства, бассейн и озеленение по единому плану.',
      ],
      ['Передача', 'Передаём объект, документацию и обеспечиваем понятный контакт.'],
    ],
  },
  en: {
    founder: {
      name: 'Denys Druz',
      eyebrow: 'A personal message',
      role: 'Architect · Civil Engineer · 25 years of experience',
      alt: 'Denys Druz, founder of SKYLINE Engineering',
      paragraphs: [
        'Hello, my name is Denys Druz. I am an architect and civil engineer with 25 years of experience designing and delivering civil and industrial construction projects.',
        'My professional journey began in Kremenchuk, continued in Kharkiv and later took me to London, where I worked for three years. Today I live and work in Benidorm, creating turnkey villas with the SKYLINE Engineering team — from the architectural concept and engineering solutions through construction and the handover of a completed home.',
        'Drawing on specialist education, extensive practical experience and expert judgement, I take personal responsibility for the integrity of every project and offer you a reliable, transparent and professionally managed path to your own villa in Spain.',
      ],
    },
    stats: ['Years of construction experience', 'Years of experience in Spain'],
    prices: [
      {
        name: 'ESSENTIAL',
        price: 'From €400K',
        features: ['3 bedrooms', 'Terrace', 'Contemporary architecture'],
      },
      {
        name: 'SIGNATURE',
        price: 'From €550K',
        features: [
          '4 bedrooms',
          'Private pool',
          'Large outdoor areas',
          'Custom architecture',
        ],
      },
      {
        name: 'PREMIUM',
        price: 'From €750K',
        features: [
          '4–5 bedrooms',
          'Premium specifications',
          'Large terraces',
          'Advanced architecture',
        ],
      },
    ],
    chain: [
      'Land',
      'Architecture',
      'Engineering',
      'Permits',
      'Construction',
      'Design',
      'Landscape',
      'Keys',
    ],
    process: [
      ['Discover', 'We understand your plot, brief, budget and how you want to live.'],
      ['Land', 'We assess planning potential, orientation and technical constraints.'],
      ['Design', 'Architecture and engineering are developed together, not in sequence.'],
      [
        'Permits',
        'We manage licensing and technical documentation with local authorities.',
      ],
      [
        'Build',
        'Our team completes the full scope of construction work without involving third-party contractors whose actions are not accountable.',
      ],
      [
        'Handover',
        'Your villa is delivered ready to live in, with a clear handover process.',
      ],
    ],
    fullProcess: [
      [
        'Consultation',
        'A direct conversation about your plot, project or idea, and next steps.',
      ],
      ['Land analysis', 'We review the plot, planning rules and buildable potential.'],
      ['Concept', 'A first architectural concept aligned with your brief and budget.'],
      [
        'Architecture & engineering',
        'Architectural, structural and building-services engineering developed together.',
      ],
      ['Licensing', 'Preparation and submission of the technical project and permits.'],
      [
        'Construction',
        'Our team completes the full scope of construction work without involving third-party contractors.',
      ],
      ['Design', 'Interior design is coordinated with the architecture from the outset.'],
      [
        'Landscape',
        'Outdoor spaces, pool and landscaping are completed as part of the same plan.',
      ],
      [
        'Handover',
        'A structured handover with documentation and a clear point of contact.',
      ],
    ],
  },
  es: {
    founder: {
      name: 'Denys Druz',
      eyebrow: 'Mensaje personal',
      role: 'Arquitecto · Ingeniero de edificación · 25 años de experiencia',
      alt: 'Denys Druz, fundador de SKYLINE Engineering',
      paragraphs: [
        'Hola, me llamo Denys Druz. Soy arquitecto e ingeniero de edificación y cuento con 25 años de experiencia en el diseño y la ejecución de proyectos de construcción civil e industrial.',
        'Mi trayectoria profesional comenzó en Kremenchuk, continuó en Járkov y más tarde me llevó a Londres, donde trabajé durante tres años. Hoy vivo y trabajo en Benidorm y, junto con el equipo de SKYLINE Engineering, creo villas llave en mano: desde el concepto arquitectónico y las soluciones de ingeniería hasta la construcción y la entrega de la vivienda terminada.',
        'Gracias a mi formación especializada, a una amplia experiencia práctica y a una visión experta, asumo personalmente la responsabilidad por la coherencia de cada proyecto y te ofrezco un camino fiable, transparente y profesionalmente gestionado hacia tu propia villa en España.',
      ],
    },
    stats: ['Años de experiencia en construcción', 'Años de experiencia en España'],
    prices: [
      {
        name: 'ESSENTIAL',
        price: 'Desde 400.000 €',
        features: [
          '3 dormitorios',
          'Terraza',
          'Arquitectura contemporánea',
        ],
      },
      {
        name: 'SIGNATURE',
        price: 'Desde 550.000 €',
        features: [
          '4 dormitorios',
          'Piscina privada',
          'Amplias zonas exteriores',
          'Arquitectura personalizada',
        ],
      },
      {
        name: 'PREMIUM',
        price: 'Desde 750.000 €',
        features: [
          '4–5 dormitorios',
          'Especificaciones prémium',
          'Grandes terrazas',
          'Arquitectura avanzada',
        ],
      },
    ],
    chain: [
      'Parcela',
      'Arquitectura',
      'Ingeniería',
      'Licencias',
      'Construcción',
      'Diseño',
      'Paisajismo',
      'Llaves',
    ],
    process: [
      [
        'Descubrimiento',
        'Conocemos tu parcela, necesidades, presupuesto y forma de vivir.',
      ],
      [
        'Parcela',
        'Evaluamos el potencial urbanístico, la orientación y las limitaciones técnicas.',
      ],
      ['Diseño', 'La arquitectura y la ingeniería se desarrollan conjuntamente.'],
      [
        'Licencias',
        'Gestionamos las licencias y la documentación técnica ante las administraciones locales.',
      ],
      [
        'Construcción',
        'Nuestro equipo ejecuta la totalidad de los trabajos de construcción sin recurrir a contratistas externos por cuyas actuaciones nadie asume responsabilidad.',
      ],
      ['Entrega', 'Entregamos la villa lista para vivir mediante un proceso claro.'],
    ],
    fullProcess: [
      [
        'Consulta',
        'Una conversación directa sobre tu parcela, proyecto o idea y los siguientes pasos.',
      ],
      [
        'Análisis de la parcela',
        'Revisamos la parcela, la normativa urbanística y el potencial edificable.',
      ],
      [
        'Concepto',
        'Una primera propuesta arquitectónica ajustada a tus necesidades y presupuesto.',
      ],
      [
        'Arquitectura e ingeniería',
        'Desarrollamos conjuntamente arquitectura, estructura e instalaciones.',
      ],
      [
        'Licencias',
        'Preparamos y presentamos el proyecto técnico y las solicitudes de licencia.',
      ],
      [
        'Construcción',
        'Nuestro equipo ejecuta la totalidad de los trabajos de construcción sin recurrir a contratistas externos.',
      ],
      ['Diseño', 'Coordinamos el diseño interior con la arquitectura desde el inicio.'],
      [
        'Paisajismo',
        'Integramos zonas exteriores, piscina y paisajismo en un mismo plan.',
      ],
      [
        'Entrega',
        'Realizamos una entrega estructurada con documentación y un interlocutor claro.',
      ],
    ],
  },
};

const form = {
  uk: {
    name: 'Ім’я',
    phone: 'Телефон / WhatsApp',
    email: 'Електронна пошта',
    plot: 'У вас уже є ділянка?',
    plotOptions: ['Так', 'Ні', 'Шукаю'],
    budget: 'Бюджет',
    message: 'Повідомлення (необов’язково)',
    send: 'Запросити консультацію',
    sending: 'Надсилання…',
    thanks: 'Дякуємо.',
    thanksText: 'Незабаром ми зв’яжемося з вами, щоб обговорити проєкт.',
    error: 'Сталася помилка. Спробуйте ще раз.',
  },
  ru: {
    name: 'Имя',
    phone: 'Телефон / WhatsApp',
    email: 'Электронная почта',
    plot: 'У вас уже есть участок?',
    plotOptions: ['Да', 'Нет', 'Ищу'],
    budget: 'Бюджет',
    message: 'Сообщение (необязательно)',
    send: 'Запросить консультацию',
    sending: 'Отправка…',
    thanks: 'Спасибо.',
    thanksText: 'Мы скоро свяжемся с вами, чтобы обсудить проект.',
    error: 'Произошла ошибка. Попробуйте ещё раз.',
  },
  en: {
    name: 'Name',
    phone: 'Phone / WhatsApp',
    email: 'Email',
    plot: 'Do you already have a plot?',
    plotOptions: ['Yes', 'No', 'I’m looking'],
    budget: 'Budget',
    message: 'Message (optional)',
    send: 'Request a Consultation',
    sending: 'Sending…',
    thanks: 'Thank you.',
    thanksText: 'We will contact you shortly to discuss your project.',
    error: 'Something went wrong. Please try again.',
  },
  es: {
    name: 'Nombre',
    phone: 'Teléfono / WhatsApp',
    email: 'Correo electrónico',
    plot: '¿Ya tienes una parcela?',
    plotOptions: ['Sí', 'No', 'Estoy buscando'],
    budget: 'Presupuesto',
    message: 'Mensaje (opcional)',
    send: 'Solicitar una consulta',
    sending: 'Enviando…',
    thanks: 'Gracias.',
    thanksText:
      'Nos pondremos en contacto contigo en breve para hablar sobre tu proyecto.',
    error: 'Se ha producido un error. Inténtalo de nuevo.',
  },
};

const villas = {
  uk: [
    ['Villa Aura', '3 спальні', 'Від €400 000', '120 м²'],
    ['Villa Horizon', '4 спальні', 'Від €550 000', '140 м²'],
    ['Villa Panorama', '4 спальні', 'Від €750 000', 'від 180 м²'],
    ['Villa Signature', '5+ спалень', 'Ціна за запитом', '500+ м²'],
  ],
  ru: [
    ['Villa Aura', '3 спальни', 'От €400 000', '120 м²'],
    ['Villa Horizon', '4 спальни', 'От €550 000', '140 м²'],
    ['Villa Panorama', '4 спальни', 'От €750 000', 'от 180 м²'],
    ['Villa Signature', '5+ спален', 'Цена по запросу', '500+ м²'],
  ],
  en: [
    ['Villa Aura', '3 bedrooms', 'From €400,000', '120 m²'],
    ['Villa Horizon', '4 bedrooms', 'From €550,000', '140 m²'],
    ['Villa Panorama', '4 bedrooms', 'From €750,000', 'from 180 m²'],
    ['Villa Signature', '5+ bedrooms', 'Price on request', '500+ m²'],
  ],
  es: [
    ['Villa Aura', '3 dormitorios', 'Desde 400.000 €', '120 m²'],
    ['Villa Horizon', '4 dormitorios', 'Desde 550.000 €', '140 m²'],
    ['Villa Panorama', '4 dormitorios', 'Desde 750.000 €', 'desde 180 m²'],
    ['Villa Signature', '5+ dormitorios', 'Precio a consultar', '500+ m²'],
  ],
};

export const dictionaries: Record<Locale, any> = {
  uk: {
    common: common.uk,
    ...pages.uk,
    ...supporting.uk,
    form: form.uk,
    villas: villas.uk,
  },
  ru: {
    common: common.ru,
    ...pages.ru,
    ...supporting.ru,
    form: form.ru,
    villas: villas.ru,
  },
  en: {
    common: common.en,
    ...pages.en,
    ...supporting.en,
    form: form.en,
    villas: villas.en,
  },
  es: {
    common: common.es,
    ...pages.es,
    ...supporting.es,
    form: form.es,
    villas: villas.es,
  },
};
