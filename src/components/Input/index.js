import React from 'react';
import {TextInput, View} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import styles from './styles';

const InputText = () => {
    return (
        <View style={styles.viewInput}>
            <TextInput
                style={styles.inputText}
                onChangeText={() => {}}
                placeholder={' CPF'}
                keyboardType='numeric'
                value={''}
            />
        </View>
    )
}

export default InputText;