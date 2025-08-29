
// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const ResumePage = () => {
//   const [file, setFile] = useState(null);
//   const [uploaded, setUploaded] = useState(false);
//   const [uploadedFileName, setUploadedFileName] = useState("");

//   // Handle file selection
//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];

//     if (selectedFile) {
//       const fileName = selectedFile.name.toLowerCase();

//       // ✅ Check file type and name contains 'resume'
//       if (selectedFile.type !== "application/pdf" || !fileName.includes("resume")) {
//         alert("Only PDF files with 'resume' in the name are allowed!");
//         e.target.value = ""; // reset input
//         setFile(null);
//         return;
//       }

//       setFile(selectedFile);
//     }
//   };

//   // Upload file to backend
//   const handleUpload = async () => {
//     if (!file) {
//       alert("Please select a valid resume PDF file before uploading.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const response = await fetch("http://localhost:8080/api/resume/upload", {
//         method: "POST",
//         body: formData,
//       });

//       if (response.ok) {
//         setUploaded(true);
//         setUploadedFileName(file.name); // save uploaded file name
//         alert("✅ Resume uploaded successfully!");
//       } else {
//         alert("❌ Upload failed. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error uploading file:", error);
//       alert("⚠️ Something went wrong!");
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
//       <motion.div
//         className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-lg"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//       >
//         <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
//           My Resume
//         </h1>

//         {/* Upload Section */}
//         <div className="flex flex-col items-center">
//           <input
//             type="file"
//             accept="application/pdf"
//             onChange={handleFileChange}
//             className="mb-4"
//           />
//           <button
//             onClick={handleUpload}
//             className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//           >
//             📤 Upload PDF
//           </button>
//         </div>

//         {/* Preview & Download Section */}
//         {uploaded && uploadedFileName && (
//           <div className="mt-6">
//             <p className="text-green-600 font-semibold mb-2 text-center">
//               ✅ Resume uploaded successfully!
//             </p>

//             {/* Preview PDF */}
//             <iframe
//               src={`http://localhost:8080/api/resume/download?fileName=${uploadedFileName}`}
//               title="Resume Preview"
//               width="100%"
//               height="500px"
//               className="border rounded-lg"
//             />

//             {/* Download Button */}
//             <div className="mt-4 text-center">
//               <a
//                 href={`http://localhost:8080/api/resume/download?fileName=${uploadedFileName}`}
//                 download={uploadedFileName}
//                 className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
//               >
//                 📄 Download Resume
//               </a>
//             </div>
//           </div>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default ResumePage;



import React, { useState } from "react";
import { motion } from "framer-motion";

const ResumePage = () => {
  const [file, setFile] = useState(null);
  const [uploaded, setUploaded] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState("");

  // Handle file selection
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const fileName = selectedFile.name.toLowerCase();

      // ✅ Allow only PDF with "resume" in the name
      if (selectedFile.type !== "application/pdf" || !fileName.includes("resume")) {
        alert("Only PDF files with 'resume' in the name are allowed!");
        e.target.value = ""; // reset input
        setFile(null);
        return;
      }

      setFile(selectedFile);
    }
  };

  // Upload file to backend
  const handleUpload = async () => {
    if (!file) {
      alert("Please select a valid resume PDF file before uploading.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:8080/api/resume/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setUploaded(true);
        setUploadedFileName(data.fileName); // dynamic filename from backend
        alert("✅ Resume uploaded successfully!");
      } else {
        alert("❌ Upload failed. Please try again.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("⚠️ Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <motion.div
        className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          My Resume
        </h1>

        {/* Upload Section */}
        <div className="flex flex-col items-center">
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="mb-4"
          />
          <button
            onClick={handleUpload}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            📤 Upload PDF
          </button>
        </div>

        {/* Preview & Download Section */}
        {uploaded && uploadedFileName && (
          <div className="mt-6">
            <p className="text-green-600 font-semibold mb-2 text-center">
              ✅ Resume uploaded successfully!
            </p>

            {/* Preview PDF */}
            <iframe
              src={`http://localhost:8080/api/resume/download?fileName=${uploadedFileName}`}
              title="Resume Preview"
              width="100%"
              height="500px"
              className="border rounded-lg"
            />

            {/* Download Button */}
            <div className="mt-4 text-center">
              <a
                href={`http://localhost:8080/api/resume/download?fileName=${uploadedFileName}`}
                download={uploadedFileName}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                📄 Download Resume
              </a>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ResumePage;
