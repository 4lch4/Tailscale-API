/*
 * -----------------------------------------------------------------------------
 * Project Name			⸺ Tailscale API Lib
 * Project Version	⸺ 1.0.0
 * Project Desc.		⸺ An API for easily generating a new project or individual components.
 * Author						⸺ Devin W. Leaman (4lch4)
 * Company					⸺ 4lch4 Industries, LLC.
 * -----------------------------------------------------------------------------
 * File Path				⸺ /src/lib/bases/BaseRoute.ts
 * File Created			⸺ 2022-06-23 @ 00:09:16-05:00
 * Last Modified		⸺ 2022-06-23 @ 09:04:14-05:00
 * Modified By			⸺ Devin W. Leaman (4lch4) (hey@4lch4.email)
 * -----------------------------------------------------------------------------
 * MIT License			⸺ https://opensource.org/licenses/MIT
 *
 * Copyright (c) 2022, Devin W. Leaman (4lch4) (hey@4lch4.email)
 * -----------------------------------------------------------------------------
 */

import Axios, { AxiosInstance } from 'axios'
import { IAppConfig, IRequestParams } from '../../interfaces/index.js'

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
   * @param params The available parameters for sending a request.
   */
  protected async sendRequest({ data, headers, method, params, url }: IRequestParams) {
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
