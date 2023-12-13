// Card.js
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Card = ({ title, description, imageSource }) => {
    return (
        <View style={styles.card}>
            {imageSource && (
                <Image source={imageSource} style={styles.cardImage} />
            )}
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 20,
        padding: 20,
        margin: 10,
        backgroundColor: "#2c3e50",
        shadowColor: "#34495e",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 5,
    },
    cardImage: {
        width: "100%",
        height: 200,
        borderRadius: 15,
        marginBottom: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#ecf0f1",
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: "#bdc3c7",
    },
});

export default Card;
