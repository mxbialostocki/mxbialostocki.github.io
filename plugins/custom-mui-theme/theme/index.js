import { createMuiTheme } from '@material-ui/core/styles';
import typography from './typography'

const palette = {
  primary: { main: '#f50057' },
  secondary: { main: '#D81B60' }
};

const themeName = 'Mine Shaft Amaranth Bluebird';

export default createMuiTheme({ palette, themeName, typography });
