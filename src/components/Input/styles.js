import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles/colors';

const {height, witdth} = Dimensions.get('window');

const styles = StyleSheet.create({
    inputText: {
        paddingHorizontal: (height * 2) / 100,
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#424242',
        height: (height * 8) / 100,
        
    },
    viewInput: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    boxInput: {
        height: (height * 8) / 100,
        width: 50,
        backgroundColor: '#fff',
        borderTopLeftRadius: 5,
        borderBottomStartRadius: 5,
        borderColor: 'gray',
        borderWidth: 1,
    }

})

export default styles;