import Markdown from "react-markdown";
import { IoNotificationsOutline } from "react-icons/io5";

/* eslint-disable react/prop-types */
const NotificationCard = ({ item }) => {
  // Split the message body into lines
  const lines = item.messageBody.split("\n");

  // Extract the first two lines for the card
  const cardPreview = lines.slice(0, 1).join("\n");
  return (
    <div className="flex items-start space-x-3">
      {/* icon */}
      <div className="relative flex items-center justify-center flex-1 w-full p-3 text-black rounded-full bg-zinc-100">
        <IoNotificationsOutline className="text-2xl " />
        <div className="absolute bottom-0 right-0 rounded bg-violet-500 size-3"></div>
      </div>
      <div>
        <h3 className="font-bold">{item?.messageIssueTime.split("T")[0]}</h3>
        <Markdown className="text-sm text-zinc-500">
          {cardPreview}
          {/* {item.messageBody} */}
        </Markdown>
      </div>
    </div>
  );
};

export default NotificationCard;
