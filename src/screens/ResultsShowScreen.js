import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => { 
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <View style={{flex: 1}}>
            <Text style={styles.name}>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{uri:item}} /> 
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    name: {
        fontSize: 25,
        fontWeight: 'bold',
        padding: 10
    },
    image: {
        height: 200,
        width: 300,
        margin: 15
    }
});

export default ResultsShowScreen;