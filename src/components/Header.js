//one of the components and needed to connect to react
import React from "react";
// the header component with a prop
//the props.title was caught in the props header parameter
const Header = (props) => {
  //a parameter that conatinas variable of headerStyle
  return (
    <div>
      <h1 style={headerStyle}>{props.title}</h1>
    </div>
  );
};

//the css of the header of the h1 tag
const headerStyle = {
  fontSize: "40px",
  textDecoration: "underline",
};

//export is like 'return' for an api which returns this information to the Header 
export default Header;
