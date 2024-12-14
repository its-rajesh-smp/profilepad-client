// @ts-nocheck

import { useState, useRef, useEffect } from "react";
import html2pdf from "html2pdf.js";
import simpleTemplate from "../templates/simple.html"; // Adjust the path based on your project structure

function ResumePreview() {
  const [template, setTemplate] = useState(""); // State for dynamic HTML content
  const contentRef = useRef(null);

  useEffect(() => {
    // Fetch the template file dynamically
    fetch(simpleTemplate)
      .then((response) => response.text())
      .then((html) => {
        // Replace placeholders with actual data
        const filledTemplate = html
          .replaceAll("{{name}}", "John Doe")
          .replaceAll("{{email}}", "johndoe@example.com")
          .replaceAll("{{portfolio}}", "http://johndoe.com")
          .replaceAll("{{job_title}}", "Software Engineer")
          .replaceAll("{{company}}", "TechCorp")
          .replaceAll("{{start_year}}", "2020")
          .replaceAll(
            "{{job_description}}",
            "Developing web applications with React and Node.js",
          )
          .replaceAll("{{degree}}", "Bachelor of Science")
          .replaceAll("{{university}}", "ABC University")
          .replaceAll("{{education_years}}", "2016 - 2020");
        console.log(filledTemplate);
        setTemplate(filledTemplate); // Set filled HTML as template
      });
  }, []);

  const generatePDF = () => {
    const element = contentRef.current;

    const options = {
      margin: [0, 10, 10, 10],
      filename: "Resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().from(element).set(options).save();
  };

  return (
    <div>
      <div
        ref={contentRef}
        dangerouslySetInnerHTML={{ __html: template }} // Dynamically rendered HTML
      />
      <button onClick={generatePDF} style={{ marginTop: "20px" }}>
        Generate PDF
      </button>
    </div>
  );
}

export default ResumePreview;
