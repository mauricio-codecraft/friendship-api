import pg from '../../utils/db';
import {success, failure} from '../../utils/http';

/**
 * Update preorder
 * @param {*} event
 * @param {*} context
 */
export async function main(event, context) {
  const data = JSON.parse(event.body);
  const id = event.pathParameters.id;
  try {
    const result = await pg.updateById('preorder', id, data);
    return success(result);
  } catch (e) {
    return failure({status: false});
  }
}
