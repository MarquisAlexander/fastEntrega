import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../styles/colors';

import styles from './styles';

function CardData() {
    return (
        <View style={styles.cardData}>
            <View style={styles.header}>
                <Icon name="box" size={20} color={colors.yellow} />
                <Text style={styles.textTitleCard}>Dados</Text>
            </View>

            <Text style={styles.textTitle}>DESTINATÁRIO</Text>
            <Text style={styles.textInfo}>Marquis Alexander</Text>

            <Text style={styles.textTitle}>ENDEREÇO</Text>
            <Text style={styles.textInfo}>Rua da praia do amor, 260</Text>
            <Text style={styles.textInfo}>Natal, RN</Text>
            <Text style={styles.textInfo}>84 999-999</Text>

        </View>
    )   
}

export default CardData;