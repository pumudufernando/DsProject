import React, { Component } from 'react';
import axios from 'axios';
import index from "./display.component";
import {Link} from "react-router-dom";



export default class Create extends Component {
    constructor(props) {
        super(props);
        this.onChangeStartStation = this.onChangeStartStation.bind(this);
        this.onChangeEndStation = this.onChangeEndStation.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            tno:'',
            tname:'',
            sstation:'',
            estation:'',
            stime:'',
            etime:'',
            type:'',
            frequency:'',
            from:'',
            qty:'',
            price:'',
            business: [],
            clickedSearchTrains:false


        }
    }
    onChangeStartStation(e) {
        this.setState({
            sstation: e.target.value
        });
    }
    onChangeEndStation(e) {
        this.setState({
            estation: e.target.value
        })
    }


    onSubmit(e) {
        e.preventDefault();
        const obj = {
            sstation: this.state.sstation,
            estation: this.state.estation

        };


        {
            //pass the start station and end station through service
            axios.get('http://localhost:5000/business/'+this.state.sstation+'/'+this.state.estation)
                .then(response =>
                {
                    console.log(response)

                    this.setState({ business: response.data });
                })
                .catch(function (error) {
                    console.log(error);
                })


            this.props.history.push("/index/"+this.state.sstation+"/" +this.state.estation);

        }


    }

//select the stations according to the user preference
    render() {
        return (
            <div>
                <form class="text-center border border-light p-5">

                    <p class="h4 mb-8">Search Train</p>
                    <br/><br/><br/><br/><br/>


                    <label>Start Station</label>

                    <select class="browser-default custom-select mb-4" id="inputState" value={this.state.sstation} onChange={this.onChangeStartStation}>
                        <option value="" selected>Choose option</option>
                        <option value="Pettah" >Pettah</option>
                        <option value="Badulla">Badulla</option>
                        <option value="Kandy">Kandy</option>
                        <option value="Galle">Galle</option>
                        <option value="Matara">Matara</option>
                        <option value="Jaffna">Jaffna</option>
                        <option value="Anuradhapura">Anuradhapura</option>
                    </select>
                    <br/><br/><br/><br/>

                    <label>End Station</label>

                    <select class="browser-default custom-select mb-4"  id="inputState"  value={this.state.estation} onChange={this.onChangeEndStation}>
                        <option value="" selected>Choose option</option>
                        <option value="Pettah" >Pettah</option>
                        <option value="Badulla">Badulla</option>
                        <option value="Kandy">Kandy</option>
                        <option value="Galle">Galle</option>
                        <option value="Matara">Matara</option>
                        <option value="Jaffna">Jaffna</option>
                        <option value="Anuradhapura">Anuradhapura</option>
                    </select>
                    <br/><br/><br/><br/>



                    <Link to={"/index/"+this.state.estation+"/" +this.state.sstation}  className="btn btn-primary" onClick={this.onSubmit}>Search your Train</Link>

                </form>

                <div className = "Create">
                    <index  sstation={this.state.sstation}/>
                    <index  estation={this.state.estation}/>
                </div>
            </div>
        )
    }

}
