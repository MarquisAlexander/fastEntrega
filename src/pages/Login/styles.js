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
    boxMoreInfo: {
        marginTop: (height * 2) / 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonCheckBox:{ 
        flexDirection: 'row',
        alignItems: 'center',
    },
    textMiniButtons: {
        fontSize: (height * 2) / 100,
        color: colors.textBlue,
        fontFamily: 'Inter-Regular',
    }
})

export default styles;