// Import libraries for making a component
import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Make a component
class Stars extends Component {

  
  renderStars(count,colorstar){
    let items = [];
    for (let i = 0; i < count; i++) {
      //items.push(<Image source={{uri:'http://vissiontek.com/hotels/star.png'}} style= {{height: 18, width: 18}} />);
      items.push(<Icon name="star" size={30} color={colorstar} />);
    }
    return (
    <View style={{flexDirection: 'row'}}>
      {items.map((estrella, index) => (
        <View key={index}>{estrella}</View>
      ))}
    </View>);
  }
  
  render() {
    const { textStyle, viewStyle } = styles;
    return (
      <View style={viewStyle}>
        {this.renderStars(this.props.starCount, this.props.starColor)}
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    
  },
  textStyle: {
    fontSize: 20
  }
};

export default Stars ;
