# Tailscale-Lib

This repository/package is a wrapper library for interacting with [the Tailscale API][0]. It's written in TypeScript and published to the [NPM registry][1] and [GitHub Package Repository][2].

## ToDo

The following table lists all the routes/paths, and the associated HTTP method, along with the class & method to use to call the route/path.

| Route/Path                                 | HTTP Method | Class & Method/Operation ID                     | Description                                                      |
| ------------------------------------------ | ----------- | ----------------------------------------------- | ---------------------------------------------------------------- |
| `/api/v2/device/:deviceID`                 | **GET**     | [DevicesRoutes#getDevice][3]                    | List the details for a device.                                   |
| `/api/v2/device/:deviceID`                 | **DELETE**  | [DevicesRoutes#deleteDevice][3]                 | Deletes the device from its Tailnet.                             |
| `/api/v2/device/:deviceID/routes`          | **GET**     | [DevicesRoutes#getDeviceRoutes][3]              | Fetch subnet routes that are advertised and enabled for a device |
| `/api/v2/device/:deviceID/routes`          | **POST**    | [DevicesRoutes#setDeviceRoutes][3]              | Set the subnet routes that are enabled for a device.             |
| `/api/v2/device/:deviceID/authorized`      | **POST**    | [DevicesRoutes#authorizeDevice][3]              | Authorize a device.                                              |
| `/api/v2/device/:deviceID/tags`            | **POST**    | [DevicesRoutes#setDeviceTags][3]                | Update tags on a device.                                         |
| `/api/v2/device/:deviceID/key`             | **POST**    | [DevicesRoutes#updateDeviceKey][3]              | Update device key.                                               |
| `/api/v2/tailnet/:tailnet/acl`             | **GET**     | [TailnetsRoutes#getTailnetACL][4]               | Fetch ACL for a Tailnet.                                         |
| `/api/v2/tailnet/:tailnet/acl`             | **POST**    | [TailnetsRoutes#updateTailnetACL][4]            | Set ACL for a Tailnet.                                           |
| `/api/v2/tailnet/:tailnet/acl/preview`     | **POST**    | [TailnetsRoutes#previewTailnetACL][4]           | Preview rule matches on an ACL for a resource.                   |
| `/api/v2/tailnet/:tailnet/acl/validate`    | **POST**    | [TailnetsRoutes#validateTailnetACL][4]          | Run validation tests against the Tailnet’s active ACL.           |
| `/api/v2/tailnet/:tailnet/devices`         | **GET**     | [TailnetsRoutes#listTailnetDevices][4]          | List the devices for a Tailnet.                                  |
| `/api/v2/tailnet/:tailnet/keys`            | **GET**     | [TailnetsRoutes#listTailnetKeys][4]             | List the keys for a Tailnet.                                     |
| `/api/v2/tailnet/:tailnet/keys`            | **POST**    | [TailnetsRoutes#createTailnetKey][4]            | Create a new key for a Tailnet.                                  |
| `/api/v2/tailnet/:tailnet/keys/:keyID`     | **GET**     | [TailnetsRoutes#getTailnetKey][4]               | Get information for a specific key.                              |
| `/api/v2/tailnet/:tailnet/keys/:keyID`     | **DELETE**  | [TailnetsRoutes#deleteTailnetKey][4]            | Delete a specific key.                                           |
| `/api/v2/tailnet/:tailnet/dns/nameservers` | **GET**     | [TailnetsRoutes#getTailnetNameservers][4]       | List the DNS nameservers for a Tailnet.                          |
| `/api/v2/tailnet/:tailnet/dns/nameservers` | **POST**    | [TailnetsRoutes#updateTailnetNameservers][4]    | Replaces the list of DNS nameservers for a Tailnet.              |
| `/api/v2/tailnet/:tailnet/dns/preferences` | **GET**     | [TailnetsRoutes#getTailnetDNSPreferences][4]    | Retrieves the DNS preferences for a Tailnet.                     |
| `/api/v2/tailnet/:tailnet/dns/preferences` | **POST**    | [TailnetsRoutes#updateTailnetDNSPreferences][4] | Replaces the DNS preferences for a Tailnet.                      |
| `/api/v2/tailnet/:tailnet/dns/searchpaths` | **GET**     | [TailnetsRoutes#getTailnetDNSSearchPaths][4]    | Retrieves the search paths for a Tailnet.                        |
| `/api/v2/tailnet/:tailnet/dns/searchpaths` | **POST**    | [TailnetsRoutes#updateTailnetDNSSearchPaths][4] | Replaces the search paths for a Tailnet.                         |

[0]: https://github.com/tailscale/tailscale/blob/main/api.md
[1]: http://npmjs.com/
[2]: https://github.com/features/packages
[3]: ./src/routes/DevicesRoutes.ts
[4]: ./src/routes/TailnetsRoutes.ts
