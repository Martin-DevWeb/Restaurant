import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

import ResultsDetail from './ResultsDetail';
import {useNavigation} from '@react-navigation/native';

const ResultsList = ({title, results}) => {
    const navigation = useNavigation();

    if(!result.lenght) {
        return null
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={result => result.id}
            renderItem={({ item })=>{
                return (
                    <TouchableOpacity
                    onPress={()=> navigation.push('Results Show', {id: item.id})}
                    >
                        <ResultsDetail result={item}/>
                    </TouchableOpacity>
                )
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title : {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15
    },
    container: {
        marginBottom: 10
    }
})

export default ResultsList;