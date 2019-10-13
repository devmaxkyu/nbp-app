
import React from 'react'
import Favourite from '../../Favourite'
import renderer from 'react-test-renderer'
import {Provider} from 'react-redux'
import store from '../../../store'

import { BrowserRouter as Router} from 'react-router-dom'

jest.mock('../../../services/nbpApi')

it('Favourite rendering', () => {
  const component = renderer.create(
    <Provider store = {store}><Router><Favourite/></Router></Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});