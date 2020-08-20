import pg from '../../utils/db';
import {success, failure} from '../../utils/http';

/**
 * Get preorder by id
 * @param {*} event
 * @param {*} context
 */
export async function main(event, context) {
  try {
    const id = event.pathParameters.id;
    const result = await pg.getById('preorder', id);
    // Process data in the array result.
    return success(result);
  } catch (e) {
    return failure(e);
  }
}
