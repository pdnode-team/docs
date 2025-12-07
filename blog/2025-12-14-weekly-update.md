---
title: Weekly Update 12/8 - 12/14
description: Weekly Update 12/8 12/14
slug: weekly-update-12/8-12/14
authors: "bret"
tags: ["weekly-update"]
hide_table_of_contents: false
draft: true
---
# Weekly Update

This is the first weekly update, but it will definitely not be the last. 

I will write a weekly update every Sunday/Saturday/Friday.

<!-- truncate -->

Okay, let's begin.

Weekly updates include the following content?
- Weekly updates include bug reports, new content, changelogs, and more.

## Fault Report
### Cloudflare Outage Incident on November 18th

Event: Multiple pdnode services, including Pdnode Server Status, Pdnode Server Panel, and Pdnode.com, experienced periods of being offline and then back online.

Time of Occurrence (UTC): 11.18 03:32

Time of Recovery (UTC): 08:27

Cause: All (almost) Pdnode services rely on Cloudflare, but a Cloudflare outage on November 18th caused Pdnode service unavailability. Please see the Cloudflare incident report for details.

### December 2nd - December 3rd K3s/K8s Outage Incident

First Outage:

Time of Occurrence (UTC): 12-02 12:28

Recovery Time (UTC): 12:59

Second Outage:

Time of Occurrence (UTC): 13:24

Recovery Time (UTC): 18:09

Third Outage:

Time of Occurrence (UTC): 22:38

Recovery Time (UTC): 23:32

Cause: K3s/K8s shut down the Docker service required by our server's website bootloader, causing web services to become unavailable.

### December 3rd SMTP Service Failure

Event: SMTP (email) service failure

Occurrence Time (UTC): 06:30:40

Recovery Time (UTC): 06:32:40

Cause: Unknown

### Other

Service Status Page: Visit our status page to check our service status: https://status.pdnode.com/status/pds

## Some decisions.

### Pdnode MC
We are considering creating a Pdnode Minecraft server, but are unsure what type.

Pdnode MC decided in September 2025 that it would not be compatible with Eagler players.

Pdnode MC allows offline players to log in, but may require registration of a Pdnode Account for server security.

Please reply to this email with your suggestions.

### Pdnode Sites

Pdnode is considering creating a website proxy service in the future.

Proxyed websites can be accessed via xxx.pdnode.sites.

### Pdnode Nodes

Pdnode needs servers. If you would like to donate servers, please reply to this email.

### Pdnode VIP

Pdnode VIP is one way to support Pdnode.

VIP: $5 per month, $50 per year

SVIP: $10 per month, $100 per year

If you would like to donate more to Pdnode, please refer to Donate.

To purchase, please reply to this email.

### Donate
We appreciate donations of any amount.

Single donation: Minimum $1

Monthly donation: Minimum $3

To donate, please reply to this email.

Donors will be specially noted on the official website, in order of donation amount.

## Update Report

### Pdnode.con has been updated

- Fixed known bugs

- Theme switching function is complete

- Translated, supports Chinese and English

### User terms have been updated

- Added other terms, fixed some terms

:::tip
You can [click here](http://wiki.pdnode.com/en/platform/terms) to view the updated terms of service.
:::

### The Terms of Service and Privacy Policy are missing.

The Terms of Service and Privacy Policy of pdnode.com have not yet been ported and are temporarily inaccessible.

You can still view them through the [Pdnode Wiki](https://wiki.pdnode.com/en/platform).