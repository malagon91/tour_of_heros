import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // DashboardComponent's private CSS styles
  '[class*='col-']': {
    'float': 'left',
    'paddingRight': [{ 'unit': 'px', 'value': 20 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  '[class*='col-']:last-of-type': {
    'paddingRight': [{ 'unit': 'px', 'value': 0 }]
  },
  'a': {
    'textDecoration': 'none'
  },
  '*': {
    'WebkitBoxSizing': 'border-box',
    'MozBoxSizing': 'border-box',
    'boxSizing': 'border-box'
  },
  '*:after': {
    'WebkitBoxSizing': 'border-box',
    'MozBoxSizing': 'border-box',
    'boxSizing': 'border-box'
  },
  '*:before': {
    'WebkitBoxSizing': 'border-box',
    'MozBoxSizing': 'border-box',
    'boxSizing': 'border-box'
  },
  'h3': {
    'textAlign': 'center',
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'h4': {
    'position': 'relative'
  },
  'grid': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    '<w1024': {
      'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
    }
  },
  'col-1-4': {
    'width': [{ 'unit': '%H', 'value': 0.25 }]
  },
  'module': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'textAlign': 'center',
    'color': '#eee',
    'maxHeight': [{ 'unit': 'px', 'value': 120 }],
    'minWidth': [{ 'unit': 'px', 'value': 120 }],
    'backgroundColor': '#607D8B',
    'borderRadius': '2px',
    '<w600': {
      'fontSize': [{ 'unit': 'px', 'value': 10 }],
      'maxHeight': [{ 'unit': 'px', 'value': 75 }]
    }
  },
  'module:hover': {
    'backgroundColor': '#EEE',
    'cursor': 'pointer',
    'color': '#607d8b'
  },
  'grid-pad': {
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }]
  },
  'grid-pad > [class*='col-']:last-of-type': {
    'paddingRight': [{ 'unit': 'px', 'value': 20 }]
  }
});
