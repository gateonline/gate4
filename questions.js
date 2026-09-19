const questions = [

/* =====================================================
   Q1 — MCQ — 1 MARK
   ===================================================== */

{
    question:
        "Which of the following represents the correct decreasing order of molecular weight averages?",

    options: [
        "Mz > Mw > Mv > Mn",
        "Mw > Mz > Mv > Mn",
        "Mz > Mv > Mn > Mw",
        "Mz > Mw > Mn > Mv"
    ],

    answer: 0,

    type: "MCQ",

    marks: 1
},



/* =====================================================
   Q2 — MCQ — 1 MARK
   ===================================================== */

{
    question:
        "The melting phenomenon in a semicrystalline polymer is a ______ order phase transition. (G-24)",

    options: [
        "Zeroth",
        "First",
        "Second",
        "Third"
    ],

    answer: 1,

    type: "MCQ",

    marks: 1
},



/* =====================================================
   Q3 — MSQ — 1 MARK
   ===================================================== */

{
    question:
        "A semicrystalline polymer is annealed. After annealing, XRD shows stronger and sharper crystalline peaks. Which statements are reasonable?",

    options: [
        "Crystalline order has increased.",
        "Crystallite perfection may have increased.",
        "Molecular weight must have increased.",
        "The amorphous fraction may have decreased."
    ],

    correctAnswers: [0, 1, 3],

    type: "MSQ",

    marks: 1
},



/* =====================================================
   Q4 — MCQ — 1 MARK
   ===================================================== */

{
    question:
        "Biaxially oriented polypropylene exhibits improved optical clarity because its morphology:",

    options: [
        "increases refractive-index fluctuations across the film.",
        "decreases refractive-index fluctuations across the film.",
        "increases light scattering.",
        "completely eliminates the crystalline phase."
    ],

    answer: 1,

    type: "MCQ",

    marks: 1
},



/* =====================================================
   Q5 — MCQ — 1 MARK
   ===================================================== */

{
    question:
        "A polymer gives a broad diffuse halo in an XRD pattern with no distinct sharp crystalline reflections. The most appropriate interpretation is:",

    options: [
        "Highly crystalline polymer",
        "Predominantly amorphous structure",
        "Extremely high molecular weight",
        "Completely crosslinked structure"
    ],

    answer: 1,

    type: "MCQ",

    marks: 1
},



/* =====================================================
   Q6 — MCQ — 1 MARK
   ===================================================== */

{
    question:
        "A semicrystalline polymer exhibits a melting enthalpy of ΔHm = 75 J/g. A completely crystalline sample of the same polymer has ΔHm° = 150 J/g. Assuming no other thermal contributions, calculate the percentage crystallinity.",

    options: [
        "25%",
        "40%",
        "50%",
        "75%"
    ],

    answer: 2,

    type: "MCQ",

    marks: 1
},



/* =====================================================
   Q7 — MCQ — 1 MARK
   ===================================================== */

{
    question:
        "In a DMTA experiment, a polymer shows a pronounced peak in tan δ. Which interpretation is most appropriate?",

    options: [
        "A significant change in damping/viscoelastic behavior occurs.",
        "The polymer has necessarily reached its melting point.",
        "Molecular weight can be directly calculated from the tan δ peak.",
        "The polymer has become completely crystalline."
    ],

    answer: 0,

    type: "MCQ",

    marks: 1
},



/* =====================================================
   Q8 — MCQ — 1 MARK
   ===================================================== */

{
    question:
        "Two polymer samples have the same true molecular weight distribution, but Sample A is linear and Sample B is highly branched. In conventional GPC calibrated using linear polymer standards, which statement is most appropriate?",

    options: [
        "Both necessarily give identical apparent molecular weights.",
        "The branched polymer can appear to have a lower molecular weight because its hydrodynamic volume is smaller.",
        "The branched polymer always gives a higher molecular weight.",
        "GPC directly measures molecular weight independent of molecular architecture."
    ],

    answer: 1,

    type: "MCQ",

    marks: 1
},



/* =====================================================
   Q9 — MCQ — 1 MARK
   ===================================================== */

{
    question:
        "Match the following:\n\n" +

        "P. Mooney viscosity\n" +
        "Q. Mooney scorch\n" +
        "R. Stress relaxation\n" +
        "S. GPC\n\n" +

        "1. Rotor torque resistance\n" +
        "2. Onset of premature vulcanization\n" +
        "3. Decay of torque/stress with time\n" +
        "4. Molecular-weight distribution\n\n" +

        "Choose the correct matching.",

    options: [
        "P–1, Q–2, R–3, S–4",
        "P–2, Q–1, R–4, S–3",
        "P–1, Q–3, R–2, S–4",
        "P–4, Q–2, R–3, S–1"
    ],

    answer: 0,

    type: "MCQ",

    marks: 1
},



/* =====================================================
   Q10 — MCQ — 1 MARK
   ===================================================== */

{
    question:
        "Two polymers have almost identical GPC molecular-weight distributions, but their FTIR spectra show a new strong absorption characteristic of a different functional group. Which conclusion is most appropriate?",

    options: [
        "Their molecular-weight distributions must actually be different.",
        "Their chemical structures/functional groups can differ despite similar MWD.",
        "FTIR directly measures Mw.",
        "GPC determines the functional groups."
    ],

    answer: 1,

    type: "MCQ",

    marks: 1
},



/* =====================================================
   Q11 — MSQ — 1 MARK
   ===================================================== */

{
    question:
        "Two rubber samples are tested at identical conditions:\n\n" +
        "Sample A: ML(1+4)100 = 42\n" +
        "Sample B: ML(1+4)100 = 68\n\n" +
        "Which statements are correct?",

    options: [
        "B exhibits greater resistance to rotor deformation.",
        "B necessarily has 68/42 times the molecular weight of A.",
        "Molecular architecture can affect Mooney viscosity.",
        "Test temperature affects the measured Mooney value."
    ],

    correctAnswers: [0, 2, 3],

    type: "MSQ",

    marks: 1
},



/* =====================================================
   Q12 — MSQ — 1 MARK
   ===================================================== */

{
    question:
        "A polymer initially has Mn = 50,000 g/mol. A very small amount of an extremely high molecular-weight fraction is added. Which averages are expected to show the greatest sensitivity to this addition?",

    options: [
        "Mn",
        "Mw",
        "Mz",
        "Mv"
    ],

    correctAnswers: [1, 2],

    type: "MSQ",

    marks: 1
},



/* =====================================================
   Q13 — MCQ — 1 MARK
   ===================================================== */

{
    question:
        "For a polymer sample, the viscosity-average molecular weight is found to be equal to the number-average molecular weight: Mv = Mn. Which of the following relationships among the molecular-weight averages is correct?",

    options: [
        "Mz > Mw = Mn",
        "Mz = Mw = Mn",
        "Mz > Mw > Mn",
        "Mv = Mw > Mn"
    ],

    answer: 1,

    type: "MCQ",

    marks: 1
},



/* =====================================================
   Q14 — MCQ — 1 MARK
   ===================================================== */

{
    question:
        "Match the following:\n\n" +

        "P. DSC\n" +
        "Q. TGA\n" +
        "R. DMTA\n" +
        "S. XRD\n\n" +

        "1. Mass change\n" +
        "2. Heat flow\n" +
        "3. Mechanical response as a function of temperature/frequency\n" +
        "4. Crystal structure/order\n\n" +

        "Choose the correct matching.",

    options: [
        "P–2, Q–1, R–3, S–4",
        "P–1, Q–2, R–4, S–3",
        "P–2, Q–3, R–1, S–4",
        "P–4, Q–1, R–3, S–2"
    ],

    answer: 0,

    type: "MCQ",

    marks: 1
},



/* =====================================================
   Q15 — NAT — 1 MARK
   ===================================================== */

{
    question:
        "The molar mass distribution of a polymer is:\n\n" +
        "Number of molecules = 100, Molar mass = 7500 g/mol\n" +
        "Number of molecules = 50, Molar mass = 5000 g/mol\n\n" +
        "The resulting weight average molecular weight of the polymer is ______ g/mol. (Answer in integer) (G-23)",

    type: "NAT",

    answer: 6875,

    tolerance: 0.5,

    marks: 1
},



/* =====================================================
   Q16 — MCQ — 2 MARKS
   ===================================================== */

{
    question:
        "A certain polymer synthesized in the laboratory shows that all the chains have same number of repeat units (i.e., same degree of polymerization). The relationship between weight-average (Mw), number-average (Mn), and z-average (Mz) molecular weights for this polymer can be expressed as (G-24)",

    options: [
        "Mz > Mw > Mn",
        "Mz = Mw = Mn",
        "Mz < Mw < Mn",
        "Mz > Mw < Mn"
    ],

    answer: 1,

    type: "MCQ",

    marks: 2
},



/* =====================================================
   Q17 — MSQ — 2 MARKS
   ===================================================== */

{
    question:
        "Which quantities are associated with DMTA characterization?",

    options: [
        "Storage modulus, E'",
        "Loss modulus, E''",
        "tan δ",
        "Molecular-weight distribution directly"
    ],

    correctAnswers: [0, 1, 2],

    type: "MSQ",

    marks: 2
},



/* =====================================================
   Q18 — NAT — 2 MARKS
   ===================================================== */

{
    question:
        "A polymer sample contains:\n\n" +
        "Fraction A: 90% of molecules have M = 20,000 g/mol\n" +
        "Fraction B: 10% of molecules have M = X g/mol\n\n" +
        "The number-average molecular weight of the entire sample is 50,000 g/mol.\n\n" +
        "Find the weight-average molecular weight, Mw, in g/mol.",

    type: "NAT",

    answer: 212000,

    tolerance: 0.5,

    marks: 2
},



/* =====================================================
   Q19 — MSQ — 2 MARKS
   ===================================================== */

{
    question:
        "A polymer initially has:\n\n" +
        "Mn = 50,000 g/mol\n" +
        "Mw = 100,000 g/mol\n\n" +
        "A small amount of very high-MW polymer is introduced.\n\n" +
        "Which changes are most likely?",

    options: [
        "Mn increases.",
        "Mw increases.",
        "Mz can increase dramatically.",
        "The GPC trace can develop a high-MW tail."
    ],

    correctAnswers: [0, 1, 2, 3],

    type: "MSQ",

    marks: 2
},



/* =====================================================
   Q20 — NAT — 2 MARKS
   ===================================================== */

{
    question:
        "For a polymer:\n\n" +
        "K = 1.5 × 10^(-4) dL/g\n" +
        "a = 0.80\n" +
        "[η] = 0.75 dL/g\n\n" +
        "Calculate Mv in g/mol.",

    type: "NAT",

    answer: 21500,

    tolerance: 100,

    marks: 2
},



/* =====================================================
   Q21 — MCQ — 2 MARKS
   ===================================================== */

{
    question:
        "Match the following molecular-weight averages with their determination methods:\n\n" +

        "P. Number-average molecular weight, Mn\n" +
        "Q. Weight-average molecular weight, Mw\n" +
        "R. Viscosity-average molecular weight, Mv\n" +
        "S. Z-average molecular weight, Mz\n\n" +

        "1. Light scattering\n" +
        "2. Dilute-solution viscometry\n" +
        "3. Osmometry / end-group analysis\n" +
        "4. Ultracentrifugation / sedimentation\n\n" +

        "Choose the correct matching.",

    options: [
        "P–3, Q–1, R–2, S–4",
        "P–1, Q–3, R–4, S–2",
        "P–3, Q–2, R–1, S–4",
        "P–4, Q–1, R–2, S–3"
    ],

    answer: 0,

    type: "MCQ",

    marks: 2
},



/* =====================================================
   Q22 — MCQ — 2 MARKS
   ===================================================== */

{
    question:
        "Polymer A has:\n\n" +
        "Mn = 50,000 g/mol\n" +
        "Mw = 100,000 g/mol\n\n" +
        "Polymer B has:\n\n" +
        "Mn = 150,000 g/mol\n" +
        "Mw = 300,000 g/mol\n\n" +
        "Equal numbers of molecules of A and B are mixed. Assuming the molecular-weight distributions within each polymer are unchanged, determine the approximate Mn of the mixture.",

    options: [
        "75,000 g/mol",
        "100,000 g/mol",
        "150,000 g/mol",
        "200,000 g/mol"
    ],

    answer: 1,

    type: "MCQ",

    marks: 2
},



/* =====================================================
   Q23 — NAT — 2 MARKS
   ===================================================== */

{
    question:
        "A polymer contains:\n\n" +
        "M = 10,000 g/mol, N = 100\n" +
        "M = 20,000 g/mol, N = 50\n" +
        "M = 100,000 g/mol, N = 10\n\n" +
        "Calculate Mz in g/mol.",

    type: "NAT",

    answer: 80769,

    tolerance: 1,

    marks: 2
},



/* =====================================================
   Q24 — NAT — 2 MARKS
   ===================================================== */

{
    question:
        "A polymer has two populations:\n\n" +
        "95% of the molecules have M = 20,000 g/mol\n" +
        "5% of the molecules have M = 200,000 g/mol\n\n" +
        "Calculate Đ (Dispersity), Roundoff to the nearest integer.",

    type: "NAT",

    answer: 3,

    tolerance: 0,

    marks: 2
},



/* =====================================================
   Q25 — MCQ — 2 MARKS
   ===================================================== */

{
    question:
        "Biaxially oriented poly(propylene) exhibits high clarity because layering of the crystalline structure:",

    options: [
        "decreases the variation in refractive index across the film thickness",
        "decreases the amount of light scattering",
        "increases the variation in refractive index across the film thickness",
        "increases the amount of light scattering"
    ],

    answer: 0,

    type: "MCQ",

    marks: 2
}

];
