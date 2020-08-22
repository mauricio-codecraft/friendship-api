import pg from '../../utils/db';
import {success, failure} from '../../utils/http';

/**
 * List all preorders
 * @param {*} event
 * @param {*} context
 * Local test: serverless invoke local
 * --function preorder-list --path mocks/preorder/list.json
 */
export async function main(event, context) {
  try {
    let page; let size; let sort; let order;
    console.log(event.queryStringParameters);
    if (event.queryStringParameters) {
      page = event.queryStringParameters.page;
      size = event.queryStringParameters.size;
      sort = event.queryStringParameters.sort;
      order = event.queryStringParameters.order;
    }
    let q = 'SELECT * FROM PREORDER';
    if (sort) {
      q += ' ORDER BY ' + sort;
    }
    if (order) {
      q += ' ' + order;
    }
    if (size) {
      q += ' LIMIT ' + size;
    }
    if (size && page) {
      const offset = page * size;
      q += ' OFFSET ' + offset;
    }
    console.log('q = ' + q);
    const result = await pg.query(q);
    // Process data in the array result.
    return success(result);
  } catch (e) {
    return failure(e);
  }
}
