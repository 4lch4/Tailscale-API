/*
 * -----------------------------------------------------------------------------
 * Project Name			⸺ Tailscale API Lib
 * Project Version	⸺ 1.0.0
 * Project Desc.		⸺ An API for easily generating a new project or individual components.
 * Author						⸺ Devin W. Leaman (4lch4)
 * Company					⸺ 4lch4 Industries, LLC.
 * -----------------------------------------------------------------------------
 * File Path				⸺ /src/routes/TailnetsRoutes.ts
 * File Created			⸺ 2022-06-23 @ 00:46:05-05:00
 * Last Modified		⸺ 2022-06-23 @ 08:49:06-05:00
 * Modified By			⸺ Devin W. Leaman (4lch4) (hey@4lch4.email)
 * -----------------------------------------------------------------------------
 * MIT License			⸺ https://opensource.org/licenses/MIT
 *
 * Copyright (c) 2022, Devin W. Leaman (4lch4) (hey@4lch4.email)
 * -----------------------------------------------------------------------------
 */

import { IPreviewTailnetACLParams, ITailnetCapabilities } from '../interfaces/index.js'
import { BaseRoute, TailnetRoutesPaths } from '../lib/index.js'

export class TailnetsRoutes extends BaseRoute {
  /**
   * Retrieves the ACL that is currently set for the given tailnet. Supply the
   * tailnet of interest in the path. This endpoint can send back either the
   * HuJSON of the ACL or a parsed JSON, depending on the `Accept` header.
   *
   * @param tailnet The Tailnet you want to get the ACL for.
   */
  async getTailnetACL(tailnet: string) {
    return this.sendRequest({
      method: 'GET',
      url: TailnetRoutesPaths['getTailnetACL'](tailnet)
    })
  }

  /**
   * Sets the ACL for the given domain. HuJSON and JSON are both accepted
   * inputs. An `If-Match` header can be set to avoid missed updates.
   *
   * Returns the updated ACL in JSON or HuJSON according to the `Accept` header
   * on success. Otherwise, errors are returned for incorrectly defined ACLs,
   * ACLs with failing tests on attempted updates, and mismatched `If-Match`
   * header and ETag.
   *
   * @param tailnet The Tailnet you want to update.
   * @param acl The ACL to assign/set to the Tailnet.
   * @param headers An optional object of headers to send with the request.
   */
  async updateTailnetACL(tailnet: string, acl: string, headers?: any) {
    return this.sendRequest({
      method: 'POST',
      url: TailnetRoutesPaths['updateTailnetACL'](tailnet),
      data: acl,
      headers
    })
  }

  /**
   * Determines what rules match for a user on an ACL without saving the ACL to
   * the server.
   *
   * @param tailnet The Tailnet you wish to interact with.
   * @param params The parameters to use for the preview.
   */
  async previewTailnetACL(tailnet: string, params: IPreviewTailnetACLParams) {
    return this.sendRequest({
      method: 'POST',
      url: TailnetRoutesPaths['previewTailnetACL'](tailnet),
      params
    })
  }

  /**
   * This endpoint works in one of two modes:
   *
   * 1. With a request body that's a JSON array, the body is interpreted as ACL
   * tests to run against the domain's current ACLs.
   * 2. With a request body that's a JSON object, the body is interpreted as a
   * hypothetical new JSON (HuJSON) body with new ACLs, including any tests.
   *
   * In either case, this endpoint does not modify the ACL in any way.
   *
   * @param tailnet The Tailnet you wish to interact with.
   * @param acl The ACL policy to validate.
   */
  async validateTailnetACL(tailnet: string, acl: string) {
    return this.sendRequest({
      method: 'POST',
      url: TailnetRoutesPaths['validateTailnetACL'](tailnet),
      data: acl
    })
  }

  /**
   * Lists the devices in a tailnet.
   *
   * Use the `fields` query parameter to explicitly indicate which fields are
   * returned.
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
   * @param tailnet The Tailnet you wish to interact with.
   */
  async listTailnetDevices(tailnet: string) {
    return this.sendRequest({
      method: 'GET',
      url: TailnetRoutesPaths['listTailnetDevices'](tailnet)
    })
  }

  /**
   * Returns a list of active keys for a tailnet for the user who owns the API
   * key used to perform this query.
   *
   * @param tailnet The Tailnet you wish to interact with.
   */
  async listTailnetKeys(tailnet: string) {
    return this.sendRequest({
      method: 'GET',
      url: TailnetRoutesPaths['listTailnetKeys'](tailnet)
    })
  }

  /**
   * Create a new key in a tailnet associated with the user who owns the API key
   * used to perform this request.
   *
   * @param tailnet The Tailnet you wish to interact with.
   * @param capabilities A mapping of resources to permissible actions.
   */
  async createTailnetKey(tailnet: string, capabilities: ITailnetCapabilities) {
    return this.sendRequest({
      method: 'GET',
      url: TailnetRoutesPaths['createTailnetKey'](tailnet),
      data: { capabilities }
    })
  }

  /**
   * Returns a JSON object with information about specific key.
   *
   * @param tailnet The Tailnet you wish to interact with.
   * @param keyId The ID of the key you wish to retrieve.
   */
  async getTailnetKey(tailnet: string, keyId: string) {
    return this.sendRequest({
      method: 'GET',
      url: TailnetRoutesPaths['getTailnetKey'](tailnet, keyId)
    })
  }

  /**
   * Delete a specific key from the given Tailnet.
   *
   * @param tailnet The Tailnet you wish to interact with.
   * @param keyId The ID of the key you wish to delete.
   */
  async deleteTailnetKey(tailnet: string, keyId: string) {
    return this.sendRequest({
      method: 'DELETE',
      url: TailnetRoutesPaths['deleteTailnetKey'](tailnet, keyId)
    })
  }

  /**
   * Lists the DNS nameservers for a tailnet.
   *
   * @param tailnet The Tailnet you wish to interact with.
   */
  async getTailnetNameservers(tailnet: string) {
    return this.sendRequest({
      method: 'GET',
      url: TailnetRoutesPaths['getTailnetNameservers'](tailnet)
    })
  }

  /**
   * Replaces the list of DNS nameservers for the given tailnet with the list
   * supplied by the user.
   *
   * Note that changing the list of DNS nameservers may also affect the status
   * of MagicDNS (if MagicDNS is on).
   *
   * @param tailnet The Tailnet you wish to interact with.
   * @param nameservers The nameservers to set.
   */
  async updateTailnetNameservers(tailnet: string, nameservers: string[]) {
    return this.sendRequest({
      method: 'POST',
      url: TailnetRoutesPaths['updateTailnetNameservers'](tailnet),
      data: { dns: nameservers }
    })
  }

  /**
   * Retrieves the DNS preferences that are currently set for the given tailnet.
   *
   * @param tailnet The Tailnet you wish to interact with.
   */
  async getTailnetDNSPreferences(tailnet: string) {
    return this.sendRequest({
      method: 'GET',
      url: TailnetRoutesPaths['getTailnetDNSPreferences'](tailnet)
    })
  }

  /**
   * Replaces the DNS preferences for a tailnet, specifically, the MagicDNS
   * setting. Note that MagicDNS is dependent on DNS servers.
   *
   * If there is at least one DNS server, then MagicDNS can be enabled.
   * Otherwise, it returns an error.
   *
   * Note that removing all nameservers will turn off MagicDNS. To reenable it,
   * nameservers must be added back, and MagicDNS must be explicitly turned on.
   *
   * @param tailnet The Tailnet you wish to interact with.
   * @param dnsPreferences The DNS preferences to set.
   */
  async updateTailnetDNSPreferences(tailnet: string, dnsPreferences: { magicDNS: boolean }) {
    return this.sendRequest({
      method: 'POST',
      url: TailnetRoutesPaths['updateTailnetDNSPreferences'](tailnet),
      data: { magicDNS: dnsPreferences.magicDNS }
    })
  }

  /**
   * Retrieves the list of search paths that is currently set for the given
   * tailnet.
   *
   * @param tailnet The Tailnet you wish to interact with.
   */
  async getTailnetDNSSearchPaths(tailnet: string) {
    return this.sendRequest({
      method: 'GET',
      url: TailnetRoutesPaths['getTailnetDNSSearchPaths'](tailnet)
    })
  }

  /**
   * Replaces the list of searchpaths with the list supplied by the user and
   * returns an error otherwise.
   *
   * @param tailnet The Tailnet you wish to interact with.
   * @param dnsSearchPaths The DNS search paths to update.
   */
  async updateTailnetDNSSearchPaths(tailnet: string, dnsSearchPaths: string[]) {
    return this.sendRequest({
      method: 'POST',
      url: TailnetRoutesPaths['updateTailnetDNSSearchPaths'](tailnet),
      data: { searchPaths: dnsSearchPaths }
    })
  }
}
