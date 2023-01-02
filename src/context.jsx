import React, { useContext, useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

// const API = "https://thapareactapi.up.railway.app";

const intialState = {
  name: "",
  image: "",
  services: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Aqsa Faisal",
        image: "./images/hero.svg",
      },
    });
  };

  const udpateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "Aqsa Faisal",
        image: "./images/about1.svg",
      },
    });
  };
  const updateServicesPage = () => {
    return dispatch({
      type: "SERVICES_UPDATE",
      payload: {
        name: "Aqsa Faisal",
        image: "./images/images.jpeg",
      },
    });
  };

  //  to get the api data
  // const getServices = async (url) => {
  //   try {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     dispatch({ type: "GET_SERVICES", payload: data });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // to call the api
  // useEffect(() => {
  //   getServices(API);
  // }, []);

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, udpateAboutPage,updateServicesPage }}>
      {children}
    </AppContext.Provider>
  );
};

// gloabal custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };