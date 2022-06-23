/*
 * —————————————————————————————————————————————————————————————————————————————
 * Project Name			⸺ Tailscale API Lib
 * Project Version	⸺ 0.0.0
 * Project Desc.		⸺ An API for easily generating a new project or individual components.
 * Author						⸺ Devin W. Leaman (4lch4)
 * Company					⸺ 4lch4 Industries, LLC.
 * —————————————————————————————————————————————————————————————————————————————
 * File Path				⸺ /src/interfaces/IPreviewTailnetACLParams.ts
 * File Created			⸺ 2022-06-23 @ 01:27:03-05:00
 * Last Modified		⸺ 2022-06-23 @ 03:45:33-05:00
 * Modified By			⸺ Devin W. Leaman (4lch4) (hey@4lch4.email)
 * —————————————————————————————————————————————————————————————————————————————
 * MIT License			⸺ https://opensource.org/licenses/MIT
 *
 * Copyright (c) 2022, Devin W. Leaman (4lch4) (hey@4lch4.email)
 * —————————————————————————————————————————————————————————————————————————————
 */

export interface IPreviewTailnetACLParams {
  [key: string]: string

  type: 'user' | 'ipport'

  /**
   * if type=user, a user's email. If type=ipport, a IP address + port like
   * "10.0.0.1:80".
   *
   * @example
   * type=user:
   * previewFor = 'user@example.com'
   *
   * @example
   * type=ipport:
   * previewFor = '10.0.0.1:80'
   */
  previewFor: string
}
