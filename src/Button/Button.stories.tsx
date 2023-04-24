import * as React from 'react';
import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'inline-radio',
        options: ['primary', 'secondary', 'tertiary'],
      },
    },
    size: {
      control: {
        type: 'inline-radio',
        options: ['lg', 'md'],
      },
    },
    rounded: {
      control: {
        type: 'boolean',
      },
    },
    block: {
      control: {
        type: 'boolean',
      },
    },
    blockXS: {
      control: {
        type: 'boolean',
      },
    },
    outlined: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export const Base = (props) => <Button {...props}>Click me</Button>;

export const Permutations = () => (
  <div>
    <div>
      <Button variant="primary">Click me</Button>
      <Button variant="secondary">Click me</Button>
      <Button variant="tertiary">Click me</Button>
    </div>
    <div>
      <Button disabled variant="primary">
        Click me
      </Button>
      <Button disabled variant="secondary">
        Click me
      </Button>
      <Button disabled variant="tertiary">
        Click me
      </Button>
    </div>
    <div>
      <Button rounded variant="primary">
        Click me
      </Button>
      <Button rounded variant="secondary">
        Click me
      </Button>
      <Button rounded variant="tertiary">
        Click me
      </Button>
    </div>
    <div>
      <Button outlined variant="primary">
        Click me
      </Button>
      <Button outlined variant="secondary">
        Click me
      </Button>
      <Button outlined variant="tertiary">
        Click me
      </Button>
    </div>
    <div>
      <Button outlined disabled variant="primary">
        Click me
      </Button>
      <Button outlined disabled variant="secondary">
        Click me
      </Button>
      <Button outlined disabled variant="tertiary">
        Click me
      </Button>
    </div>
    <div>
      <Button size="lg" variant="primary">
        Click me
      </Button>
      <Button size="lg" variant="secondary">
        Click me
      </Button>
      <Button size="lg" variant="tertiary">
        Click me
      </Button>
    </div>
    <div>
      <Button size="lg" disabled variant="primary">
        Click me
      </Button>
      <Button size="lg" disabled variant="secondary">
        Click me
      </Button>
      <Button size="lg" disabled variant="tertiary">
        Click me
      </Button>
    </div>
    <div>
      <Button size="lg" rounded variant="primary">
        Click me
      </Button>
      <Button size="lg" rounded variant="secondary">
        Click me
      </Button>
      <Button size="lg" rounded variant="tertiary">
        Click me
      </Button>
    </div>
    <div>
      <Button size="lg" outlined variant="primary">
        Click me
      </Button>
      <Button size="lg" outlined variant="secondary">
        Click me
      </Button>
      <Button size="lg" outlined variant="tertiary">
        Click me
      </Button>
    </div>
    <div>
      <Button size="lg" outlined disabled variant="primary">
        Click me
      </Button>
      <Button size="lg" outlined disabled variant="secondary">
        Click me
      </Button>
      <Button size="lg" outlined disabled variant="tertiary">
        Click me
      </Button>
    </div>
  </div>
);
