import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // AppComponent's private CSS styles
  'h1': {
    'fontSize': [{ 'unit': 'em', 'value': 1.2 }],
    'color': '#999',
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'h2': {
    'fontSize': [{ 'unit': 'em', 'value': 2 }],
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'paddingTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'nav a': {
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }],
    'textDecoration': 'none',
    'marginTop': [{ 'unit': 'px', 'value': 10 }],
    'display': 'inline-block',
    'backgroundColor': '#eee',
    'borderRadius': '4px'
  },
  'nav a:visited': {
    'color': '#607D8B'
  },
  'a:link': {
    'color': '#607D8B'
  },
  'nav a:hover': {
    'color': '#039be5',
    'backgroundColor': '#CFD8DC'
  },
  'nav aactive': {
    'color': '#039be5'
  }
});
