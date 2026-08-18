I double-checked the current hardware and specs, and I would change several things from my earlier recommendation.

The biggest changes are: BirdDog X5 Ultra becomes my preferred PTZ at the higher budget, PTZOptics Move 4K 20X remains the value choice, Magewell remains a good encoder choice, HD8 ISO is the right higher-end switcher, and the roaming handheld should not use the same directional RF architecture as the fixed PTZs.

Also, I’d standardize the entire race coverage workflow at 1080p59.94. That’s the right tradeoff for fast bike racing.

Revised builds

Node	Qty	Under $10k	~$20k — Recommended	~$45k — Pro
PTZ Cameras	4	Budget 20x SRT PTZ	PTZOptics Move 4K 20X	BirdDog X5 Ultra
External PTZ Encoders	0	Built-in	Built-in	0 normally / optional backups
PTZ Controller	1	Basic VISCA-IP joystick	PTZOptics PT-JOY-G4	BirdDog KBD / compatible pro controller
Remote PTZ RF Radios	4	Ubiquiti airMAX	Ubiquiti airMAX	Higher-end dedicated PtMP network
RF Base/Sector	1	airMAX base	airMAX base + sector	2 sectors/base radios for redundancy/coverage
RF Backhaul Radios	2	1 pair	1 dedicated pair	4 / redundant pairs
Remote PTZ PoE Switches	4	Small PoE+	Small managed PoE+	Managed industrial PoE+
Remote Handheld Camera	1	Existing	Existing Canon/Sony	Existing/pro camera
Handheld Encoder	1	Budget SRT	Magewell Ultra Encode SDI	LiveU Solo Pro
Handheld Transmission	1 system	Limited-range wireless / SRT	Cellular or RF depending coverage	LiveU bonded cellular
Drone	1	Existing	Existing	Production-capable DJI
Drone Controller	1	HDMI output	HDMI output	HDMI output
HDMI→SDI Converter	1	Blackmagic	Blackmagic	Blackmagic + spare
Production Network Switch	1	Managed Gigabit	Managed PoE+ Gigabit	2× managed switches
SRT/IP Decoders	5	PTZ 1–4 + handheld	PTZ 1–4 + handheld	Dedicated decoders + spare
Switcher	1	ATEM SDI Extreme ISO	ATEM Television Studio HD8	ATEM Television Studio HD8 ISO
Graphics PC	1	Existing	Dedicated	Dedicated high-spec
Graphics/Replay	1	vMix HD	vMix 4K	vMix Pro
Program Multiview	1–2	1 monitor	2 monitors	2–3 broadcast monitors
Internet Router	1	Basic multi-WAN	Peplink	Peplink dual-5G class
Starlink	1	Yes	Yes	Yes
Cellular WANs	1–3	1	2 different carriers	3 carriers
Intercom System	1	Basic	Hollyland/Saramonic	Higher-end wireless intercom
Remote Power Systems	5+	Battery/AC	V-mount + PoE	Redundant V-mount/UPS
RF Masts	5+	Basic	Proper elevated masts	Heavy-duty masts + redundancy

⸻

PTZ: I would narrow it to two cameras

~$20k system — PTZOptics Move 4K 20X

The  ⁠PTZOptics Move 4K 20X makes sense here.

It has:

* 1/1.8” Sony CMOS
* 20x optical
* 31–589mm full-frame equivalent
* F/1.58–3.95
* 1080p59.94 SDI
* 4K59.94 HDMI/IP
* SRT built in
* H.264/H.265
* Gigabit Ethernet
* PoE+
* VISCA-IP
* 255 presets

PTZOptics explicitly lists SRT support, so I can confirm we do not need four Magewell encoders on these cameras.  

That’s a big cost/complexity saving.

Your entire remote node becomes:

Move 4K → Ethernet → PoE switch → RF radio

One Ethernet connection effectively handles video transmission, PTZ control and potentially power locally.

⸻

~$45k system — I’d change to BirdDog X5 Ultra

This is one of the biggest revisions.

The BirdDog X5 Ultra specification list includes:

* 4K60
* 20x optical
* 12G-SDI
* HDMI 2.0
* Gigabit Ethernet
* PoE+
* H.264/H.265
* SRT
* NDI HX2/HX3
* RTSP
* VISCA-IP
* extremely fine 0.1–200°/sec PTZ movement
* $2,995 MSRP

So four cameras are about $12k.  

That is where I’d spend money before jumping to $4k+ Canons.

Why not Canon CR-N350?

The Canon is a very good camera, but its sensor is only 1/2.3”. It does give you a 20x F/1.8–2.8 lens and roughly 30–616mm equivalent coverage.  

For your combined crit + concert requirement, I wouldn’t automatically spend the extra money on it.

I’d actually rent/test:

BirdDog X5 Ultra vs PTZOptics Move 4K 20X

outdoors in changing race-day light before buying four.

⸻

RF network — Ubiquiti is still the right idea, with a caveat

I would keep inexpensive fixed wireless for the PTZs.

You don’t need a $5,000 Teradek on every fixed camera.

Four PTZ streams at, say, 12–16 Mbps each are only:

48–64 Mbps total payload.

That’s easy bandwidth-wise for modern fixed wireless.

The difficult part is:

line of sight + interference + antenna placement.

So the fixed PTZ architecture remains:

PTZ → Ethernet → directional CPE → elevated RF hub

That’s a very sensible cost-saving decision.

But I would spend money on:

* elevated antennas
* proper sector coverage
* weatherproof enclosures
* PoE
* spare radios
* RF surveying
* redundant backhaul

before spending substantially more on the PTZ itself.

⸻

Handheld — this needed the biggest correction

I wouldn’t use a LiteBeam-style directional radio on a camera operator walking around the course.

That’s fine for a stationary PTZ.

It’s bad for:

Camera operator runs around corner → antenna is now facing a brick building.

~$10k

Keep the handheld fairly close to production and use conventional wireless video.

~$20k

I’d use a Magewell Ultra Encode SDI and transport it over whatever mobile network architecture we settle on.

Magewell officially supports 1080p60, H.264/H.265, SRT Caller/Listener and up to 16 Mbps.  

~$45k

LiveU Solo Pro.

This is exactly the sort of application it was designed for.

It supports:

* SDI + HDMI
* H.264/H.265
* 1080p60
* 4K60
* internal battery
* up to six simultaneous bonded links
* four external cellular modems
* Wi-Fi
* Ethernet

and uses LiveU’s LRT transport.  

So your camera operator can actually move.

⸻

Switching — Blackmagic remains the right choice

For the inexpensive system:

Eight SDI inputs is exactly enough for:

1. PTZ 1
2. PTZ 2
3. PTZ 3
4. PTZ 4
5. Handheld
6. Drone
7. Graphics
8. Spare

For the ~$20k system, I’d move to ATEM Television Studio HD8.

For $45k:

ATEM Television Studio HD8 ISO

Blackmagic currently lists the ISO model at $4,395. It gives you eight 3G-SDI inputs and records all eight inputs separately, plus program, audio and the Resolve project. It also has direct RTMP streaming.  

For sports, the ISO version is absolutely worth the extra $1,100 once the budget permits.

⸻

Decoders — I’d rethink buying five random boxes

This is another area I’d change.

The simplistic architecture was:

5 SRT feeds → 5 SRT decoders → ATEM

That works.

But five independent inexpensive decoders creates a lot of:

* power supplies
* Ethernet cables
* SDI cables
* configuration
* failure points

At $10k, fine.

At $20–45k, I’d investigate a multi-channel receive/decoding platform or a vMix-based receive machine with a multi-output SDI card.

That could turn:

PTZ1 SRT
PTZ2 SRT
PTZ3 SRT
PTZ4 SRT
Handheld SRT

into five SDI outputs from one rackmount system.

Much cleaner.

⸻

Graphics — vMix is absolutely where I’d go

I’d keep:

$10k → vMix HD

$20k → vMix 4K

$45k → vMix Pro

And I’d treat the graphics/replay computer as a dedicated production subsystem.

Eventually it can handle:

Timing data → vMix

Rider database → vMix

Lap counter → vMix

Leaderboard → vMix

GPS telemetry → vMix

Heart rate → vMix

Instant replay → vMix

Sponsor graphics → vMix

then output the graphics into the ATEM.

⸻

One major missing piece: audio

This wasn’t adequately represented in our original equipment tree.

For a race broadcast you need:

Commentators

Ambient course audio

Start/finish PA/event audio

possibly:

Remote camera nat sound

I’d budget for at minimum:

2 commentator headsets/mics

small digital audio mixer

ambient stereo/shotgun microphones

PA feed isolation/DI

audio monitoring

Then feed the finished audio mix into the ATEM.

That should be a proper node in the $20k and $45k systems.

⸻

Another missing piece: comms

For:

Director

PTZ operator

Handheld operator

Drone pilot

you really want full-duplex comms.

For the inexpensive system, something like:

is currently around $489.

For larger productions, I’d budget substantially more for comms and potentially integrate ATEM talkback.

⸻

What I would actually build

After checking everything, my ~$20k target system would be:

4× PTZOptics Move 4K 20X

→ internal SRT
→ private fixed RF network

1× remote handheld

→ Magewell SRT encoder
→ mobile RF/cellular transport

1× drone

→ controller HDMI
→ SDI

All converge into:

ATEM Television Studio HD8

plus:

PTZ joystick

vMix graphics PC

audio mixer + commentary

wireless intercom

Peplink + Starlink + two cellular carriers

and run the entire race coverage workflow at:

1080p59.94

That is the system I think gives you the best balance of cost, image quality, motion reproduction, reliability, expandability and portability.

The $45k upgrade should primarily buy reliability, not dramatically more expensive cameras: BirdDog X5 Ultras, HD8 ISO, LiveU for the handheld, better RF redundancy, better power, better comms, better audio, replay and spare hardware.
