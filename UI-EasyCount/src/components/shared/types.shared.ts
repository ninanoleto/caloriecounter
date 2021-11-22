export interface MarginProps {
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
  marginX?: number;
  marginY?: number;
  margin?: [number, number, number, number];
}

export interface PaddingProps {
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingX?: number;
  paddingY?: number;
  padding?: [number, number, number, number];
}

export interface SpacingProps extends MarginProps, PaddingProps {}

export const calcMargin = <T extends MarginProps>(props: T) => {
  const marginLeft = props.marginLeft
    ? `margin-left: ${props.marginLeft}px;`
    : "";

  const marginRight = props.marginRight
    ? `margin-right: ${props.marginRight}px;`
    : "";

  const marginTop = props.marginTop ? `margin-top: ${props.marginTop}px;` : "";

  const marginBottom = props.marginBottom
    ? `margin-bottom: ${props.marginBottom}px;`
    : "";

  const marginX = props.marginX ? `margin: 0 ${props.marginX}px;` : "";
  const marginY = props.marginY ? `margin: ${props.marginY}px 0;` : "";

  const margin = props.margin
    ? `margin: ${props.margin[0]}px ${props.margin[1]}px ${props.margin[2]}px ${props.margin[3]}px;`
    : "";

  return (
    marginLeft +
    marginRight +
    marginTop +
    marginBottom +
    marginX +
    marginY +
    margin
  );
};

export const calcPadding = <T extends PaddingProps>(props: T) => {
  const paddingLeft = props.paddingLeft
    ? `padding-left: ${props.paddingLeft}px;`
    : "";

  const paddingRight = props.paddingRight
    ? `padding-right: ${props.paddingRight}px;`
    : "";

  const paddingBottom = props.paddingBottom
    ? `padding-bottom: ${props.paddingBottom}px;`
    : "";

  const paddingTop = props.paddingTop
    ? `padding-top: ${props.paddingTop}px;`
    : "";

  const paddingX = props.paddingX ? `padding: 0 ${props.paddingX}px;` : "";

  const paddingY = props.paddingY ? `padding: ${props.paddingY}px 0;` : "";

  const padding = props.padding
    ? `padding: ${props.padding[0]}px ${props.padding[1]}px ${props.padding[2]}px ${props.padding[3]}px;`
    : "";

  return (
    paddingLeft +
    paddingRight +
    paddingBottom +
    paddingTop +
    paddingX +
    paddingY +
    padding
  );
};
