import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // You can add global styles to this file, and also import other style files
  // Application-wide Styles
  'h1': {
    'color': '#369',
    'fontFamily': 'Arial, Helvetica, sans-serif',
    'fontSize': [{ 'unit': '%V', 'value': 2.5 }]
  },
  'h2': {
    'color': '#444',
    'fontFamily': 'Arial, Helvetica, sans-serif',
    'fontWeight': 'lighter'
  },
  'h3': {
    'color': '#444',
    'fontFamily': 'Arial, Helvetica, sans-serif',
    'fontWeight': 'lighter'
  },
  'body': {
    'margin': [{ 'unit': 'em', 'value': 2 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'em', 'value': 2 }]
  },
  'body': {
    'color': '#888',
    'fontFamily': 'Cambria, Georgia'
  },
  'input[text]': {
    'color': '#888',
    'fontFamily': 'Cambria, Georgia'
  },
  'button': {
    'color': '#888',
    'fontFamily': 'Cambria, Georgia'
  },
  // everywhere else
  '*': {
    'fontFamily': 'Arial, Helvetica, sans-serif'
  }
});
