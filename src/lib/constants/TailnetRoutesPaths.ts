/*
 * -----------------------------------------------------------------------------
 * Project Name			⸺ Tailscale API Lib
 * Project Version	⸺ 1.0.0
 * Project Desc.		⸺ An API for easily generating a new project or individual components.
 * Author						⸺ Devin W. Leaman (4lch4)
 * Company					⸺ 4lch4 Industries, LLC.
 * -----------------------------------------------------------------------------
 * File Path				⸺ /src/lib/constants/TailnetRoutesPaths.ts
 * File Created			⸺ 2022-06-23 @ 03:19:29-05:00
 * Last Modified		⸺ 2022-06-23 @ 08:49:45-05:00
 * Modified By			⸺ Devin W. Leaman (4lch4) (hey@4lch4.email)
 * -----------------------------------------------------------------------------
 * MIT License			⸺ https://opensource.org/licenses/MIT
 *
 * Copyright (c) 2022, Devin W. Leaman (4lch4) (hey@4lch4.email)
 * -----------------------------------------------------------------------------
 */

/** A collection of the URL paths for each available operation. */
export const TailnetRoutesPaths = {
  getTailnetACL: (tailnet: string) => `/tailnet/${tailnet}/acl`,
  updateTailnetACL: (tailnet: string) => `/tailnet/${tailnet}/acl`,
  previewTailnetACL: (tailnet: string) => `/tailnet/${tailnet}/acl/preview`,
  validateTailnetACL: (tailnet: string) => `/tailnet/${tailnet}/acl/validate`,
  listTailnetDevices: (tailnet: string) => `/tailnet/${tailnet}/devices`,
  listTailnetKeys: (tailnet: string) => `/tailnet/${tailnet}/keys`,
  createTailnetKey: (tailnet: string) => `/tailnet/${tailnet}/keys`,
  getTailnetKey: (tailnet: string, keyId: string) => `/tailnet/${tailnet}/keys/${keyId}`,
  deleteTailnetKey: (tailnet: string, keyId: string) => `/tailnet/${tailnet}/keys/${keyId}`,
  getTailnetNameservers: (tailnet: string) => `/tailnet/${tailnet}/dns/nameservers`,
  updateTailnetNameservers: (tailnet: string) => `/tailnet/${tailnet}/dns/nameservers`,
  getTailnetDNSPreferences: (tailnet: string) => `/tailnet/${tailnet}/dns/preferences`,
  updateTailnetDNSPreferences: (tailnet: string) => `/tailnet/${tailnet}/dns/preferences`,
  getTailnetDNSSearchPaths: (tailnet: string) => `/tailnet/${tailnet}/dns/searchpaths`,
  updateTailnetDNSSearchPaths: (tailnet: string) => `/tailnet/${tailnet}/dns/searchpaths`
}
