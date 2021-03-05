import {StyleSheet, Dimensions} from 'react-native';
import { color } from 'react-native-reanimated';
import colors from './colors';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        paddingHorizontal: 20,
        flex: 1,
    },
    text: {
        fontFamily: 'Inter-Regular',
        fontSize: (height * 2) / 100,
        color: colors.textBlue,
    },

    button: {
        height: (height * 9) / 100,
        backgroundColor: colors.yellow,
        borderRadius: 5,

        alignItems: 'center',
        paddingTop: (height * 2) / 100,
        marginTop: (height * 5) / 100,
    },
    textButton: {
        fontSize: (height * 3) / 100,
        fontFamily: 'Inter-Regular',
        color: colors.textTitle,
    }
})

export default styles;