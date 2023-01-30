/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

/** Request for creating a location */
export interface CreateLocationRequest {
  /** Latitude */
  latitude: string;
  /** Longitude */
  longitude: string;
}

export const createLocationRequestSchema: Schema<CreateLocationRequest> = object(
  { latitude: ['latitude', string()], longitude: ['longitude', string()] }
);