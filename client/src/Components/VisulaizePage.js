import React, { useState, useContext } from 'react';
import { read, utils } from 'xlsx';
import { VictoryChart, VictoryLine, VictoryAxis } from 'victory';
import { Context } from '../Context/context';
import ball1 from '../Assets/ball1.webp'
import ball2 from '../Assets/ball2.jpeg'
const VisualizePage = () => {
    const { user } = useContext(Context);
    const [data, setData] = useState([]);
    const [xColumn, setXColumn] = useState('');
    const [yColumn, setYColumn] = useState('');
    const PF = 'http://localhost:5000/dataset/';

    const handleVisualize = async () => {
        const fileUrl = PF + user.dataSet; // Assuming user.dataSet is the file string

        try {
            const response = await fetch(fileUrl);

            if (!response.ok) {
                console.error('Fetch error - status:', response.status);
                console.error('Response text:', await response.text());
                return;
            }

            const blob = await response.blob();

            const reader = new FileReader();
            reader.onload = (e) => {
                const binaryData = e.target.result;
                const workbook = read(binaryData, { type: 'binary' });
                const sheetName = workbook.SheetNames[0];
                const sheet = workbook.Sheets[sheetName];
                const parsedData = utils.sheet_to_json(sheet, { header: 1 });
                setData(parsedData);
            };

            reader.readAsBinaryString(blob);
        } catch (error) {
            console.error('Error fetching or reading the file:', error);
        }
    };

    const handleGenerateGraph = () => {
        if (xColumn && yColumn) {
            const chartData = data.map((row) => ({
                x: row[xColumn],
                y: row[yColumn],
            }));

            return (
                <VictoryChart>
                    <VictoryLine data={chartData} x="x" y="y" />
                    <VictoryAxis label={xColumn} />
                    <VictoryAxis dependentAxis label={yColumn} />
                </VictoryChart>
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
        <div className='bg-[#E0ECC4]'>
            <div className=" h-auto p-[8%] pl-[15%]">
                <div className="flex flex-col ">
                    <div>
                        <div className="flex flex-row">
                            <img src={ball2} className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-[75px] bg-none  " alt="" />
                            <img src={ball1} className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-[75px] bg-none ml-[-50px] " alt="" />
                        </div>
                        <div className="font-serif mt-8  w-[50vw] text-[30px] md:text-[40px] lg:text-[60px]">UNLEASE YOUR DATA'S INNER BEAUTY</div>
                    </div>
                    <button className="pl-[-88%] w-[120px] md:w-[200px] h-10 rounded-[10px] bg-black text-white mt-8 md:text-[20px]" onClick={handleVisualize}> Visualize Now</button>
                </div>
            </div>
            <div>
                <label>X Column:</label>
                <select value={xColumn} onChange={handleXColumnChange}>
                    {data.length > 0 &&
                        data[0].map((column, index) => (
                            <option key={index} value={index}>
                                {column}
                            </option>
                        ))}
                </select>
            </div>
            <div>
                <label>Y Column:</label>
                <select value={yColumn} onChange={handleYColumnChange}>
                    {data.length > 0 &&
                        data[0].map((column, index) => (
                            <option key={index} value={index}>
                                {column}
                            </option>
                        ))}
                </select>
            </div>
            {handleGenerateGraph()}
        </div>
    );
};

export default VisualizePage;
