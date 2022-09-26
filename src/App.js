import React from "react";
import SearchBar from './SearchBar';
import CardList from './CardList';
import { robots } from './robots';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            'robots': robots,
            'searchString': ''
        }
    }

    onSearchType = (event) => {
        this.setState({'searchString':event.target.value})
    }

    render() {
        const filteredRobots = robots.filter((robot)=> {
            return robot.name.toLowerCase().includes(this.state.searchString.toLowerCase())
        });
        return (
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBar onSearchType={this.onSearchType} />
                <CardList robots={filteredRobots} />
            </div>
        )
    }
}

export default App;