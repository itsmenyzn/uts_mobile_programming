/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useState} from 'react';
// import {useNavigation} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import EditProfile from './EditProfile';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native';
import Slider from '@react-native-community/slider';

// import FontAwesome from 'react-native-vector-icons/Font'
import Icon from 'react-native-vector-icons/Feather';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {/* Other screens */}
        <Stack.Screen name="Setting" component={SettingScreen} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        {/* Other screens */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const SettingScreen = ({navigation}) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [languageModalVisibility, setLanguageModalVisibility] = useState(false);
  const [fontModalVisibility, setFontModalVisibility] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const handleLanguagePress = language => {
    setSelectedLanguage(language);
    setLanguageModalVisibility(false);
  };

  const languages = [
    'English',
    'Spanish',
    'French',
    'German',
    'Italian',
    'Portuguese',
    'Chinese',
    'Japanese',
    'Korean',
    'Arabic',
    'Russian',
    'Dutch',
    'Swedish',
    'Turkish',
    'Hindi',
    'Bengali',
    'Urdu',
    'Vietnamese',
    'Thai',
    'Indonesian',
  ];

  const [fontSizeValue, setFontSizeValue] = useState('Medium');
  const [sliderValue, setSliderValue] = useState(2);
  const handleSliderChange = value => {
    let newSize = 'Medium';

    if (value < 1) {
      newSize = 'Small';
    } else if (value < 2) {
      newSize = 'Medium';
    } else if (value < 3) {
      newSize = 'Large';
    } else {
      newSize = 'Extra Large';
    }
    setFontSizeValue(newSize);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#212121'}}>
      <ScrollView contentContainerStyle={styles.settingsContainer}>
        <View style={styles.settingsHeader}>
          <Text style={styles.settingsTitle}>Settings</Text>
          <Text style={styles.settingsTitleDescription}>Account</Text>
        </View>

        <View style={styles.profile}>
          <Image
            alt=""
            source={{
              uri: 'https://i.pinimg.com/564x/7b/0f/75/7b0f754e843acda3335c78e9eab28c5b.jpg',
            }}
            style={styles.profileAvatar}
          />

          <View>
            <Text style={styles.profileName}>Adhitya Mahardika</Text>

            <Text style={styles.profileHandle}>adhityamahardika@gmail.com</Text>
          </View>
        </View>

        <View style={styles.rowWrapper}>
          <View style={styles.row}>
            <Icon color="white" name="user" style={styles.rowIcon} size={22} />

            <TouchableOpacity
              onPress={() => navigation.navigate('EditProfile')}>
              <Text style={styles.rowLabel}>Edit Profile</Text>
            </TouchableOpacity>
            <View style={styles.rowSpacer} />
          </View>
          <View style={styles.rowSpacerHorizontal} />
          <View style={styles.row}>
            <Icon color="white" name="globe" style={styles.rowIcon} size={22} />
            <Text style={styles.rowLabel}>Language</Text>
            <View style={styles.rowSpacer} />
            {/* <TouchableOpacity> */}
            <TouchableOpacity onPress={() => setLanguageModalVisibility(true)}>
              <Text style={styles.rowLabelValue}>{selectedLanguage}</Text>
            </TouchableOpacity>
            <Icon
              color="#FFFFFF"
              name="chevron-right"
              style={styles.rowIcon}
              size={22}
            />
            {/* Modal Language */}
            <Modal
              animationType="slide"
              transparent={true}
              visible={languageModalVisibility}
              onRequestClose={() => setLanguageModalVisibility(false)}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}>
                <View style={styles.languageModalContainer}>
                  <View style={styles.languageModalContent}>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignContent: 'center',
                        justifyContent: 'flex-start',
                        paddingTop: 10,
                        paddingRight: 10,
                      }}>
                      <TouchableOpacity
                        onPress={() => setLanguageModalVisibility(false)}>
                        <Icon color="white" name="chevron-left" size={26} />
                      </TouchableOpacity>
                      <Text style={styles.modalLanguageText}>
                        Select Language
                      </Text>
                    </View>
                    <View
                      style={{
                        // backgroundColor: 'red',
                        width: '100%',
                        height: 'auto',
                      }}>
                      <ScrollView style={styles.languageListContainer}>
                        {languages.map((language, index) => (
                          <TouchableOpacity
                            key={index}
                            onPress={() => handleLanguagePress(language)}>
                            <Text style={styles.languageItem}>{language}</Text>
                          </TouchableOpacity>
                        ))}
                      </ScrollView>
                    </View>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
          <View style={styles.rowSpacerHorizontal} />
          <View style={styles.row}>
            <Icon color="white" name="type" style={styles.rowIcon} size={22} />
            <Text style={styles.rowLabel}>Font Size</Text>
            <View style={styles.rowSpacer} />
            <TouchableOpacity onPress={() => setFontModalVisibility(true)}>
              <Text style={styles.rowLabelValue}>{fontSizeValue}</Text>
            </TouchableOpacity>
            {/* Font Size Modal */}
            <Modal
              animationType="slide"
              transparent={true}
              visible={fontModalVisibility}
              onRequestClose={() => setFontModalVisibility(false)}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}>
                <View style={styles.fontModalContainer}>
                  <View style={styles.fontModalContent}>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignContent: 'center',
                        justifyContent: 'flex-start',
                        paddingTop: 10,
                        paddingRight: 10,
                      }}>
                      <TouchableOpacity
                        onPress={() => setFontModalVisibility(false)}>
                        <Icon color="white" name="chevron-left" size={26} />
                      </TouchableOpacity>
                      <Text style={styles.fontModalText}>Select Font Size</Text>
                    </View>
                    <View
                      style={{
                        // backgroundColor: 'red',
                        width: '100%',
                        height: 'auto',
                      }}>
                      <ScrollView style={styles.fontListContainer}>
                        <Text
                          style={{
                            textAlign: 'center',
                            fontSize: fontSizeValue == 'Large' ? 32 : 16,
                            color: 'black',
                          }}>
                          {fontSizeValue}
                        </Text>
                        <Slider
                          style={styles.slider}
                          value={sliderValue}
                          minimumValue={0}
                          maximumValue={3}
                          minimumTrackTintColor="#111"
                          maximumTrackTintColor="#666"
                          onValueChange={handleSliderChange}
                        />
                      </ScrollView>
                    </View>
                  </View>
                </View>
              </View>
            </Modal>
            <Icon
              color="white"
              name="chevron-right"
              style={styles.rowIcon}
              size={22}
            />
          </View>
          <View style={styles.rowSpacerHorizontal} />
          <View style={styles.row}>
            <Icon color="white" name="moon" style={styles.rowIcon} size={22} />
            <Text style={styles.rowLabel}>Dark Mode</Text>
            <View style={styles.rowSpacer} />
          </View>
          <View style={styles.rowSpacerHorizontal} />
          <View style={styles.row}>
            <Icon color="white" name="moon" style={styles.rowIcon} size={22} />
            <Text style={styles.rowLabel}>Switch Account</Text>
            <View style={styles.rowSpacer} />
          </View>
        </View>

        {/* Logout */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisibility}
          onRequestClose={() => setModalVisibility(false)}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTextLogout}>
                  Are You Sure You Want to Log Out?
                </Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={() => setModalVisibility(false)}>
                    <Text style={styles.buttonText}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.logoutButton}>
                    <Text style={styles.logoutText}>Logout</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>
        <View style={styles.rowWrapper}>
          <View style={styles.row}>
            <Icon
              color="#ff0505"
              name="log-out"
              style={styles.rowIcon}
              size={22}
            />
            <Text
              onPress={() => setModalVisibility(true)}
              style={styles.rowLabelDanger}>
              Logout
            </Text>
            <View style={styles.rowSpacer} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {},
  settingsContainer: {
    paddingVertical: 24,
  },
  settingsHeader: {
    paddingHorizontal: 24,
    marginBottom: 12,
  },
  settingsTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: '#FAFAFA',
    marginBottom: 6,
  },
  settingsTitleDescription: {
    fontSize: 15,
    fontWeight: '500',
    color: '#F5F5F5',
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  sectionHeader: {
    padding: 8,
    paddingLeft: 12,
  },
  sectionHeaderText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#adadad',
    textTransform: 'uppercase',
  },
  sectionBody: {
    borderRadius: 12,
    shadowColor: 'rgba(0,0,0,0.25)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  profile: {
    padding: 12,
    marginHorizontal: 10,
    backgroundColor: '#121212',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // borderWidth: 0.74,
    // borderColor: 'white',
    elevation: 4,
    shadowColor: 'rgba(255,255,255,1)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1,
  },
  profileAvatar: {
    width: 60,
    height: 60,
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: 'white',
    marginRight: 12,
    resizeMode: 'contain',
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#F5F5F5',
  },
  profileHandle: {
    marginTop: 2,
    fontSize: 16,
    fontWeight: '400',
    color: '#F5F5F5',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: 24,
    height: 50,
    paddingLeft: 16,
  },
  rowLabelValue: {
    fontSize: 17,
    color: '#ababab',
  },
  rowIcon: {
    marginLeft: 10,
    marginRight: 12,
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: '500',
    color: 'white',
  },
  rowLabelDanger: {
    fontSize: 17,
    fontWeight: '500',
    color: '#ff0505',
  },
  rowWrapper: {
    // paddingLeft: 16,
    backgroundColor: '#121212',
    margin: 10,
    // paddingVertical : 8,
    // paddingHorizontal : 15,
    // marginTop : 10,
    borderRadius: 12,
    // paddingLeft: 24,
    // backgroundColor: '#fff',
    // borderWidth: 1,
    // borderTopWidth: 1,
    // borderBottomWidth: 1,
    // borderColor: 'red',
    elevation: 4,
    shadowColor: 'rgba(255,255,255,0.5)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1,
  },
  rowValue: {
    fontSize: 17,
    color: 'white',
    marginRight: 4,
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    width: 8,
  },
  rowSpacerHorizontal: {
    height: 1, // Set the height of your horizontal spacer
    backgroundColor: '#e0e0e0', // Set your desired gray color
  },
  modalTextLogout: {
    color: '#23272a',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 10,
  },
  modalContainer: {
    width: '94%',
    height: '22%',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,0, 123, 0.325)',
    overflow: 'hidden',
    shadowColor: 'rgba(31, 38, 135, 0.37)',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 32,
    shadowOpacity: 1,
  },
  modalContent: {
    backdropFilter: 'blur(19px)',
    webkitBackdropFilter: 'blur(19px)',
    padding: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    flex: 1,
    marginRight: 5,
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
  },
  logoutButton: {
    flex: 1,
    marginLeft: 5,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: '#F31559',
    borderRadius: 5,
    padding: 10,
  },

  logoutText: {
    textAlign: 'center',
    color: 'white',
  },

  buttonText: {
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.7)',
  },

  languageModalContainer: {
    width: '99%',
    height: '90%',
    // backgroundColor: 'rgba(18, 18, 18, 0.9)',
    backgroundColor: '#191A19',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,

    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 0.74)',
    overflow: 'hidden',
    shadowColor: 'rgba(31, 38, 135, 0.74)',
    shadowOffset: {
      width: 8,
      height: 8,
    },
    shadowRadius: 4,
    shadowOpacity: 1,
  },
  languageModalContent: {
    backdropFilter: 'blur(19px)',
    webkitBackdropFilter: 'blur(19px)',
    // padding: 20
  },
  modalLanguageText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: -1,
    marginLeft: 50,
  },
  languageListContainer: {
    marginVertical: 20,
    padding: 10,
    backgroundColor: '#191A19',
    width: '100%',
    height: 'auto',
    shadowColor: 'rgba(31, 38, 135, 0.74)',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 4,
    shadowOpacity: 0.5,
    elevation: 9,
    // borderTopLeftRadius: 8,
    // borderTopRightRadius: 8,
  },
  languageItem: {
    fontSize: 16,
    color: '#EEEEEE',
    width: 'auto',
    height: 40,
    fontWeight: '400',
    marginVertical: 10,
    borderBottomColor: '#EEEEEE',
    borderBottomWidth: 0.5,
  },

  fontModalContainer: {
    width: '99%',
    height: '30%',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 30,
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 0.74)',
    overflow: 'hidden',
    shadowColor: 'rgba(31, 38, 135, 0.74)',
    shadowOffset: {
      width: 8,
      height: 8,
    },
    shadowRadius: 4,
    shadowOpacity: 1,
  },
  fontModalContent: {
    // backdropFilter: 'blur(19px)',
    // webkitBackdropFilter: 'blur(19px)',
    // padding: 20
  },
  fontModalText: {
    color: '#23272a',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: -1,
    marginLeft: 50,
  },
  fontListContainer: {
    marginVertical: 20,
    padding: 10,
    backgroundColor: 'white',
    width: '100%',
    height: 200,
    shadowColor: 'rgba(31, 38, 135, 0.74)',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 4,
    shadowOpacity: 0.5,
    elevation: 9,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  fontItem: {
    fontSize: 16,
    color: 'black',
    width: 'auto',
    height: 40,
    fontWeight: '400',
    marginVertical: 10,
    borderBottomColor: 'rgba(31, 38, 135, 0.74)',
    borderBottomWidth: 0.5,
  },
  slider: {
    width: 300,
    opacity: 1,
    height: 50,
    marginTop: 10,
  },
});

export default App;
