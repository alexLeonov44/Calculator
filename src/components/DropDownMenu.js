import React, { Component } from 'react'
import styled from 'styled-components'

import PropTypes from 'prop-types'

const StyledLi = styled.li``

const Dropbtn = styled.div`
  width: 170px;
  display: inline-block;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  border: 1px solid #a2a2a2;
  border-radius: 5px;
  cursor: pointer;
`

const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  cursor: pointer;
  display: ${({ isOpenContent }) =>
    isOpenContent ? 'block' : 'none'};
`

const DropDownLi = styled(StyledLi)`
  width:170px;
  display: inline-block;
  margin-top: 20px;
  // &:hover ${DropDownContent} {
  //   display: block;
  // }
  // &:active ${DropDownContent} {
  //   display: block;
  // }
`

const SubA = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  &:hover {
    background-color: #f1f1f1;
  }
`

class DropDownMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      themes: ['Colored', 'Light', 'Dark'],
      isOpenContent: false,
    }
    this.dropDownLiRef = React.createRef()
  }

  liHandleClick = () => {
    this.setState(prevState => ({
      isOpenContent: !prevState.isOpenContent,
    }))
  }
  themeOnClick=(theme)=>{
    this.props.setTheme(theme)
    this.setState({isOpenContent:false})
  }
  handleOutsideClick=(e)=>{
    if(!e.path.includes(this.dropDownLiRef.current)){
      this.setState({isOpenContent:false})
    }
    }
  
  componentDidMount(){
    document.addEventListener("click",this.handleOutsideClick)
  }
  componentWillUnmount(){
    document.removeEventListener("click",this.handleOutsideClick)
  }
  render = () => {
    return (
      <DropDownLi ref={this.dropDownLiRef}>
        <Dropbtn
          onClick={() => this.liHandleClick('DropDown')}
          id="theme-drop-down-btn">
          {this.props.theme}
        </Dropbtn>
        <DropDownContent
        id="theme-drop-down-content"
          isOpenContent={this.state.isOpenContent}>
          {' '}
          {this.state.themes.map((theme, i) => (
            <SubA
              key={theme + i}
              onClick={()=> this.themeOnClick(theme)}>
              {theme}
            </SubA>
          ))}
        </DropDownContent>
      </DropDownLi>
    )
  }
}

export default DropDownMenu

DropDownMenu.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
}
