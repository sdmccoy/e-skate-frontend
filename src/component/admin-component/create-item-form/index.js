import React from 'react';
import { connect } from 'react-redux';
import * as itemActions from '../../../action/item-actions';
import './_create_item_form.scss';

class CreateItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      name: '',
      photoURI: '',
      description: '',
      price: '',
      motorPower: '',
      maxSpeed: '',
      maxLoadCapacity: '',
      chargingTime: '',
      wheelStyle: '',
      batteryCapacity: '',
      transmission: '',
      remote: '',
      autoPowerShutOff: '',
      truckStyle: '',
      weight: '',
      length: '',
      width: '',
      height: '',
      climbingAngle: '',
      voltagePeak: '',
      voltageWorking: '',
      capacity: '',
      power: '',
      cutOffVoltage: '',
      maxDischargingCurrent: '',
      maxContinuousDischargingAmperage: '',
      ratedDischargingAmperage: '',
      chargingCurrent: '',
      chargingVoltage: '',
      runTime: '',
      lifecycle: '',
      color: '',
      turning: '',
      dualDrive: '',
      bec: '',
      lipo: '',
      voltage: '',
      feature: '',
      firmwareVersion: '',
      parameters: '',
      continuousCurrent: '',
      burstCurrent: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleChange(e) {
    if (e.target.type === 'file') {
      this.setState({ [e.target.name]: e.target.files[0] });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  }

  handleSave() {
    this.props.createItem(this.state);
    this.props.toggleView();
  }

  render() {
    return (
      <div className="create-item-form">
        <h1>Create Form</h1>
        <form>
          <label htmlFor="type">Item Type<input onChange={this.handleChange} name="type" value={this.state.type} /></label>
          <label htmlFor="name">Name<input onChange={this.handleChange} name="name" value={this.state.name} /></label>
          <label htmlFor="photoURI">Photo URL<input type="file" onChange={this.handleChange} name="photoURI" value={this.state.photoURI.filename} /></label>
          <label htmlFor="description">Description<input onChange={this.handleChange} name="description" value={this.state.description} /></label>
          <label htmlFor="price">Price<input onChange={this.handleChange} name="price" value={this.state.price} /></label>
          <label htmlFor="motorPower">Motor Power<input onChange={this.handleChange} name="motorPower" value={this.state.motorPower} /></label>
          <label htmlFor="maxSpeed">Max Speed<input onChange={this.handleChange} name="maxSpeed" value={this.state.maxSpeed} /></label>
          <label htmlFor="maxLoadCapacity">Max Load<input onChange={this.handleChange} name="maxLoadCapacity" value={this.state.maxLoadCapacity} /></label>
          <label htmlFor="chargingTime">Charge Time<input onChange={this.handleChange} name="chargingTime" value={this.state.chargingTime} /></label>
          <label htmlFor="wheelStyle">Wheel Style<input onChange={this.handleChange} name="wheelStyle" value={this.state.wheelStyle} /></label>
          <label htmlFor="batteryCapacity">Battery Capacity<input onChange={this.handleChange} name="batteryCapacity" value={this.state.batteryCapacity} /></label>
          <label htmlFor="transmission">Transmission<input onChange={this.handleChange} name="transmission" value={this.state.transmission} /></label>
          <label htmlFor="remote">Remote<input onChange={this.handleChange} name="remote" value={this.state.remote} /></label>
          <label htmlFor="autoPowerShutOff">Auto Power Shutoff<input onChange={this.handleChange} name="autoPowerShutOff" value={this.state.autoPowerShutOff} /></label>
          <label htmlFor="truckStyle">Truck Style<input onChange={this.handleChange} name="truckStyle" value={this.state.truckStyle} /></label>
          <label htmlFor="weight">Weight<input onChange={this.handleChange} name="weight" value={this.state.weight} /></label>
          <label htmlFor="length">Length<input onChange={this.handleChange} name="length" value={this.state.length} /></label>
          <label htmlFor="width">Width<input onChange={this.handleChange} name="width" value={this.state.width} /></label>
          <label htmlFor="height">Height<input onChange={this.handleChange} name="height" value={this.state.height} /></label>
          <label htmlFor="clibingAngle">Climbing Angle<input onChange={this.handleChange} name="climbingAngle" value={this.state.climbingAngle} /></label>
          <label htmlFor="voltagePeak">Voltage Peak<input onChange={this.handleChange} name="voltagePeak" value={this.state.voltagePeak} /></label>
          <label htmlFor="voltageWorking">Voltage Working<input onChange={this.handleChange} name="voltageWorking" value={this.state.voltageWorking} /></label>
          <label htmlFor="capacity">Capacity<input onChange={this.handleChange} name="capacity" value={this.state.capacity} /></label>
          <label htmlFor="power">Power<input onChange={this.handleChange} name="power" value={this.state.power} /></label>
          <label htmlFor="cutOffVoltage">Cutoff Voltage<input onChange={this.handleChange} name="cutOffVoltage" value={this.state.cutOffVoltage} /></label>
          <label htmlFor="maxDischargeCurrent">Max Discharge Current<input onChange={this.handleChange} name="maxDischargingCurrent" value={this.state.maxDischargingCurrent} /></label>
          <label htmlFor="maxContinuousDischargingAmperage">Max Continuous Discharge Amperage<input onChange={this.handleChange} name="maxContinuousDischargingAmperage" value={this.state.maxContinuousDischargingAmperage} /></label>
          <label htmlFor="ratedDischargingAmperage">Rated Discharging Amperage<input onChange={this.handleChange} name="ratedDischargingAmperage" value={this.state.ratedDischargingAmperage} /></label>
          <label htmlFor="chargingCurrent">Charging Current<input onChange={this.handleChange} name="chargingCurrent" value={this.state.chargingCurrent} /></label>
          <label htmlFor="chargingVoltage">Charging Voltage<input onChange={this.handleChange} name="chargingVoltage" value={this.state.chargingVoltage} /></label>
          <label htmlFor="runTime">Run Time<input onChange={this.handleChange} name="runTime" value={this.state.runTime} /></label>
          <label htmlFor="lifecycle">Lifecycle<input onChange={this.handleChange} name="lifecycle" value={this.state.lifecycle} /></label>
          <label htmlFor="color">Color<input onChange={this.handleChange} name="color" value={this.state.color} /></label>
          <label htmlFor="turning">Turning<input onChange={this.handleChange} name="turning" value={this.state.turning} /></label>
          <label htmlFor="dualDrive">Dual Drive<input onChange={this.handleChange} name="dualDrive" value={this.state.dualDrive} /></label>
          <label htmlFor="bec">Bec<input onChange={this.handleChange} name="bec" value={this.state.bec} /></label>
          <label htmlFor="lipo">Lipo<input onChange={this.handleChange} name="lipo" value={this.state.lipo} /></label>
          <label htmlFor="voltage">Voltage<input onChange={this.handleChange} name="voltage" value={this.state.voltage} /></label>
          <label htmlFor="feature">Feature<input onChange={this.handleChange} name="feature" value={this.state.feature} /></label>
          <label htmlFor="firmwareVersion">Firmware Version<input onChange={this.handleChange} name="firmwareVersion" value={this.state.firmwareVersion} /></label>
          <label htmlFor="parameters">Parameters<input onChange={this.handleChange} name="parameters" value={this.state.parameters} /></label>
          <label htmlFor="continuousCurrent">Continuous Current<input onChange={this.handleChange} name="continuousCurrent" value={this.state.continuousCurrent} /></label>
          <label htmlFor="burstCurrent">Burst Current<input onChange={this.handleChange} name="burstCurrent" value={this.state.burstCurrent} /></label>
        </form>
        <div className="button-container">
          <button onClick={this.handleSave}>Save</button>
          <button onClick={this.props.toggleView}>Cancel</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createItem: item => dispatch(itemActions.itemCreateRequest(item)),
});

export default connect(null, mapDispatchToProps)(CreateItemForm);
