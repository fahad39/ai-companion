"use client";
import { Companion, Message } from "@prisma/client";
import React from "react";

interface ChatClientProps {
  companion: Companion & {
    messages: Message[];
    _count: {
      messages: number;
    };
  };
}

const ChatClient = ({ companion }: ChatClientProps) => {
  return <div className="flex flex-col h-full p-4 space-y-2">ChatClient</div>;
};

export default ChatClient;
