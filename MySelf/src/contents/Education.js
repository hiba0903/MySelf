import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="B.Tech Computer Engineering" where="Kerala Technological University" from="July 2020" to="Present"/>
            <Widecard title="Higher Secondary" where="M A M Model School,Chavarcode" from="2017" to="2019"/>
            </div>
            )
        }
    }
    
export default Education
    