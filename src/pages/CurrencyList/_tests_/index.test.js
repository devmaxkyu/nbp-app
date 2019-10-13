
import React from 'react'
import CurrencyList from '../../CurrencyList'
import renderer from 'react-test-renderer'
import {Provider} from 'react-redux'
import store from '../../../store'

import { BrowserRouter as Router} from 'react-router-dom'

jest.mock('../../../services/nbpApi')

it('Currency List rendering', () => {
  const component = renderer.create(
    <Provider store = {store}><Router><CurrencyList/></Router></Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});