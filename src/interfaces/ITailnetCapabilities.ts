/*
 * -----------------------------------------------------------------------------
 * Project Name			⸺ Tailscale API Lib
 * Project Version	⸺ 1.0.0
 * Project Desc.		⸺ An API for easily generating a new project or individual components.
 * Author						⸺ Devin W. Leaman (4lch4)
 * Company					⸺ 4lch4 Industries, LLC.
 * -----------------------------------------------------------------------------
 * File Path				⸺ /src/interfaces/ITailnetCapabilities.ts
 * File Created			⸺ 2022-06-23 @ 01:34:54-05:00
 * Last Modified		⸺ 2022-06-23 @ 08:50:20-05:00
 * Modified By			⸺ Devin W. Leaman (4lch4) (hey@4lch4.email)
 * -----------------------------------------------------------------------------
 * MIT License			⸺ https://opensource.org/licenses/MIT
 *
 * Copyright (c) 2022, Devin W. Leaman (4lch4) (hey@4lch4.email)
 * -----------------------------------------------------------------------------
 */

export interface ITailnetCapabilities {
  devices: ITailnetCapabilitiesDevices
}

export interface ITailnetCapabilitiesDevices {
  create: ITailnetCapabilitiesCreate
}

export interface ITailnetCapabilitiesCreate {
  reusable: boolean
  ephemeral: boolean
  preauthorized: boolean
  tags: string[]
}
