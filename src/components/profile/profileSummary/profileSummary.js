import React from 'react';
import {Actions} from 'react-native-router-flux';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import defaultProfileImage from '../../../../images/default-user-image.png';

const renderIf = cond => elm => cond ? elm : null;

function ProfileSummary({
  user,
  onPickProfileImage,
  uploadingProfileImage,
  exploreFriends
}) {

  const userData = user.auth0 ? user.favez : user;
  const picture = user.auth0 ? user.auth0.picture : '';
  const {
    //id,
    displayname,
    username,
    profile,
    followers,
    following,
    image,
    imageStatus
  } = userData;

return (
  <View style={styles.ProfileSummaryContainer}>
    <View
      style={styles.ProfileSummaryRow1}
    >
      <TouchableOpacity
          style={styles.ProfileSummaryRow1LeftContent}
          onPress={exploreFriends}
      >
        <Text style={styles.ProfileSummaryRow1LeftNum}>{followers ? followers.length.toString() : 0}</Text>
        <Text style={styles.ProfileSummaryRow1LeftText}>{'followers'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPickProfileImage}
        style={styles.ProfileSummaryRow1CenterContent}
      >
        <View style={styles.avatarView}>
          <Image
            style={styles.ProfileSummaryRow1Avatar}
            source={getProfileImage(imageStatus, image, picture, uploadingProfileImage)}
          />
          {renderIf(imageStatus === 'uploading' || imageStatus === 'prefetching')(<View style={styles.indicatorWrapper}>
            <ActivityIndicator
              animating={true}
              style={[styles.indicator, {height: 90}]}
              size={'large'}
            />
          </View>)}
        </View>
      </TouchableOpacity>

      <TouchableOpacity
          style={styles.ProfileSummaryRow1RightContent}
          onPress={exploreFriends}
      >
        <Text style={styles.ProfileSummaryRow1RightNum}>{following ? following.length.toString() : 0}</Text>
        <Text style={styles.ProfileSummaryRow1RightText}>{'following'}</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.ProfileSummaryRow2}>
      <Text style={styles.ProfileSummaryRow2Username}>{'@' + username}</Text>
      <Text style={styles.ProfileSummaryRow2Name}>{displayname}</Text>
      <View style={styles.ProfileSummaryRow2Bar}></View>
      <Text style={styles.ProfileSummaryRow2Caption}>{profile}</Text>
    </View>
  </View>
  );
}

function getProfileImage(imageStatus, favezImage, auth0Picture, uploadingProfileImage) {
  let imageUri = null;
  if (imageStatus === 'uploading' || imageStatus === 'prefetching') {
    imageUri = uploadingProfileImage;
  }
  if (favezImage) imageUri = favezImage;
  else if(auth0Picture) imageUri = auth0Picture;

  return (!!imageUri) ? {uri: imageUri} : defaultProfileImage;
}

const styles = StyleSheet.create({
  ProfileSummaryContainer: {
    // alignItems: 'center',
    // borderBottomColor: 'rgba(0, 0, 0, .15)',
    // borderBottomWidth: Platform.OS === 'ios' ? StyleSheet.hairlineWidth : 0,
    // elevation: 4,
    // // flex: 1,
    // width: 375,
    // flexDirection: 'row',
    // justifyContent: 'flex-start',
  },
  ProfileSummaryRow1: {
    flex: 1,
    width: 375,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  ProfileSummaryRow1LeftContent: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  ProfileSummaryRow1LeftNum: {
    fontFamily: 'Hind-Bold',
    fontSize: 15,
    height: 17
  },
  ProfileSummaryRow1LeftText: {
    fontFamily: 'Hind-Medium',
    fontSize: 15
  },
  ProfileSummaryRow1CenterContent: {
    flex: 1,
    padding: 15,
    alignItems: 'center'
  },
  ProfileSummaryRow1Avatar: {
    width: 90,
    height: 90,
    borderRadius: 45
  },
  ProfileSummaryRow1RightContent: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  ProfileSummaryRow1RightNum: {
    fontFamily: 'Hind-Bold',
    fontSize: 15,
    height: 17
  },
  ProfileSummaryRow1RightText: {
    fontFamily: 'Hind-Medium',
    fontSize: 15
  },
  ProfileSummaryRow2: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  ProfileSummaryRow2Username: {
    fontSize: 20,
    fontFamily: 'Hind-Bold',
    height: 25
  },
  ProfileSummaryRow2Name: {
    fontSize: 14,
    fontFamily: 'Hind-Bold'
  },
  ProfileSummaryRow2Bar: {
    width: 50,
    marginTop: 10,
    height: 7,
    backgroundColor: '#f1f1f1'
  },
  ProfileSummaryRow2Caption: {
    marginTop: 10,
    fontFamily: 'Hind-Regular',
    fontSize: 14,
    color: '#b8b8b8'
  },
  avatarView: {
    width: 90,
    height: 90
  },
  indicatorWrapper: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0
  },
  indicator: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8
  }
});

export default ProfileSummary;
