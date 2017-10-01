import React from 'react';
import * as util from '../../../lib/util.js';
import { connect } from 'react-redux';
import * as storeActions from '../../../action/store-actions';
import './_store-settings.scss';


class StoreSettings extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleSubmit(e){
      e.preventDefault();
      this.props.storeSettingsUpdate(this.state);
    }

  handleChange(e){
   let {type, name} = e.target;

     if(name === 'phoneNumber'){
       this.setState({storePhoneNumber: e.target.value});
     }
     if(name === 'address'){
       this.setState({storeAddress: e.target.value});
     }
     if(name === 'city'){
       this.setState({storeCity: e.target.value});
     }
     if(name === 'state'){
       this.setState({storeState: e.target.value});
     }
     if(name === 'zipCode'){
       this.setState({storeZipCode: e.target.value});
     }
     if(name === 'about-us'){
       this.setState({storeAboutUs: e.target.value});
     }
     if(name === 'photoURI'){
       let {files} = e.target;
       let storeLogoURI = files[0];
      //  this.setState({storeLogoURI});
       util.photoToDataURL(storeLogoURI)
         .then(storeLogoURI => this.setState({storeLogoURI}))
         .catch(console.error);
     }
   }

  componentWillMount(){
    this.props.storeSettingsFetch();
  }

  componentWillReceiveProps(props){
    let {header} = props.header
    this.setState(props.header)

  }

  render() {
    return (
      <div>
        <div className='photo-upload-form'>
          <div className='profile-preview'>
            {this.state.storeLogoURI != ''?
              <img className='admin-logo' src={this.state.storeLogoURI} />
              : null }
          </div>
          <div className='form-container'>
          <form
            onSubmit={this.handleSubmit}
          >
            {!this.props.photo ?
              <input
                type='file'
                name='photoURI'
                onChange={this.handleChange}
              />
              :
              null
            }
            <input
              type='text'
              name='phoneNumber'
              placeholder='Phone Number'
              value={this.state.storePhoneNumber}
              onChange={this.handleChange}
            />
            <input
              type='text'
              name='address'
              placeholder='Address'
              value={this.state.storeAddress}
              onChange={this.handleChange}
            />
            <input
              type='text'
              name='city'
              placeholder='City'
              value={this.state.storeCity}
              onChange={this.handleChange}
            />
            <input
              type='text'
              name='state'
              placeholder='State'
              value={this.state.storeState}
              onChange={this.handleChange}
            />
            <input
              type='text'
              name='zipCode'
              placeholder='Zip Code'
              value={this.state.storeZipCode}
              onChange={this.handleChange}
            />
            <textarea
            type='text'
            name='about-us'
            value={this.state.storeAboutUs}
            onChange={this.handleChange}
            >
          </textarea>
            <button type='submit'> Update</button>
          </form>
        </div>
        </div>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  header: state.store,
});

let mapDispatchToProps = (dispatch) => ({
  storeSettingsFetch: () => dispatch(storeActions.storeSettingsFetchRequest()),
  storeSettingsUpdate: (data) => dispatch(storeActions.storeSettingsUpdateRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StoreSettings);
