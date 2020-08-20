import pg from '../../utils/db';
import {success, failure} from '../../utils/http';

/**
 * List all product categories
 * @param {*} event
 * @param {*} context
 */
export async function main(event, context) {
  try {
    const result = await pg.getAll('product_category');
    // Process data in the array result.
    return success(result);
  } catch (e) {
    return failure(e);
  }
}
