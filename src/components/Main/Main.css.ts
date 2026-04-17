import { style } from '@vanilla-extract/css';
import { BreakPoint, Space, typography } from '../../styles/variables.css';

export const title = style([
  typography.title1,
  {
    margin: `124px 0 ${Space * 3}px`,
  },
]);

export const sectionTitle = style([
  typography.title2,
  {
    margin: `${Space * 12}px 0 ${Space * 3}px`,
    ':first-of-type': {
      marginTop: Space * 8,
    },
  },
]);

export const grid = style({
  display: 'grid',
  padding: 0,
  margin: 0,
  listStyle: 'none',
  gap: Space * 5,
  gridTemplateColumns: `repeat(auto-fill, minmax(270px, 1fr))`,
  '@media': {
    [`(min-width: ${BreakPoint.X_SMALL}px)`]: {
      gridTemplateColumns: `repeat(auto-fill, minmax(300px, 1fr))`,
    },
    [`(min-width: ${BreakPoint.SMALL}px)`]: {
      gridTemplateColumns: `repeat(auto-fill, minmax(360px, 1fr))`,
    },
    [`(min-width: ${BreakPoint.X_LARGE}px)`]: {
      gridTemplateColumns: `repeat(auto-fill, minmax(540px, 1fr))`,
    },
  },
});
