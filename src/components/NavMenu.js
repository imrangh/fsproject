import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu } from "semantic-ui-react";

class NavMenu extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    console.log(name);
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Menu inverted>
        <Menu.Item
          name="/home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="/about"
          active={activeItem === "about"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="/contact"
          active={activeItem === "contact"}
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}

const mapStateToProps = (state) => {
  const { activeItem } = state;

  return {
    activeItem,
  };
};

export default connect(mapStateToProps)(NavMenu);
