
import React from 'react'
import CurrencyDetail from '../../CurrencyDetail'
import renderer from 'react-test-renderer'
import {Provider} from 'react-redux'
import store from '../../../store'

import { BrowserRouter as Router} from 'react-router-dom'

jest.mock('../../../services/nbpApi')

it('Currency Detail rendering', () => {
  const routeParams = {
    params: {
      code: 'USD',
      table: 'A'
    }
  }
  const component = renderer.create(
    <Provider store = {store}><Router><CurrencyDetail match={routeParams}/></Router></Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
