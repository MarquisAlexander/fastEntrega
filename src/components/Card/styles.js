import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles/colors';

const {height, witdth} = Dimensions.get('window');

const styles = StyleSheet.create({
    card: {
        height: (height * 30) / 100,
        width: '100%',

        borderRadius: 5,
        padding: 20,

        backgroundColor: '#fff'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    pacote: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default styles;