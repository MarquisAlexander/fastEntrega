import React, {useState, useEffect} from 'react';
import {TextInput, View, Picker} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import api from '../../services/api';
import colors from '../../styles/colors';

import styles from './styles';

const SearchBar = () => {

    const [selectedValue, setSelectedValue] = useState("java");
    const [city, setCity] = useState([]);

    useEffect(() => {
        api.get('address/city').then((response) => {
            console.log('minha consulta ',response.data);
            setCity(response.data);
        })
    },[]);


    return (
        <View style={styles.viewInput}>
        <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        {city.forEach((data) => {
        <Picker.Item label={data.name} value={data.name} />
        })}

      </Picker>
            <TextInput
                style={styles.inputText}
                onChangeText={() => {}}
                placeholder={'  Filtrar por bairro'}
                value={''}
            />
            <Icon style={styles.searchIcon} name="search" size={20} color={colors.textComplement} />
        </View>
    )
}

export default SearchBar;