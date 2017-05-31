// Import libraries for making a component
import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Expand_btn, Button } from './common';
import data from './List.json';

// Make a component
class Breakfast extends Component {
	state = { view_single: true, selected: data[0].icon, selected_text: data[0].text};
		
  expandPress() {
    this.setState({ view_single: false });
  }
  selectItem(item, item_text) {
  	this.setState({ selected: item, selected_text: item_text, view_single: true });
  }
  onButtonPress(item, item_text) {
    console.log('eureka '+item+' '+item_text);
    this.setState({ selected: item, selected_text: item_text, view_single: true });
  }
  
  renderAllData(){
    var selected_flag = <Text></Text>;
    let items = [];
    for (let i = 0; i < data.length; i++) {
      selected_flag = <Text></Text>;
      if(data[i].icon == this.state.selected){
          selected_flag = <Icon name="check-circle" size={30} color="#CE712F" />;
      }
      //console.log(data[i].icon+''+this.state.selected);
      items.push(
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={this.selectItem.bind(this,data[i].icon,data[i].text)} style={{flexDirection: 'row',flex:3}}>
            <Icon name={data[i].icon} size={30} color="#757777" />
            <Text style={styles.textStyle} >{data[i].text}</Text>
          </TouchableOpacity>
          {selected_flag}
        </View>
      );
    }



          
          
        
    
    return (
      <View style={{flexDirection: 'column'}}>
        {items.map((allitems, index) => (
          <View key={index}>
          {allitems}
          </View>
        ))}
      </View>
    );
  }
  renderAll(){
    var bed_flag = <Text></Text>;
    if(this.state.selected === 'bed'){
      bed_flag = <Icon name="check-circle" size={30} color="#CE712F" />;
    }
    var breakfast_flag = <Text></Text>;
    if(this.state.selected === 'coffee'){
      breakfast_flag = <Icon name="check-circle" size={30} color="#CE712F" />;
    }
    return (
      <View style={{padding: 10}}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={this.selectItem.bind(this,'bed')} style={{flexDirection: 'row',flex:3}}>
            <Icon name="bed" size={30} color="#757777" />
            <Text style={styles.textStyle} >Solo la Habitacion</Text>
          </TouchableOpacity>
          <View style={{alignItems: 'flex-end',flex:1}}>
            {bed_flag}
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={this.selectItem.bind(this,'breakfast')} style={{flexDirection: 'row', flex:3}}>
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
    return (
      <View style={{flexDirection: 'row'}}>
        <Icon name={this.state.selected} size={30} color="#757777" />
        <Text style={styles.textStyle} >{this.state.selected_text}</Text>
      </View>
    );
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
        <View style={{padding:10}}>
          {this.renderAllData()}
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
