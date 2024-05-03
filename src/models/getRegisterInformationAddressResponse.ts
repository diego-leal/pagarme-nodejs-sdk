/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, object, optional, Schema, string } from '../schema';

/** Response object for getting an RegisterInformationAddress */
export interface GetRegisterInformationAddressResponse {
  street?: string | null;
  complementary?: string | null;
  streetNumber?: string | null;
  neighborhood?: string | null;
  city?: string | null;
  state?: string | null;
  zipCode?: string | null;
  referencePoint?: string | null;
}

export const getRegisterInformationAddressResponseSchema: Schema<GetRegisterInformationAddressResponse> = object(
  {
    street: ['street', optional(nullable(string()))],
    complementary: ['complementary', optional(nullable(string()))],
    streetNumber: ['street_number', optional(nullable(string()))],
    neighborhood: ['neighborhood', optional(nullable(string()))],
    city: ['city', optional(nullable(string()))],
    state: ['state', optional(nullable(string()))],
    zipCode: ['zip_code', optional(nullable(string()))],
    referencePoint: ['reference_point', optional(nullable(string()))],
  }
);
