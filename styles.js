import * as React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // Pencarian
  stylePencarian: {
    flex: 1,
    backgroundColor: '#b9d7ea',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  styleContainerPencarian: {
    width: '90%',
    flexDirection: 'row',
    alignSelf: 'center',
    height: 40,
    alignItems: 'center',
    borderColor: 'lightgray',
    borderWidth: 2,
    borderRadius: 15,
    padding: 10,
    backgroundColor: 'white',
    margin: 15
  },
  styleTabPencarian: {
    height: 35,
    padding: 5,
    marginHorizontal: 10,
    width: '90%',
    fontSize: 16
  },
  styleGambarTombol: {
    height: 90,
    width: '100%',
    marginBottom: 10,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15
  },
  styleTeksTombol: {
    fontSize: 15,
    margin: 'auto',
    textAlign: 'center',
    fontFamily: 'Arial',
    color: 'black'
  },
  styleTombol: {
    margin: 20,
    width: 170,
    borderWidth: 5,
    borderRadius: 15,
    borderColor: "#F7FBFC",
    backgroundColor: '#F7FBFC',
    height: 170
  },

  // HalamanResepMakanan
  styleHalamanResep: {
    backgroundColor: '#b9d7ea',
    padding: 20,
    minHeight: 690
  },
  styleResep: {
    backgroundColor: '#F7FBFC',
    borderRadius: 15,
    padding: 5
  }
});