import {TouchableOpacity, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import {Column} from './Column';
import {TextDefault} from './TextDefault';

const SquareButton = ({
  icon,
  BaseSvg,
  image,
  myKey,
  typeIcon,
  title,
  description,
  onTap,
  styleButton,
  styleIcon,
  styleTitle,
  styleDescription,
}) => {
  const iconBase = () => {
    switch (typeIcon) {
      case 'community':
        return (
          <IconCommunity
            name={icon}
            size={120}
            style={{...styles.icon, ...styleIcon}}
          />
        );
      case 'svg':
        return <BaseSvg width={80} height={80} />;
      case 'img':
        return <Image style={styles.image} source={{uri: image}} />;
      default:
        return (
          <Icon name={icon} size={120} style={{...styles.icon, ...styleIcon}} />
        );
    }
  };

  return (
    <Column>
      <TouchableOpacity
        style={{...styles.button, ...styleButton}}
        onPress={onTap}
        key={myKey}>
        {iconBase()}
        <TextDefault style={{...styles.title, ...styleTitle}}>
          {title}
        </TextDefault>
        {description != undefined && (
          <TextDefault style={{...styles.description, ...styleDescription}}>
            {description}
          </TextDefault>
        )}
      </TouchableOpacity>
    </Column>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 5,
  },
  icon: {
    color: '#000000',
  },
  title: {
    color: '#3F92C5',
    fontSize: 36,
  },
  description: {
    color: '#8B8B8B',
    fontSize: 16,
  },
  image: {
    width: 80,
    height: 80,
  },
});

export {SquareButton};
