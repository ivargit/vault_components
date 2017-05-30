import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';
import Stars from './components/Stars';
import Icon from 'react-native-vector-icons/FontAwesome';

import Breakfast from './components/Breakfast';

class App extends Component {
	render() {
		const { container } = styles;
		

	  return (
	      <View style={{flex: 1}}>
          <Header headerText="Componente Desayuno" />
	      	<Breakfast />
          <Header headerText="Componente Estrellas" />
          <View>
            <Text>Stars starCount="2" starColor="yellow"</Text>
            <Stars starCount="2" starColor="yellow" />
          </View>
          <View>
            <Text>Stars starCount="5" starColor="#F3C72D"</Text>
            <Stars starCount="5" starColor="#F3C72D" />
          </View>
          <View>
            <Text>Stars starCount="4" starColor="red"</Text>
            <Stars starCount="4" starColor="red" />
          </View>
          
	      </View>
	  );
	}
}

const styles = {
  container: {
    flex: 1,
    height: 300
  },
  marker: {
    backgroundColor: "#550bbc",
    padding: 5,
    borderRadius: 5,
  },
  text: {
    color: "#FFF",
    fontWeight: "bold"
  }
};

export default App;
