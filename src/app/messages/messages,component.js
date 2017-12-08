import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // MessagesComponent's private CSS styles
  'h2': {
    'color': 'red',
    'fontFamily': 'Arial, Helvetica, sans-serif',
    'fontWeight': 'lighter'
  },
  'body': {
    'margin': [{ 'unit': 'em', 'value': 2 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'em', 'value': 2 }]
  },
  'body': {
    'color': 'crimson',
    'fontFamily': 'Cambria, Georgia'
  },
  'input[text]': {
    'color': 'crimson',
    'fontFamily': 'Cambria, Georgia'
  },
  'button': {
    'color': 'crimson',
    'fontFamily': 'Cambria, Georgia'
  },
  'buttonclear': {
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
    'color': '#aaa',
    'cursor': 'auto'
  },
  'buttonclear': {
    'color': '#888',
    'marginBottom': [{ 'unit': 'px', 'value': 12 }]
  }
});
