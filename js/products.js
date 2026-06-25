/* ================================================================
   TATCO — Product Data for urun-detay.html
   ================================================================ */
(function () {
  'use strict';

  var products = {

    /* ---- FIRE PUMPS ---- */
    'p1-uctan-emisli': {
      title: 'End-Suction Horizontal Shaft Fire Pumps',
      img: 'images/p1-uctan-emisli.jpg',
      alt: 'End-Suction Horizontal Shaft Fire Pump',
      category: 'Fire Pumps',
      categoryLink: 'yangin-pompalari.html',
      badge: 'NFPA 20',
      shortDesc: 'Centrifugal type, electric or diesel driven; 22.7–170 m³/h flow range, NFPA 20 / UL / FM approved horizontal shaft fire pump systems for industrial and commercial applications.',
      features: [
        'NFPA 20 / UL Listed / FM Approved',
        'Electric or diesel drive options',
        'Flow range: 22.7–170 m³/h',
        'Horizontal centrifugal pump design',
        'Suitable for all industrial fire protection systems'
      ],
      specs: [
        ['Type', 'End-Suction Horizontal Shaft'],
        ['Drive', 'Electric / Diesel'],
        ['Flow Range', '22.7–170 m³/h'],
        ['Head Range', 'Up to 140 m'],
        ['Standards', 'NFPA 20 / UL / FM']
      ],
      related: ['p1-ayrilabilir-govdeli', 'p1-dikey-turbin', 'p1-jokey']
    },

    'p1-ayrilabilir-govdeli': {
      title: 'Split Case Double-Suction Fire Pumps',
      img: 'images/p1-ayrilabilir-govdeli.jpg',
      alt: 'Split Case Double-Suction Fire Pump',
      category: 'Fire Pumps',
      categoryLink: 'yangin-pompalari.html',
      badge: 'NFPA 20',
      shortDesc: 'High-vibration-resistant split case pump with double-bearing design allowing easy access to the impeller without disconnecting the piping. Flow range: 68–1700 m³/h.',
      features: [
        'Double-bearing design for high vibration resistance',
        'Easy impeller access without pipe disconnection',
        'Flow range: 68–1,700 m³/h',
        'NFPA 20 / UL / FM Approved',
        'Electric or diesel drive options'
      ],
      specs: [
        ['Type', 'Split Case Double-Suction'],
        ['Drive', 'Electric / Diesel'],
        ['Flow Range', '68–1,700 m³/h'],
        ['Bearing Design', 'Double'],
        ['Standards', 'NFPA 20 / UL / FM']
      ],
      related: ['p1-uctan-emisli', 'p1-dikey-turbin', 'p1-jokey']
    },

    'p1-dikey-turbin': {
      title: 'Vertical Turbine Type Fire Pump',
      img: 'images/p1-dikey-turbin.jpg',
      alt: 'Vertical Turbine Type Fire Pump',
      category: 'Fire Pumps',
      categoryLink: 'yangin-pompalari.html',
      badge: 'NFPA 20',
      shortDesc: 'Multi-stage vertical turbine pump ideal for below-surface water sources (well, cistern, reservoir). Impellers run continuously submerged; electric or diesel drive options available.',
      features: [
        'Multi-stage vertical turbine design',
        'Ideal for wells, cisterns and reservoirs',
        'Continuously submerged impellers',
        'Electric or diesel drive options',
        'NFPA 20 / UL / FM Approved'
      ],
      specs: [
        ['Type', 'Vertical Turbine Multi-Stage'],
        ['Water Source', 'Below-Surface (Well / Cistern / Reservoir)'],
        ['Drive', 'Electric / Diesel'],
        ['Standards', 'NFPA 20 / UL / FM']
      ],
      related: ['p1-uctan-emisli', 'p1-ayrilabilir-govdeli', 'p1-jokey']
    },

    'p1-jokey': {
      title: 'Jockey Fire Pump',
      img: 'images/p1-jokey.jpg',
      alt: 'Jockey Fire Pump',
      category: 'Fire Pumps',
      categoryLink: 'yangin-pompalari.html',
      badge: 'NFPA 20',
      shortDesc: 'Small-capacity auxiliary pump that automatically activates on pressure drop in sprinkler systems, maintains system pressure and prevents the main pump from unnecessary operation.',
      features: [
        'Automatic pressure maintenance',
        'Prevents unnecessary main pump starts',
        'Small-capacity auxiliary design',
        'Pressure drop activated',
        'Compatible with all sprinkler systems'
      ],
      specs: [
        ['Type', 'Jockey / Pressure Maintenance'],
        ['Activation', 'Automatic (Pressure Drop)'],
        ['Purpose', 'System Pressure Maintenance'],
        ['Drive', 'Electric'],
        ['Standards', 'NFPA 20']
      ],
      related: ['p1-uctan-emisli', 'p1-ayrilabilir-govdeli', 'p1-dikey-turbin']
    },

    /* ---- ALARM VALVES ---- */
    'p2-islak-alarm': {
      title: 'Wet Alarm Valve',
      img: 'images/p2-islak-alarm.jpg',
      alt: 'Wet Alarm Valve',
      category: 'Alarm Valves',
      categoryLink: 'alarm-vanalari.html',
      badge: 'UL / FM',
      shortDesc: 'Controls wet pipe sprinkler systems in environments without freezing risk (above 4°C). Water motor gong and pressure switch provide both mechanical and electrical alarm. UL Listed / FM Approved, 3″–8″ diameter.',
      features: [
        'UL Listed / FM Approved',
        'Diameter range: 3″–8″',
        'Max. working pressure: 250 PSI',
        'Water motor gong mechanical alarm',
        'Pressure switch electrical alarm'
      ],
      specs: [
        ['Type', 'Wet Alarm Valve'],
        ['Diameter Range', '3″–8″'],
        ['Max. Pressure', '250 PSI'],
        ['Activation', 'Sprinkler Head Opening'],
        ['Standards', 'UL Listed / FM Approved']
      ],
      related: ['p2-kuru-alarm', 'p2-deluge', 'p2-pre-action']
    },

    'p2-kuru-alarm': {
      title: 'Dry Alarm Valve',
      img: 'images/p2-kuru-alarm.jpg',
      alt: 'Dry Alarm Valve',
      category: 'Alarm Valves',
      categoryLink: 'alarm-vanalari.html',
      badge: 'UL / FM',
      shortDesc: 'Designed for areas with freezing risk such as garages, car parks and unheated warehouses. The pipe network is maintained with compressed air or nitrogen. Accelerator option available. Max. 300 PSI.',
      features: [
        'For freezing risk environments (below 4°C)',
        'Compressed air or nitrogen maintained',
        'Accelerator option for faster response',
        'UL Listed / FM Approved',
        'Max. 300 PSI working pressure'
      ],
      specs: [
        ['Type', 'Dry Alarm Valve'],
        ['Network Gas', 'Compressed Air / Nitrogen'],
        ['Max. Pressure', '300 PSI'],
        ['Standards', 'UL Listed / FM Approved'],
        ['Option', 'Accelerator']
      ],
      related: ['p2-islak-alarm', 'p2-deluge', 'p2-pre-action']
    },

    'p2-deluge': {
      title: 'Deluge Alarm Valve',
      img: 'images/p2-deluge.jpg',
      alt: 'Deluge Alarm Valve',
      category: 'Alarm Valves',
      categoryLink: 'alarm-vanalari.html',
      badge: 'UL / FM',
      shortDesc: 'For areas where fire spreads rapidly, such as flammable material storage and aircraft hangars. All nozzles are open; extinguishing agent is discharged to all points simultaneously on activation. Wet/dry pilot and electric activation.',
      features: [
        'All nozzles open — simultaneous discharge',
        'Wet pilot, dry pilot or electric activation',
        'For rapid fire spread environments',
        'Diameter: 1½″–8″',
        'UL Listed / FM Approved'
      ],
      specs: [
        ['Type', 'Deluge Alarm Valve'],
        ['Nozzle Type', 'Open (No Fusible Element)'],
        ['Diameter Range', '1½″–8″'],
        ['Activation', 'Wet / Dry Pilot or Electric'],
        ['Standards', 'UL Listed / FM Approved']
      ],
      related: ['p2-islak-alarm', 'p2-kuru-alarm', 'p2-pre-action']
    },

    'p2-pre-action': {
      title: 'Pre-Action Alarm Valve',
      img: 'images/p2-pre-action.jpg',
      alt: 'Pre-Action Alarm Valve',
      category: 'Alarm Valves',
      categoryLink: 'alarm-vanalari.html',
      badge: 'UL / FM',
      shortDesc: 'For areas sensitive to water damage such as archives, galleries and data centers. Piping remains dry; requires independent detection line for activation. Single and double interlock options. Max. 250 PSI.',
      features: [
        'Dry piping — no accidental water discharge',
        'Single and double interlock options',
        'Requires independent detection line',
        'Diameter: 1½″–8″',
        'UL Listed / FM Approved'
      ],
      specs: [
        ['Type', 'Pre-Action Alarm Valve'],
        ['Piping', 'Dry (Air/Nitrogen)'],
        ['Diameter Range', '1½″–8″'],
        ['Interlock', 'Single / Double'],
        ['Max. Pressure', '250 PSI'],
        ['Standards', 'UL Listed / FM Approved']
      ],
      related: ['p2-islak-alarm', 'p2-kuru-alarm', 'p2-deluge']
    },

    /* ---- SYSTEM VALVES ---- */
    'p3-kelebek-vana': {
      title: 'Tamper Switch Butterfly Valve',
      img: 'images/s3-kelebek.jpg',
      alt: 'Tamper Switch Butterfly Valve',
      category: 'System Valves',
      categoryLink: 'sistem-vanalari.html',
      badge: 'UL / FM',
      shortDesc: 'Butterfly valve with integral tamper switch transmitting valve open/closed position to the fire alarm panel via dry contact. Wafer, grooved and threaded connection types. UL / FM / ULc approved, 1″–12″ diameter.',
      features: [
        'Integral tamper switch (dry contact)',
        'Supervisory signal on any valve movement',
        'Wafer, grooved and threaded connections',
        'UL Listed / FM Approved / ULc',
        'Diameter: 1″–12″, max. 300 PSI'
      ],
      specs: [
        ['Type', 'Butterfly Valve with Tamper Switch'],
        ['End Connection', 'Wafer / Grooved / Threaded'],
        ['Diameter Range', '1″–12″'],
        ['Max. Pressure', '300 PSI'],
        ['Standards', 'UL / FM / ULc']
      ],
      related: ['p3-cek-vana', 'p3-osy', 'p3-nrs']
    },

    'p3-cek-vana': {
      title: 'Check Valve',
      img: 'images/s3-cek-vana.jpg',
      alt: 'Check Valve',
      category: 'System Valves',
      categoryLink: 'sistem-vanalari.html',
      badge: 'UL / FM',
      shortDesc: 'Horizontal and vertical mounted check valves that ensure one-way flow and prevent backflow in fire protection systems. Suitable for water, foam and dry pipe systems.',
      features: [
        'One-way flow / backflow prevention',
        'Horizontal and vertical mounting options',
        'Suitable for water, foam and dry pipe systems',
        'Grooved or flanged end connections',
        'UL Listed / FM Approved'
      ],
      specs: [
        ['Type', 'Check Valve (Swing / Grooved)'],
        ['Function', 'Backflow Prevention'],
        ['Mounting', 'Horizontal / Vertical'],
        ['Standards', 'UL Listed / FM Approved']
      ],
      related: ['p3-kelebek-vana', 'p3-osy', 'p3-nrs']
    },

    'p3-fsfd': {
      title: 'FSFD Flow Switch',
      img: 'images/s3-fsfd.jpg',
      alt: 'FSFD Flow Switch',
      category: 'System Valves',
      categoryLink: 'sistem-vanalari.html',
      badge: 'UL Listed',
      shortDesc: 'Paddle-type flow switch detecting water movement in fire sprinkler systems and triggering alarm panels. Adjustable delay timer, 2″–8″ pipe sizes. UL 346 / FM 1144 approved.',
      features: [
        'Detects water flow in piping',
        'Sends alarm signal to fire alarm panel',
        'Adjustable delay timer',
        'Pipe sizes: 2″–8″',
        'UL 346 / FM 1144 approved'
      ],
      specs: [
        ['Type', 'FSFD Flow Switch (Paddle Type)'],
        ['Pipe Size', '2″–8″'],
        ['Delay', 'Adjustable'],
        ['Signal', 'Dry Contact to Alarm Panel'],
        ['Standards', 'UL 346 / FM 1144']
      ],
      related: ['p3-kelebek-vana', 'p3-test-drenaj', 'p3-akis-olcer']
    },

    'p3-osy': {
      title: 'OS&Y Rising Stem Gate Valve',
      img: 'images/p3-osy-gate.jpg',
      alt: 'OS&Y Rising Stem Gate Valve',
      category: 'System Valves',
      categoryLink: 'sistem-vanalari.html',
      badge: 'UL / FM',
      shortDesc: 'Outside screw & yoke rising stem gate valve for fire protection system isolation. Visual open/closed position indication via rising stem; 2″–12″ size range; UL Listed / FM Approved.',
      features: [
        'Visual position indication (rising stem)',
        'Outside screw and yoke (OS&Y) design',
        'Size range: 2″–12″',
        'UL Listed / FM Approved',
        'Full port / full bore flow path'
      ],
      specs: [
        ['Type', 'OS&Y Rising Stem Gate Valve'],
        ['Size Range', '2″–12″'],
        ['Position Indication', 'Visual (Rising Stem)'],
        ['Standards', 'UL Listed / FM Approved']
      ],
      related: ['p3-nrs', 'p3-kelebek-vana', 'p3-cek-vana']
    },

    'p3-nrs': {
      title: 'NRS Gate Valve',
      img: 'images/s3-nrs.jpg',
      alt: 'NRS Gate Valve',
      category: 'System Valves',
      categoryLink: 'sistem-vanalari.html',
      badge: 'UL / FM',
      shortDesc: 'Non-rising stem gate valve for fire protection system isolation where headroom is limited. Compact design suitable for tight spaces and underground applications. 2″–12″ size range.',
      features: [
        'Non-rising stem — space-saving design',
        'Size range: 2″–12″',
        'UL Listed / FM Approved',
        'Full port flow path',
        'Suitable for confined and underground spaces'
      ],
      specs: [
        ['Type', 'NRS Gate Valve'],
        ['Size Range', '2″–12″'],
        ['Stem Type', 'Non-Rising'],
        ['Standards', 'UL Listed / FM Approved']
      ],
      related: ['p3-osy', 'p3-kelebek-vana', 'p3-cek-vana']
    },

    'p3-kuresel': {
      title: 'Ball Valves',
      img: 'images/s3-kuresel.jpg',
      alt: 'Ball Valve for Fire Protection',
      category: 'System Valves',
      categoryLink: 'sistem-vanalari.html',
      badge: 'UL / FM',
      shortDesc: 'Quarter-turn ball valves with leak-proof PTFE seat for quick open/close operation in fire protection systems. Available with tamper switch; grooved or threaded end connections.',
      features: [
        'Quarter-turn operation',
        'PTFE seat for leak-proof sealing',
        'Tamper switch option available',
        'Grooved or threaded end connections',
        'Full bore — low pressure drop'
      ],
      specs: [
        ['Type', 'Ball Valve'],
        ['Operation', 'Quarter-Turn'],
        ['Seat Material', 'PTFE'],
        ['End Connection', 'Grooved / Threaded'],
        ['Tamper Switch', 'Optional']
      ],
      related: ['p3-kelebek-vana', 'p3-osy', 'p3-nrs']
    },

    'p3-test-drenaj': {
      title: 'Test and Drain Valve',
      img: 'images/s3-test-drenaj.jpg',
      alt: 'Test and Drain Valve',
      category: 'System Valves',
      categoryLink: 'sistem-vanalari.html',
      badge: 'NFPA 13',
      shortDesc: 'Combined test and drain valve for verifying sprinkler system operation and draining. Sight glass for flow confirmation; simulates sprinkler head opening for periodic testing.',
      features: [
        'Combined test and drain function',
        'Sight glass for visual flow confirmation',
        'Simulates sprinkler head opening',
        'Multiple pipe sizes available',
        'For system commissioning and maintenance'
      ],
      specs: [
        ['Type', 'Test and Drain Valve'],
        ['Function', 'System Testing & Draining'],
        ['Feature', 'Sight Glass'],
        ['Standards', 'NFPA 13']
      ],
      related: ['p3-akis-olcer', 'p3-kelebek-vana', 'p3-fsfd']
    },

    'p3-akis-olcer': {
      title: 'Flow Meter',
      img: 'images/s3-akis-olcer.jpg',
      alt: 'Fire System Flow Meter',
      category: 'System Valves',
      categoryLink: 'sistem-vanalari.html',
      badge: 'NFPA 13',
      shortDesc: 'Inline flow meter for accurately measuring water flow rates in fire protection systems during performance testing and maintenance. Digital or analog readout; various pipe sizes.',
      features: [
        'Accurate inline flow measurement',
        'Digital or analog readout',
        'Multiple pipe sizes',
        'For system performance verification',
        'NFPA 13 compliant'
      ],
      specs: [
        ['Type', 'Flow Meter'],
        ['Readout', 'Digital / Analog'],
        ['Standards', 'NFPA 13']
      ],
      related: ['p3-test-drenaj', 'p3-fsfd', 'p3-basinc-rahatlatma']
    },

    'p3-post-indikator': {
      title: 'Post Indicator Valve',
      img: 'images/s3-post-ind.jpg',
      alt: 'Post Indicator Valve',
      category: 'System Valves',
      categoryLink: 'sistem-vanalari.html',
      badge: 'UL / FM',
      shortDesc: 'Post indicator valve for underground fire protection system isolation with visible above-ground OPEN/SHUT indication. 4″–12″ size; UL Listed / FM Approved.',
      features: [
        'Visible above-ground OPEN/SHUT indicator',
        'Underground valve operation',
        'Size range: 4″–12″',
        'UL Listed / FM Approved',
        'Padlock provision for security'
      ],
      specs: [
        ['Type', 'Post Indicator Valve (PIV)'],
        ['Size Range', '4″–12″'],
        ['Indication', 'OPEN / SHUT'],
        ['Installation', 'Underground Valve Body'],
        ['Standards', 'UL Listed / FM Approved']
      ],
      related: ['p3-osy', 'p3-nrs', 'p3-kelebek-vana']
    },

    'p3-basinc-rahatlatma': {
      title: 'Pressure Relief Valve',
      img: 'images/s3-basinc-rah.jpg',
      alt: 'Pressure Relief Valve',
      category: 'System Valves',
      categoryLink: 'sistem-vanalari.html',
      badge: 'UL Listed',
      shortDesc: 'Pressure relief valve protecting fire protection systems from excess pressure. Adjustable set pressure; 1″–3″ sizes; UL Listed; spring-loaded automatic operation.',
      features: [
        'Protects system from excess pressure',
        'Adjustable set pressure',
        'Size range: 1″–3″',
        'Spring-loaded automatic operation',
        'UL Listed'
      ],
      specs: [
        ['Type', 'Pressure Relief Valve'],
        ['Size Range', '1″–3″'],
        ['Set Pressure', 'Adjustable'],
        ['Operation', 'Spring-Loaded (Automatic)'],
        ['Standards', 'UL Listed']
      ],
      related: ['p3-basinc-dusurucu', 'p3-cek-vana', 'p3-akis-olcer']
    },

    'p3-basinc-dusurucu': {
      title: 'Pressure Reducing Valve',
      img: 'images/s3-basinc-dus.jpg',
      alt: 'Pressure Reducing Valve',
      category: 'System Valves',
      categoryLink: 'sistem-vanalari.html',
      badge: 'NFPA 13',
      shortDesc: 'Differential pressure valve maintaining a stable adjustable downstream pressure to protect sprinkler heads and hydrants in high-rise buildings and large systems. 2″–6″ sizes.',
      features: [
        'Stable downstream pressure regulation',
        'For high-rise and large-scale systems',
        'Protects sprinkler heads from excess pressure',
        'Size range: 2″–6″',
        'NFPA 13 compliant'
      ],
      specs: [
        ['Type', 'Pressure Reducing Valve'],
        ['Size Range', '2″–6″'],
        ['Function', 'Downstream Pressure Regulation'],
        ['Standards', 'NFPA 13']
      ],
      related: ['p3-basinc-rahatlatma', 'p3-osy', 'p3-kelebek-vana']
    },

    /* ---- SPRINKLERS ---- */
    'p4-standart': {
      title: 'Standard Response Sprinklers',
      img: 'images/p4-standart.jpg',
      alt: 'Standard Response Sprinkler',
      category: 'Sprinkler Systems',
      categoryLink: 'sprinkler.html',
      badge: 'UL / FM / CE',
      shortDesc: 'Most widely used head type in commercial, industrial and multi-storey buildings. 5 mm glass bulb; activation at 68/79/93/141°C; K5.6–K8.0; max. 175 PSI. UL / FM / CE certified.',
      features: [
        '5 mm glass bulb',
        'Activation temperatures: 68 / 79 / 93 / 141°C',
        'K-factor: K5.6–K8.0',
        'Max. working pressure: 175 PSI',
        'UL / FM / CE certified'
      ],
      specs: [
        ['Type', 'Standard Response (SR)'],
        ['Bulb Size', '5 mm'],
        ['Activation Temperature', '68°C / 79°C / 93°C / 141°C'],
        ['K-Factor', 'K5.6–K8.0'],
        ['Max. Pressure', '175 PSI'],
        ['Standards', 'UL / FM / CE']
      ],
      related: ['p4-hizli', 'p4-genis', 'p4-depo']
    },

    'p4-hizli': {
      title: 'Quick Response Sprinklers',
      img: 'images/p4-hizli.jpg',
      alt: 'Quick Response Sprinkler',
      category: 'Sprinkler Systems',
      categoryLink: 'sprinkler.html',
      badge: 'UL / FM / CE',
      shortDesc: 'QR heads with 3 mm glass bulb (RTI ≤50 (m·s)^0.5) providing faster activation than standard response heads. Pendent, upright, concealed and sidewall mounting options. UL / FM / CE certified.',
      features: [
        '3 mm glass bulb (RTI ≤50 (m·s)^0.5)',
        'Faster activation than standard response',
        'Pendent, Upright, Concealed, Sidewall options',
        'UL / FM / ULc / CE certified'
      ],
      specs: [
        ['Type', 'Quick Response (QR)'],
        ['Bulb Size', '3 mm'],
        ['RTI', '≤50 (m·s)^0.5'],
        ['Mounting Options', 'Pendent / Upright / Concealed / Sidewall'],
        ['Standards', 'UL / FM / ULc / CE']
      ],
      related: ['p4-standart', 'p4-genis', 'p4-kuru']
    },

    'p4-genis': {
      title: 'Extended Coverage Sprinklers (CMSA)',
      img: 'images/p4-genis.jpg',
      alt: 'Extended Coverage Sprinkler CMSA',
      category: 'Sprinkler Systems',
      categoryLink: 'sprinkler.html',
      badge: 'NFPA 13',
      shortDesc: 'Extended coverage CMSA sprinkler heads providing 20–30 m² protection area per head. High K-factor design requires fewer pipes and fittings compared to standard layouts.',
      features: [
        'Coverage area: 20–30 m² per head',
        'High K-factor for reduced piping',
        'Fewer pipes and fittings required',
        'NFPA 13 / EN 12259 compliant'
      ],
      specs: [
        ['Type', 'Extended Coverage (CMSA)'],
        ['Coverage Area', '20–30 m² per head'],
        ['Advantage', 'Reduced Piping Infrastructure'],
        ['Standards', 'NFPA 13 / EN 12259']
      ],
      related: ['p4-standart', 'p4-hizli', 'p4-depo']
    },

    'p4-depo': {
      title: 'Storage Type Sprinklers (ESFR)',
      img: 'images/p4-depo.jpg',
      alt: 'ESFR Storage Type Sprinkler',
      category: 'Sprinkler Systems',
      categoryLink: 'sprinkler.html',
      badge: 'UL / FM / VDS',
      shortDesc: 'ESFR heads providing ceiling-only protection for high-rack storage without in-rack sprinklers. K14.0–K25 high flow rate; 74°C/96°C activation. UL / FM / ULc / VDS approved.',
      features: [
        'Ceiling-only protection — no in-rack sprinklers needed',
        'K-factor: K14.0–K25 (high flow)',
        'Activation temperatures: 74°C / 96°C',
        'For high-rack and pallet storage',
        'UL / FM / ULc / VDS approved'
      ],
      specs: [
        ['Type', 'ESFR Storage Sprinkler'],
        ['K-Factor', 'K14.0–K25'],
        ['Activation Temperature', '74°C / 96°C'],
        ['Application', 'High-Rack Storage'],
        ['Standards', 'UL / FM / ULc / VDS']
      ],
      related: ['p4-standart', 'p4-genis', 'p4-kuru']
    },

    'p4-kuru': {
      title: 'Dry Type Sprinklers',
      img: 'images/p4-kuru.jpg',
      alt: 'Dry Type Sprinkler',
      category: 'Sprinkler Systems',
      categoryLink: 'sprinkler.html',
      badge: 'EN 12259 / UL',
      shortDesc: 'Extended-pipe sprinkler for areas with freezing risk (cold storage, open canopies). Connected to wet pipe system; extension pipe 100–900 mm; operating range -40°C to +65°C. EN 12259 / UL 199.',
      features: [
        'For freezing risk areas and cold storage',
        'Extension pipe: 100–900 mm',
        'Operating range: -40°C to +65°C',
        'Connected to wet pipe system',
        'EN 12259 / UL 199 certified'
      ],
      specs: [
        ['Type', 'Dry Type Sprinkler'],
        ['Extension Pipe', '100–900 mm'],
        ['Operating Range', '-40°C to +65°C'],
        ['System Connection', 'Wet Pipe'],
        ['Standards', 'EN 12259 / UL 199']
      ],
      related: ['p4-standart', 'p4-hizli', 'p4-genis']
    },

    /* ---- GROOVED PIPE FITTINGS ---- */
    'p5-rijit': {
      title: 'Rigid Coupling',
      img: 'images/p5-rijit.jpg',
      alt: 'Rigid Grooved Coupling',
      category: 'Grooved Pipe Fittings',
      categoryLink: 'yivli-boru.html',
      badge: 'UL 213 / FM',
      shortDesc: 'Rigid grooved coupling providing permanent rigid connection between two pipe ends. Preferred where vibration and load transfer must be controlled. Ductile iron, EPDM/Nitrile gasket, 1″–12″ diameter.',
      features: [
        'Rigid, vibration-resistant connection',
        'Ductile iron body, orange epoxy coating',
        'EPDM / Nitrile gasket options',
        'Diameter: 1″–12″, max. 300 PSI',
        'UL 213 / FM 1920 approved'
      ],
      specs: [
        ['Type', 'Rigid Grooved Coupling'],
        ['Body Material', 'Ductile Iron'],
        ['Gasket', 'EPDM / Nitrile'],
        ['Diameter Range', '1″–12″'],
        ['Max. Pressure', '300 PSI'],
        ['Standards', 'UL 213 / FM 1920']
      ],
      related: ['p5-esnek', 'p5-dirsek']
    },

    'p5-esnek': {
      title: 'Flexible Coupling',
      img: 'images/p5-esnek-kaplin.jpg',
      alt: 'Flexible Grooved Coupling',
      category: 'Grooved Pipe Fittings',
      categoryLink: 'yivli-boru.html',
      badge: 'NFPA 13 Seismic',
      shortDesc: 'Seismic flexible coupling required for NFPA 13 seismic-resistant design. Tolerates axial, angular and deflection pipe movements (±3° / ±6 mm); reduces noise and vibration. Ductile iron, EPDM gasket, 1″–12″.',
      features: [
        'NFPA 13 seismic-resistant design',
        'Tolerates axial, angular and deflection movement',
        'Movement capacity: ±3° / ±6 mm',
        'Reduces noise and vibration transmission',
        'Ductile iron body, EPDM gasket'
      ],
      specs: [
        ['Type', 'Flexible Grooved Coupling'],
        ['Body Material', 'Ductile Iron'],
        ['Gasket', 'EPDM'],
        ['Movement Tolerance', '±3° Angular / ±6 mm Axial'],
        ['Diameter Range', '1″–12″'],
        ['Standards', 'NFPA 13 / UL 213 / FM 1920']
      ],
      related: ['p5-rijit', 'p5-dirsek']
    },

    'p5-dirsek': {
      title: 'Grooved Elbow',
      img: 'images/p5-yivli-dirsek.jpg',
      alt: 'Grooved Pipe Elbow',
      category: 'Grooved Pipe Fittings',
      categoryLink: 'yivli-boru.html',
      badge: 'UL 213 / FM',
      shortDesc: 'Welding-free quick-install grooved mechanical elbows for pipeline direction changes. 90° and 45° options; ductile iron, orange epoxy coating; 1″–8″ diameter; max. 300 PSI.',
      features: [
        'Welding-free quick installation',
        '90° and 45° configurations',
        'Ductile iron, orange epoxy coating',
        'Diameter: 1″–8″, max. 300 PSI',
        'UL 213 / FM 1920 approved'
      ],
      specs: [
        ['Type', 'Grooved Elbow'],
        ['Angles', '45° / 90°'],
        ['Material', 'Ductile Iron'],
        ['Coating', 'Orange Epoxy'],
        ['Diameter Range', '1″–8″'],
        ['Max. Pressure', '300 PSI'],
        ['Standards', 'UL 213 / FM 1920']
      ],
      related: ['p5-rijit', 'p5-esnek']
    },

    /* ---- FIREFIGHTING EQUIPMENT ---- */
    'p6-sac-dolabi': {
      title: 'Metal Door Fire Cabinet',
      img: 'images/p6-dolap-sac.jpg',
      alt: 'Surface Recessed Metal Door Fire Cabinet',
      category: 'Firefighting Equipment',
      categoryLink: 'itfaiye-ekipmanlari.html',
      badge: 'TS EN 671',
      shortDesc: 'Surface or recessed mounted steel door fire cabinet for fire hoses, nozzles and accessories. Powder-coated finish; multiple size options; TS EN 671 / ISO 14466 compliant.',
      features: [
        'Surface or recessed mounting',
        'Powder-coated steel construction',
        'Multiple size options available',
        'Accommodates hose, nozzle and accessories',
        'TS EN 671 / ISO 14466 compliant'
      ],
      specs: [
        ['Type', 'Fire Cabinet (Metal / Steel Door)'],
        ['Mounting', 'Surface / Recessed'],
        ['Material', 'Steel (Powder-Coated)'],
        ['Standards', 'TS EN 671 / ISO 14466']
      ],
      related: ['p6-cam-dolabi', 'p6-hidranti', 'p6-baglanti-agzi']
    },

    'p6-cam-dolabi': {
      title: 'Glass Door Fire Cabinet',
      img: 'images/p6-dolap-cam.jpg',
      alt: 'Surface Recessed Glass Door Fire Cabinet',
      category: 'Firefighting Equipment',
      categoryLink: 'itfaiye-ekipmanlari.html',
      badge: 'TS EN 671',
      shortDesc: 'Surface or recessed mounted fire cabinet with tempered glass door for immediate visual inspection. Break-glass emergency access; powder-coated steel frame; TS EN 671 compliant.',
      features: [
        'Tempered glass door for contents visibility',
        'Break-glass emergency access',
        'Surface or recessed mounting',
        'Powder-coated steel frame',
        'TS EN 671 compliant'
      ],
      specs: [
        ['Type', 'Fire Cabinet (Glass Door)'],
        ['Mounting', 'Surface / Recessed'],
        ['Door', 'Tempered Glass'],
        ['Frame', 'Steel (Powder-Coated)'],
        ['Standards', 'TS EN 671']
      ],
      related: ['p6-sac-dolabi', 'p6-hidranti', 'p6-baglanti-agzi']
    },

    'p6-hidranti': {
      title: 'Fire Hydrant',
      img: 'images/p6-hidranti.jpg',
      alt: 'Fire Hydrant',
      category: 'Firefighting Equipment',
      categoryLink: 'itfaiye-ekipmanlari.html',
      badge: 'UL / FM',
      shortDesc: 'Wet barrel or dry barrel fire hydrant for outdoor fire protection. Ductile iron body; 4″–6″ outlet; FM Global / UL listed; AWWA C502/C503 compliant.',
      features: [
        'Wet barrel and dry barrel options',
        'Ductile iron body',
        '4″–6″ outlet connections',
        'FM Global / UL Listed',
        'AWWA C502 / C503 compliant'
      ],
      specs: [
        ['Type', 'Fire Hydrant'],
        ['Options', 'Wet Barrel / Dry Barrel'],
        ['Body Material', 'Ductile Iron'],
        ['Outlet', '4″–6″'],
        ['Standards', 'FM Global / UL / AWWA C502 / C503']
      ],
      related: ['p6-sac-dolabi', 'p6-baglanti-agzi', 'p6-baglanti-vanasi']
    },

    'p6-baglanti-agzi': {
      title: 'Fire Brigade Connection Inlet',
      img: 'images/p6-baglanti-agzi.jpg',
      alt: 'Fire Brigade Connection Inlet Siamese',
      category: 'Firefighting Equipment',
      categoryLink: 'itfaiye-ekipmanlari.html',
      badge: 'NFPA 13/14',
      shortDesc: 'Fire brigade Siamese connection inlet for supplementing water supply from fire trucks to building sprinkler/standpipe systems. 2-way or 4-way configurations; NFPA 13/14 compliant.',
      features: [
        '2-way and 4-way configurations',
        'Feeds water from fire trucks to building systems',
        'Chrome-plated brass caps with chain',
        'NFPA 13 / NFPA 14 compliant',
        'Wall or yard post mounting'
      ],
      specs: [
        ['Type', 'Fire Brigade Connection Inlet (Siamese)'],
        ['Configuration', '2-Way / 4-Way'],
        ['Caps', 'Chrome-Plated Brass with Chain'],
        ['Standards', 'NFPA 13 / NFPA 14']
      ],
      related: ['p6-hidranti', 'p6-baglanti-vanasi', 'p6-sac-dolabi']
    },

    'p6-baglanti-vanasi': {
      title: 'Fire Brigade Connection Valve',
      img: 'images/p6-baglanti-vana.jpg',
      alt: 'Fire Brigade Connection Valve',
      category: 'Firefighting Equipment',
      categoryLink: 'itfaiye-ekipmanlari.html',
      badge: 'NFPA 14',
      shortDesc: 'Fire brigade connection valve for system isolation and testing in standpipe and wet riser systems. Angle type design; NFPA 14 compliant.',
      features: [
        'Angle type valve design',
        'For standpipe and wet riser systems',
        'System isolation and test functions',
        'NFPA 14 compliant'
      ],
      specs: [
        ['Type', 'Fire Brigade Connection Valve'],
        ['Configuration', 'Angle Type'],
        ['Application', 'Standpipe / Wet Riser'],
        ['Standards', 'NFPA 14']
      ],
      related: ['p6-hidranti', 'p6-baglanti-agzi', 'p6-sac-dolabi']
    },

    /* ---- FOAM SUPPRESSION ---- */
    'p7-dikey-bladder': {
      title: 'Vertical Bladder Tank',
      img: 'images/p7-bladder-dikey.jpg',
      alt: 'Vertical Bladder Tank for Foam Suppression',
      category: 'Foam Suppression',
      categoryLink: 'kopuklu-sondurme.html',
      badge: 'CE / FM / UL',
      shortDesc: 'Vertical foam concentrate bladder tank maintaining concentrate in an internal bladder and proportioning via system pressure. Carbon steel body; 300–15,000 L; max. 175 PSI / 12 bar. CE / FM / UL certified.',
      features: [
        'Vertical design for compact footprint',
        'Carbon steel body with flanged connections',
        'Capacity range: 300–15,000 L',
        'Max. 175 PSI / 12 bar working pressure',
        'CE / FM / UL certified'
      ],
      specs: [
        ['Type', 'Vertical Bladder Tank'],
        ['Capacity Range', '300–15,000 L'],
        ['Max. Pressure', '175 PSI / 12 bar'],
        ['Body Material', 'Carbon Steel'],
        ['Standards', 'CE / FM / UL']
      ],
      related: ['p7-yatay-bladder', 'p7-oranlayici', 'p7-sistem-vana']
    },

    'p7-yatay-bladder': {
      title: 'Horizontal Bladder Tank',
      img: 'images/p7-bladder-yatay.jpg',
      alt: 'Horizontal Bladder Tank for Foam Suppression',
      category: 'Foam Suppression',
      categoryLink: 'kopuklu-sondurme.html',
      badge: 'CE / FM / UL',
      shortDesc: 'Horizontally oriented foam concentrate bladder tank for low ceiling height areas and large-capacity applications. Carbon steel body; 300–15,000 L; max. 175 PSI / 12 bar. CE / FM / UL certified.',
      features: [
        'Horizontal design for low ceiling areas',
        'Carbon steel body with flanged connections',
        'Capacity range: 300–15,000 L',
        'Max. 175 PSI / 12 bar working pressure',
        'CE / FM / UL certified'
      ],
      specs: [
        ['Type', 'Horizontal Bladder Tank'],
        ['Capacity Range', '300–15,000 L'],
        ['Max. Pressure', '175 PSI / 12 bar'],
        ['Body Material', 'Carbon Steel'],
        ['Standards', 'CE / FM / UL']
      ],
      related: ['p7-dikey-bladder', 'p7-oranlayici', 'p7-sistem-vana']
    },

    'p7-oranlayici': {
      title: 'Foam Proportioners',
      img: 'images/p7-oranlayici.jpg',
      alt: 'Foam Proportioner',
      category: 'Foam Suppression',
      categoryLink: 'kopuklu-sondurme.html',
      badge: 'CE / FM',
      shortDesc: 'Mechanical proportioners mixing foam concentrate with water at 1%, 3% and 6% ratios. Types: foam mixer (100–800 L/min), in-line (2.5″–6″), wide range (100–17,000 L/min), bladder tank type (100–18,500 L/min). CE / FM certified.',
      features: [
        '1%, 3% and 6% ratio options',
        'Foam mixer type: 100–800 L/min',
        'In-line type: 2.5″–6″ pipe sizes',
        'Wide range: 100–17,000 L/min',
        'CE / FM certified'
      ],
      specs: [
        ['Type', 'Foam Proportioner'],
        ['Ratios', '1% / 3% / 6%'],
        ['Types', 'Foam Mixer / In-Line / Wide Range / Bladder Tank'],
        ['Flow Range', '100–18,500 L/min'],
        ['Standards', 'CE / FM']
      ],
      related: ['p7-dikey-bladder', 'p7-yatay-bladder', 'p7-sistem-vana']
    },

    'p7-sistem-vana': {
      title: 'Foam System Valves',
      img: 'images/p7-sistem-vana.jpg',
      alt: 'Foam System Control Valve',
      category: 'Foam Suppression',
      categoryLink: 'kopuklu-sondurme.html',
      badge: 'NFPA 11 / FM',
      shortDesc: 'Special control valves resistant to foam concentrate for activation, isolation and test functions. Nitrile inner lining; electric or pneumatic actuator; DN 50–DN 200. NFPA 11 / FM Global compliant.',
      features: [
        'Foam concentrate resistant (nitrile lining)',
        'Electric or pneumatic actuator',
        'Size range: DN 50–DN 200',
        'Activation, isolation and test functions',
        'NFPA 11 / FM Global compliant'
      ],
      specs: [
        ['Type', 'Foam System Valve'],
        ['Size Range', 'DN 50–DN 200'],
        ['Inner Lining', 'Nitrile'],
        ['Actuator', 'Electric / Pneumatic'],
        ['Standards', 'NFPA 11 / FM Global']
      ],
      related: ['p7-dikey-bladder', 'p7-oranlayici', 'p7-bosaltici']
    },

    'p7-bosaltici': {
      title: 'Foam Chambers and Nozzles',
      img: 'images/p7-bosaltici.jpg',
      alt: 'Foam Chamber and Nozzle',
      category: 'Foam Suppression',
      categoryLink: 'kopuklu-sondurme.html',
      badge: 'NFPA 11',
      shortDesc: 'Air-induction nozzles and foam chambers delivering foam solution to tank surface or floor. Flow rate: 200–4,000 L/min; aluminium or stainless steel; 3%/6% concentrate compatible. NFPA 11 / EN 13565.',
      features: [
        'Air-induction nozzle design',
        'Flow rate: 200–4,000 L/min',
        'Aluminium or stainless steel construction',
        '3% and 6% concentrate compatible',
        'NFPA 11 / EN 13565 certified'
      ],
      specs: [
        ['Type', 'Foam Chambers and Nozzles'],
        ['Flow Rate', '200–4,000 L/min'],
        ['Material', 'Aluminium / Stainless Steel'],
        ['Compatible Concentrates', '3% / 6%'],
        ['Standards', 'NFPA 11 / EN 13565']
      ],
      related: ['p7-monitor', 'p7-oranlayici', 'p7-sistem-vana']
    },

    'p7-monitor': {
      title: 'Foam & Water Monitors',
      img: 'images/p7-monitor.jpg',
      alt: 'Foam and Water Monitor',
      category: 'Foam Suppression',
      categoryLink: 'kopuklu-sondurme.html',
      badge: 'CE / FM',
      shortDesc: 'High-flow foam/water monitors: manual (1,500–3,000 L/min), portable (1,900–4,700 L/min), oscillating (4,000–8,000 L/min) and remote-controlled (max. 34.5 bar). 360° rotation. CE / FM certified.',
      features: [
        '360° horizontal rotation',
        'Manual: 1,500–3,000 L/min',
        'Portable: 1,900–4,700 L/min',
        'Oscillating: 4,000–8,000 L/min',
        'Remote-controlled option (max. 34.5 bar)',
        'CE / FM certified'
      ],
      specs: [
        ['Type', 'Foam & Water Monitor'],
        ['Rotation', '360°'],
        ['Flow Range', '1,500–8,000 L/min'],
        ['Types', 'Manual / Portable / Oscillating / Remote'],
        ['Max. Pressure', '34.5 bar'],
        ['Standards', 'CE / FM']
      ],
      related: ['p7-bosaltici', 'p7-oranlayici', 'p7-konsantre']
    },

    'p7-konsantre': {
      title: 'Foam Concentrates',
      img: 'images/p7-konsantre.jpg',
      alt: 'Foam Concentrate AFFF AR-AFFF',
      category: 'Foam Suppression',
      categoryLink: 'kopuklu-sondurme.html',
      badge: 'CE / FM / UL',
      shortDesc: 'AFFF (3%), AR-AFFF (3%) and FFFP (3%) for Class B fires; protein-based and AR foam concentrates for Class A and polar solvent fires. CE / FM / UL certified; compatible with all TATCO proportioning systems.',
      features: [
        'AFFF, AR-AFFF and FFFP types',
        'Class A and Class B fire protection',
        'Polar solvent (alcohol) compatible',
        'CE / FM / UL certified',
        'Compatible with all TATCO proportioners'
      ],
      specs: [
        ['Types', 'AFFF (3%) / AR-AFFF (3%) / FFFP (3%)'],
        ['Application', 'Class A & Class B Fires'],
        ['Polar Solvent', 'AR-AFFF Compatible'],
        ['Standards', 'CE / FM / UL']
      ],
      related: ['p7-oranlayici', 'p7-monitor', 'p7-bosaltici']
    },

    'p7-yangin-dolabi': {
      title: 'Foam & Water Fire Cabinets',
      img: 'images/p7-yangin-dolabi.jpg',
      alt: 'Foam and Water Fire Cabinet',
      category: 'Foam Suppression',
      categoryLink: 'kopuklu-sondurme.html',
      badge: 'NFPA 11',
      shortDesc: 'Integrated dual-system cabinet housing both water and foam lines. Proportioner and foam lance included; 2″ water line + 1.5″ foam line; 20–30 m foam hose. NFPA 11 / TS EN 671 compliant.',
      features: [
        'Integrated water and foam dual system',
        'Proportioner and foam lance included',
        '2″ water line + 1.5″ foam line',
        '20–30 m foam hose',
        'NFPA 11 / TS EN 671 compliant'
      ],
      specs: [
        ['Type', 'Foam & Water Fire Cabinet'],
        ['Water Line', '2″'],
        ['Foam Line', '1.5″'],
        ['Hose Length', '20–30 m'],
        ['Standards', 'NFPA 11 / TS EN 671']
      ],
      related: ['p7-konsantre', 'p7-oranlayici', 'p6-sac-dolabi']
    },

    /* ---- PASSIVE FIRE PROTECTION ---- */
    'pasif-troke': {
      title: 'Troke Heat & Smoke Exhaust Systems',
      img: 'images/pasif-troke.jpg',
      alt: 'Troke Heat and Smoke Exhaust System',
      category: 'Passive Fire Protection',
      categoryLink: 'pasif-tedbirler.html',
      badge: 'EN 12101-2 / CE',
      shortDesc: 'Heat and smoke exhaust systems ensuring buildings are cleared of smoke rapidly during a fire. Pneumatic or electric triggering; available up to 2×3 meters. EN 12101-2 compliant, CE certified.',
      features: [
        'Rapid smoke exhaust during fire',
        'Pneumatic or electric triggering',
        'Available up to 2×3 meters',
        'EN 12101-2 compliant',
        'CE certified'
      ],
      specs: [
        ['Type', 'Heat and Smoke Exhaust System'],
        ['Triggering', 'Pneumatic / Electric'],
        ['Max. Size', '2×3 meters'],
        ['Standards', 'EN 12101-2 / CE']
      ],
      related: ['pasif-lamilux-kapaklari']
    },

    'pasif-lamilux-kapaklari': {
      title: 'Lamilux Natural Smoke Exhaust Vents',
      img: 'images/pasif-lamilux-kapaklari.jpg',
      alt: 'Lamilux Natural Smoke Exhaust Vent',
      category: 'Passive Fire Protection',
      categoryLink: 'pasif-tedbirler.html',
      badge: 'EN 12101-2 / CE',
      shortDesc: 'Multi-stage double sealing system, patented fibre-reinforced frame profile and self-cleaning exterior design. Size range: 50/100 cm – 300/300 cm. EN 12101-2 / ISO 21927-2 / EN 1873, CE certified.',
      features: [
        'Multi-stage double sealing system',
        'Patented fibre-reinforced frame profile',
        'Self-cleaning exterior surface',
        'Size range: 50/100 cm – 300/300 cm',
        'EN 12101-2 / ISO 21927-2 / EN 1873, CE certified'
      ],
      specs: [
        ['Type', 'Natural Smoke Exhaust Vent'],
        ['Sealing', 'Multi-Stage Double Seal'],
        ['Frame', 'Patented Fibre-Reinforced'],
        ['Size Range', '50/100 cm – 300/300 cm'],
        ['Standards', 'EN 12101-2 / ISO 21927-2 / EN 1873 / CE']
      ],
      related: ['pasif-troke']
    }

  };

  /* ---- Populate Page ---- */
  var urlParams = new URLSearchParams(window.location.search);
  var productId = urlParams.get('id');

  if (!productId || !products[productId]) {
    /* No product ID or unknown: show a friendly fallback */
    var banner = document.getElementById('bannerTitle');
    if (banner) banner.textContent = 'Product Not Found';
    var title = document.getElementById('productTitle');
    if (title) title.textContent = 'Product information not found. Please browse our product categories.';
    var desc = document.getElementById('productShortDesc');
    if (desc) desc.textContent = '';
    return;
  }

  var p = products[productId];

  /* Basic fields */
  document.title = p.title + ' | TATCO Fire Safety';

  /* Set product image and make it visible */
  var imgEl = document.getElementById('productMainImg');
  if (imgEl) {
    imgEl.src = p.img;
    imgEl.alt = p.alt || p.title;
    imgEl.classList.add('has-image');
    /* Hide decorative icon/text when real image is shown */
    var bigIcon = document.getElementById('visualIcon');
    var visualLabel = document.getElementById('visualLabel');
    if (bigIcon) bigIcon.style.display = 'none';
    if (visualLabel) visualLabel.style.display = 'none';
  }

  var simpleEls = {
    productTitle:      function (el) { el.textContent = p.title; },
    productShortDesc:  function (el) { el.textContent = p.shortDesc; },
    categoryTag:       function (el) { el.textContent = p.category; },
    bannerTitle:       function (el) { el.textContent = p.title; },
    breadcrumbCurrent: function (el) { el.textContent = p.title; },
    quoteProductName:  function (el) { el.value = p.title; },
    visualName:        function (el) { el.textContent = p.title; }
  };

  Object.keys(simpleEls).forEach(function (id) {
    var el = document.getElementById(id);
    if (el) simpleEls[id](el);
  });

  /* Badge */
  if (p.badge) {
    var badge = document.getElementById('visualBadge');
    if (badge) { badge.textContent = p.badge; badge.style.display = ''; }
  }

  /* Category link on tag */
  var catTag = document.getElementById('categoryTag');
  if (catTag && p.categoryLink) {
    var a = document.createElement('a');
    a.href = p.categoryLink;
    a.style.color = 'inherit';
    a.style.textDecoration = 'none';
    a.textContent = p.category;
    catTag.textContent = '';
    catTag.appendChild(a);
  }

  /* Feature list */
  var featureList = document.getElementById('featureList');
  if (featureList && p.features && p.features.length) {
    p.features.forEach(function (f) {
      var li = document.createElement('li');
      li.innerHTML = '<i class="fas fa-check-circle" style="color:#c8102e;margin-right:.5rem;"></i>' + f;
      featureList.appendChild(li);
    });
  }

  /* Spec table */
  var specTable = document.getElementById('specTable');
  if (specTable && p.specs && p.specs.length) {
    p.specs.forEach(function (row) {
      var tr = document.createElement('tr');
      tr.innerHTML = '<td>' + row[0] + '</td><td>' + row[1] + '</td>';
      specTable.appendChild(tr);
    });
  }

  /* Related products */
  var relatedDiv = document.getElementById('relatedProducts');
  if (relatedDiv && p.related && p.related.length) {
    p.related.forEach(function (rid) {
      var rp = products[rid];
      if (!rp) return;
      var col = document.createElement('div');
      col.className = 'col-md-6 col-lg-3';
      col.setAttribute('data-aos', 'fade-up');
      col.innerHTML =
        '<a href="urun-detay.html?id=' + rid + '" class="product-card">' +
        '<div class="pci"><img src="' + rp.img + '" alt="' + (rp.alt || rp.title) + '" loading="lazy"></div>' +
        '<div class="pcbd"><h4>' + rp.title + '</h4>' +
        '<div class="pcdbtn">View Details <i class="fas fa-arrow-right"></i></div></div></a>';
      relatedDiv.appendChild(col);
    });
  }

})();
