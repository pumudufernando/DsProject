import React, { Component } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import creditcards from "./images/Creditcards.jpg";

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
    this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
    this.onChangeCardNo = this.onChangeCardNo.bind(this);
    this.onChangeCvcNo = this.onChangeCvcNo.bind(this);
    this.onChangeExpDate = this.onChangeExpDate.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      tname: '',
      tno: '',
        gqty:'',
        business :[],
        business_gst_number:'',
        qty1:'',
        gnic:'',
        gprice:'',
        gsstation:'',
        gestation:'',
        g_id:''



    }
  }

  //bill details will be display
  componentDidMount() {
      axios.get('http://localhost:5000/business/'+this.props.match.params.id)
          .then(response =>
          {
              console.log(response)

              this.setState(
                  {
                      business: response.data,
                      tname: response.data.tname,
                      tno: response.data.tno,
                      gqty:response.data.qty,
                      gprice:response.data.price,
                      g_id:response.data._id



                  } );
          })
          .catch(function (error) {
              console.log(error);
          })

    console.log(this.state.tname)
    }

  onChangePersonName(e) {
    this.setState({
      person_name: e.target.value
    });
  }
    onChangeCardNo(e) {
        this.setState({
            CardNo: e.target.value
        });
    }
    onChangeCvcNo(e) {
        this.setState({
            CvcNo: e.target.value
        });
    }
    onChangeExpDate(e) {
        this.setState({
            ExpDate: e.target.value
        });
    }

  onChangeBusinessName(e) {
    this.setState({
      business_name: e.target.value
    })  
  }
  onChangeGstNumber(e) {
    this.setState({
      business_gst_number: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    this.setState({

        qty1:((this.state.gqty)-(this.state.business_gst_number))
    },)
    const obj = {
      person_name: this.state.person_name,
      business_name: this.state.business_name,
      business_gst_number: this.state.business_gst_number,
      CardNo : this.state.CardNo,
      CvcNo:this.state.CvcNo,
      ExpDate:this.state.ExpDate,
        qty: (this.state.gqty)-(this.state.business_gst_number)
    };

      const obj1 = {
          person_name: this.state.person_name,
          business_name: this.state.business_name,
          business_gst_number: this.state.business_gst_number,

      };







//train details will be add in this method
      axios.post('http://localhost:5000/business/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));

      //bill will add to database service is this
      axios.post('http://localhost:5000/Bill/addbill/', obj1)
          .then(res => console.log(res.data));

      //email will be generate according to this system
      axios.post('http://localhost:5000/business/send/', obj1)
          .then(res => {


          })
          .catch(function (error) {

              console.log(error)
          })


      console.log(this.state.person_name)
      console.log(this.state.business_name)
      console.log(this.state.business_gst_number)
      console.log(this.state.tname)
      console.log(this.state.gsstation)
      console.log(this.state.gestation)

      this.props.history.push("/bill/"+this.state.business_name+"/" +this.props.match.params.id);


  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>


            <h3 >Government Employees will get 10% discount</h3>
            <label>Searched Train Name: {this.state.tname}  </label><br/>



            <label>Searched Train NO: {this.state.tno}  </label>

            <h3 align="center">Reserve Your Train Ticket(s)</h3>
            <form>
                <div className="form-group col-lg-5">
                    <label>Email</label>
                    <input 
                      type="email"
                      className="form-control" 
                      value={this.state.person_name}
                      onChange={this.onChangePersonName}
                      required/>
                </div>
                <div className="form-group col-lg-5">
                    <label>NIC NO : </label>
                    <input type="text"
                      className="form-control"
                      value={this.state.business_name}
                      onChange={this.onChangeBusinessName}
                           required/>
                </div>
                <div className="form-group col-lg-5">
                    <label>Quanity: </label>
                    <input type="number"
                      className="form-control"
                      value={this.state.business_gst_number}
                      onChange={this.onChangeGstNumber}
                           required/>
                </div>
                <div className="form-group col-lg-5">
                    <label>Card No</label>
                    <input
                        type="text"
                        className="form-control"
                        value={this.state.cardNo}
                        onchange={this.onChangeCardNo}
                        required/>
                </div>
                <div className="form-group col-lg-2">
                    <label>CVC</label>
                    <input
                        type="number"
                        className="form-control"
                        value={this.state.CvcNo}
                        onchange={this.onChangeCvcNo}

                        required/>
                </div>
                <div className="form-group col-lg-5">
                    <label>Exp Date</label>
                    <input
                        type="Date"
                        className="form-control"
                        value={this.state.ExpDate}
                        onchange={this.onChangeExpDate}

                        required/>
                </div>

                <div className="form-group col-lg-5">
                    <Link to={"/bill/"+this.state.business_name+'/'+this.props.match.params.id} onClick={this.onSubmit} className="btn btn-primary">Pay</Link>
                </div>
                <div>
                    <img src={creditcards} width="500rem" style={{  marginLeft: "30rem", marginTop:"-40rem"}}/>
                </div>


            </form>
        </div>
    )
  }
}