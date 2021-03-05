import React from 'react';
import {TextInput, View, Text, TouchableOpacity} from 'react-native';
import colors from '../../styles/colors';

import Icon from 'react-native-vector-icons/Feather';

import styles from './styles';

function Card({title, date}) {
    return (
        <>
            <View style={styles.card}>
                <View style={styles.header}>
                    <View style={styles.pacote}>
                        <Icon name="box" size={20} color={colors.yellow} />
                        <Text style={styles.textTitleCard}>{title}</Text>
                    </View>
                    <Text style={styles.textDataCard}>{date}</Text>
                </View>
            <View style={styles.statusBar}>
                <View style={styles.ball}>
                    <Text style={styles.textBall1}>Agradando</Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.ball}>                    
                    <Text style={styles.textBall2}>Retirado</Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.ball}>                    
                    <Text style={styles.textBall3}>Entregue</Text>
                </View>
            </View>
            </View>
            <View style={styles.rodape}>
                    <Text style={styles.textRodape}>Detalhes</Text>
                    <Icon name="arrow-right" size={20} color={colors.textTitle} />
            </View>
        </>
    )
}

export default Card;