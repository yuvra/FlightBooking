import React from "react";

import Select from 'react-select';
import DatePicker from 'react-date-picker';
import { Button, Form, Modal } from 'react-bootstrap';
import { FaPlaneDeparture } from "react-icons/fa";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'




import './home-component.css'

const from = [
    { value: 'Pune', label: 'Pune' },
    { value: 'Mumbai', label: 'Mumbai' },
    { value: 'Delhi', label: 'Delhi' },
];

const to = [
    { value: 'Bengaluru', label: 'Bengaluru' },
    { value: 'Hyderabad', label: 'Hyderabad' },
    { value: 'Chennai', label: 'Chennai' },
];

const cabinClass = [
    { value: 'Business', label: 'Business' },
    { value: 'First', label: 'First' },
    { value: 'Economy', label: 'Economy' },
];

const tripType = [
    { value: 'One-Way', label: 'One-Way' },
    { value: 'Round-Trip', label: 'Round-Trip' },

]

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOptionFrom: null,
            selectedOptionTO: null,
            cabinClass: null,
            tripType: null,
            departureDate: new Date(),
            returnDate: '',
            noOfPassengers: '',
            showModal: false,
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
        }
    }

    handleChangeForSelectFrom = (selectedOption, stateName) => {

        if (stateName === 'from') {

            this.setState({ selectedOptionFrom: selectedOption }, () =>
                console.log(`Option selected:`, this.state.selectedOptionFrom));
            return;
        }

        if (stateName === 'to') {

            this.setState({ selectedOptionTO: selectedOption }, () =>
                console.log(`Option selected:`, this.state.selectedOptionTO))
            return;

        }

        if (stateName === 'cabinClass') {

            this.setState({ cabinClass: selectedOption }, () =>
                console.log(`Option selected:`, this.state.selectedOptionTO))
            return;

        }

        if (stateName === 'tripType') {

            this.setState({ tripType: selectedOption }, () =>
                console.log(`Option selected:`, this.state.tripType))
            return;

        }



    }

    handleOnDateChange = (date, dateType) => {

        if (dateType === 'dep') {

            this.setState({ departureDate: date }, () => {
                console.log(`Option selected:`, this.state.departureDate)
            })

        }

    }

    handleSearchFlight = () => {
        this.setState({ showModal: true })
    }

    handleModalSubmit = (data, dataType) => {

        if (dataType === 'firstName') {

            this.setState({ firstName: data.target.value }, () => {
                console.log(`Option selected:`, this.state.firstName)
            })
            return;

        }

        if (dataType === 'lastName') {

            this.setState({ lastName: data.target.value }, () => {
                console.log(`Option selected:`, this.state.lastName)
            })
            return;

        }


        if (dataType === 'email') {

            this.setState({ email: data.target.value }, () => {
                console.log(`Option selected:`, this.state.email)
            })

        }
    }

    render() {
        return (
            <div className="Home-container">

                <div className="Home-header">
                    <h2>Fly With US</h2>
                    <FaPlaneDeparture style={{ fontSize: '45px', marginLeft: '20px' }} />
                </div>

                <div>

                    {/* From */}
                    <div className="Home-autoSelect-container">

                        <Select value={this.state.selectedOptionFrom}
                            onChange={(selectedOption) => {
                                this.handleChangeForSelectFrom(selectedOption, 'from')
                            }}
                            options={from} isClearable
                            placeholder="From:  Enter City or Airport"
                            className="Home-autoSelect" />

                    </div>

                    {/* TO */}
                    <div className="Home-autoSelect-container">

                        <Select value={this.state.selectedOptionTO}
                            onChange={(selectedOption) => {
                                this.handleChangeForSelectFrom(selectedOption, 'to')
                            }}
                            options={to} isClearable
                            placeholder="TO:  Enter City or Airport"
                            className="Home-autoSelect" />

                    </div>

                    {/* Cabin Class */}
                    <div className="Home-autoSelect-container">

                        <Select value={this.state.cabinClass}
                            onChange={(selectedOption) => {
                                this.handleChangeForSelectFrom(selectedOption, 'cabinClass')
                            }}
                            options={cabinClass} isClearable
                            placeholder="Cabin Class"
                            className="Home-autoSelect" />

                    </div>

                    {/* Trip Type */}
                    <div className="Home-autoSelect-container">

                        <Select value={this.state.tripType}
                            onChange={(selectedOption) => {
                                this.handleChangeForSelectFrom(selectedOption, 'tripType')
                            }}
                            options={tripType} isClearable
                            placeholder="Trip Type"
                            className="Home-autoSelect" />

                    </div>
                    {
                        this.state.tripType !== null &&
                        <div className="Home-autoSelect-container">

                            <div className="Home-date-space">
                                Depature Date
                            </div>
                            <div>

                                <DatePicker onChange={(date) => {
                                    this.handleOnDateChange(date, 'dep')
                                }} value={this.state.departureDate}
                                    className="Home-autoSelect"
                                    minDate={new Date()} />

                            </div>

                        </div>
                    }


                    {
                        this.state.tripType !== null && this.state.tripType.value === 'Round-Trip' &&

                        <div className="Home-autoSelect-container">

                            <div className="Home-date-space">
                                Return Date
                            </div>

                            <DatePicker onChange={(date) => {
                                this.handleOnDateChange(date, 'dep')
                            }} value={this.state.departureDate}
                                className="Home-autoSelect"
                                minDate={new Date()} />

                        </div>

                    }

                </div>

                <div className="Home-autoSelect-container">
                    <Button onClick={() => { this.handleSearchFlight() }}>Search Filght</Button>
                </div>

                <Modal size="lg"
                    centered
                    show={this.state.showModal}
                    onHide={() => this.setState({ showModal: false })}
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            <h4>Enter your personal details</h4>
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>

                        <Form>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="First Name" onChange={(firstName) => {
                                    this.handleModalSubmit(firstName, 'firstName')
                                }} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Last Name" onChange={(lastName) => {
                                    this.handleModalSubmit(lastName, 'lastName')
                                }} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>E-mail Address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" onChange={(email) => {
                                    this.handleModalSubmit(email, 'email')
                                }} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Enter phone number</Form.Label>
                                <div style={{width: '60%'}}>
                                <PhoneInput
                                placeholder="Enter phone number"
                                value={this.state.phoneNumber}
                                onChange={(phoneNumber)=>{
                                    this.setState({ phoneNumber: phoneNumber}, ()=>{
                                        console.log(phoneNumber)
                                    })
                                }} />
                                </div>
                            </Form.Group>
                           

                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <div className="Modal-footer">
                            <Button variant="success" onClick={() => { this.setState({ showModal: false }) }} disabled={
                                this.state.firstName === '' || this.state.lastName === '' || this.state.email === ''}>
                                Submit Details
                            </Button>
                        </div>
                    </Modal.Footer>

                </Modal>


            </div>
        )
    }


}