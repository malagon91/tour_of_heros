import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // HeroDetailComponent's private CSS styles
  'label': {
    'display': 'inline-block',
    'width': [{ 'unit': 'em', 'value': 3 }],
    'margin': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'color': '#607D8B',
    'fontWeight': 'bold'
  },
  'input': {
    'height': [{ 'unit': 'em', 'value': 2 }],
    'fontSize': [{ 'unit': 'em', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'em', 'value': 0.4 }]
  },
  'button': {
    'marginTop': [{ 'unit': 'px', 'value': 20 }],
    'fontFamily': 'Arial',
    'backgroundColor': '#eee',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }],
    'borderRadius': '4px',
    'cursor': 'pointer',
    'cursor': 'hand'
  },
  'button:hover': {
    'backgroundColor': '#cfd8dc'
  },
  'button:disabled': {
    'backgroundColor': '#eee',
    'color': '#ccc',
    'cursor': 'auto'
  }
});
