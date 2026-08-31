import { useEffect, useState } from "react";

import {
  CalendarBlank,
  CaretLeft,
  CaretRight,
  Images,
  PlayCircle,
  X,
} from "@phosphor-icons/react";

import "../styles/EventsHighlights.css";

/* =========================================
   IMAGES
========================================= */

import madhu0283 from "/images/event/madhu2026/EDW_0283.jpg";
import madhu0300 from "/images/event/madhu2026/EDW_0300.jpg";
import madhu0320 from "/images/event/madhu2026/EDW_0320.jpg";
import madhu0326 from "/images/event/madhu2026/EDW_0326.jpg";
import madhu0334 from "/images/event/madhu2026/EDW_0334.jpg";
import madhu0368 from "/images/event/madhu2026/EDW_0368.jpg";
import madhu0423 from "/images/event/madhu2026/EDW_0423.jpg";
import madhu0615 from "/images/event/madhu2026/EDW_0615.jpg";
import madhu0661 from "/images/event/madhu2026/EDW_0661.jpg";
import madhu0737 from "/images/event/madhu2026/EDW_0737.jpg";
import madhu0764 from "/images/event/madhu2026/EDW_0764.jpg";
import madhu0869 from "/images/event/madhu2026/EDW_0869.jpg";
import madhu0903 from "/images/event/madhu2026/EDW_0903.jpg";
import madhu0917 from "/images/event/madhu2026/EDW_0917.jpg";
import madhu0939 from "/images/event/madhu2026/EDW_0939.jpg";
import madhu0953 from "/images/event/madhu2026/EDW_0953.jpg";

import madhu20251 from "/images/event/madhu2025/1.jpeg";
import madhu20252 from "/images/event/madhu2025/2.jpeg";
import madhu20253 from "/images/event/madhu2025/3.jpeg";
import madhu20254 from "/images/event/madhu2025/4.jpeg";
import madhu20255 from "/images/event/madhu2025/5.jpeg";
import madhu20256 from "/images/event/madhu2025/6.jpeg";
import madhu20257 from "/images/event/madhu2025/7.jpeg";
import madhu20258 from "/images/event/madhu2025/8.jpeg";
import madhu20259 from "/images/event/madhu2025/9.jpeg";
import madhu202510 from "/images/event/madhu2025/10.jpeg";
import madhu202511 from "/images/event/madhu2025/11.jpeg";
import madhu202512 from "/images/event/madhu2025/12.jpeg";
import madhu202513 from "/images/event/madhu2025/13.jpeg";
import madhu202514 from "/images/event/madhu2025/14.jpeg";
import madhu202515 from "/images/event/madhu2025/15.jpeg";
import madhu202516 from "/images/event/madhu2025/16.jpeg";
import madhu202517 from "/images/event/madhu2025/17.jpeg";

import madhu20241 from "/images/event/madhu2024/1.jpg";
import madhu20242 from "/images/event/madhu2024/2.jpg";
import madhu20243 from "/images/event/madhu2024/3.jpg";
import madhu20244 from "/images/event/madhu2024/4.jpg";
import madhu20245 from "/images/event/madhu2024/5.jpg";
import madhu20246 from "/images/event/madhu2024/6.jpg";
import madhu20247 from "/images/event/madhu2024/7.jpg";
import madhu20248 from "/images/event/madhu2024/8.jpg";
import madhu20249 from "/images/event/madhu2024/9.jpg";
import madhu202410 from "/images/event/madhu2024/10.jpg";
import madhu202411 from "/images/event/madhu2024/11.jpg";
import madhu202412 from "/images/event/madhu2024/12.jpg";
import madhu202413 from "/images/event/madhu2024/13.jpg";
import madhu202414 from "/images/event/madhu2024/14.jpg";
import madhu202415 from "/images/event/madhu2024/15.jpg";
import madhu202416 from "/images/event/madhu2024/16.jpg";
import madhu202417 from "/images/event/madhu2024/17.jpg";

import madhu20231 from "/images/event/madhu2023/1.jpg";
import madhu20232 from "/images/event/madhu2023/2.jpg";
import madhu20233 from "/images/event/madhu2023/3.jpg";
import madhu20234 from "/images/event/madhu2023/4.jpg";
import madhu20235 from "/images/event/madhu2023/5.jpg";
import madhu20236 from "/images/event/madhu2023/6.jpg";
import madhu20237 from "/images/event/madhu2023/7.jpg";
import madhu20238 from "/images/event/madhu2023/8.jpg";
import madhu20239 from "/images/event/madhu2023/9.jpg";
import madhu202310 from "/images/event/madhu2023/10.jpg";
import madhu202311 from "/images/event/madhu2023/11.jpg";
import madhu202312 from "/images/event/madhu2023/12.jpg";
import madhu202313 from "/images/event/madhu2023/13.jpg";
/* =========================================
   CATEGORIES
========================================= */

const eventCategories = [
  "All Events",
  "Sadguru Sri Madhusudan Sai's Visits",
  "Festive Events",
];

/* =========================================
   EVENTS
========================================= */

const events = [
  {
    id: 1,

    title: "Sadguru Sri Madhusudan Sai's Visit to SWAMI Home on 12 March 2026",

    category: "Sadguru Sri Madhusudan Sai's Visits",

    date: "12 March 2026",

    description:
      "A memorable visit filled with blessings, joy and heartfelt moments with our residents.",

    cover: madhu0283,

    media: [
      {
        type: "image",
        src: madhu0283,
      },
      {
        type: "image",
        src: madhu0300,
      },
      {
        type: "image",
        src: madhu0320,
      },
      {
        type: "image",
        src: madhu0326,
      },
      {
        type: "image",
        src: madhu0334,
      },
      {
        type: "image",
        src: madhu0368,
      },
      {
        type: "image",
        src: madhu0423,
      },
      {
        type: "image",
        src: madhu0615,
      },
      {
        type: "image",
        src: madhu0661,
      },
      {
        type: "image",
        src: madhu0737,
      },
      {
        type: "image",
        src: madhu0764,
      },
      {
        type: "image",
        src: madhu0869,
      },
      {
        type: "image",
        src: madhu0903,
      },
      {
        type: "image",
        src: madhu0917,
      },
      {
        type: "image",
        src: madhu0939,
      },
      {
        type: "image",
        src: madhu0953,
      },

      {
        type: "youtube",
        videoId: "Gh9QHcMOwSc",
      },

      {
        type: "youtube",
        videoId: "m5utZSRfzoo",
      },
      {
        type: "youtube",
        videoId: "Sr2q3r5s2pg",
      },
    ],
  },

  {
    id: 2,

    title: "Sadguru Sri Madhusudan Sai's Visit to SWAMI Home in 2025",

    category: "Sadguru Sri Madhusudan Sai's Visits",

    date: "2025",

    description:
      "A cherished visit filled with meaningful moments, warm interactions and blessings shared with our residents and staff.",

    cover: madhu20251,

    media: [
      {
        type: "image",
        src: madhu20251,
      },
      {
        type: "image",
        src: madhu20252,
      },
      {
        type: "image",
        src: madhu20253,
      },
      {
        type: "image",
        src: madhu20254,
      },
      {
        type: "image",
        src: madhu20255,
      },
      {
        type: "image",
        src: madhu20256,
      },
      {
        type: "image",
        src: madhu20257,
      },
      {
        type: "image",
        src: madhu20258,
      },
      {
        type: "image",
        src: madhu20259,
      },
      {
        type: "image",
        src: madhu202510,
      },
      {
        type: "image",
        src: madhu202511,
      },
      {
        type: "image",
        src: madhu202512,
      },
      {
        type: "image",
        src: madhu202513,
      },
      {
        type: "image",
        src: madhu202514,
      },
      {
        type: "image",
        src: madhu202515,
      },
      {
        type: "image",
        src: madhu202516,
      },
      {
        type: "image",
        src: madhu202517,
      },
      {
        type: "youtube",
        videoId: "YWJp5v_AXS8",
      },

      {
        type: "youtube",
        videoId: "lmfcM_oxmfE",
      },
    ],
  },
  {
    id: 3,

    title: "Sadguru Sri Madhusudan Sai's Visit to SWAMI Home in 2024",

    category: "Sadguru Sri Madhusudan Sai's Visits",

    date: "2024",

    description:
      "A cherished visit filled with blessings, meaningful interactions and joyful moments shared with our residents and staff.",

    cover: madhu20241,

    media: [
      {
        type: "image",
        src: madhu20241,
      },
      {
        type: "image",
        src: madhu20242,
      },
      {
        type: "image",
        src: madhu20243,
      },
      {
        type: "image",
        src: madhu20244,
      },
      {
        type: "image",
        src: madhu20245,
      },
      {
        type: "image",
        src: madhu20246,
      },
      {
        type: "image",
        src: madhu20247,
      },
      {
        type: "image",
        src: madhu20248,
      },
      {
        type: "image",
        src: madhu20249,
      },
      {
        type: "image",
        src: madhu202410,
      },
      {
        type: "image",
        src: madhu202411,
      },
      {
        type: "image",
        src: madhu202412,
      },
      {
        type: "image",
        src: madhu202413,
      },
      {
        type: "image",
        src: madhu202414,
      },
      {
        type: "image",
        src: madhu202415,
      },
      {
        type: "image",
        src: madhu202416,
      },
      {
        type: "image",
        src: madhu202417,
      },
    ],
  },
  {
    id: 4,

    title:
      "Celebrating with Our Residents & Opening of the Garden of Joy (Ananda Vanam)",
      
    category: "Sadguru Sri Madhusudan Sai's Visits",

    date: "22 September 2023",

    description:
      "A joyful celebration with our residents, made even more special with the opening of the Garden of Joy (Ananda Vanam) — a beautiful space created for moments of peace, happiness and togetherness.",

    cover: madhu20231,

    media: [
      {
        type: "image",
        src: madhu20231,
      },
      {
        type: "image",
        src: madhu20232,
      },
      {
        type: "image",
        src: madhu20233,
      },
      {
        type: "image",
        src: madhu20234,
      },
      {
        type: "image",
        src: madhu20235,
      },
      {
        type: "image",
        src: madhu20236,
      },
      {
        type: "image",
        src: madhu20237,
      },
      {
        type: "image",
        src: madhu20238,
      },
      {
        type: "image",
        src: madhu20239,
      },
      {
        type: "image",
        src: madhu202310,
      },
      {
        type: "image",
        src: madhu202311,
      },
      {
        type: "image",
        src: madhu202312,
      },
      {
        type: "image",
        src: madhu202313,
      },
    ],
  },
];

export default function EventsHighlights() {
  const [selectedCategory, setSelectedCategory] = useState("All Events");

  const [selectedEvent, setSelectedEvent] = useState(null);

  const [currentSlide, setCurrentSlide] = useState(0);

  const filteredEvents =
    selectedCategory === "All Events"
      ? events
      : events.filter((event) => event.category === selectedCategory);

  function getImageCount(event) {
    return event.media.filter((item) => item.type === "image").length;
  }

  function getVideoCount(event) {
    return event.media.filter((item) => item.type === "youtube").length;
  }

  function openEvent(event) {
    setSelectedEvent(event);
    setCurrentSlide(0);
  }

  function closeEvent() {
    setSelectedEvent(null);
    setCurrentSlide(0);
  }

  function nextSlide() {
    if (!selectedEvent) return;

    setCurrentSlide((current) =>
      current === selectedEvent.media.length - 1 ? 0 : current + 1,
    );
  }

  function previousSlide() {
    if (!selectedEvent) return;

    setCurrentSlide((current) =>
      current === 0 ? selectedEvent.media.length - 1 : current - 1,
    );
  }

  useEffect(() => {
    function handleKeyboard(event) {
      if (!selectedEvent) return;

      if (event.key === "Escape") {
        closeEvent();
      }

      if (event.key === "ArrowRight") {
        nextSlide();
      }

      if (event.key === "ArrowLeft") {
        previousSlide();
      }
    }

    window.addEventListener("keydown", handleKeyboard);

    return () => {
      window.removeEventListener("keydown", handleKeyboard);
    };
  }, [selectedEvent]);

  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedEvent]);

  const currentMedia = selectedEvent ? selectedEvent.media[currentSlide] : null;

  return (
    <main className="events-page">
      {/* =========================
          BANNER
      ========================== */}

      <section className="events-banner">
        <div className="events-banner-content">
          <h1>Events & Highlights</h1>

          <p>
            Cherishing moments of love, care and togetherness
            <br />
            at SWAMI Home.
          </p>
        </div>
      </section>

      {/* =========================
          EVENTS
      ========================== */}

      <section className="events-section">
        <div className="events-container">
          {/* CATEGORY MENU */}

          <div className="event-categories">
            {eventCategories.map((category) => (
              <button
                key={category}
                type="button"
                className={`event-category-btn ${
                  selectedCategory === category ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* HEADING */}

          <div className="events-heading">
            <span>
              {selectedCategory === "All Events"
                ? "Our Moments"
                : selectedCategory}
            </span>

            <h2>
              {selectedCategory === "All Events"
                ? "Events & Highlights"
                : selectedCategory}
            </h2>
          </div>

          {/* EVENT CARDS */}

          {filteredEvents.length > 0 ? (
            <div className="events-grid">
              {filteredEvents.map((event) => {
                const imageCount = getImageCount(event);

                const videoCount = getVideoCount(event);

                return (
                  <button
                    key={event.id}
                    type="button"
                    className="event-card"
                    onClick={() => openEvent(event)}
                  >
                    <div className="event-image">
                      <img src={event.cover} alt={event.title} />

                      <div className="event-photo-count">
                        {imageCount > 0 && (
                          <>
                            <Images size={17} weight="fill" />

                            <span>
                              {imageCount}{" "}
                              {imageCount === 1 ? "Photo" : "Photos"}
                            </span>
                          </>
                        )}

                        {videoCount > 0 && (
                          <>
                            <span className="media-divider">•</span>

                            <PlayCircle size={17} weight="fill" />

                            <span>
                              {videoCount}{" "}
                              {videoCount === 1 ? "Video" : "Videos"}
                            </span>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="event-content">
                      <h3>{event.title}</h3>

                      <div className="event-date">
                        <CalendarBlank size={18} />

                        <span>{event.date}</span>
                      </div>

                      <p className="event-description">{event.description}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="no-events">
              <h3>No events available yet</h3>

              <p>More event highlights will be added soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* =========================
          MODAL
      ========================== */}

      {selectedEvent && currentMedia && (
        <div
          className="event-modal-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeEvent();
            }
          }}
        >
          <div className="event-modal">
            {/* CLOSE */}

            <button
              type="button"
              className="event-modal-close"
              onClick={closeEvent}
              aria-label="Close gallery"
            >
              <X size={24} />
            </button>

            {/* HEADER */}

            <div className="event-modal-header">
              <h2>{selectedEvent.title}</h2>

              <div className="event-modal-date">
                <CalendarBlank size={17} />

                <span>{selectedEvent.date}</span>
              </div>

              <p className="event-modal-description">
                {selectedEvent.description}
              </p>
            </div>

            {/* =========================
                SLIDER
            ========================== */}

            <div
              className={`event-slider ${
                currentMedia.type === "youtube" ? "event-slider-video" : ""
              }`}
            >
              {/* PREVIOUS */}

              {selectedEvent.media.length > 1 && (
                <button
                  type="button"
                  className="slider-arrow slider-arrow-left"
                  onClick={previousSlide}
                  aria-label="Previous slide"
                >
                  <CaretLeft size={30} weight="bold" />
                </button>
              )}

              {/* IMAGE */}

              {currentMedia.type === "image" && (
                <div className="slider-image">
                  <img
                    src={currentMedia.src}
                    alt={`${selectedEvent.title} ${currentSlide + 1}`}
                  />
                </div>
              )}

              {/* YOUTUBE */}

              {currentMedia.type === "youtube" && (
                <div className="youtube-wrapper">
                  <iframe
                    key={currentMedia.videoId}
                    src={`https://www.youtube.com/embed/${currentMedia.videoId}?rel=0`}
                    title={`${selectedEvent.title} video ${currentSlide + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              )}

              {/* NEXT */}

              {selectedEvent.media.length > 1 && (
                <button
                  type="button"
                  className="slider-arrow slider-arrow-right"
                  onClick={nextSlide}
                  aria-label="Next slide"
                >
                  <CaretRight size={30} weight="bold" />
                </button>
              )}
            </div>

            {/* COUNTER */}

            <div className="slider-counter">
              {currentSlide + 1}

              <span>/</span>

              {selectedEvent.media.length}
            </div>

            {/* =========================
                THUMBNAILS
            ========================== */}

            <div className="event-thumbnails">
              {selectedEvent.media.map((item, index) => (
                <button
                  key={`${item.type}-${index}`}
                  type="button"
                  className={`event-thumbnail ${
                    currentSlide === index ? "event-thumbnail-active" : ""
                  }`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  {/* IMAGE THUMBNAIL */}

                  {item.type === "image" && (
                    <img src={item.src} alt={`Slide ${index + 1}`} />
                  )}

                  {/* YOUTUBE THUMBNAIL */}

                  {item.type === "youtube" && (
                    <div className="video-thumbnail">
                      <img
                        src={`https://img.youtube.com/vi/${item.videoId}/mqdefault.jpg`}
                        alt={`Video ${index + 1}`}
                      />

                      <div className="video-thumbnail-play">
                        <PlayCircle size={30} weight="fill" />
                      </div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
