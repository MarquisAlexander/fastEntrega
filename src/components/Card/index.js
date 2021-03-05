import React from 'react';
import {TextInput, View, Text} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import styles from './styles';

const Card = (Title, data) => {
    return (
        <View style={styles.card}>
           <View style={styles.header}>
                <View style={styles.pacote}>
                    <Icon name="box" size={20} color="#000" />
                    <Text>Pacote 03</Text>
                </View>
               <Text>01/07/2021</Text>
           </View>
        </View>
    )
}

export default Card;