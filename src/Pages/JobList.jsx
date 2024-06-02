import React from "react";
import Filter from "../Components/Filter";
import { useSelector } from "react-redux";
import Loader from "../Components/Loader";
import Error from "../Components/Error";
import Card from "../Components/Card";

const JobList = ({retry}) => {
  const { jobs, error, isLoading } = useSelector((store) => store);

  return (
    <div className="list-page">
      <Filter />
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error message={error} retry={retry}/>
      ) : (
        <div className="cards-wrapper">
          {jobs.map((i) => (
            <Card key={i.id} job={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default JobList;
