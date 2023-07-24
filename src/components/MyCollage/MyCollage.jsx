import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const MyCollage = () => {
  const myCollageData = useLoaderData();
  console.log(myCollageData);

  // const [singleCollage, setSingleCollage] = useState(null);
  // console.log("single collage data", singleCollage);
  // useEffect(() => {
  //   const fetchCollegeData = async () => {
  //     try {
  //       const response = await fetch("http://localhost:5000/allcollages"); 
  //       const data = await response.json();
  //       setSingleCollage(data);
  //     } catch (error) {
  //       console.error("Error fetching college data:", error);
  //     }
  //   };

  //   fetchCollegeData(); 
  //   return () => {
  //   };
  // }, []);

  // if (!singleCollage) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="container mx-auto my-5">
    <div >
      {myCollageData.map((college, index) => (
        <div key={index} className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-end px-4 pt-4">
          </div>
          <div className="flex flex-col items-center pb-10">
            <img
              className="w-40 h-42 mb-3 rounded-full shadow-lg"
              src={college.photoUrl}  
              alt={college.sname}
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Name: {college.sname}
            </h5>
            <span className="text-gray-500 dark:text-gray-400">
              <span className="font-bold">Subject: </span> {college.subject}
            </span>
            <span className="text-gray-500 dark:text-gray-400">
              <span className="font-bold">Email:</span>  {college.email}
            </span>
            <span className="text-gray-500 dark:text-gray-400">
              <span className="font-bold">Phone:</span>  {college.number}
            </span>
            <span className="text-gray-500 dark:text-gray-400">
              <span className="font-bold">Address:</span>  {college.address}
            </span>
            <span className="text-gray-500 dark:text-gray-400">
              <span className="font-bold">Date of Birth:</span>  {college.dob}
            </span>
          </div>

          {/* anotherlokjdolfjdsflopdlp;fdkijp */}

          <div className=" flex justify-center items-center">
        <div className="w-3/4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg flex justify-center"
              src={college.collageData[0].college_image}
              alt=""
            />
          </a>

        <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {college.collageData[0].college_name}
            </h5>

            <div className="divider"></div>

            <p className="flex justify-center font-bold text-xl underline">
              {" "}
              Admission Process
            </p>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 mt-3">
              {" "}
              <span className="font-bold">Admission Date: </span>
              {college.collageData[0].admission_dates}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {" "}
              <span className="font-bold">Admission Process: </span>
              {college.collageData[0].admission_process}
            </p>
            <div className="divider"></div>
            <p className="flex justify-center font-bold text-xl underline">
              {" "}
              Events Details
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {" "}
              <span className="font-bold">Event Details One: </span>
              <li>
                <span className="font-bold">Event Name: </span>
                {college.collageData[0].events?.[0]?.event_name}
              </li>
              <li>
                <span className="font-bold">Event Date: </span>
                {college.collageData[0].events?.[0]?.event_date}
              </li>
              <li>
                <span className="font-bold">Event Description: </span>
                {college.collageData[0].events?.[0].event_description}
              </li>
              <span className="font-bold ">Event Details Two: </span>
              <li>
                <span className="font-bold">Event Name: </span>
                {college.collageData[0].events?.[1].event_name}
              </li>
              <li>
                <span className="font-bold">Event Date: </span>
                {college.collageData[0].events?.[1].event_date}
              </li>
              <li>
                <span className="font-bold">Event Description: </span>
                {college.collageData[0].events?.[1].event_description}
              </li>
            </p>
            <div className="divider"></div>
            <p className="flex justify-center font-bold text-xl underline">
              {" "}
              Research Works
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {" "}
              <span className="font-bold">Research Work One: </span>
              <li>
                <span className="font-bold">Research Title: </span>
                {college.collageData[0].research_works?.[0].research_title}
              </li>
              <li>
                <span className="font-bold">Research Description: </span>
                {college.collageData[0].research_works?.[0].research_description}
              </li>
              <span className="font-bold ">Research Work Two: </span>
              <li>
                <span className="font-bold">Event Name: </span>
                {college.collageData[0].research_works?.[1].research_title}
              </li>
              <li>
                <span className="font-bold">Event Date: </span>
                {college.collageData[0].research_works?.[1].research_description}
              </li>


            </p>
            <div className="divider"></div>

            <p className="flex justify-center font-bold text-xl underline">
              {" "}
              Sports Categories
            </p>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {" "}
              <span className="font-bold">Sports Categories: </span>
              <li>{college.collageData[0].sports_categories?.[0]}</li>
              <li>{college.collageData[0].sports_categories?.[1]}</li>
              <li>{college.collageData[0].sports_categories?.[2]}</li>
            </p>

            <div className="divider"></div>

            <p className="flex justify-center font-bold text-xl underline">
              {" "}
              Research History
            </p>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {" "}
              <span className="font-bold">Research History : </span>
              {college.collageData[0].research_history}
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5">
              <button className="btn btn-success">
                <Link to="/admission">Back to Admission Page</Link>
              </button>{" "}
            </div>
          </div>  

        </div>
      </div>

        </div>
      ))}
    </div>


      
    </div>
  );
};

export default MyCollage;
