import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ExternalLinkIcon({ dir }) {
  return <FontAwesomeIcon icon={faExternalLinkAlt} transform={dir === "rtl" ? "flip-h" : ""} />;
}
