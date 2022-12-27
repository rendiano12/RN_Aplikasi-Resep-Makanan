import * as React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // Beranda
  styleBeranda: {
    flex: 1,
    backgroundColor: '#b9d7ea',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    minHeight: 195
  },
  styleTeksBeranda: {
    color: '#F7FBFC',
    marginTop: 20,
    marginHorizontal: 35,
    fontSize: 24,
    fontWeight: 'bold'
  },

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
    backgroundColor: '#F7FBFC',
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
    width: 185,
    borderWidth: 5,
    borderRadius: 15,
    borderColor: "#F7FBFC",
    backgroundColor: '#F7FBFC',
    height: 185
  },
  styleContainerModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  styleViewModal: {
    margin: 20,
    backgroundColor: "#F7FBFC",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 5
  },
  styleTeksModal: {
    marginBottom: 15,
    textAlign: "center"
  },

  // HalamanResepMakanan
  styleHalamanResep: {
    backgroundColor: '#b9d7ea',
    padding: 20,
    minHeight: 695
  },
  styleResep: {
    backgroundColor: '#F7FBFC',
    borderRadius: 15,
    padding: 5
  },

  // Favorit
  styleFavorit: {
    flex: 1,
    backgroundColor: '#b9d7ea',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    minHeight: 200
  }
});