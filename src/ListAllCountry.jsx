import React from "react";
import { useQuery } from "react-query";
import ShowAllCountry from "./ShowAllCountry";

const ListAllCountry = () => {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("https://restcountries.com/v3.1/all").then((res) => res.json())
  );

  if (isLoading) {
    return <h1>Loadinggg....</h1>;
  }

  if (error) {
    return <h1>Error</h1>;
  }

  return <ShowAllCountry {...data} />;
};

export default ListAllCountry;
