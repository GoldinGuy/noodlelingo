import { transform } from "@babel/core";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
// import { useSafeAreaInsets } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#c753f2",
    width: "100%",
    height: 45,
    borderRadius: 16,
    justifyContent: "center",
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(.4,0,.2,1)",
    transitionDuration: ".15s",
  },
  label: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Nunito-Bold",
  },
  hoverBtn: {
    transform: [{ scaleX: 10 }, { scaleY: 10 }],
  },
});

const Footer = ({ submit }: { submit: Function }) => {
  // const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        // paddingBottom: insets.bottom,
        alignItems: "center",
        margin: 16,
      }}
    >
      <View
        style={{
          backgroundColor: "#9f0fd5",
          borderRadius: 16,
          height: 50,
          ...StyleSheet.absoluteFillObject,
        }}
      />
      <RectButton
        onPress={() => submit()}
        style={styles.button} //hoverStyle={styles.hoverBtn}
      >
        <Text style={styles.label}>CHECK</Text>
      </RectButton>
    </View>
  );
};

export default Footer;
