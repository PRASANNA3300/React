import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const Test1 = () => {
  const [url, setUrl] = useState("");

  const repo1 = useQuery({
    queryKey: ["githubData", url],
    queryFn: apiCall,
  });

  const repo2 = useQuery({
    queryKey: [
      "githubData",
      "https://api.github.com/repos/PRASANNA3300/MaxiShop",
    ],
    queryFn: apiCall,
  });

  function apiCall({ queryKey }) {
    if (queryKey[1]) {
      return fetch(queryKey[1]).then((res) => res.json());
    }
    throw new Error("URL is missing");
  }

  if (repo2.isLoading) {
    return <h1>Loading...</h1>;
  }

  if (repo2.error) {
    return <h1>An error occurred</h1>;
  }

  // https://api.github.com/repos/PRASANNA3300/Lisbon-Chair-Shop

  return (
    <div>
      {repo1.data && (
        <div>
          <h1>Reppo name:{repo1.data.name}</h1>
          <h3>Reppo forks:{repo1.data.forks}</h3>
          <h3>Reppo stars:{repo1.data.stargazers_count}</h3>
          <h3>Reppo subscribers:{repo1.data.subscribers_count}</h3>
        </div>
      )}
      <div>
        <h1>Reppo name:{repo2.data.name}</h1>
        <h3>Reppo forks:{repo2.data.forks}</h3>
        <h3>Reppo stars:{repo2.data.stargazers_count}</h3>
        <h3>Reppo subscribers:{repo2.data.subscribers_count}</h3>
      </div>
      <button
        onClick={() =>
          setUrl(
            "https://api.github.com/repos/PRASANNA3300/Omnifood-Never-Cook-Again"
          )
        }
      >
        Update
      </button>
    </div>
  );
};

export default Test1;
