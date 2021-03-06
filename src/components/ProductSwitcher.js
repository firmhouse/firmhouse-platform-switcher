import React from "react";
import styled from "styled-components";
import Menu from "./Menu";

import FirmhouseLogoImage from "../images/icon-firmhouse.svg";
import ArrowDownIconImage from "../images/chevron-down.svg";

const FirmhouseLogo = styled.img`
  margin-right: 1rem;
`;

const ArrowDownIcon = styled.img`
  width: 0.9rem;
  margin-left: 0.5rem;
`;

const ProductLogo = styled.div`
  cursor: pointer;
  display: inline-block;
`;

const ProductName = styled.div`
  cursor: pointer;
  display: inline-block;
`

class ProductSwitcher extends React.Component {
  constructor() {
    super();

    this.state = {
      showMenu: false
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener("click", this.closeMenu);
    });
  }

  productName() {
    return this.props.product_name ? this.props.product_name : this.props.product
  }

  render() {
    const productIcon = require(`../images/icon-${this.props.product}.svg`);

    return (
      <React.Fragment>
        <a href={this.props.root_url}>
          <FirmhouseLogo src={productIcon} alt="Product icon" />
        </a>
        <ProductLogo onClick={this.showMenu}>
          <ProductName>{this.productName()}</ProductName>
          <ArrowDownIcon src={ArrowDownIconImage} alt="Arrow down icon" />
        </ProductLogo>
        <Menu showMenu={this.state.showMenu} items={this.props.items} />
      </React.Fragment>
    );
  }
}

export default ProductSwitcher;
