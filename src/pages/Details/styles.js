import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles/colors';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingBottom: 30,
    },
    header: {
        flexDirection: 'row',
        paddingVertical: (height * 5) / 100,
        alignItems: 'center'
    },
    textHeader: {
        fontFamily: 'Inter-Bold',
        fontSize: (height * 3) / 100,
        color: colors.blue,
    },
    boxHeaderText: {
        flex: 1,
        alignItems: 'center',
        marginLeft: -20,
    },


})

export default styles