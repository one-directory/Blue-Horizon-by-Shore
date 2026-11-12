"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ChevronLeft, ChevronRight, MapPin, Clock3, Calendar, Compass, BookOpen, Info, CheckCircle } from "@/components/icons";

interface Place {
  id: string;
  name: string;
  description: string;
  category: string;
  distance?: string;
  travelTime?: string;
  highlights: string[];
  image?: string;
}

interface AroundUsDetailClientProps {
  place: Place;
}

// Map place IDs to their uploaded images
const placeSlides: Record<string, string[]> = {
  "malpe-beach": [
    "/beach/malpe beach/malpe main.webp",
    "/beach/malpe beach/malpe2.webp"
  ],
  "malpe-sea-walk": [
    "/beach/malpe sea walk/malpe sea walk main.webp",
    "/beach/malpe sea walk/malpes sea walk 2.webp",
    "/beach/malpe sea walk/malpes sea walk 3.webp"
  ],
  "malpe-fishing-harbour": [
    "/beach/malpe fishing harbour/malpe fishing main.webp",
    "/beach/malpe fishing harbour/malpe fishing 2.webp",
    "/beach/malpe fishing harbour/malpe fishing 4.webp"
  ],
  "delta-beach": [
    "/beach/delta beach bengre/delta main.webp",
    "/beach/delta beach bengre/delta.webp"
  ],
  "padubidri-beach": [
    "/beach/padubidri blue flag/padubidri main.webp",
    "/beach/padubidri blue flag/padubidri 1.webp",
    "/beach/padubidri blue flag/padubidri 2.webp"
  ],
  "mattu-beach": [
    "/beach/mattu beach/mattu main.webp",
    "/beach/mattu beach/mattu 1.webp",
    "/beach/mattu beach/mattu 2.webp"
  ],
  "marvanthe-beach": [
    "/beach/marvanthe beach/marvanthe main.webp",
    "/beach/marvanthe beach/marvanthe 1.webp",
    "/beach/marvanthe beach/marvanthe 2.webp"
  ],
  "kapu-beach": [
    "/beach/kaup beach/kaup main.webp",
    "/beach/kaup beach/kaup 2.webp",
    "/beach/kaup beach/kaup 3.webp"
  ],
  "st-marys-island": [
    "/beach/st.marys island/st marys main.webp",
    "/beach/st.marys island/st marys 1.webp",
    "/beach/st.marys island/st marys 2.webp"
  ],
  "hasta-shilpa": [
    "/heritage/hasta shilpa/hasta main.webp",
    "/heritage/hasta shilpa/hasta 1.webp",
    "/heritage/hasta shilpa/hasta 2.webp"
  ],
  "coin-museum": [
    "/heritage/coin museum/coin main.webp",
    "/heritage/coin museum/coin 1.webp"
  ],
  "saligrama-mangrove": [
    "/nature/saligrama backwater/saligrama main.webp",
    "/nature/saligrama backwater/saligrama 1.webp",
    "/nature/saligrama backwater/saligrama 2.webp"
  ],
  "hanging-bridge": [
    "/nature/hanging bridge/hanging bridge main.webp",
    "/nature/hanging bridge/hanging bridge 1.webp",
    "/nature/hanging bridge/hanging bridge 2.webp"
  ],
  "sri-krishna-temple": [
    "/spirituality/sri krishna temple/sri krishna main.webp",
    "/spirituality/sri krishna temple/sri krishna 1.webp",
    "/spirituality/sri krishna temple/sri krishna 2.webp"
  ],
  "kollur-mookambika": [
    "/spirituality/kollur mookambika/kollur main.webp",
    "/spirituality/kollur mookambika/kollur 1.webp",
    "/spirituality/kollur mookambika/kollur 2.webp"
  ],
  "attur-church": [
    "/spirituality/attur church/attur main.webp",
    "/spirituality/attur church/attur 1.webp"
  ],
  "varanga-jain": [
    "/spirituality/varanga jain/varanga main.webp",
    "/spirituality/varanga jain/varanga 1.webp",
    "/spirituality/varanga jain/varanga 2.webp"
  ]
};

export default function AroundUsDetailClient({ place }: AroundUsDetailClientProps) {
  // Set up the carousel slide list using local mapping
  const slides = placeSlides[place.id] || [place.image || ""];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      {/* Top Breadcrumb Navigation */}
      <nav className="detail-nav-header" aria-label="Breadcrumb">
        <div className="container-resort">
          <a
            href={
              place.category === "Culture"
                ? "/culture"
                : place.category === "Food"
                ? "/cuisine"
                : "/around-us"
            }
            className="btn-back-hub"
          >
            <span className="btn-back-circle">
              <ArrowLeft size={14} className="btn-back-arrow" />
            </span>
            <span className="btn-back-text">
              {place.category === "Culture"
                ? "Back to Culture"
                : place.category === "Food"
                ? "Back to Cuisine"
                : "Back to Around Us"}
            </span>
          </a>
        </div>
      </nav>

      {/* Main Luxury Layout Grid */}
      <main className="section-padding-lg bg-off-white" style={{ paddingTop: "2rem" }}>
        <div className="container-resort">
          <div className={place.category === "Culture" ? "culture-immersive-layout" : "split-layout"}>
            
            {/* Left Column: Interactive Photo Slider Card (Hidden for Culture to showcase a different immersive layout) */}
            {place.category !== "Culture" && (
              <section className="slider-container" aria-label="Photo Gallery">
                <div className="luxury-slider-card">
                  
                  {/* Images Layer */}
                  <div className="slider-viewport">
                    {slides.map((src, index) => (
                      <div
                        key={src}
                        className={`slider-slide ${index === currentSlide ? "active" : ""}`}
                      >
                        <Image
                          src={src}
                          alt={`${place.name} slide ${index + 1}`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 550px"
                          priority={index === 0}
                          className="slider-img"
                          style={{
                            objectPosition:
                              place.id === "kapu-beach"
                                ? "center 20%"
                                : place.id === "malpe-fishing-harbour"
                                ? "center bottom"
                                : "center"
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Overlaid Navigation Controls */}
                  {slides.length > 1 && (
                    <>
                      <button
                        onClick={handlePrev}
                        className="slider-nav-btn prev-btn"
                        aria-label="Previous image"
                      >
                        <ChevronLeft size={18} />
                      </button>
                      <button
                        onClick={handleNext}
                        className="slider-nav-btn next-btn"
                        aria-label="Next image"
                      >
                        <ChevronRight size={18} />
                      </button>
                    </>
                  )}

                  {/* Slide Indicators */}
                  <div className="slider-indicators">
                    {slides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`slider-dot ${idx === currentSlide ? "active" : ""}`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Card Title & Badge Overlay */}
                  <div className="slider-caption-overlay">
                    <h1 className="slider-title">{place.name}</h1>
                  </div>

                </div>
              </section>
            )}

            {/* Right Column: Rich Text Details */}
            <section className={place.category === "Culture" ? "culture-details-container" : "text-details-container"} aria-labelledby="detail-header-title">
              
              {/* Wide immersive hero banner for Culture pages */}
              {place.category === "Culture" && (
                <div className="culture-immersive-banner">
                  
                  {/* Images Layer */}
                  <div className="slider-viewport">
                    {slides.map((src, index) => (
                      <div
                        key={src}
                        className={`slider-slide ${index === currentSlide ? "active" : ""}`}
                      >
                        <Image
                          src={src}
                          alt={`${place.name} slide ${index + 1}`}
                          fill
                          sizes="(max-width: 1200px) 100vw, 850px"
                          priority={index === 0}
                          className="slider-img"
                          style={{
                            objectPosition:
                              place.id === "kapu-beach"
                                ? "center 20%"
                                : place.id === "malpe-fishing-harbour"
                                ? "center bottom"
                                : "center"
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Overlaid Navigation Controls */}
                  {slides.length > 1 && (
                    <>
                      <button
                        onClick={handlePrev}
                        className="slider-nav-btn prev-btn"
                        aria-label="Previous image"
                      >
                        <ChevronLeft size={18} />
                      </button>
                      <button
                        onClick={handleNext}
                        className="slider-nav-btn next-btn"
                        aria-label="Next image"
                      >
                        <ChevronRight size={18} />
                      </button>
                    </>
                  )}

                  {/* Slide Indicators */}
                  <div className="slider-indicators">
                    {slides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`slider-dot ${idx === currentSlide ? "active" : ""}`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Title Overlay */}
                  <div className="slider-caption-overlay">
                    <h1 className="slider-title">{place.name}</h1>
                  </div>

                </div>
              )}
              
              {place.id === "sri-krishna-temple" ? (
                /* Sri Krishna Temple Detailed Layout matching the user screenshot structure */
                <article className="details-article">
                  <header className="article-header">
                    <span className="overline-gold">{place.category} Legacy</span>
                    <h2 id="detail-header-title" className="main-headline">
                      A timeless destination for spiritual seekers and cultural enthusiasts.
                    </h2>
                    <p className="sub-headline">
                      Discover the spiritual heart of Udupi at the iconic Sri Krishna Temple.
                    </p>
                  </header>

                  <div className="lead-container">
                    <p className="lead-text">
                      Located just 1.1 km from the Udupi Bus Stand (and <strong>6 km / 15 minutes drive from Blue Horizon by Shore</strong>), the Sri Krishna Temple stands as a beacon of spirituality and culture in Udupi. This ancient temple, dedicated to Lord Krishna, holds a special place in the hearts of devotees and visitors alike, offering a harmonious blend of architectural beauty, religious traditions, and historical significance.
                    </p>
                  </div>

                  {/* Highlights Bullet List Layout */}
                  <div className="info-sections">
                    <div className="info-block">
                      <h3 className="info-block-title">
                        <BookOpen size={18} className="title-icon" /> Historical Significance
                      </h3>
                      <ul className="custom-bullet-list">
                        <li>
                          <strong>Founded by Madhvacharya:</strong> Established in the 13th century by Madhvacharya, the saint, philosopher, and proponent of the Dvaita philosophy, the temple is a testament to his vision of devotion and spiritual enlightenment.
                        </li>
                        <li>
                          <strong>Kanakana Kindi:</strong> The unique feature of this temple is the Kanakana Kindi, a silver-plated, nine-holed window through which devotees view the idol of Lord Krishna.
                        </li>
                        <li>
                          <strong>The Kanakana Kindi Legend:</strong> According to legend, Kanakadasa, a 16th-century saint and poet, was denied entry to the temple due to his caste. His deep devotion moved Lord Krishna, who is believed to have turned the idol to face Kanakadasa and created a hole in the wall to allow him a view of the deity.
                        </li>
                      </ul>
                    </div>

                    <div className="info-block">
                      <h3 className="info-block-title">
                        <Compass size={18} className="title-icon" /> Architectural Splendor
                      </h3>
                      <ul className="custom-bullet-list">
                        <li>
                          <strong>Intricate Design:</strong> Employs a beautiful temple complex with copper-plated roofs.
                        </li>
                        <li>
                          <strong>Craftsmanship:</strong> Reflected in the traditional stone pillars and wooden ceilings that represent the craftsmanship of the region.
                        </li>
                        <li>
                          <strong>Wooden Ceilings:</strong> The wooden ceilings are adorned with carvings depicting mythological stories.
                        </li>
                      </ul>
                    </div>

                    <div className="info-block">
                      <h3 className="info-block-title">
                        <Info size={18} className="title-icon" /> Rituals and Practices
                      </h3>
                      <ul className="custom-bullet-list">
                        <li>
                          <strong>Daily Offerings:</strong> Devotional activities include hymns, music, and rituals, creating a serene and uplifting atmosphere.
                        </li>
                        <li>
                          <strong>Annadanam Program:</strong> A cornerstone of the temple’s traditions, this program provides free meals to thousands of devotees daily, symbolizing the spirit of community and charity.
                        </li>
                      </ul>
                    </div>

                    <div className="info-block">
                      <h3 className="info-block-title">
                        <Calendar size={18} className="title-icon" /> Cultural and Spiritual Importance
                      </h3>
                      <ul className="custom-bullet-list">
                        <li>
                          <strong>Festivals:</strong> The temple hosts grand celebrations, including Krishna Janmashtami and Makara Sankranti, drawing devotees from across the country.
                        </li>
                        <li>
                          <strong>Chariot Procession:</strong> The annual Rathotsava (chariot festival) is a visual and spiritual spectacle, where a beautifully decorated chariot carrying Lord Krishna’s idol is pulled through the streets of Udupi.
                        </li>
                      </ul>
                    </div>

                    <div className="info-block">
                      <h3 className="info-block-title">
                        <MapPin size={18} className="title-icon" /> Visitor Information
                      </h3>
                      <ul className="custom-bullet-list">
                        <li>
                          <strong>Distance:</strong> 1.1 km from Udupi Bus Stand (and <strong>6 km / 15 minutes drive from Blue Horizon by Shore</strong>).
                        </li>
                        <li>
                          <strong>Timings:</strong> Open daily, with specific hours for darshan and rituals.
                        </li>
                        <li>
                          <strong>Best Time to Visit:</strong> October to March.
                        </li>
                      </ul>
                    </div>

                    <div className="info-block">
                      <h3 className="info-block-title">
                        <CheckCircle size={18} className="title-icon" /> Highlights
                      </h3>
                      <ul className="custom-bullet-list">
                        <li>
                          <strong>Kanakana Kindi:</strong> The unique nine-holed window with a profound historical and spiritual story.
                        </li>
                        <li>
                          <strong>Architectural Beauty:</strong> Intricately carved wooden ceilings, stone pillars, and copper roofs.
                        </li>
                        <li>
                          <strong>Ashta Mathas:</strong> A hub of diverse spiritual traditions.
                        </li>
                        <li>
                          <strong>Annadanam Program:</strong> Experience the temple’s commitment to service and community welfare.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <hr className="divider" style={{ margin: "2.5rem 0" }} />

                  <div className="info-block" style={{ background: "#fdfcfa", padding: "1.5rem", borderRadius: "4px", border: "1px dashed rgba(13, 27, 42, 0.08)" }}>
                    <h3 className="info-block-title" style={{ borderBottom: "none", marginBottom: "0.75rem", paddingBottom: 0 }}>Summary</h3>
                    <p style={{ fontSize: "0.9rem", lineHeight: "1.8", color: "#475569", margin: 0 }}>
                      The Sri Krishna Temple in Udupi is not just a place of worship but a cultural and historical landmark that embodies the region’s rich heritage. From its architectural splendor to its deep-rooted spiritual practices, the temple offers a soul-stirring experience for devotees and visitors alike. Whether you're drawn by faith, history, or architecture, a visit to this temple is sure to leave you with a sense of peace and devotion.
                    </p>
                  </div>
                </article>
              ) : place.id === "kollur-mookambika" ? (
                /* Sri Mookambika Temple, Kollur Rich Details */
                <article className="details-article">
                  <header className="article-header">
                    <span className="overline-gold">{place.category} Legacy</span>
                    <h2 id="detail-header-title" className="main-headline">
                      Seek divine blessings at the revered Sri Mookambika Temple
                    </h2>
                    <p className="sub-headline">
                      A spiritual haven for blessings and divine grace
                    </p>
                  </header>

                  <div className="lead-container">
                    <p className="lead-text">
                      Nestled at the foothills of Kodachadri Hill amidst the lush greenery of the Western Ghats, the Sri Mookambika Temple is located 75 km from Blue Horizon by Shore (approx. 1.5 hours drive). It also lies 40 km from Kundapur and 28 km from Byndur.
                    </p>
                  </div>

                  <div className="info-sections">
                    <div className="info-block">
                      <h3 className="info-block-title">
                        <BookOpen size={18} className="title-icon" /> Temple Highlights
                      </h3>
                      <ul className="custom-bullet-list">
                        <li>
                          <strong>Significance:</strong> One of the seven holiest sites of Salvation in South India. Dedicated to Goddess Mookambika, symbolizing emotional power and strength.
                        </li>
                        <li>
                          <strong>Adi Shankaracharya:</strong> The revered philosopher and saint performed penance here and consecrated the idol of Goddess Mookambika.
                        </li>
                      </ul>
                    </div>

                    <div className="info-block">
                      <h3 className="info-block-title">
                        <Compass size={18} className="title-icon" /> Architectural Features
                      </h3>
                      <ul className="custom-bullet-list">
                        <li>
                          <strong>Gold Pinnacle:</strong> The temple is adorned with a beautiful gold-plated pinnacle that stands high against the backdrop of the Western Ghats.
                        </li>
                        <li>
                          <strong>Copper Roofs:</strong> The roofs of the complex are completely covered in copper sheets, enhancing its traditional grandeur.
                        </li>
                      </ul>
                    </div>

                    <div className="info-block">
                      <h3 className="info-block-title">
                        <Info size={18} className="title-icon" /> Visitor Experience
                      </h3>
                      <ul className="custom-bullet-list">
                        <li>
                          <strong>Spiritual Ambiance:</strong> Experience divine serenity in the temple's peaceful and holy surroundings.
                        </li>
                        <li>
                          <strong>Pilgrim Activities:</strong> Participate in daily rituals, arati services, and seek blessings from the Goddess.
                        </li>
                        <li>
                          <strong>Nature's Beauty:</strong> Enjoy the lush, verdant landscapes of the Western Ghats and the nearby Kodachadri Hill, which is a popular spot for trekking.
                        </li>
                      </ul>
                    </div>

                    <div className="info-block">
                      <h3 className="info-block-title">
                        <MapPin size={18} className="title-icon" /> Nearby Attractions
                      </h3>
                      <ul className="custom-bullet-list">
                        <li>
                          <strong>Kodachadri Hill:</strong> A renowned trekking destination offering panoramic forest and valley views.
                        </li>
                        <li>
                          <strong>Byndur Beach:</strong> A serene, quiet coastal getaway nearby.
                        </li>
                        <li>
                          <strong>Anegudde Vinayaka Temple:</strong> A sacred site dedicated to Lord Ganapati, located along the way.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <hr className="divider" style={{ margin: "2.5rem 0" }} />

                  <div className="info-block" style={{ background: "#fdfcfa", padding: "1.5rem", borderRadius: "4px", border: "1px dashed rgba(13, 27, 42, 0.08)" }}>
                    <h3 className="info-block-title" style={{ borderBottom: "none", marginBottom: "0.75rem", paddingBottom: 0 }}>Summary</h3>
                    <p style={{ fontSize: "0.9rem", lineHeight: "1.8", color: "#475569", margin: 0 }}>
                      The Sri Mookambika Temple in Kollur is a blend of spiritual sanctity and natural beauty. Its deep-rooted legends, connection with Adi Shankaracharya, and captivating architecture make it an unmissable destination for pilgrims and nature lovers alike. Whether seeking spiritual solace or exploring the Western Ghats, Kollur offers a fulfilling experience.
                    </p>
                  </div>
                </article>
              ) : place.id === "attur-church" ? (
                /* St. Lawrence Basilica, Attur Rich Details */
                <article className="details-article">
                  <header className="article-header">
                    <span className="overline-gold">{place.category} Legacy</span>
                    <h2 id="detail-header-title" className="main-headline">
                      Saint Lawrence Basilica: A beacon of faith, harmony, and hope
                    </h2>
                    <p className="sub-headline">
                      A spiritual haven and pilgrimage sanctuary in Attur, Karkala
                    </p>
                  </header>

                  <div className="lead-container">
                    <p className="lead-text">
                      Nestled amidst the scenic beauty of Attur, Saint Lawrence Basilica stands as a beacon of faith, harmony, and hope. Located just <strong>36 km from Udupi (approx. 45 mins drive from Blue Horizon by Shore)</strong> and 3.7 km from Karkala, this historic Roman Catholic Church has been a spiritual haven since its establishment in 1759. Renowned for its miraculous powers and interfaith appeal, the basilica continues to attract devotees from all walks of life.
                    </p>
                  </div>

                  <div className="info-sections">
                    <div className="info-block">
                      <h3 className="info-block-title">
                        <BookOpen size={18} className="title-icon" /> A Shrine Dedicated to Saint Lawrence
                      </h3>
                      <ul className="custom-bullet-list">
                        <li>
                          <strong>Saint Lawrence:</strong> The basilica is named after Saint Lawrence, a Christian martyr who gave his life for his faith during the persecution under Roman Emperor Valerian in 258 AD. Known for his unwavering devotion and courage, Saint Lawrence symbolizes compassion and steadfastness, making the church a spiritual refuge for countless devotees.
                        </li>
                      </ul>
                    </div>

                    <div className="info-block">
                      <h3 className="info-block-title">
                        <Compass size={18} className="title-icon" /> Architectural Brilliance and Serenity
                      </h3>
                      <p style={{ fontSize: "0.9rem", lineHeight: "1.75", color: "#475569", marginBottom: "1rem" }}>
                        The basilica is a visual delight, blending traditional Christian architecture with serene natural surroundings. Its design features:
                      </p>
                      <ul className="custom-bullet-list">
                        <li>
                          <strong>Grand Facade:</strong> A majestic structural facade that exudes timeless elegance.
                        </li>
                        <li>
                          <strong>Spacious Interiors:</strong> Large, peaceful layouts that foster a sense of quiet and divine connection.
                        </li>
                        <li>
                          <strong>Miracle Pond (Pushkarini):</strong> A picturesque sacred water tank, making it the only church in South India with such a unique feature.
                        </li>
                      </ul>
                    </div>

                    <div className="info-block">
                      <h3 className="info-block-title">
                        <Info size={18} className="title-icon" /> Interfaith Harmony and Miracles
                      </h3>
                      <ul className="custom-bullet-list">
                        <li>
                          <strong>Inclusive Shrine:</strong> A sacred sanctuary where people of all faiths come together, fostering communal harmony and unity.
                        </li>
                        <li>
                          <strong>Answered Prayers:</strong> Devotees frequently share testimonies of miracles and answered prayers, further enhancing its spiritual significance.
                        </li>
                      </ul>
                    </div>

                    <div className="info-block">
                      <h3 className="info-block-title">
                        <Calendar size={18} className="title-icon" /> Annual Feast and Pilgrimage
                      </h3>
                      <ul className="custom-bullet-list">
                        <li>
                          <strong>Annual Feast of Saint Lawrence:</strong> Held every January, this major event draws thousands of pilgrims from across the region.
                        </li>
                        <li>
                          <strong>Solemn services:</strong> Features solemn masses, novenas, and a grand procession honoring the saint.
                        </li>
                        <li>
                          <strong>Community:</strong> Accompanied by cultural programs and community gatherings.
                        </li>
                      </ul>
                    </div>

                    <div className="info-block">
                      <h3 className="info-block-title">
                        <MapPin size={18} className="title-icon" /> Visitor Information
                      </h3>
                      <ul className="custom-bullet-list">
                        <li>
                          <strong>Location:</strong> Attur, Karkala, Karnataka.
                        </li>
                        <li>
                          <strong>Distance:</strong> 36 km from Udupi, 3.7 km from Karkala (approx. 45 mins drive from Blue Horizon by Shore).
                        </li>
                        <li>
                          <strong>Access:</strong> Well-connected by road, with ample parking spaces for visitors.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <hr className="divider" style={{ margin: "2.5rem 0" }} />

                  <div className="info-block" style={{ background: "#fdfcfa", padding: "1.5rem", borderRadius: "4px", border: "1px dashed rgba(13, 27, 42, 0.08)" }}>
                    <h3 className="info-block-title" style={{ borderBottom: "none", marginBottom: "0.75rem", paddingBottom: 0 }}>Why Visit?</h3>
                    <p style={{ fontSize: "0.9rem", lineHeight: "1.8", color: "#475569", margin: 0 }}>
                      Saint Lawrence Basilica, Attur, is not just a place of worship—it is an experience of faith, culture, and harmony. Whether you seek solace, miracles, or an exploration of history, this basilica offers a fulfilling spiritual journey. Plan your visit to Saint Lawrence Basilica, Attur, and immerse yourself in its serene ambiance, miraculous stories, and rich cultural heritage.
                    </p>
                  </div>
                </article>
              ) : place.id === "varanga-jain" ? (
                /* Varanga Jain Basadi Rich Details */
                <article className="details-article">
                  <header className="article-header">
                    <span className="overline-gold">{place.category} Legacy</span>
                    <h2 id="detail-header-title" className="main-headline">
                      The Lake Temple of Varanga Basadi: Floating serenity.
                    </h2>
                    <p className="sub-headline">
                      Discover the unique 12th-century Kere Basadi reached by boat.
                    </p>
                  </header>

                  <div className="lead-container">
                    <p className="lead-text">
                      Located 39 km from the resort, Varanga Jain Basadi is a mystical temple complex set in a quiet, water lily-filled lake, featuring the unique floating Kere Basadi which is accessible only by boat.
                    </p>
                  </div>

                  <div className="info-sections">
                    <div className="info-block">
                      <h3 className="info-block-title">
                        <BookOpen size={18} className="title-icon" /> Architectural Wonders
                      </h3>
                      <ul className="custom-bullet-list">
                        <li>
                          <strong>Kere Basadi:</strong> A unique structure sitting directly in the middle of a lake. It houses four deities facing the four directions: Parshwanatha, Shanthinatha, Ananthanatha, and Neminatha.
                        </li>
                        <li>
                          <strong>Neminatha Basadi:</strong> Built in Tulu Nadu style, containing a massive stone monolith sculpture of Lord Neminatha.
                        </li>
                      </ul>
                    </div>

                    <div className="info-block">
                      <h3 className="info-block-title">
                        <Compass size={18} className="title-icon" /> Visitor Experience
                      </h3>
                      <ul className="custom-bullet-list">
                        <li>
                          <strong>Boat Ride:</strong> A peaceful wooden boat ride carries guests across the lake, surrounded by water lilies and views of the Western Ghats.
                        </li>
                      </ul>
                    </div>
                  </div>
                </article>
              ) : place.id === "coin-museum" ? (
                /* Coin Museum Udupi Detailed Layout */
                <article className="details-article">
                  <header className="article-header">
                    <span className="overline-gold">{place.category} Legacy</span>
                    <h2 id="detail-header-title" className="main-headline">
                      A Journey Through India’s Numismatic and Banking Heritage
                    </h2>
                    <p className="sub-headline">
                      Exploring the Rich History of Currency
                    </p>
                  </header>

                  <div className="lead-container">
                    <p className="lead-text">
                      Housed in a 120-year-old historic building that once served as the residence of Haji Abdul Saheb, the founder of Corporation Bank, the Corporation Bank Heritage Museum (Coin Museum) offers a fascinating glimpse into India’s rich numismatic and banking history. Located just 500 meters from the Udupi City Bus Stand (and <strong>6 km / 15 minutes drive from Blue Horizon by Shore</strong>).
                    </p>
                  </div>

                  <div className="info-sections">
                    <div className="info-block">
                      <h3 className="info-block-title">
                        <BookOpen size={18} className="title-icon" /> Museum Exhibits
                      </h3>
                      <ul className="custom-bullet-list">
                        <li>
                          <strong>Coin Collection:</strong> Rare coins dating back to 400 BC, from ancient dynasties such as the Maurya, Kushan, Satavahana, and Gupta empires. Also includes coins from the Mughal era (reigns of Akbar, Jahangir, and Shah Jahan). In total, over 1,400 coins valued at 40 lakh rupees showcase India's numismatic evolution.
                        </li>
                        <li>
                          <strong>Postage Stamp Collection:</strong> A vast array of stamps that document the country’s philatelic history.
                        </li>
                        <li>
                          <strong>Banking Heritage:</strong> Exhibits tracing the history of India’s banking sector since the establishment of Corporation Bank in 1906.
                        </li>
                      </ul>
                    </div>

                    <div className="info-block">
                      <h3 className="info-block-title">
                        <Compass size={18} className="title-icon" /> Key Highlights
                      </h3>
                      <ul className="custom-bullet-list">
                        <li>
                          <strong>Historical Birthplace:</strong> The building was the site of the first Corporation Bank branch, adding to its historical significance.
                        </li>
                        <li>
                          <strong>Treasure Trove:</strong> A treasure trove of numismatic artifacts that provide insight into India's cultural and economic history.
                        </li>
                      </ul>
                    </div>

                    <div className="info-block">
                      <h3 className="info-block-title">
                        <Info size={18} className="title-icon" /> Visitor Information
                      </h3>
                      <ul className="custom-bullet-list">
                        <li>
                          <strong>Timings:</strong> Open daily from 10:00 AM to 5:00 PM (closed on bank holidays).
                        </li>
                        <li>
                          <strong>Admission:</strong> Free
                        </li>
                        <li>
                          <strong>Address:</strong> Just 500 meters from Udupi City Bus Stand, making it easily accessible for tourists.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <hr className="divider" style={{ margin: "2.5rem 0" }} />

                  <div className="info-block" style={{ background: "#fdfcfa", padding: "1.5rem", borderRadius: "4px", border: "1px dashed rgba(13, 27, 42, 0.08)" }}>
                    <h3 className="info-block-title" style={{ borderBottom: "none", marginBottom: "0.75rem", paddingBottom: 0 }}>Experience</h3>
                    <p style={{ fontSize: "0.9rem", lineHeight: "1.8", color: "#475569", margin: 0 }}>
                      The Coin Museum in Udupi is not just a repository of historical artifacts but also a place where visitors can connect with the region’s cultural and economic past. From rare coins to insightful banking exhibits, the museum offers a unique educational experience for all age groups.
                    </p>
                  </div>
                </article>
              ) : place.id === "malpe-beach" ? (
                /* Malpe Beach Detailed Layout */
                <article className="details-article">
                  <header className="article-header">
                    <span className="overline-gold">{place.category} Destination</span>
                    <h2 id="detail-header-title" className="main-headline">
                      Experience the Golden Sands and Adventure at Udupi's Iconic Beach Destination
                    </h2>
                    <p className="sub-headline">
                      A Perfect Destination for Relaxation and Adventure
                    </p>
                  </header>

                  <div className="lead-container">
                    <p className="lead-text">
                      Located just 7 kilometers from Udupi (approx. 2 min drive / 5 min walk from Blue Horizon by Shore), Malpe Beach is a serene coastal retreat that combines natural beauty, thrilling adventures, and a touch of history. Renowned for its fine golden sands and gentle Arabian Sea waves, this beach offers a tranquil escape for families and friends.
                    </p>
                  </div>

                  <div className="info-sections">
                    <div className="info-block">
                      <h3 className="info-block-title">
                        <Compass size={18} className="title-icon" /> Adventure Hub & Attractions
                      </h3>
                      <ul className="custom-bullet-list">
                        <li>
                          <strong>Water Sports:</strong> Features exciting activities like parasailing/paragliding, jet skiing, banana boat rides, and thrilling bumper rides.
                        </li>
                        <li>
                          <strong>Floating Bridge:</strong> Karnataka’s first floating bridge, a unique attraction allowing visitors to walk into the ocean and experience the waves up close.
                        </li>
                      </ul>
                    </div>

                    <div className="info-block">
                      <h3 className="info-block-title">
                        <Info size={18} className="title-icon" /> Local Delicacies & Heritage
                      </h3>
                      <ul className="custom-bullet-list">
                        <li>
                          <strong>Beachside Dining:</strong> Beachside stalls serving fresh seafood and traditional coastal Udupi delicacies.
                        </li>
                        <li>
                          <strong>Historical Legacy:</strong> The site where Mahatma Gandhi’s ashes were immersed, commemorating his profound legacy.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <hr className="divider" style={{ margin: "2.5rem 0" }} />

                  <div className="info-block" style={{ background: "#fdfcfa", padding: "1.5rem", borderRadius: "4px", border: "1px dashed rgba(13, 27, 42, 0.08)" }}>
                    <h3 className="info-block-title" style={{ borderBottom: "none", marginBottom: "0.75rem", paddingBottom: 0 }}>Summary</h3>
                    <p style={{ fontSize: "0.9rem", lineHeight: "1.8", color: "#475569", margin: 0 }}>
                      With its perfect mix of excitement and relaxation, Malpe Beach is a must-visit destination for anyone exploring Karnataka's picturesque coastline.
                    </p>
                  </div>
                </article>
              ) : place.id === "marvanthe-beach" ? (
                /* Maravanthe Beach Detailed Layout */
                <article className="details-article">
                  <header className="article-header">
                    <span className="overline-gold">{place.category} Destination</span>
                    <h2 id="detail-header-title" className="main-headline">
                      Discover Trasi Maravanthe Beach, a unique coastal gem framed by nature's dual wonders
                    </h2>
                    <p className="sub-headline">
                      A Coastal Gem with Dual Water Views
                    </p>
                  </header>

                  <div className="lead-container">
                    <p className="lead-text">
                      Located 51 km from Udupi (approx. 1 hour drive from Blue Horizon by Shore), 17 km from Kundapura, and 23 km from Byndoor, Trasi and Maravanthe Beach are two of Karnataka's most picturesque coastal destinations. Renowned for their mesmerizing landscapes and unique geographical features, these twin beaches attract photographers, nature lovers, and adventure seekers from around the globe.
                    </p>
                  </div>

                  <div className="info-sections">
                    <div className="info-block">
                      <h3 className="info-block-title">
                        <Compass size={18} className="title-icon" /> Key Attractions
                      </h3>
                      <ul className="custom-bullet-list">
                        <li>
                          <strong>Aerial View & Geography:</strong> The unparalleled sight of the Souparnika River flowing east and the Arabian Sea lying to the west, separated by a narrow 2-kilometer stretch of National Highway 66, is a visual marvel. This rare juxtaposition creates the illusion of the river and sea meeting.
                        </li>
                        <li>
                          <strong>Serene Beaches:</strong> Pristine white sands, vibrant turquoise waters, and lush greenery create a tranquil environment.
                        </li>
                        <li>
                          <strong>Water Sports:</strong> Thrilling water sports such as jet-skiing, kayaking, and banana boat rides on both the river and sea.
                        </li>
                        <li>
                          <strong>River Backwaters:</strong> Explore Padukone backwaters (12 km) and Souparnika River for boating and nature walks.
                        </li>
                      </ul>
                    </div>

                    <div className="info-block">
                      <h3 className="info-block-title">
                        <BookOpen size={18} className="title-icon" /> Cultural & Spiritual Significance
                      </h3>
                      <ul className="custom-bullet-list">
                        <li>
                          <strong>Sri Maharajaswami Varaha Temple:</strong> Dedicated to Varaha, Janardhana, and Narasimha. Rooted in the legend of King Maruta Raya, who performed penance here.
                        </li>
                        <li>
                          <strong>Abhari Tradition:</strong> Devotees offer food to crocodile-like creatures in a temple well, believed to bring relief from suffering.
                        </li>
                      </ul>
                    </div>

                    <div className="info-block">
                      <h3 className="info-block-title">
                        <MapPin size={18} className="title-icon" /> Nearby Attractions
                      </h3>
                      <ul className="custom-bullet-list">
                        <li>
                          <strong>Kodi Beach (15 km):</strong> Unspoiled beauty and peaceful ambiance.
                        </li>
                        <li>
                          <strong>Kundeshwar Temple (18 km):</strong> A historic temple dedicated to Lord Shiva near Kundapura.
                        </li>
                        <li>
                          <strong>Ottinene Sunset Point (20 km):</strong> Popular viewpoint offering sunsets over the Arabian Sea.
                        </li>
                        <li>
                          <strong>Kollur Mookambika Temple (28 km):</strong> Revered pilgrimage site in the Western Ghats.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <hr className="divider" style={{ margin: "2.5rem 0" }} />

                  <div className="info-block" style={{ background: "#fdfcfa", padding: "1.5rem", borderRadius: "4px", border: "1px dashed rgba(13, 27, 42, 0.08)" }}>
                    <h3 className="info-block-title" style={{ borderBottom: "none", marginBottom: "0.75rem", paddingBottom: 0 }}>Highlights</h3>
                    <p style={{ fontSize: "0.9rem", lineHeight: "1.8", color: "#475569", margin: 0 }}>
                      The enchanting combination of river, sea, and temple makes Maravanthe Beach a destination that appeals to every type of traveler. Sunrise and sunset here are particularly breathtaking, and local accommodations and eateries ensure a comfortable visit.
                    </p>
                  </div>
                </article>
              ) : place.id === "kapu-beach" ? (
                /* Kapu Beach Detailed Layout */
                <article className="details-article">
                  <header className="article-header">
                    <span className="overline-gold">{place.category} Destination</span>
                    <h2 id="detail-header-title" className="main-headline">
                      Explore the Tranquility and Scenic Beauty of Kaup Beach
                    </h2>
                    <p className="sub-headline">
                      A Blend of Natural Beauty and Historic Charm
                    </p>
                  </header>

                  <div className="lead-container">
                    <p className="lead-text">
                      Situated 17 km from Udupi (approx. 20 min drive from Blue Horizon by Shore) and 5.3 km from Kaup town, Kaup Beach is one of Karnataka's most renowned coastal destinations. Its pristine white sands, rugged cliffs, and iconic lighthouse create an unforgettable experience for visitors.
                    </p>
                  </div>

                  <div className="info-sections">
                    <div className="info-block">
                      <h3 className="info-block-title">
                        <BookOpen size={18} className="title-icon" /> A Lighthouse with Historical Significance
                      </h3>
                      <ul className="custom-bullet-list">
                        <li>
                          <strong>Nautical Legacy:</strong> Built in 1901 by the British Government, this 27.12-meter-tall structure served as a guide for fishermen and foreign vessels navigating the Arabian Sea. To this day, it continues to emit light.
                        </li>
                        <li>
                          <strong>Visitor Timings:</strong> The lighthouse is open daily from 4 PM to 6 PM, offering the best panoramic sunset views.
                        </li>
                      </ul>
                    </div>

                    <div className="info-block">
                      <h3 className="info-block-title">
                        <Compass size={18} className="title-icon" /> Key Features & Activities
                      </h3>
                      <ul className="custom-bullet-list">
                        <li>
                          <strong>White Sandy Shores:</strong> Soft sands and tranquil environment perfect for relaxation.
                        </li>
                        <li>
                          <strong>Rocky Cliffs:</strong> The dramatic basalt cliffs add a unique charm and provide stunning views of the sea.
                        </li>
                        <li>
                          <strong>Climb the Lighthouse:</strong> Ascend the spiral stairs to witness a 360-degree view of the coastline, making it a perfect spot for photography.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <hr className="divider" style={{ margin: "2.5rem 0" }} />

                  <div className="info-block" style={{ background: "#fdfcfa", padding: "1.5rem", borderRadius: "4px", border: "1px dashed rgba(13, 27, 42, 0.08)" }}>
                    <h3 className="info-block-title" style={{ borderBottom: "none", marginBottom: "0.75rem", paddingBottom: 0 }}>Summary</h3>
                    <p style={{ fontSize: "0.9rem", lineHeight: "1.8", color: "#475569", margin: 0 }}>
                      Kaup Beach Lighthouse is not just a navigational marvel but also a place of stunning natural beauty, offering visitors a glimpse into the region's history and coastal grandeur. A trip here promises an unforgettable experience by the sea.
                    </p>
                  </div>
                </article>
              ) : place.id === "padubidri-beach" ? (
                /* Padubidri Beach Detailed Layout */
                <article className="details-article">
                  <header className="article-header">
                    <span className="overline-gold">{place.category} Destination</span>
                    <h2 id="detail-header-title" className="main-headline">
                      Explore Blue Flag Beach: Pristine Shores and Sustainable Tourism
                    </h2>
                    <p className="sub-headline">
                      A Sustainable Coastal Paradise
                    </p>
                  </header>

                  <div className="lead-container">
                    <p className="lead-text">
                      Located 26 km from Udupi (approx. 35 min drive from Blue Horizon by Shore), Padubidri Beach is a Blue Flag-certified beach. This prestigious international recognition is awarded for its cleanliness, environmental management, and sustainability. It is one of the few beaches in India to hold this certification, making it a popular destination for eco-conscious travelers.
                    </p>
                  </div>

                  <div className="info-sections">
                    <div className="info-block">
                      <h3 className="info-block-title">
                        <CheckCircle size={18} className="title-icon" /> Features and Amenities
                      </h3>
                      <ul className="custom-bullet-list">
                        <li>
                          <strong>Clean Environment:</strong> Adheres to strict environmental standards with structured waste management. Smoking and plastic usage are strictly prohibited.
                        </li>
                        <li>
                          <strong>Premium Facilities:</strong> Well-maintained changing rooms, shower/locker units, children's play areas, paved pathways, benches, and shaded seating.
                        </li>
                        <li>
                          <strong>Visitor Safety:</strong> Equipped with professional trained lifeguards and first-aid stations.
                        </li>
                      </ul>
                    </div>

                    <div className="info-block">
                      <h3 className="info-block-title">
                        <Compass size={18} className="title-icon" /> Activities & Biodiversity
                      </h3>
                      <ul className="custom-bullet-list">
                        <li>
                          <strong>Recreation:</strong> Features water sports (kayaking, jet skiing, parasailing) and a dedicated cycling track along the beach.
                        </li>
                        <li>
                          <strong>Olive Ridley Turtles:</strong> The beach serves as a protected nesting site for Olive Ridley turtles, highlighting its high ecological importance.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <hr className="divider" style={{ margin: "2.5rem 0" }} />

                  <div className="info-block" style={{ background: "#fdfcfa", padding: "1.5rem", borderRadius: "4px", border: "1px dashed rgba(13, 27, 42, 0.08)" }}>
                    <h3 className="info-block-title" style={{ borderBottom: "none", marginBottom: "0.75rem", paddingBottom: 0 }}>Summary</h3>
                    <p style={{ fontSize: "0.9rem", lineHeight: "1.8", color: "#475569", margin: 0 }}>
                      A visit to Padubidri Beach promises a blend of natural beauty, sustainability, and clean recreational activities, making it a standout family-friendly eco-tourism attraction in Udupi district.
                    </p>
                  </div>
                </article>
              ) : place.id === "mattu-beach" ? (
                /* Mattu Beach Detailed Layout */
                <article className="details-article">
                  <header className="article-header">
                    <span className="overline-gold">{place.category} Destination</span>
                    <h2 id="detail-header-title" className="main-headline">
                      Discover the quiet beauty of Mattu Beach, a hidden paradise in Udupi
                    </h2>
                    <p className="sub-headline">
                      Discover Mattu Beach—where golden sands meet the waves for a memorable retreat.
                    </p>
                  </header>

                  <div className="lead-container">
                    <p className="lead-text">
                      Located just 11 km from Udupi (approx. 15 min drive from Blue Horizon by Shore) and 3.5 km from Katpadi, Mattu Beach is a quiet coastal destination known for its serene environment, picturesque paddy fields lining the way, and unique bioluminescent plankton that occasionally light up the shoreline at night.
                    </p>
                  </div>

                  <div className="info-sections">
                    <div className="info-block">
                      <h3 className="info-block-title">
                        <BookOpen size={18} className="title-icon" /> Unique Features
                      </h3>
                      <ul className="custom-bullet-list">
                        <li>
                          <strong>GI Tagged Heritage:</strong> The Mattu Gulla brinjal variety grown in this coastal strip has won a GI tag, highlighting the cultural and agricultural significance of the surrounding region.
                        </li>
                        <li>
                          <strong>Scenic Confluence:</strong> Flanked by a river estuary on one side and the Arabian Sea on the other, creating beautiful vistas and an offbeat, peaceful charm.
                        </li>
                        <li>
                          <strong>Expansive Coastline:</strong> Stretches about 8 km, offering ample quiet space for long walks and sunset photography.
                        </li>
                      </ul>
                    </div>

                    <div className="info-block">
                      <h3 className="info-block-title">
                        <Compass size={18} className="title-icon" /> Activities & Layout
                      </h3>
                      <ul className="custom-bullet-list">
                        <li>
                          <strong>Relaxation:</strong> Safe seating arrangements, walking paths, and small play areas for children.
                        </li>
                        <li>
                          <strong>Scenic Proximity:</strong> Located just 6 km to the south of Kapu Beach lighthouse, allowing you to easily combine both into a single itinerary.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <hr className="divider" style={{ margin: "2.5rem 0" }} />

                  <div className="info-block" style={{ background: "#fdfcfa", padding: "1.5rem", borderRadius: "4px", border: "1px dashed rgba(13, 27, 42, 0.08)" }}>
                    <h3 className="info-block-title" style={{ borderBottom: "none", marginBottom: "0.75rem", paddingBottom: 0 }}>Best Time to Visit</h3>
                    <p style={{ fontSize: "0.9rem", lineHeight: "1.8", color: "#475569", margin: 0 }}>
                      Mattu Beach is a hidden gem on Karnataka's coast. The best time to visit is from October to February during the evening hours, when the weather cools down and you can capture the stunning dual hues of the sea and river estuary.
                    </p>
                  </div>
                </article>
              ) : place.id === "delta-beach" ? (
                /* Delta Beach Detailed Layout */
                <article className="details-article">
                  <header className="article-header">
                    <span className="overline-gold">{place.category} Destination</span>
                    <h2 id="detail-header-title" className="main-headline">
                      Experience the quiet allure of Bengre Beach, perfect for nature lovers
                    </h2>
                    <p className="sub-headline">
                      A Peaceful Escape with Scenic Beauty in Udupi
                    </p>
                  </header>

                  <div className="lead-container">
                    <p className="lead-text">
                      Located just 17 km from Udupi (approx. 15 min drive from Blue Horizon by Shore) and 11 km from Santhekatte, Bengre Beach (often referred to as Kodi Bengre) offers an extraordinary coastal experience where the Seetha River and the Suvarna River converge before merging with the Arabian Sea.
                    </p>
                  </div>

                  <div className="info-sections">
                    <div className="info-block">
                      <h3 className="info-block-title">
                        <Compass size={18} className="title-icon" /> Unique Confluence & Geography
                      </h3>
                      <ul className="custom-bullet-list">
                        <li>
                          <strong>Estuary Convergence:</strong> The rare sight of two rivers (Seetha & Suvarna) merging with the sea in a picturesque setting.
                        </li>
                        <li>
                          <strong>Narrow Land Strip:</strong> A distinctive 50-meter-wide stretch of land, allowing you to view a river channel on one side and the Arabian Sea on the other.
                        </li>
                      </ul>
                    </div>

                    <div className="info-block">
                      <h3 className="info-block-title">
                        <Info size={18} className="title-icon" /> Cultural & Boating Activities
                      </h3>
                      <ul className="custom-bullet-list">
                        <li>
                          <strong>Traditional Coastal Living:</strong> Dotted with traditional Tulu Nadu houses, quiet homestays, and local house boats.
                        </li>
                        <li>
                          <strong>Fishing Harbour:</strong> A small, vibrant local fishing harbour that provides an authentic glimpse into the daily life of coastal fishermen.
                        </li>
                        <li>
                          <strong>Barge / Ferry Rides:</strong> A scenic ferry service connecting Kodi Bengre and Hangarakatte allows visitors to experience the waterways up close.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <hr className="divider" style={{ margin: "2.5rem 0" }} />

                  <div className="info-block" style={{ background: "#fdfcfa", padding: "1.5rem", borderRadius: "4px", border: "1px dashed rgba(13, 27, 42, 0.08)" }}>
                    <h3 className="info-block-title" style={{ borderBottom: "none", marginBottom: "0.75rem", paddingBottom: 0 }}>Summary</h3>
                    <p style={{ fontSize: "0.9rem", lineHeight: "1.8", color: "#475569", margin: 0 }}>
                      Bengre Beach is a must-visit for those seeking a unique blend of natural confluence, coastal house boat rides, and absolute tranquility. Best visited from October to February.
                    </p>
                  </div>
                </article>
              ) : place.id === "hasta-shilpa" ? (
                /* Hasta Shilpa Detailed Layout */
                <article className="details-article">
                  <header className="article-header">
                    <span className="overline-gold">{place.category} Legacy</span>
                    <h2 id="detail-header-title" className="main-headline">
                      Preserving Ancient Traditions and Architecture
                    </h2>
                    <p className="sub-headline">
                      A Journey Back in Time to Witness the Craftsmanship of India's Heritage Houses
                    </p>
                  </header>

                  <div className="lead-container">
                    <p className="lead-text">
                      Located just 5.6 km from Udupi and 1.4 km from Manipal (approx. 20 min drive from Blue Horizon by Shore), the Hasta Shilpa Heritage Village is a remarkable open-air museum dedicated to preserving and showcasing India’s rich cultural and architectural heritage. Housed across a beautiful estate, it stands as a testimony to India’s diverse traditions, craftsmanship, and historic architecture.
                    </p>
                  </div>

                  <div className="info-sections">
                    <div className="info-block">
                      <h3 className="info-block-title">
                        <BookOpen size={18} className="title-icon" /> A Visionary Endeavor
                      </h3>
                      <p style={{ fontSize: "0.9rem", lineHeight: "1.75", color: "#475569", marginBottom: "1rem" }}>
                        The village is the brainchild of Vijayanath Shenoy, a visionary who embarked on a mission to safeguard India’s architectural legacy. Over decades, Shenoy meticulously relocated and restored ancestral homes and heritage structures. These restorations provide a glimpse into the bygone era and the unique lifestyle, rituals, and beliefs of Indian communities.
                      </p>
                    </div>

                    <div className="info-block">
                      <h3 className="info-block-title">
                        <Compass size={18} className="title-icon" /> Architectural and Cultural Highlights
                      </h3>
                      <p style={{ fontSize: "0.9rem", lineHeight: "1.75", color: "#475569", marginBottom: "1rem" }}>
                        Spanning an expansive area, the village boasts 18 fully restored heritage buildings, including:
                      </p>
                      <ul className="custom-bullet-list">
                        <li>
                          <strong>13th-century Harihara Mandir:</strong> A magnificent shrine that exemplifies ancient wood and stone craftsmanship.
                        </li>
                        <li>
                          <strong>Traditional Houses:</strong> Meticulously restored residences from Maharashtra, Kerala, Tamil Nadu, and Karnataka, highlighting the diversity of vernacular architecture.
                        </li>
                        <li>
                          <strong>Artifacts and Crafts:</strong> Rare tribal art from Bastar-Chhattisgarh, folk deities from South Canara, textiles, furniture, and ancient tools.
                        </li>
                      </ul>
                    </div>

                    <div className="info-block">
                      <h3 className="info-block-title">
                        <Info size={18} className="title-icon" /> Academic and Visitor Information
                      </h3>
                      <ul className="custom-bullet-list">
                        <li>
                          <strong>Learning Hub:</strong> Functions as an academic institution, fostering education and research in heritage conservation and restoration.
                        </li>
                        <li>
                          <strong>Timings:</strong> Open from 10:00 AM to 5:00 PM. Closed on Mondays and public holidays.
                        </li>
                        <li>
                          <strong>Tickets:</strong> ₹300 for adults and ₹150 for children above 10 years.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <hr className="divider" style={{ margin: "2.5rem 0" }} />

                  <div className="info-block" style={{ background: "#fdfcfa", padding: "1.5rem", borderRadius: "4px", border: "1px dashed rgba(13, 27, 42, 0.08)" }}>
                    <h3 className="info-block-title" style={{ borderBottom: "none", marginBottom: "0.75rem", paddingBottom: 0 }}>Summary</h3>
                    <p style={{ fontSize: "0.9rem", lineHeight: "1.8", color: "#475569", margin: 0 }}>
                      The Hasta Shilpa Heritage Village is not just a museum but a journey back in time. Whether you’re a history enthusiast, an academic, or a curious traveler, the village offers a profound and enriching experience.
                    </p>
                  </div>
                </article>
              ) : place.id === "saligrama-mangrove" ? (
                /* Saligrama Mangrove Detailed Layout */
                <article className="details-article">
                  <header className="article-header">
                    <span className="overline-gold">{place.category} Adventure</span>
                    <h2 id="detail-header-title" className="main-headline">
                      Saligrama Mangroves: A Kayaking Adventure in Nature’s Heart
                    </h2>
                    <p className="sub-headline">
                      Explore Udupi's Serene Waterways, Rivers, and Forest Canopies
                    </p>
                  </header>

                  <div className="lead-container">
                    <p className="lead-text">
                      Located 22 km from Udupi (approx. 30 min drive from Blue Horizon by Shore), Udupi offers a variety of kayaking experiences that take you through pristine beaches, tranquil rivers, and lush mangroves. Navigate through the mangrove-lined waterways of Saligrama, explore unique flora and fauna, and immerse yourself in the vibrant forest ecosystem.
                    </p>
                  </div>

                  <div className="info-sections">
                    <div className="info-block">
                      <h3 className="info-block-title">
                        <Compass size={18} className="title-icon" /> Top Kayaking Locations in Udupi
                      </h3>
                      <ul className="custom-bullet-list">
                        <li>
                          <strong>Saligrama Mangroves:</strong> A hidden gem for kayaking. Navigating through the dense, narrow mangrove channels offers a close view of the coastal wildlife.
                        </li>
                        <li>
                          <strong>Kemmannu (Hanging Bridge):</strong> Kayak through gentle river currents and coconut plantations, perfect for paddlers seeking tranquility.
                        </li>
                        <li>
                          <strong>Mattu Beach:</strong> Known for its calm waters and scenic beauty, offering a relaxing escape surrounded by nature.
                        </li>
                        <li>
                          <strong>Blue Flag Beach, Padubidri:</strong> Glide along the pristine, eco-certified shoreline and spot marine life.
                        </li>
                        <li>
                          <strong>Hejamadi & Kodi Kundapura:</strong> Paddle through calm waters, estuaries, and lush greenery, ideal for beginners.
                        </li>
                      </ul>
                    </div>

                    <div className="info-block">
                      <h3 className="info-block-title">
                        <Info size={18} className="title-icon" /> Tips for Kayaking
                      </h3>
                      <ul className="custom-bullet-list">
                        <li>
                          <strong>Clothing:</strong> Wear comfortable clothes that can get wet, and bring sun protection (hat, sunscreen).
                        </li>
                        <li>
                          <strong>Safety:</strong> Stay hydrated and always follow safety instructions and wear life jackets.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <hr className="divider" style={{ margin: "2.5rem 0" }} />

                  <div className="info-block" style={{ background: "#fdfcfa", padding: "1.5rem", borderRadius: "4px", border: "1px dashed rgba(13, 27, 42, 0.08)" }}>
                    <h3 className="info-block-title" style={{ borderBottom: "none", marginBottom: "0.75rem", paddingBottom: 0 }}>Why Choose Udupi?</h3>
                    <p style={{ fontSize: "0.9rem", lineHeight: "1.8", color: "#475569", margin: 0 }}>
                      Udupi’s calm waters offer the perfect setting for kayaking, whether you're a beginner or an experienced paddler. Experience the calm beauty of nature while paddling through some of the most picturesque locations in India.
                    </p>
                  </div>
                </article>
              ) : place.id === "varanga-jain" ? (
                /* Varanga Jain Basadi Detailed Layout */
                <article className="details-article">
                  <header className="article-header">
                    <span className="overline-gold">{place.category} Legacy</span>
                    <h2 id="detail-header-title" className="main-headline">
                      A Tranquil Temple Amidst a Serene Lake
                    </h2>
                    <p className="sub-headline">
                      Historical Significance and Architecture of Kere Basadi
                    </p>
                  </header>

                  <div className="lead-container">
                    <p className="lead-text">
                      Located 37 km from Udupi and 8.6 km from Hebri (approx. 50 min drive from Blue Horizon by Shore), the Kere Basadi (Lake Temple) in Varanga is an architectural gem set in the middle of a 14-acre reservoir. This 12th-century star-shaped Jain temple dedicated to Goddess Padmavati is a remarkable fusion of spirituality, history, and natural beauty. Accessible only by a 100-meter wooden boat ride.
                    </p>
                  </div>

                  <div className="info-sections">
                    <div className="info-block">
                      <h3 className="info-block-title">
                        <BookOpen size={18} className="title-icon" /> Unique Architecture & Significance
                      </h3>
                      <ul className="custom-bullet-list">
                        <li>
                          <strong>Star-Shaped Design:</strong> Built by Queen Jakala Devi of the Alupa Kingdom, featuring intricate carvings that exemplify ancient craftsmanship.
                        </li>
                        <li>
                          <strong>Four directions:</strong> The temple houses idols of Parswanatha, Ananthanath, Neminatha, and Shantinatha Tirthankaras on a single pedestal, facing the cardinal directions.
                        </li>
                        <li>
                          <strong>Historical Roots:</strong> Varanga derives its name from either King Varanga or the slightly tilted idol of Neminatha.
                        </li>
                      </ul>
                    </div>

                    <div className="info-block">
                      <h3 className="info-block-title">
                        <Compass size={18} className="title-icon" /> Activities & Timing
                      </h3>
                      <ul className="custom-bullet-list">
                        <li>
                          <strong>Boat Ride:</strong> Enjoy a short, peaceful boat ride across the reservoir to reach the temple.
                        </li>
                        <li>
                          <strong>Photography & Bird Watching:</strong> Capture the temple's reflection on the calm lake and spot local bird species.
                        </li>
                        <li>
                          <strong>Timings:</strong> Morning: 8:30 AM to 1:00 PM | Evening: 3:00 PM to 6:00 PM.
                        </li>
                      </ul>
                    </div>

                    <div className="info-block">
                      <h3 className="info-block-title">
                        <MapPin size={18} className="title-icon" /> Nearby Attractions
                      </h3>
                      <ul className="custom-bullet-list">
                        <li>
                          <strong>Kudlu Theertha Falls:</strong> A stunning waterfall located 20 km from Hebri, offering an adventurous trekking experience.
                        </li>
                        <li>
                          <strong>Someshwara Wildlife Sanctuary:</strong> A rich biodiversity sanctuary located about 25 km away.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <hr className="divider" style={{ margin: "2.5rem 0" }} />

                  <div className="info-block" style={{ background: "#fdfcfa", padding: "1.5rem", borderRadius: "4px", border: "1px dashed rgba(13, 27, 42, 0.08)" }}>
                    <h3 className="info-block-title" style={{ borderBottom: "none", marginBottom: "0.75rem", paddingBottom: 0 }}>Summary</h3>
                    <p style={{ fontSize: "0.9rem", lineHeight: "1.8", color: "#475569", margin: 0 }}>
                      Varanga Lake Jain Basadi is a unique destination where history, spirituality, and nature converge. The tranquil boat ride, the stunning star-shaped architecture, and the serene ambiance make it an unforgettable experience.
                    </p>
                  </div>
                </article>
              ) : place.id === "st-marys-island" ? (
                /* St. Mary's Island Detailed Layout */
                <article className="details-article">
                  <header className="article-header">
                    <span className="overline-gold">{place.category} Destination</span>
                    <h2 id="detail-header-title" className="main-headline">
                      Experience the charm of St. Mary’s Island, a place of scenic beauty and tranquility
                    </h2>
                    <p className="sub-headline">
                      A tropical paradise of pristine beaches and crystal-clear waters
                    </p>
                  </header>

                  <div className="lead-container">
                    <p className="lead-text">
                      St. Mary’s Island is located about 10 km from Udupi and approximately 6 km off the coast of Malpe (accessible via ferry from Malpe Beach, just minutes from Blue Horizon by Shore). This captivating group of four small islands is celebrated for its unique geological formations and breathtaking coastal scenery.
                    </p>
                  </div>

                  <div className="info-sections">
                    <div className="info-block">
                      <h3 className="info-block-title">
                        <BookOpen size={18} className="title-icon" /> A Geological Marvel
                      </h3>
                      <ul className="custom-bullet-list">
                        <li>
                          <strong>Hexagonal Basalt Columns:</strong> The islands are renowned for their hexagonal basalt rock formations, which are the result of ancient volcanic activity that took place millions of years ago.
                        </li>
                        <li>
                          <strong>National Monument:</strong> These formations, creating an otherworldly landscape, have earned the islands the status of a National Geological Monument.
                        </li>
                        <li>
                          <strong>Vasco da Gama stop:</strong> Local lore suggests that Portuguese explorer Vasco da Gama made a brief stop at St. Mary’s Island in 1498 during his voyage.
                        </li>
                      </ul>
                    </div>

                    <div className="info-block">
                      <h3 className="info-block-title">
                        <Compass size={18} className="title-icon" /> Unique Features
                      </h3>
                      <ul className="custom-bullet-list">
                        <li>
                          <strong>Coconut Island:</strong> The largest of the four is adorned with tall coconut trees that provide shade and contribute to the islands' picturesque charm.
                        </li>
                        <li>
                          <strong>Shell-Lined Shores:</strong> Unlike conventional sandy beaches, the shores of St. Mary’s Island are covered with small, polished shells.
                        </li>
                        <li>
                          <strong>Ferry Transport:</strong> Convenient ferry services are available from Malpe Beach and Malpe Sea Walk.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <hr className="divider" style={{ margin: "2.5rem 0" }} />

                  <div className="info-block" style={{ background: "#fdfcfa", padding: "1.5rem", borderRadius: "4px", border: "1px dashed rgba(13, 27, 42, 0.08)" }}>
                    <h3 className="info-block-title" style={{ borderBottom: "none", marginBottom: "0.75rem", paddingBottom: 0 }}>Summary</h3>
                    <p style={{ fontSize: "0.9rem", lineHeight: "1.8", color: "#475569", margin: 0 }}>
                      St. Mary’s Island is a perfect blend of natural beauty, geological interest, and historical significance, making it a must-visit destination. Best visited from October to February.
                    </p>
                  </div>
                </article>
              ) : place.id === "malpe-sea-walk" ? (
                /* Malpe Sea Walk Detailed Layout */
                <article className="details-article">
                  <header className="article-header">
                    <span className="overline-gold">{place.category} Destination</span>
                    <h2 id="detail-header-title" className="main-headline">
                      Experience the Beauty and Culture of Udupi’s Coastal Treasure
                    </h2>
                    <p className="sub-headline">
                      A scenic stroll by the sea at Malpe Sea Walkway
                    </p>
                  </header>

                  <div className="lead-container">
                    <p className="lead-text">
                      Malpe Sea Walkway, located 5.6 km from Udupi (approx. 3 min drive / 10 min walk from Blue Horizon by Shore), is a picturesque 450-meter pathway that seamlessly connects the Arabian Sea on one side with the Papanashini River on the other. Opened in 2018, it is a popular destination for peaceful escapes.
                    </p>
                  </div>

                  <div className="info-sections">
                    <div className="info-block">
                      <h3 className="info-block-title">
                        <Compass size={18} className="title-icon" /> A Perfect Blend of Nature and Design
                      </h3>
                      <ul className="custom-bullet-list">
                        <li>
                          <strong>Features:</strong> Beautifully lit lampposts, seating benches, and viewing platforms that provide stunning sunset views of the sea and the river.
                        </li>
                        <li>
                          <strong>Scenic Vistas:</strong> Capture the beauty of Malpe’s four natural islands visible from the walkway.
                        </li>
                      </ul>
                    </div>

                    <div className="info-block">
                      <h3 className="info-block-title">
                        <BookOpen size={18} className="title-icon" /> Cultural & Historical Significance
                      </h3>
                      <ul className="custom-bullet-list">
                        <li>
                          <strong>Jatayu Statue:</strong> The central garden features a striking statue of Jatayu, a mythical bird from Indian folklore, paying tribute to the local fishing culture.
                        </li>
                        <li>
                          <strong>Open-Air Auditorium:</strong> The adjacent open-air auditorium hosts various events, from musical performances to local festivals.
                        </li>
                        <li>
                          <strong>Art Installations:</strong> Adorned with sculptures, murals, and sand art that reflect Udupi’s rich maritime and spiritual heritage.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <hr className="divider" style={{ margin: "2.5rem 0" }} />

                  <div className="info-block" style={{ background: "#fdfcfa", padding: "1.5rem", borderRadius: "4px", border: "1px dashed rgba(13, 27, 42, 0.08)" }}>
                    <h3 className="info-block-title" style={{ borderBottom: "none", marginBottom: "0.75rem", paddingBottom: 0 }}>Summary</h3>
                    <p style={{ fontSize: "0.9rem", lineHeight: "1.8", color: "#475569", margin: 0 }}>
                      Malpe Sea Walkway offers an idyllic escape with its blend of stunning sea views, cultural significance, and leisure activities, making it a must-visit spot in the Udupi district.
                    </p>
                  </div>
                </article>
              ) : place.id === "malpe-fishing-harbour" ? (
                /* Malpe Fishing Harbour Detailed Layout */
                <article className="details-article">
                  <header className="article-header">
                    <span className="overline-gold">{place.category} Destination</span>
                    <h2 id="detail-header-title" className="main-headline">
                      Explore the Dynamic Culture and Vibrant Energy of Udupi’s Fishing Industry
                    </h2>
                    <p className="sub-headline">
                      A bustling hub of maritime culture and coastal life
                    </p>
                  </header>

                  <div className="lead-container">
                    <p className="lead-text">
                      Located just 6 km from Udupi (approx. 5 min drive from Blue Horizon by Shore), the Malpe Fishing Harbour is a bustling center for fishing and maritime trade, offering a glimpse into the coastal lifestyle of Karnataka. It is one of the most important harbors along India’s west coast.
                    </p>
                  </div>

                  <div className="info-sections">
                    <div className="info-block">
                      <h3 className="info-block-title">
                        <Compass size={18} className="title-icon" /> Fishing Industry Hub & Auctions
                      </h3>
                      <ul className="custom-bullet-list">
                        <li>
                          <strong>Maritime Base:</strong> Serves as a base for hundreds of colorful fishing boats, bringing in fresh catches daily.
                        </li>
                        <li>
                          <strong>Auctions & Trade:</strong> Explore the fast-paced auction area, where freshly caught fish are bid on by traders.
                        </li>
                        <li>
                          <strong>Gateway to St. Mary's:</strong> The primary departure point for ferries to St. Mary's Island.
                        </li>
                      </ul>
                    </div>

                    <div className="info-block">
                      <h3 className="info-block-title">
                        <Info size={18} className="title-icon" /> Visitor Experience & Importance
                      </h3>
                      <ul className="custom-bullet-list">
                        <li>
                          <strong>Authentic Vibe:</strong> Experience the traditional fishing culture with the aroma of fresh seafood and active fish markets. Early mornings are best to catch the peak auctions.
                        </li>
                        <li>
                          <strong>Economic Contribution:</strong> Supports thousands of local families involved in fishing, processing, and trade.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <hr className="divider" style={{ margin: "2.5rem 0" }} />

                  <div className="info-block" style={{ background: "#fdfcfa", padding: "1.5rem", borderRadius: "4px", border: "1px dashed rgba(13, 27, 42, 0.08)" }}>
                    <h3 className="info-block-title" style={{ borderBottom: "none", marginBottom: "0.75rem", paddingBottom: 0 }}>Summary</h3>
                    <p style={{ fontSize: "0.9rem", lineHeight: "1.8", color: "#475569", margin: 0 }}>
                      The Malpe Fishing Harbour is a vibrant slice of Karnataka’s coastal life. Early mornings and evenings provide spectacular lighting for photography and a complete cultural experience.
                    </p>
                  </div>
                </article>
              ) : place.id === "hanging-bridge" ? (
                /* Hanging Bridge Detailed Layout */
                <article className="details-article">
                  <header className="article-header">
                    <span className="overline-gold">{place.category} Destination</span>
                    <h2 id="detail-header-title" className="main-headline">
                      A Majestic Viewpoint Over the Backwaters
                    </h2>
                    <p className="sub-headline">
                      A Unique Engineering Marvel and Scenic Attraction in Thonse's Serene Landscape
                    </p>
                  </header>

                  <div className="lead-container">
                    <p className="lead-text">
                      Located just 11 km from Udupi and 4.2 km from Santhekatte (approx. 12 min drive from Blue Horizon by Shore), the Hanging Bridge in Kemmannu offers a unique blend of natural beauty, cultural richness, and adventurous activities. Constructed in 1991, this 280-ft suspension bridge spans across the Seetha and Suvarna Rivers, connecting the islands of Padukudru and Timmanakudru.
                    </p>
                  </div>

                  <div className="info-sections">
                    <div className="info-block">
                      <h3 className="info-block-title">
                        <Compass size={18} className="title-icon" /> Natural Beauty & Islands
                      </h3>
                      <ul className="custom-bullet-list">
                        <li>
                          <strong>Lush Setting:</strong> Emerald-green fields of Timmanakudru Island and dense coconut plantations surround the suspension walkway.
                        </li>
                        <li>
                          <strong>Island Archipelago:</strong> Over 40 river islands formed by the Seetha and Suvarna rivers, offering a tranquil backwater environment.
                        </li>
                      </ul>
                    </div>

                    <div className="info-block">
                      <h3 className="info-block-title">
                        <BookOpen size={18} className="title-icon" /> Activities & Culture
                      </h3>
                      <ul className="custom-bullet-list">
                        <li>
                          <strong>Boating & Kayaking:</strong> Popular spot for kayaking and small boat rides through the calm river channels.
                        </li>
                        <li>
                          <strong>Pre-Wedding Shoots:</strong> A favorite location for photographers and scenic captures.
                        </li>
                        <li>
                          <strong>Livelihood:</strong> The local island communities have lived here for over 300 years, relying on coconut cultivation and traditional fishing.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <hr className="divider" style={{ margin: "2.5rem 0" }} />

                  <div className="info-block" style={{ background: "#fdfcfa", padding: "1.5rem", borderRadius: "4px", border: "1px dashed rgba(13, 27, 42, 0.08)" }}>
                    <h3 className="info-block-title" style={{ borderBottom: "none", marginBottom: "0.75rem", paddingBottom: 0 }}>Summary</h3>
                    <p style={{ fontSize: "0.9rem", lineHeight: "1.8", color: "#475569", margin: 0 }}>
                      The Hanging Bridge in Kemmannu is an experience that connects you to the beauty and cultural richness of Udupi's islands. Perfect for families, adventurers, and photography enthusiasts seeking a rejuvenating retreat.
                    </p>
                  </div>
                </article>
              ) : place.id === "naga-aradhane" ? (
                /* Naga Aradhane Detailed Layout */
                <article className="details-article">
                  <header className="article-header">
                    <span className="overline-gold">{place.category} Tradition</span>
                    <h2 id="detail-header-title" className="main-headline">
                      Naga Aradhane: The Serpent Worship Ritual of Tulunadu
                    </h2>
                    <p className="sub-headline">
                      A deeply spiritual and culturally significant overnight ceremony
                    </p>
                  </header>

                  <div className="lead-container">
                    <p className="lead-text">
                      Naga Aradhane, or Nagamandala, is a deeply spiritual and culturally significant ritual in the Tulunadu region of Karnataka. This elaborate serpent worship ceremony is held in honor of the Naga (serpent god), who is believed to bring blessings, fertility, and protection. The event is celebrated from December to April, marking a sacred period in the region's calendar.
                    </p>
                  </div>

                  <div className="info-sections">
                    <div className="info-block">
                      <h3 className="info-block-title">
                        <Compass size={18} className="title-icon" /> Key Features of the Ritual
                      </h3>
                      <ul className="custom-bullet-list">
                        <li>
                          <strong>Sacred Design (Mandala):</strong> Begins with the creation of an intricate serpent design made using natural colors, crafted on sacred ground within a special pandal.
                        </li>
                        <li>
                          <strong>Vaidyas’ Performances:</strong> Dancers dressed as Nagakannikas (serpent maidens) perform hypnotic dances depicting the union of male and female serpents.
                        </li>
                        <li>
                          <strong>Priestly Rituals:</strong> Conducted by two priests representing the serpents, invoking blessings while dances amplify the spiritual energy.
                        </li>
                        <li>
                          <strong>Overnight Celebrations:</strong> Lasts until the early hours of the morning, filled with rhythmic drum beats, chanting, and intense devotion.
                        </li>
                      </ul>
                    </div>

                    <div className="info-block">
                      <h3 className="info-block-title">
                        <Info size={18} className="title-icon" /> Cultural Significance & Why Attend
                      </h3>
                      <p style={{ fontSize: "0.9rem", lineHeight: "1.75", color: "#475569", marginBottom: "1rem" }}>
                        Naga Aradhane reflects the reverence the Tulunadu people have for the Naga as a symbol of fertility, prosperity, and protection. The ritual is believed to bring harmony and ward off negative energies.
                      </p>
                      <p style={{ fontSize: "0.9rem", lineHeight: "1.75", color: "#475569" }}>
                        Attending offers a unique opportunity to witness one of the most vibrant and spiritual ceremonies of Tulunadu. Mesmerizing dances and intricate mandala art make this a must-see event.
                      </p>
                    </div>
                  </div>

                  <hr className="divider" style={{ margin: "2.5rem 0" }} />

                  <div className="info-block" style={{ background: "#fdfcfa", padding: "1.5rem", borderRadius: "4px", border: "1px dashed rgba(13, 27, 42, 0.08)" }}>
                    <h3 className="info-block-title" style={{ borderBottom: "none", marginBottom: "0.75rem", paddingBottom: 0 }}>Summary</h3>
                    <p style={{ fontSize: "0.9rem", lineHeight: "1.8", color: "#475569", margin: 0 }}>
                      The Naga Aradhane is a profound tradition showcasing the spiritual depth of the region, uniting communities in devotion and celebration.
                    </p>
                  </div>
                </article>
              ) : place.id === "yakshagana" ? (
                /* Yakshagana Detailed Layout */
                <article className="details-article">
                  <header className="article-header">
                    <span className="overline-gold">{place.category} Theater</span>
                    <h2 id="detail-header-title" className="main-headline">
                      Traditional Yakshagana: Celestial Storytelling in Dance-Drama
                    </h2>
                    <p className="sub-headline">
                      Immerse yourself in a world of epic Hindu mythological tales
                    </p>
                  </header>

                  <div className="lead-container">
                    <p className="lead-text">
                      Yakshagana is a vibrant and captivating folk art form from Coastal Karnataka, known for its energetic performances that combine dance, music, drama, and striking costumes. Rooted in ancient traditions, Yakshagana performances (called Prasangas) are inspired by episodes from Hindu epics like the Ramayana and Mahabharata.
                    </p>
                  </div>

                  <div className="info-sections">
                    <div className="info-block">
                      <h3 className="info-block-title">
                        <Compass size={18} className="title-icon" /> Key Elements of Yakshagana
                      </h3>
                      <ul className="custom-bullet-list">
                        <li>
                          <strong>The Performance (Prasanga):</strong> Centers on a mythological sub-story. The lead singer (Bhagavatha) narrates while performers enact with dramatic dialogues and dance.
                        </li>
                        <li>
                          <strong>The Music:</strong> Rhythmic percussion using Chande (drums), Maddale (percussion), Harmonium, and Taala (metal clappers).
                        </li>
                        <li>
                          <strong>Costumes and Makeup:</strong> Performers wear large, ornate headgear, intricately painted faces, colorful attire, and musical ankle bells (Gejje).
                        </li>
                      </ul>
                    </div>

                    <div className="info-block">
                      <h3 className="info-block-title">
                        <BookOpen size={18} className="title-icon" /> Yakshagana Troupes (Melas)
                      </h3>
                      <p style={{ fontSize: "0.9rem", lineHeight: "1.75", color: "#475569", marginBottom: "1rem" }}>
                        Yakshagana is performed by dedicated troupes, known as Melas, which travel across towns and villages:
                      </p>
                      <ul className="custom-bullet-list">
                        <li>
                          <strong>Saligrama Mela:</strong> One of the most famous troupes performing coastal theater.
                        </li>
                        <li>
                          <strong>Dharmasthala Mela:</strong> Renowned for its classical style and heritage.
                        </li>
                        <li>
                          <strong>Mandarthi & Perduru Melas:</strong> Highly popular temple-sponsored troupes.
                        </li>
                      </ul>
                    </div>

                    <div className="info-block">
                      <h3 className="info-block-title">
                        <Info size={18} className="title-icon" /> Cultural & Tourist Experience
                      </h3>
                      <p style={{ fontSize: "0.9rem", lineHeight: "1.75", color: "#475569" }}>
                        Yakshagana serves to educate and entertain, blending moral lessons with high physical endurance. Performances are typically held in open-air theaters or temple grounds. For visitors, the grandeur of the costumes and the rhythm of the music create an unforgettable coastal experience.
                      </p>
                    </div>
                  </div>

                  <hr className="divider" style={{ margin: "2.5rem 0" }} />

                  <div className="info-block" style={{ background: "#fdfcfa", padding: "1.5rem", borderRadius: "4px", border: "1px dashed rgba(13, 27, 42, 0.08)" }}>
                    <h3 className="info-block-title" style={{ borderBottom: "none", marginBottom: "0.75rem", paddingBottom: 0 }}>Summary</h3>
                    <p style={{ fontSize: "0.9rem", lineHeight: "1.8", color: "#475569", margin: 0 }}>
                      Yakshagana embodies the artistic and spiritual heritage of Coastal Karnataka. Its unique blend of theater, moral tales, and community bonding makes it a must-see cultural spectacle.
                    </p>
                  </div>
                </article>
              ) : place.id === "kambala" ? (
                /* Kambala Detailed Layout */
                <article className="details-article">
                  <header className="article-header">
                    <span className="overline-gold">{place.category} Sport</span>
                    <h2 id="detail-header-title" className="main-headline">
                      Kambala: The Legendary Coastal Buffalo Racing Sport
                    </h2>
                    <p className="sub-headline">
                      A celebration of strength, speed, and agricultural heritage
                    </p>
                  </header>

                  <div className="lead-container">
                    <p className="lead-text">
                      Kambala is a traditional sport and cultural event deeply rooted in Tulunadu's agricultural heritage. Taking place between October and March, this buffalo race transforms slushy fields into arenas of high-energy celebration and competition. Originating as a ritual to honor land and nature, it has evolved into a major community event.
                    </p>
                  </div>

                  <div className="info-sections">
                    <div className="info-block">
                      <h3 className="info-block-title">
                        <Compass size={18} className="title-icon" /> Key Features of the Race
                      </h3>
                      <ul className="custom-bullet-list">
                        <li>
                          <strong>Slushy Race Tracks:</strong> Conducted on two parallel tracks filled with waterlogged mud, symbolizing the local agricultural fields.
                        </li>
                        <li>
                          <strong>Buffalo Pairs:</strong> Meticulously trained buffaloes race in pairs, bound by a wooden yoke, covering 140 meters in under 12 seconds.
                        </li>
                        <li>
                          <strong>The Kambala Runner:</strong> The jockey races barefoot alongside the buffaloes through the slush, commanding them with whips and ropes.
                        </li>
                        <li>
                          <strong>Water-Splash Target:</strong> Jockeys compete to splash water as high as possible to hit a hanging target (Kolu).
                        </li>
                      </ul>
                    </div>

                    <div className="info-block">
                      <h3 className="info-block-title">
                        <Info size={18} className="title-icon" /> Agricultural Connection
                      </h3>
                      <p style={{ fontSize: "0.9rem", lineHeight: "1.75", color: "#475569" }}>
                        Kambala is celebrated after the winter paddy harvest. Farmers believe that participating in Kambala pleases the forest and field deities, ensuring a prosperous crop for the coming seasons. The event serves as a cornerstone of the region's cultural identity.
                      </p>
                    </div>
                  </div>

                  <hr className="divider" style={{ margin: "2.5rem 0" }} />

                  <div className="info-block" style={{ background: "#fdfcfa", padding: "1.5rem", borderRadius: "4px", border: "1px dashed rgba(13, 27, 42, 0.08)" }}>
                    <h3 className="info-block-title" style={{ borderBottom: "none", marginBottom: "0.75rem", paddingBottom: 0 }}>Why Attend?</h3>
                    <p style={{ fontSize: "0.9rem", lineHeight: "1.8", color: "#475569", margin: 0 }}>
                      The Kambala Buffalo Race is a visual treat for visitors, offering a thrilling mix of raw power, jockey skill, and local enthusiasm. It is a spectacle that blends tradition, sport, and coastal festivity in a unique way.
                    </p>
                  </div>
                </article>
              ) : place.id === "bhoota-kola" ? (
                /* Bhoota Kola Detailed Layout */
                <article className="details-article">
                  <header className="article-header">
                    <span className="overline-gold">{place.category} Worship</span>
                    <h2 id="detail-header-title" className="main-headline">
                      Bhootha Aradhane: Deity Worship and Oracle Spirits of Tulunadu
                    </h2>
                    <p className="sub-headline">
                      An awe-inspiring ritual of spirit invocation and divine justice
                    </p>
                  </header>

                  <div className="lead-container">
                    <p className="lead-text">
                      Bhootha Aradhane, also known as Bhootada Kola, is a distinctive form of deity worship practiced in Tulunadu. This ancient tradition integrates social, economic, and religious aspects, creating a unique spiritual experience for the community. It is an elaborate ritual where performers embody spirits or deities (known as Bhootas) to deliver divine justice.
                    </p>
                  </div>

                  <div className="info-sections">
                    <div className="info-block">
                      <h3 className="info-block-title">
                        <Compass size={18} className="title-icon" /> Key Rituals & Features
                      </h3>
                      <ul className="custom-bullet-list">
                        <li>
                          <strong>Nema or Kola:</strong> The trained performer paints their face, wears a headdress made of coconut feathers (Siri), and assumes the divine persona through intense nocturnal dances.
                        </li>
                        <li>
                          <strong>Oracle and Divine Justice:</strong> In a possessed state, the performer acts as an oracle, addressing community grievances and resolving local disputes with binding divine judgments.
                        </li>
                        <li>
                          <strong>Procession & Drums:</strong> Bhoota idols are paraded through streets with traditional drum beats and firecrackers before placing them on pedestals.
                        </li>
                        <li>
                          <strong>Fire-Walking:</strong> Some ceremonies include walking across hot embers to showcase absolute spiritual dedication.
                        </li>
                      </ul>
                    </div>

                    <div className="info-block">
                      <h3 className="info-block-title">
                        <BookOpen size={18} className="title-icon" /> Popular Bhootas Worshipped
                      </h3>
                      <ul className="custom-bullet-list">
                        <li>
                          <strong>Panjurli:</strong> The sacred wild boar guardian spirit associated with protection.
                        </li>
                        <li>
                          <strong>Bobbarya:</strong> The sea deity worshipped by fishermen for safe ocean voyages.
                        </li>
                        <li>
                          <strong>Pilichamundi:</strong> Linked to tiger symbolism, representing raw ferocity and power.
                        </li>
                        <li>
                          <strong>Koti Chennaya:</strong> Folk hero siblings revered for bravery, justice, and anti-feudal rebellion.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <hr className="divider" style={{ margin: "2.5rem 0" }} />

                  <div className="info-block" style={{ background: "#fdfcfa", padding: "1.5rem", borderRadius: "4px", border: "1px dashed rgba(13, 27, 42, 0.08)" }}>
                    <h3 className="info-block-title" style={{ borderBottom: "none", marginBottom: "0.75rem", paddingBottom: 0 }}>Summary</h3>
                    <p style={{ fontSize: "0.9rem", lineHeight: "1.8", color: "#475569", margin: 0 }}>
                      Bhootha Aradhane reflects the spiritual depth of the Tulu community, emphasizing faith, justice, and communal harmony. The Kola acts as a bridge between the physical and spiritual realms.
                    </p>
                  </div>
                </article>
              ) : (
                /* General Template Layout for Beaches, Heritage, Nature */
                <article className="details-article">
                  <header className="article-header">
                    <span className="overline-gold">{place.category} Experience</span>
                    <h2 id="detail-header-title" className="main-headline">
                      {place.name}
                    </h2>
                  </header>

                  <div className="lead-container">
                    <p className="lead-text">{place.description}</p>
                  </div>

                  <div className="info-sections">
                    <div className="info-block">
                      <h3 className="info-block-title">About the Destination</h3>
                      <p>
                        This destination represents a key pillar of tourism in coastal Karnataka. It offers guests a wonderful blend of scenic beauty, cultural interactions, and memorable experiences.
                      </p>
                    </div>

                    <div className="info-block">
                      <h3 className="info-block-title">Key Highlights</h3>
                      <ul className="custom-bullet-list">
                        {place.highlights.map((h) => (
                          <li key={h}>
                            <strong>{h}:</strong> An essential feature of this destination that makes it well worth the visit during your stay.
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              )}

              {/* Travel Sidebar Widget (Placed inside the right column below the text) */}
              {place.category !== "Culture" && (
                <div className="travel-details-widget">
                  <h3 className="widget-title">Travel Details & Planning</h3>
                  <div className="widget-grid">
                    <div className="widget-cell">
                      <MapPin size={16} className="cell-icon" />
                      <div>
                        <span className="cell-label">Distance</span>
                        <span className="cell-val">{place.distance || "6 km"}</span>
                      </div>
                    </div>
                    <div className="widget-cell">
                      <Clock3 size={16} className="cell-icon" />
                      <div>
                        <span className="cell-label">Travel Time</span>
                        <span className="cell-val">{place.travelTime || "15 min drive"}</span>
                      </div>
                    </div>
                    <div className="widget-cell">
                      <Calendar size={16} className="cell-icon" />
                      <div>
                        <span className="cell-label">Best Season</span>
                        <span className="cell-val">October to March</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </section>

          </div>
        </div>
      </main>

      <style jsx>{`
        .detail-nav-header {
          margin-top: 5.5rem;
          background: transparent;
          padding: 1.5rem 0 0.5rem 0;
          border-bottom: none;
        }

        @media (max-width: 768px) {
          .detail-nav-header {
            margin-top: 6.5rem;
          }
        }

        .btn-back-hub {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          font-family: var(--font-sans);
          text-decoration: none;
          transition: all var(--transition-smooth);
        }

        .btn-back-circle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid rgba(28, 42, 56, 0.12);
          background: var(--color-white);
          transition: all var(--transition-smooth);
        }

        .btn-back-arrow {
          color: var(--color-primary);
          display: inline-block !important;
          transition: all var(--transition-smooth);
        }

        .btn-back-text {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-primary);
          transition: all var(--transition-smooth);
        }

        /* Hover Interactions */
        .btn-back-hub:hover .btn-back-circle {
          background: var(--color-gold);
          border-color: var(--color-gold);
          transform: translateX(-4px);
        }

        .btn-back-hub:hover .btn-back-arrow {
          color: var(--color-white);
        }

        .btn-back-hub:hover .btn-back-text {
          color: var(--color-gold);
        }

        /* Culture Immersive Layout styles */
        .culture-immersive-layout {
          max-width: 800px;
          margin: 0 auto;
        }

        .culture-immersive-banner {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: var(--shadow-luxury);
          background: #1e293b;
          margin-bottom: 3.5rem;
        }

        .culture-details-container {
          width: 100%;
        }

        /* Split Layout Grid */
        .split-layout {
          display: grid;
          grid-template-columns: 460px 1fr;
          gap: 4rem;
          align-items: start;
        }

        /* Luxury Slider Card CSS */
        .slider-container {
          position: sticky;
          top: 6rem;
        }

        .luxury-slider-card {
          position: relative;
          aspect-ratio: 3 / 4;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: var(--shadow-luxury);
          background: #1e293b;
        }

        .slider-viewport {
          position: absolute;
          inset: 0;
        }

        .slider-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.8s ease-in-out;
          z-index: 1;
        }

        .slider-slide.active {
          opacity: 1;
          z-index: 2;
        }

        .slider-img {
          object-fit: cover;
        }

        /* Overlaid Controls */
        .slider-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border: none;
          color: var(--color-navy);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
          z-index: 10;
          transition: all var(--transition-smooth);
        }

        .slider-nav-btn:hover {
          background: var(--color-gold);
          color: var(--color-white);
          transform: translateY(-50%) scale(1.05);
        }

        .prev-btn {
          left: 1rem;
        }

        .next-btn {
          right: 1rem;
        }

        .slider-indicators {
          position: absolute;
          bottom: 2rem;
          left: 2rem;
          display: flex;
          gap: 0.4rem;
          z-index: 10;
        }

        .slider-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          border: none;
          cursor: pointer;
          padding: 0;
          transition: all var(--transition-smooth);
        }

        .slider-dot.active {
          background: var(--color-gold);
          width: 18px;
          border-radius: 3px;
        }

        /* Caption Text Overlaid on Card Bottom */
        .slider-caption-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 3rem 2rem 2.5rem 2rem;
          background: linear-gradient(to top, rgba(13, 27, 42, 0.95) 0%, rgba(13, 27, 42, 0.4) 60%, transparent 100%);
          z-index: 5;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .slider-title {
          font-family: var(--font-serif);
          font-size: 1.85rem;
          font-weight: 500;
          color: var(--color-white);
          line-height: 1.25;
          margin: 0;
        }

        /* Right Column Typography */
        .details-article {
          margin-bottom: 2.5rem;
        }

        .overline-gold {
          display: inline-block;
          font-family: var(--font-sans);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--color-gold);
          margin-bottom: 0.75rem;
        }

        .main-headline {
          font-family: var(--font-sans);
          font-size: 1.85rem;
          font-weight: 700;
          color: var(--color-navy);
          line-height: 1.35;
          margin: 0 0 1rem 0;
          letter-spacing: -0.01em;
        }

        .sub-headline {
          font-family: var(--font-sans);
          font-size: 1.1rem;
          font-weight: 600;
          color: #475569;
          line-height: 1.5;
          margin: 0 0 1.5rem 0;
        }

        .lead-container {
          background: #fdfcfa;
          border-left: 3px solid var(--color-gold);
          padding: 1.25rem 1.5rem;
          margin-bottom: 2rem;
          border-radius: 0 4px 4px 0;
        }

        .lead-text {
          font-size: 0.95rem;
          line-height: 1.8;
          color: #334155;
          margin: 0;
        }

        /* Detail Blocks & Custom Bullets */
        .info-sections {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .info-block-title {
          font-family: var(--font-sans);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--color-navy);
          margin: 0 0 1rem 0;
          display: flex;
          align-items: center;
          border-bottom: 1px solid rgba(13, 27, 42, 0.06);
          padding-bottom: 0.5rem;
        }

        .title-icon {
          color: var(--color-gold);
          margin-right: 0.65rem;
        }

        .custom-bullet-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .custom-bullet-list li {
          font-size: 0.9rem;
          line-height: 1.75;
          color: #475569;
          position: relative;
          padding-left: 1.25rem;
        }

        .custom-bullet-list li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.6rem;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--color-gold);
        }

        /* Travel Details Widget Placement */
        .travel-details-widget {
          margin-top: 3.5rem;
          background: var(--color-white);
          border: 1px solid rgba(13, 27, 42, 0.05);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
          padding: 1.75rem;
          border-radius: 6px;
        }

        .widget-title {
          font-family: var(--font-serif);
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-navy);
          margin: 0 0 1.25rem 0;
          border-bottom: 1px solid rgba(13, 27, 42, 0.06);
          padding-bottom: 0.5rem;
        }

        .widget-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .widget-cell {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .cell-icon {
          color: var(--color-gold);
          flex-shrink: 0;
        }

        .cell-label {
          display: block;
          font-size: 0.62rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: #64748b;
        }

        .cell-val {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-text-dark);
          margin-top: 0.1rem;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .split-layout {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .slider-container {
            position: static;
          }

          .luxury-slider-card {
            aspect-ratio: 16 / 10;
          }
        }

        @media (max-width: 640px) {
          .widget-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
        }
      `}</style>
    </>
  );
}
