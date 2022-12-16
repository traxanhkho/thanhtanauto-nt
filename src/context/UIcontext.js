import { createContext, useState } from "react";

export const uicontext = createContext();

export default function UiProvider({ children }) {
  const [SlideOverOpen, setSlideOverOpen] = useState(false);

  const value = {
    slideOver : {
      open : SlideOverOpen  , 
      setOpen : setSlideOverOpen ,
    }
  }

  return (
    <uicontext.Provider value={value}>
      {children}
    </uicontext.Provider>
  );
}
