import React from 'react';
import {StyleSheet, View, Text, Pressable, Modal} from 'react-native';
import {ButtonDefault} from './ButtonDefault';
import {Row} from './Row';
import {TextDefault} from './TextDefault';
import {Column} from './Column';

const AlertConfirm = ({
  onPressConfirm,
  onPressCancel,
  showAlert,
  setShowAlert,
}) => {
  return (
    <Modal
      visible={showAlert}
      transparent={true}
      onRequestClose={() => {
        setShowAlert(!showAlert);
      }}
      animationType="fade"
      hardwareAccelerated>
      <View style={styles.centered_view}>
        <Column style={styles.warning_modal}>
          <TextDefault style={styles.text}>
            Tem certeza de apagar essa pesquisa?
          </TextDefault>
          <Row>
            <ButtonDefault
              onTap={() => {
                setShowAlert(!showAlert);
              }}
              text="SIM"
              style={{...styles.button, ...styles.button_yes}}
              titleStyle={styles.button.title}
            />
            <View style={{width: 10}} />
            <ButtonDefault
              onTap={() => {
                setShowAlert(!showAlert);
              }}
              text="CANCELAR"
              style={{...styles.button, ...styles.button_cancel}}
              titleStyle={styles.button.title}
            />
          </Row>
        </Column>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
  button: {
    height: 50,
    width: 140,
    justifyContent: 'center',
    title: {
      fontSize: 24,
    },
  },
  button_yes: {
    backgroundColor: '#FF8383',
  },
  button_cancel: {
    backgroundColor: '#3F92C5',
  },
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
  warning_modal: {
    width: 320,
    height: 160,
    backgroundColor: '#2B1F5C',
    justifyContent: 'space-evenly',
  },
});

export {AlertConfirm};
