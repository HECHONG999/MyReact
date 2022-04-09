import React from 'react';
import ctx from "./RouterContext";

export default function WithRouter(Comp) {
  return function RouterWrapper(props) {
      return <ctx.Consumer>
            {value =>  <Comp {...value} {...props}></Comp>}
      </ctx.Consumer>
  }
}
