import React, {useState, useEffect} from 'react';
import {TextInput, View, Picker} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import colors from '../../styles/colors';

import styles from './styles';

const SearchBar = () => {
    useEffect(() => {},[]);
    
    const [selectedValue, setSelectedValue] = useState("java");

    return (
        <View style={styles.viewInput}>
        <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
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