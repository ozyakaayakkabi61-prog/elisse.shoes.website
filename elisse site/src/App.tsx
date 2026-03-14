import { useMemo, useState } from 'react'
import logo from './assets/logo.png'
import heelImage from './assets/heel.jpg'
import casualImage from './assets/casual.jpg'
import boutiqueImage from './assets/boutique.jpg'

type Language = 'tr' | 'en' | 'ru'

type Translation = {
  siteTag: string
  nav: { home: string; about: string; products: string; contact: string }
  heroTag: string
  heroTitle: string
  heroDesc: string
  cta1: string
  cta2: string
  whatsapp: string
  aboutLabel: string
  aboutTitle: string
  aboutText: string
  brands: string
  brandsText: string
  export: string
  exportText: string
  mission: string
  missionText: string
  vision: string
  visionText: string
  productsLabel: string
  productsTitle: string
  contactLabel: string
  contactTitle: string
  contactText: string
  address: string
  address2: string
  email: string
  quickForm: string
  company: string
  person: string
  phone: string
  emailPlaceholder: string
  message: string
  submit: string
  footer: string
  productTitles: [string, string, string]
  productDescs: [string, string, string]
}

const content: Record<Language, Translation> = {
  tr: {
    siteTag: 'Kurumsal toptan satış web sitesi',
    nav: { home: 'Ana Sayfa', about: 'Hakkımızda', products: 'Ürünler', contact: 'İletişim' },
    heroTag: 'Toptan ayakkabı tedarikçisi',
    heroTitle: 'H&T Elisse Shoes ile güçlü ve profesyonel toptan ayakkabı tedariki',
    heroDesc:
      'Mağazalar, butik zincirleri ve distribütörler için koleksiyonları, üretim kalitesini ve toptan iş birliği fırsatlarını sunan modern bir kurumsal web sitesi.',
    cta1: 'Koleksiyonları Gör',
    cta2: 'Toptan Talep Oluştur',
    whatsapp: 'WhatsApp',
    aboutLabel: 'Hakkımızda',
    aboutTitle: 'Toptan satışta güvenilir üretim, güçlü koleksiyon',
    aboutText:
      'Firmamız 37 yıllık tecrübesiyle ayakkabı imalatı yapmaktadır. Ürünlerimizin içi ve dışı deri olup kullandığımız diğer materyaller birinci sınıf ürünlerdir. Ayakkabılarımızın üst düzey kalitesi ve koleksiyon çeşitliliğimiz müşterilerimizin beklentilerini tam olarak karşılamaktadır. Müşterilerimizin memnuniyeti, 37 yıllık serüvenimizde doğru yolda ilerlediğimizin göstergesidir.',
    brands: 'Markalarımız',
    brandsText:
      'Bu süreçte FOLLINISHOES ve H&T ELISSE markalarımız ile tanındık. FOLLINISHOES markamızla yurt içinde perakende sektöründe yerimizi belirlerken, H&T ELISSE markamızla yurt dışında toptan satışta global pazarda güçlü bir konum elde ettik. Ürünlerimizi tamamen kendi imalatımız olarak uluslararası fuarlarda ve toptan mağazamızda sunmaktayız.',
    export: 'İhracat ve Pazarlar',
    exportText:
      'Uluslararası fuarlarda sergilediğimiz ürünlerimizin kalitesi kendisini kanıtlamış; dünyanın birçok ülkesine ihracat gerçekleştirmekteyiz. Başlıca pazarlarımız: İtalya, Arnavutluk, Romanya, Sırbistan, Karadağ, Çek Cumhuriyeti, Avusturya, Hırvatistan, Rusya, Azerbaycan, Kazakistan, Ürdün, Katar, Kuzey Afrika ve diğer ülkeler.',
    mission: 'Misyonumuz',
    missionText:
      'Müşterilerimize her zaman en kaliteli, dayanıklı ve estetik ürünleri sunarak güvenilir bir marka olmak; müşteri memnuniyetini en üst seviyede tutmak ve uluslararası pazarda kalıcı değer yaratmak.',
    vision: 'Vizyonumuz',
    visionText:
      'Ayakkabı sektöründe yenilikçi, sürdürülebilir ve global ölçekte tercih edilen bir marka olmak; kalite ve şıklığı dünya ile buluştururken sektöründe liderlik etmek. H&T ELISSE ailesi olarak, sizleri de iş ortaklarımız arasında görmekten mutluluk duyarız.',
    productsLabel: 'Ürünler',
    productsTitle: 'Toptan satışa uygun koleksiyonlar',
    contactLabel: 'Toptan İletişim',
    contactTitle: 'Toptan iş birliği için iletişime geçin',
    contactText:
      'Bayi başvuruları, fiyat listesi talepleri, katalog gönderimi ve yurt içi / yurt dışı toptan sipariş süreçleri için bizimle iletişime geçin.',
    address: 'Adres',
    address2: 'İletişim Adresi',
    email: 'E-posta',
    quickForm: 'Hızlı Talep Formu',
    company: 'Firma Adı',
    person: 'Yetkili Kişi',
    phone: 'Telefon / WhatsApp',
    emailPlaceholder: 'E-posta',
    message: 'Talebinizi yazın',
    submit: 'Talep Gönder',
    footer: '© 2026 H&T Elisse Shoes. Tüm hakları saklıdır.',
    productTitles: ['Kadın Topuklu Ayakkabı', 'Günlük & Casual Modeller', 'Butik ve Zincir Mağaza Serileri'],
    productDescs: [
      'Sezon trendlerine uygun, mağaza satışına güçlü katkı sağlayan şık ve dikkat çekici modeller.',
      'Günlük kullanıma uygun, konfor ve estetiği bir araya getiren geniş ürün seçenekleri.',
      'Farklı müşteri profillerine hitap eden, toplu siparişe uygun seri üretim ve özel seçim alternatifleri.',
    ],
  },
  en: {
    siteTag: 'Corporate wholesale website',
    nav: { home: 'Home', about: 'About', products: 'Products', contact: 'Contact' },
    heroTag: 'Wholesale footwear supplier',
    heroTitle: 'Strong and professional wholesale footwear supply with H&T Elisse Shoes',
    heroDesc:
      'A modern corporate website presenting collections, production quality, and wholesale partnership opportunities for stores, boutique chains, and distributors.',
    cta1: 'View Collections',
    cta2: 'Request Wholesale',
    whatsapp: 'WhatsApp',
    aboutLabel: 'About Us',
    aboutTitle: 'Reliable production and a strong collection in wholesale footwear',
    aboutText:
      'Our company has 37 years of experience in shoe manufacturing. The inner and outer parts of our products are leather, and the other materials we use are first-class. The superior quality of our shoes and the diversity of our collections fully meet customer expectations. Customer satisfaction shows that we have been on the right path throughout our 37-year journey.',
    brands: 'Our Brands',
    brandsText:
      'During this journey, we became known through our FOLLINISHOES and H&T ELISSE brands. While FOLLINISHOES established our place in the domestic retail sector, H&T ELISSE achieved a strong position in the global wholesale market abroad. We present our products, entirely from our own production, at international fairs and in our wholesale store.',
    export: 'Export and Markets',
    exportText:
      'The quality of our products exhibited at international fairs has proven itself, and we export to many countries around the world. Our main markets include Italy, Albania, Romania, Serbia, Montenegro, Czech Republic, Austria, Croatia, Russia, Azerbaijan, Kazakhstan, Jordan, Qatar, North Africa, and other countries.',
    mission: 'Our Mission',
    missionText:
      'To be a reliable brand by always offering our customers the highest quality, durable, and aesthetic products; to keep customer satisfaction at the highest level; and to create lasting value in international markets.',
    vision: 'Our Vision',
    visionText:
      'To be an innovative, sustainable, and globally preferred brand in the footwear sector; to unite quality and elegance with the world while leading the industry. As the H&T ELISSE family, we would be pleased to see you among our business partners.',
    productsLabel: 'Products',
    productsTitle: 'Collections suitable for wholesale',
    contactLabel: 'Wholesale Contact',
    contactTitle: 'Get in touch for wholesale partnership',
    contactText:
      'Contact us for dealership applications, price list requests, catalog delivery, and domestic or international wholesale order processes.',
    address: 'Address',
    address2: 'Contact Address',
    email: 'E-mail',
    quickForm: 'Quick Inquiry Form',
    company: 'Company Name',
    person: 'Authorized Person',
    phone: 'Phone / WhatsApp',
    emailPlaceholder: 'E-mail',
    message: 'Write your request',
    submit: 'Send Inquiry',
    footer: '© 2026 H&T Elisse Shoes. All rights reserved.',
    productTitles: ['Women’s Heeled Shoes', 'Daily & Casual Models', 'Boutique and Chain Store Series'],
    productDescs: [
      'Elegant and eye-catching models that strongly support store sales in line with seasonal trends.',
      'A wide range of options combining comfort and aesthetics for everyday use.',
      'Series production and curated selections suitable for bulk orders and different customer profiles.',
    ],
  },
  ru: {
    siteTag: 'Корпоративный сайт для оптовых продаж',
    nav: { home: 'Главная', about: 'О нас', products: 'Продукция', contact: 'Контакты' },
    heroTag: 'Оптовый поставщик обуви',
    heroTitle: 'Надежные и профессиональные оптовые поставки обуви с H&T Elisse Shoes',
    heroDesc:
      'Современный корпоративный сайт, представляющий коллекции, качество производства и возможности оптового сотрудничества для магазинов, сетей бутиков и дистрибьюторов.',
    cta1: 'Смотреть коллекции',
    cta2: 'Запросить опт',
    whatsapp: 'WhatsApp',
    aboutLabel: 'О нас',
    aboutTitle: 'Надежное производство и сильная коллекция в оптовой обуви',
    aboutText:
      'Наша компания имеет 37-летний опыт в производстве обуви. Внутренние и внешние части нашей продукции изготовлены из кожи, а остальные используемые материалы — первоклассного качества. Высокое качество нашей обуви и разнообразие коллекций полностью соответствуют ожиданиям клиентов. Удовлетворенность клиентов подтверждает, что на протяжении 37 лет мы движемся в правильном направлении.',
    brands: 'Наши бренды',
    brandsText:
      'За это время мы стали известны благодаря нашим брендам FOLLINISHOES и H&T ELISSE. Бренд FOLLINISHOES укрепил наши позиции в розничном секторе внутри страны, а H&T ELISSE занял сильные позиции на мировом оптовом рынке. Мы представляем продукцию собственного производства на международных выставках и в нашем оптовом магазине.',
    export: 'Экспорт и рынки',
    exportText:
      'Качество нашей продукции, представленной на международных выставках, уже доказало себя, и мы экспортируем во многие страны мира. Наши основные рынки: Италия, Албания, Румыния, Сербия, Черногория, Чехия, Австрия, Хорватия, Россия, Азербайджан, Казахстан, Иордания, Катар, Северная Африка и другие страны.',
    mission: 'Наша миссия',
    missionText:
      'Быть надежным брендом, всегда предлагая клиентам продукцию высочайшего качества, прочности и эстетики; поддерживать удовлетворенность клиентов на самом высоком уровне и создавать долгосрочную ценность на международных рынках.',
    vision: 'Наше видение',
    visionText:
      'Быть инновационным, устойчивым и всемирно предпочтительным брендом в обувной отрасли; объединять качество и элегантность с миром, лидируя в своей сфере. Как семья H&T ELISSE, мы будем рады видеть вас среди наших деловых партнеров.',
    productsLabel: 'Продукция',
    productsTitle: 'Коллекции для оптовых продаж',
    contactLabel: 'Оптовые контакты',
    contactTitle: 'Свяжитесь с нами для оптового сотрудничества',
    contactText:
      'Свяжитесь с нами по вопросам дилерства, запроса прайс-листа, отправки каталога, а также процессов внутренних и международных оптовых заказов.',
    address: 'Адрес',
    address2: 'Контактный адрес',
    email: 'Эл. почта',
    quickForm: 'Быстрый запрос',
    company: 'Название компании',
    person: 'Контактное лицо',
    phone: 'Телефон / WhatsApp',
    emailPlaceholder: 'Эл. почта',
    message: 'Напишите ваш запрос',
    submit: 'Отправить запрос',
    footer: '© 2026 H&T Elisse Shoes. Все права защищены.',
    productTitles: ['Женская обувь на каблуке', 'Повседневные и casual модели', 'Серии для бутиков и сетевых магазинов'],
    productDescs: [
      'Элегантные и привлекательные модели, которые усиливают продажи магазина в соответствии с сезонными трендами.',
      'Широкий выбор моделей, сочетающих комфорт и эстетику для повседневного использования.',
      'Серийное производство и специальные подборки для крупных заказов и разных профилей клиентов.',
    ],
  },
}

type ProductCard = Product & { id: number }

export default function App() {
  const [language, setLanguage] = useState<Language>('tr')
  const t = content[language]

  const products = useMemo<ProductCard[]>(
    () => [
      { id: 1, title: t.productTitles[0], description: t.productDescs[0], image: heelImage },
      { id: 2, title: t.productTitles[1], description: t.productDescs[1], image: casualImage },
      { id: 3, title: t.productTitles[2], description: t.productDescs[2], image: boutiqueImage },
    ],
    [t],
  )

  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="container header-inner">
          <div className="brand-block">
            <img src={logo} alt="H&T Elisse Shoes Logo" className="brand-logo" />
            <div>
              <h1 className="brand-title">H&amp;T Elisse Shoes</h1>
              <p className="brand-tag">{t.siteTag}</p>
            </div>
          </div>

          <div className="header-actions">
            <nav className="nav-links">
              <a href="#home">{t.nav.home}</a>
              <a href="#about">{t.nav.about}</a>
              <a href="#products">{t.nav.products}</a>
              <a href="#contact">{t.nav.contact}</a>
            </nav>

            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
              className="language-select"
              aria-label="Language selector"
            >
              <option value="tr">Türkçe</option>
              <option value="en">English</option>
              <option value="ru">Русский</option>
            </select>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="hero-section container">
          <div className="hero-copy">
            <p className="eyebrow">{t.heroTag}</p>
            <h2 className="hero-title">{t.heroTitle}</h2>
            <p className="hero-description">{t.heroDesc}</p>
            <div className="button-row">
              <a href="#products" className="button button-primary">{t.cta1}</a>
              <a href="#contact" className="button button-secondary">{t.cta2}</a>
              <a
                href="https://wa.me/905306347446"
                target="_blank"
                rel="noreferrer"
                className="button button-whatsapp"
              >
                {t.whatsapp}
              </a>
            </div>
          </div>

          <div className="hero-card">
            <img src={products[0].image} alt={products[0].title} className="hero-image" />
          </div>
        </section>

        <section id="about" className="section-white">
          <div className="container about-grid">
            <div className="text-block">
              <p className="eyebrow">{t.aboutLabel}</p>
              <h3 className="section-title">{t.aboutTitle}</h3>
              <p className="section-paragraph">{t.aboutText}</p>
            </div>
            <div className="text-block">
              <h4 className="subsection-title">{t.brands}</h4>
              <p className="section-paragraph">{t.brandsText}</p>
            </div>
            <div className="text-block">
              <h4 className="subsection-title">{t.export}</h4>
              <p className="section-paragraph">{t.exportText}</p>
            </div>
            <div className="text-block">
              <h4 className="subsection-title">{t.mission}</h4>
              <p className="section-paragraph">{t.missionText}</p>
            </div>
            <div className="text-block">
              <h4 className="subsection-title">{t.vision}</h4>
              <p className="section-paragraph">{t.visionText}</p>
            </div>
          </div>
        </section>

        <section id="products" className="section-neutral">
          <div className="container">
            <p className="eyebrow">{t.productsLabel}</p>
            <h3 className="section-title">{t.productsTitle}</h3>
            <div className="products-grid">
              {products.map((product) => (
                <article key={product.id} className="product-card">
                  <img src={product.image} alt={product.title} className="product-image" />
                  <h4 className="product-title">{product.title}</h4>
                  <p className="product-description">{product.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-white">
          <div className="container contact-grid">
            <div>
              <p className="eyebrow">{t.contactLabel}</p>
              <h3 className="section-title">{t.contactTitle}</h3>
              <p className="section-paragraph">{t.contactText}</p>
              <div className="contact-list">
                <p><strong>{t.address}:</strong> Mesih Paşa, Şair Haşmet Sok. 40/1, 34130 Fatih/İstanbul</p>
                <p><strong>{t.address2}:</strong> Koska Cad. Haşmet Sk. No:40, Laleli - İstanbul / Türkiye</p>
                <p><strong>WhatsApp:</strong> +90 530 634 74 46</p>
                <p><strong>{t.email}:</strong> elisselaleli@gmail.com</p>
              </div>
            </div>

            <div className="contact-panel">
              <h4 className="subsection-title">{t.quickForm}</h4>
              <div className="form-grid">
                <input className="form-input" placeholder={t.company} />
                <input className="form-input" placeholder={t.person} />
                <input className="form-input" placeholder={t.phone} />
                <input className="form-input" placeholder={t.emailPlaceholder} />
                <textarea className="form-textarea" placeholder={t.message} />
                <a href="mailto:elisselaleli@gmail.com" className="button button-primary form-button">
                  {t.submit}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <a
        href="https://wa.me/905306347446"
        target="_blank"
        rel="noreferrer"
        className="floating-whatsapp"
      >
        {t.whatsapp}
      </a>

      <footer className="site-footer">
        <div className="container footer-inner">{t.footer}</div>
      </footer>
    </div>
  )
}
