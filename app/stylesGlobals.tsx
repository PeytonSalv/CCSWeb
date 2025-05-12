// app/stylesGlobals.tsx
'use client';
import { createGlobalStyle } from 'styled-components';
import { ui } from '@/styles/uiPalette';

export const GlobalStyle = createGlobalStyle`
  *,*::before,*::after { box-sizing: border-box; }
  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background: ${ui.body};
    color: ${ui.text};
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: ${ui.accent};
    text-decoration: none;
    transition: color 0.2s ease;
  }

  a:hover {
    color: #ffffff;
  }
`;
