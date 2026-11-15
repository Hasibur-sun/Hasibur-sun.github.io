(() => {
  const greetings = ['Hello', 'Hola', 'Bonjour', 'مرحبا', 'नमस्ते', '你好', 'স্বাগতম'];
  const bootScreen = document.getElementById('bootScreen');
  const bootGreeting = document.getElementById('bootGreeting');
  const bootProgress = document.getElementById('bootProgress');
  const skipIntro = document.getElementById('skipIntro');
  const idFab = document.getElementById('idFab');
  const idCard = document.getElementById('idCard');
  const cardClose = document.getElementById('cardClose');
  const idCardImage = document.querySelector('.id-card-image');
  const idCardPlaceholder = document.querySelector('.id-card-placeholder');
  let introTimer;

  function showIdCardImage() {
    idCardImage.style.display = 'block';
    idCardPlaceholder.hidden = true;
  }

  function showIdCardPlaceholder() {
    idCardImage.style.display = 'none';
    idCardPlaceholder.hidden = false;
  }

  idCardImage.addEventListener('load', showIdCardImage);
  idCardImage.addEventListener('error', showIdCardPlaceholder);
  if (idCardImage.complete && idCardImage.naturalWidth > 0) showIdCardImage();

  // Social profile URLs are kept here so the cards stay easy to update.
  const socialProfiles = {
    facebook: 'https://www.facebook.com/share/1CemQZoPsT/',
    instagram: 'https://www.instagram.com/sun_spiegel?stkn=MWluZDh4eHdqbzh4bA==',
    whatsappUsername: 'HasiburSun',
    twitter: 'https://x.com/Sunnewgate',
    github: 'https://github.com/Hasibur-sun',
    linkedin: 'https://www.linkedin.com/in/hasibur-rahman-sun?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    letterboxd: 'https://boxd.it/8fCYh',
    pinterest: 'https://pin.it/2HwC5sOI3',
    email: 'hasiburrahmansun@gmail.com',
  };

  document.querySelectorAll('[data-social]').forEach((card) => {
    const network = card.dataset.social;
    const value = network === 'whatsapp' ? socialProfiles.whatsappUsername : socialProfiles[network];
    if (!value) {
      card.setAttribute('aria-disabled', 'true');
      card.addEventListener('click', (event) => event.preventDefault());
      return;
    }

    const href = network === 'whatsapp'
      ? `https://wa.me/${encodeURIComponent(value.trim().replace(/^@/, ''))}`
      : network === 'email'
        ? `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(value.trim())}`
        : value.trim();
    card.href = href;
    card.target = '_blank';
    card.rel = 'noreferrer';
    card.classList.remove('is-placeholder');
    card.setAttribute('aria-label', network === 'email' ? 'Email Hasibur Rahman Sun' : `Open Hasibur's ${network} profile`);
    const hint = card.querySelector('.connect-copy small');
    if (hint) hint.textContent = network === 'whatsapp' ? `@${value.trim().replace(/^@/, '')}` : network === 'email' ? value.trim() : 'OPEN PROFILE';
  });

  function finishIntro() {
    window.clearInterval(introTimer);
    bootScreen.classList.add('done');
    window.setTimeout(() => bootScreen.remove(), 600);
  }

  let greetingIndex = 0;
  const showGreeting = () => {
    bootGreeting.textContent = greetings[greetingIndex];
    bootProgress.style.width = `${((greetingIndex + 1) / greetings.length) * 100}%`;
    greetingIndex += 1;
    if (greetingIndex >= greetings.length) {
      window.clearInterval(introTimer);
      window.setTimeout(finishIntro, 650);
    }
  };

  showGreeting();
  introTimer = window.setInterval(showGreeting, 650);
  skipIntro.addEventListener('click', finishIntro);

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reducedMotion.matches) finishIntro();

  function setCardOpen(isOpen) {
    idCard.classList.toggle('open', isOpen);
    idCard.setAttribute('aria-hidden', String(!isOpen));
    idFab.setAttribute('aria-expanded', String(isOpen));
  }

  idFab.addEventListener('click', () => setCardOpen(!idCard.classList.contains('open')));
  cardClose.addEventListener('click', () => setCardOpen(false));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setCardOpen(false);
  });
  document.addEventListener('click', (event) => {
    if (idCard.classList.contains('open') && !idCard.contains(event.target) && !idFab.contains(event.target)) {
      setCardOpen(false);
    }
  });

  const clock = document.getElementById('clock');
  function updateClock() {
    clock.textContent = new Intl.DateTimeFormat(undefined, {
      hour: 'numeric',
      minute: '2-digit',
    }).format(new Date());
  }
  updateClock();
  window.setInterval(updateClock, 30_000);
})();
