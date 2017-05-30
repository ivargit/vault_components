// Import libraries for making a component
import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { Expand_btn } from './common';

// Make a component
class Breakfast extends Component {
  state = { view_single: true, selected: 'bed_only'};
  expandPress() {
    //const { email, password } = this.state;

    this.setState({ view_single: false });
  }
  selectBreakfast() {
    //this.setState({ selected: item });
    this.setState({ selected: 'breakfast' });
    this.setState({ view_single: true });
  }
  selectBed() {
    this.setState({ selected: 'bed_only' });
    this.setState({ view_single: true });
  }
  renderAll(){
    var bed_only_flag = <Text></Text>;
    if(this.state.selected === 'bed_only'){
      bed_only_flag = <Icon name="check-circle" size={30} color="#CE712F" />;
    }
    var breakfast_flag = <Text></Text>;
    if(this.state.selected === 'breakfast'){
      breakfast_flag = <Icon name="check-circle" size={30} color="#CE712F" />;
    }
    return (
      <View style={{padding: 10}}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={this.selectBed.bind(this)} style={{flexDirection: 'row',flex:3}}>
            <Icon name="bed" size={30} color="#757777" />
            <Text style={styles.textStyle} >Solo la Habitacion</Text>
          </TouchableOpacity>
          <View style={{alignItems: 'flex-end',flex:1}}>
            {bed_only_flag}
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={this.selectBreakfast.bind(this)} style={{flexDirection: 'row', flex:3}}>
            <Icon name="coffee" size={30} color="#757777" />
            <Text style={styles.textStyle} >Desayuno</Text>
          </TouchableOpacity>
          <View style={{alignItems: 'flex-end',flex:1}}>
            {breakfast_flag}
          </View>
        </View>
      </View>
    );
  }
  renderSelected(){
    switch (this.state.selected) {
          case 'breakfast':
            return (
              <View style={{flexDirection: 'row'}}>
                <Icon name="coffee" size={30} color="#757777" />
                <Text style={styles.textStyle} >Desayuno</Text>
              </View>
            );
          default:
            return(
              <View style={{flexDirection: 'row'}}>
                <Icon name="bed" size={30} color="#757777" />
                <Text style={styles.textStyle} >Solo la Habitacion</Text>
              </View>
            );
      }
  }


  
  renderBreakfast(count,colorstar){
    if(this.state.view_single){
      return(
        <View style={{flexDirection: 'row', padding: 10 }}>
          <View style={{flex:3 }}>
            {this.renderSelected()}
          </View>
          <View style={{flex:1, alignItems: 'flex-end' }}>
            <Expand_btn onPress={this.expandPress.bind(this)} />
          </View>
        </View>
      );
    }else{
      return(
        <View>
          {this.renderAll()}
        </View>
      );
    }
    
   
  }
  
  render() {
    const { textStyle, viewStyle } = styles;
    return (
      <View style={viewStyle}>
        {this.renderBreakfast()}
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    
  },
  textStyle: {
    fontSize: 20,
    marginLeft:10
  }
};

export default Breakfast;
