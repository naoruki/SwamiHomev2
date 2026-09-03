import {
  Medal,
  CalendarBlank,
  ArrowSquareOut,
} from "@phosphor-icons/react";

import "../styles/Awards.css";

export default function Awards() {
  return (
    <main className="awards-page">

      {/* =========================================
          PAGE INTRO
      ========================================= */}

      <section className="awards-intro">
        <div className="awards-intro-container">

          <span className="awards-intro-label">
            Celebrating Excellence
          </span>

          <h1>Awards & Recognitions</h1>

          <p>
            Honouring meaningful achievements and contributions
            in our journey of care and service.
          </p>

        </div>
      </section>


      {/* =========================================
          AWARDS SECTION
      ========================================= */}

      <section className="awards-section">

        <div className="awards-container">

          <div className="awards-section-heading">

            <span>Our Achievement</span>

            <h2>
              Recognising Our Commitment to Serve
            </h2>

            <p>
              Celebrating meaningful recognition of our service
              and contribution to the community.
            </p>

          </div>


          {/* =====================================
              AWARDS
          ====================================== */}

          <div className="awards-grid">

            <article className="award-card">

              {/* CERTIFICATE */}

              <div className="award-card-image">

                <img
                  src="/images/awards/Cert-covid.jpg"
                  alt="President's Certificate of Commendation COVID-19 awarded to Sunshine Welfare Action Mission"
                  className="award-certificate-image"
                />

              </div>


              {/* AWARD DETAILS */}

              <div className="award-card-content">

                <div className="award-recognition">

                  <Medal
                    size={18}
                    weight="fill"
                  />

                  <span>
                    National Recognition
                  </span>

                </div>


                <div className="award-date">

                  <CalendarBlank size={18} />

                  <span>
                    18 June 2023
                  </span>

                </div>


                <h3>
                  President&apos;s Certificate of
                  Commendation (COVID-19)
                </h3>


                <p>
                  For exceptional efforts which had a significant
                  impact in Singapore&apos;s fight against COVID-19.
                </p>


                <a
                  href="https://www.pmo.gov.sg/national-awards/covid-19/president-s-certificate-of-commendation-covid-19/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="award-official-link"
                >
                  View Official Award

                  <ArrowSquareOut
                    size={17}
                    weight="bold"
                  />
                </a>

              </div>

            </article>

          </div>

        </div>

      </section>

    </main>
  );
}