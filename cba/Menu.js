import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import Snackbar from 'react-native-snackbar';

function showSnackbar() {
  Snackbar.show({
    text: 'Berhasil Menghapus',
    duration: Snackbar.LENGTH_LONG,
    action: {
      text: 'UNDO',
      textColor: 'green',
      onPress: () => {
        {/* Do Something */ }
      },
    },
  });
}

function Menu(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect4StackStack}>
        <View style={styles.rect4Stack}>
          <View style={styles.rect4}>
            <View style={styles.rect5Row}>
              <View style={styles.rect5}></View>
              <View style={styles.rect6Stack}>
                <View style={styles.rect6}></View>
                <TouchableOpacity onPress={() => props.navigation.navigate("Proteksi")}>
                  {/* <Image
                    source={require("../assets/images/Pelayanan_Kesehatan_(3).png")}
                    resizeMode="contain"
                    style={styles.image9}
                  ></Image>*/}
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.rect7Row}>
              <View style={styles.rect7}></View>
              <View style={styles.rect8}></View>
            </View>
          </View>
          <TouchableOpacity onPress={() => props.navigation.navigate("Proteksi")}>
            {/* <Image
              source={require("../assets/images/Pelayanan_Kesehatan_(5).png")}
              resizeMode="contain"
              style={styles.image11}
            ></Image>*/}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate("Proteksi")}>
            {/* <Image
              source={require("../assets/images/Pelayanan_Kesehatan_(4)2.png")}
              resizeMode="contain"
              style={styles.image13}
            ></Image>*/}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate("Proteksi")}>
            {/* <Image
              source={require("../assets/images/Pelayanan_Kesehatan_(2)5.png")}
              resizeMode="contain"
              style={styles.image12}
            ></Image>*/}
          </TouchableOpacity>
        </View>
        <View style={styles.rect2Stack}>
          <View style={styles.rect2}>
            <View style={styles.image6Row}>
              <TouchableOpacity onPress={() => props.navigation.navigate("Proteksi")}>
                {/* <Image
                  source={require("../assets/images/png-clipart-user-profile-computer-icons-others-miscellaneous-black_prev_ui.png")}
                  resizeMode="contain"
                  style={styles.image6}
                ></Image> */}
              </TouchableOpacity>
              <Text style={styles.selamatDatang}>Selamat Datang</Text>
              <View style={styles.iconStack}>
                <Icon name="menu" style={styles.icon}></Icon>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate("Home")}
                  style={styles.button}
                ></TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.rect}></View>
          <TouchableOpacity onPress={() => props.navigation.navigate("Proteksi")}>
            {/* <ImageBackground
              source={require("../assets/images/19578dced9d36f3-removebg-preview.png")}
              resizeMode="contain"
              style={styles.image}
              imageStyle={styles.image_imageStyle}
            >
              <Text style={styles.loremIpsum}>Billy Nabila Ramadhan</Text>
            </ImageBackground> */}
          </TouchableOpacity>
        </View>
        <View style={styles.rect3Stack}>
          <View style={styles.rect3}>
            <View style={styles.proteksiStackRow}>
              <View style={styles.proteksiStack}>
                <Text style={styles.proteksi}>Proteksi</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate("Proteksi")}>
                  {/* <Image
                    source={require("../assets/images/Screenshot_2022-11-08-13-14-23-99_caffec57d37f41bea93e9059f3d83687_prev_ui.png")}
                    resizeMode="contain"
                    style={styles.image2}
                  ></Image> */}
                </TouchableOpacity>
              </View>
              <Text style={styles.apotek}>Apotek</Text>
              <Text style={styles.cekLab}>Cek Lab</Text>
              <View style={styles.lainyaStack}>
                <Text style={styles.lainya}>Lainya</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate("Proteksi")}>
                  {/* <Image
                    source={require("../assets/images/Screenshot_2022-11-08-14-42-04-67_caffec57d37f41bea93e9059f3d83687_prev_ui.png")}
                    resizeMode="contain"
                    style={styles.image7}
                  ></Image> */}
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={() => props.navigation.navigate("Proteksi")}>
            {/* <Image
              source={require("../assets/images/IMG_20221108_131339_prev_ui.png")}
              resizeMode="contain"
              style={styles.image3}
            ></Image>*/}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            // props.navigation.navigate("Proteksi");
            showSnackbar();
          }}>
            {/* <Image
              source={require("../assets/images/Screenshot_2022-11-08-13-14-05-64_caffec57d37f41bea93e9059f3d83687_prev_ui.png")}
              resizeMode="contain"
              style={styles.image4}
            ></Image> */}<Text>Show snackbar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect4: {
    top: 11,
    left: 2,
    width: 347,
    height: 250,
    position: "absolute",
    backgroundColor: "rgba(171,185,185,1)",
    borderRadius: 15
  },
  rect5: {
    width: 134,
    height: 87,
    backgroundColor: "#cbd9f1",
    borderRadius: 15,
    marginTop: 24
  },
  rect6: {
    top: 24,
    left: 0,
    width: 137,
    height: 87,
    position: "absolute",
    backgroundColor: "#cbd9f1",
    borderRadius: 15
  },
  image9: {
    top: 0,
    left: 0,
    width: 144,
    height: 134,
    position: "absolute",
    backgroundColor: "rgba(15,15, 15,0)"
  },
  rect6Stack: {
    width: 144,
    height: 134,
    marginLeft: 44
  },
  rect5Row: {
    height: 134,
    flexDirection: "row",
    marginLeft: 16,
    marginRight: 9
  },
  rect7: {
    width: 134,
    height: 87,
    backgroundColor: "rgba(203,217,241,1)",
    borderRadius: 15
  },
  rect8: {
    width: 129,
    height: 87,
    backgroundColor: "rgba(203,217,241,1)",
    borderRadius: 15,
    marginLeft: 52
  },
  rect7Row: {
    height: 87,
    flexDirection: "row",
    marginTop: 6,
    marginLeft: 16,
    marginRight: 16
  },
  image11: {
    top: 129,
    left: 196,
    width: 152,
    height: 146,
    position: "absolute",
    backgroundColor: "rgba(15,15, 15,0)"
  },
  image13: {
    top: 133,
    left: 0,
    width: 169,
    height: 137,
    position: "absolute"
  },
  image12: {
    top: 0,
    left: 8,
    width: 155,
    height: 157,
    position: "absolute"
  },
  rect4Stack: {
    top: 380,
    left: 18,
    width: 349,
    height: 275,
    position: "absolute"
  },
  rect2: {
    top: 0,
    left: 12,
    width: 360,
    height: 254,
    position: "absolute",
    backgroundColor: "rgba(0,206,209,1)",
    borderRadius: 48,
    flexDirection: "row"
  },
  image6: {
    width: 83,
    height: 68
  },
  selamatDatang: {
    fontFamily: "abyssinica-sil-regular",
    color: "#121212",
    height: 19,
    width: 109,
    fontSize: 14,
    marginTop: 19
  },
  icon: {
    top: 0,
    left: 2,
    position: "absolute",
    color: "rgba(24,25,25,1)",
    fontSize: 32,
    height: 35,
    width: 32
  },
  button: {
    top: 0,
    left: 0,
    width: 37,
    height: 39,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  iconStack: {
    width: 37,
    height: 39,
    marginLeft: 106,
    marginTop: 17
  },
  image6Row: {
    height: 68,
    flexDirection: "row",
    flex: 1,
    marginRight: 25
  },
  rect: {
    top: 99,
    left: 46,
    width: 307,
    height: 161,
    position: "absolute",
    backgroundColor: "rgba(171,185,185,1)",
    borderRadius: 15
  },
  image: {
    top: 21,
    left: 0,
    width: 400,
    height: 370,
    position: "absolute"
  },
  image_imageStyle: {},
  loremIpsum: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 28,
    width: 189,
    fontSize: 18,
    marginTop: 18,
    marginLeft: 95
  },
  rect2Stack: {
    top: 0,
    left: 0,
    width: 400,
    height: 391,
    position: "absolute"
  },
  rect3: {
    top: 17,
    left: 0,
    width: 347,
    height: 79,
    position: "absolute",
    backgroundColor: "rgba(171,185,185,1)",
    borderRadius: 15,
    flexDirection: "row"
  },
  proteksi: {
    top: 52,
    left: 17,
    position: "absolute",
    fontFamily: "abyssinica-sil-regular",
    color: "#121212",
    height: 18,
    width: 42,
    fontSize: 11
  },
  image2: {
    top: 0,
    left: 0,
    width: 76,
    height: 56,
    position: "absolute"
  },
  proteksiStack: {
    width: 76,
    height: 70
  },
  apotek: {
    fontFamily: "abyssinica-sil-regular",
    color: "#121212",
    height: 14,
    width: 38,
    fontSize: 11,
    marginLeft: 27,
    marginTop: 52
  },
  cekLab: {
    fontFamily: "abyssinica-sil-regular",
    color: "#121212",
    height: 16,
    width: 43,
    fontSize: 11,
    marginLeft: 43,
    marginTop: 53
  },
  lainya: {
    top: 50,
    left: 17,
    position: "absolute",
    fontFamily: "abyssinica-sil-regular",
    color: "#121212",
    height: 19,
    width: 41,
    fontSize: 11
  },
  image7: {
    top: 0,
    left: 0,
    width: 66,
    height: 53,
    position: "absolute"
  },
  lainyaStack: {
    width: 66,
    height: 69,
    marginLeft: 27,
    marginTop: 1
  },
  proteksiStackRow: {
    height: 70,
    flexDirection: "row",
    flex: 1,
    marginRight: 11,
    marginLeft: 16
  },
  image3: {
    top: 13,
    left: 107,
    width: 63,
    height: 57,
    position: "absolute"
  },
  image4: {
    top: 0,
    left: 187,
    width: 70,
    height: 69,
    position: "absolute"
  },
  rect3Stack: {
    top: 272,
    left: 20,
    width: 347,
    height: 96,
    position: "absolute"
  },
  rect4StackStack: {
    width: 400,
    height: 655,
    marginTop: 29,
    marginLeft: -12
  }
});

export default Menu;
