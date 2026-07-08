import { useEffect } from "react";

const FacebookFeed = () => {
  useEffect(() => {
    const scriptId = "elfsight-platform-script";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="facebook-feed-section">
      
        <div className="text-center mb-4">
          <h2>Latest Updates</h2>
          <p>Stay connected with our latest Facebook posts.</p>
        </div>

        <div
          className="elfsight-app-591aae84-fa2d-4054-91fa-98428d4392d8"
          data-elfsight-app-lazy
        ></div>
      
    </section>
  );
};

export default FacebookFeed;