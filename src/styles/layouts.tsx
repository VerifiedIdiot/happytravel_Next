import styled, { css } from 'styled-components';

interface MainProps {
  $background?: string;
  $position?: string;
  $display?: string;
  $direction?: string;
  $justify?: string;
  $align?: string;
  $width?: string;
  $height?: string;
  $border?: string;
  $marginLeft?: string;
  $media?: {
    [key: string]: Partial<Omit<MainProps, '$media'>>;
  };
}

export const Main = styled.main<MainProps>`
  background-color: ${(props) => props.$background || 'none'};
  position: ${(props) => props.$position || 'static'};
  display: ${(props) => props.$display || 'flex'};
  flex-direction: ${(props) => props.$direction || 'column'};
  justify-content: ${(props) => props.$justify || 'flex-start'};
  align-items: ${(props) => props.$align || 'stretch'};
  width: ${(props) => props.$width || '100%'};
  height: ${(props) => props.$height || '100dvh'};
  border: ${(props) => props.$border || 'none'};
  margin-left: ${(props) => props.$marginLeft || '0'};

  /* ${(props) =>
    props.$media &&
    Object.keys(props.$media).map((breakpoint) => {
      const mediaStyle = props.$media![breakpoint];
      return css`
        @media (max-width: ${breakpoint}) {
          background-color: ${mediaStyle.$background ||
          props.$background ||
          'none'};
          position: ${mediaStyle.$position || props.$position || 'static'};
          display: ${mediaStyle.$display || props.$display || 'flex'};
          flex-direction: ${mediaStyle.$direction ||
          props.$direction ||
          'column'};
          justify-content: ${mediaStyle.$justify ||
          props.$justify ||
          'flex-start'};
          align-items: ${mediaStyle.$align || props.$align || 'stretch'};
          width: ${mediaStyle.$width || props.$width || '95%'};
          height: ${mediaStyle.$height || props.$height || '100%'};
          border: ${mediaStyle.$border || props.$border || 'none'};
          margin-left: ${mediaStyle.$marginLeft || props.$marginLeft || '0'};
        }
      `;
    })} */
`;

interface ContainerProps {
  $background?: string;
  $position?: string;
  $display?: string;
  $direction?: string;
  $justify?: string;
  $align?: string;
  $width?: string;
  $height?: string;
  $border?: string;
  $radius?: string;
  $shadow?: string;
  $padding?: string;
  $media?: {
    [key: string]: Partial<Omit<ContainerProps, '$media'>>;
  };
}

export const Container = styled.div<ContainerProps>`
  background-color: ${(props) => props.$background || 'none'};
  position: ${(props) => props.$position || 'static'};
  display: ${(props) => props.$display || 'flex'};
  flex-direction: ${(props) => props.$direction || 'column'};
  justify-content: ${(props) => props.$justify || 'flex-start'};
  align-items: ${(props) => props.$align || 'stretch'};
  width: ${(props) => props.$width || '100%'};
  height: ${(props) => props.$height || '94vh'};
  border: ${(props) => props.$border || 'none'};
  border-radius: ${(props) => props.$radius || 'none'};
  box-shadow: ${(props) => props.$shadow || '0 2px 4px rgba(0, 0, 0, 0.1)'};
  padding: ${(props) => props.$padding || '0'};
`;

interface SectionProps {
  $background?: string;
  $position?: string;
  $display?: string;
  $direction?: string;
  $justify?: string;
  $align?: string;
  $width?: string;
  $height?: string;
  $border?: string;
  $radius?: string;
  $margin?: string;
  $marginTop?: string;
  $marginBottom?: string;
  $marginLeft?: string;
  $padding?: string;
  $grow?: string;
  $media?: {
    [key: string]: Partial<Omit<SectionProps, '$media'>>;
  };
}

export const Section = styled.section<SectionProps>`
  background-color: ${(props) => props.$background || 'none'};
  position: ${(props) => props.$position || 'static'};
  display: ${(props) => props.$display || 'flex'};
  flex-direction: ${(props) => props.$direction || 'row'};
  justify-content: ${(props) => props.$justify || 'flex-start'};
  align-items: ${(props) => props.$align || 'stretch'};
  width: ${(props) => props.$width || '100%'};
  height: ${(props) => props.$height || '50%'};
  border: ${(props) => props.$border || 'none'};
  border-radius: ${(props) => props.$radius || 'none'};
  margin: ${(props) => props.$margin || '0'};
  margin-top: ${(props) => props.$marginTop || '0'};
  margin-bottom: ${(props) => props.$marginBottom || '0'};
  margin-left: ${(props) => props.$marginLeft || '0'};
  padding: ${(props) => props.$padding || '0'};
  flex-grow: ${(props) => props.$grow || 0};
`;

interface AreaProps {
  $background?: string;
  $position?: string;
  $display?: string;
  $direction?: string;
  $justify?: string;
  $align?: string;
  $width?: string;
  $height?: string;
  $border?: string;
  $radius?: string;
  $margin?: string;
  $marginTop?: string;
  $marginBottom?: string;
  $marginLeft?: string;
  $padding?: string;
  $shadow?: string;
  $grow?: string;
  $media?: {
    [key: string]: Partial<Omit<AreaProps, '$media'>>;
  };
}

export const Area = styled.div<AreaProps>`
  background-color: ${(props) => props.$background || 'none'};
  position: ${(props) => props.$position || 'static'};
  display: ${(props) => props.$display || 'flex'};
  flex-direction: ${(props) => props.$direction || 'row'};
  justify-content: ${(props) => props.$justify || 'flex-start'};
  align-items: ${(props) => props.$align || 'stretch'};
  width: ${(props) => props.$width || '100%'};
  height: ${(props) => props.$height || '100%'};
  border: ${(props) => props.$border || 'none'};
  border-radius: ${(props) => props.$radius || '0'};
  padding: ${(props) => props.$padding || '0'};
  box-shadow: ${(props) => props.$shadow || '0 2px 4px rgba(0, 0, 0, 0.1)'};
  margin: ${(props) => props.$margin || '0'};
  margin-bottom: ${(props) => props.$marginBottom || '0'};
  margin-top: ${(props) => props.$marginTop || '0'};
`;
interface BoxProps {
  $background?: string;
  $position?: string;
  $display?: string;
  $direction?: string;
  $justify?: string;
  $align?: string;
  $width?: string;
  $height?: string;
  $border?: string;
  $radius?: string;
  $margin?: string;
  $marginTop?: string;
  $marginBottom?: string;
  $marginLeft?: string;
  $padding?: string;
  $shadow?: string;
  $media?: {
    [key: string]: Partial<Omit<BoxProps, '$media'>>;
  };
}

export const Box = styled.div<BoxProps>`
  background-color: ${(props) => props.$background || 'none'};
  position: ${(props) => props.$position || 'static'};
  display: ${(props) => props.$display || 'flex'};
  flex-direction: ${(props) => props.$direction || 'row'};
  justify-content: ${(props) => props.$justify || 'flex-start'};
  align-items: ${(props) => props.$align || 'stretch'};
  width: ${(props) => props.$width || '100%'};
  height: ${(props) => props.$height || '100%'};
  border: ${(props) => props.$border || 'none'};
  margin-bottom: ${(props) => props.$marginBottom || '0'};
  box-shadow: ${(props) => props.$shadow || '0 2px 4px rgba(0, 0, 0, 0.1)'};
`;

interface ItemProps {
  $background?: string;
  $position?: string;
  $display?: string;
  $direction?: string;
  $justify?: string;
  $align?: string;
  $width?: string;
  $height?: string;
  $border?: string;
  $radius?: string;
  $shadow?: string;
  $media?: {
    [key: string]: Partial<Omit<ItemProps, '$media'>>;
  };
}

export const Item = styled.div<ItemProps>`
  background-color: ${(props) => props.$background || 'none'};
  position: ${(props) => props.$position || 'static'};
  display: ${(props) => props.$display || 'flex'};
  align-items: ${(props) => props.$align || 'stretch'};
  flex-direction: ${(props) => props.$direction || 'row'};
  justify-content: ${(props) => props.$justify || 'flex-start'};
  width: ${(props) => props.$width || '100%'};
  height: ${(props) => props.$height || '100%'};
  border: ${(props) => props.$border || 'none'};
  box-shadow: ${(props) => props.$shadow || '0 2px 4px rgba(0, 0, 0, 0.1)'};
`;

interface ContentProps {
  $background?: string;
  $position?: string;
  $display?: string;
  $direction?: string;
  $justify?: string;
  $align?: string;
  $width?: string;
  $height?: string;
  $border?: string;
  $radius?: string;
  $shadow?: string;
  $media?: {
    [key: string]: Partial<Omit<ContentProps, '$media'>>;
  };
}

export const Content = styled.div<ContentProps>`
  background-color: ${(props) => props.$background || 'none'};
  position: ${(props) => props.$position || 'static'};
  display: ${(props) => props.$display || 'flex'};
  flex-direction: ${(props) => props.$direction || 'row'};
  justify-content: ${(props) => props.$justify || 'flex-start'};
  align-items: ${(props) => props.$align || 'stretch'};
  width: ${(props) => props.$width || '100%'};
  height: ${(props) => props.$height || '100%'};
  border: ${(props) => props.$border || 'none'};
  box-shadow: ${(props) =>
    props.$shadow || '0 2px 4px rgba(0, 0, 0, 0.1box-shadow)'};
`;
