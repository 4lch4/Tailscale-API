/*
 * —————————————————————————————————————————————————————————————————————————————
 * Project Name			⸺ Cloudron API Lib
 * Project Version	⸺ 0.0.0
 * Project Desc.		⸺ An API for easily generating a new project or individual components.
 * Author						⸺ Devin W. Leaman (4lch4)
 * Company					⸺ 4lch4 Industries, LLC.
 * —————————————————————————————————————————————————————————————————————————————
 * File Path				⸺ /src/interfaces/IRequest.ts
 * File Created			⸺ 2022-06-22 @ 18:13:30-05:00
 * Last Modified		⸺ 2022-06-23 @ 03:37:59-05:00
 * Modified By			⸺ Devin W. Leaman (4lch4) (hey@4lch4.email)
 * —————————————————————————————————————————————————————————————————————————————
 * MIT License			⸺ https://opensource.org/licenses/MIT
 *
 * Copyright (c) 2022, Devin W. Leaman (4lch4) (hey@4lch4.email)
 * —————————————————————————————————————————————————————————————————————————————
 */
import { Method } from 'axios'

export interface IRequestProperties {
  /** The HTTP method to use for the request. */
  method: Method

  /** The URL to append to the end of the base URL for the request. */
  url: string

  /** The optional data to send as the body of the request. */
  data?: any

  /** The optional query params to append to the request URL. */
  params?: { [key: string]: string }

  /** An optional object of headers to append to an individual request. */
  headers?: { [key: string]: string }
}
