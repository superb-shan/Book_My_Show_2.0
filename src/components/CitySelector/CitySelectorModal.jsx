import React, { useContext, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import  SelectionComponent  from "../CitySelector/SelectionComponent";
import { NavbarContext } from '../../context/Navbar.context';

import { FaToriiGate, FaFortAwesome, FaCity, FaBuilding, FaSynagogue, FaTree, FaUmbrellaBeach, FaMountain, FaPaw } from "react-icons/fa";
import { TbBuildingBridge } from "react-icons/tb";

const style = {
  position: 'absolute',
  top: '20%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1200,
  height: 200,
  bgcolor: 'white',
  boxShadow: 24,
  p: 4,
  borderRadius: 5
};

export default function CitySelectorModal(props) {
  const {isCityModalOpen, setIsCityModalOpen} = useContext(NavbarContext);
  const handleOpen = () => setIsCityModalOpen(true);
  const handleClose = () => setIsCityModalOpen(false);


  const cities = [
    {icon: <FaToriiGate className='text-4xl' />, name: "Mumbai"},
    {icon: <FaFortAwesome className='text-4xl' />, name: "Delhi-NCR"},
    {icon: <FaCity className='text-4xl' />, name: "Bengaluru"},
    {icon: <FaBuilding className='text-4xl' />, name: "Hyderabad"},
    {icon: <FaSynagogue className='text-4xl' />, name: "Ahmadabad"},
    {icon: <FaTree className='text-4xl' />, name: "Coimbatore"},
    {icon: <FaUmbrellaBeach className='text-4xl' />, name: "Chennai"},
    {icon: <FaMountain className='text-4xl' />, name: "Pune"},
    {icon: <TbBuildingBridge className='text-4xl' />, name: "Kolkata"},
    {icon: <FaPaw className='text-4xl' />, name: "Kochi"},
  ];

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isCityModalOpen}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={isCityModalOpen}>
          <Box sx={style} className='flex justify-center items-center flex-col gap-4'>
            <h3 id="transition-modal-title">Select a city</h3>
           <SelectionComponent cities = {cities} setCity = {props.setCity} setOpen = {setIsCityModalOpen}/>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
