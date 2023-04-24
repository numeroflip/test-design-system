import * as React from 'react';
import { Typography } from './Typography';

export default {
  title: 'Typography',
  component: Typography,
  argTypes: {
    slab: {
      control: {
        type: 'boolean',
      },
    },
    variant: {
      control: {
        type: 'select',
        options: [
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'subtitle1',
          'subtitle2',
          'body1',
          'body2',
          'caption',
        ],
      },
    },
    color: {
      control: {
        type: 'select',
        options: [
          'textPrimary',
          'textSecondary',
          'primary',
          'secondary',
          'error',
        ],
      },
    },
  },
};

export const Base = ({ slab, variant, color }) => (
  <Typography slab={slab} variant={variant} color={color}>
    Watch “Jeopardy!”, Alex Trebek’s fun TV quiz game.
  </Typography>
);

export const Primary = () => (
  <div>
    <Typography variant="body1">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </Typography>
    <Typography variant="body2">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </Typography>
    <Typography variant="h1">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </Typography>
    <Typography variant="h2">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </Typography>
    <Typography variant="h3">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </Typography>
    <Typography variant="h4">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </Typography>
    <Typography variant="h5">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </Typography>
  </div>
);
