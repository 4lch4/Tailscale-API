# Tailscale-API

This repository/package is a wrapper library for interacting with [the Tailscale API][0]. It's written in TypeScript and published to the [NPM registry][1] and [GitHub Package Repository][2].

## ToDo

The following table is all the routes, and the associated HTTP method, that need to be implemented for the 1.0.0 release.

- [x] **GET**     ⸺ `/api/v2/device/:deviceID`                  ⸺ List the details for a device.
- [x] **DELETE**  ⸺ `/api/v2/device/:deviceID`                  ⸺ Deletes the device from its Tailnet.
- [x] **GET**     ⸺ `/api/v2/device/:deviceID/routes`           ⸺ Fetch subnet routes that are advertised and enabled for a device
- [x] **POST**    ⸺ `/api/v2/device/:deviceID/routes`           ⸺ Set the subnet routes that are enabled for a device.
- [x] **POST**    ⸺ `/api/v2/device/:deviceID/authorized`       ⸺ Authorize a device.
- [x] **POST**    ⸺ `/api/v2/device/:deviceID/tags`             ⸺ Update tags on a device.
- [x] **POST**    ⸺ `/api/v2/device/:deviceID/key`              ⸺ Update device key.
- [x] **GET**     ⸺ `/api/v2/tailnet/:tailnet/acl`              ⸺ Fetch ACL for a Tailnet.
- [x] **POST**    ⸺ `/api/v2/tailnet/:tailnet/acl`              ⸺ Set ACL for a Tailnet.
- [x] **POST**    ⸺ `/api/v2/tailnet/:tailnet/acl/preview`      ⸺ Preview rule matches on an ACL for a resource.
- [x] **POST**    ⸺ `/api/v2/tailnet/:tailnet/acl/validate`     ⸺ Run validation tests against the Tailnet’s active ACL.
- [x] **GET**     ⸺ `/api/v2/tailnet/:tailnet/devices`          ⸺ List the devices for a Tailnet.
- [x] **GET**     ⸺ `/api/v2/tailnet/:tailnet/keys`             ⸺ List the keys for a Tailnet.
- [x] **POST**    ⸺ `/api/v2/tailnet/:tailnet/keys`             ⸺ Create a new key for a Tailnet.
- [x] **GET**     ⸺ `/api/v2/tailnet/:tailnet/keys/:keyID`      ⸺ Get information for a specific key.
- [x] **DELETE**  ⸺ `/api/v2/tailnet/:tailnet/keys/:keyID`      ⸺ Delete a specific key.
- [x] **GET**     ⸺ `/api/v2/tailnet/:tailnet/dns/nameservers`  ⸺ List the DNS nameservers for a Tailnet.
- [x] **POST**    ⸺ `/api/v2/tailnet/:tailnet/dns/nameservers`  ⸺ Replaces the list of DNS nameservers for a Tailnet.
- [x] **GET**     ⸺ `/api/v2/tailnet/:tailnet/dns/preferences`  ⸺ Retrieves the DNS preferences for a Tailnet.
- [x] **POST**    ⸺ `/api/v2/tailnet/:tailnet/dns/preferences`  ⸺ Replaces the DNS preferences for a Tailnet.
- [x] **GET**     ⸺ `/api/v2/tailnet/:tailnet/dns/searchpaths`  ⸺ Retrieves the search paths for a Tailnet.
- [x] **POST**    ⸺ `/api/v2/tailnet/:tailnet/dns/searchpaths`  ⸺ Replaces the search paths for a Tailnet.

[0]: https://github.com/tailscale/tailscale/blob/main/api.md
[1]: http://npmjs.com/
[2]: https://github.com/features/packages
