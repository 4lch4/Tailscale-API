/*
 * —————————————————————————————————————————————————————————————————————————————
 * Project Name			⸺ Tailscale API Lib
 * Project Version	⸺ 0.0.0
 * Project Desc.		⸺ An API for easily generating a new project or individual components.
 * Author						⸺ Devin W. Leaman (4lch4)
 * Company					⸺ 4lch4 Industries, LLC.
 * —————————————————————————————————————————————————————————————————————————————
 * File Path				⸺ /src/lib/constants/AppConfig.ts
 * File Created			⸺ 2022-06-23 @ 03:07:33-05:00
 * Last Modified		⸺ 2022-06-23 @ 03:07:44-05:00
 * Modified By			⸺ Devin W. Leaman (4lch4) (hey@4lch4.email)
 * —————————————————————————————————————————————————————————————————————————————
 * MIT License			⸺ https://opensource.org/licenses/MIT
 *
 * Copyright (c) 2022, Devin W. Leaman (4lch4) (hey@4lch4.email)
 * —————————————————————————————————————————————————————————————————————————————
 */

import { IAppConfig } from '../../interfaces/index.js'

/**
 * An object containing default values to use for the App Config. The `apiToken`
 * and `baseUrl` properties are set to an empty string, whereas the
 * `responseFormat` property is defaulted to `hujson`.
 */
export const DefaultAppConfig: IAppConfig = {
  apiToken: '',
  baseURL: '',
  responseFormat: 'hujson'
}
