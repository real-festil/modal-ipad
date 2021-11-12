import React, {useState} from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from '../Button';

const Modal = ({title}: {title: string}) => {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const buttons = [
    {
      id: 1,
      text: 'Sign Up with Facebook',
      icon: require('../../assets/fb.png'),
      width: 23,
      height: 23,
    },
    {
      id: 2,
      text: 'Sign Up with Apple',
      icon: require('../../assets/apple.png'),
      width: 23,
      height: 27,
    },
    {
      id: 3,
      text: 'Sign Up with Google',
      icon: require('../../assets/google.png'),
      width: 23,
      height: 23,
    },
    {
      id: 4,
      text: 'Sign Up with E-mail',
      icon: require('../../assets/mail.png'),
      width: 23,
      height: 18,
    },
    {
      id: 5,
      text: 'Sign Up with Phone Number',
      icon: require('../../assets/phone.png'),
      width: 23,
      height: 23,
      onPress: () => setIsInputVisible(!isInputVisible),
    },
  ];

  const onContinue = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <View style={styles.root}>
      <View style={styles.backdrop} />
      <View style={styles.modal}>
        <View style={styles.header}>
          <View style={styles.whiteSpace} />
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity>
            <Image source={require('../../assets/x-circle.png')} />
          </TouchableOpacity>
        </View>
        {isLoading ? (
          <View style={styles.loader}>
            <ActivityIndicator color="#EB2D7C" size={50} />
          </View>
        ) : (
          <View style={styles.content}>
            {isInputVisible ? (
              <React.Fragment>
                <Text style={styles.label}>Phone Number</Text>
                <View style={styles.inputContainer}>
                  <Image
                    style={styles.flag}
                    source={require('../../assets/flag.png')}
                  />
                  <TextInput
                    style={styles.input}
                    keyboardType="phone-pad"
                    placeholder="0700 100 100"
                  />
                  <Image
                    style={styles.approve}
                    source={require('../../assets/approve.png')}
                  />
                </View>

                <View style={styles.lockContainer}>
                  <Image source={require('../../assets/lock.png')} />
                  <Text style={styles.lockText}>
                    Our tutors will not see your phone number unless you choose
                    to allow them.
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.continueButton}
                  onPress={onContinue}>
                  <Text style={styles.continueText}>Continue</Text>
                </TouchableOpacity>
                <View style={styles.separator} />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Image
                  style={styles.xpertia}
                  source={require('../../assets/Xpertia.png')}
                />
                <Text style={styles.description}>
                  Create an account, it’s free. Xpertia is loved by students,
                  parents, and tutors across the country.
                </Text>
              </React.Fragment>
            )}
            {buttons.map(button => (
              <React.Fragment key={button.id}>
                <Button
                  onPress={button.onPress}
                  icon={button.icon}
                  text={button.text}
                  width={button.width}
                  height={button.height}
                />
              </React.Fragment>
            ))}
            <View style={styles.accountContainer}>
              <Text style={styles.accountText}>Already have an account?</Text>
              <TouchableOpacity>
                <Text style={styles.accountButtonText}> Log In</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.privacyContainer}>
              <Text style={styles.privacyText}>
                By creating an account you agree to our
                <Text style={styles.privacyButtonText}> privacy policy </Text>
                and
                <Text style={styles.privacyButtonText}> terms of service.</Text>
              </Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  modal: {
    width: '70%',
    minHeight: '50%',
    backgroundColor: '#fff',
    borderRadius: 18,
  },
  whiteSpace: {
    width: 85,
  },
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 22,
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    color: '#20203A',
  },
  content: {
    paddingHorizontal: 56,
  },
  xpertia: {
    marginTop: 47,
    width: 188,
    height: 57,
  },
  description: {
    fontSize: 12,
    color: '#20203A',
    marginVertical: 20,
  },
  accountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  accountText: {
    fontSize: 12,
    color: '#20203A',
  },
  accountButtonText: {
    color: '#EB2D7C',
    fontSize: 14,
    fontWeight: 'bold',
  },
  privacyContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 78,
    maxWidth: 300,
    alignSelf: 'center',
  },
  privacyText: {
    textAlign: 'center',
    color: '#888995',
    fontSize: 12,
    lineHeight: 16,
  },
  privacyButtonText: {
    color: '#543393',
  },
  label: {
    color: '#20203A',
    opacity: 0.5,
    fontSize: 12,
    marginTop: 26,
  },
  input: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 6,
    paddingHorizontal: 21,
    paddingTop: 16,
    paddingBottom: 13,
    borderBottomColor: 'rgba(0,0,0,0.2)',
    borderBottomWidth: 1,
    borderRightColor: 'rgba(0,0,0,0.2)',
    borderRightWidth: 1,
    marginBottom: 10,
    paddingLeft: 40,
    fontSize: 14,
    lineHeight: 14,
  },
  inputContainer: {
    position: 'relative',
  },
  flag: {
    position: 'absolute',
    top: 25,
    left: 10,
  },
  approve: {
    position: 'absolute',
    top: 25,
    right: 20,
  },
  lockContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lockText: {
    fontSize: 12,
    color: '#20203A',
    marginLeft: 10,
  },
  continueButton: {
    backgroundColor: '#543393',
    width: '100%',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    marginTop: 41,
    marginBottom: 44,
  },
  continueText: {
    color: '#fff',
    fontSize: 14,
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#D6CFE6',
    marginBottom: 30,
  },
  loader: {
    height: '60%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default Modal;
