import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Prediction = () => {

<<<<<<< HEAD
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  return (
    <>
      <div className="flex flex-col justify-center w-full h-screen bg-[#a9ca96]">
        <div className="flex flex-col justify-center items-center">
=======
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <div className="flex flex-col justify-center w-full h-screen bg-[#EAF2D7]">
        <div className="flex flex-col justify-center items-center elsie">
>>>>>>> 4d0b9a692084253cb6b75fc986ee705f1f488e87
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-black">
            Revolutionising Restocking
          </h1>
          <h2 className="text-3xl sm:text-5xl md:text-7xl mt-10 mb-12 hometype">
            {" "}
            <span className="ml-2 font-bold text-black">with ML Trends</span>
          </h2>
        </div>
      </div>
<<<<<<< HEAD
      <div className="h-[100vh] bg-[#a9ca96] flex flex-col justify-center w-full items-center">
        <div className="w-[80vw] flex flex-col justify-center">
        <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
        </Select>
      </FormControl>
        </div>
      </div>
      <div className="text-black bg-[#a9ca96]">
        <div className="ml-8 pt-6">
          <h1 className="text-3xl mt-4 mb-6 font-bold">Common Queries</h1>
        </div>
        <div className="grid gris-cols-1 sm:grid-cols-3">
          <div className="rounded-2xl p-6 m-2 ">
            <div className="flex justify-start items-center flex-col">
              <h1 className="headingstyle text-xl font-bold">
                How accurate are the predictions
              </h1>
              <p className="my-4 ml-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium dolor rem dolores. Libero fugiat, reprehenderit quasi
              recusandae eveniet assumenda non suscipit quas vero iure veritatis
              aspernatur voluptates doloribus vitae totam?
            </p>
            </div>
           
          </div>
          <div className="rounded-2xl p-6 m-2 ">
            <div className="flex justify-start items-center flex-col">
              <h1 className="text-xl font-bold">Is my data secure</h1>
            </div>
            <p className="my-4 ml-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium dolor rem dolores. Libero fugiat, reprehenderit quasi
              recusandae eveniet assumenda non suscipit quas vero iure veritatis
              aspernatur voluptates doloribus vitae totam?
            </p>
          </div>
          <div className="rounded-2xl p-6 m-2">
            <div className="flex justify-start items-center flex-col">
              <p className="text-xl font-bold">Do I need technical expertise</p>
            </div>
            <p className="my-4 ml-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium dolor rem dolores. Libero fugiat, reprehenderit quasi
              recusandae eveniet assumenda non suscipit quas vero iure veritatis
              aspernatur voluptates doloribus vitae totam?
=======
      <div className="h-[100vh] bg-[#EAF2D7] flex flex-col justify-center w-full items-center">
        <div className="w-[80vw] flex flex-col justify-center">
          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={age}
              onChange={handleChange}
              autoWidth
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Twenty</MenuItem>
              <MenuItem value={21}>Twenty one</MenuItem>
              <MenuItem value={22}>Twenty one and a half</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={age}
              onChange={handleChange}
              autoWidth
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Twenty</MenuItem>
              <MenuItem value={21}>Twenty one</MenuItem>
              <MenuItem value={22}>Twenty one and a half</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={age}
              onChange={handleChange}
              autoWidth
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Twenty</MenuItem>
              <MenuItem value={21}>Twenty one</MenuItem>
              <MenuItem value={22}>Twenty one and a half</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={age}
              onChange={handleChange}
              autoWidth
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Twenty</MenuItem>
              <MenuItem value={21}>Twenty one</MenuItem>
              <MenuItem value={22}>Twenty one and a half</MenuItem>
            </Select>
          </FormControl>
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
>>>>>>> 4d0b9a692084253cb6b75fc986ee705f1f488e87
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prediction;

