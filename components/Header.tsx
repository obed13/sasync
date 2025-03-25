import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";
import Avatar from "@/assets/images/ironman.jpg";
import { useNavigation } from "@react-navigation/native";


// tslint:disable-next-line:typedef
const Header = () => {

  // tslint:disable-next-line:typedef
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={styles.wrapper}
      >
        <View style={styles.userInfoWrapper}>
          <Image
            source={Avatar}
            style={styles.userImg}
          />
          <View style={styles.userTxtWrapper}>
            <Text style={[styles.userText, { fontSize: 12 }]}>Hi, Obed</Text>
            <Text style={[styles.userText, { fontSize: 16 }]}>
              E<Text style={styles.boldText}>SAS</Text>
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("transactions")}
          style={styles.btnWrapper}
        >
          <Text style={styles.btnText}>
            My Transactions
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 70,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  userInfoWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  userImg: {
    height: 50,
    width: 50,
    borderRadius: 30,
  },
  userTxtWrapper: {
    marginLeft:10,
  },
  userText: {
    color: Colors.white,
  },
  boldText: {
    fontWeight:"700",
  },
  btnWrapper: {
    borderColor: "#666",
    borderWidth: 1,
    padding: 8,
    borderRadius: 10,
  },
  btnText: {
    color: Colors.white,
    fontSize: 12,
  },
});