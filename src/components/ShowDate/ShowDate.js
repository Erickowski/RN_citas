import { View, Text } from "react-native";

import styles from "./styles";

export const ShowDate = ({ date }) => {
  return (
    <View style={styles.date}>
      {[
        { value: date ? date.getDate() : "?" },
        { value: date ? date.getMonth() + 1 : "?" },
        { value: date ? date.getFullYear() : "?" },
      ].map((el, index) => {
        return (
          <View style={styles.datePart} key={index}>
            <Text style={styles.digit}>{el.value}</Text>
          </View>
        );
      })}
    </View>
  );
};
