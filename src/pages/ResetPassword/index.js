import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import styles from './styles';
import GlobalStyles from '../../styles/GlobalStyles';
import colors from '../../styles/colors';
import Logotipo from '../../assets/Logotipo.png';
import Logo from '../../assets/Logo.png';

function ResetPassword({navigation}) {

    return (
        <KeyboardAvoidingView style={GlobalStyles.container} behavior="position" enabled>
            <View style={styles.header}>  
                <Image source={Logotipo} />
                <Image source={Logo} />
            </View>

            <Text style={styles.textTitleDestaques}>Esqueceu,</Text>
            <Text style={styles.textTitle}>Sua senha?</Text>

            <Text style={GlobalStyles.text}>Por motivos de segurança,
            para recurá-la, vá até a central
            da distribuidora Fastfeet.</Text>

            <Text style={styles.textSubTitle}>ENDEREÇO</Text>
            <Text style={styles.textInfoLocation}>Rua da praia do amor, 260</Text>
            <Text style={styles.textInfoLocation}>Natal, RN</Text>
            <Text style={styles.textInfoLocation}>84 999-999</Text>

            <TouchableOpacity 
                style={styles.buttonBack}
                onPress={() => navigation.goBack()}
            >
                <Icon name="arrow-left" size={30} color={colors.yellow} />
                <Text style={styles.textButton}>Voltar para o login</Text>
            </TouchableOpacity>

        </KeyboardAvoidingView>
    )
}

export default ResetPassword;