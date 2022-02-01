import { useState } from "react";

export const useDisclosure = (initialState: boolean = false) => {
  const [state, setState] = useState(initialState);

  const onClose = () => setState(false);
  const onOpen = () => setState(true);

  const onToggle = () => setState((prevState) => !prevState);

  return { state, onClose, onOpen, onToggle };
};
