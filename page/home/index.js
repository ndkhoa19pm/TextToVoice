import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { speak } from "expo-speech";

const Home = () => {
  const [textToRead, setTextToRead] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleReadText = async () => {
    try {
      await speak(textToRead, { language: "vie" });
    } catch (error) {
      console.error("Error reading text:", error);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>
        Enter text to read:
      </Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          padding: 10,
        }}
        onChangeText={(text) => setTextToRead(text)}
        value={textToRead}
      />
      <Button title="Read Text" onPress={handleReadText} />
    </View>
  );
};

export default React.memo(Home);
