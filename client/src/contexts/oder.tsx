import React, { createContext, useState, useContext, ReactNode } from "react";
import { Oder } from "src/types/Product";

interface OderContextType {
    oder: Oder | null;
    setOder: React.Dispatch<React.SetStateAction<Oder | null>>;
}

const OderContext = createContext<OderContextType | undefined>(undefined);

export const useOder = (): OderContextType => {
    const context = useContext(OderContext);
    if (!context) {
        throw new Error("useCart must be used within a OderProvider");
    }
    return context;
};

interface OderProviderProps {
    children: ReactNode;
}

export const OderProvider: React.FC<OderProviderProps> = ({ children }) => {
    const [oder, setOder] = useState<Oder | null>(null);

    return (
        <OderContext.Provider value={{ oder, setOder }}>
            {children}
        </OderContext.Provider>
    );
};
