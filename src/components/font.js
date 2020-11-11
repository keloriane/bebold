import { createGlobalStyle } from 'styled-components';
import Abuget from './../assets/fonts/Abuget.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Abuget';
        src: local('Abuget'), local('Abuget'),
        url(${Abuget}) format('ttf'),
        url(${Abuget}) format('ttf');
        font-weight: 300;
        font-style: normal;
    }
`;