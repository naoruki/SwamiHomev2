import { useEffect, useState } from "react";
import "../styles/FacebookUpdates.css";

const FacebookUpdates = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(
      `https://graph.facebook.com/v25.0/${import.meta.env.VITE_FB_PAGE_ID}/feed?fields=message,created_time,full_picture,permalink_url&limit=5&access_token=${import.meta.env.VITE_FB_PAGE_ACCESS_TOKEN}`
    )
      .then((res) => res.json())
      .then((data) => setPosts(data.data || []))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="facebook-section">
      <h1 className="facebook-heading">Latest Updates</h1>

      <div className="facebook-scroll">
        {posts.map((post) => (
          <a
            key={post.id}
            href={post.permalink_url}
            target="_blank"
            rel="noopener noreferrer"
            className="facebook-card"
          >
            {post.full_picture && (
              <img src={post.full_picture} alt="" />
            )}

            <div className="facebook-card-body">
              <small>
                {new Date(post.created_time).toLocaleDateString("en-SG")}
              </small>

              <p>
                {post.message
                  ? post.message.slice(0, 100) + "..."
                  : "View update on Facebook"}
              </p>

              <span>Read on Facebook →</span>
            </div>
          </a>
        ))}
      </div>

      <div className="text-center mt-4">
        <a
          href="https://www.facebook.com/profile.php?id=61552785959134"
          target="_blank"
          rel="noopener noreferrer"
          className="facebook-more"
        >
          View More on Facebook
        </a>
      </div>
    </section>
  );
};

export default FacebookUpdates;