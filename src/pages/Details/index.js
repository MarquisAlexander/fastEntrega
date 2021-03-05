import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import CardData from '../../components/CardData';
import CardSituation from '../../components/CardSituation';

import colors from '../../styles/colors';
import GlobalStyles from '../../styles/GlobalStyles';
import styles from './styles';

function Details({navigation}) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <TouchableOpacity 
                    style={styles.header}
                    onPress={() => navigation.navigate('Dashboard')}
                >
                    <Icon name="arrow-left" size={20} color={colors.blue} />
                    <View style={styles.boxHeaderText}>
                        <Text style={styles.textHeader}>Detalhes</Text>
                    </View>
                </TouchableOpacity>

               <CardData />

               <CardSituation />

               <TouchableOpacity 
                    style={GlobalStyles.button}
                    onPress={() => navigation.navigate('Dashboard')}
                >
                    <Text style={GlobalStyles.textButton}>Retirar pacote</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Details;