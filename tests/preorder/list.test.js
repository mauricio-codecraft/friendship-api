import pg from '../../utils/db';
import {main} from '../../functions/preorder/list';
const sinon = require('sinon');

test('It may generate the correct query for first page of size 2', () => {
  const queryFunc = sinon.spy(pg, 'query');
  const params = {
    'queryStringParameters': {
      'page': '0',
      'size': '2',
      'sort': 'CREATED_AT',
      'order': 'DESC',
    },
  };
  main(params, null);
  queryFunc.restore();
  sinon.assert.calledWith(queryFunc, 'SELECT * FROM PREORDER' +
    ' ORDER BY CREATED_AT DESC LIMIT 2 OFFSET 0');
});

test('It may generate the correct query for second page of size 2', () => {
  const queryFunc = sinon.spy(pg, 'query');
  const params = {
    'queryStringParameters': {
      'page': '1',
      'size': '2',
      'sort': 'CREATED_AT',
      'order': 'DESC',
    },
  };
  main(params, null);
  queryFunc.restore();
  sinon.assert.calledWith(queryFunc, 'SELECT * FROM PREORDER' +
    ' ORDER BY CREATED_AT DESC LIMIT 2 OFFSET 2');
});

test('It may generate the correct query for third page of size 2', () => {
  const queryFunc = sinon.spy(pg, 'query');
  const params = {
    'queryStringParameters': {
      'page': '2',
      'size': '2',
      'sort': 'CREATED_AT',
      'order': 'DESC',
    },
  };
  main(params, null);
  queryFunc.restore();
  sinon.assert.calledWith(queryFunc, 'SELECT * FROM PREORDER' +
    ' ORDER BY CREATED_AT DESC LIMIT 2 OFFSET 4');
});

test('It may generate the correct query for first page of size 3', () => {
  const queryFunc = sinon.spy(pg, 'query');
  const params = {
    'queryStringParameters': {
      'page': '0',
      'size': '3',
      'sort': 'CREATED_AT',
      'order': 'DESC',
    },
  };
  main(params, null);
  queryFunc.restore();
  sinon.assert.calledWith(queryFunc, 'SELECT * FROM PREORDER' +
    ' ORDER BY CREATED_AT DESC LIMIT 3 OFFSET 0');
});

test('It may generate the correct query for second page of size 3', () => {
  const queryFunc = sinon.spy(pg, 'query');
  const params = {
    'queryStringParameters': {
      'page': '1',
      'size': '3',
      'sort': 'CREATED_AT',
      'order': 'DESC',
    },
  };
  main(params, null);
  queryFunc.restore();
  sinon.assert.calledWith(queryFunc, 'SELECT * FROM PREORDER' +
    ' ORDER BY CREATED_AT DESC LIMIT 3 OFFSET 3');
});

test('It may generate the correct query for third page of size 3', () => {
  const queryFunc = sinon.spy(pg, 'query');
  const params = {
    'queryStringParameters': {
      'page': '2',
      'size': '3',
      'sort': 'CREATED_AT',
      'order': 'DESC',
    },
  };
  main(params, null);
  queryFunc.restore();
  sinon.assert.calledWith(queryFunc, 'SELECT * FROM PREORDER' +
    ' ORDER BY CREATED_AT DESC LIMIT 3 OFFSET 6');
});

// reference for sinon: https://semaphoreci.com/community/tutorials/best-practices-for-spies-stubs-and-mocks-in-sinon-js
