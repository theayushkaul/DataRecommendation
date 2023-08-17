import React, { useState } from 'react';
import axios from 'axios';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Predict() {
  const [formData, setFormData] = useState({
    region: '',
    sex: '',
    age: '',
    size: ''
  });

  const [prediction, setPrediction] = useState(null);

  const handleRegionChange = (event) => {
    setFormData({
      ...formData,
      region: event.target.value
    });
  };

  const handleAgeChange = (event) => {
    setFormData({
      ...formData,
      age: event.target.value
    });
  };

  const handleSexChange = (event) => {
    setFormData({
      ...formData,
      sex: event.target.value
    });
  };

  const handleSizeChange = (event) => {
    setFormData({
      ...formData,
      size: event.target.value
    });
  };

  const handlePredict = () => {
    const apiUrl = 'http://127.0.0.1:5000/predict';
    console.log(formData)
    axios.post(apiUrl, formData)
      .then(response => {
        const prediction = response.data.prediction;
        setPrediction(prediction);
      })
      .catch(error => {
        console.error('Error predicting:', error);
      });
  };

  return (
    <div className='outfit'>
      <div>
        <div className="flex flex-col justify-center pt-[10%] w-full bg-[#EAF2D7]">
          <div className="flex flex-col justify-center items-center elsie">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-black">
              Revolutionising Restocking
            </h1>
            <h2 className="text-3xl sm:text-5xl md:text-7xl mt-10  hometype">
              {" "}
              <span className="ml-2 font-bold text-black">with ML Trends</span>
            </h2>
          </div>
        </div>
        <div className="h-[100vh] bg-[#EAF2D7] flex flex-col justify-center w-full items-center">
          <div className="w-[80vw] flex flex-col justify-center">
            <FormControl sx={{ m: 1, minWidth: 80 }} className="bg-[#a9ca96]">
              <InputLabel id="demo-simple-select-autowidth-label">Region</InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={formData.region}
                onChange={handleRegionChange}
                width='full'
                label="Region"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'north'}>north</MenuItem>
                <MenuItem value={'south'}>south</MenuItem>
                <MenuItem value={'east'}>east</MenuItem>
                <MenuItem value={'west'}>west</MenuItem>
                <MenuItem value={'northwest'}>northwest</MenuItem>
                <MenuItem value={'southwest'}>southwest</MenuItem>
                <MenuItem value={'northeast'}>northeast</MenuItem>
                <MenuItem value={'southeast'}>southeast</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 80 }} className="bg-[#a9ca96]">
              <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={formData.age}
                onChange={handleAgeChange}
                width='full'
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'twenty'}>twenty</MenuItem>
                <MenuItem value={'twenty one'}>twenty one</MenuItem>
                <MenuItem value={'twenty one and a half'}>twenty one and a half</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 80 }} className="bg-[#a9ca96]">
              <InputLabel id="demo-simple-select-autowidth-label">Sex</InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={formData.sex}
                onChange={handleSexChange}
                width='full'
                label="Sex"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'male'}>male</MenuItem>
                <MenuItem value={"female"}>female</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 80 }} className="bg-[#a9ca96]">
              <InputLabel id="demo-simple-select-autowidth-label">Size</InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={formData.size}
                onChange={handleSizeChange}
                width='full'
                label="Size"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'ten'}>ten</MenuItem>
                <MenuItem value={9}>nine</MenuItem>
                <MenuItem value={'thirtyeight'}>thirtyeight</MenuItem>
                <MenuItem value={41}>fortyone</MenuItem>
                <MenuItem value={27}>twentyseven</MenuItem>
                <MenuItem value={38}>thirtyeight</MenuItem>
              </Select>
            </FormControl>
          </div>
            <button onClick={handlePredict} className='bg-[#a9ca96] mt-4 text-[20px] rounded-[10px] w-[140px] h-[45px]'>Predict</button>
            {prediction !== null && (
          <div className='bg-[#EAF2D7] text-2xl text-center goblin mt-10'>
            <p>Restocking Value: {prediction}</p>
          </div>
        )}
        </div>
        
      </div>
      <div className="text-black bg-[#EAF2D7]">
        <div className="ml-8 pt-6">
          <h1 className="text-3xl mt-4 mb-6 elsie">Common Queries</h1>
        </div>
        <div className="flex gap-20 mx-10">
          <div className="flex justify-start items-center flex-col martianm">
            <h1 className=" text-xl font-bold">
              How accurate are the predictions?
            </h1>
            <p className="my-4 ml-2">
              By harnessing the power of historical data and advanced machine learning algorithms, our model provides accurate predictions tailored to each product's unique trends.
            </p>
          </div>
          <div className="flex justify-start items-center flex-col martianm">
            <h1 className=" text-xl font-bold">
              Is my data secure?
            </h1>
            <p className="my-4 ml-2">
              Absolutely! Data security is our top priority. We employ state-of-the-art security measures to ensure your data remains safe and confidential.
            </p>
          </div>
          <div className="flex justify-start items-center flex-col martianm">
            <h1 className=" text-xl font-bold">
              Do I need technical
            </h1>
            <p className="my-4 ml-2">
              Nope! Our platform is user-friendly and designed for people with minimal technical expertise. You can leverage ML Restock Trends to boost your restocking efficiency in no time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Predict;
