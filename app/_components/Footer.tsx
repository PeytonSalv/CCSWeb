'use client';
import styled from 'styled-components';
import { terminal } from '@/styles/terminalTheme';

const Foot = styled.footer`
  border-top: 1px solid ${terminal.fg};
  padding: 1rem 0;
  text-align: center;
  font-size: 0.75rem;
`;

export default function Footer() {
  return (
    <Foot>
      © {new Date().getFullYear()} Cascade Core Solutions. All rights reserved.
    </Foot>
  );
}
