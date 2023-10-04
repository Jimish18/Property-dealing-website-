import { useState , useContext , createContext } from "react";

const filterContext = createContext();

const FilterContextProvider = ({children}) => {

    const [filterCity, setFilterCity] = useState("new york");

    return (
        <filterContext.Provider value={[filterCity , setFilterCity]}>
            {children}
        </filterContext.Provider>
    );
};

const useFilter = () => useContext(filterContext);

export {FilterContextProvider , useFilter};

