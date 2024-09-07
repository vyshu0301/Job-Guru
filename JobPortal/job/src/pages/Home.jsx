import React, { useEffect, useState } from 'react';
import Homepage from '../component/Homepage';
import Jobs from './Jobs';
import Card1 from '../component/Card1';
import Sidebar from '../component/sidebar/Sidebar';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPage = 6;

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:5000/all-jobs")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setJobs(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Error fetching jobs:", err);
        setIsLoading(false);
      });
  }, []);

  console.log(jobs);

  // Handle input change
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // Filter jobs
  const filteredItems = jobs.filter((job) =>
    job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // Radio 
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Button
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Main function
  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;
    // Filtering input items
    if (query) {
      filteredJobs = filteredItems;
    }
    // Category filtering
    if (selected) {
      filteredJobs = filteredJobs.filter(({ jobLocation, maxPrice, experienceLevel, salaryType, employmentType, postingDate }) => (
        jobLocation.toLowerCase() === selected.toLowerCase() ||
        parseInt(maxPrice) === parseInt(selected) ||
        salaryType.toLowerCase() === selected.toLowerCase() ||
        employmentType.toLowerCase() === selected.toLowerCase()
      ));
      console.log(filteredJobs);
    }

    return filteredJobs.map((data, i) => <Card1 key={i} data={data} />);
  };

  const result = filteredData(jobs, selectedCategory, query);
  return (
    <div>
      <Homepage query={query} handleInputChange={handleInputChange} />
      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 py-12 ">
        <div className="bg-white p-4 rounded">
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>
        <div className="col-span-3 bg-white p-4 rounded-sm">
          {
            isLoading ? (<p>Loading...</p>) : result.length > 0 ? (<Jobs result={result} />) : <>
              <h3 className="text-lg font-bold mb-2">{result.length} Jobs</h3>
              <p>No data Found</p>
            </>
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
