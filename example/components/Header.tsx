import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Cross from "./Cross";
import Heart from "./Heart";
import Progress from "./Progress";
import Character from "./Character";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  sentence_row: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "Nunito-Bold",
    fontSize: 24,
    paddingLeft: 16,
  },
  sentence: {
    fontFamily: "Nunito-Bold",
    fontSize: 16,
    width: 225,
    paddingLeft: 20,
  },
});

const Header = ({ percent, sentence }: { percent: number; sentence: string }) => {
  return (
    <View>
      <View style={styles.row}>
        <Cross />
        <Progress percent={percent} />
        <Heart />
      </View>
      <Text style={styles.title}>Translate this sentence</Text>
      <View style={styles.sentence_row}>
        <Character />
        <Text style={styles.sentence}>{sentence}</Text>
      </View>
    </View>
  );
};

export default Header;
