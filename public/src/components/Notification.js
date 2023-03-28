import { useState } from "react";

// css
import "../css/notification.css";

export default function Notification(props) {
  const [showNotification, setShowNotification] = useState(true);
  setTimeout(() => setShowNotification(false), 3000);
  const containerClass = props.notificationType === "error"
    ? "notification-container error-container padding-1rem notification-description"
    : "notification-container padding-1rem notification-description";
  return (
    showNotification && (
      <section className={containerClass}>
        <div className="notification-title">{props.notificationMessage}</div>
      </section>
    )
  );
}
