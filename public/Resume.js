import React, { useEffect, useState } from "react";
import axios from "axios";

const ResumePage = () => {
  const [resumeData, setResumeData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/resume/getAllResumes")
      .then((res) => setResumeData(res.data))
      .catch((err) => console.error("Error fetching resume data", err));
  }, []);

  const Section = ({ title, items }) => (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100 border-b pb-2">
        {title}
      </h2>
      <div className="relative border-l border-gray-300 dark:border-gray-600 ml-4">
        {items.map((item, idx) => (
          <div key={idx} className="mb-8 ml-6">
            <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 mt-2"></div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {item.date || item.year}
            </span>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {item.jobTitle || item.title}
            </h3>
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {item.address || item.place}
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              {item.resumeDescription || item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="p-6 md:p-12 lg:p-16 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white text-center">
        My Resume
      </h1>

      {resumeData.length > 0 ? (
        <>
          <Section title="Experience" items={resumeData} />
        </>
      ) : (
        <p className="text-center text-gray-500">Loading resume...</p>
      )}
    </div>
  );
};

export default ResumePage;
