import React from "react";
import PropTypes from "prop-types";

function Ticket(){
  return (
    <div>
    <h3>{props.location} - {props.names}</h3>
    <p><em>{props.issue}</em></p>
    <hr/>
  </div>
  );
}

Ticket.PropTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string
}
export default Ticket;