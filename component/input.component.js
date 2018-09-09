import React from 'react';
import { Input, Item, Label, Icon } from "native-base";
import { StyleSheet } from 'react-native';

import { IconMoon } from '../index';
import theme from '../styles/theme.global';
//--------------------------------------------------------
const MaterialInput = ({ error, value, onChangeText, ref, onBlur, width, iconName, label, keyboardType, textAlign,autoFocus, ...props }) => (
    <Item inlineLabel
        error={true && error != null}
        style={{ width: width, flexDirection: 'row-reverse' }}>

        {error == null ? <IconMoon name={iconName} style={styles.inputIcon} /> : null}
        {error != null ? <Icon name='close-circle' style={styles.errorIcon} /> : null}

        <Label style={[styles.label, error != null ? styles.errorLabel : null]}>{label}</Label>

        <Input value={value} {...props}
            autoFocus = {autoFocus}
            onChangeText={onChangeText}
            onEndEditing={onBlur} keyboardType={keyboardType}
            style={{ textAlign: textAlign, direction: 'rtl', fontFamily: 'font-number' }} />
    </Item>
)
// export default MaterialInput;
// class MaterialInput extends React.Component {
//     constructor(props) { super(props); }
//     render() {
//         const { error, value, onChangeText, onBlur, width, iconName, label, keyboardType, textAlign, autoFocus } = this.props;
//         return (
//             <Item inlineLabel
//                 error={true && error != null}
//                 style={{ width: width, flexDirection: 'row-reverse' }}>

//                 {error == null ? <IconMoon name={iconName} style={styles.inputIcon} /> : null}
//                 {error != null ? <Icon name='close-circle' style={styles.errorIcon} /> : null}

//                 <Label style={[styles.label, error != null ? styles.errorLabel : null]}>{label}</Label>

//                 <Input value={value}
//                     autoFocus={autoFocus}
//                     onChangeText={onChangeText}
//                     onEndEditing={onBlur} keyboardType={keyboardType}
//                     style={{ textAlign: textAlign, direction: 'rtl', fontFamily: 'font-number' }} />
//             </Item>
//         )
//     }
// }
export default MaterialInput
//--------------------------------------------------------
const styles = StyleSheet.create({
    inputIcon: { color: theme.ICON_COLOR, fontSize: 18 },
    label: { fontFamily: 'font-bold' },
    errorIcon: { fontSize: 18, padding: 0, margin: 0 },
    errorLabel: { color: theme.ERROR_COLOR }
})
//--------------------------------------------------------