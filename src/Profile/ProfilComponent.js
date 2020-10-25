import React from 'react'
import PropTypes from 'prop-types';


const ProfilComponent = (props) => {
    
    return (
        <div>
            <div style={{margin:10}}>
                <h1 style={{color:"#5e5075", fontFamily:" Sansita Swashed', cursive;", letterSpacing:"3px"}}>
                    {props.user.fullName}
                </h1>
                <span>{props.children}</span></div>
            <div style={{margin:10}} >
                <h3 style={{fontFamily:"Open Sans", letterSpacing:2, color:"#1628f0"}}> {props.user.bio} </h3>
            </div>
            <div style={{margin:10}}>
                {props.user.profession} 
            </div>
        </div>
    )
}

export default ProfilComponent;

// Default props
ProfilComponent.defaultProps = {
    fullName:"User Name" , 
    bio: "Bio",
    profession: "Profession",
    src: "./profile/picture.jpg"
};
// props types
ProfilComponent.propTypes = {
    fullName : PropTypes.string.isRequired ,
    bio : PropTypes.string.isRequired ,
    profession : PropTypes.string.isRequired ,
    src: PropTypes.string.isRequired,
};

