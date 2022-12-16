import { StyleSheet, Button, View, TextInput } from "react-native";
import { useState } from "react";

function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");
  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new todo..."
        onChangeText={changeHandler}
        value={text}
      />
      <Button
        onPress={() => {
          submitHandler(text);
          setText("");
        }}
        title="Add Todo"
        color="coral"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 3,
    borderBottomColor: "#ddd",
  },
});

export default AddTodo;
