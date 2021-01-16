import React, { Component } from "react";
import LinkList from "./components/LinkList";
import CreateLink from "./components/CreateLink";

class App extends Component {
    render() {
        return (
            <div>
                <h1> hello </h1>
                <LinkList />
                <CreateLink />
            </div>
        );
    }
}

export default App;
