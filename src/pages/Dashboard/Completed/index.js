import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import GlobalStyles from '../../../styles/GlobalStyles';

import SearchBar from '../../../components/SearchBar';
import Card from '../../../components/Card';

import styles from './styles';
import colors from '../../../styles/colors'

function Dashboard({navigation}) {
    return (
        <>
        <View style={styles.background}>
        </View>
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.welcomeUser}>
                    <Text style={styles.text}>Bem vindo,</Text>   
                    <Text style={styles.text}>Marquis Alexander</Text>   
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                >
                    <Icon name="log-in" size={30} color={colors.yellow} />
                </TouchableOpacity>
            </View>

            <View>
                <View style={styles.header}>
                    <Text style={styles.textTitle}>Entregas</Text>
                    <View style={styles.boxMapPin}>
                        <Icon name="map-pin" size={30} color={colors.yellow} style={{marginRight: 10}} />
                        <Text style={styles.text}>Natal</Text>
                    </View>
                </View>
            </View>

            <SearchBar />

            <View style={styles.diviser}>
                <View style={styles.line}></View>
                    <Text style={styles.textLine}>8 Entregas</Text>
                <View style={styles.line}></View>
            </View>

            <TouchableOpacity
                onPress={() => navigation.navigate('Details')}
            >
                <Card 
                    date={'28/08/2020'}
                    title={'Pacote 20'}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Details')}
            >
                <Card 
                    date={'28/08/2020'}
                    title={'Pacote 20'}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Details')}
            >
                <Card 
                    date={'28/08/2020'}
                    title={'Pacote 20'}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Details')}
            >
                <Card 
                    date={'28/08/2020'}
                    title={'Pacote 20'}
                />
            </TouchableOpacity>
        </ScrollView>
        </>
    )
}

export default Dashboard;