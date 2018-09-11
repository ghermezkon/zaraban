import React from 'react';
import { View, Header, Item, Icon, Input, Button } from 'native-base';
import {theme, IconMoon} from '../index';
//---------------------------------------------------------------------------
const MaterialListHeader = ({ icon, title, onEndEditing, ...props }) => {
    return (
        <View style={{ flex: 0, paddingTop: 10, paddingBottom: 10 }}>
            <Header searchBar rounded style={{ elevation: 1, backgroundColor: theme.CONTAINER_COLOR }}>
                <Item>
                    <Button style={{ backgroundColor: theme.HEADER_COLOR }}>
                        <Icon name="search" />
                    </Button>
                    <Input placeholder={title}
                        style={{ textAlign: 'right', direction: 'rtl', fontFamily: 'font-number' }}
                        onEndEditing={onEndEditing} />
                    <IconMoon name={icon} style={{ padding: 5, fontSize: 22, color: theme.ICON_COLOR }} />
                </Item>
            </Header>
        </View>
    )
}
export default MaterialListHeader;