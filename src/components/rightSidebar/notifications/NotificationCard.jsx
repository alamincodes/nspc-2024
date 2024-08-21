import Markdown from "react-markdown";
import { IoNotificationsOutline } from "react-icons/io5";
import OutBadge from "@/components/ui/OutBadge";
import { useState } from "react";
import NotificationDetailsModal from "@/components/modals/NotificationDetailsModal";

/* eslint-disable react/prop-types */
const NotificationCard = ({ item }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState({});
  // Split the message body into lines
  const lines = item.messageBody.split("\n");

  // Extract the first two lines for the card
  const messageBody = lines.slice(0, 1).join("\n");
  return (
    <>
      <div
        onClick={() => {
          setSelectedNotification(item);
          setOpenModal(true);
        }}
        className="flex items-start p-2 space-x-3 border border-transparent rounded-lg cursor-pointer hover:bg-white group hover:transition-all hover:duration-300 bg-zinc-50 hover:border hover:border-dashed hover:border-orange-500"
      >
        {/* icon */}
        <div className="relative flex items-center justify-center flex-1 w-full p-3 text-black bg-white rounded-full group-hover:bg-zinc-100 hover:transition-all hover:duration-300">
          <IoNotificationsOutline className="text-2xl group-hover:text-orange-500" />
          <div className="absolute bottom-0 right-0 border-2 border-white rounded hover:transition-all hover:duration-300 bg-violet-500 group-hover:bg-orange-500 size-4"></div>
        </div>
        <div>
          {/* date */}
          <div className="flex items-center justify-between">
            <h3 className="font-bold group-hover:text-orange-500">
              {item?.messageIssueTime.split("T")[0]}
            </h3>
            {/* badge */}
            <div className="mr-3">
              <OutBadge text={item?.messageType} />
            </div>
          </div>
          {/* message body */}
          <Markdown className="text-sm text-zinc-500">{messageBody}</Markdown>
        </div>
      </div>
      {openModal && (
        <NotificationDetailsModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          data={selectedNotification}
        />
      )}
    </>
  );
};

export default NotificationCard;
