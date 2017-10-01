import superagent from 'superagent';

//sync actions
//talk to the redux store
export const storeSet = (storesettings) => ({
  type: 'STORE_SET',
  payload: storesettings,
});


export const storeSettingsFetchRequest = () => (dispatch) => {
  return superagent.get(`${__API_URL__}/store`)
    .then((res) => {
      dispatch(storeSet(res.body[0]));
      return res;
    });
};

export const storeSettingsUpdateRequest = (settings) => (dispatch, getState) => {
  let {user} = getState();
  return superagent.put(`${__API_URL__}/store/${settings._id}`)
    .field('phoneNumber', settings.storePhoneNumber)
    .field('address', settings.storeAddress)
    .field('city', settings.storeCity)
    .field('state', settings.storeState)
    .field('zipCode', settings.storeZipCode)
    .field('aboutUs', settings.storeAboutUs)
    .attach('file', settings.storeLogoURI)
    .set('Authorization', `Bearer ${user}`)
    .then(res => {
    });
};
