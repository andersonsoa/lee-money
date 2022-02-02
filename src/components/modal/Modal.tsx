import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { Backdrop } from "./Backdrop";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
  const badSuspension = {
    hidden: {
      y: "-100vh",
      opacity: 0,
      transform: "scale(0) rotateX(-360deg)",
    },
    visible: {
      y: "-10vh",
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        damping: 35,
        stiffness: 500,
      },
    },
    exit: {
      y: "-100vh",
      opacity: 0,
    },
  };

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Escape") {
      onClose();
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <AnimatePresence initial={false} exitBeforeEnter={true}>
      {isOpen && (
        <Backdrop onClick={onClose}>
          <motion.div
            className="m-auto w-full max-w-lg rounded-lg px-4"
            onClick={(e) => e.stopPropagation()}
            variants={badSuspension}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {children}
          </motion.div>
        </Backdrop>
      )}
    </AnimatePresence>
  );
};
