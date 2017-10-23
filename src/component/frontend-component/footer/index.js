import React from 'react';
import { connect } from 'react-redux';
import * as querystring from 'querystring';
import * as storeActions from '../../../action/store-actions';
import './_footer.scss';

class Footer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      storePhoneNumber: '(206) 987-1234',
      storeAddress: '305 Harrison Street',
      storeCity: 'Seattle',
      storeState: 'WA',
      storeZipCode: '98109',
    };
  }

  render() {
    let {storePhoneNumber, storeAddress, storeCity, storeState, storeZipCode} = this.state;
    let googleMapBaseURL='https://www.google.com/maps/embed/v1/place?';
    let googleLoginQuery=querystring.stringify({
      key: 'AIzaSyA5ainXh6JtzUGidES-5hGh9IlkOrrpwpc',
      q:`${this.state.storeAddress},${this.state.storeCity}+${this.state.storeState}`,
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
              <i style={{visibility: 'hidden'}} className="fa fa-map-marker" aria-hidden="true"></i>
              <p className='footer-address-info'>{storeCity}, {storeState} {storeZipCode}</p>
              <button>
                <a href='/admin' target='_blank'>Admin Login</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


let mapStateToProps = (state) => ({
  header: state.store,
});

let mapDispatchToProps = (dispatch) => ({
  storeSettingsFetch: () => dispatch(storeActions.storeSettingsFetchRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
