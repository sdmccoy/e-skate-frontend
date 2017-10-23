import superagent from 'superagent';

//sync actions
//talk to the redux store
export const storeSet = (storesettings) => ({
  type: 'STORE_SET',
  payload: storesettings,
});

export const storeUpdate = (storeSettings) => ({
  type: 'STORE_UPDATE',
  payload: storeSettings,
});

export const storeSettingsSetRequest = (settings) => (dispatch, getState) => {
  //auth the user
  let {user} = getState();
  let photo = settings.storeLogoURI;
  delete settings.storeLogoURI;

  return superagent.post(`${__API_URL__}/store`)
    .set('Authorization', `Bearer ${user}`)
    .field('phoneNumber', settings.storePhoneNumber)
    .field('address', settings.storeAddress)
    .field('city', settings.storeCity)
    .field('state', settings.storeState)
    .field('zipCode', settings.storeZipCode)
    .field('aboutUs', settings.storeAboutUs)
    .attach('file', photo)
    .then((res) => {
      console.log('store post res: ', res);
    });
};

export const storeSettingsFetchRequest = () => (dispatch) => {
  return superagent.get(`${__API_URL__}/store`)
    .then((res) => {
      console.log('res store: ', res.body.length);
      dispatch(storeSet(res.body[0]));
      return res;
    });
};

export const storeSettingsUpdateRequest = (settings) => (dispatch, getState) => {
  console.log('hit store update');
  console.log('settings: ', settings);
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
