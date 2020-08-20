import pg from '../../utils/db';
import {success, failure} from '../../utils/http';

/**
 * Create preorder
 * @param {*} event
 * @param {*} context
 */
export async function main(event, context) {
  const data = JSON.parse(event.body);
  data.traveller_id = event.requestContext.identity.cognitoIdentityId;
  try {
    const result = await pg.insert('preorder', data);
    // returns id if success
    // returns status = false otherwise
    return success(result);
  } catch (e) {
    return failure({status: false});
  }
}
