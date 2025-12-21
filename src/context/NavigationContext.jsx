import { createContext, useContext, useRef } from "react";
import { useLocation } from "react-router-dom";

const NavContext = createContext();

export function NavigationProvider({ children }) {
    const location = useLocation();
    const prevPath = useRef(location.pathname);

    const direction =
        prevPath.current === "/" && location.pathname === "/about"
            ? "up"
            : prevPath.current === "/about" && location.pathname === "/"
                ? "down"
                : "up";

    // update after render
    setTimeout(() => {
        prevPath.current = location.pathname;
    }, 0);

    return (
        <NavContext.Provider value={{ direction }}>
            {children}
        </NavContext.Provider>
    );
}

export function useNavDirection() {
    return useContext(NavContext);
}
