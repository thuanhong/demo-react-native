import { PropTypes } from 'prop-types';
import React, { Component, useEffect, useState } from 'react';
import { Dimensions, Keyboard, StyleSheet, TextInput, UIManager } from 'react-native';
import Animated, {Easing} from 'react-native-reanimated';

const { State: TextInputState } = TextInput;

const KeyboardShift = (props) => {

  const shift = new Animated.Value(0);

  const { children } = props;

  handleKeyboardDidShow = (event) => {
    const { height: windowHeight } = Dimensions.get('window');
    const keyboardHeight = event.endCoordinates.height;
    const currentlyFocusedField = TextInputState.currentlyFocusedField();
    UIManager.measure(currentlyFocusedField, (originX, originY, width, height, pageX, pageY) => {
      const fieldHeight = height;
      const fieldTop = pageY;
      const gap = (windowHeight - keyboardHeight) - (fieldTop + fieldHeight);
      if (gap >= 0) {
        return;
      }
      Animated.timing(
        shift,
        {
          toValue: gap,
          duration: 1000,
          easing: Easing.inOut(Easing.ease)
        }
      ).start();
    });
  }

  handleKeyboardDidHide = () => {
    Animated.timing(
      shift,
      {
        toValue: 0,
        duration: 1000,
        easing: Easing.inOut(Easing.ease)
      }
    ).start();
  }

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', handleKeyboardDidShow);
    Keyboard.addListener('keyboardDidHide', handleKeyboardDidHide);

    return () => {
      Keyboard.removeListener('keyboardDidShow', handleKeyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', handleKeyboardDidHide);
    }
  }, [])

  return (
    <Animated.View style={[styles.container, { transform: [{translateY: shift}] }]}>
      {children()}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%'
  }
});

KeyboardShift.propTypes = {
  children: PropTypes.func.isRequired,
};

export default KeyboardShift;
