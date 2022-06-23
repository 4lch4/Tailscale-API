/*
 * —————————————————————————————————————————————————————————————————————————————
 * Project Name			⸺ Tailscale API Lib
 * Project Version	⸺ 0.0.0
 * Project Desc.		⸺ An API for easily generating a new project or individual components.
 * Author						⸺ Devin W. Leaman (4lch4)
 * Company					⸺ 4lch4 Industries, LLC.
 * —————————————————————————————————————————————————————————————————————————————
 * File Path				⸺ /src/interfaces/ITailnetKeysResponse.ts
 * File Created			⸺ 2022-06-23 @ 01:36:14-05:00
 * Last Modified		⸺ 2022-06-23 @ 01:38:11-05:00
 * Modified By			⸺ Devin W. Leaman (4lch4) (hey@4lch4.email)
 * —————————————————————————————————————————————————————————————————————————————
 * MIT License			⸺ https://opensource.org/licenses/MIT
 *
 * Copyright (c) 2022, Devin W. Leaman (4lch4) (hey@4lch4.email)
 * —————————————————————————————————————————————————————————————————————————————
 */

export interface ITailnetKeysResponse {
  id: string
  key: string
  created: string
  expires: string
  capabilities: ITailnetKeysResponseCapabilities
}

export interface ITailnetKeysResponseCapabilities {
  devices: ITailnetKeysResponseDevices
}

export interface ITailnetKeysResponseDevices {
  create: ITailnetKeysResponseCreate
}

export interface ITailnetKeysResponseCreate {
  reusable: boolean
  ephemeral: boolean
  preauthorized: boolean
  tags: string[]
}
