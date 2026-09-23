// Only developer-authored strings and literal template segments are translated.
// Interpolated user content is never passed through the dictionary.
(function(global){
 const messages={
  "Контекст и потребность": {
    "en": "Context and business need",
    "kk": "Мәнмәтін және қажеттілік"
  },
  "Целевые пользователи": {
    "en": "Target users",
    "kk": "Мақсатты пайдаланушылар"
  },
  "Данные и материалы": {
    "en": "Data and materials",
    "kk": "Деректер мен материалдар"
  },
  "Ограничения и сроки": {
    "en": "Constraints and timeline",
    "kk": "Шектеулер мен мерзімдер"
  },
  "Ожидаемый результат": {
    "en": "Expected result",
    "kk": "Күтілетін нәтиже"
  },
  "Критерии успеха": {
    "en": "Success criteria",
    "kk": "Табыс өлшемдері"
  },
  "Контакт и взаимодействие": {
    "en": "Contact and collaboration",
    "kk": "Байланыс және өзара әрекет"
  },
  "Черновик": {
    "en": "Draft",
    "kk": "Жоба"
  },
  "В работе": {
    "en": "Developing",
    "kk": "Әзірленуде"
  },
  "Готова": {
    "en": "Ready",
    "kk": "Дайын"
  },
  "Приоритетная": {
    "en": "Priority",
    "kk": "Басым"
  },
  "Все уровни": {
    "en": "All levels",
    "kk": "Барлық деңгейлер"
  },
  "Торговля": {
    "en": "Retail",
    "kk": "Сауда"
  },
  "Образование": {
    "en": "Education",
    "kk": "Білім беру"
  },
  "Логистика": {
    "en": "Logistics",
    "kk": "Логистика"
  },
  "Гостеприимство": {
    "en": "Hospitality",
    "kk": "Қонақжайлылық"
  },
  "Сообщество": {
    "en": "Community",
    "kk": "Қоғамдастық"
  },
  "Другое": {
    "en": "Other",
    "kk": "Басқа"
  },
  "Все темы": {
    "en": "All topics",
    "kk": "Барлық тақырыптар"
  },
  "На рассмотрении": {
    "en": "Pending",
    "kk": "Қаралуда"
  },
  "Принято": {
    "en": "Accepted",
    "kk": "Қабылданды"
  },
  "Отклонено": {
    "en": "Rejected",
    "kk": "Қабылданбады"
  },
  "Изучение задачи": {
    "en": "Discovery",
    "kk": "Міндетті зерттеу"
  },
  "Прототип": {
    "en": "Prototype",
    "kk": "Прототип"
  },
  "Проверка результата": {
    "en": "Validation",
    "kk": "Нәтижені тексеру"
  },
  "Не удалось выполнить запрос.": {
    "en": "Request failed.",
    "kk": "Сұрауды орындау мүмкін болмады."
  },
  "Требует уточнения": {
    "en": "Needs clarification",
    "kk": "Нақтылау қажет"
  },
  "Добавьте контекст, чтобы команда поняла вашу задачу.": {
    "en": "Add context so a team can understand your task.",
    "kk": "Команда міндетті түсінуі үшін мәнмәтін қосыңыз."
  },
  "Готовность задачи": {
    "en": "Brief readiness",
    "kk": "Міндеттің дайындығы"
  },
  "Не опубликовано": {
    "en": "Unpublished",
    "kk": "Жарияланбаған"
  },
  "Откликов:": {
    "en": "Proposals:",
    "kk": "Ұсыныстар:"
  },
  "Открыть карточку": {
    "en": "View brief",
    "kk": "Карточканы ашу"
  },
  "Обзор": {
    "en": "Overview",
    "kk": "Шолу"
  },
  "Каталог задач": {
    "en": "Task catalog",
    "kk": "Міндеттер каталогы"
  },
  "Отклики команд": {
    "en": "Team proposals",
    "kk": "Командалардың ұсыныстары"
  },
  "Отклики": {
    "en": "Proposals",
    "kk": "Ұсыныстар"
  },
  "Команды": {
    "en": "Commands",
    "kk": "Пәрмендер"
  },
  "Первый шаг.": {
    "en": "Small starts.",
    "kk": "Алғашқы қадам."
  },
  "Реальный результат.": {
    "en": "Real impact.",
    "kk": "Нақты нәтиже."
  },
  "Предложите задачу.": {
    "en": "Bring a challenge.",
    "kk": "Міндет ұсыныңыз."
  },
  "Создайте полезное решение.": {
    "en": "Build something useful.",
    "kk": "Пайдалы шешім жасаңыз."
  },
  "Демонстрационный кабинет": {
    "en": "Demo workspace",
    "kk": "Демо кабинет"
  },
  "Вход без регистрации": {
    "en": "No sign-in required",
    "kk": "Тіркелусіз кіру"
  },
  "Кабинет бизнеса": {
    "en": "Business workspace",
    "kk": "Бизнес кабинеті"
  },
  "Кабинет": {
    "en": "Workspace",
    "kk": "Кабинет"
  },
  "Карточка задачи": {
    "en": "Project brief",
    "kk": "Міндет карточкасы"
  },
  "Редактировать": {
    "en": "Edit brief",
    "kk": "Өңдеу"
  },
  "Новая задача": {
    "en": "New challenge",
    "kk": "Жаңа міндет"
  },
  "Отправить отклик": {
    "en": "Submit proposal",
    "kk": "Ұсыныс жіберу"
  },
  "Переключить роль": {
    "en": "Switch role",
    "kk": "Рөлді ауыстыру"
  },
  "Команда студентов": {
    "en": "Student team",
    "kk": "Студенттер командасы"
  },
  "Бизнес": {
    "en": "Business",
    "kk": "Бизнес"
  },
  "Создано для HackAlem AI / AI Sana": {
    "en": "Built for HackAlem AI / AI Sana",
    "kk": "HackAlem AI / AI Sana үшін жасалған"
  },
  "От вопроса к сотрудничеству.": {
    "en": "From a question to collaboration.",
    "kk": "Сұрақтан ынтымақтастыққа."
  },
  "НАЧНИТЕ СОТРУДНИЧЕСТВО ЗДЕСЬ": {
    "en": "YOUR NEXT COLLABORATION STARTS HERE",
    "kk": "ЫНТЫМАҚТАСТЫҚТЫ ОСЫНДА БАСТАҢЫЗ"
  },
  "Большие идеи. Понятные шаги.": {
    "en": "Big ideas. Clear next steps.",
    "kk": "Үлкен идеялар. Нақты қадамдар."
  },
  "Ваши навыки. Реальный результат.": {
    "en": "Your skills. Real impact.",
    "kk": "Сіздің дағдыларыңыз. Нақты нәтиже."
  },
  "Превратите бизнес-задачу в проект для студенческой команды.": {
    "en": "Turn a business challenge into a student project.",
    "kk": "Бизнес-міндетті студенттер жобасына айналдырыңыз."
  },
  "Найдите задачу бизнеса и предложите своё решение.": {
    "en": "Find a challenge and propose your solution.",
    "kk": "Бизнес міндетін тауып, шешіміңізді ұсыныңыз."
  },
  "Создать задачу": {
    "en": "Create a task",
    "kk": "Міндет құру"
  },
  "Найти задачу": {
    "en": "Explore tasks",
    "kk": "Міндет табу"
  },
  "БИЗНЕС × СТУДЕНТЫ": {
    "en": "BUSINESS × STUDENTS",
    "kk": "БИЗНЕС × СТУДЕНТТЕР"
  },
  "Понятная задача —": {
    "en": "A clear challenge is",
    "kk": "Түсінікті міндет —"
  },
  "первый шаг к результату.": {
    "en": "the first step to impact.",
    "kk": "нәтижеге алғашқы қадам."
  },
  "Опишите проблему. Уточните детали.": {
    "en": "Describe the challenge. Clarify the details.",
    "kk": "Мәселені сипаттаңыз. Мәліметтерді нақтылаңыз."
  },
  "Найдите команду для её решения.": {
    "en": "Find a team to bring it to life.",
    "kk": "Оны шешетін команда табыңыз."
  },
  "Начните с идеи": {
    "en": "Start with your idea",
    "kk": "Идеядан бастаңыз"
  },
  "Найдите свой проект": {
    "en": "Find your project",
    "kk": "Жобаңызды табыңыз"
  },
  "Задача бизнеса": {
    "en": "Business challenge",
    "kk": "Бизнес міндеті"
  },
  "Понятная карточка": {
    "en": "Clear project brief",
    "kk": "Түсінікті карточка"
  },
  "ГОТОВО": {
    "en": "READY",
    "kk": "ДАЙЫН"
  },
  "Опубликованные задачи": {
    "en": "Published challenges",
    "kk": "Жарияланған міндеттер"
  },
  "открыты для предложений": {
    "en": "open to ideas",
    "kk": "ұсыныстарға ашық"
  },
  "Черновики": {
    "en": "Drafts",
    "kk": "Жобалар"
  },
  "дополните детали": {
    "en": "keep shaping them",
    "kk": "мәліметтерді толықтырыңыз"
  },
  "готовы к работе": {
    "en": "ready to collaborate",
    "kk": "жұмысқа дайын"
  },
  "ожидают решения": {
    "en": "awaiting review",
    "kk": "шешім күтуде"
  },
  "Ваш кабинет": {
    "en": "Your workspace",
    "kk": "Сіздің кабинетіңіз"
  },
  "Возможности для вас": {
    "en": "Explore opportunities",
    "kk": "Сізге арналған мүмкіндіктер"
  },
  "Все ваши черновики и опубликованные задачи.": {
    "en": "Your drafts and published briefs in one place.",
    "kk": "Барлық жобаларыңыз бен жарияланған міндеттеріңіз."
  },
  "Проекты с понятными целями и местом для новых идей.": {
    "en": "Projects with clear goals and room for fresh ideas.",
    "kk": "Мақсаты айқын, жаңа идеяларға ашық жобалар."
  },
  "Открыть каталог": {
    "en": "View catalog",
    "kk": "Каталогты ашу"
  },
  "НАЙДИТЕ СВОЮ ЗАДАЧУ": {
    "en": "FIND YOUR NEXT CHALLENGE",
    "kk": "ӨЗ МІНДЕТІҢІЗДІ ТАБЫҢЫЗ"
  },
  "Идеи ищут исполнителей.": {
    "en": "Ideas looking for builders.",
    "kk": "Идеялар орындаушыларын іздейді."
  },
  "Реальные задачи бизнеса и возможности применить свои навыки.": {
    "en": "Real business needs and a place to use your skills.",
    "kk": "Нақты бизнес міндеттері мен дағдыларыңызды қолдану мүмкіндігі."
  },
  "задач": {
    "en": "tasks",
    "kk": "міндет"
  },
  "Поиск задач": {
    "en": "Search tasks",
    "kk": "Міндеттерді іздеу"
  },
  "Фильтр по теме": {
    "en": "Topic filter",
    "kk": "Тақырып сүзгісі"
  },
  "Фильтр по готовности": {
    "en": "Readiness filter",
    "kk": "Дайындық сүзгісі"
  },
  "Сначала готовые": {
    "en": "Highest readiness",
    "kk": "Алдымен дайындары"
  },
  "Можно откликнуться на любую опубликованную задачу. Рейтинг показывает полноту подтверждённых сведений, а не качество проекта.": {
    "en": "Every published task is open to proposals. Readiness measures confirmed completeness, not project quality.",
    "kk": "Кез келген жарияланған міндетке ұсыныс беруге болады. Рейтинг жоба сапасын емес, расталған мәліметтердің толықтығын көрсетеді."
  },
  "Задачи не найдены": {
    "en": "No matching challenges",
    "kk": "Міндеттер табылмады"
  },
  "Измените тему, уровень готовности или поисковый запрос.": {
    "en": "Try another topic, readiness level, or search.",
    "kk": "Тақырыпты, дайындық деңгейін немесе іздеу сұрауын өзгертіңіз."
  },
  "Назад": {
    "en": "Back",
    "kk": "Артқа"
  },
  "Уточните карточку задачи": {
    "en": "Shape your project brief",
    "kk": "Міндет карточкасын нақтылаңыз"
  },
  "Проверьте новую карточку": {
    "en": "Review your new brief",
    "kk": "Жаңа карточканы тексеріңіз"
  },
  "Указывайте только известные сведения. Остальные поля можно оставить пустыми.": {
    "en": "Use only information you know. Unknown fields can stay empty.",
    "kk": "Тек белгілі мәліметтерді жазыңыз. Қалған өрістерді бос қалдыруға болады."
  },
  "После сохранения задача станет черновиком. Проверьте, подтвердите и опубликуйте её снова.": {
    "en": "Saving returns this task to draft. Review, confirm, and publish it again.",
    "kk": "Сақтағаннан кейін міндет жобаға айналады. Тексеріп, растап, қайта жариялаңыз."
  },
  "После сохранения проверьте и подтвердите черновик на следующем экране, чтобы получить баллы.": {
    "en": "After saving, review and confirm the draft to earn readiness points.",
    "kk": "Ұпай алу үшін сақталған жобаны келесі бетте тексеріп, растаңыз."
  },
  "Название задачи": {
    "en": "Project title",
    "kk": "Міндет атауы"
  },
  "Краткое и понятное название": {
    "en": "A short, specific title",
    "kk": "Қысқа әрі түсінікті атау"
  },
  "Отрасль / тема": {
    "en": "Industry / topic",
    "kk": "Сала / тақырып"
  },
  "Нет сведений? Оставьте поле пустым и уточните у бизнеса.": {
    "en": "Unknown? Leave empty and clarify with the business.",
    "kk": "Мәлімет жоқ па? Бос қалдырып, бизнестен нақтылаңыз."
  },
  "Для начисления баллов:": {
    "en": "For readiness points:",
    "kk": "Ұпай алу үшін:"
  },
  "+ символов": {
    "en": "+ characters",
    "kk": "+ таңба"
  },
  "и числовой показатель": {
    "en": "and a numeric target",
    "kk": "және сандық көрсеткіш"
  },
  ", затем подтверждение бизнеса.": {
    "en": ", then business confirmation.",
    "kk": ", содан кейін бизнес растауы."
  },
  "Все сведения остаются под вашим контролем.": {
    "en": "You stay in control of every detail.",
    "kk": "Барлық мәлімет өз бақылауыңызда."
  },
  "Сохранить": {
    "en": "Save",
    "kk": "Сақтау:"
  },
  "изменения": {
    "en": "changes",
    "kk": "өзгерістер"
  },
  "черновик": {
    "en": "draft",
    "kk": "жоба"
  },
  "ШАГ 2 ИЗ 3 · УТОЧНИТЕ ДЕТАЛИ": {
    "en": "STEP 2 OF 3 · ADD CLARITY",
    "kk": "3 ҚАДАМНЫҢ 2-СІ · НАҚТЫЛАҢЫЗ"
  },
  "Несколько вопросов для ясной задачи.": {
    "en": "A few questions. A clearer brief.",
    "kk": "Міндетті нақтылайтын бірнеше сұрақ."
  },
  "Ответьте на известные вопросы. На следующем шаге можно изменить любое поле.": {
    "en": "Answer what you can. Refine any field in the next step.",
    "kk": "Білетін сұрақтарға жауап беріңіз. Келесі қадамда кез келген өрісті өзгерте аласыз."
  },
  "Оставьте пустым, если не знаете": {
    "en": "Leave blank if unknown",
    "kk": "Білмесеңіз, бос қалдырыңыз"
  },
  "Сформировать карточку": {
    "en": "Build editable brief",
    "kk": "Карточка жасау"
  },
  "ШАГ 1 ИЗ 3 · НАЧНИТЕ С ПРОБЛЕМЫ": {
    "en": "STEP 1 OF 3 · START SIMPLE",
    "kk": "3 ҚАДАМНЫҢ 1-І · МӘСЕЛЕДЕН БАСТАҢЫЗ"
  },
  "Какую задачу нужно решить?": {
    "en": "What is your business challenge?",
    "kk": "Қандай міндетті шешу керек?"
  },
  "Начните с описания проблемы. Детали можно уточнить позже.": {
    "en": "Start with the problem. You can refine the details later.",
    "kk": "Мәселені сипаттаудан бастаңыз. Мәліметтерді кейін нақтылауға болады."
  },
  "Опишите проблему": {
    "en": "Describe your problem",
    "kk": "Мәселені сипаттаңыз"
  },
  "Например: в нашем магазине часто заканчиваются популярные товары. Нужно улучшить планирование запасов.": {
    "en": "For example: Our shop keeps running out of popular items. We need better stock planning.",
    "kk": "Мысалы: дүкенімізде сұраныстағы тауарлар жиі таусылады. Қорды жоспарлауды жақсарту қажет."
  },
  "✧ Локальный режим · Шаблонные вопросы без обращения к внешнему ИИ.": {
    "en": "✧ Local mock mode · Template questions, no external AI calls.",
    "kk": "✧ Жергілікті режим · Сыртқы ЖИ қолданбайтын үлгі сұрақтар."
  },
  "✧ Уточнение с ИИ · Описание будет отправлено настроенному AI-провайдеру.": {
    "en": "✧ AI clarification · Your description is sent to the configured AI provider.",
    "kk": "✧ ЖИ арқылы нақтылау · Сипаттама бапталған ЖИ провайдеріне жіберіледі."
  },
  "Ответы переносятся в карточку без выдуманных сведений.": {
    "en": "Answers are copied into the brief without invented details.",
    "kk": "Жауаптар ойдан шығарылған мәліметтерсіз карточкаға көшіріледі."
  },
  "Уточнить задачу": {
    "en": "Clarify my task",
    "kk": "Міндетті нақтылау"
  },
  "Задача не найдена": {
    "en": "Task not found",
    "kk": "Міндет табылмады"
  },
  "Эта карточка недоступна.": {
    "en": "This brief is unavailable.",
    "kk": "Бұл карточка қолжетімсіз."
  },
  "Каталог": {
    "en": "Catalog",
    "kk": "Каталог"
  },
  "ОПУБЛИКОВАНО": {
    "en": "PUBLISHED CHALLENGE",
    "kk": "ЖАРИЯЛАНҒАН"
  },
  "НЕОПУБЛИКОВАННЫЙ ЧЕРНОВИК": {
    "en": "UNPUBLISHED DRAFT",
    "kk": "ЖАРИЯЛАНБАҒАН ЖОБА"
  },
  "Не указано — нужно уточнить.": {
    "en": "Not provided — clarification needed.",
    "kk": "Көрсетілмеген — нақтылау қажет."
  },
  "Подтверждено бизнесом": {
    "en": "Business confirmed",
    "kk": "Бизнес растаған"
  },
  "Ожидает подтверждения бизнеса": {
    "en": "Awaiting business confirmation",
    "kk": "Бизнес растауын күтуде"
  },
  "Проверка и публикация": {
    "en": "Review and publish",
    "kk": "Тексеру және жариялау"
  },
  "Подтвердите, что карточка точно отражает сведения бизнеса. Пустые поля останутся незаполненными.": {
    "en": "Confirm that this card reflects the information your business supplied. Empty fields remain unknown.",
    "kk": "Карточка бизнес мәліметтеріне сай екенін растаңыз. Бос өрістер толтырылмайды."
  },
  "Карточка подтверждена": {
    "en": "Card confirmed",
    "kk": "Карточка расталды"
  },
  "Подтвердить карточку": {
    "en": "Confirm reviewed card",
    "kk": "Карточканы растау"
  },
  "Опубликовано": {
    "en": "Published",
    "kk": "Жарияланды"
  },
  "Опубликовать задачу": {
    "en": "Publish task",
    "kk": "Міндетті жариялау"
  },
  "Отклики:": {
    "en": "Proposals:",
    "kk": "Ұсыныстар:"
  },
  "Есть идея решения?": {
    "en": "Have an idea for this challenge?",
    "kk": "Шешім идеясы бар ма?"
  },
  "Предложите свой подход. Бизнес самостоятельно выбирает команды.": {
    "en": "Share your approach. The business chooses collaborators manually.",
    "kk": "Өз тәсіліңізді ұсыныңыз. Бизнес командаларды өзі таңдайды."
  },
  "ГОТОВНОСТЬ ЗАДАЧИ": {
    "en": "BRIEF READINESS",
    "kk": "МІНДЕТТІҢ ДАЙЫНДЫҒЫ"
  },
  "Все категории заполнены и подтверждены.": {
    "en": "All categories are complete and confirmed.",
    "kk": "Барлық санаттар толтырылып, расталды."
  },
  "До": {
    "en": "Target:",
    "kk": "Мақсат:"
  },
  "полной готовности": {
    "en": "full completeness",
    "kk": "толық дайындық"
  },
  "уровня «": {
    "en": "level “",
    "kk": "деңгей «"
  },
  "осталось баллов:": {
    "en": "points remaining:",
    "kk": "қалған ұпай:"
  },
  "Из чего складывается рейтинг": {
    "en": "What makes up your score",
    "kk": "Рейтинг неден құралады"
  },
  "Что улучшить": {
    "en": "Next steps",
    "kk": "Нені жақсарту керек"
  },
  "Добавьте сведения:": {
    "en": "Add information:",
    "kk": "Мәлімет қосыңыз:"
  },
  "Дополните поле «": {
    "en": "Expand field “",
    "kk": "Өрісті толықтырыңыз: «"
  },
  "» до": {
    "en": "” to",
    "kk": "», кемінде"
  },
  "с числовым показателем": {
    "en": "with a numeric target",
    "kk": "сандық көрсеткішпен"
  },
  "Проверьте и подтвердите:": {
    "en": "Review and confirm:",
    "kk": "Тексеріп, растаңыз:"
  },
  "Карточка готова к обсуждению с командой.": {
    "en": "Your brief is ready for a team discussion.",
    "kk": "Карточка командамен талқылауға дайын."
  },
  "Баллы начисляются за заполненные и подтверждённые сведения. Чем выше рейтинг, тем выше позиция. Все опубликованные задачи открыты для откликов.": {
    "en": "Points reflect completed, confirmed information. Higher scores rank first; all published tasks remain open.",
    "kk": "Ұпай толтырылған және расталған мәліметтерге беріледі. Рейтинг жоғары болса, орын да жоғары. Барлық жарияланған міндеттер ұсыныстарға ашық."
  },
  "Задача недоступна": {
    "en": "Task unavailable",
    "kk": "Міндет қолжетімсіз"
  },
  "Выберите опубликованную задачу в каталоге.": {
    "en": "Choose a published task from the catalog.",
    "kk": "Каталогтан жарияланған міндетті таңдаңыз."
  },
  "Предложите своё решение.": {
    "en": "Bring your idea to the table.",
    "kk": "Өз шешіміңізді ұсыныңыз."
  },
  "Ваш отклик на задачу": {
    "en": "Your proposal for",
    "kk": "Міндетке ұсынысыңыз:"
  },
  "Идея решения": {
    "en": "Solution idea",
    "kk": "Шешім идеясы"
  },
  "Как вы предлагаете решить эту проблему?": {
    "en": "How would you solve this problem?",
    "kk": "Бұл мәселені қалай шешуді ұсынасыз?"
  },
  "План": {
    "en": "Plan",
    "kk": "Жоспар"
  },
  "Опишите этапы работы и способ проверки результата.": {
    "en": "Describe your steps and how you will validate the result.",
    "kk": "Жұмыс кезеңдері мен нәтижені тексеру тәсілін сипаттаңыз."
  },
  "Срок выполнения": {
    "en": "Estimated timeline",
    "kk": "Орындау мерзімі"
  },
  "Например, 3 недели": {
    "en": "e.g. 3 weeks",
    "kk": "Мысалы, 3 апта"
  },
  "Ссылка на прототип": {
    "en": "Prototype URL",
    "kk": "Прототип сілтемесі"
  },
  "ВЫБЕРИТЕ КОМАНДЫ": {
    "en": "CHOOSE YOUR COLLABORATORS",
    "kk": "КОМАНДАЛАРДЫ ТАҢДАҢЫЗ"
  },
  "ОТКЛИКИ КОМАНД": {
    "en": "TEAM SUBMISSIONS",
    "kk": "КОМАНДАЛАРДЫҢ ҰСЫНЫСТАРЫ"
  },
  "Сравните предложения команд.": {
    "en": "Compare team proposals.",
    "kk": "Командалардың ұсыныстарын салыстырыңыз."
  },
  "Предложения команд.": {
    "en": "Team proposals.",
    "kk": "Командалардың ұсыныстары."
  },
  "Сравните подходы. Выберите одну, несколько или ни одной команды.": {
    "en": "Compare approaches. Accept one team, several, or none.",
    "kk": "Тәсілдерді салыстырыңыз. Бір, бірнеше команда таңдаңыз немесе ешқайсысын таңдамаңыз."
  },
  "Общий демонстрационный список откликов и решений бизнеса.": {
    "en": "Shared demo view of team proposals and business decisions.",
    "kk": "Ұсыныстар мен бизнес шешімдерінің ортақ демо тізімі."
  },
  "Все отклики": {
    "en": "Show all proposals",
    "kk": "Барлық ұсыныстар"
  },
  "ИДЕЯ РЕШЕНИЯ": {
    "en": "SOLUTION IDEA",
    "kk": "ШЕШІМ ИДЕЯСЫ"
  },
  "ПЛАН РАБОТЫ": {
    "en": "DELIVERY PLAN",
    "kk": "ЖҰМЫС ЖОСПАРЫ"
  },
  "СРОКИ": {
    "en": "TIMELINE",
    "kk": "МЕРЗІМДЕР"
  },
  "Открыть прототип": {
    "en": "View prototype",
    "kk": "Прототипті ашу"
  },
  "Решение бизнеса": {
    "en": "Business decision",
    "kk": "Бизнес шешімі"
  },
  "Выбрать команду": {
    "en": "Accept team",
    "kk": "Команданы таңдау"
  },
  "Отклонить": {
    "en": "Reject",
    "kk": "Қабылдамау"
  },
  "Вернуть на рассмотрение": {
    "en": "Reset to pending",
    "kk": "Қарауға қайтару"
  },
  "Подтвердить прогресс": {
    "en": "Verify progress",
    "kk": "Ілгерілеуді растау"
  },
  "+25 баллов за этап": {
    "en": "+25 points per milestone",
    "kk": "әр кезеңге +25 ұпай"
  },
  "Подтверждайте только проверенную работу. Каждый этап принятого отклика даёт баллы один раз.": {
    "en": "Confirm only reviewed work. Each milestone awards points once per accepted proposal.",
    "kk": "Тек тексерілген жұмысты растаңыз. Әр қабылданған ұсыныс кезеңіне ұпай бір рет беріледі."
  },
  "Подтверждено:": {
    "en": "Verified:",
    "kk": "Расталды:"
  },
  "Подтвердить:": {
    "en": "Confirm:",
    "kk": "Растау:"
  },
  "Пока нет откликов": {
    "en": "No proposals yet",
    "kk": "Әзірге ұсыныстар жоқ"
  },
  "Опубликуйте задачу, чтобы команды могли предложить свои решения.": {
    "en": "Publish a task so teams can propose solutions.",
    "kk": "Командалар шешім ұсынуы үшін міндетті жариялаңыз."
  },
  "Перейти к задачам": {
    "en": "Browse tasks",
    "kk": "Міндеттерге өту"
  },
  "ЛЮДИ, КОТОРЫЕ ВОПЛОЩАЮТ ИДЕИ": {
    "en": "THE PEOPLE BEHIND THE IDEAS",
    "kk": "ИДЕЯЛАРДЫ ЖҮЗЕГЕ АСЫРАТЫН АДАМДАР"
  },
  "Знакомьтесь с командами.": {
    "en": "Meet the builders.",
    "kk": "Командалармен танысыңыз."
  },
  "Пять команд с разными навыками. Баллы начисляются за подтверждённый бизнесом прогресс.": {
    "en": "Five teams, different strengths. Points come from business-verified progress.",
    "kk": "Дағдылары әртүрлі бес команда. Ұпай бизнестің растаған ілгерілеуіне беріледі."
  },
  "баллов за прогресс": {
    "en": "verified points",
    "kk": "ілгерілеу ұпайы"
  },
  "Вернитесь в кабинет.": {
    "en": "Return to your workspace.",
    "kk": "Кабинетке оралыңыз."
  },
  "Переключитесь в режим бизнеса для редактирования карточек.": {
    "en": "Switch to Business to edit briefs.",
    "kk": "Карточкаларды өңдеу үшін бизнес режиміне ауысыңыз."
  },
  "Заполните это поле.": {
    "en": "Fill in this field.",
    "kk": "Бұл өрісті толтырыңыз."
  },
  "Укажите корректную ссылку, например https://example.com.": {
    "en": "Enter a valid URL, such as https://example.com.",
    "kk": "Дұрыс сілтеме енгізіңіз, мысалы https://example.com."
  },
  "Введите не менее": {
    "en": "Minimum characters:",
    "kk": "Таңбалардың ең аз саны:"
  },
  "символов.": {
    "en": "characters.",
    "kk": "таңба."
  },
  "Проверьте значение поля.": {
    "en": "Check this field.",
    "kk": "Өрістің мәнін тексеріңіз."
  },
  "Карточка подтверждена. Рейтинг пересчитан.": {
    "en": "Card confirmed. Readiness recalculated.",
    "kk": "Карточка расталды. Рейтинг қайта есептелді."
  },
  "Задача опубликована в общем каталоге.": {
    "en": "Task published in the shared catalog.",
    "kk": "Міндет ортақ каталогта жарияланды."
  },
  "Решение по отклику сохранено.": {
    "en": "Proposal decision saved.",
    "kk": "Ұсыныс бойынша шешім сақталды."
  },
  "Прогресс подтверждён. Команда получила 25 баллов.": {
    "en": "Progress verified. Team awarded 25 points.",
    "kk": "Ілгерілеу расталды. Командаға 25 ұпай берілді."
  },
  "Подождите…": {
    "en": "Working…",
    "kk": "Күте тұрыңыз…"
  },
  "Черновик сохранён. Проверьте и подтвердите его для пересчёта рейтинга.": {
    "en": "Draft saved. Review and confirm to update readiness.",
    "kk": "Жоба сақталды. Рейтингті жаңарту үшін тексеріп, растаңыз."
  },
  "Отклик отправлен. Решение примет представитель бизнеса.": {
    "en": "Proposal submitted. The business will decide.",
    "kk": "Ұсыныс жіберілді. Шешімді бизнес өкілі қабылдайды."
  },
  "Не удалось загрузить кабинет": {
    "en": "Could not load the workspace",
    "kk": "Кабинетті жүктеу мүмкін болмады"
  },
  "Повторить": {
    "en": "Try again",
    "kk": "Қайталау"
  },
  "Язык интерфейса": {
    "en": "Interface language",
    "kk": "Интерфейс тілі"
  },
  "Светлая тема": {
    "en": "Light theme",
    "kk": "Жарық тақырып"
  },
  "Тёмная тема": {
    "en": "Dark theme",
    "kk": "Қараңғы тақырып"
  },
  "Голосовой помощник": {
    "en": "Voice assistant",
    "kk": "Дауыстық көмекші"
  },
  "Закрыть помощника": {
    "en": "Close assistant",
    "kk": "Көмекшіні жабу"
  },
  "Диктовка": {
    "en": "Dictation",
    "kk": "Диктант"
  },
  "Начать запись": {
    "en": "Start listening",
    "kk": "Тыңдауды бастау"
  },
  "Остановить": {
    "en": "Stop",
    "kk": "Тоқтату"
  },
  "Слушаю…": {
    "en": "Listening…",
    "kk": "Тыңдап тұрмын…"
  },
  "Прочитать страницу": {
    "en": "Read page aloud",
    "kk": "Бетті дауыстап оқу"
  },
  "Помощь": {
    "en": "Help",
    "kk": "Көмек"
  },
  "Режим помощника": {
    "en": "Assistant mode",
    "kk": "Көмекші режимі"
  },
  "Выберите поле, затем включите диктовку. Текст вставляется без отправки формы.": {
    "en": "Select a field, then start dictation. Text is inserted without submitting the form.",
    "kk": "Өрісті таңдап, диктантты қосыңыз. Мәтін пішінді жібермей енгізіледі."
  },
  "Микрофон включается только по кнопке. Браузер может передавать аудио своему сервису распознавания.": {
    "en": "The microphone starts only when you press the button. Your browser may send audio to its recognition service.",
    "kk": "Микрофон тек батырманы басқанда қосылады. Браузер аудионы өзінің тану қызметіне жіберуі мүмкін."
  },
  "Скажите: «каталог», «создать задачу», «отклики», «команды», «обзор», «светлая тема», «тёмная тема», «прочитай страницу» или «помощь».": {
    "en": "Say: “catalog”, “create task”, “proposals”, “teams”, “overview”, “light mode”, “dark mode”, “read page” or “help”.",
    "kk": "«Каталог», «міндет құру», «ұсыныстар», «командалар», «шолу», «жарық тақырып», «қараңғы тақырып», «бетті оқы» немесе «көмек» деп айтыңыз."
  },
  "Распознавание речи недоступно в этом браузере. Используйте обычный ввод.": {
    "en": "Speech recognition is unavailable in this browser. Use the keyboard instead.",
    "kk": "Бұл браузерде сөйлеуді тану қолжетімсіз. Пернетақтаны пайдаланыңыз."
  },
  "Сначала выберите текстовое поле на странице.": {
    "en": "Select a text field on the page first.",
    "kk": "Алдымен беттегі мәтін өрісін таңдаңыз."
  },
  "Запись остановлена.": {
    "en": "Listening stopped.",
    "kk": "Тыңдау тоқтатылды."
  },
  "Текст добавлен в поле. Проверьте его перед сохранением.": {
    "en": "Text inserted. Review it before saving.",
    "kk": "Мәтін өріске енгізілді. Сақтамас бұрын тексеріңіз."
  },
  "Поле больше недоступно. Выберите его снова.": {
    "en": "The field is no longer available. Select it again.",
    "kk": "Өріс енді қолжетімсіз. Оны қайта таңдаңыз."
  },
  "Не удалось распознать речь. Попробуйте ещё раз.": {
    "en": "No speech recognized. Try again.",
    "kk": "Сөйлеуді тану мүмкін болмады. Қайталап көріңіз."
  },
  "Разрешите доступ к микрофону в настройках браузера.": {
    "en": "Allow microphone access in your browser settings.",
    "kk": "Браузер баптауларында микрофонға рұқсат беріңіз."
  },
  "Микрофон не найден или недоступен.": {
    "en": "Microphone not found or unavailable.",
    "kk": "Микрофон табылмады немесе қолжетімсіз."
  },
  "Ошибка сети при распознавании речи.": {
    "en": "Network error during speech recognition.",
    "kk": "Сөйлеуді тану кезінде желі қатесі болды."
  },
  "Этот язык распознавания недоступен в вашем браузере.": {
    "en": "This recognition language is unavailable in your browser.",
    "kk": "Бұл тану тілі браузеріңізде қолжетімсіз."
  },
  "Не удалось включить распознавание речи.": {
    "en": "Could not start speech recognition.",
    "kk": "Сөйлеуді тануды қосу мүмкін болмады."
  },
  "Команда не распознана. Откройте помощь или выберите диктовку.": {
    "en": "Unknown command. Open help or select dictation.",
    "kk": "Пәрмен танылмады. Көмекті ашыңыз немесе диктантты таңдаңыз."
  },
  "Переход выполнен.": {
    "en": "Page opened.",
    "kk": "Бет ашылды."
  },
  "Тема изменена.": {
    "en": "Theme changed.",
    "kk": "Тақырып өзгертілді."
  },
  "Для создания задачи переключитесь в режим бизнеса.": {
    "en": "Switch to Business to create a task.",
    "kk": "Міндет құру үшін бизнес режиміне ауысыңыз."
  },
  "Озвучивание недоступно в этом браузере.": {
    "en": "Speech synthesis is unavailable in this browser.",
    "kk": "Бұл браузерде дауыстап оқу қолжетімсіз."
  },
  "Для выбранного языка нет голоса. Установите его в системе или выберите другой язык.": {
    "en": "No voice is installed for this language. Install one in your system or choose another language.",
    "kk": "Таңдалған тілдің дауысы орнатылмаған. Жүйеде орнатыңыз немесе басқа тілді таңдаңыз."
  },
  "Читаю страницу…": {
    "en": "Reading the page…",
    "kk": "Бетті оқып тұрмын…"
  },
  "Озвучивание завершено.": {
    "en": "Reading finished.",
    "kk": "Оқу аяқталды."
  },
  "Не удалось озвучить текст.": {
    "en": "Could not read the text aloud.",
    "kk": "Мәтінді дауыстап оқу мүмкін болмады."
  },
  "Поле заполнено до максимальной длины.": {
    "en": "The field has reached its maximum length.",
    "kk": "Өріс ең үлкен ұзындыққа жетті."
  },
  "Не удалось обновить вопросы. Попробуйте переключить язык снова.": {
    "en": "Could not update questions. Try switching the language again.",
    "kk": "Сұрақтарды жаңарту мүмкін болмады. Тілді қайта ауыстырып көріңіз."
  },
  "Локальный режим · Вопросы сформированы по шаблонам. Внешний ИИ не вызывался.": {
    "en": "Local mock mode · Template questions. No external AI was called.",
    "kk": "Жергілікті режим · Үлгі бойынша сұрақтар. Сыртқы ЖИ шақырылмады."
  },
  "Вопросы подготовлены ИИ · Проверьте ответы перед публикацией.": {
    "en": "AI-generated questions · Review your answers before publishing.",
    "kk": "Сұрақтарды ЖИ дайындады · Жариялау алдында жауаптарды тексеріңіз."
  },
  "ИИ недоступен или вернул некорректный ответ. Используются локальные шаблоны вопросов.": {
    "en": "AI was unavailable or returned invalid data. Using local template questions.",
    "kk": "ЖИ қолжетімсіз немесе қате жауап берді. Жергілікті үлгі сұрақтар қолданылады."
  },
  "Укажите название и тему задачи.": {
    "en": "Title and topic are required.",
    "kk": "Міндет атауы мен тақырыбын көрсетіңіз."
  },
  "Перед публикацией проверьте и подтвердите карточку.": {
    "en": "Review and confirm the card before publishing.",
    "kk": "Жариялау алдында карточканы тексеріп, растаңыз."
  },
  "Сначала выберите принятый отклик.": {
    "en": "Select an accepted proposal first.",
    "kk": "Алдымен қабылданған ұсынысты таңдаңыз."
  },
  "Неизвестный этап.": {
    "en": "Invalid milestone.",
    "kk": "Белгісіз кезең."
  },
  "Баллы за этот этап уже начислены.": {
    "en": "This milestone has already been awarded.",
    "kk": "Бұл кезеңге ұпай берілген."
  },
  "Запрос слишком большой.": {
    "en": "Request too large.",
    "kk": "Сұрау тым үлкен."
  },
  "Некорректный JSON в запросе.": {
    "en": "Invalid JSON request.",
    "kk": "Сұраудағы JSON қате."
  },
  "Тело запроса должно быть объектом JSON.": {
    "en": "Request body must be a JSON object.",
    "kk": "Сұрау денесі JSON нысаны болуы керек."
  },
  "Эта задача ещё не опубликована.": {
    "en": "This task is not published.",
    "kk": "Бұл міндет әлі жарияланбаған."
  },
  "Выберите существующую команду.": {
    "en": "Choose a valid team.",
    "kk": "Бар команданы таңдаңыз."
  },
  "Укажите корректную ссылку на прототип.": {
    "en": "Enter a valid prototype URL.",
    "kk": "Прототиптің дұрыс сілтемесін енгізіңіз."
  },
  "Ссылка на прототип должна начинаться с http:// или https://.": {
    "en": "Prototype URL must start with http:// or https://.",
    "kk": "Прототип сілтемесі http:// немесе https:// арқылы басталуы керек."
  },
  "Некорректное решение по отклику.": {
    "en": "Invalid proposal decision.",
    "kk": "Ұсыныс бойынша шешім қате."
  },
  "Неизвестный маршрут API.": {
    "en": "Unknown API endpoint.",
    "kk": "Белгісіз API бағыты."
  },
  "Произошла ошибка. Попробуйте снова.": {
    "en": "Something went wrong. Please try again.",
    "kk": "Қате пайда болды. Қайталап көріңіз."
  },
  "Описание проблемы": {
    "en": "Problem description",
    "kk": "Мәселе сипаттамасы"
  },
  "Название": {
    "en": "Title",
    "kk": "Атауы"
  },
  "Тема": {
    "en": "Topic",
    "kk": "Тақырып"
  },
  "Срок": {
    "en": "Timeline",
    "kk": "Мерзімі"
  },
  "Поле «": {
    "en": "Field “",
    "kk": "Өріс «"
  },
  "»: требуется от": {
    "en": "”: required length from",
    "kk": "»: қажетті ұзындық"
  },
  "до 5000 символов.": {
    "en": "to 5000 characters.",
    "kk": "5000 таңбаға дейін."
  },
  "»: введите текст не длиннее 5000 символов.": {
    "en": "”: enter at most 5000 characters.",
    "kk": "»: 5000 таңбадан аспайтын мәтін енгізіңіз."
  },
  "От идеи к результату": {
    "en": "Ideas into impact",
    "kk": "Идеядан нәтижеге"
  },
  "Загрузка кабинета…": {
    "en": "Loading your workspace…",
    "kk": "Кабинет жүктелуде…"
  },
  "Поле изменилось во время записи. Текст не вставлен; повторите диктовку.": {
    "en": "The field changed while listening. Nothing was inserted; please dictate again.",
    "kk": "Жазу кезінде өріс өзгерді. Мәтін енгізілмеді; қайта айтып көріңіз."
  }
};
 const read=(key,fallback)=>{try{return localStorage.getItem(key)||fallback;}catch{return fallback;}};
 const write=(key,value)=>{try{localStorage.setItem(key,value);}catch{}};
 let language=['ru','en','kk'].includes(read('alem-language','ru'))?read('alem-language','ru'):'ru';
 let theme=read('alem-theme','dark')==='light'?'light':'dark';
 const keys=Object.keys(messages).sort((a,b)=>b.length-a.length);
 const pattern=new RegExp(keys.map(k=>k.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|'),'g');
 function tr(text){return language==='ru'?String(text):String(text).replace(pattern,key=>messages[key][language]);}
 function html(parts,...values){return parts.reduce((out,part,i)=>out+tr(part)+(i<values.length?values[i]:''),'');}
 function apply(){document.documentElement.lang=language;document.documentElement.dataset.theme=theme;document.title='Sana Connect — '+tr('От идеи к результату');const meta=document.querySelector('meta[name="theme-color"]');if(meta?.setAttribute)meta.setAttribute('content',theme==='dark'?'#0d0b12':'#faf8ff');}
 global.AlemI18n={tr,html,messages, get language(){return language;},get theme(){return theme;},
  setLanguage(value){if(!['ru','en','kk'].includes(value))return;language=value;write('alem-language',value);apply();},
  setTheme(value){theme=value==='light'?'light':'dark';write('alem-theme',theme);apply();},apply};
 apply();
})(window);
