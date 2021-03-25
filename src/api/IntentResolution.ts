/**
 * SPDX-License-Identifier: Apache-2.0
 * Copyright 2019 FINOS FDC3 contributors - see NOTICE file
 */

import { TargetApp } from './Types';

/**
 * IntentResolution provides a standard format for data returned upon resolving an intent.
 * ```javascript
 * //resolve a "Chain" type intent
 * var intentR = await agent.raiseIntent("intentName", context);
 * //resolve a "Client-Service" type intent with data response
 * var intentR = await agent.raiseIntent("intentName", context);
 * var dataR = intentR.data;
 * ```
 */
export interface IntentResolution {
  readonly source: TargetApp;
  /**
   * @deprecated not assignable from intent listeners
   */
  readonly data?: object;
  readonly version: string;
}
