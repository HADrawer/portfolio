(function () {
  // Cursor glow
  var glow = document.getElementById('cursorGlow');

  document.addEventListener('mousemove', function (e) {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });

  // Scroll reveal
  var reveals = document.querySelectorAll('.reveal');

  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry, i) {
      if (entry.isIntersecting) {
        setTimeout(function () {
          entry.target.classList.add('visible');
        }, i * 60);

        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
  });

  reveals.forEach(function (el) {
    revealObserver.observe(el);
  });

  // Skill card radial glow
  document.querySelectorAll('.skill-category').forEach(function (card) {
    card.addEventListener('mousemove', function (e) {
      var rect = card.getBoundingClientRect();
      var x = ((e.clientX - rect.left) / rect.width) * 100;
      var y = ((e.clientY - rect.top) / rect.height) * 100;

      card.style.setProperty('--mx', x + '%');
      card.style.setProperty('--my', y + '%');
    });
  });

  // Active nav highlight on scroll
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', function () {
    var current = '';

    sections.forEach(function (s) {
      if (window.scrollY >= s.offsetTop - 200) {
        current = s.id;
      }
    });

    navLinks.forEach(function (a) {
      a.classList.remove('active');

      if (a.getAttribute('href') === '#' + current) {
        a.classList.add('active');
      }
    });
  });
})();