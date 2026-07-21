import { useEffect, useState } from "react";

import {
  X,
  DownloadSimple,
  FilePdf,
  CalendarBlank,
  CaretRight,
  CaretLeft,
} from "@phosphor-icons/react";

import "../styles/ComNewsletterModal.css";

const newsletters = [
  {
    id: 1,
    title: "Humanitude Training Newsletter",
    description:
      "Latest training updates, upcoming courses and caregiving highlights.",
    thumbnail: "/images/newsletters/humanitude-july-2026.jpg",
    pdf: "/documents/HumanitudeCaregiverEDMGeneric2026.pdf",
  },
//   {
//     id: 2,
//     title: "Humanitude Training Newsletter – May 2026",
//     description:
//       "Course schedules, caregiver tips and registration information.",
//     date: "12 May 2026",
//     size: "2.4 MB",
//     thumbnail: "/images/newsletters/humanitude-may-2026.jpg",
//     pdf: "/documents/newsletters/humanitude-may-2026.pdf",
//   },
//   {
//     id: 3,
//     title: "Humanitude Training Newsletter – March 2026",
//     description:
//       "Training opportunities, events and useful caregiving resources.",
//     date: "18 March 2026",
//     size: "2.3 MB",
//     thumbnail: "/images/newsletters/humanitude-march-2026.jpg",
//     pdf: "/documents/newsletters/humanitude-march-2026.pdf",
//   },
//   {
//     id: 4,
//     title: "Humanitude Training Newsletter – January 2026",
//     description:
//       "A new year of learning, care and compassionate caregiving.",
//     date: "14 January 2026",
//     size: "2.1 MB",
//     thumbnail: "/images/newsletters/humanitude-january-2026.jpg",
//     pdf: "/documents/newsletters/humanitude-january-2026.pdf",
//   },
];

export default function ComNewsletterModal({ show, onClose }) {
  const [selectedNewsletter, setSelectedNewsletter] = useState(newsletters[0]);
  const [currentPage, setCurrentPage] = useState(1);

  const newslettersPerPage = 3;
  const totalPages = Math.ceil(newsletters.length / newslettersPerPage);

  const startIndex = (currentPage - 1) * newslettersPerPage;
  const visibleNewsletters = newsletters.slice(
    startIndex,
    startIndex + newslettersPerPage
  );

  useEffect(() => {
    if (!show) {
      return;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [show, onClose]);

  if (!show) {
    return null;
  }

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="newsletter-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="newsletter-modal-title"
      onClick={handleBackdropClick}
    >
      <div className="newsletter-modal">
        <button
          type="button"
          className="newsletter-modal-close"
          onClick={onClose}
          aria-label="Close newsletter modal"
        >
          <X size={26} />
        </button>

        <div className="newsletter-modal-layout">
          <div className="newsletter-library">
            <div className="newsletter-modal-heading">
              <div className="newsletter-heading-icon">
                <FilePdf size={32} weight="light" />
              </div>

              <div>
                <p>Humanitude Caregiver Training</p>
                <h2 id="newsletter-modal-title">Newsletters</h2>
              </div>
            </div>

            <p className="newsletter-modal-intro">
              Browse and read our latest Humanitude training newsletters.
            </p>

            <div className="newsletter-list-header">
              <h3>Latest Newsletters</h3>
              <span>{newsletters.length} items</span>
            </div>

            <div className="newsletter-list">
              {visibleNewsletters.map((newsletter) => {
                const isSelected =
                  selectedNewsletter.id === newsletter.id;

                return (
                  <button
                    type="button"
                    key={newsletter.id}
                    className={`newsletter-list-item ${
                      isSelected ? "active" : ""
                    }`}
                    onClick={() => setSelectedNewsletter(newsletter)}
                  >
 
                    <div className="newsletter-list-content full-width">
                      <h4>{newsletter.title}</h4>
                      <p>{newsletter.description}</p>

                      <div className="newsletter-meta">


                      </div>
                    </div>

                    <CaretRight
                      size={20}
                      className="newsletter-list-arrow"
                    />
                  </button>
                );
              })}
            </div>

            {totalPages > 1 && (
              <div className="newsletter-pagination">
                <button
                  type="button"
                  onClick={() =>
                    setCurrentPage((page) => Math.max(page - 1, 1))
                  }
                  disabled={currentPage === 1}
                  aria-label="Previous newsletter page"
                >
                  <CaretLeft size={18} />
                </button>

                {Array.from({ length: totalPages }, (_, index) => {
                  const pageNumber = index + 1;

                  return (
                    <button
                      type="button"
                      key={pageNumber}
                      className={
                        currentPage === pageNumber ? "active" : ""
                      }
                      onClick={() => setCurrentPage(pageNumber)}
                    >
                      {pageNumber}
                    </button>
                  );
                })}

                <button
                  type="button"
                  onClick={() =>
                    setCurrentPage((page) =>
                      Math.min(page + 1, totalPages)
                    )
                  }
                  disabled={currentPage === totalPages}
                  aria-label="Next newsletter page"
                >
                  <CaretRight size={18} />
                </button>
              </div>
            )}
          </div>

          <div className="newsletter-preview-section">
            <div className="newsletter-preview-toolbar">
              <div>
                <span>PDF Preview</span>
              </div>

              <a
                href={selectedNewsletter.pdf}
                download
                className="newsletter-download-icon"
                aria-label={`Download ${selectedNewsletter.title}`}
              >
                <DownloadSimple size={21} weight="bold" />
              </a>
            </div>

            <div className="newsletter-preview-frame">
              <iframe
                key={selectedNewsletter.id}
                src={`${selectedNewsletter.pdf}#toolbar=0&navpanes=0`}
                title={selectedNewsletter.title}
              />
            </div>

            <div className="newsletter-preview-actions">
              <a
                href={selectedNewsletter.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="newsletter-open-button"
              >
                Open Fullscreen
                <ArrowIcon />
              </a>

              <a
                href={selectedNewsletter.pdf}
                download
                className="newsletter-download-button"
              >
                <DownloadSimple size={18} weight="bold" />
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArrowIcon() {
  return <CaretRight size={18} weight="bold" />;
}