
import React from 'react'
import CurrencyList from '../../CurrencyList'
import renderer from 'react-test-renderer'
import {Provider} from 'react-redux'
import store from '../../../store'

test('Currency List rendering', () => {
  const component = renderer.create(
    <Provider store = {store}><CurrencyList/></Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});