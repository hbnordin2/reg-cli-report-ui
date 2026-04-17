import { style } from '@vanilla-extract/css';
import { BreakPoint, Space, tokens } from '../../styles/variables.css';

export const wrapper = style({
  position: 'relative',
});

export const inner = style({
  display: 'block',
  width: '100%',
  borderWidth: 0,
  borderRadius: 6,
  background: tokens.color.white,
  boxShadow: tokens.shadow.lv3,
  color: tokens.color.textBase,
  fontSize: 'inherit',
  textDecoration: 'none',
  cursor: 'pointer',
  transition: `box-shadow ${tokens.duration.fadeIn} ${tokens.easing.standard}`,
  ':hover': {
    boxShadow: tokens.shadow.lv1,
  },
  ':focus-visible': {
    boxShadow: tokens.state.focus,
  },
});

export const sign = style({
  position: 'absolute',
  top: Space * 1,
  left: Space * 1,
  zIndex: 10,
});

export const image = style({
  position: 'relative',
  borderRadius: '6px 6px 0 0',
  overflow: 'hidden',
});

export const imageInner = style({
  position: 'relative',
  display: 'block',
  zIndex: 2,
});

export const title = style({
  padding: Space * 2,
  textAlign: 'left',
  '@media': {
    [`(min-width: ${BreakPoint.MEDIUM}px)`]: {
      padding: Space * 3,
    },
  },
});

export const menu = style({
  position: 'absolute',
  top: Space * 0.5,
  right: Space * 0.5,
  zIndex: 10,
});
