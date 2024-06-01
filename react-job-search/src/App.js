import React from "react";
import {
  ReactiveBase,
  DataSearch,
  ResultList,
} from "@appbaseio/reactivesearch";

const App = () => {
  return (
    <div className="min-h-screen bg-black-100">
      <ReactiveBase app="jobboard" url="http://localhost:9200">
        <div className="container mx-auto p-4">
          <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">
            Job Search
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <DataSearch
              componentId="jobTitleSearch"
              dataField="jobTitle"
              placeholder="Search for Job Titles"
              className="border border-gray-300 p-3 rounded shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
            <DataSearch
              componentId="companySearch"
              dataField="company"
              placeholder="Search for Companies"
              className="border border-gray-300 p-3 rounded shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
            <DataSearch
              componentId="locationSearch"
              dataField="location"
              placeholder="Search for Locations"
              className="border border-gray-300 p-3 rounded shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </div>
          <ResultList
            componentId="results"
            dataField="jobTitle"
            size={5}
            pagination
            react={{
              and: ["jobTitleSearch", "companySearch", "locationSearch"],
            }}
            render={({ data }) => {
              console.log("Search results:", data); // Debug log
              if (!data || data.length === 0) {
                return (
                  <div className="text-center text-gray-500">
                    No results found
                  </div>
                );
              }
              return (
                <div className="grid grid-cols-1 gap-6">
                  {data.map((item) => (
                    <div
                      key={item._id}
                      className="bg-white border p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                    >
                      <h2 className="text-2xl font-semibold text-blue-700">
                        {item._source.jobTitle}
                      </h2>
                      <p className="text-gray-800">
                        {item._source.company} - {item._source.location}
                      </p>
                      <p className="text-gray-600 mt-2">
                        {item._source.description}
                      </p>
                    </div>
                  ))}
                </div>
              );
            }}
          />
        </div>
      </ReactiveBase>
    </div>
  );
};

export default App;
