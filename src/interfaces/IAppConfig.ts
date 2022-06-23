/*
 * —————————————————————————————————————————————————————————————————————————————
 * Project Name			⸺ Cloudron API Lib
 * Project Version	⸺ 0.0.0
 * Project Desc.		⸺ An API for easily generating a new project or individual components.
 * Author						⸺ Devin W. Leaman (4lch4)
 * Company					⸺ 4lch4 Industries, LLC.
 * —————————————————————————————————————————————————————————————————————————————
 * File Path				⸺ /src/interfaces/IAppConfig.ts
 * File Created			⸺ 2022-06-22 @ 17:33:55-05:00
 * Last Modified		⸺ 2022-06-23 @ 02:22:50-05:00
 * Modified By			⸺ Devin W. Leaman (4lch4) (hey@4lch4.email)
 * —————————————————————————————————————————————————————————————————————————————
 * MIT License			⸺ https://opensource.org/licenses/MIT
 *
 * Copyright (c) 2022, Devin W. Leaman (4lch4) (hey@4lch4.email)
 * —————————————————————————————————————————————————————————————————————————————
 */

/**
 * The standard config object containing the required properties for interacting
 * with the Tailscale API.
 */
export interface IAppConfig {
  /**
   * The URL that points to the Tailscale API.
   *
   * @example
   * https://api.tailscale.com/api/v2
   */
  baseURL: string

  /**
   * The authentication token used to authenticate requests to the Tailscale
   * API. You can get this token by logging in to Tailscale, navigating to the
   * Settings page, and then the Keys page under Personal Settings.
   *
   * https://login.tailscale.com/admin/settings/keys
   */
  apiToken: string

  /**
   * The format you wish for the API to return: `json` or `hujson`
   * 
   * **HuJson** is the default format and the only difference between the two is
   * **HuJson** allows for comments and trailing commas.
   */
  responseFormat: string
}
