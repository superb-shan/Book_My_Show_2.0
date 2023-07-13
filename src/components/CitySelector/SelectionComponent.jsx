import React, { useContext, useState } from 'react';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { NavbarContext } from '../../context/Navbar.context';

const SelectionComponent = (props) => {

    // const [selectedCity, setSelectedCity] = useState('');
    const {city, setCity, setIsCityModalOpen} = useContext(NavbarContext);

    const cities = props.cities;
  
    const handleCityChange = (event, newCity) => {
      if (newCity !== null) {
        setCity(newCity);
        setIsCityModalOpen(false);
        // console.log(newCity)
      }
    };

    // console.log(cities);

  return (
    <div>
        <Stack direction="row" spacing={4} useFlexGap={true} className='w-full'>
            <ToggleButtonGroup
                value={city}
                exclusive
                onChange={handleCityChange}
                color="primary"
            >
              {cities.map((city)=>{
                return(
                  <ToggleButton value={city.name} key={city.name+Math.random()} className='flex flex-col gap-2' fullWidth= {true} >
                  {/* <div style={{display: "flex", flexDirection: "column",   }}> */}
                  {city.icon}
                  {city.name}
                  {/* </div> */}
                  </ToggleButton>
                )
              })}
                
            </ToggleButtonGroup>
        </Stack>
    </div>
  )
};

export default SelectionComponent;