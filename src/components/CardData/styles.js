import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles/colors';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    cardData: {
        backgroundColor: '#fff',
        height: (height * 40) / 100,

        borderRadius: 5,

        padding: 24,
        marginBottom: (height * 3) / 100,
    },
    textTitleCard: {
        fontSize: (height * 4) / 100,
        fontFamily: 'Inter-Bold',
        color: colors.textTitle,
        marginLeft: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textTitle: {
        color: colors.textTitle,
        fontSize: (height * 2) / 100,
        marginTop: 20,
        fontFamily: 'Inter-Bold',
    },
    textInfo: {
        fontFamily: 'Inter-Regular',
        fontSize: (height * 2) / 100,
        color: colors.textBase

    }
})

export default styles;