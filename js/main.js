/* ================================================================
   BUSER — Ana JavaScript Dosyası
   ================================================================ */

(function () {
  'use strict';

  /* ---- 1. AOS Başlatma ---- */
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 700,
      easing: 'ease-out-quart',
      once: true,
      offset: 60,
      delay: 0,
    });
  }

  /* ---- 2. Preloader ---- */
  var preloader = document.getElementById('preloader');
  if (preloader) {
    function hidePreloader() {
      if (preloader.classList.contains('fade-out')) return;
      preloader.classList.add('fade-out');
      setTimeout(function () { preloader.style.display = 'none'; }, 450);
    }
    window.addEventListener('load', function () {
      setTimeout(hidePreloader, 300);
    });
    setTimeout(hidePreloader, 1500);
  }

  /* ---- 3. Navbar Scroll Efekti ---- */
  var mainNav = document.getElementById('mainNav');
  if (mainNav) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 60) {
        mainNav.classList.add('scrolled');
      } else {
        mainNav.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  /* ---- 4. Back to Top ---- */
  var backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }, { passive: true });

    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---- 5. Sayaç Animasyonu ---- */
  function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    var suffix = el.getAttribute('data-suffix') || '';
    if (isNaN(target)) return;
    var duration = 1800;
    var step = target / (duration / 16);
    var current = 0;
    var timer = setInterval(function () {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(current) + suffix;
    }, 16);
  }

  var countersObserved = false;
  var counterEls = document.querySelectorAll('[data-count]');
  if (counterEls.length > 0 && 'IntersectionObserver' in window) {
    var counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !countersObserved) {
          counterEls.forEach(function (el) { animateCounter(el); });
          countersObserved = true;
          counterObserver.disconnect();
        }
      });
    }, { threshold: 0.3 });
    counterObserver.observe(counterEls[0]);
  }

  /* ---- 6. Ürün Filtresi (urunlerimiz.html) ---- */
  var filterBtns = document.querySelectorAll('.filter-btn');
  if (filterBtns.length > 0) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var filter = this.getAttribute('data-filter');

        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        this.classList.add('active');

        var cards = document.querySelectorAll('.product-card[data-category]');
        cards.forEach(function (card) {
          var parent = card.closest('[data-aos]') || card.parentElement;
          if (filter === 'all' || card.getAttribute('data-category') === filter) {
            parent.style.display = '';
          } else {
            parent.style.display = 'none';
          }
        });

        var catHeaders = document.querySelectorAll('[data-div-category]');
        catHeaders.forEach(function (h) {
          if (filter === 'all') {
            h.style.display = '';
          } else {
            h.style.display = (h.getAttribute('data-div-category') === filter) ? '' : 'none';
          }
        });
      });
    });
  }

  /* ---- 7. Form Doğrulama & FormSubmit AJAX ---- */
  var forms = document.querySelectorAll('.needs-validation');
  forms.forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      event.stopPropagation();

      if (form.checkValidity()) {
        var btn = form.querySelector('[type="submit"]');
        var originalHTML = btn ? btn.innerHTML : '';

        if (btn) {
          btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Gönderiliyor...';
          btn.disabled = true;
        }

        var data = { _subject: 'Yeni Teklif Talebi - BUSER', _captcha: 'false' };
        form.querySelectorAll('[name]').forEach(function (el) {
          data[el.name] = el.value;
        });

        fetch('https://formsubmit.co/ajax/info@buser.com', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(data)
        })
        .then(function (r) { return r.json(); })
        .then(function () {
          if (btn) {
            btn.innerHTML = '<i class="fas fa-check"></i> Gönderildi!';
            btn.style.background = '#198754';
            btn.style.borderColor = '#198754';
            setTimeout(function () {
              btn.innerHTML = originalHTML;
              btn.disabled = false;
              btn.style.background = '';
              btn.style.borderColor = '';
              form.reset();
              form.classList.remove('was-validated');
            }, 3000);
          }
        })
        .catch(function () {
          if (btn) {
            btn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Hata oluştu, tekrar deneyin.';
            btn.style.background = '#dc3545';
            btn.style.borderColor = '#dc3545';
            setTimeout(function () {
              btn.innerHTML = originalHTML;
              btn.disabled = false;
              btn.style.background = '';
              btn.style.borderColor = '';
            }, 3000);
          }
        });
      }

      form.classList.add('was-validated');
    });
  });

  /* ---- 8. Aktif Menü Bağlantısı ---- */
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  var navLinks = document.querySelectorAll('.main-navbar .nav-link[data-page]');
  navLinks.forEach(function (link) {
    if (link.getAttribute('data-page') === currentPage) {
      link.classList.add('active');
    }
  });

  /* ---- 9. Smooth Scroll Anchor ---- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        var offset = 80;
        var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  /* ---- 10. Tablo Responsive (ürün detay) ---- */
  var specTable = document.getElementById('specTable');
  if (specTable) {
    specTable.closest('section') && specTable.parentElement.style.setProperty('overflow-x', 'auto');
  }

  /* ================================================================
     11. Dil Değiştirici (TR / EN)
     ================================================================ */
  var LANG_KEY = 'buser_lang';

  var NAV_HREF_EN = {
    'index.html':        'Home',
    'kurumsal.html':     'Corporate',
    'urunlerimiz.html':  'Products',
    'hizmetlerimiz.html':'Services',
    'sertifikalar.html': 'Certificates',
    'referanslar.html':  'References',
    'medyada-biz.html':  'In the Media',
    'iletisim.html':     'Contact'
  };

  var TEXT_EN = {
    /* ---- Ortak / Navbar ---- */
    'Hızlı Menü': 'Quick Menu',
    'Ana Sayfa': 'Home',
    'Ürünlerimiz': 'Products',
    'İletişim': 'Contact',
    'Kategori': 'Category',
    'Ürün Portföyü': 'Product Portfolio',
    'Detayları Gör': 'View Details',
    'Ürünleri Görüntüle': 'View Products',
    'Hızlı Teklif Al': 'Quick Quote',
    'Teklif Al': 'Get Quote',
    'İletişime Geç': 'Contact Us',
    'Bize Ulaşın': 'Contact Us',
    'Bizi Arayın': 'Call Us',
    'Hemen Ara': 'Call Now',
    'Hemen Arayın': 'Call Now',
    'Yakında': 'Coming Soon',
    'İncele': 'Explore',
    'Gizlilik Politikası': 'Privacy Policy',
    'Kullanım Koşulları': 'Terms of Use',
    'Endüstriyel yangın güvenliği alanında 20 yılı aşkın tecrübemizle uluslararası standartlarda ürün ve hizmet sunuyoruz.': 'We offer products and services at international standards with over 20 years of experience in industrial fire safety.',

    /* ---- Ürün kategorileri ---- */
    'Yangın Pompaları': 'Fire Pumps',
    'Alarm Vanaları': 'Alarm Valves',
    'Sistem Vanaları': 'System Valves',
    'Sprinkler': 'Sprinkler',
    'Sprinkler Hortum ve Aksesuarları': 'Sprinkler Hoses & Accessories',
    'İtfaiye Ekipmanları': 'Fire Fighting Equipment',
    'Köpük Sistemi': 'Foam System',
    'Köpüklü Söndürme Sistemi': 'Foam Suppression System',
    'Köpüklü Yangın Söndürme': 'Foam Fire Suppression',
    'Yivli Boru ve Bağlantı Elemanları': 'Grooved Pipe & Fittings',
    'Yivli Boru Ek Parçaları': 'Grooved Pipe Fittings',
    'Pasif Tedbirler': 'Passive Measures',
    'Yangın Dolapları': 'Fire Cabinets',
    'Hidrantlar': 'Hydrants',
    'Monitörler': 'Monitors',
    'Vana Grupları': 'Valve Groups',
    'İtfaiye Bağlantı Ağızları': 'Fire Department Connections',

    /* ---- Hizmetlerimiz ---- */
    'Hizmetlerimiz': 'Services',
    'Uçtan Uca Teknik Hizmet': 'End-to-End Technical Service',
    'Projelendirmeden periyodik bakıma, teknik danışmanlıktan acil servis müdahalesine kadar yangın güvenliği süreçlerinizin her adımında yanınızdayız.': 'We are with you at every step of your fire safety processes, from project design to periodic maintenance, and from technical consulting to emergency response.',
    'Projelendirme': 'Project Design',
    'Endüstriyel tesislerinizin özelliklerine göre yangın tehlike sınıfı belirlenerek NFPA 11, EN 13565 ve ilgili yerel yönetmelikler çerçevesinde yangın söndürme sistemi proje tasarımı ve hesaplamaları gerçekleştirilir.': 'Fire hazard class is determined according to your industrial facility characteristics and fire suppression system design and calculations are carried out within the framework of NFPA 11, EN 13565 and relevant local regulations.',
    'Yangın tehlike sınıfı analizi': 'Fire hazard class analysis',
    'Sistem boyutlandırma ve seçimi': 'System sizing and selection',
    'Teknik şartname ve çizimler': 'Technical specifications and drawings',
    'Mühendislik Hizmetleri': 'Engineering Services',
    'Deneyimli mühendis kadromuzla yangın söndürme sistemlerinin tasarımı, optimizasyonu ve teknik doğrulaması yapılır. Akış hesapları, basınç analizleri ve sistem entegrasyon çalışmaları kapsama dahildir.': 'Design, optimization and technical validation of fire suppression systems are carried out with our experienced engineering team. Flow calculations, pressure analyses and system integration works are included.',
    'Hidrolik hesaplamalar': 'Hydraulic calculations',
    '3D sistem modelleme': '3D system modeling',
    'Teknik onay süreç yönetimi': 'Technical approval process management',
    'Teknik Danışmanlık': 'Technical Consulting',
    'Yangın güvenliği mevzuatı (NFPA, EN, TSE), sigorta gereklilikleri ve kurum bazlı teknik standartlar konusunda uzman bağımsız danışmanlık hizmetleri sunulur.': 'Expert independent consulting services are provided on fire safety legislation (NFPA, EN, TSE), insurance requirements and institution-based technical standards.',
    'Mevzuat uyum analizi': 'Regulatory compliance analysis',
    'Risk değerlendirmesi': 'Risk assessment',
    'Sigorta raporlaması desteği': 'Insurance reporting support',
    'Devreye Alma': 'Commissioning',
    'Kurulu yangın söndürme sistemlerinin fabrika kabul testi (FAT) ve saha kabul testi (SAT) süreçleri yönetilerek sistemin tasarım parametrelerine uygun çalıştığı doğrulanır.': 'Factory acceptance test (FAT) and site acceptance test (SAT) processes are managed for installed fire suppression systems, verifying the system operates according to design parameters.',
    'Fabrika kabul testi (FAT)': 'Factory acceptance test (FAT)',
    'Saha kabul testi (SAT)': 'Site acceptance test (SAT)',
    'Operatör eğitimi': 'Operator training',
    'Periyodik Bakım': 'Periodic Maintenance',
    'Yangın söndürme sistemlerinizin performansını ve güvenilirliğini korumak için yıllık, yarı yıllık ve aylık bakım programları uygulanır. Tüm muayeneler raporlanır.': 'Annual, semi-annual and monthly maintenance programs are applied to maintain the performance and reliability of your fire suppression systems. All inspections are reported.',
    'Programlı bakım sözleşmeleri': 'Scheduled maintenance contracts',
    'Bileşen muayene ve testleri': 'Component inspection and testing',
    'Detaylı bakım raporlaması': 'Detailed maintenance reporting',
    'Teknik Servis': 'Technical Service',
    '7/24 teknik servis ekibimiz arıza giderme, acil müdahale, yedek parça temini ve sistem revizyonu hizmetleriyle Türkiye genelinde yanınızda.': 'Our 24/7 technical service team is with you across Turkey with fault resolution, emergency response, spare parts supply and system revision services.',
    '7/24 acil müdahale': '24/7 emergency response',
    'Orijinal yedek parça temini': 'Original spare parts supply',
    'Sistem revizyon ve modernizasyon': 'System revision and modernization',
    'Çalışma Sürecimiz': 'Our Working Process',
    'Proje Yönetim Sürecimiz': 'Our Project Management Process',
    'Her projeyi sistematik ve şeffaf bir süreçle yönetiyoruz.': 'We manage every project with a systematic and transparent process.',
    'İhtiyaç Analizi': 'Needs Analysis',
    'Tesisinizin yangın tehlike sınıfı, yapısal özellikleri ve operasyonel koşulları kapsamlı biçimde incelenir.': "Your facility's fire hazard class, structural characteristics and operational conditions are comprehensively examined.",
    'Tasarım ve Proje': 'Design and Project',
    'İhtiyaç analizine dayalı sistem tasarımı ve teknik şartname hazırlığı gerçekleştirilir.': 'System design and technical specification preparation based on needs analysis is carried out.',
    'Teklif Sunumu': 'Proposal Presentation',
    'Detaylı teknik ve ticari teklif hazırlanarak müşteriye sunulur, alternatifler değerlendirilir.': 'A detailed technical and commercial proposal is prepared and presented to the customer, alternatives are evaluated.',
    'Üretim ve Tedarik': 'Production and Supply',
    'Onaylanan projeye göre ekipman üretim takibi ve tedarik süreci yönetilir.': 'Equipment production tracking and supply process management are carried out according to the approved project.',
    'Kurulum ve Devreye Alma': 'Installation and Commissioning',
    'Sistemin saha kurulumu, testler ve kabul prosedürleriyle tamamlanarak devreye alınır.': 'The site installation of the system is completed with tests and acceptance procedures and commissioned.',
    'Bakım ve Destek': 'Maintenance and Support',
    'Devreye alınan sistemlerin periyodik bakımı ve 7/24 teknik destek hizmetleri sunulmaya devam edilir.': 'Periodic maintenance of commissioned systems and 24/7 technical support services continue to be provided.',
    'Projeniz için uzmanlarımızla görüşün': 'Consult our experts for your project',
    'Detaylı teknik danışmanlık ve teklif için hemen iletişime geçin.': 'Contact us now for detailed technical consulting and a quote.',

    /* ---- Kurumsal ---- */
    'Kurumsal': 'Corporate',
    'Hakkımızda': 'About Us',
    'BUSER Kimdir?': 'Who is BUSER?',
    'BUSER, endüstriyel yangın söndürme sistemleri alanında 20 yılı aşkın tecrübesiyle Türkiye\'nin güvenilir çözüm ortaklarından biridir. Bladder tank sistemleri, köpük orantılama ekipmanları, yangın pompaları ve yangın dolabı sistemleri başta olmak üzere geniş bir ürün portföyü sunmaktadır.': 'BUSER is one of Turkey\'s trusted solution partners with over 20 years of experience in industrial fire suppression systems. It offers a wide product portfolio including bladder tank systems, foam proportioning equipment, fire pumps and fire cabinet systems.',
    'Avrupa ve ABD standartlarına (EN, NFPA, UL/FM) uygun, akredite belgelenmiş ürünleriyle sektörde öncü konumunu koruyan BUSER; rafineriler, petrokimya tesisleri, havalimanları, enerji santralleri ve endüstriyel fabrikalar dahil pek çok sektörde başarılı projeler gerçekleştirmiştir.': 'BUSER, maintaining its pioneering position in the industry with products accredited and documented in compliance with European and US standards (EN, NFPA, UL/FM), has successfully completed projects in many sectors including refineries, petrochemical facilities, airports, power plants and industrial factories.',
    'Güçlü mühendislik altyapısı ve proje yönetim kapasitesiyle BUSER; projelendirme, tedarik, kurulum, devreye alma ve periyodik bakım hizmetlerini tek çatı altında sunmaktadır.': 'With its strong engineering infrastructure and project management capacity, BUSER provides project design, procurement, installation, commissioning and periodic maintenance services under one roof.',
    'Uluslararası Sertifikalar': 'International Certificates',
    'Uzman Mühendis Ekibi': 'Expert Engineering Team',
    '500+ Tamamlanan Proje': '500+ Completed Projects',
    'Türkiye Geneli Hizmet': 'Turkey-Wide Service',
    'Teklif Al': 'Get Quote',
    'Değerlerimiz': 'Our Values',
    'Misyon, Vizyon ve Değerlerimiz': 'Mission, Vision and Our Values',
    'Misyonumuz': 'Our Mission',
    'Endüstriyel yangın güvenliğinde uluslararası standartlara uygun, yenilikçi ve güvenilir ürün ve hizmetler sunarak müşterilerimizin can ve mal güvenliğini en üst düzeyde korumak.': 'To protect the lives and assets of our customers at the highest level by providing innovative and reliable products and services compliant with international standards in industrial fire safety.',
    'Vizyonumuz': 'Our Vision',
    "Türkiye'nin yanı sıra bölge ülkelerinde de endüstriyel yangın güvenliği çözümlerinde tercih edilen lider marka olmak; yüksek teknoloji ve mühendislik değeri ile sektörde standart belirleyici konumuna ulaşmak.": 'To become the preferred leading brand in industrial fire safety solutions in Turkey and neighboring countries; to achieve a standard-setting position in the industry with high technology and engineering value.',
    'Temel Değerlerimiz': 'Our Core Values',
    'Güvenilirlik': 'Reliability',
    'Tüm süreçlerde şeffaflık ve dürüstlük.': 'Transparency and honesty in all processes.',
    'Kalite': 'Quality',
    'Uluslararası standartlarda ürün ve hizmet.': 'Products and services at international standards.',
    'Yenilikçilik': 'Innovation',
    'Sürekli gelişim ve teknoloji takibi.': 'Continuous development and technology monitoring.',
    'Rakamlarla BUSER': 'BUSER in Numbers',
    '20 Yılın Birikimi': 'The Accumulation of 20 Years',
    'Yıl Deneyim': 'Years of Experience',
    'Tamamlanan Proje': 'Completed Projects',
    'Kurumsal Referans': 'Corporate References',
    'Teknik Destek': 'Technical Support',
    'Projeniz için bizimle iletişime geçin': 'Contact us for your project',
    'Uzman mühendis kadromuz en uygun çözümü sizin için tasarlasın.': 'Let our expert engineering team design the most suitable solution for you.',

    /* ---- Sertifikalar ---- */
    'Sertifikalar': 'Certificates',
    'Akreditasyonlar': 'Accreditations',
    'Uluslararası Sertifikalar ve Akreditasyonlar': 'International Certificates and Accreditations',
    'BUSER ürünleri ve hizmetleri, uluslararası kurum ve kuruluşlar tarafından denetlenerek sertifikalandırılmıştır. Kalite ve güvenlik taahhüdümüzün belgesi.': 'BUSER products and services have been inspected and certified by international institutions and organizations. The proof of our quality and safety commitment.',
    'Kalite Yönetim Sistemi belgesi ile tüm süreçlerde uluslararası kalite standartları uygulanmaktadır.': 'International quality standards are applied in all processes with the Quality Management System certificate.',
    'TSE Belgesi': 'TSE Certificate',
    'Türk Standartları Enstitüsü tarafından verilen TSE belgesi ile ürünlerin ulusal standartlara uygunluğu onaylanmıştır.': 'The compliance of products with national standards has been confirmed with the TSE certificate issued by the Turkish Standards Institution.',
    'CE İşareti': 'CE Mark',
    'Avrupa Birliği direktiflerine uygunluğunu gösteren CE işareti ile ürünlerin AB pazarına girişi sağlanmaktadır.': 'Products are enabled to enter the EU market with the CE mark demonstrating compliance with European Union directives.',
    'NFPA Uygunluğu': 'NFPA Compliance',
    'Amerikan Ulusal Yangın Koruma Derneği (NFPA) standartlarına uygun sistem tasarımı ve ürün belgesi.': 'System design and product certification compliant with American National Fire Protection Association (NFPA) standards.',
    'UL Listesi': 'UL Listed',
    'Underwriters Laboratories tarafından listelenen ürünler, küresel güvenlik standartlarını karşıladığını kanıtlamaktadır.': 'Products listed by Underwriters Laboratories prove they meet global safety standards.',
    'FM Onaylı': 'FM Approved',
    'Factory Mutual onaylı ürünler, sigorta şirketleri ve global endüstriyel tesisler tarafından kabul görmektedir.': 'Factory Mutual approved products are accepted by insurance companies and global industrial facilities.',
    'Avrupa köpük yangın söndürme sistemleri standardına (EN 13565) uygun tasarım ve ürün sertifikasyonu.': 'Design and product certification compliant with the European foam fire suppression systems standard (EN 13565).',
    'Çevre Yönetim Sistemi belgesi ile faaliyetlerimizin çevre üzerindeki etkisini en aza indirme taahhüdü.': 'Commitment to minimizing the environmental impact of our activities with the Environmental Management System certificate.',
    'Neden Önemli': 'Why It Matters',
    'Sertifikasyon Neden Kritik?': 'Why is Certification Critical?',
    'Endüstriyel yangın söndürme sistemleri, insan hayatını ve büyük değerdeki tesisleri korumakla görevlidir. Bu nedenle kullanılan ürünlerin ve sistemlerin uluslararası standartlara uygunluğu, hem yasal bir zorunluluk hem de etik bir sorumluluktur.': 'Industrial fire suppression systems are responsible for protecting human lives and high-value facilities. Therefore, compliance of the products and systems used with international standards is both a legal requirement and an ethical responsibility.',
    'BUSER olarak sunduğumuz tüm ürün ve sistemler, bağımsız test kuruluşları tarafından onaylanmış ve belgelenmiştir. Müşterilerimiz, satın aldıkları sistemlerin gerçek bir yangın anında beklendiği şekilde çalışacağından emin olabilirler.': 'All products and systems we offer at BUSER have been approved and documented by independent testing organizations. Our customers can be confident that the systems they purchase will operate as expected in a real fire.',
    'Yasal Uyumluluk': 'Legal Compliance',
    'Kalite Güvencesi': 'Quality Assurance',
    'Sigorta Uyumu': 'Insurance Compliance',
    'Global Kabul': 'Global Acceptance',
    'Sertifikalarımız hakkında daha fazla bilgi alın': 'Learn more about our certificates',
    'Teknik ekibimiz tüm sorularınızı yanıtlamak için hazır.': 'Our technical team is ready to answer all your questions.',

    /* ---- Referanslar ---- */
    'Referanslar': 'References',
    'Güven': 'Trust',
    '100+ Kurumsal Referans': '100+ Corporate References',
    "Enerji, petrokimya, havacılık, savunma ve daha pek çok sektörde Türkiye'nin önde gelen kuruluşları güvenli tesisler için BUSER'yu tercih ediyor.": "Leading organizations in Turkey in energy, petrochemicals, aviation, defense and many more sectors choose BUSER for safe facilities.",
    'Petrokimya ve Enerji': 'Petrochemicals and Energy',
    'Havacılık ve Ulaşım': 'Aviation and Transportation',
    'Savunma ve Sanayi': 'Defense and Industry',
    'Holding ve İnşaat': 'Holding and Construction',
    'Siz de referanslarımız arasına katılın': 'Join our references',
    'Tesisiniz için güvenilir yangın söndürme çözümleri sunmak için hazırız.': 'We are ready to provide reliable fire suppression solutions for your facility.',

    /* ---- Medyada Biz ---- */
    'Medyada Biz': 'In the Media',
    'Basın & Medya': 'Press & Media',
    'Basın ve Medya Haberleri': 'Press and Media News',
    'BUSER hakkındaki güncel basın yansımaları ve sektörel etkinliklerimiz.': 'Current press coverage and our sector events regarding BUSER.',
    'Sektör Etkinliği': 'Industry Event',
    'Sektör Haberi': 'Industry News',
    'TÜYAK Sempozyumu\'nda BUSER Teknik Standına Büyük İlgi': 'Great Interest in BUSER Teknik\'s Booth at TÜYAK Symposium',
    'Yangın Güvenliğinde BUSER Teknik İmzası': 'BUSER Teknik\'s Signature in Fire Safety',
    'Haberin Tamamını Oku': 'Read Full Article',
    'Yangın güvenliği çözümlerimiz hakkında bilgi almak ve teklif talep etmek için iletişime geçin.': 'Contact us to learn about our fire safety solutions and request a quote.',

    /* ---- İletişim ---- */
    'İletişim Bilgileri': 'Contact Information',
    'Telefon': 'Phone',
    'E-posta': 'Email',
    'Web Sitesi': 'Website',
    'Adres': 'Address',
    'Çalışma Saatleri': 'Working Hours',
    'Pazartesi - Cuma': 'Monday - Friday',
    'Cumartesi': 'Saturday',
    'Konum': 'Location',
    'E-posta Gönderin': 'Send Email',
    'Hızlı Teklif': 'Quick Quote',
    'Teklif Talep Formu': 'Quote Request Form',
    'Aşağıdaki formu doldurarak projeniz için teklif isteyin. Uzman ekibimiz en kısa sürede sizinle iletişime geçecektir.': 'Fill out the form below to request a quote for your project. Our expert team will contact you as soon as possible.',
    'En geç 24 saat içinde geri dönüş': 'Response within 24 hours',
    'Uzman mühendis değerlendirmesi': 'Expert engineer evaluation',
    'Detaylı ve şeffaf fiyatlandırma': 'Detailed and transparent pricing',
    'Proje Teklif Formu': 'Project Quote Form',
    'Teklif Talebini Gönder': 'Send Quote Request',
    '100. Yıl Bulvarı No:55 A Blok, Ostim OSB, Ankara': '100. Yıl Bulvarı No:55 A Blok, Ostim OSB, Ankara',

    /* ---- Ürünlerimiz ---- */
    'Kapsamlı Yangın Söndürme Ürünleri': 'Comprehensive Fire Suppression Products',
    'Bir kategoriye tıklayarak ürünleri inceleyin.': 'Click on a category to explore products.',
    '8 Ana Kategori': '8 Main Categories',
    '40+ Ürün': '40+ Products',
    'EN / NFPA / UL-FM standartlarına uygun uçtan emişli, dikey türbin ve jokey pompa sistemleri.': 'End-suction, vertical turbine and jockey pump systems compliant with EN / NFPA / UL-FM standards.',
    'Islak, kuru, deluge ve ön tepkimeli (pre-action) alarm vana sistemleri ve kontrol ekipmanları.': 'Wet, dry, deluge and pre-action alarm valve systems and control equipment.',
    'Kelebek, çek vana, OS&Y, NRS, küresel vana, basınç rahatlatma ve aksesuarlar.': 'Butterfly, check valve, OS&Y, NRS, globe valve, pressure relief and accessories.',
    'Standart, hızlı tepkili, geniş korumalı, depo tipi ve kuru tip sprinkler başlıkları.': 'Standard, fast-response, extended-coverage, storage and dry-type sprinkler heads.',
    'NFPA 13 uyumlu rijit kaplin, esnek kaplin ve yivli dirsek bağlantı elemanları.': 'Rigid coupling, flexible coupling and grooved elbow fittings compliant with NFPA 13.',
    'TS EN standartlarına uygun yangın dolapları, hidrantlar ve bağlantı ekipmanları.': 'Fire cabinets, hydrants and connection equipment compliant with TS EN standards.',
    'Bladder tank, oranlayıcı, nozul, monitör ve AFFF/AR-AFFF köpük konsantreleri.': 'Bladder tank, proportioner, nozzle, monitor and AFFF/AR-AFFF foam concentrates.',
    'Yangın kapıları, bölme sistemleri, yangın yalıtım malzemeleri ve duman engelleme çözümleri.': 'Fire doors, partition systems, fire insulation materials and smoke barrier solutions.',

    /* ---- Alarm Vanaları ---- */
    'Islak, kuru, deluge ve pre-action sistem tipleri için EN 12259 ve UL/FM onaylı alarm vanaları.': 'EN 12259 and UL/FM approved alarm valves for wet, dry, deluge and pre-action system types.',
    'Islak Alarm Vanası': 'Wet Alarm Valve',
    'Boru ağının her zaman su dolu tutulduğu ıslak boru sprinkler sistemlerinin ana kontrolünü sağlar.': 'Provides the main control of wet pipe sprinkler systems where the pipe network is always kept full of water.',
    'Kuru Alarm Vanası': 'Dry Alarm Valve',
    'Donma riski taşıyan ortamlarda kullanılır. Boru ağı basınçlı hava veya azot gazı ile tutulur.': 'Used in environments with freezing risk. The pipe network is maintained with compressed air or nitrogen gas.',
    'Baskın (Deluge) Alarm Vanası': 'Deluge Alarm Valve',
    'Yangın algılama sistemi tetiklendiğinde tüm nozüllere aynı anda su sağlayarak geniş alanda söndürme yapar.': 'When the fire detection system is triggered, it simultaneously supplies water to all nozzles for large-area suppression.',
    'Ön Tepkimeli (Pre-Action) Alarm Vanası': 'Pre-Action Alarm Valve',
    'Çift bağımlı aktivasyon ile yanlışlıkla su baskını riskini ortadan kaldıran güvenli sistem.': 'A safe system that eliminates the risk of accidental water flooding with dual-dependent activation.',
    'Alarm vanası seçimi için uzman desteği alın': 'Get expert support for alarm valve selection',
    'Teknik ekibimiz, projenizin gerekliliklerine göre doğru sistemi belirler.': 'Our technical team determines the right system according to your project requirements.',

    /* ---- Sistem Vanaları ---- */
    'Yangın söndürme sistemlerinin güvenli kontrolü için 11 farklı vana çözümü.': '11 different valve solutions for safe control of fire suppression systems.',
    'İzleme Anahtarlı Kelebek Vana': 'Tamper Switch Butterfly Valve',
    'Vana konum bilgisini merkezi sisteme ileten tamper switch entegre kelebek vana.': 'Butterfly valve with integrated tamper switch that transmits valve position information to the central system.',
    'Çek Vana': 'Check Valve',
    'Tek yönlü akışı sağlayan, geri akışı önleyen yatay ve dikey montajlı çek vanalar.': 'Horizontal and vertical mounted check valves that ensure one-way flow and prevent backflow.',
    'FSFD Akış Anahtarı': 'FSFD Flow Switch',
    'Boru içindeki su akışını algılayan ve alarm sinyali üreten paddle tipi akış anahtarı.': 'Paddle-type flow switch that detects water flow in the pipe and generates an alarm signal.',
    'OS&Y Yükselen Milli Vana': 'OS&Y Rising Stem Gate Valve',
    'Mili dışarı çıkarak görsel pozisyon kontrolüne imkân tanıyan OS&Y kapı vana sistemi.': 'OS&Y gate valve system that allows visual position control with the stem rising outward.',
    'NRS Vana': 'NRS Valve',
    'Dışarıya mil çıkmayan kompakt tasarımlı, dar alan ve yer altı uygulamalarına uygun kapı vana.': 'Compact-designed gate valve without an external rising stem, suitable for tight spaces and underground applications.',
    'Küresel Vanalar': 'Ball Valves',
    'Hızlı açma-kapama için çeyrek tur hareketli, sızdırmaz PTFE koltuklu küresel vana çözümleri.': 'Quarter-turn ball valve solutions with leak-proof PTFE seat for quick open/close operation.',
    'Test ve Drenaj Vanası': 'Test and Drain Valve',
    'Sprinkler sistemlerinin periyodik testini ve boşaltılmasını kolaylaştıran kombine vana.': 'Combined valve that facilitates periodic testing and draining of sprinkler systems.',
    'Akış Ölçer': 'Flow Meter',
    'Sistem performansı ve bakım testlerinde boru içi debi değerini doğru ölçen cihaz.': 'Device that accurately measures in-pipe flow rate during system performance and maintenance tests.',
    'Post İndikatör': 'Post Indicator',
    'Yer altı vanalarının açık/kapalı durumunu yüzeyden görsel olarak gösteren post indikatör.': 'Post indicator that visually shows the open/closed status of underground valves from the surface.',
    'Basınç Rahatlatma Vanası': 'Pressure Relief Valve',
    'Sistem basıncını belirlenen değerde sınırlayan, aşırı basınca karşı koruma sağlayan vana.': 'Valve that limits system pressure to a set value and provides protection against excessive pressure.',
    'Basınç Düşürücü Vana': 'Pressure Reducing Valve',
    'Yüksek giriş basıncını sabit ve ayarlı çıkış basıncına indirgeyen diferansiyel basınç vanası.': 'Differential pressure valve that reduces high inlet pressure to a stable and adjustable outlet pressure.',
    'Sistem vananızı birlikte seçelim': "Let's choose your system valve together",
    '11 farklı vana çözümü arasından projenize uygun olanı teknik ekibimizle belirleyin.': 'Determine the right solution from among 11 different valve options for your project with our technical team.',

    /* ---- Sprinkler ---- */
    'EN 12259 ve UL/FM onaylı, farklı risk sınıfları için 5 sprinkler başlık tipi.': 'EN 12259 and UL/FM approved, 5 sprinkler head types for different risk classes.',
    'Standart Tepkili Sprinklerler': 'Standard Response Sprinklers',
    'Genel amaçlı binalarda kullanılan, 57–79°C aktivasyon sıcaklığına sahip standart sprinkler başlıkları.': 'Standard sprinkler heads used in general-purpose buildings with 57–79°C activation temperature.',
    'Hızlı Tepkili Sprinklerler': 'Quick Response Sprinklers',
    'RTI değeri ≤50 olan, daha hızlı aktivasyon ile erken söndürme imkânı sunan QR sprinkler başlıkları.': 'QR sprinkler heads with RTI value ≤50 that provide early suppression with faster activation.',
    'Geniş Korumalı Sprinklerler': 'Extended Coverage Sprinklers',
    'Tek başlıkla büyük alanları örten, 30 m² koruma sahası sunan ESFR/CMSA tipi sprinkler başlıkları.': 'ESFR/CMSA type sprinkler heads that cover large areas with a single head, offering 30 m² protection area.',
    'Depo Tipi Sprinklerler': 'Storage Type Sprinklers',
    'Yüksek raflı depolama alanlarında çatı korumaya yönelik yüksek debili ESFR sprinkler başlıkları.': 'High-flow ESFR sprinkler heads for roof protection in high-rack storage areas.',
    'Kuru Tip Sprinklerler': 'Dry Type Sprinklers',
    'Donma tehlikesi olan soğuk hava depolarında ve açık alanlarda kullanılan kuru uzatmalı sprinkler.': 'Dry extended sprinklers used in cold storage areas with freezing risk and open environments.',
    'Sprinkler sistemleri için teknik danışmanlık alın': 'Get technical consulting for sprinkler systems',
    'Risk sınıfı analizinden tasarıma, montajdan devreye almaya tam hizmet.': 'Full service from risk class analysis to design, from installation to commissioning.',

    /* ---- İtfaiye Ekipmanları ---- */
    'TS EN standartlarına uygun yangın dolabı, hidrant ve bağlantı ekipmanları.': 'Fire cabinet, hydrant and connection equipment compliant with TS EN standards.',
    'Sıva Üstü / Sıva Altı Sac Kapaklı Yangın Dolabı': 'Surface/Recessed Metal Door Fire Cabinet',
    'Hem sıva üstü hem de sıva altı montaja uygun, sac kapaklı paslanmaz yangın dolabı.': 'Stainless fire cabinet with metal door, suitable for both surface and recessed mounting.',
    'Sıva Üstü / Sıva Altı Cam Kapaklı Yangın Dolabı': 'Surface/Recessed Glass Door Fire Cabinet',
    'Şeffaf cam kapağıyla içeriği görünür kılan, sıva üstü ve sıva altı uygulamalar için yangın dolabı.': 'Fire cabinet with transparent glass door making contents visible, for surface and recessed applications.',
    'Yangın Hidrantı': 'Fire Hydrant',
    'Zemin üstü ve yer altı tipi, TS EN 14384 uyumlu yangın hidrantı çözümleri.': 'Above-ground and underground type fire hydrant solutions compliant with TS EN 14384.',
    'İtfaiye Bağlantı Ağzı': 'Fire Brigade Connection Inlet',
    'İtfaiye araçlarının sisteme bağlanmasını sağlayan, Storz veya Dikrofor tip bağlantı ağızları.': 'Storz or Dikrofor type connection inlets that allow fire trucks to connect to the system.',
    'İtfaiye Bağlantı Vanası': 'Fire Brigade Connection Valve',
    'İtfaiye bağlantı sistemlerinde kullanılan, çabuk bağlantılı ve kilitleme özellikli bağlantı vanaları.': 'Quick-connect and lockable connection valves used in fire brigade connection systems.',
    'İtfaiye ekipmanları için teklif alın': 'Get a quote for firefighting equipment',
    'Standart ve özel ölçülerde yangın dolabı ve ekipmanları için uzmanlarımızı arayın.': 'Call our experts for fire cabinets and equipment in standard and custom sizes.',

    /* ---- Köpüklü Söndürme ---- */
    'Köpüklü Söndürme Sistemi ve Ekipmanları': 'Foam Suppression System and Equipment',
    'Petrokimya, havacılık ve endüstriyel tesisler için tam köpük söndürme sistemi bileşenleri.': 'Complete foam suppression system components for petrochemical, aviation and industrial facilities.',
    'Dikey Bladder Tank': 'Vertical Bladder Tank',
    'Paslanmaz iç torbası ile köpük konsantresini sistem basıncıyla oranlayan dikey tank.': 'Vertical tank with stainless inner bladder that proportions foam concentrate with system pressure.',
    'Yatay Bladder Tank': 'Horizontal Bladder Tank',
    'Yatay yerleşimli, sınırlı yükseklik olan alanlara uygun büyük kapasiteli bladder tank.': 'Large-capacity horizontal bladder tank suitable for areas with limited height.',
    'Köpük Oranlayıcıları': 'Foam Proportioners',
    '%1, %3 ve %6 oranlarında köpük konsantresini suya karıştıran hat ve indüksiyon tip oranlayıcılar.': 'In-line and induction type proportioners that mix foam concentrate with water at 1%, 3% and 6% ratios.',
    'Köpük Sistem Vanaları': 'Foam System Valves',
    'Köpük söndürme sistemlerinde kullanılan, köpük konsantresine dayanıklı kontrol vanaları.': 'Control valves resistant to foam concentrate, used in foam suppression systems.',
    'Köpük Boşaltıcılar ve Nozullar': 'Foam Chambers and Nozzles',
    'Tank yüzeyi ve zemin uygulamalarına yönelik köpük boşaltıcı ve nozul ekipmanları.': 'Foam chamber and nozzle equipment for tank surface and floor applications.',
    'Köpük & Su Monitörleri': 'Foam & Water Monitors',
    'Uzaktan veya manuel kontrollü, yüksek debi kapasiteli köpük ve su monitörleri.': 'Remote or manually controlled, high-flow capacity foam and water monitors.',
    'Köpük & Su Yangın Dolapları': 'Foam & Water Fire Cabinets',
    'Hem su hem de köpük hatlarını bir arada barındıran entegre çift sistem yangın dolabı.': 'Integrated dual-system fire cabinet housing both water and foam lines.',
    'Köpük Konsantreleri': 'Foam Concentrates',
    'AFFF, FFFP, AR-AFFF ve protein bazlı köpük konsantreleri. %1, %3, %6 kullanım oranları.': 'AFFF, FFFP, AR-AFFF and protein-based foam concentrates. 1%, 3%, 6% application ratios.',
    'Köpük söndürme sistemi tasarımı için uzmanlarımızla görüşün': 'Consult our experts for foam suppression system design',
    'Petrokimya, rafineri ve endüstriyel tesisler için NFPA 11 uyumlu tam sistem tasarımı.': 'NFPA 11 compliant full system design for petrochemical, refinery and industrial facilities.',

    /* ---- Yivli Boru ---- */
    'NFPA 13 uyumlu, hızlı montaj imkânı sunan yivli bağlantı elemanları.': 'Grooved connection elements compliant with NFPA 13, offering quick installation.',
    'Rijit Kaplin': 'Rigid Coupling',
    'Boru eksenini sabit tutan, titreşim ve yük aktarımı gereken noktalarda kullanılan rijit yivli kaplin.': 'Rigid grooved coupling that holds the pipe axis fixed, used where vibration and load transfer are required.',
    'Esnek Kaplin': 'Flexible Coupling',
    'Sismik hareketlere ve genleşme/büzülmeye karşı tolerans sağlayan esnek yivli kaplin sistemi.': 'Flexible grooved coupling system that provides tolerance against seismic movements and expansion/contraction.',
    'Yivli Dirsek': 'Grooved Elbow',
    'Boru hattı yönlendirmesi için kaynak gerektirmeyen hızlı montajlı yivli dirsek ek parçaları.': 'Quickly installed grooved elbow fittings that require no welding for pipe line routing.',
    'Yivli boru sistemleri için hızlı teklif alın': 'Get a quick quote for grooved pipe systems',
    'Kaynak gerektirmeyen, hızlı montajlı sistemler için uzmanlarımızla iletişime geçin.': 'Contact our experts for welding-free, quick-installation systems.',

    /* ---- Pasif Tedbirler ---- */
    'Bilgi Talep Et': 'Request Information',
    'Tüm Kategoriler': 'All Categories',
    'Pasif yangın koruması için uzmanlarımızla konuşun': 'Talk to our experts for passive fire protection',
    'Mevcut portföyümüzden bağımsız olarak pasif tedbir ihtiyaçlarınız için bize ulaşabilirsiniz.': 'You can reach us for your passive fire protection needs, regardless of our current portfolio.',

    /* ---- Yangın Pompaları sayfası ---- */
    'EN / NFPA / UL-FM standartlarına uygun, yüksek güvenilirlikte yangın pompa sistemleri.': 'High-reliability fire pump systems compliant with EN / NFPA / UL-FM standards.',
    'Uçtan Emişli Yatay Milli Yangın Pompaları': 'End-Suction Horizontal Shaft Fire Pumps',
    'Yüksek debi ve basınç kapasitesiyle büyük endüstriyel tesisler için tasarlanmış yatay milli pompa sistemleri.': 'Horizontal shaft pump systems designed for large industrial facilities with high flow rate and pressure capacity.',
    'Ayrılabilir Gövdeli Çift Emişli Yangın Pompaları': 'Split Case Double-Suction Fire Pumps',
    'Kolay bakım imkânı sunan, çift emişli ayrılabilir gövde tasarımıyla yüksek performanslı pompa çözümleri.': 'High-performance pump solutions with double-suction split case design for easy maintenance.',
    'Dikey Türbin Tip Yangın Pompası': 'Vertical Turbine Type Fire Pump',
    'Derin kuyular ve sarnıçlar için özel tasarlanmış, dikey montajlı türbin tipi yangın pompası.': 'Vertically mounted turbine-type fire pump specially designed for deep wells and cisterns.',
    'Jokey Yangın Pompası': 'Jockey Fire Pump',
    'Sistem basıncını sürekli izleyerek küçük sızıntıları telafi eden, enerji tasarruflu jokey pompa.': 'Energy-efficient jockey pump that continuously monitors system pressure and compensates for minor leaks.',
    'Projenize özel pompa sistemi için teklif alın': 'Get a quote for a pump system tailored to your project',
    'Teknik ekibimiz ihtiyacınıza en uygun yangın pompasını seçmenizde yardımcı olur.': 'Our technical team will help you select the most suitable fire pump for your needs.'
  };

  /* Text node'ları değiştirir; <a> çocuklarına da iner, icon node'larını korur */
  function mapText(el, lang) {
    var childNodes = el.childNodes;
    for (var i = 0; i < childNodes.length; i++) {
      var node = childNodes[i];
      if (node.nodeType === 3) {
        var orig = node._origTR !== undefined ? node._origTR : node.nodeValue;
        if (!orig) continue;
        var trimmed = orig.trim();
        if (!trimmed) continue;
        if (node._origTR === undefined) node._origTR = orig;
        var en = TEXT_EN[trimmed];
        if (lang === 'en' && en) {
          node.nodeValue = orig.replace(trimmed, en);
        } else {
          node.nodeValue = node._origTR;
        }
      } else if (node.nodeType === 1 && node.tagName === 'A') {
        mapText(node, lang);
      }
    }
  }

  function applyLang(lang) {
    /* 1. data-tr / data-en olan elementler */
    document.querySelectorAll('[data-tr]').forEach(function (el) {
      var val = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-tr');
      if (val === null) return;
      if (el.children.length > 0) {
        for (var i = 0; i < el.childNodes.length; i++) {
          var n = el.childNodes[i];
          if (n.nodeType === 3 && n.nodeValue.trim()) {
            if (n._origTR === undefined) n._origTR = n.nodeValue;
            n.nodeValue = n._origTR.replace(n._origTR.trim(), val);
            break;
          }
        }
      } else {
        el.textContent = val;
      }
    });

    /* 2. Placeholder desteği */
    document.querySelectorAll('[data-placeholder-tr]').forEach(function (el) {
      var val = lang === 'en' ? el.getAttribute('data-placeholder-en') : el.getAttribute('data-placeholder-tr');
      if (val !== null) el.setAttribute('placeholder', val);
    });

    /* 3. Navbar linkleri — href'e göre, tüm sayfalarda çalışır */
    document.querySelectorAll('.main-navbar .nav-link').forEach(function (link) {
      if (link.hasAttribute('data-tr')) return;
      var href = (link.getAttribute('href') || '').split('/').pop().split('?')[0].split('#')[0];
      var en = NAV_HREF_EN[href];
      if (!link._origTR) link._origTR = link.textContent.trim();
      if (en) link.textContent = lang === 'en' ? en : link._origTR;
    });

    /* 4. Footer, breadcrumb, sayfa banner başlıkları, section tag, ürün butonları */
    document.querySelectorAll(
      '.footer-title, .footer-links a, ' +
      '.breadcrumb-item a, .breadcrumb-item.active, ' +
      '.page-banner h1, .section-tag, ' +
      '.pcdbtn, .cat-card-btn, .cat-card-body h3, ' +
      '.cta-banner .btn'
    ).forEach(function (el) {
      if (el.hasAttribute('data-tr')) return;
      mapText(el, lang);
    });

    /* 5. Sayfa içerik başlıkları ve alt başlıklar */
    document.querySelectorAll('.section-title, .section-subtitle').forEach(function (el) {
      if (el.hasAttribute('data-tr')) return;
      mapText(el, lang);
    });

    /* 6. Hizmetlerimiz — feature card içerikleri */
    document.querySelectorAll('.feature-card h4, .feature-card p, .feature-card li span').forEach(function (el) {
      if (el.hasAttribute('data-tr')) return;
      mapText(el, lang);
    });

    /* 7. Hizmetlerimiz — süreç adımları */
    document.querySelectorAll('.process-step h5, .process-step p').forEach(function (el) {
      if (el.hasAttribute('data-tr')) return;
      mapText(el, lang);
    });

    /* 8. Kurumsal — misyon/vizyon kartları */
    document.querySelectorAll(
      '.mission-vision-card h3, .mission-vision-card > p, ' +
      '.value-item h5, .value-item p'
    ).forEach(function (el) {
      if (el.hasAttribute('data-tr')) return;
      mapText(el, lang);
    });

    /* 9. Sertifikalar — sertifika kartları */
    document.querySelectorAll('.cert-card h5, .cert-card p').forEach(function (el) {
      if (el.hasAttribute('data-tr')) return;
      mapText(el, lang);
    });

    /* 10. CTA banner ve cta-box */
    document.querySelectorAll('.cta-banner h2, .cta-banner p, .cta-box h3, .cta-box p').forEach(function (el) {
      if (el.hasAttribute('data-tr')) return;
      mapText(el, lang);
    });

    /* 11. Medyada Biz — haber kartları */
    document.querySelectorAll('.news-card h4, .news-placeholder span').forEach(function (el) {
      if (el.hasAttribute('data-tr')) return;
      mapText(el, lang);
    });

    /* 12. Medyada Biz — haber butonları */
    document.querySelectorAll('.news-card-footer .btn').forEach(function (el) {
      if (el.hasAttribute('data-tr')) return;
      mapText(el, lang);
    });

    /* 13. İletişim — iletişim bilgileri kartı */
    document.querySelectorAll('.contact-info-card h4, .contact-info-card h5, .contact-info-item .label').forEach(function (el) {
      if (el.hasAttribute('data-tr')) return;
      mapText(el, lang);
    });

    /* 14. Ürünlerimiz — kategori kart açıklamaları */
    document.querySelectorAll('.cat-card-body p').forEach(function (el) {
      if (el.hasAttribute('data-tr')) return;
      mapText(el, lang);
    });

    /* 15. Ürün alt sayfaları — ürün kartı başlıkları ve açıklamaları */
    document.querySelectorAll('.pcbd h4, .pcbd p').forEach(function (el) {
      if (el.hasAttribute('data-tr')) return;
      mapText(el, lang);
    });

    /* 16. Referanslar — sektör başlıkları (h5 with icon) */
    document.querySelectorAll('h5[data-aos]').forEach(function (el) {
      if (el.hasAttribute('data-tr')) return;
      mapText(el, lang);
    });

    /* 17. Ürünlerimiz stat chips */
    document.querySelectorAll('.stat-chip').forEach(function (el) {
      if (el.hasAttribute('data-tr')) return;
      mapText(el, lang);
    });

    /* 19. Lang butonları aktif durumu */
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    document.documentElement.lang = lang === 'en' ? 'en' : 'tr';
    localStorage.setItem(LANG_KEY, lang);
  }

  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyLang(this.getAttribute('data-lang'));
    });
  });

  var savedLang = localStorage.getItem(LANG_KEY) || 'tr';
  applyLang(savedLang);

  /* ---- 12. Hero Slider Otomatik Geçiş ---- */
  var heroCarouselEl = document.getElementById('heroCarousel');
  if (heroCarouselEl && typeof bootstrap !== 'undefined') {
    var heroCarousel = new bootstrap.Carousel(heroCarouselEl, {
      interval: 5000,
      ride: true,
      wrap: true
    });
    heroCarousel.cycle();
  }

})();
