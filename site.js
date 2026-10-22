// Fill these in when ready. Empty = hidden or "coming soon".
const CONFIG = {
  windowsUrl: 'https://github.com/rabiihajoui/miwayclassroom/releases/latest/download/MI-WAY-Classroom-Setup.exe',
  releaseApi: 'https://api.github.com/repos/rabiihajoui/miwayclassroom/releases/latest',
  donateUrl: '',
  contactEmail: '',
  teacherPhoto: '',
  // Teacher stories: the Google Apps Script web app link (see scripts/stories.gs). Empty = section hidden.
  storiesUrl: 'https://script.google.com/macros/s/AKfycbzds4d-KsP-LtuNuhBcqG3ZQGLf2Cqbzwt1Qq0Klfn7gugJ1lGXNwD-YiLscNY37HGQeA/exec',
  play: { en: 'en', fr: 'fr', ar: 'ar' },
  // Real class videos: put the file in website/videos/, then add { file: 'videos/class-1.mp4', poster: 'videos/class-1.jpg', caption: { en: '', fr: '', ar: '' } }
  classClips: [],
};

const T = {
  fr: {
    nav_how: 'Comment ça marche', nav_features: 'Fonctions', nav_teacher: 'Le professeur', nav_faq: 'Questions',
    hero_h: 'Toute la classe répond <em>en direct</em>',
    hero_p: 'Sur leur propre téléphone. Sans internet, sans compte, sans publicité. Gratuit pour tous les professeurs.',
    get_on: 'Disponible sur', for_laptop: 'Pour votre ordinateur',
    hero_made: 'Créée par un professeur d\'anglais au Maroc, pour les professeurs du monde entier.',
    pain1_h: 'Pas de Wi-Fi à l\'école ?', pain1_p: 'Votre téléphone ou votre ordinateur crée le réseau. Rien ne passe par internet.',
    pain2_h: 'Pas de budget ?', pain2_p: 'Gratuit pour toujours. Pas de compte, pas de pub, pas de limite d\'élèves.',
    pain3_h: 'Pas le temps ?', pain3_p: 'Des leçons prêtes pour votre manuel, ou tapez votre quiz en quelques minutes.',
    how_h: 'Prêt en 1 minute',
    s1_h: 'Activez votre point d\'accès', s1_p: 'Ou le Wi-Fi de l\'école. Internet n\'est pas nécessaire.',
    s2_h: 'Les élèves scannent un QR code', s2_p: 'Ils touchent leur nom. Rien à installer, pas de compte.',
    s3_h: 'Lancez le quiz', s3_p: 'Les réponses arrivent en direct sur votre écran ou le projecteur.',
    video_cap: 'À voir : MI WAY en 30 secondes', nav_tut: 'Tutoriels',
    tut_h: 'Tutoriels vidéo', tut_p: 'Apprenez toute l\'application, pas à pas. Voix en anglais, sous-titres en anglais, français et arabe.',
    tut_laptop: '💻 Ordinateur', tut_phone: '📱 Téléphone', tut_students: 'Élèves', tut_min: 'min', cls_h: 'Dans de vraies classes',
    ttt_k: 'Test · Teach · Test', ttt_h: 'Voyez qui a compris, tout de suite',
    ttt_p1: 'Le test 1 montre ce que la classe sait déjà. L\'application montre les points manqués : vous n\'enseignez que ceux-là. Le test 2 montre les progrès.',
    ttt_proof: 'En 3 semaines, une classe est passée de 42 % à 58 % sur la même compétence.',
    feat_h: 'Tout ce qu\'il faut pour un cours d\'anglais',
    f1_h: 'Prêt pour votre manuel', f1_p: 'Spotlight 1AC–3AC, Outlook, Ticket to English, Gateway et Insights. Ou créez vos leçons pour n\'importe quel manuel.',
    f2_h: 'Les élèves adorent', f2_p: 'Points, podium, sons et confettis. Chaque question existe en 4 versions : impossible de copier.',
    f3_h: 'L\'oral pour tous les niveaux', f3_p: 'Des activités d\'oral avec 3 niveaux d\'aide 🌱🌿🌳 : chaque élève participe.',
    f4_h: 'Le vocabulaire en images', f4_p: 'Des jeux de mots en classe, et des listes envoyées sur les téléphones pour réviser à la maison.',
    f5_h: 'Tous vos outils de classe', f5_p: 'Choisir un élève, absences, plan de classe, points de comportement, notes sur 20, export Excel.',
    f6_h: 'Privé par conception', f6_p: 'Tout reste sur votre appareil. Pas de cloud, pas de suivi, pas de compte élève.',
    cmp_h: 'Faite pour les vraies classes', cmp_other: 'La plupart des applis de quiz en ligne',
    cmp_r1: 'Fonctionne sans internet', cmp_r2: 'Gratuite, sans limite', cmp_limited: 'Version gratuite limitée',
    cmp_r3: 'Leçons prêtes pour les manuels marocains', cmp_r4: 'Test, teach, test avec progrès par élève', cmp_some: 'Parfois',
    cmp_r5: 'Les données restent dans votre classe',
    get_h: 'Obtenir MI WAY Classroom',
    get_android_h: 'Téléphone ou tablette Android', get_android_p: 'Votre téléphone gère la classe. Avec un projecteur ou une télé si vous en avez.', get_android_b: 'Ouvrir Google Play',
    get_win_h: 'Ordinateur Windows', get_win_p: 'Idéal avec un projecteur. Windows 10 et 11.', get_win_soon: 'Très bientôt', get_win_b: 'Télécharger pour Windows', win_ver: 'Version',
    win_help_h: 'Windows peut afficher un avertissement bleu', win_help_1: 'Cliquez sur <b>Informations complémentaires</b> (More info).', win_help_2: 'Cliquez sur <b>Exécuter quand même</b> (Run anyway).', win_help_p: 'C\'est normal pour une nouvelle appli gratuite. MI WAY Classroom est sûre.',
    get_stu_h: 'Élèves', get_stu_p: 'Rien à installer. Ils scannent le QR code en classe. Sur Android, ils peuvent aussi recevoir l\'appli gratuite MI WAY Student depuis l\'appli du professeur.',
    t_k: 'Créée par un professeur', t_h: 'Bonjour, je suis Rabii Hajoui',
    t_p1: 'Je suis professeur d\'anglais au Maroc. Mes élèves adorent les jeux de quiz, mais notre école n\'a pas de Wi-Fi. Alors j\'ai créé ma propre application, qui marche sans internet.',
    t_p2: 'Je l\'utilise chaque semaine avec mes classes, et je l\'améliore grâce aux idées des professeurs. Elle est gratuite et le restera.',
    sup_h: 'Aidez MI WAY à rester gratuite', sup_p: 'MI WAY n\'a ni publicité ni version payante. Si elle aide votre classe, un petit don l\'aide à grandir.', sup_b: 'Soutenir MI WAY',
    faq_h: 'Questions',
    q1: 'Ça marche vraiment sans internet ?', a1: 'Oui. Le point d\'accès de votre téléphone ou votre ordinateur crée un petit réseau local. Les élèves s\'y connectent. Aucune donnée mobile n\'est utilisée.',
    q2: 'C\'est vraiment gratuit ?', a2: 'Oui. Pas de pub, pas de version payante, pas de limite d\'élèves. Une seule option, la création de quiz par IA, demande votre propre clé Claude payante.',
    q3: 'De quoi les élèves ont-ils besoin ?', a3: 'D\'un téléphone avec un navigateur : Android ou iPhone. Ni appli ni compte.',
    q4: 'Je n\'utilise pas les manuels marocains. Puis-je l\'utiliser ?', a4: 'Oui. Vous pouvez taper vos propres leçons pour n\'importe quel manuel et niveau.',
    q5: 'Les données de mes élèves sont-elles protégées ?', a5: 'Tout reste sur votre appareil. Rien n\'est envoyé dans un cloud. <a href="https://sites.google.com/view/miway-classroom-privacy/home" target="_blank" rel="noopener">Politique de confidentialité</a>',
    q6: 'Ça marche sur Mac ou iPhone pour le professeur ?', a6: 'Pas encore. Le professeur a besoin d\'un téléphone Android ou d\'un ordinateur Windows. Les élèves peuvent utiliser n\'importe quel téléphone.',
    nav_stories: 'Témoignages',
    st_k: 'Les professeurs racontent', st_h: 'Des histoires de vraies classes', st_p: 'Vous utilisez MI WAY avec vos élèves ? Racontez aux autres professeurs comment ça s\'est passé.',
    st_more: 'Voir plus de témoignages', st_less: 'Voir moins', st_open: 'Partager votre expérience', st_fh: 'Partager votre expérience',
    st_name: 'Votre nom', st_country: 'Pays', st_level: 'J\'enseigne en', st_email: 'E-mail (seulement pour répondre, jamais affiché)',
    lv1: 'Primaire', lv2: 'Collège', lv3: 'Lycée', lv4: 'Université', lv5: 'Centre de langues', lv6: 'Autre',
    st_rate: 'Votre note', st_story: 'Votre histoire', st_story_ph: 'Qu\'avez-vous fait avec MI WAY ? Comment vos élèves ont-ils réagi ?',
    st_photo: 'Photo de votre classe (facultatif)', st_photo_ok: 'J\'ai la permission de partager cette photo, et aucun enfant n\'y est reconnaissable.',
    st_note: 'Rabii lit chaque histoire avant qu\'elle apparaisse ici. Votre e-mail n\'est jamais affiché.', st_send: 'Envoyer mon histoire',
    st_sending: 'Envoi…', st_thanks: 'Merci ! Votre histoire apparaîtra ici après lecture.', st_err: 'L\'envoi n\'a pas marché. Vérifiez votre internet et réessayez.',
    st_need: 'Écrivez votre nom et une histoire (au moins 20 lettres).', st_need_ok: 'Cochez la case pour la photo, ou retirez la photo.',
    foot_made: 'Créée par', foot_privacy: 'Confidentialité', foot_contact: 'Contact',
  },
  ar: {
    nav_how: 'كيف يعمل', nav_features: 'المميزات', nav_teacher: 'الأستاذ', nav_faq: 'أسئلة',
    hero_h: 'القسم كله يجيب <em>مباشرة</em>',
    hero_p: 'من هواتفهم. بدون إنترنت، بدون حساب، بدون إعلانات. مجاني لكل الأساتذة.',
    get_on: 'متوفر على', for_laptop: 'لحاسوبك',
    hero_made: 'صمّمه أستاذ للغة الإنجليزية في المغرب، لأساتذة العالم.',
    pain1_h: 'لا يوجد Wi-Fi في المؤسسة؟', pain1_p: 'هاتفك أو حاسوبك يصنع الشبكة. لا شيء يمر عبر الإنترنت.',
    pain2_h: 'لا توجد ميزانية؟', pain2_p: 'مجاني دائماً. بدون حساب، بدون إعلانات، بدون حدّ لعدد التلاميذ.',
    pain3_h: 'لا يوجد وقت؟', pain3_p: 'دروس جاهزة لكتابك المدرسي، أو اكتب اختبارك في دقائق.',
    how_h: 'جاهز في دقيقة واحدة',
    s1_h: 'شغّل نقطة الاتصال', s1_p: 'أو Wi-Fi المؤسسة. لا حاجة إلى الإنترنت.',
    s2_h: 'يمسح التلاميذ رمز QR واحداً', s2_p: 'يختارون أسماءهم. بدون تثبيت تطبيق، بدون حساب.',
    s3_h: 'ابدأ الاختبار', s3_p: 'تصل الأجوبة مباشرة إلى شاشتك أو جهاز العرض.',
    video_cap: 'شاهد: MI WAY في 30 ثانية', nav_tut: 'دروس الفيديو',
    tut_h: 'دروس بالفيديو', tut_p: 'تعلّم التطبيق كله خطوة بخطوة. الصوت بالإنجليزية، مع ترجمة بالإنجليزية والفرنسية والعربية.',
    tut_laptop: '💻 حاسوب', tut_phone: '📱 هاتف', tut_students: 'للتلاميذ', tut_min: 'د', cls_h: 'في أقسام حقيقية',
    ttt_k: 'اختبار · تدريس · اختبار', ttt_h: 'اعرف من فهم، فوراً',
    ttt_p1: 'الاختبار الأول يُظهر ما يعرفه القسم. يُظهر التطبيق النقاط التي لم يفهمها التلاميذ، فتدرّسها وحدها. الاختبار الثاني يُظهر التقدّم.',
    ttt_proof: 'في 3 أسابيع، انتقل أحد الأقسام من 42% إلى 58% في نفس المهارة.',
    feat_h: 'كل ما يحتاجه درس اللغة الإنجليزية',
    f1_h: 'جاهز لكتابك المدرسي', f1_p: 'Spotlight للإعدادي، Outlook، Ticket to English، Gateway وInsights. أو أنشئ دروسك لأي كتاب.',
    f2_h: 'التلاميذ يحبّونه', f2_p: 'نقاط ومنصّة تتويج وأصوات واحتفالات. لكل سؤال 4 نسخ، فلا يمكن النقل من الجار.',
    f3_h: 'التعبير الشفهي لكل المستويات', f3_p: 'أنشطة شفهية بثلاثة مستويات مساعدة 🌱🌿🌳 ليشارك كل تلميذ.',
    f4_h: 'المفردات بالصور', f4_p: 'ألعاب كلمات في القسم، ولوائح كلمات تُرسل إلى الهواتف للمراجعة في البيت.',
    f5_h: 'كل أدوات القسم', f5_p: 'اختيار تلميذ، الغياب، خريطة الجلوس، نقاط السلوك، النقط على 20، التصدير إلى Excel.',
    f6_h: 'خصوصيتك أولاً', f6_p: 'كل شيء يبقى على جهازك. بدون سحابة، بدون تتبّع، بدون حسابات للتلاميذ.',
    cmp_h: 'مصمّم للأقسام الحقيقية', cmp_other: 'أغلب تطبيقات الاختبارات على الإنترنت',
    cmp_r1: 'يعمل بدون إنترنت', cmp_r2: 'مجاني بدون حدود', cmp_limited: 'نسخة مجانية محدودة',
    cmp_r3: 'دروس جاهزة للكتب المغربية', cmp_r4: 'اختبار، تدريس، اختبار مع تقدّم كل تلميذ', cmp_some: 'أحياناً',
    cmp_r5: 'بيانات التلاميذ تبقى في قسمك',
    get_h: 'احصل على MI WAY Classroom',
    get_android_h: 'هاتف أو لوحة أندرويد', get_android_p: 'هاتفك يدير القسم. مع جهاز عرض أو تلفاز إن وُجد.', get_android_b: 'افتح Google Play',
    get_win_h: 'حاسوب Windows', get_win_p: 'الأفضل مع جهاز عرض. Windows 10 و 11.', get_win_soon: 'قريباً جداً', get_win_b: 'تحميل لـ Windows', win_ver: 'الإصدار',
    win_help_h: 'قد يُظهر Windows تحذيراً أزرق', win_help_1: 'اضغط على <b>مزيد من المعلومات</b> (More info).', win_help_2: 'اضغط على <b>تشغيل على أي حال</b> (Run anyway).', win_help_p: 'هذا عادي بالنسبة لتطبيق مجاني جديد. MI WAY Classroom آمن.',
    get_stu_h: 'التلاميذ', get_stu_p: 'لا شيء للتثبيت. يمسحون رمز QR في القسم. يمكن لتلاميذ أندرويد أيضاً الحصول على تطبيق MI WAY Student المجاني من تطبيق الأستاذ.',
    t_k: 'من إنجاز أستاذ', t_h: 'مرحباً، أنا Rabii Hajoui',
    t_p1: 'أنا أستاذ للغة الإنجليزية في المغرب. تلاميذي يحبّون ألعاب الاختبارات، لكن مؤسستنا ليس فيها Wi-Fi. فصنعت تطبيقي الخاص الذي يعمل بدون إنترنت.',
    t_p2: 'أستعمله كل أسبوع مع أقسامي، وأطوّره بأفكار الأساتذة. إنه مجاني وسيبقى مجانياً.',
    sup_h: 'ساعد MI WAY ليبقى مجانياً', sup_p: 'لا إعلانات في MI WAY ولا نسخة مدفوعة. إن ساعد قسمك، فهدية صغيرة تساعده على النمو.', sup_b: 'ادعم MI WAY',
    faq_h: 'أسئلة',
    q1: 'هل يعمل فعلاً بدون إنترنت؟', a1: 'نعم. نقطة اتصال هاتفك أو حاسوبك تصنع شبكة محلية صغيرة يتصل بها التلاميذ. لا تُستهلك بيانات الهاتف.',
    q2: 'هل هو مجاني فعلاً؟', a2: 'نعم. بدون إعلانات، بدون نسخة مدفوعة، بدون حدّ لعدد التلاميذ. خاصية اختيارية واحدة، إنشاء الاختبارات بالذكاء الاصطناعي، تحتاج مفتاح Claude مدفوعاً خاصاً بك.',
    q3: 'ماذا يحتاج التلاميذ؟', a3: 'أي هاتف فيه متصفح: أندرويد أو آيفون. بدون تطبيق وبدون حساب.',
    q4: 'لا أستعمل الكتب المغربية. هل يمكنني استعماله؟', a4: 'نعم. يمكنك كتابة دروسك لأي كتاب وأي مستوى.',
    q5: 'هل بيانات تلاميذي آمنة؟', a5: 'كل شيء يبقى على جهازك. لا شيء يُرسل إلى سحابة. <a href="https://sites.google.com/view/miway-classroom-privacy/home" target="_blank" rel="noopener">سياسة الخصوصية</a>',
    q6: 'هل يعمل على Mac أو آيفون للأستاذ؟', a6: 'ليس بعد. يحتاج الأستاذ هاتف أندرويد أو حاسوب Windows. يمكن للتلاميذ استعمال أي هاتف.',
    nav_stories: 'شهادات',
    st_k: 'الأساتذة يحكون', st_h: 'قصص من أقسام حقيقية', st_p: 'هل تستعمل MI WAY مع تلاميذك؟ احكِ للأساتذة الآخرين كيف كانت التجربة.',
    st_more: 'عرض قصص أخرى', st_less: 'عرض أقل', st_open: 'شارك تجربتك', st_fh: 'شارك تجربتك',
    st_name: 'اسمك', st_country: 'البلد', st_level: 'أدرّس في', st_email: 'البريد الإلكتروني (للرد فقط، لا يُعرض أبداً)',
    lv1: 'الابتدائي', lv2: 'الإعدادي', lv3: 'الثانوي', lv4: 'الجامعة', lv5: 'مركز لغات', lv6: 'آخر',
    st_rate: 'تقييمك', st_story: 'قصتك', st_story_ph: 'ماذا فعلت بـ MI WAY؟ كيف كان تفاعل تلاميذك؟',
    st_photo: 'صورة قسمك (اختياري)', st_photo_ok: 'لدي إذن بمشاركة هذه الصورة، ولا يمكن التعرف على أي طفل فيها.',
    st_note: 'يقرأ ربيع كل قصة قبل ظهورها هنا. بريدك الإلكتروني لا يُعرض أبداً.', st_send: 'أرسل قصتي',
    st_sending: 'جارٍ الإرسال…', st_thanks: 'شكراً! ستظهر قصتك هنا بعد قراءتها.', st_err: 'لم ينجح الإرسال. تحقق من الإنترنت وحاول مجدداً.',
    st_need: 'اكتب اسمك وقصة (20 حرفاً على الأقل).', st_need_ok: 'ضع علامة في خانة الصورة، أو احذف الصورة.',
    foot_made: 'من إنجاز', foot_privacy: 'الخصوصية', foot_contact: 'اتصل بنا',
  },
};

const en = {};
document.querySelectorAll('[data-t]').forEach(el => { en[el.dataset.t] = el.innerHTML; });
document.querySelectorAll('[data-t-ph]').forEach(el => { en[el.dataset.tPh] = el.placeholder; });
Object.assign(en, {
  st_less: 'See fewer', st_sending: 'Sending…', st_thanks: 'Thank you! Your story will appear here after Rabii reads it.',
  st_err: 'Sending did not work. Check your internet and try again.', st_need: 'Write your name and a story (at least 20 letters).',
  st_need_ok: 'Tick the box for the photo, or remove the photo.',
});
T.en = en;

function setLang(lang) {
  if (!T[lang]) lang = 'en';
  const d = T[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-t]').forEach(el => { const v = d[el.dataset.t]; if (v) el.innerHTML = v; });
  document.querySelectorAll('[data-t-ph]').forEach(el => { el.placeholder = d[el.dataset.tPh] || en[el.dataset.tPh]; });
  document.querySelectorAll('[data-lang]').forEach(b => b.classList.toggle('on', b.dataset.lang === lang));
  setPromo(lang);
  renderTutorials();
  renderClips();
  renderStories();
  document.querySelectorAll('a[href*="play.google.com"]').forEach(a => { a.href = `https://play.google.com/store/apps/details?id=com.miway.classroom&hl=${CONFIG.play[lang]}`; });
  applyConfig(d);
  try { localStorage.setItem('lang', lang); } catch {}
}

// Version and size of the newest installer, read from GitHub.
let release;
async function showWinVersion(d) {
  try { release = release || await fetch(CONFIG.releaseApi).then(r => r.json()); } catch { return; }
  const exe = (release.assets || []).find(a => a.name.endsWith('.exe'));
  if (exe) document.getElementById('win-ver').textContent = `${d.win_ver || 'Version'} ${release.tag_name.replace(/^v/, '')} · ${Math.round(exe.size / 1048576)} MB`;
}

// The hero Windows button downloads, then shows the steps for the blue warning.
document.getElementById('win-link').addEventListener('click', () => {
  if (CONFIG.windowsUrl) setTimeout(() => document.getElementById('windows').scrollIntoView({ behavior: 'smooth' }), 300);
});

function applyConfig(d) {
  const win = document.getElementById('win-btn');
  if (CONFIG.windowsUrl) {
    win.href = document.getElementById('win-link').href = CONFIG.windowsUrl;
    win.textContent = d.get_win_b || 'Download for Windows';
    win.classList.remove('soon');
    document.getElementById('win-help').hidden = false;
    showWinVersion(d);
  } else win.classList.add('soon');
  if (CONFIG.donateUrl) { document.getElementById('support').hidden = false; document.getElementById('donate-btn').href = CONFIG.donateUrl; }
  if (CONFIG.contactEmail) { document.getElementById('contact-wrap').hidden = false; document.getElementById('contact-link').href = 'mailto:' + CONFIG.contactEmail; }
  if (CONFIG.teacherPhoto) document.getElementById('teacher-photo').src = CONFIG.teacherPhoto;
}

document.querySelectorAll('[data-lang]').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));

const lang = () => document.documentElement.lang;
const word = (k) => (T[lang()] || T.en)[k] || T.en[k] || '';

const promo = document.getElementById('promo-video');
function setPromo(l) {
  const src = `videos/promo-${l}.mp4`;
  if (promo.querySelector('source').getAttribute('src') === src) return;
  promo.pause();
  promo.querySelector('source').src = src;
  promo.poster = `videos/promo-${l}.jpg`;
  promo.load();
  document.getElementById('promo').classList.remove('playing');
}
document.querySelector('.video-play').addEventListener('click', () => promo.play());
promo.addEventListener('play', () => document.getElementById('promo').classList.add('playing'));

const tutorials = window.TUTORIALS || [];
const tv = document.getElementById('tut-video');
let kind = matchMedia('(max-width: 760px)').matches ? 'phone' : 'laptop';
let current = tutorials[0];

function showTutorial(c, play) {
  current = c;
  const k = kind === 'phone' && c.phone ? 'phone' : 'laptop';
  const base = `tutorials/${k}/${c.id}`;
  tv.pause();
  tv.innerHTML = ['en', 'fr', 'ar'].map((l) => `<track kind="subtitles" srclang="${l}" label="${{ en: 'English', fr: 'Français', ar: 'العربية' }[l]}" src="${base}.${l}.vtt"${l === lang() && l !== 'en' ? ' default' : ''}>`).join('');
  tv.src = `${base}.mp4`;
  tv.poster = `${base}.jpg`;
  document.getElementById('tut-frame').classList.toggle('tall', k === 'phone');
  document.getElementById('tut-title').textContent = c.title[lang()] || c.title.en;
  document.getElementById('tut-sub').textContent = c.sub[lang()] || c.sub.en;
  document.querySelectorAll('#tut-list button').forEach((b) => b.classList.toggle('on', b.dataset.id === c.id));
  if (play) tv.play().catch(() => {});
}

function renderTutorials() {
  if (!tutorials.length) { document.getElementById('tutorials').hidden = true; return; }
  document.querySelectorAll('[data-kind]').forEach((b) => b.classList.toggle('on', b.dataset.kind === kind));
  const list = document.getElementById('tut-list');
  list.innerHTML = '';
  tutorials.forEach((c, i) => {
    const li = document.createElement('li');
    const b = document.createElement('button');
    b.dataset.id = c.id;
    b.innerHTML = `<span class="tut-n">${i + 1}</span><span class="tut-t"></span>`;
    const t = b.querySelector('.tut-t');
    t.textContent = c.title[lang()] || c.title.en;
    if (c.students) t.insertAdjacentHTML('beforeend', `<span class="badge">${word('tut_students') || 'Students'}</span>`);
    t.insertAdjacentHTML('beforeend', `<small>${Math.round(c.seconds / 60)} ${word('tut_min') || 'min'}</small>`);
    b.addEventListener('click', () => { showTutorial(c, true); if (matchMedia('(max-width: 900px)').matches) document.getElementById('tut-frame').scrollIntoView({ behavior: 'smooth', block: 'start' }); });
    li.appendChild(b);
    list.appendChild(li);
  });
  showTutorial(current, false);
}
document.querySelectorAll('[data-kind]').forEach((b) => b.addEventListener('click', () => { kind = b.dataset.kind; renderTutorials(); }));

function renderClips() {
  const box = document.getElementById('clips');
  document.getElementById('classes').hidden = !CONFIG.classClips.length;
  box.innerHTML = '';
  CONFIG.classClips.forEach((c) => {
    const f = document.createElement('figure');
    f.innerHTML = `<video controls playsinline preload="none"${c.poster ? ` poster="${c.poster}"` : ''} src="${c.file}"></video><figcaption></figcaption>`;
    f.querySelector('figcaption').textContent = (c.caption && (c.caption[lang()] || c.caption.en)) || '';
    box.appendChild(f);
  });
}

// Teacher stories: approved ones come from the Google sheet (scripts/stories.gs); new ones go there too.
const LEVELS = ['Primary school', 'Middle school', 'High school', 'University', 'Language centre', 'Other'];
const SHOW = 6;
let stories = [], allStories = false;
const form = document.getElementById('share');

function renderStories() {
  const wall = document.getElementById('st-wall');
  wall.innerHTML = '';
  (allStories ? stories : stories.slice(0, SHOW)).forEach((s) => {
    const f = document.createElement('figure');
    f.className = 'st-card';
    const photo = /^https:\/\/drive\.google\.com\//.test(s.photo || '');
    f.innerHTML = `${photo ? '<img loading="lazy" alt="">' : ''}<div class="st-rating"></div><blockquote dir="auto"></blockquote><figcaption><b dir="auto"></b><span></span></figcaption>`;
    if (photo) Object.assign(f.querySelector('img'), { src: s.photo, onerror() { this.remove(); } });
    const n = Math.min(5, Number(s.stars) || 0);
    f.querySelector('.st-rating').textContent = n ? '★'.repeat(n) + '☆'.repeat(5 - n) : '';
    f.querySelector('blockquote').textContent = s.story;
    f.querySelector('b').textContent = s.name;
    const lv = LEVELS.indexOf(s.level);
    f.querySelector('span').textContent = [s.country, lv >= 0 ? word('lv' + (lv + 1)) : s.level].filter(Boolean).join(' · ');
    wall.appendChild(f);
  });
  const more = document.getElementById('st-more');
  more.hidden = stories.length <= SHOW;
  more.textContent = word(allStories ? 'st_less' : 'st_more');
  const msg = document.getElementById('st-msg');
  if (msg.dataset.k) msg.textContent = word(msg.dataset.k);
}

async function loadStories() {
  if (!CONFIG.storiesUrl) return;
  document.getElementById('stories').hidden = document.getElementById('nav-stories').hidden = false;
  try { stories = (await fetch(CONFIG.storiesUrl).then(r => r.json())).stories || []; } catch { stories = []; }
  renderStories();
  if (location.hash === '#share') openShare();
}

function openShare() {
  form.hidden = false;
  form.scrollIntoView({ behavior: 'smooth', block: 'start' });
  form.elements.name.focus({ preventScroll: true });
}

// Phone photos are big: make them at most 1000 px before sending.
function shrink(file) {
  return new Promise((ok, no) => {
    const img = new Image();
    img.onload = () => {
      const k = Math.min(1, 1000 / Math.max(img.width, img.height));
      const c = document.createElement('canvas');
      c.width = Math.round(img.width * k);
      c.height = Math.round(img.height * k);
      c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
      URL.revokeObjectURL(img.src);
      ok(c.toDataURL('image/jpeg', 0.8));
    };
    img.onerror = no;
    img.src = URL.createObjectURL(file);
  });
}

const say = (k) => { document.getElementById('st-msg').textContent = word(k); document.getElementById('st-msg').dataset.k = k; };
document.getElementById('st-open').addEventListener('click', openShare);
document.getElementById('st-more').addEventListener('click', () => { allStories = !allStories; renderStories(); });
addEventListener('hashchange', () => { if (location.hash === '#share' && CONFIG.storiesUrl) openShare(); });
form.elements.photo.addEventListener('change', () => { document.getElementById('st-photo-ok').hidden = !form.elements.photo.files.length; });
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const f = form.elements, file = f.photo.files[0];
  if (!f.name.value.trim() || f.story.value.trim().length < 20) return say('st_need');
  if (file && !f.photoOk.checked) return say('st_need_ok');
  const send = document.getElementById('st-send');
  send.disabled = true;
  say('st_sending');
  try {
    const d = { name: f.name.value, country: f.country.value, level: f.level.value, email: f.email.value, stars: f.stars.value, story: f.story.value, website: f.website.value, lang: lang() };
    if (file) { d.photo = await shrink(file); d.photoOk = true; }
    const r = await fetch(CONFIG.storiesUrl, { method: 'POST', body: JSON.stringify(d) }).then(x => x.json());
    if (!r.ok) throw new Error('refused');
    form.reset();
    document.getElementById('st-photo-ok').hidden = true;
    say('st_thanks');
  } catch { say('st_err'); }
  send.disabled = false;
});

let start = 'en';
try { start = localStorage.getItem('lang') || ''; } catch {}
if (!start) { const n = (navigator.language || 'en').slice(0, 2); start = T[n] ? n : 'en'; }
setLang(start);
loadStories();
