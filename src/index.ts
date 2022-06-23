/*
 * —————————————————————————————————————————————————————————————————————————————
 * Project Name			⸺ Tailscale API Lib
 * Project Version	⸺ 0.0.0
 * Project Desc.		⸺ An API for easily generating a new project or individual components.
 * Author						⸺ Devin W. Leaman (4lch4)
 * Company					⸺ 4lch4 Industries, LLC.
 * —————————————————————————————————————————————————————————————————————————————
 * File Path				⸺ /src/index.ts
 * File Created			⸺ 2022-06-23 @ 00:08:53-05:00
 * Last Modified		⸺ 2022-06-23 @ 02:22:32-05:00
 * Modified By			⸺ Devin W. Leaman (4lch4) (hey@4lch4.email)
 * —————————————————————————————————————————————————————————————————————————————
 * MIT License			⸺ https://opensource.org/licenses/MIT
 *
 * Copyright (c) 2022, Devin W. Leaman (4lch4) (hey@4lch4.email)
 * —————————————————————————————————————————————————————————————————————————————
 */

export {
  IAppConfig,
  IPreviewTailnetACLParams,
  IRequestProperties,
  ITailnetCapabilities,
  ITailnetCapabilitiesCreate,
  ITailnetCapabilitiesDevices,
  ITailnetKeysResponse,
  ITailnetKeysResponseCapabilities,
  ITailnetKeysResponseCreate,
  ITailnetKeysResponseDevices
} from './interfaces/index.js'
export { BaseRoute, ConfigUtil } from './lib/index.js'
export { DevicesRoutes, TailnetsRoutes } from './routes/index.js'
