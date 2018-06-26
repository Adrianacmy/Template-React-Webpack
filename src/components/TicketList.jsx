import React from 'react';
import Ticket from './Ticket';

// let masterTicketList = [
//   {
//     names: 'Thato and Haley',
//     location: '3A',
//     issue: 'Firebase won\'t save record. Halp.'
//   },
//   {
//     names: 'Sleater and Kinney',
//     location: '4B',
//     issue: 'Fox image not displaying on page, can only see duck?'
//   },
//   {
//     names: 'Imani & Jacob',
//     location: '9F',
//     issue: 'Donkey picture not displaying on hover in Zoology app. :('
//   }
// ];

function TicketList(){
  return (
    <Ticket 
      names='Kale'
      location='7A'
      issue='wrong'
    />

  );
}

export default TicketList;