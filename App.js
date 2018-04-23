import React from 'react';
import { StyleSheet, Text, TextInput, Picker, View } from 'react-native';
const translate = require('google-translate-api');

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      	<Text>Pick a language to translate to:</Text>
      	<TextInput placeholder ="Type here!"/>
      	<Picker selectedValue={this.state.language}
      	style={{ height: 50, width: 100 }}
  		onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
  		<Picker.Item label="Spanish" value="spanish" />
  		<Picker.Item label="French" value="french" />
  		<Picker.Item label="German" value="german" />
</Picker>

        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bbdbe5',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30
  },
});
