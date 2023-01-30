/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, nullable, object, Schema, string } from '../schema';
import {
  GetGatewayErrorResponse,
  getGatewayErrorResponseSchema,
} from './getGatewayErrorResponse';

/** The Transaction Gateway Response */
export interface GetGatewayResponseResponse {
  /** The error code */
  code: string | null;
  /** The gateway response errors list */
  errors: GetGatewayErrorResponse[] | null;
}

export const getGatewayResponseResponseSchema: Schema<GetGatewayResponseResponse> = object(
  {
    code: ['code', nullable(string())],
    errors: [
      'errors',
      nullable(array(lazy(() => getGatewayErrorResponseSchema))),
    ],
  }
);