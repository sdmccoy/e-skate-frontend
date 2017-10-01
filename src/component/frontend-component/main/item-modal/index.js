import React from 'react';
import { connect } from 'react-redux';
import * as util from '../../../../lib/util';
import './_item-modal.scss';
import * as cart from '../../../../action/cart-actions.js';
import uuid from 'uuid/v1';


class ItemModal extends React.Component {
  constructor(props) {
    super(props);
  }

  handleAddToCart(item){
    //creating prototype to pass by value to manage cart item delete
    let cartItem = Object.create(item);
    cartItem.cartNum = uuid();
    this.props.addToCart(cartItem);
  }

  render() {
    let item = this.props.item;
    return (
      <div className='item-modal-background' onClick={this.props.onComplete}>
        <div className='item-modal-content'>
          <div className='modal-header'>
            <img src={item.photoURI} />
            <div className='modal-header-right'>
              <button className='item-modal-close' onClick={this.props.onComplete}>X</button>
              <h4>{item.name}</h4>
              <h4>${item.price}</h4>
              <button className='add-to-cart'
                onClick={()=> this.handleAddToCart(item)}>
                Add to Cart
              </button>
            </div>
          </div>
          <div className='modal-body'>
            <p>{item.description}</p>
            <h6>Features</h6>
            <ul>
              {item.maxSpeed ? <li>Max Speed: {item.maxSpeed}</li> : null}
              {item.maxLoadCapacity ? <li>Max Capacity: {item.maxLoadCapacity}</li> : null}
              {item.chargingTime ? <li>Charging Time: {item.chargingTime}</li> : null}
              {item.transmission ? <li>Transmission: {item.transmission}</li> : null}
              {item.length || item.width || item.height ? <li>Dimensions (cm): L {item.length} x W {item.width} x H {item.height}</li> : null}
              {item.motorPower ? <li>Motor Power: {item.motorPower}</li> : null}
              {item.wheelStyle ? <li>Wheel Style: {item.wheelStyle}</li> : null}
              {item.batteryCapacity ? <li>Battery Capacity: {item.batteryCapacity}</li> : null}
              {item.remote ? <li>Remote: {item.remote}</li> : null}
              {item.autoPowerShutOff ? <li>Auto Shut Off: {item.autoPowerShutOff}</li> : null}
              {item.truckStyle ? <li>Truck Style: {item.truckStyle}</li> : null}
              {item.weight ? <li>Weight: {item.weight}</li> : null}
              {item.climbingAngle ? <li>Climb Angle: {item.climbingAngle}</li> : null}
              {item.voltagePeak ? <li>Voltage Peak: {item.voltagePeak}</li> : null}
              {item.voltageWorking ? <li>Voltage Working: {item.voltageWorking}</li> : null}
              {item.capacity ? <li>Capacity: {item.capacity}</li> : null}
              {item.power ? <li>Power: {item.power}</li> : null}
              {item.cutOffVoltage ? <li>Cut Off Voltage: {item.cutOffVoltage}</li> : null}
              {item.maxDischargingCurrent ? <li>Max Dis. Current: {item.maxDischargingCurrent}</li> : null}
              {item.maxContinuousDischargingAmperage ? <li>Max Cont. Dis. Amp: {item.maxContinuousDischargingAmperage}</li> : null}
              {item.ratedDischargingAmperage ? <li>Discharge Amperage: {item.ratedDischargingAmperage}</li> : null}
              {item.chargingCurrent ? <li>Charging Current: {item.chargingCurrent}</li> : null}
              {item.chargingVoltage ? <li>Charging Voltage: {item.chargingVoltage}</li> : null}
              {item.runTime ? <li>Run Time: {item.runTime}</li> : null}
              {item.lifecycle ? <li>Life Cycle: {item.lifecycle}</li> : null}
              {item.color ? <li>Color: {item.color}</li> : null}
              {item.turning ? <li>Turning Speed: {item.turning}</li> : null}
              {item.dualDrive ? <li>Dual Drive: {item.dualDrive}</li> : null}
              {item.bec ? <li>BEC: {item.bec}</li> : null}
              {item.lipo ? <li>Lipo: {item.lipo}</li> : null}
              {item.voltage ? <li>Voltage: {item.voltage}</li> : null}
              {item.feature ? <li>Feature: {item.feature}</li> : null}
              {item.firmwareVersion ? <li>Firmware: {item.firmwareVersion}</li> : null}
              {item.parameters ? <li>Parameters: {item.parameters}</li> : null}
              {item.continuousCurrent ? <li>Cont. Current: {item.continuousCurrent}</li> : null}
              {item.burstCurrent ? <li>Burst Current: {item.burstCurrent}</li> : null}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({});

let mapDispatchToProps = (dispatch) => ({
  addToCart: (item) => dispatch(cart.addToCart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemModal);
