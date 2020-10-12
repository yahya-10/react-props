import React, {Component} from 'react'
import picture from '../Profile/ProfilComponent.js'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import PropTypes from 'prop-types';

toast.configure()

class ProfilComponent extends Component {
    constructor(props) {
        super(props);
    }

    handleName=()=>{
                toast('YAHYA AKERMI!')
            }

    render() {
        return (
            <div>
                <div>
                    <h1 style={{color:"#5e5075", fontFamily:" Sansita Swashed', cursive;", letterSpacing:"3px"}}>
                        {this.props.fullName}
                    </h1>
                </div>
                <div>
                    <h3 style={{fontFamily:"Open Sans", letterSpacing:2, color:"#1628f0"}}> {this.props.bio} </h3>
                </div>
                <div>
                    <button onClick= {this.handleName} style={{border:"1px solid #c816f0", borderRadius:"5px", backGroundColor:"#fa64f0", padding:15, cursor:"pointer"}}> 
                    {this.props.profession} 
                    </button>
                </div>
            </div>
        )
    }
}

export default ProfilComponent;

// Default props
ProfilComponent.defaultProps = {
    fullName:"Yahya Akermi" , 
};
// props types
ProfilComponent.propTypes = {
    fullName : PropTypes.string ,
    bio : PropTypes.string ,
    profession : PropTypes.string 
};

