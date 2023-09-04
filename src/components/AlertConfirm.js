import React, {useState} from 'react';
import {StyleSheet, View, Text, Pressable, Modal} from 'react-native';

const AlertConfirm = ({onPressConfirm, onPressCancel}) => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <View style={styles.body}>
      <Modal
        visible={showAlert}
        transparent
        onRequestClose={(() => setShowAlert(false), onPressConfirm)}
        animationType="slide"
        hardwareAccelerated>
        <View style={styles.centered_view}>
          <View style={styles.warning_modal}>
            <View style={styles.warning_title}>
              <Text style={styles.text}>WARNING!</Text>
            </View>
            <View style={styles.warning_body}>
              <Text style={styles.text}>
                The name must be longer than 3 charachters
              </Text>
            </View>
            <Pressable
              onPress={(() => setShowAlert(false), onPressConfirm)}
              style={styles.warning_button}
              android_ripple={{color: '#fff'}}>
              <Text style={styles.text}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },

  button: {
    width: 150,
    height: 50,
    alignItems: 'center',
  },
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
  warning_modal: {
    width: 300,
    height: 300,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
  },
  warning_title: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  warning_body: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warning_button: {
    backgroundColor: '#00ffff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

export {AlertConfirm};
