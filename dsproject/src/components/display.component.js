import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
//import create from './create.component';


export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {business: []};
    }
    componentDidMount(){

        //get the start station and end station through the service
        axios.get('http://localhost:5000/business/'+this.props.match.params.sstation+'/'+this.props.match.params.estation)
            .then(response =>
            {
                console.log(response)

                this.setState({ business: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    tabRow(){
        return this.state.business.map(function(object, i){
            return <TableRow obj={object} key={i} />;
        });
    }

    //display all the details that getting to the service
    render() {
        return (
            <div>
                <h3 align="center">Available Train List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                    <tr>
                        <th>Train No</th>
                        <th>Train Name</th>
                        <th>Start Station</th>
                        <th>End Station</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Type</th>
                        <th>Frequency</th>
                        <th>from</th>
                        <th>Qty</th>
                        <th>Ticket Price</th>
                        <th colSpan="2">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.tabRow() }
                    </tbody>
                </table>
            </div>
        );
    }
}

