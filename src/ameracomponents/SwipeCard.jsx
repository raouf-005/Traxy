import React, { Component } from "react";

import Swipeable from "react-swipy";
import Swiper from "./utils/swiper";

import Card from "./components/Card";
import { Button } from "@nextui-org/react";
import { round } from "three/examples/jsm/nodes/Nodes.js";
const appStyles = {
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  minHeight: "100vh",
  fontFamily: "sans-serif",
  overflow: "hidden",
};

const wrapperStyles = {
  position: "relative",
  width: "500px",
  height: "480px",
  borderRadius: "105px",
  backgroundColor: "#E4E4E4",
};
const actionsStyles = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: 12,
};

export default class App extends Component {
  state = {
    cards: [...Array(10).keys()],
  };

  remove = () =>
    this.setState(({ cards }) => ({ cards: cards.slice(1, cards.length) }));

  render() {
    const { cards } = this.state;

    return (
      <div style={appStyles}>
        <div style={wrapperStyles}>
          {cards.length > 0 && (
            <div style={wrapperStyles}>
              <Swipeable onAfterSwipe={this.remove}>
                <Card>{cards[0]}</Card>
              </Swipeable>
              {cards.length > 1 && <Card zIndex={-1}>{cards[1]}</Card>}
            </div>
          )}
        </div>
      </div>
    );
  }
}
