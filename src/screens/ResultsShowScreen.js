import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, Image, FlatList } from 'react-native';
import yelp from '../api/yelp';

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
        marginLeft: 30,
        marginTop: 15,
        marginBottom: 15
    },
    text: {
        marginTop: 15,
        marginBottom: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24
    }
})

const ResultShowScreen = ({route}) => {
    const [result, setResult] = useState(null)
    const {id} = route.params;

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data)
    };

    useEffect(()=>{
        getResult(id)
    }, [])

    if(!result) {
        return null;
    }

    return (
        <>
            <Text style={styles.text}>{result.name}</Text>
            <FlatList
            data={result.photos}
            keyExtractor={(photo)=>photo}
            renderItem={({ item })=>{
                return <Image style={styles.image} source={{uri: item}}/>
            }}
            />
        </>
    )
}

export default ResultShowScreen;