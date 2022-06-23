/*
 * —————————————————————————————————————————————————————————————————————————————
 * Project Name			⸺ Tailscale API Lib
 * Project Version	⸺ 0.0.0
 * Project Desc.		⸺ An API for easily generating a new project or individual components.
 * Author						⸺ Devin W. Leaman (4lch4)
 * Company					⸺ 4lch4 Industries, LLC.
 * —————————————————————————————————————————————————————————————————————————————
 * File Path				⸺ /src/routes/Devices.ts
 * File Created			⸺ 2022-06-23 @ 00:46:05-05:00
 * Last Modified		⸺ 2022-06-23 @ 04:16:28-05:00
 * Modified By			⸺ Devin W. Leaman (4lch4) (hey@4lch4.email)
 * —————————————————————————————————————————————————————————————————————————————
 * MIT License			⸺ https://opensource.org/licenses/MIT
 *
 * Copyright (c) 2022, Devin W. Leaman (4lch4) (hey@4lch4.email)
 * —————————————————————————————————————————————————————————————————————————————
 */
import { BaseRoute, DeviceRoutesPaths } from '../lib/index.js'

export class DevicesRoutes extends BaseRoute {
  /**
   * Returns the details for the specified device. Supply the device of interest
   * in the path using its Id. Use the `fields` query parameter to explicitly
   * indicate which fields are returned.
   *
   * The `fields` parameter can be any of the following:
   *
   * - `all`: returns all fields in the response.
   * - `default`: return all fields except:
   *  - `enabledRoutes`
   *  - `advertisedRoutes`
   *  - `clientConnectivity` (which contains the following fields:
   * `mappingVariesByDestIP`, `derp`, `endpoints`, `latency`, and
   * `clientSupports`)
   *
   * @param deviceId The ID of the device to retrieve.
   */
  async getDevice(deviceId: string, fields?: string[]) {
    return this.sendRequest({
      method: 'GET',
      url: DeviceRoutesPaths['getDevice'](deviceId),
      params: fields ? { fields: fields.join(',') } : undefined
    })
  }

  /**
   * Deletes the provided device from its Tailnet. The device must belong to the
   * user's tailnet. Deleting shared/external devices is not supported.
   *
   * @param deviceId The ID of the device to delete.
   */
  async deleteDevice(deviceId: string) {
    return this.sendRequest({
      method: 'DELETE',
      url: DeviceRoutesPaths['deleteDevice'](deviceId)
    })
  }

  /**
   * Retrieves the list of subnet routes that a device is advertising, as well
   * as those that are enabled for it. Enabled routes are not necessarily
   * advertised (e.g. for pre-enabling), and likewise, advertised routes are not
   * necessarily enabled.
   *
   * @param deviceId The ID of the device to query.
   */
  async getDeviceRoutes(deviceId: string) {
    return this.sendRequest({
      method: 'GET',
      url: DeviceRoutesPaths['getDeviceRoutes'](deviceId)
    })
  }

  /**
   * Sets which subnet routes are enabled to be routed by a device by replacing
   * the existing list of subnet routes with the supplied parameters. Routes can
   * be enabled without a device advertising them (e.g. for preauth). Returns a
   * list of enabled subnet routes and a list of advertised subnet routes for a
   * device.
   *
   * @param deviceId The ID of the device to update.
   * @param routes The routes to set on the device.
   */
  async setDeviceRoutes(deviceId: string, routes: string[]) {
    return this.sendRequest({
      method: 'POST',
      url: DeviceRoutesPaths['setDeviceRoutes'](deviceId),
      data: { routes }
    })
  }

  /**
   * Marks a device as authorized, for Tailnets where device authorization is
   * required.
   *
   * @param deviceId The ID of the device to authorize.
   */
  async authorizeDevice(deviceId: string) {
    return this.sendRequest({
      method: 'POST',
      url: DeviceRoutesPaths['authorizeDevice'](deviceId)
    })
  }

  /**
   * Updates the ACL tags for the device with the given ID.
   *
   * @param deviceId The ID of the device to update.
   * @param tags A string array of the tags to assign to the device.
   */
  async setDeviceTags(deviceId: string, tags: string[]) {
    return this.sendRequest({
      method: 'GET',
      url: DeviceRoutesPaths['setDeviceTags'](deviceId),
      data: { tags }
    })
  }

  /**
   * Updates the device key on the device with the given ID.
   *
   * @param deviceId The ID of the device to update.
   * @param keyExpiryDisabled Whether or not to disable the key expiry.
   */
  async updateDeviceKey(deviceId: string, keyExpiryDisabled: boolean) {
    return this.sendRequest({
      method: 'GET',
      url: DeviceRoutesPaths['updateDeviceKey'](deviceId),
      data: { keyExpiryDisabled }
    })
  }
}

