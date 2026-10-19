const body = document.body;
const themeToggle = document.querySelector('.theme-toggle');
const languageToggle = document.querySelector('.language-toggle');
const savedTheme = localStorage.getItem('cyfef-theme');

const translations = {
  zh: {
    pageTitle: 'Cyfef — 个人主页', pageDescription: 'Cyfef 的个人主页与作品集。', mainNav: '主导航', themeToggle: '切换主题', socialLinks: '社交链接',
    navAbout: '关于', navWork: '作品', navContact: '联系', availability: '期待参与有意义的创作',
    heroTitle: '你好，我是<br /><span>Cyfef.</span>', heroLede: '我在数字世界里寻找灵感、创造体验，也认真记录每一次成长。这里将会是我的作品、想法与生活切片。',
    browseWork: '浏览作品', talk: '和我聊聊', locationNote: '所在地<br /><strong>你的城市</strong>', keepCreating: '保持<br />创造。',
    aboutTitle: '把<span class="accent-script">好奇</span>变成<br />有温度的作品。', aboutP1: '这是你的个人简介区域。你可以写下自己的专业方向、正在探索的领域，以及希望通过作品传递的价值。', aboutP2: '不需要像简历一样面面俱到——真诚、具体、有一点个性，就足够让人记住你。', learnJourney: '了解我的经历',
    focusTitle: '此刻，我正在<br />探索新的可能。', focusText: '在这里填写你最近关注的方向、正在学习的技术，或想要实现的长期目标。', experienceText: '将数字换成你的经验年限，或者任何值得纪念的里程碑。', yourCity: '你的城市', remoteText: '远程协作 / 欢迎联系', mottoText: '在这里放一句能代表你、影响你，或让你继续前进的话。',
    workTitle: '一些值得<br /><em>被看见</em>的作品。', workIntro: '项目内容已预留。添加真实作品后，你可以展示背景、过程、成果与链接。', projectOne: '项目名称 / Project One', projectTwo: '项目名称 / Project Two', projectThree: '项目名称 / Project Three', projectMeta: '品牌设计 · 网站开发 · 2026', projectOneAria: '项目一，占位内容', projectTwoAria: '项目二，占位内容', projectThreeAria: '项目三，占位内容',
    journeyTitle: '成长不是直线，<br />每一站都算数。', journeyIntro: '在这里整理你的教育、工作与重要经历。', roleNow: '职位或当前身份', orgNow: '公司 / 组织名称', roleNowDesc: '简单描述你负责的事情、获得的成长，以及值得分享的成果。', rolePrevious: '上一段重要经历', orgPrevious: '公司 / 学校 / 组织', rolePreviousDesc: '补充关键项目、团队角色，或这段经历带给你的改变。', roleStart: '故事开始的地方', orgStart: '专业 / 学校 / 第一个项目', roleStartDesc: '记录最初的兴趣、一次转折，或者推动你走到今天的起点。',
    contactTitle: '有个好想法？<br /><em>一起聊聊。</em>', contactText: '这里可以换成你的邮箱、社交账号，或任何你喜欢的联系方式。', footerLine: '以好奇心设计，用认真构建。'
  },
  en: {
    pageTitle: 'Cyfef — Personal Portfolio', pageDescription: "Cyfef's personal portfolio, selected work, ideas, and journey.", mainNav: 'Main navigation', themeToggle: 'Toggle theme', socialLinks: 'Social links',
    navAbout: 'About', navWork: 'Work', navContact: 'Contact', availability: 'AVAILABLE FOR SOMETHING GREAT',
    heroTitle: 'Hello, I’m<br /><span>Cyfef.</span>', heroLede: 'I find inspiration in the digital world, craft thoughtful experiences, and document every step forward. This is where my work, ideas, and fragments of life come together.',
    browseWork: 'Explore my work', talk: 'Let’s talk', locationNote: 'Based in<br /><strong>Your city</strong>', keepCreating: 'Keep<br />creating.',
    aboutTitle: 'Turning <span class="accent-script">curiosity</span> into<br />work with meaning.', aboutP1: 'This is your introduction. Share what you do, the fields you are exploring, and the value you hope to create through your work.', aboutP2: 'It does not need to read like a résumé. Be honest, specific, and a little personal—that is what makes you memorable.', learnJourney: 'Discover my journey',
    focusTitle: 'Right now, I’m<br />exploring what’s next.', focusText: 'Use this space for the ideas, technologies, or long-term goals currently holding your attention.', experienceText: 'Replace this number with your years of experience—or any milestone worth celebrating.', yourCity: 'Your city', remoteText: 'Remote-friendly / Say hello', mottoText: 'Add a line that represents you, moves you, or keeps you going.',
    workTitle: 'Selected work,<br /><em>made to be seen.</em>', workIntro: 'Project slots are ready. Add real work to share the context, process, outcome, and links behind each piece.', projectOne: 'Project One / Title', projectTwo: 'Project Two / Title', projectThree: 'Project Three / Title', projectMeta: 'Brand design · Web development · 2026', projectOneAria: 'Project one, placeholder content', projectTwoAria: 'Project two, placeholder content', projectThreeAria: 'Project three, placeholder content',
    journeyTitle: 'Growth is not linear.<br />Every stop counts.', journeyIntro: 'Use this timeline for your education, work, and defining experiences.', roleNow: 'Current role or identity', orgNow: 'Company / Organization', roleNowDesc: 'Briefly describe what you own, how you have grown, and the outcomes worth sharing.', rolePrevious: 'A previous chapter', orgPrevious: 'Company / School / Organization', rolePreviousDesc: 'Add a key project, your role on the team, or how this experience changed your direction.', roleStart: 'Where the story began', orgStart: 'Field / School / First project', roleStartDesc: 'Capture an early interest, a turning point, or the starting line that led you here.',
    contactTitle: 'Have a good idea?<br /><em>Let’s talk.</em>', contactText: 'Replace this with your email, social profiles, or whichever way you prefer to connect.', footerLine: 'Designed with curiosity. Built with care.'
  }
};

if (savedTheme === 'light') body.classList.add('light');

themeToggle?.addEventListener('click', () => {
  body.classList.toggle('light');
  localStorage.setItem('cyfef-theme', body.classList.contains('light') ? 'light' : 'dark');
});

function applyLanguage(language, updateUrl = true) {
  const lang = translations[language] ? language : 'zh';
  const copy = translations[lang];

  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  document.title = copy.pageTitle;
  document.querySelector('meta[name="description"]')?.setAttribute('content', copy.pageDescription);
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (copy[key]) element.textContent = copy[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    const key = element.dataset.i18nHtml;
    if (copy[key]) element.innerHTML = copy[key];
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    const key = element.dataset.i18nAria;
    if (copy[key]) element.setAttribute('aria-label', copy[key]);
  });

  const current = languageToggle?.querySelector('.language-current');
  const next = languageToggle?.querySelector('.language-next');
  if (current) current.textContent = lang === 'zh' ? '中' : 'EN';
  if (next) next.textContent = lang === 'zh' ? 'EN' : '中';
  if (languageToggle) {
    languageToggle.setAttribute('aria-label', lang === 'zh' ? '切换到英文' : 'Switch to Chinese');
    languageToggle.setAttribute('title', lang === 'zh' ? 'Switch to English' : '切换到中文');
  }

  localStorage.setItem('cyfef-language', lang);
  if (updateUrl) {
    const url = new URL(window.location.href);
    if (lang === 'en') url.searchParams.set('lang', 'en');
    else url.searchParams.delete('lang');
    history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);
  }
}

const queryLanguage = new URLSearchParams(window.location.search).get('lang');
const initialLanguage = ['zh', 'en'].includes(queryLanguage) ? queryLanguage : (localStorage.getItem('cyfef-language') || 'zh');
applyLanguage(initialLanguage, false);

languageToggle?.addEventListener('click', () => {
  applyLanguage(document.documentElement.lang.startsWith('zh') ? 'en' : 'zh');
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element));

const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', (event) => {
  if (!glow) return;
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});

document.querySelectorAll('a[href="#"]').forEach((link) => {
  link.addEventListener('click', (event) => event.preventDefault());
});

document.querySelector('#year').textContent = new Date().getFullYear();
