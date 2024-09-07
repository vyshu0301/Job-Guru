import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from 'react-select/creatable';

const CreateJob = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const options = [
    { value: "JavaScript", label: "JavaScript" },
    { value: "C++", label: "C++" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "React", label: "React" },
    { value: "MongoDB", label: "MongoDB" }
  ];

  const onSubmit = (data) => {
    data.skills = selectedOption ? selectedOption.map(option => option.value) : [];

    fetch("http://localhost:5000/post-job", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then((result) => {
      if (result.acknowledged === true) {
        alert("Job Posted Successfully");
        reset();
        setSelectedOption(null); // Resetting selectedOption state
      } else {
        alert("Failed to post job. Please try again later.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    });
  };

  return (
    <div className="max-w-screen-2x1 container mx-auto xl:px-24 px-4">
      <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="create-job-flex">
            <div className="lq:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Title</label>
              <input type="text" defaultValue="Web Developer" {...register("jobTitle")} className="create-job-input" />
              {errors.jobTitle && <p className="text-red-500">{errors.jobTitle.message}</p>}
            </div>
            <div className="lq:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Name</label>
              <input type="text" placeholder="Ex:Microsoft" {...register("companyName")} className="create-job-input" />
              {errors.companyName && <p className="text-red-500">{errors.companyName.message}</p>}
            </div>
          </div>
          <div className="create-job-flex">
            <div className="lq:w-1/2 w-full">
              <label className="block mb-2 text-lg">Minimum Salary</label>
              <input type="text" placeholder="$20k" {...register("minPrice")} className="create-job-input" />
              {errors.minPrice && <p className="text-red-500">{errors.minPrice.message}</p>}
            </div>
            <div className="lq:w-1/2 w-full">
              <label className="block mb-2 text-lg">Maximum Salary</label>
              <input type="text" placeholder="$120k" {...register("maxPrice")} className="create-job-input" />
              {errors.maxPrice && <p className="text-red-500">{errors.maxPrice.message}</p>}
            </div>
          </div>
          <div className="create-job-flex">
            <div className="lq:w-1/2 w-full">
              <label className="block mb-2 text-lg">Salary Type</label>
              <select {...register("salaryType")} className="create-job-input">
                <option value="">Choose your salary</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
              {errors.salaryType && <p className="text-red-500">{errors.salaryType.message}</p>}
            </div>
            <div className="lq:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Location</label>
              <input type="text" placeholder="Mumbai" {...register("jobLocation")} className="create-job-input" />
              {errors.jobLocation && <p className="text-red-500">{errors.jobLocation.message}</p>}
            </div>
          </div>
          <div className="create-job-flex">
            <div className="lq:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Posting Date</label>
              <input type="date" placeholder="2023-12-12" {...register("postingDate")} className="create-job-input" />
              {errors.postingDate && <p className="text-red-500">{errors.postingDate.message}</p>}
            </div>
            <div className="lq:w-1/2 w-full">
              <label className="block mb-2 text-lg">Experience Level</label>
              <select {...register("experienceLevel")} className="create-job-input">
                <option value="">Choose your experience</option>
                <option value="No Experience">No Experience</option>
                <option value="Internship">Internship</option>
                <option value="Work remotely">Work remotely</option>
              </select>
              {errors.experienceLevel && <p className="text-red-500">{errors.experienceLevel.message}</p>}
            </div>
          </div>
          <div>
            <label className="block mb-2 text-lg">Required Skill Set</label>
            <CreatableSelect 
              className="create-job-input py-4" 
              onChange={setSelectedOption}
              options={options}
              isMulti
              defaultValue={selectedOption} 
            />
          </div>
          <div className="create-job-flex">
            <div className="lq:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Logo</label>
              <input type="url" placeholder="Paste your company logo url" {...register("companyLogo")} className="create-job-input" />
              {errors.companyLogo && <p className="text-red-500">{errors.companyLogo.message}</p>}
            </div>
            <div className="lq:w-1/2 w-full">
              <label className="block mb-2 text-lg">Employment type</label>
              <select {...register("employmentType")} className="create-job-input">
                <option value="">Choose your employment</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Temporary">Temporary</option>
              </select>
              {errors.employmentType && <p className="text-red-500">{errors.employmentType.message}</p>}
            </div>
          </div>
          <div className="w-full">
            <label className="block mb-2 text-lg">Job Description</label>
            <textarea className="w-full p1-3 py-1.5 focus:outline-none" rows={6} placeholder="Job description" {...register("description")} />
            {errors.description && <p className="text-red-500">{errors.description.message}</p>}
          </div>
          <div>
            <label className="block mb-1 text-lg">Job Posted By</label>
            <input type="email" placeholder="your email" {...register("postedBy")} className="create-job-input" />
            {errors.postedBy && <p className="text-red-500">{errors.postedBy.message}</p>}
          </div>
          <input type="submit" className="block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer"/>
        </form>
      </div>
    </div>
  );
}

export default CreateJob;
