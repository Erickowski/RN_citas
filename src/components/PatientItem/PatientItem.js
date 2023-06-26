import { Text, View } from "react-native";

import { formatDate } from "@Utils";

export const PatientItem = ({ name, date }) => {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{formatDate(date)}</Text>
    </View>
  );
};
