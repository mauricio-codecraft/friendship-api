import pg from '../../utils/db';
import {main} from '../../functions/preorder/update';
const sinon = require('sinon');

test('It may generate the correct params for preorder update', () => {
  const updateFunc = sinon.spy(pg, 'updateById');
  const params = {
    'body': {
      'traveller_id': 1231,
      'name': 'Nissin222',
      'description': 'Nissin Lamen Spicy Special Edition',
      'product_category_id': 2,
      'max_qty': 10,
      'min_price': 5.51,
      'max_price': 5.21,
    },
    'pathParameters': {
      'id': '1',
    },
    'requestContext': {
      'identity': {
        'cognitoIdentityId': 'USER-SUB-1234',
      },
    },
  };
  main(params, null);
  updateFunc.restore();
  sinon.assert.calledWith(updateFunc, 'preorder', 1, params.body);
});

