import { useState } from "react";

import {
  EnvelopeSimple,
  Megaphone,
  GlobeHemisphereWest,
  ArrowRight,
  ArrowSquareOut,
} from "@phosphor-icons/react";

import { Link } from "react-router-dom";

import "../styles/CommunityResources.css";
import ComNewsletterModal from "../modal/ComNewsletterModel";

const resources = [
  {
    id: 1,
    title: "Humanitude Singapore: Newsletter",
    description:
      "Stay updated with the latest Humanitude news, events, caregiving insights and educational resources.",
    icon: EnvelopeSimple,
    theme: "pink",
    buttonText: "View Newsletter",
    action: "modal",
  },
  {
    id: 2,
    title:
      "1777 Non-Emergency Ambulance Hotline to Cease from 1 January 2027",
    description:
      "From 1 January 2027, the 1777 Non-Emergency Ambulance Hotline will cease operations. Please refer to the official announcement for more information.",
    icon: Megaphone,
    theme: "blue",
    buttonText: "Read Announcement",
    link: "https://www.mha.gov.sg/media-room/newsroom/1777-non-emergency-ambulance-hotline-to-cease-from-1-january-2027/",
    external: true,
  },
  {
    id: 3,
    title: "Humanitude Singapore",
    description:
      "Discover more about Humanitude philosophy, upcoming programmes, training opportunities and resources.",
    icon: GlobeHemisphereWest,
    theme: "green",
    buttonText: "Visit Website",
    link: "https://www.humanitudesingapore.com/",
    external: true,
  },
];

export default function CommunityResources() {
  const [showNewsletterModal, setShowNewsletterModal] = useState(false);

  return (
    <>
      <section className="home-resources-section">
        <div className="home-resources-decoration decoration-top-right">
          ♡
        </div>

        <div className="home-resources-decoration decoration-bottom-left">
          ♡
        </div>

        <div className="home-resources-container">
          <div className="home-resources-grid">
            {resources.map((resource) => {
              const Icon = resource.icon;

              return (
                <article
                  key={resource.id}
                  className={`home-resource-card resource-${resource.theme}`}
                >
                  <div className="home-resource-icon-wrapper">
                    <Icon
                      className="home-resource-icon"
                      size={58}
                      weight="light"
                    />
                  </div>

                  <h3>{resource.title}</h3>

                  <p>{resource.description}</p>

                  <div className="home-resource-button-wrapper">
                    {resource.action === "modal" ? (
                      <button
                        type="button"
                        className="home-resource-button"
                        onClick={() => setShowNewsletterModal(true)}
                      >
                        <span>{resource.buttonText}</span>
                        <ArrowRight size={17} weight="bold" />
                      </button>
                    ) : resource.external ? (
                      <a
                        href={resource.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="home-resource-button"
                      >
                        <span>{resource.buttonText}</span>
                        <ArrowSquareOut size={17} weight="bold" />
                      </a>
                    ) : (
                      <Link
                        to={resource.link}
                        className="home-resource-button"
                      >
                        <span>{resource.buttonText}</span>
                        <ArrowRight size={17} weight="bold" />
                      </Link>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          {/* <div className="view-all-resources-wrapper">
            <Link
              to="/community-resources"
              className="view-all-resources-button"
            >
              View All Resources
              <ArrowRight size={18} weight="bold" />
            </Link>
          </div> */}
        </div>
      </section>

      <ComNewsletterModal
        show={showNewsletterModal}
        onClose={() => setShowNewsletterModal(false)}
      />
    </>
  );
}