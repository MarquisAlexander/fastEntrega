import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles/colors';

const {height, witdth} = Dimensions.get('window');

const styles = StyleSheet.create({
    card: {
        height: (height * 20) / 100,
        width: '100%',

        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        padding: 20,

        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    pacote: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textTitleCard: {
        marginLeft: 5,

        color: colors.textTitle,

        fontFamily: 'Inter-Bold',
        fontSize: (height * 3) / 100,
    },
    textDataCard: {
        color: colors.textBase,
        fontSize: (height * 2) / 100,
    },
    rodape: {
        backgroundColor: colors.yellowLow,

        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: (height * 4) / 100,
        paddingVertical: (height * 2) / 100,
        marginBottom: (height * 3) / 100,

    },
    textRodape: {
        fontSize: (height * 2) / 100,
        fontFamily: 'Inter-Regular',
    },
    statusBar: {
        marginTop: 40,
        flexDirection: 'row',
        alignItems: 'center'
    },
    line: {
        height: 2,
        width: '40%',
        backgroundColor: colors.green,
    },
    ball: {
        height: 15,
        width: 15,
        backgroundColor: colors.green,
        borderRadius: 50,
        textAlign: 'center',
        
    },
    textBall1: {
        fontFamily: 'Inter-Regular',
        marginTop: 15,
        width: 100,
        color: colors.green,
        // marginLeft: -10
    },
    textBall2: {
        fontFamily: 'Inter-Regular',
        marginTop: 15,
        width: 100,
        color: colors.green,
        marginLeft: -20
    },
    textBall3: {
        fontFamily: 'Inter-Regular',
        marginTop: 15,
        width: 100,
        color: colors.green,
        marginLeft: -40
    }
})

export default styles;