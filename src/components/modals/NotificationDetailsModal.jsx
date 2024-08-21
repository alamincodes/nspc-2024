/* eslint-disable react/prop-types */
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "../ui/scroll-area";
import Markdown from "react-markdown";
import OutBadge from "../ui/OutBadge";

const NotificationDetailsModal = ({ openModal, setOpenModal, data }) => {
  return (
    <Dialog open={openModal} onOpenChange={() => setOpenModal(false)}>
      <DialogContent className="border-2 border-orange-500 border-dashed">
        <DialogHeader className="mt-3">
          <DialogTitle className="flex items-center justify-between font-bold">
            <h3> {data?.messageIssueTime.split("T")[0]}</h3>
            <OutBadge text={data?.messageType} />
          </DialogTitle>
          <ScrollArea className="max-h-[50vh]">
            <DialogDescription>
              <Markdown>{data.messageBody}</Markdown>
            </DialogDescription>
          </ScrollArea>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default NotificationDetailsModal;
