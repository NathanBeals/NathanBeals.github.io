import React, { Component } from "react";
import styled from 'styled-components';

import { Motion, spring, presets } from "react-motion";

const ItemInfoCSS = styled.div`
border-style: none;
display: flex;
horizontal: please god just put it in the middle;
justify-content: center;
margin: 5px;
`;

const DeeperCSS = styled.div`
border-style: none;
margin: 10px;
background-color:#00CED1;
`;

const ListCSS = styled.ul`
height:5px;
left-margin:0px;
text-align: left;
padding-left:10px;
`;

const LinkCSS = styled.a`
postion:relative;
text-align: right;
color: blue;
display:block; //Needed for right alignment to apply to a (it's weird)
margin-right: 10px;
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
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? "Nothing" : "Also Nothing"}
            </button>
        </div>
    );
  }
}

export default TopBar;