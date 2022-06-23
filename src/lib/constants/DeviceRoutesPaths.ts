/*
 * -----------------------------------------------------------------------------
 * Project Name			⸺ Tailscale API Lib
 * Project Version	⸺ 1.0.0
 * Project Desc.		⸺ An API for easily generating a new project or individual components.
 * Author						⸺ Devin W. Leaman (4lch4)
 * Company					⸺ 4lch4 Industries, LLC.
 * -----------------------------------------------------------------------------
 * File Path				⸺ /src/lib/constants/DeviceRoutesPaths.ts
 * File Created			⸺ 2022-06-23 @ 03:09:38-05:00
 * Last Modified		⸺ 2022-06-23 @ 08:49:41-05:00
 * Modified By			⸺ Devin W. Leaman (4lch4) (hey@4lch4.email)
 * -----------------------------------------------------------------------------
 * MIT License			⸺ https://opensource.org/licenses/MIT
 *
 * Copyright (c) 2022, Devin W. Leaman (4lch4) (hey@4lch4.email)
 * -----------------------------------------------------------------------------
 */

/** A collection of the URL paths for each available operation. */
export const DeviceRoutesPaths = {
  getDevice: (deviceId: string) => `/device/${deviceId}`,
  deleteDevice: (deviceId: string) => `/device/${deviceId}`,
  getDeviceRoutes: (deviceId: string) => `/device/${deviceId}/routes`,
  setDeviceRoutes: (deviceId: string) => `/device/${deviceId}/routes`,
  authorizeDevice: (deviceId: string) => `/device/${deviceId}/authorized`,
  setDeviceTags: (deviceId: string) => `/device/${deviceId}/tags`,
  updateDeviceKey: (deviceId: string) => `/device/${deviceId}/key`
}
