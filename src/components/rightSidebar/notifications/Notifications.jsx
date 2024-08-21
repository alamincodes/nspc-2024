/* eslint-disable react/prop-types */

import NotificationCard from "./NotificationCard";

const Notifications = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => {
        return (
          <div key={index} className="mb-5">
            <NotificationCard key={index} item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default Notifications;
