"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface BookingCtx {
  isOpen:     boolean;
  topic:      string;
  openModal:  (topic?: string) => void;
  closeModal: () => void;
}

const BookingContext = createContext<BookingCtx>({
  isOpen: false, topic: "", openModal: () => {}, closeModal: () => {},
});

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [topic, setTopic]   = useState("");

  return (
    <BookingContext.Provider value={{
      isOpen,
      topic,
      openModal:  (t = "") => { setTopic(t); setIsOpen(true); },
      closeModal: ()       => setIsOpen(false),
    }}>
      {children}
    </BookingContext.Provider>
  );
}

export const useBooking = () => useContext(BookingContext);
