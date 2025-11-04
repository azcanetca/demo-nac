"use client"
import { useRef, useState } from "react";

const useCopyLinkTitle = () => {
  const link = useRef();
  const [copiedLink, setCopiedLink] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const CopyLinkTitle = () => {
    const link = window?.location?.href;
    setCopiedLink(link);
    setShowNotification(true);
    navigator?.clipboard?.writeText(link);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };
  return {
    CopyLinkTitle,
    link,
    copiedLink,
    showNotification,
  };
};

export default useCopyLinkTitle;
