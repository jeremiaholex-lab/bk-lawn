import { VehicleSize, DetailingPackage, AddOnOption } from '../types';

export const BUSINESS_INFO = {
  name: 'BK Mobile Detailing',
  founder: 'Brady Knaple',
  phone: '630-205-0546',
  phoneFormatted: '(630) 205-0546',
  email: 'info@bkmobiledetailing.com',
  rating: '4.9/5',
  reviewCount: 84,
  locationBadge: 'Lancaster County, PA',
  serviceHubs: ['Landisville', 'Lancaster', 'Lititz', 'Manheim Township', 'Ephrata', 'Mount Joy'],
  headline: 'Showroom Shine Delivered to Your Driveway. We Bring the Power, the Water, & the Precision.',
};

export const VEHICLE_SIZES: VehicleSize[] = [
  {
    id: 'sedan',
    name: 'Sedan / Coupe',
    categoryLabel: 'Compact & Mid-Size Cars',
    examples: 'Porsche 911, Tesla Model 3, BMW 3/5 Series, Civic, Accord',
    priceOffset: 0,
  },
  {
    id: 'suv',
    name: 'Mid-Size SUV / Crossover',
    categoryLabel: '2-Row Crossovers & Wagons',
    examples: 'Tesla Model Y, Porsche Macan/Cayenne, Rav4, Outback, Audi Q5',
    priceOffset: 30,
  },
  {
    id: 'truck',
    name: 'Full-Size Truck / 3-Row SUV',
    categoryLabel: 'Large Vehicles & Minivans',
    examples: 'Ford F-150, Chevy Silverado, Tahoe, Suburban, Escalade, Sienna',
    priceOffset: 60,
  },
];

export const PACKAGES: DetailingPackage[] = [
  {
    id: 'interior-reset',
    name: 'Interior Reset',
    tagline: 'Complete deep interior rejuvenation & medical-grade steam sanitization.',
    basePrice: 175,
    durationHours: '2.5 - 3.5 Hours',
    popular: false,
    recommendedFor: 'Busy executives, parents, and daily drivers needing a brand-new cabin feel.',
    protectionRating: 4,
    features: [
      'Structural compressed-air blowout of hidden vents, rails & crevice debris',
      'High-velocity deep vacuuming of carpets, mats, under-seats & trunk',
      'Complete thermal steam sanitization (220°F kills 99.9% of bacteria)',
      'Delicate leather scrub, condition & pH-balanced matte protection',
      'Deep hot-water shampoo & extraction for cloth seats & carpet stains',
      'UV dashboard & interior trim anti-static dressing (zero greasy glare)',
      'Crystal-clear interior glass & digital infotainment streak-free buff',
      'Enzyme odor-neutralizing mist treatment',
    ],
  },
  {
    id: 'exterior-gloss',
    name: 'Exterior Correction & Gloss',
    tagline: 'Paint decontamination, machine swirl reduction, and mirror-depth gloss.',
    basePrice: 195,
    durationHours: '3.0 - 4.0 Hours',
    popular: false,
    recommendedFor: 'Car enthusiasts seeking high-gloss depth, mirror paint, and road grime defense.',
    protectionRating: 4,
    features: [
      'Two-bucket scratch-free hand foam bath using pH-neutral lubricating soap',
      'Chemical iron fallout removal & clay bar paint surface decontamination',
      'Deep wheel face, inner barrel, brake caliper & wheel well scrub',
      'Single-stage dual-action machine polishing to reduce fine swirls & restore clarity',
      'High-grade polymer gloss sealant wax (6+ months slick hydrophobics)',
      'Tire conditioning with no-sling deep satin black finish',
      'Exterior hydrophobic glass treatment for effortless rain run-off',
      'Trim conditioning to restore rich dark plastics and rubber moldings',
    ],
  },
  {
    id: 'ceramic-shield',
    name: 'The Ultimate Ceramic Shield',
    tagline: 'The pinnacle auto spa: full interior reset + multi-stage machine paint buff + certified ceramic coating.',
    basePrice: 495,
    durationHours: '5.0 - 6.5 Hours',
    popular: true,
    recommendedFor: 'Luxury vehicles, new acquisitions, and drivers demanding permanent showroom perfection.',
    protectionRating: 5,
    features: [
      'Everything in Interior Reset + Exterior Correction included in one master session',
      'Multi-stage machine paint correction (removes up to 85-90% of spiderwebs & swirls)',
      'Certified multi-year 9H nano-ceramic coating installation on all painted panels',
      'Ceramic glass windshield & window hydrophobic treatment (beads at 35+ mph)',
      'High-temperature ceramic wheel face shield protecting against corrosive brake dust',
      'Deep engine bay steam degrease & protective satin dressing included free',
      'Comprehensive leather ceramic guard preventing dye transfer & UV cracking',
      'Complimentary BK Mobile Detailing annual maintenance checkup guide',
    ],
  },
];

export const ADD_ONS: AddOnOption[] = [
  {
    id: 'pet-hair',
    name: 'Pet Hair Extraction & Fiber Dematting',
    description: 'Specialized rubber brushes, pneumatic extractors, and static lifting for embedded stubborn dog and cat hair.',
    price: 45,
    popular: true,
  },
  {
    id: 'engine-bay',
    name: 'Engine Bay Steam Degrease & Dressing',
    description: 'Precision steam clean of sensitive electronics, oil grease removal, and OEM satin heat-resistant dress.',
    price: 65,
    popular: true,
  },
  {
    id: 'headlight-restoration',
    name: 'Multi-Stage Headlight Clarity Restoration',
    description: 'Wet sanding, compound buffing, and UV ceramic seal to eliminate yellow oxidation and restore night beam output.',
    price: 80,
    popular: false,
  },
  {
    id: 'ceramic-wheels',
    name: 'Ceramic Wheel & Caliper Shield',
    description: 'Extreme heat 9H ceramic coating on all four outer wheel faces to keep brake dust from baking into alloy.',
    price: 120,
    popular: false,
  },
  {
    id: 'child-seat',
    name: 'Child Car Seat Deep Steam Sanitization',
    description: 'High-temp steam sterilization, hypo-allergenic organic soap wash, and stain extraction per seat.',
    price: 35,
    popular: false,
  },
  {
    id: 'leather-guard',
    name: 'Ceramic Leather Shield Protection',
    description: 'Hydrophobic breathable coating applied across all leather surfaces to resist blue jean dye transfer and spills.',
    price: 70,
    popular: false,
  },
];

export const LANCASTER_ZIP_CODES: Record<string, string> = {
  '17538': 'Landisville',
  '17543': 'Lititz',
  '17601': 'Lancaster (North / Manheim Twp)',
  '17602': 'Lancaster (East / Downtown)',
  '17603': 'Lancaster (West / Manor)',
  '17604': 'Lancaster (Central)',
  '17608': 'Lancaster City',
  '17520': 'East Petersburg',
  '17522': 'Ephrata',
  '17545': 'Manheim',
  '17552': 'Mount Joy',
  '17551': 'Millersville',
  '17512': 'Columbia',
  '17554': 'Mountville',
  '17557': 'New Holland',
  '17560': 'Paradise',
  '17562': 'Pequea',
  '17565': 'Quarryville',
  '17566': 'Rawlinsville',
  '17569': 'Reinholds',
  '17572': 'Ronks',
  '17579': 'Strasburg',
  '17582': 'Washington Boro',
  '17584': 'Willow Street',
  '17022': 'Elizabethtown',
  '17501': 'Akron',
  '17505': 'Bird-in-Hand',
  '17508': 'Blue Ball',
  '17516': 'Conestoga',
};

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Marcus Sterling',
    location: 'Lititz, PA',
    vehicle: 'Porsche 911 Carrera 4S',
    rating: 5,
    date: '3 days ago',
    comment:
      'Brady showed up at my home in Lititz right on time with his fully loaded rig. The fact that he did not even need my hose or an extension cord was mind-blowing. The paint correction on my 911 was flawless — swirl marks from the previous owner vanished. Truly the gold standard of detailing.',
    package: 'The Ultimate Ceramic Shield',
  },
  {
    id: 2,
    name: 'Jessica Vance',
    location: 'Landisville, PA',
    vehicle: 'Audi Q7 (Family / 3 Kids)',
    rating: 5,
    date: '1 week ago',
    comment:
      'With three young kids and two golden retrievers, our SUV was a war zone of cracker crumbs and pet hair. Brady did the Interior Reset with pet hair extraction while I was working from my home office. Stepping into the car felt like driving it off the dealership lot for the first time. Incredible work ethic!',
    package: 'Interior Reset + Pet Hair Extraction',
  },
  {
    id: 3,
    name: 'Dave R.',
    location: 'Lancaster (Manheim Twp), PA',
    vehicle: 'Ford F-250 Super Duty',
    rating: 5,
    date: '2 weeks ago',
    comment:
      'Most mobile detailers complain about detailing a full-size dual-cab truck. Brady brought his own deionized spot-free water tank and spent hours meticulously claying and buffing out scratches. The ceramic coating makes washing off bugs effortless now. Best investment in Lancaster County.',
    package: 'The Ultimate Ceramic Shield',
  },
];

export const FAQS = [
  {
    question: 'Do I need to supply an electrical outlet or water hose?',
    answer:
      'No! That is our signature advantage. The BK Mobile Detailing rig is 100% self-sufficient. We carry a custom commercial Honda quiet-inverter generator and an onboard 100-gallon reverse-osmosis deionized spot-free water tank. We can detail your vehicle in your residential driveway, an office parking lot, or a detached garage with zero utilities from you.',
  },
  {
    question: 'Why do you use onboard deionized water instead of garden hose tap water?',
    answer:
      'Lancaster County tap and well water is notoriously heavy in limestone, calcium, and mineral deposits (150-300+ PPM). When tap water dries on hot automotive clear coats, it creates corrosive mineral etching. Our onboard filtration strips out all dissolved solids down to 0 PPM, guaranteeing a 100% spotless, streak-free mirror finish even on dark vehicle paints.',
  },
  {
    question: 'How do I book, and how fast can Brady arrive?',
    answer:
      'You can call or text Brady directly at 630-205-0546, or submit our online inquiry form. We typically respond within 15 minutes to confirm your preferred time slot. We recommend booking 2 to 4 days in advance, though same-week slots frequently open up.',
  },
  {
    question: 'What if it rains on the scheduled day?',
    answer:
      'If you have a 2-car garage, we can easily perform full interior and paint correction indoors. If rain is unavoidable and no shelter is available, Brady will proactively contact you to reschedule for the next clear day with zero cancellation fees.',
  },
  {
    question: 'What is the difference between a wax and a 9H ceramic coating?',
    answer:
      'Traditional carnauba waxes sit on top of paint and degrade after 4 to 8 weeks of sun and washes. Our certified 9H ceramic coating chemically bonds directly with your vehicle’s clear coat to form a rigid, semi-permanent quartz glass barrier lasting 2 to 5 years, delivering extreme hydrophobic water beading and UV defense.',
  },
];
