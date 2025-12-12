---
sidebar_position: 3
description: Pdnode Product Specifications
---
# Product/Development Specifications
Pdnode has a set of standards to better develop products.

**All guidelines are recommendations and are not mandatory.**

## Port Specification
For Pdnode products, unless there are specific application requirements, please set the **application port to 25200-25299** (Total: 100 Ports).

:::tip
Since Pdnode products do not have an automatic port switching function, please reserve a 25200 - 25299 ports.
:::


### Frontend
25210 - 25219 (10 Ports)

- 25210: Pdnode.com used this port.
- 25211: Pdnode Account used this port.

### Backend
25220 - 25229 (10 Ports)

- 25220: Reserved ports
- 25221: Pdnode Account used this port.

### Pdnode Daemon

:::tip
Pdnode Daemon used 25200 Port.
:::


Pdnode Daemon is a daemon provided for all open-source Pdnode products.

#### What does Pdnode Daemon do?

- Check the operational status of the Pdnode product.
- Managing Pdnode products
- Check Pdnode product progress
- Check if the port is in use.

### Unallocated
25230 - 25299 (70 Ports)
2520１ - 25209 (９ Ports)

