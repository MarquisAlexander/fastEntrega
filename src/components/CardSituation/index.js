import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../styles/colors';

import styles from './styles';

function CardSituation() {
    return (
        <View style={styles.cardData}>
            <View style={styles.header}>
                <Icon name="alert-circle" size={20} color={colors.yellow} />
                <Text style={styles.textTitleCard}>Situação</Text>
            </View>

            <View style={styles.boxStatus}>
                <View style={styles.boxStatusText}>
                    <Text style={styles.textTitle}>STATUS</Text>
                    <Text style={styles.textInfo}>Aguardando</Text>
                </View>
                <View style={styles.boxStatusText}>
                    <Text style={styles.textTitle}>POSTADO EM</Text>
                    <Text style={styles.textInfo}>01/07/2020</Text>
                </View>
            </View>

            <View style={styles.boxStatus}>
                <View style={styles.boxStatusText}>
                    <Text style={styles.textTitle}>RETIRADA</Text>
                    <Text style={styles.textInfo}>--/--/----</Text>
                </View>
                <View style={styles.boxStatusText}>
                    <Text style={styles.textTitle}>ENTREGA</Text>
                    <Text style={styles.textInfo}>--/--/----</Text>
                </View>
            </View>

        </View>
    )   
}

export default CardSituation;