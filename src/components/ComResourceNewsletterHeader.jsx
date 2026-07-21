import { Heart } from "@phosphor-icons/react";
import "../styles/CommunityResourcesHeader.css";

export default function CommunityResourcesHeader() {
  return (
    <section className="community-header">
      <div className="community-header-container">
        <h2>Community Resources</h2>

        <div className="community-divider">
          <span></span>
          <Heart size={20} weight="fill" />
          <span></span>
        </div>

        <p>
          Helpful resources, training opportunities and important
          announcements for caregivers, families and the community.
        </p>
      </div>

      <div className="floating-heart heart-left"><Heart size={60} weight="fill" /></div>
      <div className="floating-heart heart-right"><Heart size={60} weight="fill" /></div>
    </section>
  );
}