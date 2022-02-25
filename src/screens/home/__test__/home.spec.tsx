import React from 'react';
import {render} from '@testing-library/react-native';
import {NavigationWrapper} from '../../../../__mocks__/navigation-wrapper/navigation-wrapper';
import {Home} from '../home';

describe('Render Screen default', () => {
  it('Snapshot', () => {
    const {toJSON} = render(<NavigationWrapper children={Home} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
