import 'core-js/es6/map';
import 'core-js/es6/set';
import React, {Component} from "react";
import {DataTable} from "./components/DataTable";
import {COLS} from "./constants/COLS";
import {DATA} from "./constants/DATA";

class App extends Component {
    render() {
        return (
            <div className="ratingComponent">
                <div className="text-center">
                    <p className="heading">Data Table component</p>
                    <DataTable
                        cols={COLS}
                        data={DATA}
                    />
                </div>
            </div>
        );
    }
}

export default App;
