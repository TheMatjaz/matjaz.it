+++
aliases      = ["can-bus-security", "can-bus-security-protocol", "cbs-protocol"]
changefreq   = "monthly"
date         = "2022-05-22T13:25:22+00:00"
description  = "CAN Bus Security (CBS) protocol: lightweight message confidentiality, authentication, and freshness on an automotive bus."
draft        = false
hidefromhome = true
lastmod      = ""
priority     = 0.5
slug         = "cbs"
title        = "CAN Bus Security protocol"
type         = "page"
weight       = 0
highlight    = false
+++

![CBS logo with 3 locks](/images/cbs/cbs_logo.svg)

The CAN Bus Security (CBS) protocol cryptographically secures the communication 
between microcontrollers connected via a CAN FD bus, providing protection
against sniffing, spoofing and replay attacks. CBS offers a simple and 
centralised client-server architecture based solely on symmetric cryptographic
primitives, inspired by the Kerberos protocol. This allows a fast communication 
start-up and a simple reconfiguration or replacement of clients, e.g., in case 
of hardware failures.

### CBS specification

- [Protocol v1.3, document revision 4](/pdf/CAN_Bus_Security_protocol_specification_1.3_rev4.pdf)

**Protocol version**: `vMajor.Minor`. A `Major` number change indicates a 
compatibility break of the protocol. A `Minor` number change indicates an
backwards-compatible addition to the protocol.

**Document revision**: an increase of this number is just a formatting 
improvement, typo fix, rephrasing for clarity and similar change of the 
specification document itself, without changing the behaviour of the protocol
itself.

## [Reference implementation: Hazelnet](https://github.com/TheMatjaz/Hazelnet)

Hazelnet is the reference 
implementation of the CBS protocol, both of the Client and Server roles.
For the cryptographic part it uses the 
[LibAscon](https://github.com/TheMatjaz/LibAscon) implementation of the Ascon
cipher, another project of mine.

The user of the library must handle the physical transmission and reception manually as this library only handles the building of messages to transmit and processing of received messages. This is done to guarantee better portability across systems. The internal library state keeps track of ongoing handshakes, timeouts and other events per each Group.

The library uses standard C11 code and is hardware-independent. The compile targets for a desktop OS add some features like heap memory allocation and use the time and TRNG functionality the OS provides. The any-platform version uses user-provided structs to operate on and requires the user to provide function pointers to custom timestamping and random-number-generators of the used platform; recommended for embedded systems.

### [HzlConfig](https://github.com/TheMatjaz/HazelnetConfig)

HzlConfig is a tiny Python
utility to generate the Hazelnet binary configurations for all CBS Parties
connected to the same CAN bus from a single bus-wide, human-readable JSON 
configuration file.

### [Hazelnet Demo Platform](https://github.com/TheMatjaz/HazelnetDemoPlatform)

The Hazelnet Demo Platform
showcases the Hazelnet library in action, where a set of NXP S32K144 
microcontrollers exchange encrypted and authenticated messages over the CAN FD 
bus accoring to the CAN Bus Security (CBS) protocol.

![Photo of three NXP S32K144 microcontroller boards connected via CAN bus](/images/cbs/hazelnet_demo_platform.jpg)

This demo is not meant for reproducibility, as it's hard to install all
required tools (some are bound by licenses) and to set up the project. The 
purpose of this repository is to provide source code to read as an example on 
how the Hazelnet library could be used (mostly the 
[`Sources/hzlPlatform_TaskHzl.c`](https://github.com/TheMatjaz/HazelnetDemoPlatform/blob/v1.1.1/Sources/hzlPlatform_TaskHzl.c)
file).

[Here](/pdf/hazelnet_demo_platform_hardware.pdf) you can find the description
on how the NXP S32K144EVB evaluation boards should be connected to enable the
demo.

### Logo

- [PNG format](/images/cbs/cbs_logo.png)
- [SVG format](/images/cbs/cbs_logo.svg)
