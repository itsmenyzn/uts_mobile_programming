import React from 'react';
import {PropsWithChildren, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  Image,
  Button,
  Switch,
  Modal,
  TextInput,
  TouchableOpacity,
} from 'react-native';

// import {TextInput} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialIcons';

const EditProfile = ({navigation}) => {
  const [hideCurrentPassword, setHidePass] = useState(true);
  const [hideNewPassword, setNewPass] = useState(true);
  const [nameValue, setNameValue] = useState('Adhitya Mahardika');
  const [emailValue, setEmailValue] = useState('adhityamhrdika@gmail.com');
  const [newPassValue, setNewPassValue] = useState('user123');

  const handleNameChange = text => {
    setNameValue(text);
  };

  const handleEmailChange = text => {
    setEmailValue(text);
  };

  const handlePassChange = text => {
    setNewPassValue(text);
  };
  return (
    <View style={styles.editProfileContainer}>
      <View style={styles.titleContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.editProfileBackBtn}>
          <Icon color="#fff" name="chevron-left" size={30} />
        </TouchableOpacity>
        <Text style={styles.settingsTitle}>Edit Profile</Text>
      </View>
      <ScrollView style={styles.formContainer}>
        <View
          style={{
            alignItems: 'center',
            marginVertical: 22,
          }}>
          <TouchableOpacity>
            <View
              style={{
                elevation: 4,
                backgroundColor: 'white',
                shadowColor: 'black',
                shadowOffset: {width: 3, height: 4},
                shadowOpacity: 1,
                shadowRadius: 4,
                borderRadius: 999,
              }}>
              <Image
                source={{
                  uri: 'https://i.pinimg.com/564x/7b/0f/75/7b0f754e843acda3335c78e9eab28c5b.jpg',
                }}
                style={{
                  height: 140,
                  width: 140,
                  borderRadius: 85,
                  borderWidth: 2,
                  borderColor: '#df0707',
                }}
              />
            </View>

            <View
              style={{
                position: 'absolute',
                bottom: 10,
                right: 10,
                zIndex: 9999,
              }}>
              <View style={styles.imageIconContainer}>
                <Icon name="image" size={20} color="white" />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingVertical: 10,
            paddingHorizontal: 16,
            backgroundColor: '#121212',
            borderRadius: 12,
            elevation: 4,
            shadowColor: 'rgba(255,255,255,0.5)',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.5,
            shadowRadius: 1,
          }}>
          <View
            style={{
              flexDirection: 'column',
              marginBottom: 6,
            }}>
            <Text style={{color: '#df0707'}}>Name</Text>
            <View
              style={{
                height: 44,
                width: '100%',
                borderColor: '#c4c4c4',
                borderWidth: 1,
                borderRadius: 4,
                marginVertical: 6,
                justifyContent: 'center',
                paddingLeft: 8,
              }}>
              <TextInput
                style={styles.textInput}
                value={nameValue}
                onChange={handleNameChange}
                placeholder="Your Name"
                placeholderTextColor="white"
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'column',
              marginBottom: 6,
            }}>
            <Text style={{color: '#df0707'}}>Email</Text>
            <View
              style={{
                height: 44,
                width: '100%',
                borderColor: '#c4c4c4',
                borderWidth: 1,
                borderRadius: 4,
                marginVertical: 6,
                justifyContent: 'center',
                paddingLeft: 8,
              }}>
              <TextInput
                style={styles.textInput}
                value={emailValue}
                onChange={handleEmailChange}
                placeholder="Your Name"
                placeholderTextColor="white"
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'column',
              marginBottom: 6,
            }}>
            <Text style={{color: '#df0707'}}>Current Password</Text>
            <View
              style={{
                height: 44,
                width: '100%',
                borderColor: '#c4c4c4',
                borderWidth: 1,
                borderRadius: 4,
                marginVertical: 6,
                paddingLeft: 8,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TextInput
                secureTextEntry={hideCurrentPassword}
                style={styles.textInput}
                editable={true}
              />
              <Icon
                name={hideCurrentPassword ? 'visibility' : 'visibility-off'}
                size={24}
                style={styles.iconEye}
                color="#aaa"
                onPress={() => setHidePass(!hideCurrentPassword)}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'column',
              marginBottom: 6,
            }}>
            <Text style={{color: '#df0707'}}>New Password</Text>
            <View
              style={{
                height: 44,
                width: '100%',
                borderColor: '#c4c4c4',
                borderWidth: 1,
                borderRadius: 4,
                marginVertical: 6,
                paddingLeft: 8,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TextInput
                secureTextEntry={hideNewPassword}
                style={styles.textInput}
                editable={true}
              />
              <Icon
                name={hideNewPassword ? 'visibility' : 'visibility-off'}
                size={24}
                style={styles.iconEye}
                color="#aaa"
                onPress={() => setNewPass(!hideNewPassword)}
              />
            </View>
          </View>
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <TouchableOpacity style={styles.saveBtn}>
            <Text style={styles.saveText}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  editProfileContainer: {
    // paddingVertical: 24,
    // paddingHorizontal: 12,
    backgroundColor: '#000',
    height: '100%',
  },
  editProfileBackBtn: {
    position: 'relative',
    top: 0,
    left: 0,
  },
  settingsTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#fff',
    marginBottom: 6,
    flex: 1,
    textAlign: 'center',
    marginRight: 30,
    marginTop: 5,
    // marginLeft: 90,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    elevation: 6,
    backgroundColor: '#000',
    // shadowColor: 'black',
    // shadowOffset: {width: 0, height: 6},
    // shadowOpacity: 1,
    // shadowRadius: 6,
    marginHorizontal: 10,
    width: '100%',
    height: 50,
  },
  editProfileAvatar: {
    height: 170,
    width: 170,
    borderRadius: 80,
    borderWidth: 2,
    borderColor: '#df0707',
  },
  avatarContainer: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
  },
  cameraIcon: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  imageIconContainer: {
    backgroundColor: 'rgba(192,202,211,0.75)',
    width: 38,
    height: 38,
    borderRadius: 99,
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'white',
  },
  textInput: {
    color: 'white',
    flex: 1,
  },
  iconEye: {
    marginRight: 30,
  },
  saveBtn: {
    paddingHorizontal: 3,
    paddingVertical: 10,
    width: '40%',
    backgroundColor: '#780909',
    borderRadius: 20,
    marginTop: 20,
  },
  saveText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
    letterSpacing: 1,
    textAlign: 'center',
  },
  formContainer: {
    marginHorizontal: 16,
  },
});

export default EditProfile;
