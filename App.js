import React from 'react';
import { StyleSheet, Text, View, Button, Alert, StatusBar } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Pitolino'
    }
  }

  pressBotonsito = () => {
    let title = this.state.title + 'o'
    this.setState({title: title})
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#34495e" barStyle="light-content"/>
        <View style={{marginBottom: 15}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>{this.state.title} &#129315;&#128076;</Text>
        </View>
        <Text>Que mas pito? estoy por acá probando xD</Text>
        <Text>Esta genial crear apps móviles con esto.</Text>
        <Text>Uno sacude el celuco y sale el menu jiji.</Text>
        <View style={styles.botonsito}>
          <Button title="Botonsito" onPress={this.pressBotonsito} color="#34495e" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botonsito: {
    marginTop: 15,
  }
});
