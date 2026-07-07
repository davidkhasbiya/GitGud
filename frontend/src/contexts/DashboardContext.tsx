import {
    createContext,
    useContext,
    useState,
    type ReactNode,
} from "react";

interface DashboardContextType {
    collapsed: boolean;
    setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;

    mobileOpen: boolean;
    setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DashboardContext =
    createContext<DashboardContextType | null>(null);

export function DashboardProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [collapsed, setCollapsed] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <DashboardContext.Provider
            value={{
                collapsed,
                setCollapsed,
                mobileOpen,
                setMobileOpen,
            }}
        >
            {children}
        </DashboardContext.Provider>
    );
}

export function useDashboard() {
    const context = useContext(DashboardContext);

    if (!context)
        throw new Error("useDashboard must be used inside DashboardProvider");

    return context;
}