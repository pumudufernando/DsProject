import React, { Component } from 'react';
import axios from 'axios';
import img1 from "./images/1.png";



export default class Bill extends Component {
    constructor(props) {

        super(props);

        this.state = {

            tno: '',
            gtname: '',
            sstation: '',
            estation: '',
            stime: '',
            etime: '',
            type: '',
            frequency: '',
            from: '',
            gqty: '',
            gprice: '',
            gnic:'',
            bnic:'',
            disc:'',
            disic:'',
            business: [],
            business1: []

        }



    }




    componentDidMount(e) {

        //get the user id and check for the discount
        axios.get('http://localhost:5000/Employee/getEmp/'+this.props.match.params.business_name)
            .then(response =>
            {
                console.log(response)



                this.setState(
                    {


                        business1: response.data,
                        bnic:response.data.nic

                    } );
            })
            .catch(function (error) {
                console.log(error);
            })


//dispaly all the details according to the id of bill service
        axios.get('http://localhost:5000/business/'+this.props.match.params.id)
            .then(response =>
            {
                console.log(response)

                this.setState(
                    {
                        business: response.data,
                        tname: response.data.tname,
                        tno: response.data.tno,
                        gprice:response.data.price



                    } );
            })
            .catch(function (error) {
                console.log(error);
            })


        //get the bill service
        axios.get('http://localhost:5000/Bill/getBill')
            .then(response =>
            {
                console.log(response)

                this.setState(
                    {
                        business: response.data,
                        gqty:response.data.business_gst_number,
                        gnic:response.data.business_name



                    },()=>{


                        if ((this.state.bnic)!=''){

//give the 10% discount for government workers
                            this.setState(
                                {

                                    disc:this.state.gqty*this.state.gprice*90/100,
                                    disic:this.state.gqty*this.state.gprice*10/100
                                },()=>{
                                    alert("You Have 10% Discount for your Government ID")


                                }
                            )


                        }
                        else {
// Calculate the tickets price by multiplying qty and price
                            this.setState(
                                {
                                    disc:this.state.gqty*this.state.gprice,
                                    disic:"0"
                                },()=>{


                                }
                            )

                        }
                    } )
            })
            .catch(function (error) {
                console.log(error);
            })


    }






    render() {

        return(
//display in the interface about bill
            <form >
                <h3 style={{  marginLeft: "20rem"}}>Your E-Bill For the payment</h3>
                <br/>
                <div className="form-group">
                    <label>Price For Ticket      :        {this.state.gprice} </label>

                </div>
                <br/>
                <div className="form-group">
                    <label>Train ID     :     {this.state.tno}  </label>


                </div>
                <br/>
                <div className="form-group">
                    <label>Qty:   {this.state.gqty} </label>

                </div>
                <br/>
                <div className="form-group">
                    <label>NIC:   {this.state.gnic} </label>

                </div>
                <br/>

                <div className="form-group">
                    <label>Total Price:   {this.state.disc} </label>

                </div><br/>

                <div className="form-group">
                    <label>Discount for Tickets: {this.state.disic} </label>

                </div><br/>


                <div>
                    <a href="/MainPage"  className="btn btn-primary" type="button">Ok</a>
                </div>

                <div>
                    <img src={img1} width="250rem" style={{  marginLeft: "40rem", marginTop:"-30rem"}}/>
                </div>


            </form>

        )
    }
}
