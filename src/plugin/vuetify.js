// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const saraTheme = {
  dark: false,
  colors: {
    background: '#ffffff',
    surface:    '#ffffff',
    primary:    '#1677be',
    'primary-darken-1': '#0f5fa3',
    secondary:  '#555555',
    error:      '#d32f2f',
    info:       '#1677be',
    success:    '#2e7d32',
    warning:    '#f57c00',
    'on-background': '#333333',
    'on-surface':    '#333333',
    'on-primary':    '#ffffff',
    'on-secondary':  '#ffffff',
  },
  variables: {
    'border-radius-root': '5px',
    'border-color': '#e3e3e3',
    'medium-emphasis-opacity': '1',
  }
}

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'saraTheme',
    themes: { saraTheme },
  },
  defaults: {
    VCard: {
      elevation: 0,
      border: true,
    },
    VAppBar: {
      elevation: 0,
      height: 64,
    },
    VBtn: {
      style: 'text-transform: none; letter-spacing: 0; border-radius: 5px;',
    },
    VChip: {
      variant: 'outlined',
      color: 'primary',
    },
    VExpansionPanels: {
      elevation: 0,
    },
    VTextField: {
      variant: 'outlined',
      density: 'comfortable',
    },
    VTextarea: {
      variant: 'outlined',
      density: 'comfortable',
    },
  }
})

export default vuetify
