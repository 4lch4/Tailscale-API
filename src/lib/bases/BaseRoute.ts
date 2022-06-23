/*
 * —————————————————————————————————————————————————————————————————————————————
 * Project Name			⸺ Cloudron API Lib
 * Project Version	⸺ 0.0.0
 * Project Desc.		⸺ An API for easily generating a new project or individual components.
 * Author						⸺ Devin W. Leaman (4lch4)
 * Company					⸺ 4lch4 Industries, LLC.
 * —————————————————————————————————————————————————————————————————————————————
 * File Path				⸺ /src/lib/bases/BasePath.ts
 * File Created			⸺ 2022-06-22 @ 17:45:22-05:00
 * Last Modified		⸺ 2022-06-23 @ 03:42:12-05:00
 * Modified By			⸺ Devin W. Leaman (4lch4) (hey@4lch4.email)
 * —————————————————————————————————————————————————————————————————————————————
 * MIT License			⸺ https://opensource.org/licenses/MIT
 *
 * Copyright (c) 2022, Devin W. Leaman (4lch4) (hey@4lch4.email)
 * —————————————————————————————————————————————————————————————————————————————
 */

import Axios, { AxiosInstance } from 'axios'
import { IAppConfig, IRequestProperties } from '../../interfaces/index.js'

/** A base utility class that each API route class will extend. */
export class BaseRoute {
  /** The Axios Instance used to make requests to the API. */
  protected client: AxiosInstance

  /**
   * The constructor for the class which uses the provided config object to
   * create a new Axios Instance.
   *
   * @param config The object containing the necessary config settings.
   */
  constructor(protected config: IAppConfig) {
    /**
     * Creates a new Axios Instance and assign it to the client property. The
     * authentication token is passed as the username and the password is left
     * blank as per the API documentation.
     */
    this.client = Axios.create({
      baseURL: config.baseURL,
      auth: { username: config.apiToken, password: '' },
      headers: { 'Content-Type': `application/${config.responseFormat.toLowerCase()}` }
    })
  }

  /**
   * Sends a request to the Tailscale API and returns the response.
   *
   * @param props The properties of the request.
   * @returns The response from the API.
   */
  protected async sendRequest({ data, headers, method, params, url }: IRequestProperties) {
    try {
      const {
        data: dataOut,
        headers: headersOut,
        status,
        statusText
      } = await this.client.request({ data, method, params, url, headers })

      return { data: dataOut, headers: headersOut, status, statusText }
    } catch (error) {
      throw error
    }
  }
}
