import React from 'react';
import { connect } from 'react-redux';
import * as querystring from 'querystring';
import * as storeActions from '../../../action/store-actions';
import './_footer.scss';

class Footer extends React.Component {
  componentDidMount(){
    console.log('footer props= ',this.props);
  }

  componentWillReceiveProps(nextProps){
    console.log('cwrp nextProps= ', nextProps);
  }

  render() {
    let {storePhoneNumber, storeAddress, storeCity, storeState, storeZipCode} = this.props.header;
    let googleMapBaseURL='https://www.google.com/maps/embed/v1/place?';
    let googleLoginQuery=querystring.stringify({
      key: 'AIzaSyA5ainXh6JtzUGidES-5hGh9IlkOrrpwpc',
      q:`${this.props.header.storeAddress},${this.props.header.storeCity}+${this.props.header.storeState}`,
      zoom:'14',
    });
    let googleLoginURL = `${googleMapBaseURL}${googleLoginQuery}`;
    return (
      <div className='frontend-footer'>
        <div className='footer-container'>
          <div className='footer-column-social'>
            <h3>Follow us</h3>
            <ul className='footer-social'>
              <li className='footer-social-icon'><a href='#' title="Like us on Facebook"><i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i></a>
              </li>
              <li className='footer-social-icon'><a href='#' title="skate tweets"><i className="fa fa-twitter-square fa-2x" aria-hidden="true"></i></a>
              </li>
              <li className='footer-social-icon'><a href='#' title="skate on instagram"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
              </li>
              <li className='footer-social-icon'><a href='#' title="videos by skate"><i className="fa fa-youtube-square fa-2x" aria-hidden="true"></i></a>
              </li>
            </ul>
          </div>
          <div className='footer-column-contact'>
            <h3>Location</h3>
            <div className='google-maps'>
              <iframe
                src={googleLoginURL}>
              </iframe>
            </div>
            <div className='footer-address'>
              <i className="fa fa-phone" aria-hidden="true"></i><p className='footer-address-info'>{storePhoneNumber}</p><br />
              <i className="fa fa-map-marker" aria-hidden="true"></i><p className='footer-address-info'>{storeAddress}</p><br />
              <p className='footer-address-info'>&nbsp;&nbsp;{storeCity}, {storeState} {storeZipCode}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


let mapStateToProps = (state) => {
  console.log('mpstp = ', state);
  return {
    header: state.store,
  };
};

let mapDispatchToProps = (dispatch) => ({
  storeSettingsFetch: () => dispatch(storeActions.storeSettingsFetchRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
