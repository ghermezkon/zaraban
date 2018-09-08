import MaterialInput from './component/input.component';
import MaterialToast from './component/toast.component';
import MaterialListHeader from './component/list.header.component'
import ModalSpinner from './component/modal.spinner';
import MaterialHeader from './component/header.component';

import constant from './api/constant';
import httpApi from './api/httpApi';

import validator from './api/validator';

import theme from './styles/theme.global';
import globalStyle from './styles/global';
import imgs from './styles/image.global';

import getTheme from './native-base-theme/components';
import platform from './native-base-theme/variables/platform';

import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import fontelloConfig from './assets/svg/selection.json';
const IconMoon = createIconSetFromIcoMoon(fontelloConfig);

export { MaterialInput, MaterialToast, MaterialListHeader, constant, httpApi, imgs,MaterialHeader,
    ModalSpinner, validator, theme, globalStyle, getTheme, platform, IconMoon};