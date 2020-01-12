import React from 'react';
import pic from '../../images/image1.png';

const ProfilePictureSmall = props => {
  return <img src={pic} alt='Avatar' style={styles.imageSmall} />;
};

const ProfilePictureLarge = props => {
  return <img src={pic} alt='Avatar' style={styles.imageLarge} />;
};

const styles = {
  imageSmall: {
    position: 'relative',
    width: `${250 / 5}px`,
    height: `${250 / 5}px`
  },
  imageLarge: {
    position: 'relative',
    width: '10%',
    borderRadius: '80%'
  }
};

export { ProfilePictureSmall, ProfilePictureLarge };
