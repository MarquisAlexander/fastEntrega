import React from 'react';
import {TextInput, View} from 'react-native';

import styles from './styles';

const InputText = () => {
    return (
        <View style={styles.viewInput}>
            <TextInput
                style={styles.inputText}
                onChangeText={() => {}}
                placeholder={' Senha'}
                keyboardType='numeric'
                value={''}
            />
        </View>
    )
}

export default InputText;