import React from "react";
import styled from "styled-components";

import ActiveCheckIconImage from "../images/icon-check.svg";

const DropDownContained = styled.div`
  display: block;
  position: relative;
  cursor: pointer;
`;

const DropDownMenu = styled.div`
  padding: 0;
  box-shadow: 0 2px 10px rgba(52, 58, 64, 0.075);
  position: absolute;
  top: 100%;
  left: 0 !important;
  z-index: 1000;
  float: left;
  min-width: 10rem;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: #343a40;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border-color: #e9ecef;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  transform: none !important;
`;

const DropDownItem = styled.a`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e9ecef;
  padding: 0.5rem 1rem;
  font-size: 14px;
  color: #495057;
  background-color: ${props =>
    props.grey ? "rgba(74, 74, 74, 0.08)" : "transparent"};
  width: 100%;
  clear: both;
  font-weight: 400;
  text-align: inherit;
  white-space: nowrap;

  &:hover,
  &:focus {
    color: #16181b;
    text-decoration: none;
    background-color: #f8f9fa;
  }
`;

const SmallText = styled.small`
  display: block;
  font-size: 80%;
  font-weight: 400;
  color: #6c757d;
`;

const ActiveCheckIcon = styled.img`
  margin-left: 2rem;
`;

class Menu extends React.Component {
  render() {
    const dropdownClasses = `dropdown-menu ${
      this.props.showMenu ? "d-block" : null
    }`;

    return (
      <DropDownContained>
        <DropDownMenu className={dropdownClasses}>
          {this.props.items.map((item, i) => {
            if (item.title) {
              return (
                <DropDownItem key={i} href={item.url}>
                  <div className="d-inline-block">
                    <p className="m-0">{item.title}</p>
                    <SmallText>{item.proposition}</SmallText>
                    <SmallText>{item.subtitle}</SmallText>
                  </div>
                  {item.active ? (
                    <ActiveCheckIcon
                      src={ActiveCheckIconImage}
                      alt="Active check icon"
                    />
                  ) : null}
                </DropDownItem>
              );
            } else {
              return (
                <DropDownItem key={i} href={item.url} grey target="_blank">
                  <div className="d-inline-block">
                    <SmallText>
                      <u>{item.proposition}</u>
                    </SmallText>
                  </div>
                </DropDownItem>
              );
            }
          })}
        </DropDownMenu>
      </DropDownContained>
    );
  }
}

export default Menu;
