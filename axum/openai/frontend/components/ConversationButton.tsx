"use client";

import { GPTMessage } from "@/app/app/page";
import { SetStateAction } from "react";

interface Props {
  setMessages: React.Dispatch<SetStateAction<GPTMessage[]>>;
  setConversationId: React.Dispatch<SetStateAction<number>>;
  id: number;
  active: boolean;
}

export const ConversationButton = ({
  setMessages,
  setConversationId,
  id,
  active,
}: Props) => {
  async function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    const res = await fetch(`/api/chat/conversations/${id}`);
    const data = await res.json();
    setMessages(data.messages);
    setConversationId(id);
  }

  const border = active ? "outline-white/25" : "";
  return (
    <button
      className={`bg-slate-300/50 ${border} px-4 py-1 w-full text-left rounded-md`}
      onClick={(e) => handleClick(e)}
    >
      Conversation {id}
    </button>
  );
};
