import React, { Component } from 'react';
import {listChargingPoints, plugInChargingPoint, unplugChargingPoint} from "../../api/utils";

class CarPark extends Component {
    constructor(props) {
        super(props);
        this.reloadChargingPoints()
    }

    reloadChargingPoints() {
        listChargingPoints(r => {
            this.setState(r);
        })
    }

    plugAction(index, status) {
        let reloadHandler = () => this.reloadChargingPoints();
        if (status === 'AVAILABLE') {
            plugInChargingPoint(index, reloadHandler);
        } else {
            unplugChargingPoint(index, reloadHandler)
        }
    }

    renderTableData() {
        if (this.state !== null) {
            return this.state.charging_points.map((point) => {
                const {index, consumption, status} = point;
                return (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{status}</td>
                        <td>{consumption}A</td>
                        <td>
                            <button onClick={() => this.plugAction(index, status)}>{status === 'OCCUPIED' ? 'Unplug' : 'PlugIn'}</button>
                        </td>
                    </tr>
                )
            })
        } else {
            return <tr/>
        }
    }

    render() {
        return (
            <table>
                <tbody>
                <tr>
                    <th>Index</th>
                    <th>Status</th>
                    <th>Current</th>
                </tr>
                {this.renderTableData()}
                </tbody>
            </table>
        );
    }
}

export default CarPark;