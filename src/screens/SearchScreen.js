import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';

const SearchScreen = ({navigation}) => {
    const [term, setTerm] = useState('');

    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => { 
        return results.filter(result => {
            return result.price === price;
        });
    };


    return (
        <View style={{flex:1}}>
            <SearchBar
                term={term}
                onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            {/* <Text>We have found {results.length} results</Text> */}
            <ScrollView>
                <ResultList results={filterResultsByPrice('$')} title='Cost Effective' navigation={navigation}/>
                <ResultList results={filterResultsByPrice('$$')} title='Bit Pricer' navigation={navigation}/>
                <ResultList results={filterResultsByPrice('$$$')} title='Big Spender' navigation={navigation}/>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;