import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import InputText from '../../components/Input';
import InputPassword from '../../components/InputPassword';

import styles from './styles';
import GlobalStyles from '../../styles/GlobalStyles';
import Logotipo from '../../assets/Logotipo.png';
import Logo from '../../assets/Logo.png';

function Login({navigation}) {
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    console.log(toggleCheckBox);

    return (
        <KeyboardAvoidingView style={GlobalStyles.container} behavior="position" enabled>
            <View style={styles.header}>  
                <Image source={Logotipo} />
                <Image source={Logo} />
            </View>

            <Text style={styles.textTitleDestaques}>Entregador,</Text>
            <Text style={styles.textTitle}>Você é nosso maior valor</Text>

            <View style={{marginBottom: 20}}>
                <Text style={GlobalStyles.text}>Faça seu login para começar suas entregas.</Text>
            </View>

            <InputText />
            <InputPassword />

            <View style={styles.boxMoreInfo}>
                <View style={styles.buttonCheckBox}>
                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(value) => setToggleCheckBox(true)}
                    />
                    <Text style={styles.textMiniButtons}>Lembrar-me</Text>
                </View>
                <TouchableOpacity
                    onPress={() =>navigation.navigate('ResetPassword')}
                >
                    <Text style={styles.textMiniButtons}>Esqueci minha senha</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity 
                style={GlobalStyles.button}
                onPress={() => navigation.navigate('Dashboard')}
            >
                <Text style={GlobalStyles.textButton}>Entrar</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

export default Login;