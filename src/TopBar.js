import React, { Component } from "react";
import styled from 'styled-components';

const Bar = styled.a`
postion:relative;
background-color: black;
text-align: left;
color: blue;
display:block; //Needed for right alignment to apply to a (it's weird)
`;

const HomeButton = styled.button`
background-color: black;
border: none;
color: white;
padding: 10px 10px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size 20px;
`;

const OtherButton = styled.button`
background-color: black;
border: none;
color: white;
padding: 10px 10px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size 20px;
`;

// Props
// data

// Also links to websites I use for valuation

class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
    }

    handleChange(date) {
            this.setState({ selectedDate: date });
    }

  render() {
    const modifiers = { };
    return (
        <div>
            <Bar>
                <HomeButton onClick={this.handleClick}>
                    {this.state.isToggleOn ? "We Knead Games" : "Nothing Here Yet"}
                </HomeButton>
            </Bar>
        </div>
    );
  }
}

export default TopBar;