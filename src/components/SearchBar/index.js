import React from 'react';
import {TextInput, View} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import colors from '../../styles/colors';

import styles from './styles';

const SearchBar = () => {
    return (
        <View style={styles.viewInput}>
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