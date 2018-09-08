import { Toast } from 'native-base';

function MaterialToast ( error, type ) {
    Toast.show({
        text: error,
        type: type,
        textStyle: { fontFamily: 'font-bold', textAlign: 'center' }
    })
}
export default MaterialToast;