import React, { createContext, useState, useContext } from "react";

interface PasswordContextProps {
  length: number;
  setLength: (value: number) => void;
}

const PasswordContext = createContext<PasswordContextProps | undefined>(
  undefined
);

export const PasswordProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [length, setLength] = useState(12);

  return (
    <PasswordContext.Provider value={{ length, setLength }}>
      {children}
    </PasswordContext.Provider>
  );
};

export const usePasswordContext = (): PasswordContextProps => {
  const context = useContext(PasswordContext);
  if (!context)
    throw new Error("usePasswordContext deve ser usado em um PasswordProvider");
  return context;
};
