import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles/colors';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    header: {
        marginTop: (height * 5) / 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textTitleDestaques: {
        fontFamily: 'Inter-Black',
        fontSize: (height * 5) / 100,
        marginTop: (height * 10) / 100,
        color: colors.yellow,
    },
    textTitle: {
        fontSize: (height * 5) / 100,
        color: colors.white,
        marginBottom: (height * 2) / 100,
    },
    textSubTitle: {
        marginTop: (height * 10) / 100,
        fontSize: (height * 2) / 100,
        color: colors.textBlue,
        fontFamily: 'Inter-Bold',
    },
    textInfoLocation: {
        fontSize: (height * 2) / 100,
        color: colors.textBlue,
        fontFamily: 'Inter-Regular',
    },
    buttonBack: {
        marginTop: (height * 10) / 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textButton: {
        color: colors.white,
    }
})

export default styles;