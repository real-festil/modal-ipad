import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Button = ({
  icon,
  text,
  width,
  height,
  onPress,
}: {
  icon: ImageSourcePropType;
  text: string;
  width: number;
  height: number;
  onPress?: () => void;
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View>
        <Image style={[styles.icon, {width, height}]} source={icon} />
      </View>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.whiteSpace} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
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
  },
  icon: {},
  text: {
    color: '#20203A',
    fontSize: 14,
    lineHeight: 21,
  },
  whiteSpace: {
    width: 23,
  },
});

export default Button;
