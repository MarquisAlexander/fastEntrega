import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../../styles/colors';

const {height, width} = Dimensions.get('window');

const Styles = StyleSheet.create({
    container: {
        height: (height * 30) / 100,
        paddingHorizontal: 20,
        
    },
    background: {
        backgroundColor: colors.blue,        
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: (height * 5) / 100,
        alignItems: 'center',
    },
    welcomeUser: {

    },
    text: {
        color: colors.textTitle,
        fontFamily: 'Inter-Regular',
        fontSize: (width * 3) / 100,
    },
    textTitle: {
        color: colors.textTitle,
        fontFamily: 'Inter-Bold',
        fontSize: (width * 10) / 100,
    },
    boxMapPin: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    diviser: {
        flexDirection: 'row',
        alignItems: 'center',
    }, 
    line: {
        flex: 1,
        height: 1,
        width: '100%',
        backgroundColor: colors.textComplement
    },
    textLine: {
        padding: 15,
        fontFamily: 'Inter-Regular',
        color: colors.textComplement,
        fontSize: (height * 2.5) / 100,
    }
})

export default Styles;