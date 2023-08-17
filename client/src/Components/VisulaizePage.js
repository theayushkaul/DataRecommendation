import React, { useState, useContext, useRef } from "react";
import { read, utils } from "xlsx";
import { VictoryChart, VictoryLine, VictoryAxis } from "victory";
import { Context } from "../Context/context";
import ball1 from "../Assets/ball1.webp";
import ball2 from "../Assets/ball2.jpeg";
import "./VisualizePage.css";

const VisualizePage = () => {

    
  const { user } = useContext(Context);
  const [data, setData] = useState([]);
  const [xColumn, setXColumn] = useState("");
  const [yColumn, setYColumn] = useState("");
  const PF = "http://localhost:5001/dataset/";

  const ref = useRef(null);

  const handleScrollClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleVisualize = async () => {
    const fileUrl = PF + user.dataSet;

    try {
      const response = await fetch(fileUrl);

      if (!response.ok) {
        console.error("Fetch error - status:", response.status);
        console.error("Response text:", await response.text());
        return;
      }

      const blob = await response.blob();

      const reader = new FileReader();
      reader.onload = (e) => {
        const binaryData = e.target.result;
        const workbook = read(binaryData, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const parsedData = utils.sheet_to_json(sheet, { header: 1 });
        setData(parsedData);
      };

      reader.readAsBinaryString(blob);
    } catch (error) {
      console.error("Error fetching or reading the file:", error);
    }
  };

  const handleGenerateGraph = () => {
    if (xColumn && yColumn) {
      const chartData = data.map((row) => ({
        x: row[xColumn],
        y: row[yColumn],
      }));

      return (
        <div className="w-[100vw] flex justify-center items-center">
          <div className="graph-container w-[65vw] mr-20">
            <VictoryChart
              width={600}
              height={400}
              padding={{ top: 50, bottom: 50, left: 70, right: 20 }}
            >
              <VictoryLine
                data={chartData}
                style={{
                  data: { stroke: "#006400" },
                }}
              />
              <VictoryAxis
                tickFormat={(tick) => `${tick}`}
                style={{
                  axis: { stroke: "#333" },
                  tickLabels: {
                    fontSize: 12,
                    padding: 5,
                    fill: "#333",
                    fontWeight: (tick) => (tick === 0 ? "bolder" : "normal"),
                  },
                }}
              />
              <VictoryAxis
                dependentAxis
                tickFormat={(tick) => `${tick}`}
                style={{
                  axis: { stroke: "#333" },
                  tickLabels: { fontSize: 12, padding: 5, fill: "#333" },
                }}
              />
            </VictoryChart>
          </div>
        </div>
      );
    }
    return null;
  };

  const handleXColumnChange = (event) => {
    setXColumn(event.target.value);
  };

  const handleYColumnChange = (event) => {
    setYColumn(event.target.value);
  };

  return (
    <div className="bg-[#E0ECC4] overflow-hidden">
      <div className=" p-[8%] pl-[15%] h-[90vh]">
        <div className="flex flex-col ">
          <div>
            <div className="flex flex-row">
              <img
                src={ball2}
                className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-[75px] bg-none  "
                alt=""
              />
              <img
                src={ball1}
                className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-[75px] bg-none ml-[-50px] "
                alt=""
              />
            </div>
            <div className="font-serif mt-8  w-[50vw] text-[30px] md:text-[40px] lg:text-[60px]">
              UNLEASH YOUR DATA'S INNER BEAUTY
            </div>
          </div>
          <button
            className="pl-[-88%] w-[120px] md:w-[200px] rounded-[10px] bg-black text-white mt-10 md:text-[20px] p-3 font-semibold"
            onClick={() => {
              handleScrollClick();
              handleVisualize();
            }}
          >
            {" "}
            Visualize Now
          </button>
        </div>
      </div>
      <div ref={ref}></div>
      <div className="h-[100vh] mt-10">
        <div className="flex justify-center items-center">
          <div className="mx-16">
            <label className="text-2xl font-bold mr-2">Y Axis :</label>
            <select
              className="h-13 p-3 bg-[#00000042] font-semibold border-r-8 border-[#0000] rounded-2xl"
              value={yColumn}
              onChange={handleYColumnChange}
            >
              {data.length > 0 &&
                data[0].map((column, index) => (
                  <option key={index} value={index}>
                    {column}
                  </option>
                ))}
            </select>
          </div>
          <div className="mx-3">
            <label className="text-2xl font-bold mr-2">X Axis :</label>
            <select
              className="h-13 p-3 bg-[#00000042] font-semibold border-r-8 border-[#0000] rounded-2xl"
              value={xColumn}
              onChange={handleXColumnChange}
            >
              {data.length > 0 &&
                data[0].map((column, index) => (
                  <option key={index} value={index}>
                    {column}
                  </option>
                ))}
            </select>
          </div>
        </div>
        {(xColumn && yColumn) ? (
          handleGenerateGraph()
        ) : (
          <div className="elsie w-full h-max my-44 text-7xl flex justify-center items-center">
            <p className="bg-[#9cac73] p-8 rounded-3xl">
              {" "}
              Waiting for you to set Axis...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VisualizePage;
