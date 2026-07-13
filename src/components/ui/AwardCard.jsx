import {
  Armchair,
  Building2,
  House,
  Landmark,
  Leaf,
  Lightbulb,
  Map,
  Trophy,
} from "lucide-react";

import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./AwardCard.css";

const getAwardIcon = (title = "") => {
  const normalizedTitle = title.toLowerCase();

  if (normalizedTitle.includes("residential")) return House;
  if (normalizedTitle.includes("sustainable")) return Leaf;
  if (normalizedTitle.includes("hospitality")) return Building2;
  if (normalizedTitle.includes("firm")) return Trophy;
  if (normalizedTitle.includes("interior")) return Armchair;
  if (normalizedTitle.includes("urban")) return Map;
  if (normalizedTitle.includes("commercial")) return Landmark;
  if (normalizedTitle.includes("innovation")) return Lightbulb;

  return Trophy;
};

function TwoToneIcon({ icon: Icon }) {
  return (
    <div className="award-card-icon" aria-hidden="true">
      <div className="award-card-icon-layer">
        {/* Orange base icon */}
        <Icon
          className="award-icon award-icon--orange"
          size={29}
          strokeWidth={1.8}
        />

        {/* Teal overlay */}
        <Icon
          className="award-icon award-icon--teal"
          size={29}
          strokeWidth={1.8}
        />
      </div>
    </div>
  );
}

export default function AwardCard({ award, index = 0 }) {
  const [ref, visible] = useScrollAnimation();
  const Icon = getAwardIcon(award.title);

  return (
    <article
      ref={ref}
      className={`award-card ${
        visible ? "award-card--visible" : ""
      }`}
      style={{
        transitionDelay: `${index * 0.08}s`,
      }}
    >
      <TwoToneIcon icon={Icon} />

      <div className="award-card-content">
        <h3 className="award-card-title">{award.title}</h3>

        <p className="award-card-org">
          {award.organization}
        </p>
      </div>

      <div className="award-card-footer">
        <span className="award-card-year">
          {award.year}
        </span>

        <span className="award-card-status">
          {award.status || "Winner"}
        </span>
      </div>
    </article>
  );
}