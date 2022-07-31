import React from "react";
import styled from "styled-components";
import { StyleSheet } from '@src/theme/StyleSheet';
import { parseStyleSheet } from "@skynexui/responsive_stylesheet";

interface StyledBaseComponent {
  styleSheet?: StyleSheet;
}
const StyledBaseComponent = styled.div<StyledBaseComponent>`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  flex-shrink: 0;
  ${({ styleSheet }) => parseStyleSheet(styleSheet)}
`;

export const BaseComponent = (props) => {
  return (
    <StyledBaseComponent {...props} />
  )
}
BaseComponent.defaultProps = {
  styleSheet: {},
}
