import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles/colors';

const {height, witdth} = Dimensions.get('window');

const styles = StyleSheet.create({
    inputText: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#424242',
        height: (height * 8) / 100,
    },
    viewInput: {
        paddingHorizontal: (height * 2) / 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 5,
        marginTop: (height * 3) / 100,
    },
    boxInput: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 5,
        borderBottomStartRadius: 5,
        borderColor: 'gray',
        borderWidth: 1,
    },
    searchIcon: {
        padding: 10,
    },

})

export default styles;