const APP_KEY = "eliteMathsCoachV2";
const DB_NAME = "eliteMathsCoachDb";
const STORE_NAME = "appState";
const RECORD_ID = "primary";

function getActiveData() {
  return state.activeStream === 'Y7' ? window.ELITE_MATHS_DATA_Y7 : window.ELITE_MATHS_DATA;
}

const state = {
  studentName: "",
  activeStream: "Y10",
  selectedLessonId: window.ELITE_MATHS_DATA.lessons[0].id,
  activeLessonTab: "teaching",
  attempts: [],
  profiles: {},
  lessonProgress: {},
  currentQuestionState: {},
  givenUpQuestionIds: {},
  adaptiveQuestions: []
};

const lessonMarkdownCache = {};

const EXTENDED_LESSON_DEFS = [
  { id: "L04", title: "Lesson 04 - Exponential and Logarithmic Foundations", meta: "Year 10 · Term 1 · Week 2", mdFile: "Lesson_04.md", objectives: ["Apply index laws accurately", "Convert between exponential and log forms", "Solve basic exponential/log equations"], teachingPoints: ["State domain restrictions for logs", "Choose efficient algebraic pathways", "Verify solutions by substitution"] },
  { id: "L05", title: "Lesson 05 - Transformations, Inverses, and Composition", meta: "Year 10 · Term 1 · Week 2", mdFile: "Lesson_05.md", objectives: ["Apply graph transformations precisely", "Compute compositions reliably", "Find inverse functions with valid domain restrictions"], teachingPoints: ["Track domain/range explicitly", "Use notation with full precision", "Check invertibility assumptions"] },
  { id: "L06", title: "Lesson 06 - Coordinate Geometry and Locus", meta: "Year 10 · Term 1 · Week 2", mdFile: "Lesson_06.md", objectives: ["Use line forms interchangeably", "Solve midpoint/distance/locus tasks", "Justify geometric claims algebraically"], teachingPoints: ["Slope logic for parallel/perpendicular", "Equation derivations must be shown", "Interpret geometry through algebra"] },
  { id: "L07", title: "Lesson 07 - Trigonometric Ratios and Modelling", meta: "Year 10 · Term 1 · Week 3", mdFile: "Lesson_07.md", objectives: ["Use exact trig values fluently", "Solve triangle tasks with correct method", "Interpret simple trig models"], teachingPoints: ["Method selection must be justified", "Angle mode and unit accuracy", "Check reasonableness of answers"] },
  { id: "L08", title: "Lesson 08 - Probability and Conditional Logic", meta: "Year 10 · Term 1 · Week 3", mdFile: "Lesson_08.md", objectives: ["Compute compound probabilities", "Distinguish dependence/independence", "Use conditional probability correctly"], teachingPoints: ["Structured tree-diagram reasoning", "Notation discipline", "Explain logic in full sentences"] },
  { id: "L09", title: "Lesson 09 - Sequences, Series, and Pattern Proof", meta: "Year 10 · Term 1 · Week 3", mdFile: "Lesson_09.md", objectives: ["Use arithmetic/geometric formulas", "Solve parameterized sequence tasks", "Write proof-style pattern arguments"], teachingPoints: ["State nth-term structure explicitly", "Control algebra in sums", "Use clear conclusion statements"] },
  { id: "L10", title: "Lesson 10 - Intro Differentiation and Rates", meta: "Year 10 · Term 1 · Week 4", mdFile: "Lesson_10.md", objectives: ["Differentiate polynomial functions", "Classify stationary points", "Interpret derivative as rate"], teachingPoints: ["Notation precision", "Sign-chart reasoning", "Context interpretation"] },
  { id: "L11", title: "Lesson 11 - Intro Integration and Area", meta: "Year 10 · Term 1 · Week 4", mdFile: "Lesson_11.md", objectives: ["Compute basic antiderivatives", "Evaluate definite integrals", "Interpret signed area"], teachingPoints: ["Use +C correctly", "Boundary substitution discipline", "Connect algebra with geometry"] },
  { id: "L12", title: "Lesson 12 - Mixed Mastery and Repair Cycle", meta: "Year 10 · Term 1 · Week 4", mdFile: "Lesson_12.md", objectives: ["Execute mixed-topic problems", "Tag errors by protocol", "Build targeted repair plans"], teachingPoints: ["Evidence-based diagnostics", "Time-aware decision making", "Proof-quality communication"] },
  { id: "L13", title: "Lesson 13 - Polynomial Identities and Inequality Control", meta: "Year 10 · Term 2 · Week 1", mdFile: "Lesson_13.md", objectives: ["Apply polynomial identities strategically", "Use substitution to simplify symmetric forms", "Solve inequality chains with valid transformations"], teachingPoints: ["Structure before expansion", "Control sign changes in inequalities", "Verify solution sets against original conditions"] },
  { id: "L14", title: "Lesson 14 - Quadratic Parameters and Systems", meta: "Year 10 · Term 2 · Week 1", mdFile: "Lesson_14.md", objectives: ["Solve systems with quadratic components", "Use parameter constraints for root behavior", "Link algebraic and geometric interpretation"], teachingPoints: ["Discriminant as a parameter tool", "Substitution-elimination hybrid strategies", "Interpret repeated roots and tangency"] },
  { id: "L15", title: "Lesson 15 - Exponential and Logarithmic Modelling", meta: "Year 10 · Term 2 · Week 2", mdFile: "Lesson_15.md", objectives: ["Model growth/decay with exponentials", "Use change-of-base and log laws fluently", "Solve contextual log equations with domain checks"], teachingPoints: ["Equation model selection", "Parameter interpretation", "Domain-validated answers only"] },
  { id: "L16", title: "Lesson 16 - Function Analysis and Piecewise Logic", meta: "Year 10 · Term 2 · Week 2", mdFile: "Lesson_16.md", objectives: ["Analyse domains/ranges from rules", "Work accurately with piecewise functions", "Connect algebraic rules to graph features"], teachingPoints: ["Continuity checks at boundaries", "Inverse preconditions", "Monotonic behavior and interpretation"] },
  { id: "L17", title: "Lesson 17 - Circle Geometry in Coordinates", meta: "Year 10 · Term 2 · Week 3", mdFile: "Lesson_17.md", objectives: ["Derive and use circle equations", "Handle tangents/chords via algebra", "Solve geometric constraints in coordinate form"], teachingPoints: ["Center-radius transformations", "Tangent gradient-radius perpendicularity", "Distance-based geometric reasoning"] },
  { id: "L18", title: "Lesson 18 - Trigonometric Equations and Modelling", meta: "Year 10 · Term 2 · Week 3", mdFile: "Lesson_18.md", objectives: ["Solve trig equations across intervals", "Use identities for simplification and solving", "Interpret sinusoidal model parameters"], teachingPoints: ["Reference angle method", "Identity-driven transformations", "Amplitude-period-phase interpretation"] },
  { id: "L19", title: "Lesson 19 - Rational Expressions and Equation Systems", meta: "Year 10 · Term 2 · Week 4", mdFile: "Lesson_19.md", objectives: ["Simplify and solve rational expressions safely", "Handle simultaneous nonlinear systems", "Track restrictions with full accuracy"], teachingPoints: ["Domain first", "Factor before cancel", "Verification against original equations"] },
  { id: "L20", title: "Lesson 20 - Advanced Quadratic Modelling and Optimisation", meta: "Year 10 · Term 2 · Week 4", mdFile: "Lesson_20.md", objectives: ["Model contextual problems with quadratics", "Optimise under constraints", "Interpret vertex/discriminant in context"], teachingPoints: ["Model setup quality", "Constraint handling", "Interpretive conclusions"] },
  { id: "L21", title: "Lesson 21 - Function Graph Synthesis and Transform Chains", meta: "Year 10 · Term 3 · Week 1", mdFile: "Lesson_21.md", objectives: ["Combine multiple transformations", "Analyse inverse/composite structure", "Link algebra forms to graph behavior"], teachingPoints: ["Order of transformations", "Domain/range propagation", "Graph-feature reasoning"] },
  { id: "L22", title: "Lesson 22 - Differential Techniques and Curve Behaviour", meta: "Year 10 · Term 3 · Week 1", mdFile: "Lesson_22.md", objectives: ["Differentiate broader function families", "Classify stationary behaviour", "Use derivative sign analysis"], teachingPoints: ["Method reliability", "Stationary classification", "Interval reasoning"] },
  { id: "L23", title: "Lesson 23 - Integral Applications and Accumulation", meta: "Year 10 · Term 3 · Week 2", mdFile: "Lesson_23.md", objectives: ["Apply antiderivatives in context", "Compute area and accumulation reliably", "Connect rates and totals"], teachingPoints: ["Bounds discipline", "Signed area interpretation", "Differentiation checks"] },
  { id: "L24", title: "Lesson 24 - Term Mastery Checkpoint and Repair Cycle", meta: "Year 10 · Term 3 · Week 2", mdFile: "Lesson_24.md", objectives: ["Synthesize term content across strands", "Diagnose and repair persistent errors", "Stabilize exam workflow"], teachingPoints: ["Mixed-method selection", "Error taxonomy", "Targeted re-practice"] }
];

const EXTENDED_LESSON_QUIZ_TEMPLATES = {
  L04: [
    { strand: "NA", type: "numeric", prompt: "Simplify: \\(2^3 \\times 2^{-5}\\)", key: { answer: 1 / 4, tolerance: 0.0001 } },
    { strand: "NA", type: "numeric", prompt: "Solve: \\(3^{x+1}=27\\)", key: { answer: 2, tolerance: 0.0001 } },
    { strand: "NA", type: "mcq", prompt: "Evaluate: \\(\\log_2(32)\\)", options: ["3", "4", "5", "6"], key: { answer: "5" } },
    { strand: "NA", type: "numeric", prompt: "Solve: \\(\\log_{10}(x)=2\\)", key: { answer: 100, tolerance: 0.0001 } },
    { strand: "NA", type: "numeric", prompt: "Evaluate: \\(9^{1/2} \\times 27^{1/3}\\)", key: { answer: 9, tolerance: 0.0001 } },
    { strand: "NA", type: "numeric", prompt: "Solve: \\(5^{2x}=125\\)", key: { answer: 1.5, tolerance: 0.0001 } },
    { strand: "NA", type: "numeric", prompt: "Evaluate: \\(\\log_3(1/9)\\)", key: { answer: -2, tolerance: 0.0001 } },
    { strand: "NA", type: "numeric", prompt: "Solve: \\(\\ln(x)=0\\)", key: { answer: 1, tolerance: 0.0001 } },
    { strand: "RP", type: "mcq", prompt: "Which statement is equivalent to \\(\\log_a(b)=c\\)?", options: ["\\(a+b=c\\)", "\\(a^c=b\\)", "\\(c^a=b\\)", "\\(ab=c\\)"], key: { answer: "\\(a^c=b\\)" } },
    { strand: "NA", type: "mcq", prompt: "Domain of \\(\\log(x-4)\\) is:", options: ["\\(x<4\\)", "\\(x\\le 4\\)", "\\(x>4\\)", "All real x"], key: { answer: "\\(x>4\\)" } }
  ],
  L05: [
    { strand: "FG", type: "numeric", prompt: "For \\(y=(x-3)^2+2\\), find the x-coordinate of the vertex.", key: { answer: 3, tolerance: 0.0001 } },
    { strand: "FG", type: "mcq", prompt: "The graph \\(y=f(x-2)\\) is the graph of \\(y=f(x)\\) shifted:", options: ["left 2", "right 2", "up 2", "down 2"], key: { answer: "right 2" } },
    { strand: "FG", type: "text", prompt: "If \\(f(x)=2x-5\\), write \\(f^{-1}(x)\\).", key: { accepted: ["(x+5)/2", "(x + 5)/2", "0.5x+2.5"] } },
    { strand: "FG", type: "numeric", prompt: "If \\(f(x)=x^2\\) with domain \\(x\\ge 0\\), find \\(f^{-1}(9)\\).", key: { answer: 3, tolerance: 0.0001 } },
    { strand: "FG", type: "numeric", prompt: "Let \\(f(x)=x+1\\), \\(g(x)=x^2\\). Find \\(g(f(2))\\).", key: { answer: 9, tolerance: 0.0001 } },
    { strand: "FG", type: "text", prompt: "Let \\(f(x)=3x-1\\), \\(g(x)=x+4\\). Find \\((f\\circ g)(x)\\).", key: { accepted: ["3x+11", "11+3x"] } },
    { strand: "TG", type: "mcq", prompt: "The transformation \\(y=-f(x)\\) is a reflection in the:", options: ["y-axis", "x-axis", "line y=x", "origin"], key: { answer: "x-axis" } },
    { strand: "FG", type: "numeric", prompt: "For \\(h(x)=|x-2|+1\\), find the minimum value.", key: { answer: 1, tolerance: 0.0001 } },
    { strand: "FG", type: "text", prompt: "Let \\(f(x)=x^2-4\\), \\(g(x)=x+2\\). Find \\((f\\circ g)(x)\\).", key: { accepted: ["x^2+4x", "x(x+4)"] } },
    { strand: "RP", type: "mcq", prompt: "An inverse function exists when the function is:", options: ["periodic", "one-to-one on its domain", "always increasing and decreasing", "nonlinear"], key: { answer: "one-to-one on its domain" } }
  ],
  L06: [
    { strand: "TG", type: "numeric", prompt: "Find the slope through points \\((1,2)\\) and \\((5,10)\\).", key: { answer: 2, tolerance: 0.0001 } },
    { strand: "TG", type: "mcq", prompt: "A line parallel to \\(y=3x-4\\) has slope:", options: ["-3", "1/3", "3", "4"], key: { answer: "3" } },
    { strand: "TG", type: "text", prompt: "Equation of line with slope 4 through \\((0,-2)\\).", key: { accepted: ["y=4x-2", "y = 4x - 2"] } },
    { strand: "TG", type: "numeric", prompt: "Find the x-coordinate of the midpoint of \\((2,-1)\\) and \\((8,5)\\).", key: { answer: 5, tolerance: 0.0001 } },
    { strand: "TG", type: "numeric", prompt: "Find distance between \\((1,1)\\) and \\((4,5)\\).", key: { answer: 5, tolerance: 0.0001 } },
    { strand: "TG", type: "numeric", prompt: "Find a slope perpendicular to \\(m=2/3\\).", key: { answer: -1.5, tolerance: 0.0001 } },
    { strand: "TG", type: "mcq", prompt: "Perpendicular bisector of segment from \\((0,0)\\) to \\((4,0)\\) is:", options: ["\\(y=2\\)", "\\(x=2\\)", "\\(x=0\\)", "\\(y=0\\)"], key: { answer: "\\(x=2\\)" } },
    { strand: "TG", type: "numeric", prompt: "Point lies on \\(y=-x+7\\). Find \\(y\\) when \\(x=3\\).", key: { answer: 4, tolerance: 0.0001 } },
    { strand: "TG", type: "mcq", prompt: "Circle with centre \\((2,-1)\\), radius 3:", options: ["\\((x+2)^2+(y-1)^2=9\\)", "\\((x-2)^2+(y+1)^2=9\\)", "\\((x-2)^2+(y-1)^2=3\\)", "\\(x^2+y^2=9\\)"], key: { answer: "\\((x-2)^2+(y+1)^2=9\\)" } },
    { strand: "RP", type: "mcq", prompt: "Locus of points equidistant from \\((0,2)\\) and \\((0,-2)\\):", options: ["\\(x=0\\)", "\\(y=0\\)", "\\(x=y\\)", "\\(x=-y\\)"], key: { answer: "\\(y=0\\)" } }
  ],
  L07: [
    { strand: "TG", type: "numeric", prompt: "Evaluate \\(\\sin 30^\\circ\\).", key: { answer: 0.5, tolerance: 0.0001 } },
    { strand: "TG", type: "mcq", prompt: "Evaluate \\(\\tan 45^\\circ\\).", options: ["0", "1", "\\(\\sqrt{2}\\)", "undefined"], key: { answer: "1" } },
    { strand: "TG", type: "numeric", prompt: "If opposite = 3 and hypotenuse = 5, find \\(\\sin\\theta\\).", key: { answer: 0.6, tolerance: 0.0001 } },
    { strand: "TG", type: "numeric", prompt: "A right triangle has legs 6 and 8. Find hypotenuse.", key: { answer: 10, tolerance: 0.0001 } },
    { strand: "TG", type: "numeric", prompt: "If \\(\\cos\\theta=4/5\\) and hypotenuse is 10, find adjacent side.", key: { answer: 8, tolerance: 0.0001 } },
    { strand: "RP", type: "numeric", prompt: "Evaluate \\(\\sin^2 30^\\circ + \\cos^2 30^\\circ\\).", key: { answer: 1, tolerance: 0.0001 } },
    { strand: "TG", type: "mcq", prompt: "Solutions to \\(\\sin x=0\\) on \\([0^\\circ,180^\\circ]\\):", options: ["\\(x=90^\\circ\\)", "\\(x=0^\\circ,180^\\circ\\)", "No solutions", "\\(x=45^\\circ,135^\\circ\\)"], key: { answer: "\\(x=0^\\circ,180^\\circ\\)" } },
    { strand: "TG", type: "numeric", prompt: "Find area of triangle with \\(a=5\\), \\(b=7\\), \\(C=30^\\circ\\) using \\(A=\\frac12 ab\\sin C\\).", key: { answer: 8.75, tolerance: 0.0001 } },
    { strand: "TG", type: "mcq", prompt: "Which ratio is opposite/adjacent?", options: ["sine", "cosine", "tangent", "secant"], key: { answer: "tangent" } },
    { strand: "FG", type: "numeric", prompt: "For \\(h(t)=2+3\\sin t\\), find the midline value.", key: { answer: 2, tolerance: 0.0001 } }
  ],
  L08: [
    { strand: "PS", type: "numeric", prompt: "For a fair coin, find \\(P(H)\\).", key: { answer: 0.5, tolerance: 0.0001 } },
    { strand: "PS", type: "numeric", prompt: "If independent events have probabilities 0.4 and 0.5, find probability both occur.", key: { answer: 0.2, tolerance: 0.0001 } },
    { strand: "PS", type: "mcq", prompt: "Conditional probability formula is:", options: ["\\(P(A|B)=P(A\\cap B)/P(B)\\)", "\\(P(A|B)=P(A)P(B)\\)", "\\(P(A|B)=P(A)+P(B)\\)", "\\(P(A|B)=P(B)/P(A)\\)"], key: { answer: "\\(P(A|B)=P(A\\cap B)/P(B)\\)" } },
    { strand: "PS", type: "numeric", prompt: "Bag has 3 red, 2 blue. Without replacement, find \\(P(\\text{red then blue})\\).", key: { answer: 0.3, tolerance: 0.0001 } },
    { strand: "PS", type: "numeric", prompt: "If \\(P(A)=0.72\\), find \\(P(A^c)\\).", key: { answer: 0.28, tolerance: 0.0001 } },
    { strand: "PS", type: "mcq", prompt: "For independent events A and B:", options: ["\\(P(A\\cap B)=P(A)+P(B)\\)", "\\(P(A\\cap B)=P(A)P(B)\\)", "\\(P(A|B)=0\\)", "\\(P(A)=P(B)\\)"], key: { answer: "\\(P(A\\cap B)=P(A)P(B)\\)" } },
    { strand: "PS", type: "numeric", prompt: "Roll a fair die. Find \\(P(>4)\\).", key: { answer: 1 / 3, tolerance: 0.0001 } },
    { strand: "PS", type: "numeric", prompt: "Find probability of at least one head in two fair coin tosses.", key: { answer: 0.75, tolerance: 0.0001 } },
    { strand: "PS", type: "numeric", prompt: "A class has 12 girls and 8 boys. Find \\(P(\\text{boy})\\).", key: { answer: 0.4, tolerance: 0.0001 } },
    { strand: "PS", type: "numeric", prompt: "If \\(P(A)=0.6\\), \\(P(B)=0.5\\), \\(P(A\\cup B)=0.8\\), find \\(P(A\\cap B)\\).", key: { answer: 0.3, tolerance: 0.0001 } }
  ],
  L09: [
    { strand: "FG", type: "numeric", prompt: "Arithmetic sequence has \\(a_1=5\\), \\(d=3\\). Find \\(a_{10}\\).", key: { answer: 32, tolerance: 0.0001 } },
    { strand: "FG", type: "numeric", prompt: "Geometric sequence has \\(a_1=2\\), \\(r=3\\). Find \\(a_5\\).", key: { answer: 162, tolerance: 0.0001 } },
    { strand: "FG", type: "numeric", prompt: "Find \\(1+2+\\cdots+10\\).", key: { answer: 55, tolerance: 0.0001 } },
    { strand: "FG", type: "text", prompt: "Write the nth term of \\(7,11,15,19,\\ldots\\).", key: { accepted: ["4n+3", "3+4n"] } },
    { strand: "FG", type: "numeric", prompt: "If \\(a_n=2n-1\\), find \\(a_{20}\\).", key: { answer: 39, tolerance: 0.0001 } },
    { strand: "FG", type: "numeric", prompt: "Find \\(2+4+8+16+32\\).", key: { answer: 62, tolerance: 0.0001 } },
    { strand: "RP", type: "mcq", prompt: "If second differences are constant, the sequence is typically:", options: ["linear", "quadratic", "geometric", "constant"], key: { answer: "quadratic" } },
    { strand: "RP", type: "mcq", prompt: "Best algebraic setup to prove odd + odd = even:", options: ["\\((2m+1)+(2n+1)=2(m+n+1)\\)", "\\((2m+1)+(2n+1)=4mn+2\\)", "odd+odd=odd", "No algebra needed"], key: { answer: "\\((2m+1)+(2n+1)=2(m+n+1)\\)" } },
    { strand: "FG", type: "numeric", prompt: "If \\(S_n=n(n+1)/2\\), find \\(S_{15}\\).", key: { answer: 120, tolerance: 0.0001 } },
    { strand: "FG", type: "numeric", prompt: "Arithmetic sequence: \\(a_1=20\\), \\(d=-2\\). Find index of first negative term.", key: { answer: 12, tolerance: 0.0001 } }
  ],
  L10: [
    { strand: "FG", type: "text", prompt: "Differentiate: \\(x^3\\).", key: { accepted: ["3x^2"] } },
    { strand: "FG", type: "numeric", prompt: "For \\(f(x)=5x^2-3x+4\\), find \\(f'(2)\\).", key: { answer: 17, tolerance: 0.0001 } },
    { strand: "RP", type: "mcq", prompt: "A stationary point occurs where:", options: ["\\(f(x)=0\\)", "\\(f'(x)=0\\)", "\\(f''(x)=0\\)", "x=0"], key: { answer: "\\(f'(x)=0\\)" } },
    { strand: "FG", type: "text", prompt: "Differentiate: \\(1/x\\).", key: { accepted: ["-1/x^2", "-(1/x^2)"] } },
    { strand: "FG", type: "numeric", prompt: "Find gradient of tangent to \\(y=x^2\\) at \\(x=3\\).", key: { answer: 6, tolerance: 0.0001 } },
    { strand: "FG", type: "numeric", prompt: "If \\(s(t)=t^2+2t\\), find velocity at \\(t=4\\).", key: { answer: 10, tolerance: 0.0001 } },
    { strand: "FG", type: "numeric", prompt: "Differentiate the constant function \\(y=7\\).", key: { answer: 0, tolerance: 0.0001 } },
    { strand: "RP", type: "mcq", prompt: "A function is increasing where:", options: ["\\(f'(x)<0\\)", "\\(f'(x)>0\\)", "\\(f''(x)<0\\)", "\\(f(x)=0\\)"], key: { answer: "\\(f'(x)>0\\)" } },
    { strand: "FG", type: "text", prompt: "Differentiate: \\((3x-1)^2\\).", key: { accepted: ["18x-6", "6(3x-1)"] } },
    { strand: "FG", type: "numeric", prompt: "If \\(f'(x)=2x-4\\), find x-value of stationary point.", key: { answer: 2, tolerance: 0.0001 } }
  ],
  L11: [
    { strand: "FG", type: "text", prompt: "Integrate: \\(\\int x\\,dx\\).", key: { accepted: ["x^2/2+c", "x^2/2 + c", "0.5x^2+c", "0.5x^2 + c"] } },
    { strand: "FG", type: "text", prompt: "Integrate: \\(\\int(6x-4)\\,dx\\).", key: { accepted: ["3x^2-4x+c", "3x^2 - 4x + c"] } },
    { strand: "FG", type: "numeric", prompt: "Find area under \\(y=2\\) from \\(x=0\\) to \\(x=5\\).", key: { answer: 10, tolerance: 0.0001 } },
    { strand: "FG", type: "numeric", prompt: "Evaluate \\(\\int_0^3 x\\,dx\\).", key: { answer: 4.5, tolerance: 0.0001 } },
    { strand: "FG", type: "numeric", prompt: "If \\(F'(x)=x^2\\) and \\(F(0)=1\\), find \\(F(2)\\).", key: { answer: 11 / 3, tolerance: 0.0001 } },
    { strand: "FG", type: "mcq", prompt: "Choose \\(\\int 1/x\\,dx\\):", options: ["\\(1/x^2 + C\\)", "\\(\\ln|x| + C\\)", "\\(x + C\\)", "\\(e^x + C\\)"], key: { answer: "\\(\\ln|x| + C\\)" } },
    { strand: "RP", type: "mcq", prompt: "Signed area below the x-axis contributes:", options: ["positive area", "negative area", "zero always", "undefined"], key: { answer: "negative area" } },
    { strand: "FG", type: "numeric", prompt: "Evaluate \\(\\int_1^4 3x^2\\,dx\\).", key: { answer: 63, tolerance: 0.0001 } },
    { strand: "FG", type: "text", prompt: "Integrate: \\(\\int 0\\,dx\\).", key: { accepted: ["c", "C"] } },
    { strand: "RP", type: "mcq", prompt: "Best way to check an antiderivative is to:", options: ["differentiate it", "estimate graph only", "substitute random integers only", "factor it"], key: { answer: "differentiate it" } }
  ],
  L12: [
    { strand: "NA", type: "numeric", prompt: "Solve: \\(2x+5=19\\).", key: { answer: 7, tolerance: 0.0001 } },
    { strand: "NA", type: "numeric", prompt: "Simplify: \\(3^2 \\times 3^{-4}\\).", key: { answer: 1 / 9, tolerance: 0.0001 } },
    { strand: "FG", type: "numeric", prompt: "For \\(y=x^2-8x+1\\), find x-coordinate of the vertex.", key: { answer: 4, tolerance: 0.0001 } },
    { strand: "TG", type: "numeric", prompt: "Evaluate \\(\\sin 60^\\circ\\).", key: { answer: Math.sqrt(3) / 2, tolerance: 0.0001 } },
    { strand: "PS", type: "numeric", prompt: "Find probability of rolling a 6 on a fair die.", key: { answer: 1 / 6, tolerance: 0.0001 } },
    { strand: "FG", type: "text", prompt: "Write nth term for \\(4,7,10,13,\\ldots\\).", key: { accepted: ["3n+1", "1+3n"] } },
    { strand: "FG", type: "numeric", prompt: "Differentiate \\(x^2+3x\\), then evaluate at \\(x=1\\).", key: { answer: 5, tolerance: 0.0001 } },
    { strand: "FG", type: "numeric", prompt: "Evaluate \\(\\int_0^2 (x+1)\\,dx\\).", key: { answer: 4, tolerance: 0.0001 } },
    { strand: "TG", type: "text", prompt: "Equation of line through \\((1,1)\\) with slope 2.", key: { accepted: ["y=2x-1", "y = 2x - 1"] } },
    { strand: "RP", type: "mcq", prompt: "Best repair-cycle move after a mistake is to:", options: ["guess next step", "tag first error and rewrite correct method", "skip to harder question", "memorize final answer"], key: { answer: "tag first error and rewrite correct method" } }
  ],
  L13: [
    { strand: "NA", type: "numeric", prompt: "Evaluate: \\((x+1)^3-(x-1)^3\\) when \\(x=2\\).", key: { answer: 26, tolerance: 0.0001 } },
    { strand: "NA", type: "numeric", prompt: "If \\((x+\\frac{1}{x}=6\\), find \\(x^2+\\frac{1}{x^2}\\).", key: { answer: 34, tolerance: 0.0001 } },
    { strand: "NA", type: "mcq", prompt: "Which is always true for real \\(a,b\\)?", options: ["\\((a-b)^2\\ge0\\)", "\\(a^2-b^2\\ge0\\)", "\\(a+b\\ge0\\)", "\\(ab\\ge0\\)"], key: { answer: "\\((a-b)^2\\ge0\\)" } },
    { strand: "NA", type: "numeric", prompt: "Solve inequality: \\(2x-5<9\\).", key: { answer: 7, tolerance: 0.0001 } },
    { strand: "NA", type: "mcq", prompt: "Solution set of \\((x-3)(x+2)\\le0\\):", options: ["\\(x\\le-2\\) or \\(x\\ge3\\)", "\\(-2\\le x\\le3\\)", "\\(x\\le3\\)", "\\(x\\ge-2\\)"], key: { answer: "\\(-2\\le x\\le3\\)" } },
    { strand: "FG", type: "numeric", prompt: "If \\(f(x)=x^3-3x\\), find \\(f(2)-f(-1)\\).", key: { answer: 8, tolerance: 0.0001 } },
    { strand: "RP", type: "mcq", prompt: "Most efficient first step for \\(x^4-16=0\\):", options: ["Differentiate", "Use difference of squares", "Expand", "Graph only"], key: { answer: "Use difference of squares" } },
    { strand: "NA", type: "numeric", prompt: "Solve: \\(\\frac{x-1}{2}>3\\).", key: { answer: 7, tolerance: 0.0001 } },
    { strand: "NA", type: "numeric", prompt: "If \\(a+b=10\\), \\(ab=21\\), find \\(a^2+b^2\\).", key: { answer: 58, tolerance: 0.0001 } },
    { strand: "RP", type: "text", prompt: "State one reason checking endpoints matters in inequality solving.", key: { accepted: ["to confirm inclusion or exclusion", "to confirm boundary inclusion", "to check whether endpoints satisfy inequality"] } }
  ],
  L14: [
    { strand: "FG", type: "numeric", prompt: "Solve system: \\(y=x^2-4x+3\\) and \\(y=3\\). Enter smaller \\(x\\).", key: { answer: 0, tolerance: 0.0001 } },
    { strand: "FG", type: "numeric", prompt: "For \\(x^2-kx+9=0\\) to have equal roots, find \\(k\\) (positive value).", key: { answer: 6, tolerance: 0.0001 } },
    { strand: "FG", type: "mcq", prompt: "If discriminant is negative, the quadratic has:", options: ["two real roots", "one repeated root", "no real roots", "always integer roots"], key: { answer: "no real roots" } },
    { strand: "FG", type: "numeric", prompt: "Find \\(k\\) such that \\(x^2+2x+k=0\\) has roots differing by 4.", key: { answer: -3, tolerance: 0.0001 } },
    { strand: "TG", type: "numeric", prompt: "Line \\(y=2x+1\\) is tangent to \\(y=x^2+k\\). Find \\(k\\).", key: { answer: 0, tolerance: 0.0001 } },
    { strand: "FG", type: "numeric", prompt: "If roots of \\(x^2-7x+10=0\\) are \\(r_1,r_2\\), find \\(r_1^2+r_2^2\\).", key: { answer: 29, tolerance: 0.0001 } },
    { strand: "RP", type: "mcq", prompt: "Best way to enforce one intersection between line and parabola:", options: ["Set gradient 0", "Set discriminant to 0", "Set c=0", "Set x=0"], key: { answer: "Set discriminant to 0" } },
    { strand: "FG", type: "numeric", prompt: "For \\(x^2-(m+1)x+m=0\\), one root is 2. Find \\(m\\).", key: { answer: 2, tolerance: 0.0001 } },
    { strand: "FG", type: "mcq", prompt: "If \\(x^2+px+q=0\\) has roots \\(a,b\\), then \\(a+b\\) equals:", options: ["\\(p\\)", "\\(-p\\)", "\\(q\\)", "\\(-q\\)"], key: { answer: "\\(-p\\)" } },
    { strand: "FG", type: "numeric", prompt: "Equation \\(x^2-6x+c=0\\) has roots 1 and 5? Find \\(c\\).", key: { answer: 5, tolerance: 0.0001 } }
  ],
  L15: [
    { strand: "NA", type: "numeric", prompt: "Solve: \\(2^{x+2}=32\\).", key: { answer: 3, tolerance: 0.0001 } },
    { strand: "NA", type: "numeric", prompt: "Evaluate: \\(\\log_5(125)\\).", key: { answer: 3, tolerance: 0.0001 } },
    { strand: "NA", type: "mcq", prompt: "Change of base formula is:", options: ["\\(\\log_a b=\\log b-\\log a\\)", "\\(\\log_a b=\\frac{\\log b}{\\log a}\\)", "\\(\\log_a b=a\\log b\\)", "\\(\\log_a b=b\\log a\\)"], key: { answer: "\\(\\log_a b=\\frac{\\log b}{\\log a}\\)" } },
    { strand: "NA", type: "numeric", prompt: "Solve: \\(\\log_2(x)=5\\).", key: { answer: 32, tolerance: 0.0001 } },
    { strand: "NA", type: "numeric", prompt: "If \\(P(t)=200(1.1)^t\\), find \\(P(2)\\).", key: { answer: 242, tolerance: 0.0001 } },
    { strand: "NA", type: "numeric", prompt: "Solve: \\(3^{2x}=81\\).", key: { answer: 2, tolerance: 0.0001 } },
    { strand: "RP", type: "mcq", prompt: "After solving a log equation, you must:", options: ["round only", "check domain", "differentiate", "factor"], key: { answer: "check domain" } },
    { strand: "NA", type: "numeric", prompt: "Evaluate: \\(\\log_3(1/27)\\).", key: { answer: -3, tolerance: 0.0001 } },
    { strand: "NA", type: "numeric", prompt: "If \\(N=N_0e^{kt}\\), \\(k=0.2\\), \\(t=5\\), find multiplier \\(e^{kt}\\) (3 d.p.).", key: { answer: 2.718, tolerance: 0.001 } },
    { strand: "FG", type: "mcq", prompt: "Exponential growth model has:", options: ["constant first difference", "constant ratio", "constant second difference", "linear graph"], key: { answer: "constant ratio" } }
  ],
  L16: [
    { strand: "FG", type: "numeric", prompt: "For \\(f(x)=|x-3|+2\\), find minimum value.", key: { answer: 2, tolerance: 0.0001 } },
    { strand: "FG", type: "mcq", prompt: "Domain of \\(f(x)=\\frac{1}{x-4}\\):", options: ["all reals", "\\(x\\ne4\\)", "\\(x>4\\)", "\\(x<4\\)"], key: { answer: "\\(x\\ne4\\)" } },
    { strand: "FG", type: "numeric", prompt: "Given piecewise \\(f(x)=x+2\\) for \\(x<1\\), \\(f(x)=3x-1\\) for \\(x\\ge1\\), find \\(f(1)\\).", key: { answer: 2, tolerance: 0.0001 } },
    { strand: "FG", type: "mcq", prompt: "Function is one-to-one on interval if it is:", options: ["periodic", "strictly monotonic", "always quadratic", "piecewise only"], key: { answer: "strictly monotonic" } },
    { strand: "FG", type: "numeric", prompt: "If \\(f(x)=2x+5\\), find \\(f^{-1}(11)\\).", key: { answer: 3, tolerance: 0.0001 } },
    { strand: "FG", type: "text", prompt: "For \\(f(x)=x^2\\) with \\(x\\ge0\\), write \\(f^{-1}(x)\\).", key: { accepted: ["sqrt(x)", "\\sqrt{x}"] } },
    { strand: "RP", type: "mcq", prompt: "To check continuity at \\(x=a\\), compare:", options: ["left limit, right limit, value", "derivative only", "x-intercepts", "slope only"], key: { answer: "left limit, right limit, value" } },
    { strand: "FG", type: "numeric", prompt: "If \\(g(x)=x^2-1\\), find \\(g(3)-g(1)\\).", key: { answer: 8, tolerance: 0.0001 } },
    { strand: "FG", type: "numeric", prompt: "For piecewise \\(h(x)=2x\\) when \\(x<0\\), \\(h(x)=x+1\\) when \\(x\\ge0\\), find \\(h(-3)\\).", key: { answer: -6, tolerance: 0.0001 } },
    { strand: "FG", type: "mcq", prompt: "Range of \\(f(x)=x^2+1\\):", options: ["\\(y\\ge1\\)", "\\(y>1\\)", "all reals", "\\(y\\le1\\)"], key: { answer: "\\(y\\ge1\\)" } }
  ],
  L17: [
    { strand: "TG", type: "numeric", prompt: "Center of \\((x-2)^2+(y+3)^2=16\\): enter x-coordinate.", key: { answer: 2, tolerance: 0.0001 } },
    { strand: "TG", type: "numeric", prompt: "Radius of \\(x^2+y^2-4x+6y-12=0\\).", key: { answer: 5, tolerance: 0.0001 } },
    { strand: "TG", type: "mcq", prompt: "Tangent to circle at a point is:", options: ["parallel to radius", "perpendicular to radius", "through center", "always horizontal"], key: { answer: "perpendicular to radius" } },
    { strand: "TG", type: "numeric", prompt: "Distance from center \\((1,2)\\) to point \\((4,6)\\).", key: { answer: 5, tolerance: 0.0001 } },
    { strand: "TG", type: "text", prompt: "Equation of circle with center \\((0,0)\\) radius 3.", key: { accepted: ["x^2+y^2=9", "x^2 + y^2 = 9"] } },
    { strand: "TG", type: "numeric", prompt: "If tangent slope is 2, radius slope is:", key: { answer: -0.5, tolerance: 0.0001 } },
    { strand: "RP", type: "mcq", prompt: "Best first move for \\(x^2+y^2+Dx+Ey+F=0\\):", options: ["factorize", "complete square", "differentiate", "substitute 0"], key: { answer: "complete square" } },
    { strand: "TG", type: "numeric", prompt: "Circle center \\((3,-1)\\), radius 4: evaluate \\(r^2\\).", key: { answer: 16, tolerance: 0.0001 } },
    { strand: "TG", type: "mcq", prompt: "A point lies on circle if:", options: ["it satisfies equation", "x positive only", "y positive only", "distance is 1"], key: { answer: "it satisfies equation" } },
    { strand: "TG", type: "numeric", prompt: "For \\((x+1)^2+(y-2)^2=25\\), find y when x=-1 and upper point.", key: { answer: 7, tolerance: 0.0001 } }
  ],
  L18: [
    { strand: "TG", type: "numeric", prompt: "Solve on \\([0^\circ,360^\circ)\\): \\(\\cos x=\\frac12\\). Enter smaller solution.", key: { answer: 60, tolerance: 0.0001 } },
    { strand: "TG", type: "numeric", prompt: "Solve on \\([0^\circ,360^\circ)\\): \\(\\sin x=-1\\).", key: { answer: 270, tolerance: 0.0001 } },
    { strand: "TG", type: "mcq", prompt: "Identity equivalent to \\(1-\\sin^2x\\):", options: ["\\(\\cos^2x\\)", "\\(\\tan^2x\\)", "\\(\sec x\\)", "\\(\\sin x\\)"], key: { answer: "\\(\\cos^2x\\)" } },
    { strand: "TG", type: "numeric", prompt: "For \\(y=3\\sin(2x)\\), amplitude is:", key: { answer: 3, tolerance: 0.0001 } },
    { strand: "TG", type: "numeric", prompt: "For \\(y=2\\cos(\\pi x)\\), period is:", key: { answer: 2, tolerance: 0.0001 } },
    { strand: "FG", type: "numeric", prompt: "For \\(h(t)=5+2\\sin t\\), midline value is:", key: { answer: 5, tolerance: 0.0001 } },
    { strand: "RP", type: "mcq", prompt: "When solving \\(\\sin x=a\\), after reference angle you must:", options: ["stop", "apply quadrant signs", "differentiate", "change to radians only"], key: { answer: "apply quadrant signs" } },
    { strand: "TG", type: "numeric", prompt: "Evaluate \\(\\sin^2 45^\circ+\\cos^2 45^\circ\\).", key: { answer: 1, tolerance: 0.0001 } },
    { strand: "TG", type: "numeric", prompt: "If \\(\\tan x=\\sqrt{3}\\) and \\(x\\in[0^\circ,180^\circ]\\), find \\(x\\).", key: { answer: 60, tolerance: 0.0001 } },
    { strand: "TG", type: "mcq", prompt: "For \\(y=A\\sin(Bx)+D\\), vertical shift is:", options: ["\\(A\\)", "\\(B\\)", "\\(D\\)", "\\(AB\\)"], key: { answer: "\\(D\\)" } }
  ],
  L19: [
    { strand: "NA", type: "numeric", prompt: "Simplify: \\(\\frac{x^2-9}{x^2-3x}\\). Evaluate at \\(x=6\\).", key: { answer: 1.5, tolerance: 0.0001 } },
    { strand: "NA", type: "numeric", prompt: "Solve: \\(\\frac{2}{x-1}=3\\).", key: { answer: 5 / 3, tolerance: 0.0001 } },
    { strand: "NA", type: "mcq", prompt: "Domain of \\(\\frac{x+2}{x^2-4}\\):", options: ["all reals", "\\(x\\ne2\\)", "\\(x\\ne-2,2\\)", "\\(x>2\\)"], key: { answer: "\\(x\\ne-2,2\\)" } },
    { strand: "FG", type: "numeric", prompt: "Solve system: \\(y=\\frac{1}{x}\\), \\(y=x-1\\). Enter larger \\(x\\).", key: { answer: (1 + Math.sqrt(5)) / 2, tolerance: 0.0001 } },
    { strand: "NA", type: "numeric", prompt: "Simplify: \\(\\frac{3}{x}-\\frac{2}{x+1}\\) at \\(x=2\\).", key: { answer: 5 / 6, tolerance: 0.0001 } },
    { strand: "NA", type: "mcq", prompt: "Which step is valid first for \\(\\frac{x^2-1}{x-1}\\)?", options: ["cancel x terms", "factor numerator", "square denominator", "approximate decimal"], key: { answer: "factor numerator" } },
    { strand: "FG", type: "numeric", prompt: "Solve: \\(x+\\frac{1}{x}=\\frac{5}{2}\\). Find \\(x^2+\\frac{1}{x^2}\\).", key: { answer: 17 / 4, tolerance: 0.0001 } },
    { strand: "RP", type: "mcq", prompt: "After solving rational equation, essential check is:", options: ["rearrange only", "check excluded x-values", "round answer", "differentiate"], key: { answer: "check excluded x-values" } },
    { strand: "NA", type: "numeric", prompt: "Solve: \\(\\frac{x-2}{x+3}=\\frac{1}{2}\\).", key: { answer: 7, tolerance: 0.0001 } },
    { strand: "NA", type: "numeric", prompt: "Evaluate: \\(\\frac{1}{2-\\frac{1}{2}}\\).", key: { answer: 2 / 3, tolerance: 0.0001 } }
  ],
  L20: [
    { strand: "FG", type: "numeric", prompt: "Find vertex x-value of \\(y=2x^2-12x+5\\).", key: { answer: 3, tolerance: 0.0001 } },
    { strand: "FG", type: "numeric", prompt: "Minimum value of \\(y=x^2-10x+31\\).", key: { answer: 6, tolerance: 0.0001 } },
    { strand: "FG", type: "mcq", prompt: "Quadratic opens downward when:", options: ["\\(a>0\\)", "\\(a<0\\)", "\\(b=0\\)", "\\(c=0\\)"], key: { answer: "\\(a<0\\)" } },
    { strand: "FG", type: "numeric", prompt: "A rectangle has perimeter 28. Maximum area?", key: { answer: 49, tolerance: 0.0001 } },
    { strand: "FG", type: "numeric", prompt: "For \\(y=-x^2+8x-3\\), maximum value is:", key: { answer: 13, tolerance: 0.0001 } },
    { strand: "RP", type: "mcq", prompt: "Best form for optimization directly is:", options: ["factored form", "vertex form", "expanded random form", "table only"], key: { answer: "vertex form" } },
    { strand: "FG", type: "numeric", prompt: "For \\(A(x)=x(20-2x)\\), find x at maximum area.", key: { answer: 5, tolerance: 0.0001 } },
    { strand: "FG", type: "numeric", prompt: "If roots are 2 and 9 for monic quadratic, value of constant term is:", key: { answer: 18, tolerance: 0.0001 } },
    { strand: "FG", type: "mcq", prompt: "Axis of symmetry for \\(ax^2+bx+c\\):", options: ["\\(x=\\frac{b}{2a}\\)", "\\(x=-\\frac{b}{2a}\\)", "\\(x=-\\frac{2a}{b}\\)", "\\(x=\\frac{a}{b}\\)"], key: { answer: "\\(x=-\\frac{b}{2a}\\)" } },
    { strand: "FG", type: "numeric", prompt: "Discriminant of \\(x^2-4x+4\\).", key: { answer: 0, tolerance: 0.0001 } }
  ],
  L21: [
    { strand: "FG", type: "mcq", prompt: "\\(y=f(x-3)+2\\) means:", options: ["left 3, down 2", "right 3, up 2", "right 2, up 3", "reflect y-axis"], key: { answer: "right 3, up 2" } },
    { strand: "FG", type: "numeric", prompt: "If \\(f(x)=x^2\\), find \\(f(x+1)-f(x)\\) at \\(x=4\\).", key: { answer: 9, tolerance: 0.0001 } },
    { strand: "FG", type: "text", prompt: "If \\(f(x)=3x+2\\), write \\(f^{-1}(x)\\).", key: { accepted: ["(x-2)/3", "(x - 2)/3"] } },
    { strand: "FG", type: "numeric", prompt: "Let \\(f(x)=x-1\\), \\(g(x)=x^2+1\\). Find \\((g\circ f)(3)\\).", key: { answer: 5, tolerance: 0.0001 } },
    { strand: "FG", type: "mcq", prompt: "A function has inverse if it is:", options: ["periodic", "one-to-one", "quadratic", "piecewise"], key: { answer: "one-to-one" } },
    { strand: "FG", type: "numeric", prompt: "For \\(y=-(x-2)^2+4\\), y-value at vertex is:", key: { answer: 4, tolerance: 0.0001 } },
    { strand: "FG", type: "text", prompt: "Write \\((f\circ g)(x)\\) if \\(f(x)=2x+3\\), \\(g(x)=x^2\\).", key: { accepted: ["2x^2+3", "3+2x^2"] } },
    { strand: "RP", type: "mcq", prompt: "Best check for inverse answer:", options: ["differentiate", "compose both ways", "expand only", "graph one point"], key: { answer: "compose both ways" } },
    { strand: "FG", type: "numeric", prompt: "If \\(h(x)=|x-5|\\), minimum value is:", key: { answer: 0, tolerance: 0.0001 } },
    { strand: "FG", type: "numeric", prompt: "For \\(f(x)=\\frac{1}{x-2}\\), evaluate \\(f(4)\\).", key: { answer: 0.5, tolerance: 0.0001 } }
  ],
  L22: [
    { strand: "FG", type: "text", prompt: "Differentiate \\(x^5-2x^3+4x\\).", key: { accepted: ["5x^4-6x^2+4"] } },
    { strand: "FG", type: "numeric", prompt: "If \\(f(x)=x^3-3x^2\\), find \\(f'(2)\\).", key: { answer: 0, tolerance: 0.0001 } },
    { strand: "FG", type: "numeric", prompt: "For \\(f'(x)=6x-12\\), stationary x-value is:", key: { answer: 2, tolerance: 0.0001 } },
    { strand: "RP", type: "mcq", prompt: "A local minimum often has derivative sign change:", options: ["+ to -", "- to +", "+ to +", "- to -"], key: { answer: "- to +" } },
    { strand: "FG", type: "numeric", prompt: "Differentiate \\(\\frac{1}{x^2}\\).", key: { answer: -2, tolerance: 0.0001 } },
    { strand: "FG", type: "numeric", prompt: "If \\(s(t)=t^3-3t\\), velocity at \\(t=1\\) is:", key: { answer: 0, tolerance: 0.0001 } },
    { strand: "FG", type: "mcq", prompt: "Increasing interval where \\(f'(x)>0\\) means:", options: ["f decreases", "f increases", "f constant", "no relation"], key: { answer: "f increases" } },
    { strand: "FG", type: "numeric", prompt: "If \\(f''(x)=12x-6\\), then \\(f''(1)\\)=", key: { answer: 6, tolerance: 0.0001 } },
    { strand: "FG", type: "text", prompt: "Differentiate \\((2x-1)^3\\).", key: { accepted: ["6(2x-1)^2", "24x^2-24x+6"] } },
    { strand: "RP", type: "mcq", prompt: "First step in optimization with calculus:", options: ["set f=0", "find derivative", "factor denominator", "guess answer"], key: { answer: "find derivative" } }
  ],
  L23: [
    { strand: "FG", type: "text", prompt: "Integrate \\(\\int(5x^4-6x+1)dx\\).", key: { accepted: ["x^5-3x^2+x+c", "x^5 - 3x^2 + x + c"] } },
    { strand: "FG", type: "numeric", prompt: "Evaluate \\(\\int_0^2 (3x+1)dx\\).", key: { answer: 8, tolerance: 0.0001 } },
    { strand: "FG", type: "numeric", prompt: "Evaluate \\(\\int_1^3 x^2dx\\).", key: { answer: 26 / 3, tolerance: 0.0001 } },
    { strand: "FG", type: "mcq", prompt: "Correct antiderivative of \\(\\frac{1}{x}\\) is:", options: ["\\(\\ln|x|+C\\)", "\\(x^{-2}+C\\)", "\\(e^x+C\\)", "\\(x+C\\)"], key: { answer: "\\(\\ln|x|+C\\)" } },
    { strand: "FG", type: "numeric", prompt: "Area under \\(y=4\\) from x=1 to x=6.", key: { answer: 20, tolerance: 0.0001 } },
    { strand: "RP", type: "mcq", prompt: "Best check after integrating:", options: ["integrate again", "differentiate result", "set x=0", "round answer"], key: { answer: "differentiate result" } },
    { strand: "FG", type: "numeric", prompt: "If \\(F'(x)=2x\\) and \\(F(0)=3\\), find \\(F(4)\\).", key: { answer: 19, tolerance: 0.0001 } },
    { strand: "FG", type: "text", prompt: "Integrate \\(\\int 0\,dx\\).", key: { accepted: ["c", "C"] } },
    { strand: "FG", type: "numeric", prompt: "Evaluate \\(\\int_{-1}^{1} x\,dx\\).", key: { answer: 0, tolerance: 0.0001 } },
    { strand: "FG", type: "numeric", prompt: "Evaluate \\(\\int_2^5 2\,dx\\).", key: { answer: 6, tolerance: 0.0001 } }
  ],
  L24: [
    { strand: "NA", type: "numeric", prompt: "Solve: \\(3x-7=11\\).", key: { answer: 6, tolerance: 0.0001 } },
    { strand: "FG", type: "numeric", prompt: "Vertex x-value of \\(y=x^2-6x+5\\).", key: { answer: 3, tolerance: 0.0001 } },
    { strand: "TG", type: "numeric", prompt: "Evaluate \\(\\cos 60^\circ\\).", key: { answer: 0.5, tolerance: 0.0001 } },
    { strand: "PS", type: "numeric", prompt: "Fair die: probability of odd number.", key: { answer: 0.5, tolerance: 0.0001 } },
    { strand: "FG", type: "text", prompt: "Differentiate \\(x^2-4x\\).", key: { accepted: ["2x-4", "-4+2x"] } },
    { strand: "FG", type: "numeric", prompt: "Evaluate \\(\\int_0^1 (2x)dx\\).", key: { answer: 1, tolerance: 0.0001 } },
    { strand: "NA", type: "numeric", prompt: "If \\(x+\\frac1x=4\\), find \\(x^2+\\frac1{x^2}\\).", key: { answer: 14, tolerance: 0.0001 } },
    { strand: "FG", type: "mcq", prompt: "For \\(f(x)=x^2\\), \\(f(-3)\\)=", options: ["-9", "9", "6", "-6"], key: { answer: "9" } },
    { strand: "TG", type: "text", prompt: "Equation of line through \\((0,2)\\) with slope -1.", key: { accepted: ["y=-x+2", "y = -x + 2"] } },
    { strand: "RP", type: "mcq", prompt: "Best mastery move after identifying weak strand:", options: ["avoid it", "targeted practice set", "memorize one answer", "skip review"], key: { answer: "targeted practice set" } }
  ]
};

const LESSON_NOTES = {
  L01: [
    "1) Indices core facts: \\(a^m\\cdot a^n=a^{m+n}\\), \\(a^m/a^n=a^{m-n}\\), \\((a^m)^n=a^{mn}\\), \\(a^{-n}=1/a^n\\), \\(a^{1/n}=\\sqrt[n]{a}\\). These must be automatic.",
    "2) Surd core facts: simplify radicals before operations, and rationalise denominators by multiplying by a conjugate when denominator is of form \\(\\sqrt{a}\\pm\\sqrt{b}\\) or \\(\\sqrt{a}\\pm c\\).",
    "3) Function substitution basics: if \\(f(x)=x^2-3x+1\\), then \\(f(5)=25-15+1\\), and \\(f(x+2)=(x+2)^2-3(x+2)+1\\). Always expand carefully.",
    "4) Proof language: 'for all' means universal claim; one counterexample is enough to disprove a universal claim. Do not confuse 'true for many examples' with 'always true'.",
    "5) Study workflow for every question: identify topic, write relevant formula first, substitute with brackets, simplify line by line, then verify by substitution or reverse-check.",
    "6) Common exam errors: sign mistakes after expanding brackets, dropped powers, and skipping units/interval notation. Write full final form, not just a number if question asks for statement.",
    "7) What you should know before moving on: index laws, surd rationalisation, clean substitution, and basic reasoning language. If these are weak, later lessons will feel much harder than needed."
  ],
  L02: [
    "1) Key identities: \\(a^2-b^2=(a-b)(a+b)\\), \\((a+b)^2=a^2+2ab+b^2\\), \\((a-b)^2=a^2-2ab+b^2\\). Spot these before expanding.",
    "2) Rational expression rule: cancel factors only, never terms. Example: \\(\\frac{x^2-1}{x-1}=\\frac{(x-1)(x+1)}{x-1}=x+1\\) for \\(x\\ne1\\).",
    "3) Absolute value equations/inequalities: for \\(\\lvert A\\rvert=k\\), solve \\(A=k\\) and \\(A=-k\\). For \\(\\lvert A\\rvert<k\\), use \\(-k<A<k\\). For \\(\\lvert A\\rvert>k\\), use \\(A>k\\) or \\(A<-k\\).",
    "4) Rational inequalities method: factor numerator/denominator, find critical points, build sign table by intervals, choose intervals matching inequality sign, exclude undefined points.",
    "5) Domain restrictions are part of the answer. Any denominator value making zero must be excluded, even if simplification hides it later.",
    "6) Worked approach to study: write restriction first, factor everything, simplify by factors, solve inequality by sign chart, present final answer in interval notation.",
    "7) Common mistakes: canceling across +/-, forgetting excluded values, and flipping inequality without reason. Final answers must respect original expression, not just simplified one."
  ],
  L03: [
    "1) Standard quadratic form: \\(ax^2+bx+c=0\\), where \\(a\\ne0\\).",
    "2) Quadratic formula (must memorize exactly): \\(x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}\\).",
    "3) Discriminant definition: \\(\\Delta=b^2-4ac\\). Interpretation: if \\(\\Delta>0\\) two distinct real roots, \\(\\Delta=0\\) one repeated real root, \\(\\Delta<0\\) no real roots.",
    "4) Vertex formula for \\(y=ax^2+bx+c\\): \\(x_{vertex}=-\\frac{b}{2a}\\). Then substitute into \\(y=ax^2+bx+c\\) to get \\(y_{vertex}\\). Axis of symmetry is \\(x=-\\frac{b}{2a}\\).",
    "5) Turning point meaning: if \\(a>0\\), parabola opens up and vertex is minimum; if \\(a<0\\), opens down and vertex is maximum.",
    "6) Useful root relationships (for monic \\(x^2+bx+c=0\\)): sum of roots \\(= -b\\), product of roots \\(= c\\). More generally for \\(ax^2+bx+c=0\\): sum \\(= -b/a\\), product \\(= c/a\\).",
    "7) Method choice: factor when clean factors exist, complete the square for turning-point questions, use formula for general equations, use discriminant for root-type questions.",
    "8) Common mistakes: forgetting \\(2a\\) in denominator, sign errors in \\(-b\\), and mixing up \\(b^2-4ac\\) with \\(b^2+4ac\\). Always re-check substitutions."
  ],
  L04: [
    "1) Exponential-log inverse rule: \\(a^x=b\\iff\\log_a(b)=x\\), with \\(a>0, a\\ne1, b>0\\).",
    "2) Log laws to memorize: \\(\\log_a(MN)=\\log_aM+\\log_aN\\), \\(\\log_a(M/N)=\\log_aM-\\log_aN\\), \\(\\log_a(M^k)=k\\log_aM\\).",
    "3) Domain law: every log argument must be positive. Example: in \\(\\log(x-3)\\), require \\(x>3\\).",
    "4) Solving exponential equations: if bases match, set exponents equal. Example \\(5^{2x}=125=5^3\\Rightarrow2x=3\\Rightarrow x=1.5\\).",
    "5) Solving logarithmic equations: combine logs when possible, convert to exponential form, solve, then check domain.",
    "6) Invalid shortcut to avoid: \\(\\log(a+b)\\ne\\log a+\\log b\\). This error is very common and always wrong.",
    "7) Study checklist: rewrite numbers to useful bases, apply log laws carefully, solve cleanly, check each candidate in original equation and domain.",
    "8) What you should know before moving on: index fluency, log laws, domain restrictions, and conversion between log and exponential forms."
  ],
  L05: [
    "1) Function idea: input \\(x\\) goes into rule \\(f\\), output is \\(f(x)\\). Domain = allowed inputs, range = produced outputs.",
    "2) Transformation basics from \\(y=f(x)\\): \\(y=f(x-a)\\) right \\(a\\), \\(y=f(x+a)\\) left \\(a\\), \\(y=f(x)+k\\) up \\(k\\), \\(y=-f(x)\\) reflect in x-axis, \\(y=f(-x)\\) reflect in y-axis.",
    "3) Composition rule: \\((f\\circ g)(x)=f(g(x))\\). Order matters. Always compute inside function first.",
    "4) Inverse function steps: write \\(y=f(x)\\), swap x and y, solve for y. Final y-expression is \\(f^{-1}(x)\\).",
    "5) Inverse existence: function must be one-to-one on chosen domain. Example \\(f(x)=x^2\\) needs domain restriction (e.g. \\(x\\ge0\\)) to have an inverse function.",
    "6) Check inverse by composition: \\(f(f^{-1}(x))=x\\) and \\(f^{-1}(f(x))=x\\) on valid domains.",
    "7) Common mistakes: wrong shift direction for inside changes, reversed composition order, and missing domain restrictions when giving inverse.",
    "8) What you should know: transformation language, composition order, inverse construction, and domain/range discipline."
  ],
  L06: [
    "1) Slope formula: \\(m=\\frac{y_2-y_1}{x_2-x_1}\\). Parallel lines have equal slope. Perpendicular slopes satisfy \\(m_1m_2=-1\\) (when both finite).",
    "2) Line forms: point-slope \\(y-y_1=m(x-x_1)\\), slope-intercept \\(y=mx+b\\), general form \\(Ax+By+C=0\\). Know how to switch forms.",
    "3) Midpoint formula: \\(M=\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)\\). Distance formula: \\(d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}\\).",
    "4) Circle center-radius form: \\((x-h)^2+(y-k)^2=r^2\\). Centre is \\((h,k)\\), radius is \\(r\\).",
    "5) Complete-the-square skill is essential to convert \\(x^2+y^2+Dx+Ey+F=0\\) into center-radius form.",
    "6) Locus idea: translate word condition into equation. Example: points equidistant from two points lie on the perpendicular bisector of the segment.",
    "7) Common mistakes: sign errors in distance, wrong perpendicular slope, and equations that fail point check. Always substitute a known point to verify.",
    "8) What you should know: slope logic, line equations, midpoint/distance fluency, and circle interpretation from equation."
  ],
  L07: [
    "1) Right-triangle definitions: \\(\\sin\\theta=\\frac{opposite}{hypotenuse}\\), \\(\\cos\\theta=\\frac{adjacent}{hypotenuse}\\), \\(\\tan\\theta=\\frac{opposite}{adjacent}\\).",
    "2) Identity to memorize: \\(\\sin^2\\theta+\\cos^2\\theta=1\\). This helps convert between trig ratios.",
    "3) Exact values to know: \\(\\sin30^\\circ=1/2\\), \\(\\cos60^\\circ=1/2\\), \\(\\sin45^\\circ=\\cos45^\\circ=\\sqrt2/2\\), \\(\\tan45^\\circ=1\\).",
    "4) Solving trig equations on intervals: find reference angle first, then use quadrant/sign logic to list all solutions in required domain.",
    "5) Triangle area formula with included angle: \\(A=\\frac12ab\\sin C\\).",
    "6) For non-right triangles, law of sines and cosine form intuition should be recognized even if focus is ratio fluency here.",
    "7) Common mistakes: calculator in radians instead of degrees, wrong quadrant sign, and giving one solution when interval requires multiple.",
    "8) What you should know: ratio definitions, identity use, exact values, and interval-aware trig equation solving."
  ],
  L08: [
    "1) Core rules: \\(P(A^c)=1-P(A)\\), \\(P(A\\cup B)=P(A)+P(B)-P(A\\cap B)\\), and for independent events \\(P(A\\cap B)=P(A)P(B)\\).",
    "2) Conditional probability formula: \\(P(A|B)=\\frac{P(A\\cap B)}{P(B)}\\), valid only when \\(P(B)>0\\).",
    "3) Independence test: A and B are independent if \\(P(A|B)=P(A)\\) (equivalently \\(P(A\\cap B)=P(A)P(B)\\)).",
    "4) Mutually exclusive vs independent: mutually exclusive means \\(P(A\\cap B)=0\\); independent usually does NOT mean mutually exclusive.",
    "5) Tree diagrams: multiply along branches for joint probabilities, add across branches for total probability of grouped outcomes.",
    "6) Without replacement means probabilities change after each draw. With replacement means probabilities stay the same.",
    "7) Common mistakes: wrong denominator in conditional probability, forgetting overlap subtraction in union formula, and answers outside [0,1].",
    "8) What you should know: complement, union/intersection logic, conditional formula, and clear event notation in multi-step problems."
  ],
  L09: [
    "1) Arithmetic sequence formula: \\(a_n=a_1+(n-1)d\\). Geometric sequence formula: \\(a_n=a_1r^{n-1}\\).",
    "2) Arithmetic sum formula: \\(S_n=\\frac{n}{2}(2a_1+(n-1)d)=\\frac{n}{2}(a_1+a_n)\\).",
    "3) Geometric finite sum formula (\\(r\\ne1\\)): \\(S_n=a_1\\frac{1-r^n}{1-r}\\).",
    "4) Pattern recognition guide: constant first difference suggests linear, constant second difference suggests quadratic, constant ratio suggests geometric.",
    "5) Proof writing template: define variable form, substitute algebraically, simplify, and conclude with a sentence ('therefore ...').",
    "6) Distinguish clearly: \\(a_n\\) = nth term value, \\(S_n\\) = sum of first n terms. Never mix these symbols.",
    "7) Common mistakes: off-by-one index errors, wrong d or r from early terms, and using arithmetic formulas on geometric patterns.",
    "8) What you should know: nth-term construction, sum formulas, sequence classification, and basic algebraic justification of pattern statements."
  ],
  L10: [
    "1) Derivative meaning: rate of change / tangent gradient. If \\(y=f(x)\\), derivative is \\(f'(x)\\) or \\(\\frac{dy}{dx}\\).",
    "2) Power rule: \\(\\frac{d}{dx}(x^n)=nx^{n-1}\\). Constants differentiate to 0. Constant multiples pass through derivative.",
    "3) Basic linearity: \\(\\frac{d}{dx}[af(x)+bg(x)]=af'(x)+bg'(x)\\).",
    "4) Stationary points occur where \\(f'(x)=0\\). To classify, use sign change in \\(f'(x)\\) or second derivative test if taught.",
    "5) Increasing/decreasing: if \\(f'(x)>0\\), function increasing; if \\(f'(x)<0\\), decreasing on interval.",
    "6) Applied motion link: position \\(s(t)\\), velocity \\(v(t)=s'(t)\\), acceleration \\(a(t)=v'(t)=s''(t)\\).",
    "7) Common mistakes: reducing powers incorrectly, losing coefficients, or evaluating derivative at wrong x-value.",
    "8) What you should know: power rule fluency, stationary-point solving, sign-chart interpretation, and context translation for rates."
  ],
  L11: [
    "1) Integration idea: reverse of differentiation for many functions and a tool for accumulation/area.",
    "2) Reverse power rule: \\(\\int x^n dx=\\frac{x^{n+1}}{n+1}+C\\) for \\(n\\ne-1\\).",
    "3) Special case: \\(\\int\\frac{1}{x}dx=\\ln|x|+C\\).",
    "4) Indefinite vs definite: indefinite gives function family (+C), definite gives a number using bounds \\(\\int_a^b f(x)dx=[F(x)]_a^b=F(b)-F(a)\\).",
    "5) Signed area: area below x-axis contributes negative value in definite integral. Geometric area and signed integral value are related but not always identical.",
    "6) Method steps: find antiderivative, apply upper bound, subtract lower bound, simplify carefully.",
    "7) Common mistakes: forgetting +C, dividing by wrong power increment, sign errors in bound substitution.",
    "8) What you should know: reverse power rule, bound evaluation, and checking by differentiating your antiderivative."
  ],
  L12: [
    "1) Mixed mastery means method selection under pressure. First identify topic family (algebra/function/geometry/trig/probability/calculus), then choose matching formula toolkit.",
    "2) Build your personal quick-reference: quadratics (\\(\\Delta, -b/2a,\\) formula), logs (laws + domain), trig (exact values + identity), probability (union/intersection/conditional), calculus (power rules).",
    "3) Decision cycle for each problem: decode question, choose method, execute, verify, then classify error if wrong.",
    "4) Error-tag categories you should use: concept gap, wrong method selection, algebra slip, notation/sloppy transcription, time-pressure decision.",
    "5) Repair rule: fix first wrong step, not last line. Re-do question from that exact point using correct method.",
    "6) Assessment strategy: secure routine marks first, then extension. In timed settings, mark and park hard questions instead of burning all time on one item.",
    "7) What you should know by end: stable routine across strands, reliable checking habit, and data-driven review routine from logged errors.",
    "8) Long-term goal: build consistency. Top performance is usually fewer unforced errors plus correct method choice, not memorizing extra tricks."
  ],
  L13: [
    "1) Core identities to use quickly: \\((a+b)^2=a^2+2ab+b^2\\), \\((a-b)^2=a^2-2ab+b^2\\), \\(a^2-b^2=(a-b)(a+b)\\), \\(a^3-b^3=(a-b)(a^2+ab+b^2)\\).",
    "2) Symmetric substitutions: if \\(x+1/x\\) is known, then \\(x^2+1/x^2=(x+1/x)^2-2\\), and \\(x^3+1/x^3=(x+1/x)^3-3(x+1/x)\\).",
    "3) Inequality basics: when multiplying/dividing by negative numbers, reverse the inequality sign. Keep boundary points explicitly tracked.",
    "4) Sign chart method for product inequalities: find roots, split intervals, test signs, then choose intervals matching <0, >0, <=0, >=0.",
    "5) What you should know: structure-first simplification, substitution patterns for reciprocal expressions, and interval-set notation.",
    "6) Common mistakes: expanding too early, missing boundary cases in <= or >=, and incorrect sign reversals when isolating x.",
    "7) Check habit: test one value from each chosen interval in original inequality, not only in transformed version."
  ],
  L14: [
    "1) Discriminant review: \\(\\Delta=b^2-4ac\\). Use \\(\\Delta>0\\), \\(=0\\), \\(<0\\) for two/one/no real roots.",
    "2) Parameter questions: treat constants like \\(k,m,p\\) as variables controlling root behavior, tangency, and intersections.",
    "3) System solving: substitute one equation into the other, reduce to single variable, then back-substitute and verify both equations.",
    "4) Tangency link: line and parabola touch once when resulting quadratic has discriminant zero.",
    "5) Root relations: for \\(ax^2+bx+c=0\\), sum \\(=-b/a\\), product \\(=c/a\\). Use these when roots are not explicitly solved.",
    "6) What you should know: how to build and solve parameter constraints, and how algebraic root conditions map to graph intersections.",
    "7) Common mistakes: mixing monic/non-monic root formulas and forgetting that repeated root means exact one real intersection."
  ],
  L15: [
    "1) Exponential model form: \\(P=P_0a^t\\) (discrete) or \\(P=P_0e^{kt}\\) (continuous). Identify which form fits question wording.",
    "2) Log rules needed: \\(\\log_a(MN)=\\log_aM+\\log_aN\\), \\(\\log_a(M/N)=\\log_aM-\\log_aN\\), \\(\\log_a(M^r)=r\\log_aM\\).",
    "3) Change of base: \\(\\log_a b=\\frac{\\log b}{\\log a}\\). Use this when calculator has only common/natural logs.",
    "4) Solving strategy: isolate exponential/log term, convert form, solve algebraically, then check domain for log questions.",
    "5) Domain rule reminder: every logarithm argument must be positive. Reject solutions violating this.",
    "6) What you should know: growth vs decay interpretation, base meaning, and model parameter meaning in context.",
    "7) Common mistakes: invalid log splits (especially \\(\\log(a+b)\\)), forgetting domain checks, and rounding too early in multi-step calculations."
  ],
  L16: [
    "1) Domain and range are mandatory. Domain = allowed x-values; range = resulting y-values. Always state with intervals/conditions.",
    "2) Piecewise function method: identify correct branch from x-condition first, then compute. Boundary values need special care.",
    "3) Continuity at boundary \\(x=a\\): left-hand value equals right-hand value equals function value.",
    "4) One-to-one condition for inverses: each y-value corresponds to at most one x-value on chosen domain.",
    "5) Inverse process: \\(y=f(x)\\), swap x/y, solve for y, then state domain/range restrictions.",
    "6) What you should know: monotonic behavior, boundary evaluation, inverse validity checks, and graph interpretation from formulas.",
    "7) Common mistakes: using wrong branch in piecewise rules, ignoring endpoint inclusion symbols (< vs <=), and giving inverse without domain restriction."
  ],
  L17: [
    "1) Circle standard form: \\((x-h)^2+(y-k)^2=r^2\\). Center \\((h,k)\\), radius \\(r\\).",
    "2) Convert general form to center-radius using completing square in x and y.",
    "3) Tangent fact: tangent at a point is perpendicular to radius at that point; gradient relationship \\(m_1m_2=-1\\).",
    "4) Distance formula is central for point-on-circle, radius checks, and geometric constraints.",
    "5) Circle-line interaction can be solved by substitution; discriminant gives intersection count (2 secant, 1 tangent, 0 none).",
    "6) What you should know: equation construction from center/radius, tangent reasoning, and coordinate verification of geometric claims.",
    "7) Common mistakes: sign errors in center extraction from \\((x-h)^2\\), confusing radius with \\(r^2\\), and gradient-perpendicular mistakes."
  ],
  L18: [
    "1) Core identity set: \\(\\sin^2x+\\cos^2x=1\\), \\(1+\\tan^2x=\\sec^2x\\) (where defined).",
    "2) Trig equation workflow: isolate trig function, find reference angle, apply quadrant/sign logic, list all solutions in required interval.",
    "3) Model form: \\(y=A\\sin(Bx+C)+D\\) or \\(A\\cos(Bx+C)+D\\). Amplitude \\(=|A|\\), period \\(=2\\pi/|B|\\) (or \\(360^\\circ/|B|\\)).",
    "4) Midline is \\(y=D\\); max/min are \\(D\\pm|A|\\).",
    "5) What you should know: exact values, interval-based solution listing, and parameter interpretation from sinusoidal equations.",
    "6) Common mistakes: missing second/third/fourth-quadrant solutions, calculator mode mismatch, and incorrect period calculation.",
    "7) Check habit: substitute candidate angles back into original equation and verify sign and interval constraints."
  ],
  L19: [
    "1) Rational expression rule: simplify by factoring, then cancel common factors only. Never cancel terms across addition/subtraction.",
    "2) Domain restrictions first: any denominator expression set to zero gives excluded values.",
    "3) Rational equations method: state restrictions, multiply by LCD, solve resulting equation, reject excluded values.",
    "4) System method with rational forms: substitute carefully and check both equations at the end.",
    "5) What you should know: restriction logic, valid cancellation, and verification against original equation.",
    "6) Common mistakes: forgetting restrictions and accepting extraneous roots produced after multiplying both sides."
  ],
  L20: [
    "1) Optimization with quadratics relies on vertex form and interpretation.",
    "2) For \\(y=ax^2+bx+c\), vertex x-coordinate is \\(x=-\\frac{b}{2a}\).",
    "3) If \\(a>0\), vertex gives minimum; if \\(a<0\), vertex gives maximum.",
    "4) Modelling workflow: define variable, build expression, simplify, find vertex/critical value, interpret in context.",
    "5) What you should know: axis of symmetry, discriminant role, and context-aware interpretation of max/min values.",
    "6) Common mistakes: giving vertex x-value only when question asks for optimized quantity in context."
  ],
  L21: [
    "1) Transformation chains: order matters. Work from inside operations to outside operations in function notation.",
    "2) Composition: \\((f\circ g)(x)=f(g(x))\). Always compute inner function first.",
    "3) Inverse existence requires one-to-one behavior on chosen domain.",
    "4) Graph synthesis means linking algebraic form to shape, intercepts, symmetry, and turning behavior.",
    "5) What you should know: transformation language, composition order, inverse verification by composition.",
    "6) Common mistakes: reversing order in composition and forgetting domain restrictions when writing inverses."
  ],
  L22: [
    "1) Differentiate with method discipline: apply power rule term-by-term, then simplify.",
    "2) Stationary points occur where first derivative equals zero.",
    "3) Behaviour classification uses derivative sign changes or second derivative evidence.",
    "4) Increasing/decreasing intervals come from sign of \\(f'(x)\).",
    "5) What you should know: derivative fluency, stationary classification, and calculus-based optimization setup.",
    "6) Common mistakes: arithmetic slips in derivative simplification and misreading sign charts."
  ],
  L23: [
    "1) Integration reverses differentiation for many algebraic forms.",
    "2) Core rule: \\(\\int x^n dx=\\frac{x^{n+1}}{n+1}+C\) for \\(n\\ne-1\).",
    "3) Definite integral process: find antiderivative, evaluate upper-lower bounds, simplify carefully.",
    "4) Signed area interpretation: below x-axis contributes negative integral value.",
    "5) What you should know: indefinite vs definite use, bounds discipline, and checking by differentiation.",
    "6) Common mistakes: dropping +C and sign errors in bound substitution."
  ],
  L24: [
    "1) Mastery checkpoint: mixed-topic decision making under exam timing.",
    "2) Method selection routine: identify topic, choose formula set, solve, verify, log first error if wrong.",
    "3) Essential formula recall set: quadratic toolkit, trig exact values/identities, probability rules, derivative/integral core rules.",
    "4) Repair-cycle rule: correct first wrong step and re-solve, not just memorize final answer.",
    "5) What you should know: stable process across strands and reliable final-answer checking.",
    "6) Common mistakes: rushing past verification and repeating the same process error without targeted repair."
  ]
};

function getLessonNotes(lesson) {
  const notes = LESSON_NOTES[lesson.id];
  if (Array.isArray(notes) && notes.length) return notes;
  return [
    "Core concept summary is being prepared for this lesson.",
    "What you should know: key definitions, core techniques, and common pitfalls.",
    "Use routine questions for fluency, then challenge problems for transfer and extension."
  ];
}

const LESSON_CHALLENGE_TEMPLATES = {
  L01: [
    { strand: "NA", type: "numeric", prompt: "If \\(x+\\frac{1}{x}=5\\), find \\(x^3+\\frac{1}{x^3}\\).", key: { answer: 110, tolerance: 0.0001 } },
    { strand: "NA", type: "text", prompt: "Rationalise and simplify: \\(\\dfrac{5}{\\sqrt{7}-2}\\).", key: { accepted: ["sqrt7+2", "2+sqrt7", "\\sqrt{7}+2"] } },
    { strand: "FG", type: "numeric", prompt: "If \\(f(x)=x^2-4x+3\\), compute \\(f(n+1)-f(n)\\) at \\(n=10\\).", key: { answer: 17, tolerance: 0.0001 } },
    { strand: "RP", type: "mcq", prompt: "Best proof setup to show \\(n^2-n\\) is always even:", options: ["Test 4 values", "Write \\(n^2-n=n(n-1)\\)", "Use graph", "Assume odd"], key: { answer: "Write \\(n^2-n=n(n-1)\\)" } },
    { strand: "NA", type: "numeric", prompt: "Solve: \\(\\dfrac{2^{-2}+3^{-1}}{6^{-1}}\\).", key: { answer: 7 / 2, tolerance: 0.0001 } }
  ],
  L02: [
    { strand: "NA", type: "numeric", prompt: "Simplify fully: \\(\\dfrac{x^2-9}{x-3}-\\dfrac{x^2-16}{x-4}\\), then evaluate at \\(x=10\\).", key: { answer: 1, tolerance: 0.0001 } },
    { strand: "NA", type: "mcq", prompt: "For all integer \\(n\\), which expression is always divisible by 6?", options: ["\\(n^2+n\\)", "\\(n^3-n\\)", "\\(n^2-1\\)", "\\(n(n+2)\\)"], key: { answer: "\\(n^3-n\\)" } },
    { strand: "NA", type: "text", prompt: "Solve and state interval form: \\(\\left|2x-5\\right|<9\\).", key: { accepted: ["-2<x<7", "x>-2 and x<7"] } },
    { strand: "RP", type: "mcq", prompt: "Best structure-first move in \\(a^2-b^2+c^2-2ac\\):", options: ["Expand everything", "Group as \\((a-c)^2-b^2\\)", "Substitute numbers", "Ignore signs"], key: { answer: "Group as \\((a-c)^2-b^2\\)" } },
    { strand: "NA", type: "numeric", prompt: "If \\(x-\\frac{1}{x}=3\\), find \\(x^2+\\frac{1}{x^2}\\).", key: { answer: 11, tolerance: 0.0001 } }
  ],
  L03: [
    { strand: "FG", type: "numeric", prompt: "Quadratic \\(x^2-kx+12=0\\) has equal roots. Find \\(k\\).", key: { answer: 4 * Math.sqrt(3), tolerance: 0.0001 } },
    { strand: "FG", type: "numeric", prompt: "Minimum value of \\(2x^2-8x+13\\).", key: { answer: 5, tolerance: 0.0001 } },
    { strand: "FG", type: "mcq", prompt: "If \\(x^2+px+q=0\\) has roots 3 and 7, then \\(p,q\\) are:", options: ["\\(-10,21\\)", "\\(10,21\\)", "\\(-21,10\\)", "\\(21,-10\\)"], key: { answer: "\\(-10,21\\)" } },
    { strand: "TG", type: "numeric", prompt: "A rectangle has perimeter 30. Express area in one variable and find max area.", key: { answer: 56.25, tolerance: 0.0001 } },
    { strand: "RP", type: "text", prompt: "State a discriminant condition for a quadratic to have no real roots.", key: { accepted: ["b^2-4ac<0", "b2-4ac<0"] } }
  ],
  L04: [
    { strand: "NA", type: "numeric", prompt: "If \\(2^a=5\\) and \\(2^b=40\\), find \\(b-a\\).", key: { answer: 3, tolerance: 0.0001 } },
    { strand: "NA", type: "numeric", prompt: "Solve: \\(\\log_3(x-1)+\\log_3(x+1)=2\\).", key: { answer: Math.sqrt(10), tolerance: 0.0001 } },
    { strand: "NA", type: "mcq", prompt: "Domain of \\(\\log(2-x)+\\log(x-1)\\):", options: ["\\(x>1\\)", "\\(x<2\\)", "\\(1<x<2\\)", "All real x"], key: { answer: "\\(1<x<2\\)" } },
    { strand: "RP", type: "text", prompt: "Rewrite \\(3^{2x+1}=7\\) in logarithmic form.", key: { accepted: ["2x+1=log_3(7)", "2x+1=\\log_3(7)"] } },
    { strand: "NA", type: "numeric", prompt: "Evaluate: \\(\\log_2 48-\\log_2 3\\).", key: { answer: 4, tolerance: 0.0001 } }
  ],
  L05: [
    { strand: "FG", type: "text", prompt: "If \\(f(x)=\\dfrac{x-2}{x+1}\\), find \\(f^{-1}(x)\\).", key: { accepted: ["(x+2)/(1-x)", "(x + 2)/(1 - x)"] } },
    { strand: "FG", type: "numeric", prompt: "Given \\(f(x)=x^2-1\\), \\(g(x)=2x+3\\), find \\((f\\circ g)(-1)\\).", key: { answer: 0, tolerance: 0.0001 } },
    { strand: "FG", type: "mcq", prompt: "Which makes \\(f(x)=x^2\\) invertible?", options: ["Domain \\(x\\in\\mathbb{R}\\)", "Domain \\(x\\ge0\\)", "Range \\(y\\ge0\\)", "No restriction needed"], key: { answer: "Domain \\(x\\ge0\\)" } },
    { strand: "TG", type: "numeric", prompt: "For \\(y=-(x-4)^2+7\\), find coordinates of turning point x-value.", key: { answer: 4, tolerance: 0.0001 } },
    { strand: "RP", type: "text", prompt: "State why \\(f(f^{-1}(x))=x\\) may fail if domain is wrong.", key: { accepted: ["not one-to-one", "function not one-to-one", "inverse undefined on that domain"] } }
  ],
  L06: [
    { strand: "TG", type: "numeric", prompt: "Find equation constant \\(k\\): line through \\((1,4)\\) perpendicular to \\(2x+3y=k\\).", key: { answer: 14 / 3, tolerance: 0.0001 } },
    { strand: "TG", type: "numeric", prompt: "Distance from \\((2,-1)\\) to line \\(x+2y-7=0\\).", key: { answer: Math.sqrt(5), tolerance: 0.0001 } },
    { strand: "TG", type: "mcq", prompt: "Centre of circle \\(x^2+y^2-6x+8y+9=0\\):", options: ["\\((3,-4)\\)", "\\((-3,4)\\)", "\\((3,4)\\)", "\\((-3,-4)\\)"], key: { answer: "\\((3,-4)\\)" } },
    { strand: "RP", type: "text", prompt: "Give condition in slopes for two lines to be perpendicular.", key: { accepted: ["m1m2=-1", "m_1m_2=-1"] } },
    { strand: "TG", type: "numeric", prompt: "Equation \\(x^2+y^2-4x+6y+c=0\\) touches origin. Find \\(c\\).", key: { answer: 0, tolerance: 0.0001 } }
  ],
  L07: [
    { strand: "TG", type: "numeric", prompt: "If \\(\\sin\\theta=\\frac{5}{13}\\) and \\(\\theta\\) acute, find \\(\\cos\\theta\\).", key: { answer: 12 / 13, tolerance: 0.0001 } },
    { strand: "TG", type: "numeric", prompt: "Solve on \\(0^\\circ\\le x<360^\\circ\\): \\(2\\sin x=\\sqrt{3}\\). Enter smaller solution.", key: { answer: 60, tolerance: 0.0001 } },
    { strand: "TG", type: "mcq", prompt: "If \\(\\tan\\theta=1\\) and \\(\\cos\\theta<0\\), then \\(\\theta\\) in degrees is:", options: ["45", "135", "225", "315"], key: { answer: "225" } },
    { strand: "RP", type: "text", prompt: "State identity linking \\(\\sin^2x\\) and \\(\\cos^2x\\).", key: { accepted: ["sin^2x+cos^2x=1", "\\sin^2x+\\cos^2x=1"] } },
    { strand: "TG", type: "numeric", prompt: "In triangle, sides 7 and 10 include \\(120^\\circ\\). Find third side squared.", key: { answer: 219, tolerance: 0.0001 } }
  ],
  L08: [
    { strand: "PS", type: "numeric", prompt: "Urn has 4 red, 3 blue, 2 green. Two draws without replacement. Find \\(P(\\text{same colour})\\).", key: { answer: 5 / 18, tolerance: 0.0001 } },
    { strand: "PS", type: "numeric", prompt: "Given \\(P(A)=0.7\\), \\(P(B)=0.6\\), \\(P(A\\cap B)=0.5\\). Find \\(P(A|B)\\).", key: { answer: 5 / 6, tolerance: 0.0001 } },
    { strand: "PS", type: "mcq", prompt: "If \\(P(A|B)=P(A)\\), then A and B are:", options: ["mutually exclusive", "independent", "complementary", "impossible"], key: { answer: "independent" } },
    { strand: "RP", type: "text", prompt: "State one condition under which \\(P(A|B)\\) is undefined.", key: { accepted: ["p(b)=0", "P(B)=0", "probability of b is zero"] } },
    { strand: "PS", type: "numeric", prompt: "A fair die rolled 4 times. Probability of at least one 6.", key: { answer: 1 - (5 / 6) ** 4, tolerance: 0.0001 } }
  ],
  L09: [
    { strand: "FG", type: "numeric", prompt: "Arithmetic sequence with \\(a_3=11\\), \\(a_8=31\\). Find \\(a_{20}\\).", key: { answer: 79, tolerance: 0.0001 } },
    { strand: "FG", type: "numeric", prompt: "Geometric sequence has \\(a_2=6\\), \\(a_5=162\\). Find positive common ratio.", key: { answer: 3, tolerance: 0.0001 } },
    { strand: "FG", type: "numeric", prompt: "Evaluate: \\(\\sum_{k=1}^{20}(2k-1)\\).", key: { answer: 400, tolerance: 0.0001 } },
    { strand: "RP", type: "mcq", prompt: "Best proof for odd square is odd starts with:", options: ["Set \\(n=2m+1\\)", "Set \\(n=2m\\)", "Try \\(n=5\\)", "Graph parabola"], key: { answer: "Set \\(n=2m+1\\)" } },
    { strand: "FG", type: "text", prompt: "Write nth term for sequence \\(2,6,12,20,30,\\ldots\\).", key: { accepted: ["n(n+1)", "n^2+n", "n2+n"] } }
  ],
  L10: [
    { strand: "FG", type: "text", prompt: "Differentiate \\(x^4-3x^2+2x-9\\).", key: { accepted: ["4x^3-6x+2"] } },
    { strand: "FG", type: "numeric", prompt: "If \\(f(x)=x^3-6x\\), find \\(f''(2)\\).", key: { answer: 12, tolerance: 0.0001 } },
    { strand: "FG", type: "numeric", prompt: "Given \\(f'(x)=3x^2-12x+9\\), find x-value of stationary point with smaller x.", key: { answer: 1, tolerance: 0.0001 } },
    { strand: "RP", type: "mcq", prompt: "To justify local max at \\(x=a\\), useful evidence is:", options: ["\\(f'(a)=0\\) and sign changes + to -", "\\(f(a)=0\\)", "\\(f''(a)=0\\) always", "x intercept exists"], key: { answer: "\\(f'(a)=0\\) and sign changes + to -" } },
    { strand: "FG", type: "numeric", prompt: "Velocity \\(v(t)=t^2-6t+8\\). Find acceleration at \\(t=5\\).", key: { answer: 4, tolerance: 0.0001 } }
  ],
  L11: [
    { strand: "FG", type: "text", prompt: "Integrate: \\(\\int(4x^3-6x+2)\\,dx\\).", key: { accepted: ["x^4-3x^2+2x+c", "x^4 - 3x^2 + 2x + c"] } },
    { strand: "FG", type: "numeric", prompt: "Evaluate \\(\\int_1^3 (2x+1)\\,dx\\).", key: { answer: 10, tolerance: 0.0001 } },
    { strand: "FG", type: "numeric", prompt: "If \\(F'(x)=3x^2\\) and \\(F(1)=7\\), find \\(F(2)\\).", key: { answer: 14, tolerance: 0.0001 } },
    { strand: "RP", type: "mcq", prompt: "Best check after finding antiderivative is to:", options: ["Differentiate result", "Round decimals", "Plot one point", "Substitute x=0 only"], key: { answer: "Differentiate result" } },
    { strand: "FG", type: "numeric", prompt: "Area between \\(y=x\\) and x-axis from 0 to 4.", key: { answer: 8, tolerance: 0.0001 } }
  ],
  L12: [
    { strand: "NA", type: "numeric", prompt: "Solve system: \\(x+y=9\\), \\(xy=20\\). Find \\(x^2+y^2\\).", key: { answer: 41, tolerance: 0.0001 } },
    { strand: "FG", type: "numeric", prompt: "If \\(f(x)=x^2-5x+6\\), find \\(f'(3)+f(3)\\).", key: { answer: 1, tolerance: 0.0001 } },
    { strand: "TG", type: "numeric", prompt: "A triangle has sides 5, 12, 13. Find \\(\\sin\\theta\\) opposite side 5.", key: { answer: 5 / 13, tolerance: 0.0001 } },
    { strand: "PS", type: "numeric", prompt: "Two fair coins and one fair die. Probability of exactly one head and even die.", key: { answer: 1 / 4, tolerance: 0.0001 } },
    { strand: "RP", type: "mcq", prompt: "Best repair-cycle action after wrong extension answer:", options: ["Memorize final answer", "Tag first wrong step and rebuild", "Skip topic", "Use random shortcut"], key: { answer: "Tag first wrong step and rebuild" } }
  ],
  L13: [
    { strand: "NA", type: "numeric", prompt: "If \\(x+\\frac1x=8\\), find \\(x^3+\\frac1{x^3}\\).", key: { answer: 488, tolerance: 0.0001 } },
    { strand: "NA", type: "numeric", prompt: "Find minimum value of \\((x-4)^2+3\\).", key: { answer: 3, tolerance: 0.0001 } },
    { strand: "NA", type: "mcq", prompt: "For real \\(u,v\\), always true statement:", options: ["\\(u^2-v^2\\ge0\\)", "\\((u-v)^2\\ge0\\)", "\\(u+v\\ge0\\)", "\\(uv\\ge1\\)"], key: { answer: "\\((u-v)^2\\ge0\\)" } },
    { strand: "RP", type: "text", prompt: "State why sign charts are valid for polynomial inequalities.", key: { accepted: ["sign only changes at roots", "continuous and sign changes at roots", "roots partition intervals of constant sign"] } },
    { strand: "NA", type: "numeric", prompt: "Solve \\((x-1)(x-5)>0\\). Enter smaller boundary value.", key: { answer: 1, tolerance: 0.0001 } }
  ],
  L14: [
    { strand: "FG", type: "numeric", prompt: "For \\(x^2-(k+2)x+k=0\\), one root is 3. Find \\(k\\).", key: { answer: 6, tolerance: 0.0001 } },
    { strand: "FG", type: "numeric", prompt: "Line \\(y=mx+1\\) tangent to \\(y=x^2+1\\). Find positive \\(m\\).", key: { answer: 2, tolerance: 0.0001 } },
    { strand: "FG", type: "mcq", prompt: "If quadratic has equal roots, discriminant is:", options: ["positive", "negative", "zero", "undefined"], key: { answer: "zero" } },
    { strand: "RP", type: "text", prompt: "Write a condition for two quadratics to share one common root.", key: { accepted: ["resultant zero", "common factor", "at least one shared solution"] } },
    { strand: "FG", type: "numeric", prompt: "Roots of \\(x^2-10x+p=0\\) differ by 6. Find \\(p\\).", key: { answer: 16, tolerance: 0.0001 } }
  ],
  L15: [
    { strand: "NA", type: "numeric", prompt: "Solve \\(2^x+2^{x+1}=24\\).", key: { answer: 3, tolerance: 0.0001 } },
    { strand: "NA", type: "numeric", prompt: "If \\(\\log_2 3=a\\), write \\(\\log_2 12\\) in terms of \\(a\\).", key: { answer: 2 + 1.5849625007, tolerance: 0.0001 } },
    { strand: "NA", type: "mcq", prompt: "Equation \\(N=500e^{0.03t}\\) models:", options: ["linear growth", "exponential growth", "quadratic decay", "constant value"], key: { answer: "exponential growth" } },
    { strand: "RP", type: "text", prompt: "State one reason domain checks are essential for log equations.", key: { accepted: ["log arguments must be positive", "log undefined for non-positive input", "exclude invalid candidates"] } },
    { strand: "NA", type: "numeric", prompt: "Find \\(t\\) if \\(100(1.2)^t=144\\).", key: { answer: 2, tolerance: 0.0001 } }
  ],
  L16: [
    { strand: "FG", type: "numeric", prompt: "Piecewise: \\(f(x)=x^2\\) for \\(x<2\\), \\(f(x)=ax+1\\) for \\(x\\ge2\\). For continuity at 2, find \\(a\\).", key: { answer: 1.5, tolerance: 0.0001 } },
    { strand: "FG", type: "mcq", prompt: "Inverse of linear \\(f(x)=mx+b\\) exists when:", options: ["\\(m=0\\)", "\\(m\\ne0\\)", "\\(b=0\\)", "always impossible"], key: { answer: "\\(m\\ne0\\)" } },
    { strand: "FG", type: "numeric", prompt: "If \\(f(x)=\\frac{x+1}{x-2}\\), find \\(f(3)\\).", key: { answer: 4, tolerance: 0.0001 } },
    { strand: "RP", type: "text", prompt: "State one graph feature showing a function is not one-to-one.", key: { accepted: ["fails horizontal line test", "same y for two x values", "not injective"] } },
    { strand: "FG", type: "numeric", prompt: "Find domain exclusion for \\(g(x)=\\sqrt{5-2x}\\). Enter greatest allowed x.", key: { answer: 2.5, tolerance: 0.0001 } }
  ],
  L17: [
    { strand: "TG", type: "numeric", prompt: "Equation of tangent to \\(x^2+y^2=25\\) at point \\((3,4)\\) has form \\(3x+4y=c\\). Find \\(c\\).", key: { answer: 25, tolerance: 0.0001 } },
    { strand: "TG", type: "numeric", prompt: "Circle center \\((2,1)\\) passes through \\((5,5)\\). Find \\(r^2\\).", key: { answer: 25, tolerance: 0.0001 } },
    { strand: "TG", type: "mcq", prompt: "If distance from center to line equals radius, line is:", options: ["secant", "tangent", "diameter", "chord"], key: { answer: "tangent" } },
    { strand: "RP", type: "text", prompt: "State geometric reason tangent is perpendicular to radius.", key: { accepted: ["shortest distance to line from center", "radius to point of contact is perpendicular", "circle tangent theorem"] } },
    { strand: "TG", type: "numeric", prompt: "For circle \\((x-1)^2+(y+2)^2=13\\), find y when x=3 and upper point.", key: { answer: 1, tolerance: 0.0001 } }
  ],
  L18: [
    { strand: "TG", type: "numeric", prompt: "Solve on \\([0^\\circ,360^\\circ)\\): \\(2\\cos x+1=0\\). Enter smaller solution.", key: { answer: 120, tolerance: 0.0001 } },
    { strand: "TG", type: "numeric", prompt: "If \\(y=4\\sin(3x)\\), period in degrees is:", key: { answer: 120, tolerance: 0.0001 } },
    { strand: "TG", type: "mcq", prompt: "General solution for \\(\\sin x=0\\) is:", options: ["\\(x=90^\\circ+180^\\circ n\\)", "\\(x=180^\\circ n\\)", "\\(x=45^\\circ n\\)", "\\(x=\\pm60^\\circ\\)"], key: { answer: "\\(x=180^\\circ n\\)" } },
    { strand: "RP", type: "text", prompt: "State one reason interval notation is essential in trig solving.", key: { accepted: ["infinite solutions otherwise", "must restrict to requested domain", "select valid cycle solutions"] } },
    { strand: "TG", type: "numeric", prompt: "For \\(y=2\\cos(x-30^\\circ)+1\\), midline value is:", key: { answer: 1, tolerance: 0.0001 } }
  ],
  L19: [
    { strand: "NA", type: "numeric", prompt: "Solve \\(\\frac{x+1}{x-2}=\\frac{3}{2}\\).", key: { answer: 7, tolerance: 0.0001 } },
    { strand: "FG", type: "numeric", prompt: "If \\(x+\\frac{1}{x}=3\\), find \\(x^3+\\frac{1}{x^3}\\).", key: { answer: 18, tolerance: 0.0001 } },
    { strand: "NA", type: "mcq", prompt: "Expression \\(\\frac{x^2-4}{x-2}\\) equals \\(x+2\\) for:", options: ["all x", "\\(x\\ne2\\)", "\\(x>2\\)", "\\(x<2\\)"], key: { answer: "\\(x\\ne2\\)" } },
    { strand: "RP", type: "text", prompt: "State why checking exclusions is mandatory in rational equations.", key: { accepted: ["multiplying by zero-denominator terms introduces invalid roots", "can create extraneous solutions", "restricted values may appear as solutions"] } },
    { strand: "NA", type: "numeric", prompt: "Evaluate \\(\\frac{1}{1-\\frac{1}{1-\\frac{1}{2}}}\\).", key: { answer: 2, tolerance: 0.0001 } }
  ],
  L20: [
    { strand: "FG", type: "numeric", prompt: "Maximum value of \\(y=-2x^2+8x-1\\).", key: { answer: 7, tolerance: 0.0001 } },
    { strand: "FG", type: "numeric", prompt: "For \\(A(x)=x(30-2x)\\), find maximum area.", key: { answer: 112.5, tolerance: 0.0001 } },
    { strand: "FG", type: "mcq", prompt: "If \\(x^2+bx+c\\) has equal roots, relation is:", options: ["\\(b^2=4c\\)", "\\(b=2c\\)", "\\(c=0\\)", "\\(b^2=2c\\)"], key: { answer: "\\(b^2=4c\\)" } },
    { strand: "RP", type: "text", prompt: "State why vertex gives optimum for quadratic models.", key: { accepted: ["parabola has single turning point", "max/min occurs at turning point", "axis symmetry gives extremum"] } },
    { strand: "FG", type: "numeric", prompt: "Find \\(k\\) if minimum of \\(x^2-6x+k\\) is 4.", key: { answer: 13, tolerance: 0.0001 } }
  ],
  L21: [
    { strand: "FG", type: "text", prompt: "If \\(f(x)=\\frac{3x-1}{2}\\), write \\(f^{-1}(x)\\).", key: { accepted: ["(2x+1)/3", "(2x + 1)/3"] } },
    { strand: "FG", type: "numeric", prompt: "Given \\(f(x)=x^2+2\\), \\(g(x)=x-3\\), find \\((f\\circ g)(5)\\).", key: { answer: 6, tolerance: 0.0001 } },
    { strand: "FG", type: "mcq", prompt: "Which mapping is reflection in y-axis then up 2?", options: ["\\(y=f(-x)+2\\)", "\\(y=-f(x)+2\\)", "\\(y=f(x-2)\\)", "\\(y=f(x)+2x\\)"], key: { answer: "\\(y=f(-x)+2\\)" } },
    { strand: "RP", type: "text", prompt: "State one reason composition order matters.", key: { accepted: ["functions generally non-commutative", "f(g(x)) not equal g(f(x))", "different inner outputs"] } },
    { strand: "FG", type: "numeric", prompt: "If \\(h(x)=|x+1|-4\\), find h-minimum value.", key: { answer: -4, tolerance: 0.0001 } }
  ],
  L22: [
    { strand: "FG", type: "numeric", prompt: "If \\(f(x)=x^4-4x^2\\), find \\(f'(1)\\).", key: { answer: -4, tolerance: 0.0001 } },
    { strand: "FG", type: "numeric", prompt: "Given \\(f'(x)=3x^2-12x+9\\), find larger stationary x-value.", key: { answer: 3, tolerance: 0.0001 } },
    { strand: "FG", type: "mcq", prompt: "If \\(f'(x)<0\\) on interval, function is:", options: ["increasing", "decreasing", "constant", "undefined"], key: { answer: "decreasing" } },
    { strand: "RP", type: "text", prompt: "State one way to classify stationary point at x=a.", key: { accepted: ["sign change in f'", "second derivative test", "test nearby gradient signs"] } },
    { strand: "FG", type: "numeric", prompt: "Velocity \\(v(t)=t^2-4t+1\\). Find acceleration at \\(t=3\\).", key: { answer: 2, tolerance: 0.0001 } }
  ],
  L23: [
    { strand: "FG", type: "numeric", prompt: "Evaluate \\(\\int_0^4 (x+2)dx\\).", key: { answer: 16, tolerance: 0.0001 } },
    { strand: "FG", type: "text", prompt: "Integrate \\(\\int(9x^2-2x+5)dx\\).", key: { accepted: ["3x^3-x^2+5x+c", "3x^3 - x^2 + 5x + c"] } },
    { strand: "FG", type: "numeric", prompt: "If \\(F'(x)=4x-1\\), \\(F(0)=2\\), find \\(F(3)\\).", key: { answer: 17, tolerance: 0.0001 } },
    { strand: "RP", type: "text", prompt: "State why differentiating your antiderivative checks integration.", key: { accepted: ["should return original integrand", "FTC consistency", "reverse operation verification"] } },
    { strand: "FG", type: "numeric", prompt: "Evaluate \\(\\int_{-2}^{2} 3x\\,dx\\).", key: { answer: 0, tolerance: 0.0001 } }
  ],
  L24: [
    { strand: "NA", type: "numeric", prompt: "Solve \\(4x+3=31\\).", key: { answer: 7, tolerance: 0.0001 } },
    { strand: "FG", type: "numeric", prompt: "For \\(y=x^2-2x-8\\), find y-value at vertex.", key: { answer: -9, tolerance: 0.0001 } },
    { strand: "TG", type: "numeric", prompt: "Solve on \\([0^\\circ,360^\\circ)\\): \\(\\sin x=\\frac12\\). Enter larger solution.", key: { answer: 150, tolerance: 0.0001 } },
    { strand: "PS", type: "numeric", prompt: "Two fair coin tosses: probability of exactly one head.", key: { answer: 0.5, tolerance: 0.0001 } },
    { strand: "RP", type: "mcq", prompt: "Best first review step after mixed test:", options: ["ignore easy errors", "tag first-error type per question", "redo only hardest", "memorize answers"], key: { answer: "tag first-error type per question" } }
  ]
};

function buildGeneratedQuestion(source, lessonId, index, idPrefix = "Q") {
  const qid = `${lessonId}${idPrefix}${index + 1}`;
  const q = {
    id: qid,
    strand: source.strand,
    type: source.type,
    prompt: source.prompt,
    marks: source.marks ?? (source.type === "text" ? 2 : 1)
  };
  if (Array.isArray(source.options)) q.options = [...source.options];

  const key = { ...(source.key || {}) };
  if (Array.isArray(key.accepted)) key.accepted = [...key.accepted];
  return { q, key };
}

function buildGeneratedLessonQuiz(lessonId) {
  const templates = EXTENDED_LESSON_QUIZ_TEMPLATES[lessonId] || [];
  const quiz = [];
  const answerKey = {};

  for (let i = 0; i < templates.length; i += 1) {
    const source = templates[i];
    const built = buildGeneratedQuestion(source, lessonId, i);
    quiz.push(built.q);
    answerKey[built.q.id] = built.key;
  }

  return { quiz, answerKey };
}

function buildChallengeQuizForLesson(lesson, lessonIndex = 0) {
  const templates = LESSON_CHALLENGE_TEMPLATES[lesson.id] || [];
  if (templates.length) {
    const challengeQuiz = [];
    const challengeAnswerKey = {};
    for (let i = 0; i < Math.min(5, templates.length); i += 1) {
      const source = templates[i];
      const built = buildGeneratedQuestion(source, lesson.id, i, "C");
      built.q.marks = Math.max(2, built.q.marks || 2);
      challengeQuiz.push(built.q);
      challengeAnswerKey[built.q.id] = built.key;
    }
    return { challengeQuiz, challengeAnswerKey };
  }

  const counts = {};
  for (const q of lesson.quiz || []) {
    counts[q.strand] = (counts[q.strand] || 0) + 1;
  }
  const fallbackBank = {
    NA: LESSON_CHALLENGE_TEMPLATES.L04,
    FG: LESSON_CHALLENGE_TEMPLATES.L05,
    TG: LESSON_CHALLENGE_TEMPLATES.L06,
    PS: LESSON_CHALLENGE_TEMPLATES.L08,
    RP: LESSON_CHALLENGE_TEMPLATES.L09
  };
  const rankedStrands = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .map(([strand]) => strand)
    .filter((strand) => Array.isArray(fallbackBank[strand]) && fallbackBank[strand].length);
  const fallbackStrands = ["NA", "FG", "TG", "PS", "RP"].filter((strand) => fallbackBank[strand]?.length);
  const strands = rankedStrands.length ? rankedStrands : fallbackStrands;
  const routinePrompts = new Set((lesson.quiz || []).map((q) => q.prompt));

  const challengeQuiz = [];
  const challengeAnswerKey = {};
  const seenPrompts = new Set();
  for (let i = 0; i < 5; i += 1) {
    const strand = strands[i % strands.length];
    const bank = fallbackBank[strand] || [];
    if (!bank.length) continue;
    let source = null;
    for (let k = 0; k < bank.length; k += 1) {
      const candidate = bank[(lessonIndex + i + k) % bank.length];
      if (seenPrompts.has(candidate.prompt)) continue;
      if (routinePrompts.has(candidate.prompt)) continue;
      source = candidate;
      break;
    }
    if (!source) source = bank[(lessonIndex + i) % bank.length];
    source = { ...source, strand };
    const built = buildGeneratedQuestion(source, lesson.id, i, "C");
    built.q.marks = Math.max(2, built.q.marks || 2);
    challengeQuiz.push(built.q);
    challengeAnswerKey[built.q.id] = built.key;
    seenPrompts.add(source.prompt);
  }
  return { challengeQuiz, challengeAnswerKey };
}

function ensureExtendedLessonsInData() {
  const lessons = window.ELITE_MATHS_DATA.lessons || [];
  const existingIds = new Set(lessons.map((l) => l.id));

  EXTENDED_LESSON_DEFS.forEach((def) => {
    const existing = lessons.find((l) => l.id === def.id);
    if (existing) {
      if (!existing.quiz || existing.quiz.length === 0) {
        const generated = buildGeneratedLessonQuiz(def.id);
        existing.quiz = generated.quiz;
        existing.answerKey = generated.answerKey;
      }
      return;
    }
    const generated = buildGeneratedLessonQuiz(def.id);
    lessons.push({
      id: def.id,
      title: def.title,
      meta: def.meta,
      mdFile: def.mdFile,
      objectives: [...def.objectives],
      teachingPoints: [...def.teachingPoints],
      quiz: generated.quiz,
      answerKey: generated.answerKey
    });
  });

  window.ELITE_MATHS_DATA.lessons = lessons;
}

ensureExtendedLessonsInData();

function ensureChallengeSetsInData() {
  const lessons = window.ELITE_MATHS_DATA.lessons || [];
  lessons.forEach((lesson, index) => {
    const hasChallengeQuiz = Array.isArray(lesson.challengeQuiz) && lesson.challengeQuiz.length === 5;
    const hasChallengeKey = lesson.challengeAnswerKey && typeof lesson.challengeAnswerKey === "object";
    if (hasChallengeQuiz && hasChallengeKey) return;
    const generated = buildChallengeQuizForLesson(lesson, index);
    lesson.challengeQuiz = generated.challengeQuiz;
    lesson.challengeAnswerKey = generated.challengeAnswerKey;
  });
}

ensureChallengeSetsInData();

function normalizeStudentKey(name) {
  return String(name || "").trim().toLowerCase();
}

function ensureStudentProfile(name) {
  const key = normalizeStudentKey(name);
  if (!key) return null;
  if (!state.profiles[key]) {
    state.profiles[key] = {
      displayName: String(name || "").trim(),
      selectedLessonId: getActiveData().lessons[0].id,
      attempts: [],
      lessonProgress: {}
    };
  }
  if (name && String(name).trim()) {
    state.profiles[key].displayName = String(name).trim();
  }
  if (!state.profiles[key].lessonProgress) state.profiles[key].lessonProgress = {};
  if (!Array.isArray(state.profiles[key].attempts)) state.profiles[key].attempts = [];
  if (!state.profiles[key].selectedLessonId) state.profiles[key].selectedLessonId = getActiveData().lessons[0].id;
  return state.profiles[key];
}

function loadStudentProfile(name) {
  const profile = ensureStudentProfile(name);
  if (!profile) {
    state.studentName = "";
    state.attempts = [];
    state.lessonProgress = {};
    state.activeLessonTab = "teaching";
    state.selectedLessonId = getActiveData().lessons[0].id;
    return;
  }

  state.studentName = profile.displayName;
  state.attempts = profile.attempts;
  state.lessonProgress = profile.lessonProgress;
  state.activeLessonTab = "teaching";
  state.selectedLessonId = profile.selectedLessonId || getActiveData().lessons[0].id;
}

function getSortedStudentProfiles() {
  return Object.entries(state.profiles || {})
    .filter(([key, profile]) => key && profile)
    .map(([key, profile]) => {
      const displayName = String(profile.displayName || key).trim();
      return { key, displayName: displayName || key };
    })
    .sort((a, b) => a.displayName.localeCompare(b.displayName, undefined, { sensitivity: "base" }));
}

function renderStudentSelector() {
  const select = document.getElementById("studentSelect");
  if (!select) return;

  const activeKey = normalizeStudentKey(state.studentName);
  const profiles = getSortedStudentProfiles();
  const options = ['<option value="">Saved students</option>'];

  for (const profile of profiles) {
    options.push(`<option value="${escapeHtml(profile.key)}">${escapeHtml(profile.displayName)}</option>`);
  }

  select.innerHTML = options.join("");
  select.value = profiles.some((profile) => profile.key === activeKey) ? activeKey : "";
}

function persistCurrentProfileSnapshot() {
  const profile = ensureStudentProfile(state.studentName);
  if (!profile) return;
  profile.displayName = state.studentName;
  profile.attempts = state.attempts;
  profile.lessonProgress = state.lessonProgress;
  profile.selectedLessonId = state.selectedLessonId;
}

function openDb() {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "id" });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function readFromLocalStorageFallback() {
  const raw = localStorage.getItem(APP_KEY);
  if (!raw) return;
  try {
    const parsed = JSON.parse(raw);
    state.studentName = parsed.studentName || "";
    state.profiles = parsed.profiles && typeof parsed.profiles === "object" ? parsed.profiles : {};

    if (!Object.keys(state.profiles).length && state.studentName) {
      const key = normalizeStudentKey(state.studentName);
      state.profiles[key] = {
        displayName: state.studentName,
        selectedLessonId: getActiveData().lessons[0].id,
        attempts: Array.isArray(parsed.attempts) ? parsed.attempts : [],
        lessonProgress: parsed.lessonProgress && typeof parsed.lessonProgress === "object" ? parsed.lessonProgress : {}
      };
    }

    loadStudentProfile(state.studentName);
  } catch (_) {
    localStorage.removeItem(APP_KEY);
  }
}

async function loadState() {
  try {
    const db = await openDb();
    const tx = db.transaction(STORE_NAME, "readonly");
    const store = tx.objectStore(STORE_NAME);
    const data = await new Promise((resolve, reject) => {
      const req = store.get(RECORD_ID);
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
    db.close();

    if (data) {
      state.studentName = data.studentName || "";
      state.profiles = data.profiles && typeof data.profiles === "object" ? data.profiles : {};

      if (!Object.keys(state.profiles).length && state.studentName) {
        const key = normalizeStudentKey(state.studentName);
        state.profiles[key] = {
          displayName: state.studentName,
          selectedLessonId: getActiveData().lessons[0].id,
          attempts: Array.isArray(data.attempts) ? data.attempts : [],
          lessonProgress: data.lessonProgress && typeof data.lessonProgress === "object" ? data.lessonProgress : {}
        };
      }

      loadStudentProfile(state.studentName);
      return;
    }
  } catch (_) {
  }

  readFromLocalStorageFallback();
}

function saveState() {
  persistCurrentProfileSnapshot();
  const payload = {
    id: RECORD_ID,
    studentName: state.studentName,
    attempts: state.attempts,
    lessonProgress: state.lessonProgress,
    profiles: state.profiles
  };

  void (async () => {
    try {
      const db = await openDb();
      const tx = db.transaction(STORE_NAME, "readwrite");
      tx.objectStore(STORE_NAME).put(payload);
      await new Promise((resolve, reject) => {
        tx.oncomplete = () => resolve();
        tx.onerror = () => reject(tx.error);
        tx.onabort = () => reject(tx.error);
      });
      db.close();
    } catch (_) {
    }
  })();

  localStorage.setItem(APP_KEY, JSON.stringify({
    studentName: state.studentName,
    attempts: state.attempts,
    lessonProgress: state.lessonProgress,
    profiles: state.profiles
  }));
}

function captureLessonDraft(lesson) {
  const responses = {};
  for (const q of [...(lesson.quiz || []), ...(lesson.challengeQuiz || [])]) {
    responses[q.id] = document.querySelector(`[name="${q.id}"]`)?.value ?? "";
  }
  return {
    responses,
    questionState: { ...state.currentQuestionState },
    givenUpQuestionIds: { ...state.givenUpQuestionIds },
    activeTab: state.activeLessonTab
  };
}

function persistCurrentLessonProgress() {
  if (!state.studentName) return;
  const lesson = getLessonById(state.selectedLessonId);
  if (!lesson) return;
  if (!state.lessonProgress || typeof state.lessonProgress !== "object") state.lessonProgress = {};
  state.lessonProgress[lesson.id] = captureLessonDraft(lesson);
  saveState();
}

function getLessonById(id) {
  return getActiveData().lessons.find((l) => l.id === id);
}

function getQuestionById(lesson, questionId) {
  if (!lesson) return null;
  return [...(lesson.quiz || []), ...(lesson.challengeQuiz || [])].find((q) => q.id === questionId) || null;
}

function setActiveLessonTab(tabId, shouldPersist = true) {
  const allowed = ["teaching", "routine", "challenge"];
  state.activeLessonTab = allowed.includes(tabId) ? tabId : "teaching";

  const tabMap = {
    teaching: "tabTeaching",
    routine: "tabRoutine",
    challenge: "tabChallenge"
  };

  const tabsWrap = document.getElementById("lessonTabs");
  if (tabsWrap) {
    tabsWrap.querySelectorAll(".tab-btn").forEach((btn) => {
      const active = btn.dataset.tab === state.activeLessonTab;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-selected", active ? "true" : "false");
    });
  }

  Object.entries(tabMap).forEach(([key, panelId]) => {
    const panel = document.getElementById(panelId);
    if (!panel) return;
    panel.classList.toggle("hidden", key !== state.activeLessonTab);
  });

  if (shouldPersist) {
    persistCurrentLessonProgress();
  }
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function normalizeText(s) {
  return String(s || "").toLowerCase().replace(/\s+/g, "").replace(/√/g, "sqrt");
}

const DISPLAY_MATH_OVERRIDES = {
  "Simplify: (3^-2 + 2^-1) / (5^-1)": String.raw`Simplify: \(\dfrac{3^{-2}+2^{-1}}{5^{-1}}\)`,
  "Which statement is true for all integers n?": String.raw`Which statement is true for all integers \(n\)?`,
  "n^2+n is always odd": String.raw`\(n^2+n\) is always odd`,
  "n^2+n is always even": String.raw`\(n^2+n\) is always even`,
  "n^2+n is always prime": String.raw`\(n^2+n\) is always prime`,
  "n^2+n is never divisible by 2": String.raw`\(n^2+n\) is never divisible by \(2\)`,
  "Simplify: (2^-3 + 3^-1) / (6^-1)": String.raw`Simplify: \(\dfrac{2^{-3}+3^{-1}}{6^{-1}}\)`,
  "Solve |x-2| < 5": String.raw`Solve \(\lvert x-2\rvert < 5\)`,
  "-3 < x < 7": String.raw`\(-3 < x < 7\)`,
  "x < -3 or x > 7": String.raw`\(x < -3\) or \(x > 7\)`,
  "-5 < x < 5": String.raw`\(-5 < x < 5\)`,
  "x > 2": String.raw`\(x > 2\)`,
  "If x + 1/x = 4, find x^2 + 1/x^2": String.raw`If \(x+\dfrac{1}{x}=4\), find \(x^2+\dfrac{1}{x^2}\)`,
  "Best reason n(n+1) is always even:": String.raw`Best reason \(n(n+1)\) is always even:`,
  "Find the gradient between (-2,3) and (4,-9)": String.raw`Find the gradient between \((-2,3)\) and \((4,-9)\)`,
  "Evaluate: (2x+3)^2 - (2x-3)^2 when x=2": String.raw`Evaluate: \((2x+3)^2-(2x-3)^2\) when \(x=2\)`,
  "Simplify (x^2-1)/(x-1) - (x^2-4)/(x-2), x!=1,2": String.raw`Simplify \(\dfrac{x^2-1}{x-1}-\dfrac{x^2-4}{x-2}\), \(x\ne1,2\)`,
  "n^3-n is divisible by 6 because:": String.raw`\(n^3-n\) is divisible by \(6\) because:`,
  "it is product of 3 consecutive integers": String.raw`it is product of \(3\) consecutive integers`,
  "Solve |3x+1| >= 7": String.raw`Solve \(\lvert3x+1\rvert \ge 7\)`,
  "x >= 2 or x <= -8/3": String.raw`\(x\ge2\) or \(x\le-\dfrac{8}{3}\)`,
  "-2 <= x <= 8/3": String.raw`\(-2\le x\le \dfrac{8}{3}\)`,
  "x > 0 only": String.raw`\(x>0\) only`,
  "For x≠4, simplify (x^2-16)/(x-4), then evaluate at x=6": String.raw`For \(x\ne4\), simplify \(\dfrac{x^2-16}{x-4}\), then evaluate at \(x=6\)`,
  "Solve (x-3)/(x+1) < 0": String.raw`Solve \(\dfrac{x-3}{x+1}<0\)`,
  "-1 < x < 3": String.raw`\(-1<x<3\)`,
  "x < -1 or x > 3": String.raw`\(x<-1\) or \(x>3\)`,
  "x > -1": String.raw`\(x>-1\)`,
  "x < 3": String.raw`\(x<3\)`,
  "If x - 1/x = 2, find x^2 + 1/x^2": String.raw`If \(x-\dfrac{1}{x}=2\), find \(x^2+\dfrac{1}{x^2}\)`,
  "n^3 - n can be written as:": String.raw`\(n^3-n\) can be written as:`,
  "n(n-1)(n+1)": String.raw`\(n(n-1)(n+1)\)`,
  "(n-1)^3": String.raw`\((n-1)^3\)`,
  "n(n+1)": String.raw`\(n(n+1)\)`,
  "n^2(n-1)": String.raw`\(n^2(n-1)\)`,
  "Solve 7x - 5 = 2x + 20": String.raw`Solve \(7x-5=2x+20\)`,
  "Vertex of y = x^2 - 6x + 5 is:": String.raw`Vertex of \(y=x^2-6x+5\) is:`,
  "(3,-4)": String.raw`\((3,-4)\)`,
  "(-3,4)": String.raw`\((-3,4)\)`,
  "(6,5)": String.raw`\((6,5)\)`,
  "(3,4)": String.raw`\((3,4)\)`,
  "For x^2+(k-1)x+9=0 to have real roots, k must satisfy:": String.raw`For \(x^2+(k-1)x+9=0\) to have real roots, \(k\) must satisfy:`,
  "k > 0": String.raw`\(k>0\)`,
  "k <= -5 or k >= 7": String.raw`\(k\le-5\) or \(k\ge7\)`,
  "-5 < k < 7": String.raw`\(-5<k<7\)`,
  "k = 1 only": String.raw`\(k=1\) only`,
  "Minimum value of A(x)=x^2-10x+41": String.raw`Minimum value of \(A(x)=x^2-10x+41\)`,
  "Find the axis of symmetry of y = 3x^2 - 12x + 1": String.raw`Find the axis of symmetry of \(y=3x^2-12x+1\)`,
  "Discriminant of x^2 + 6x + 9 is:": String.raw`Discriminant of \(x^2+6x+9\) is:`,
  "If roots of x^2 - 5x + 6 = 0 are r1 and r2, find r1+r2": String.raw`If roots of \(x^2-5x+6=0\) are \(r_1\) and \(r_2\), find \(r_1+r_2\)`,
  "Minimum value of y = 2x^2 + 8x + 3": String.raw`Minimum value of \(y=2x^2+8x+3\)`,
  "For line y = mx + 1 to be tangent to y = x^2 - 2x + 5, m can be:": String.raw`For line \(y=mx+1\) to be tangent to \(y=x^2-2x+5\), \(m\) can be:`,
  "Evaluate: (3^2 - 5) * 2": String.raw`Evaluate: \((3^2-5)\times2\)`,
  "Factorise x^2 - 9": String.raw`Factorise \(x^2-9\)`,
  "(x-3)(x+3)": String.raw`\((x-3)(x+3)\)`,
  "(x-9)(x+1)": String.raw`\((x-9)(x+1)\)`,
  "(x-3)^2": String.raw`\((x-3)^2\)`,
  "Solve for x: 5x - 12 = 18": String.raw`Solve for \(x\): \(5x-12=18\)`,
  "Vertex of y = x^2 - 4x + 1": String.raw`Vertex of \(y=x^2-4x+1\)`,
  "(2,-3)": String.raw`\((2,-3)\)`,
  "(-2,3)": String.raw`\((-2,3)\)`,
  "(4,1)": String.raw`\((4,1)\)`,
  "(2,3)": String.raw`\((2,3)\)`,
  "If f(x)=x^2, find f(5)-f(3)": String.raw`If \(f(x)=x^2\), find \(f(5)-f(3)\)`,
  "For x^2 + 4x + 5 = 0, discriminant is:": String.raw`For \(x^2+4x+5=0\), discriminant is:`,
  "Bag has 3 red, 2 blue. P(red first) is:": String.raw`Bag has \(3\) red, \(2\) blue. \(P(\text{red first})\) is:`,
  "3/5": String.raw`\(\dfrac{3}{5}\)`,
  "2/5": String.raw`\(\dfrac{2}{5}\)`,
  "1/2": String.raw`\(\dfrac{1}{2}\)`,
  "5/3": String.raw`\(\dfrac{5}{3}\)`,
  "n(n+1) is always even because:": String.raw`\(n(n+1)\) is always even because:`,
  "If 6 mins/question and 10 questions, total mins": String.raw`If \(6\) mins/question and \(10\) questions, total mins`
};

function formatDisplayMath(text) {
  const raw = String(text ?? "");
  return DISPLAY_MATH_OVERRIDES[raw] || raw;
}

function renderInlineMathSafe(text) {
  let str = String(text);
  // First, convert escaped dollar signs \$ to regular $
  str = str.replace(/\\\$/g, "$");

  // Split the string into parts: HTML tags, math expressions, and regular text
  const parts = [];
  let i = 0;

  while (i < str.length) {
    // Check for HTML tag
    if (str[i] === '<') {
      const endIdx = str.indexOf('>', i);
      if (endIdx !== -1) {
        parts.push({ type: 'html', content: str.slice(i, endIdx + 1) });
        i = endIdx + 1;
        continue;
      }
    }

    // Check for \( inline math
    if (str.slice(i, i + 2) === '\\(') {
      const endIdx = str.indexOf('\\)', i + 2);
      if (endIdx !== -1) {
        parts.push({ type: 'math', content: str.slice(i, endIdx + 2) });
        i = endIdx + 2;
        continue;
      }
    }

    // Check for \[ display math
    if (str.slice(i, i + 2) === '\\[') {
      const endIdx = str.indexOf('\\]', i + 2);
      if (endIdx !== -1) {
        parts.push({ type: 'math', content: str.slice(i, endIdx + 2) });
        i = endIdx + 2;
        continue;
      }
    }

    // Check for $ inline math
    if (str[i] === '$') {
      const endIdx = str.indexOf('$', i + 1);
      if (endIdx !== -1) {
        parts.push({ type: 'math', content: str.slice(i, endIdx + 1) });
        i = endIdx + 1;
        continue;
      }
    }

    // Regular text - accumulate until we hit a special character
    let textEnd = i + 1;
    while (textEnd < str.length) {
      const ch = str[textEnd];
      if (ch === '<' || ch === '$' || str.slice(textEnd, textEnd + 2) === '\\(' || str.slice(textEnd, textEnd + 2) === '\\[') {
        break;
      }
      textEnd++;
    }
    parts.push({ type: 'text', content: str.slice(i, textEnd) });
    i = textEnd;
  }

  // Process each part
  return parts.map(part => {
    if (part.type === 'html') {
      return part.content;
    }
    if (part.type === 'math') {
      // Escape < and > so the browser doesn't parse them as HTML tags;
      // MathJax reads decoded text content so &lt;/&gt; render correctly.
      return part.content.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }
    // Escape text content
    return part.content
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }).join('');
}

function maybeTypesetMath(target) {
  if (!window.MathJax) return;
  // Wait for MathJax to be ready
  const typeset = () => {
    if (window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise([target]).catch(() => {});
    }
  };
  // If MathJax is already loaded, typeset immediately
  if (window.MathJax.typesetPromise) {
    typeset();
  } else {
    // Otherwise wait for it to load
    const checkInterval = setInterval(() => {
      if (window.MathJax && window.MathJax.typesetPromise) {
        clearInterval(checkInterval);
        typeset();
      }
    }, 100);
    // Give up after 5 seconds
    setTimeout(() => clearInterval(checkInterval), 5000);
  }
}

function processInlineMarkdown(text) {
  let str = String(text);

  // Tokenize: split into math expressions and regular text
  const parts = [];
  let i = 0;

  while (i < str.length) {
    // Check for \( inline math
    if (str.slice(i, i + 2) === '\\(') {
      const endIdx = str.indexOf('\\)', i + 2);
      if (endIdx !== -1) {
        parts.push({ type: 'math', content: str.slice(i, endIdx + 2) });
        i = endIdx + 2;
        continue;
      }
    }
    // Check for \[ display math
    if (str.slice(i, i + 2) === '\\[') {
      const endIdx = str.indexOf('\\]', i + 2);
      if (endIdx !== -1) {
        parts.push({ type: 'math', content: str.slice(i, endIdx + 2) });
        i = endIdx + 2;
        continue;
      }
    }
    // Check for $ inline math
    if (str[i] === '$') {
      const endIdx = str.indexOf('$', i + 1);
      if (endIdx !== -1) {
        parts.push({ type: 'math', content: str.slice(i, endIdx + 1) });
        i = endIdx + 1;
        continue;
      }
    }
    // Regular text - accumulate until we hit math
    let textEnd = i + 1;
    while (textEnd < str.length) {
      if (str[textEnd] === '$' || str.slice(textEnd, textEnd + 2) === '\\(' || str.slice(textEnd, textEnd + 2) === '\\[') {
        break;
      }
      textEnd++;
    }
    parts.push({ type: 'text', content: str.slice(i, textEnd) });
    i = textEnd;
  }

  // Process each text part with markdown, preserve math
  return parts.map(part => {
    if (part.type === 'math') {
      return part.content;
    }
    // Apply markdown processing to text only
    let processed = part.content;
    processed = processed.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    processed = processed.replace(/__(.+?)__/g, "<strong>$1</strong>");
    processed = processed.replace(/\*(.+?)\*/g, "<em>$1</em>");
    processed = processed.replace(/_(.+?)_/g, "<em>$1</em>");
    return processed;
  }).join('');
}

function markdownToTeachingHtml(markdown) {
  const lines = String(markdown || "").replace(/\r\n/g, "\n").split("\n");
  const html = [];
  let inList = false;
  let inMathBlock = false;
  let mathBlockBuffer = [];
  let inCodeBlock = false;
  let codeBlockBuffer = [];
  let inTable = false;
  let tableHeaderDone = false;

  const flushList = () => {
    if (!inList) return;
    html.push("</ul>");
    inList = false;
  };

  const flushTable = () => {
    if (!inTable) return;
    html.push("</tbody></table>");
    inTable = false;
    tableHeaderDone = false;
  };

  const flushMathBlock = () => {
    if (mathBlockBuffer.length === 0) return;
    const escaped = mathBlockBuffer.join("\n").replace(/</g, '&lt;').replace(/>/g, '&gt;');
    html.push(escaped);
    mathBlockBuffer = [];
    inMathBlock = false;
  };

  const flushCodeBlock = () => {
    if (codeBlockBuffer.length === 0) return;
    html.push("<pre><code>" + escapeHtml(codeBlockBuffer.join("\n")) + "</code></pre>");
    codeBlockBuffer = [];
    inCodeBlock = false;
  };

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const line = rawLine.trim();

    // Handle code blocks ```
    if (line.startsWith("```")) {
      flushList();
      if (inCodeBlock) {
        flushCodeBlock();
      } else {
        inCodeBlock = true;
        codeBlockBuffer = [];
      }
      continue;
    }

    if (inCodeBlock) {
      codeBlockBuffer.push(rawLine);
      continue;
    }

    // Handle display math blocks \[ ... \]
    if (line.startsWith("\\[")) {
      flushList();
      inMathBlock = true;
      mathBlockBuffer = [rawLine];
      if (line.endsWith("\\]") && line.length > 2) {
        flushMathBlock();
      }
      continue;
    }

    if (inMathBlock) {
      mathBlockBuffer.push(rawLine);
      if (line.endsWith("\\]")) {
        flushMathBlock();
      }
      continue;
    }

    // Handle horizontal rules
    if (line === "---" || line === "***" || line === "___") {
      flushList();
      flushTable();
      html.push("<hr>");
      continue;
    }

    // Handle empty lines
    if (!line) {
      flushList();
      flushTable();
      continue;
    }

    // Handle markdown tables
    if (line.startsWith("|")) {
      flushList();
      // Separator row (e.g. |---|---|) — transitions header → body
      if (/^\|[-| :]+\|$/.test(line)) {
        if (inTable && !tableHeaderDone) {
          html.push("</thead><tbody>");
          tableHeaderDone = true;
        }
        continue;
      }
      const cells = line.split("|").slice(1, -1).map(c => c.trim());
      if (!inTable) {
        html.push('<table class="md-table"><thead><tr>');
        cells.forEach(c => html.push(`<th>${renderInlineMathSafe(processInlineMarkdown(c))}</th>`));
        html.push("</tr>");
        inTable = true;
        tableHeaderDone = false;
      } else {
        const tag = tableHeaderDone ? "td" : "th";
        html.push("<tr>");
        cells.forEach(c => html.push(`<${tag}>${renderInlineMathSafe(processInlineMarkdown(c))}</${tag}>`));
        html.push("</tr>");
      }
      continue;
    }

    // Handle headers
    if (line.startsWith("#### ")) {
      flushList();
      flushTable();
      html.push(`<h5>${renderInlineMathSafe(processInlineMarkdown(formatDisplayMath(line.slice(5))))}</h5>`);
      continue;
    }
    if (line.startsWith("### ")) {
      flushList();
      flushTable();
      html.push(`<h4>${renderInlineMathSafe(processInlineMarkdown(formatDisplayMath(line.slice(4))))}</h4>`);
      continue;
    }
    if (line.startsWith("## ")) {
      flushList();
      flushTable();
      html.push(`<h3>${renderInlineMathSafe(processInlineMarkdown(formatDisplayMath(line.slice(3))))}</h3>`);
      continue;
    }
    if (line.startsWith("# ")) {
      flushList();
      flushTable();
      html.push(`<h2>${renderInlineMathSafe(processInlineMarkdown(formatDisplayMath(line.slice(2))))}</h2>`);
      continue;
    }

    // Handle list items
    if (line.startsWith("- ") || line.startsWith("* ")) {
      flushTable();
      if (!inList) {
        html.push("<ul>");
        inList = true;
      }
      html.push(`<li>${renderInlineMathSafe(processInlineMarkdown(formatDisplayMath(line.slice(2))))}</li>`);
      continue;
    }

    // Handle numbered lists (simple)
    if (/^\d+\.\s/.test(line)) {
      flushTable();
      if (!inList) {
        html.push("<ul>");
        inList = true;
      }
      const content = line.replace(/^\d+\.\s/, "");
      html.push(`<li>${renderInlineMathSafe(processInlineMarkdown(formatDisplayMath(content)))}</li>`);
      continue;
    }

    // Regular paragraph
    flushList();
    flushTable();
    html.push(`<p>${renderInlineMathSafe(processInlineMarkdown(formatDisplayMath(rawLine)))}</p>`);
  }

  flushList();
  flushTable();
  flushMathBlock();
  flushCodeBlock();
  return html.join("\n");
}

async function loadLessonMarkdown(mdFile) {
  if (!mdFile) return "";
  if (Object.prototype.hasOwnProperty.call(lessonMarkdownCache, mdFile)) {
    return lessonMarkdownCache[mdFile];
  }
  const response = await fetch(mdFile, { cache: "no-store" });
  if (!response.ok) throw new Error(`Failed to load ${mdFile}`);
  const text = await response.text();
  lessonMarkdownCache[mdFile] = text;
  return text;
}

function renderTeachingNotesForLesson(lesson, teachingNotes) {
  const fallbackNotes = getLessonNotes(lesson)
    .map((note) => `<p>${renderInlineMathSafe(formatDisplayMath(note))}</p>`)
    .join("");
  teachingNotes.innerHTML = fallbackNotes;
  maybeTypesetMath(teachingNotes);

  if (!lesson?.mdFile) return;
  const lessonIdAtRequest = lesson.id;
  void loadLessonMarkdown(lesson.mdFile)
    .then((md) => {
      if (state.selectedLessonId !== lessonIdAtRequest) return;
      const rendered = markdownToTeachingHtml(md);
      if (!rendered) return;
      teachingNotes.innerHTML = rendered;
      maybeTypesetMath(teachingNotes);
    })
    .catch(() => {});
}

function renderLessonList() {
  const list = document.getElementById("lessonList");
  list.innerHTML = "";

  for (const lesson of getActiveData().lessons) {
    const li = document.createElement("li");
    if (lesson.id === state.selectedLessonId) li.classList.add("active");
    li.innerHTML = `<strong>${lesson.title}</strong><span class="meta">${lesson.meta}</span>`;
    li.addEventListener("click", () => {
      persistCurrentLessonProgress();
      state.selectedLessonId = lesson.id;
      saveState();
      renderAll();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    list.appendChild(li);
  }
}

function renderLessonContent() {
  const lesson = getLessonById(state.selectedLessonId);
  const lessonHeader = document.getElementById("lessonHeader");
  const objectivesList = document.getElementById("objectivesList");
  const teachingPointsList = document.getElementById("teachingPointsList");
  const teachingNotes = document.getElementById("teachingNotes");

  lessonHeader.innerHTML = `<h2>${lesson.title}</h2><p>${lesson.meta}</p>`;
  objectivesList.innerHTML = (lesson.objectives || []).map((x) => `<li>${renderInlineMathSafe(formatDisplayMath(x))}</li>`).join("");
  teachingPointsList.innerHTML = (lesson.teachingPoints || []).map((x) => `<li>${renderInlineMathSafe(formatDisplayMath(x))}</li>`).join("");
  renderTeachingNotesForLesson(lesson, teachingNotes);
  maybeTypesetMath(objectivesList);
  maybeTypesetMath(teachingPointsList);
}

function renderQuestionInput(q) {
  if (q.type === "mcq") {
    const opts = q.options.map((opt) => `<option value="${escapeHtml(opt)}">${renderInlineMathSafe(formatDisplayMath(opt))}</option>`).join("");
    return `<select name="${q.id}"><option value="">Select answer</option>${opts}</select>`;
  }
  if (q.type === "numeric") {
    return `<input type="text" name="${q.id}" placeholder="Enter numeric answer (e.g. 4/11, 2^3)" />`;
  }
  return `<input type="text" name="${q.id}" placeholder="Enter exact expression" />`;
}

function getLessonKey(lesson, questionId) {
  if (!lesson) return null;
  if (lesson.answerKey && lesson.answerKey[questionId]) return lesson.answerKey[questionId];
  if (lesson.challengeAnswerKey && lesson.challengeAnswerKey[questionId]) return lesson.challengeAnswerKey[questionId];
  return null;
}

function renderQuestionSet(formId, questions, lessonSnapshot, labelPrefix) {
  const lesson = getLessonById(state.selectedLessonId);
  const form = document.getElementById(formId);
  if (!form || !lesson) return;
  form.innerHTML = "";

  questions.forEach((q, i) => {
    const wrap = document.createElement("div");
    wrap.className = "question";
    wrap.innerHTML = `
      <div><strong>${labelPrefix}${i + 1}.</strong> ${renderInlineMathSafe(formatDisplayMath(q.prompt))}</div>
      <div class="strand">Strand: ${getActiveData().strands[q.strand]}</div>
      ${renderQuestionInput(q)}
      <div class="question-actions">
        <button type="button" class="check-btn" data-question-id="${q.id}">Check</button>
        <button type="button" class="give-up-btn" data-question-id="${q.id}">Answer</button>
        <span id="fb-${q.id}" class="feedback-text"></span>
      </div>
    `;
    form.appendChild(wrap);

    const input = wrap.querySelector(`[name="${q.id}"]`);
    if (input && lessonSnapshot?.responses && Object.prototype.hasOwnProperty.call(lessonSnapshot.responses, q.id)) {
      input.value = lessonSnapshot.responses[q.id];
    }

    const questionState = state.currentQuestionState[q.id];
    if (questionState?.gaveUp || state.givenUpQuestionIds[q.id]) {
      const key = getLessonKey(lesson, q.id);
      setGivenUpFeedback(q.id, q, key);
      disableQuestionInputs(q.id);
    } else if (questionState?.checked) {
      setQuestionFeedback(q.id, Boolean(questionState.correct));
    }
  });

  maybeTypesetMath(form);
}

function renderLessonQuestionSets() {
  const lesson = getLessonById(state.selectedLessonId);
  const lessonSnapshot = state.lessonProgress?.[lesson.id] || null;
  document.getElementById("quizResult").innerHTML = "";
  document.getElementById("challengeResult").innerHTML = "";
  state.currentQuestionState = lessonSnapshot?.questionState ? { ...lessonSnapshot.questionState } : {};
  state.givenUpQuestionIds = lessonSnapshot?.givenUpQuestionIds ? { ...lessonSnapshot.givenUpQuestionIds } : {};

  renderQuestionSet("quizForm", lesson.quiz || [], lessonSnapshot, "Q");
  renderQuestionSet("challengeForm", lesson.challengeQuiz || [], lessonSnapshot, "C");

  hideAdaptiveSection();
}

function gradeQuestion(q, response, key = null) {
  const marker = key || q;
  if (q.type === "mcq") return response === marker.answer;
  if (q.type === "numeric") {
    const n = parseNumericExpression(response);
    if (Number.isNaN(n)) return false;
    const tol = marker.tolerance ?? 1e-9;
    return Math.abs(n - marker.answer) <= tol;
  }
  const norm = normalizeText(response);
  return (marker.accepted || []).some((ans) => normalizeText(ans) === norm);
}

function parseNumericExpression(raw) {
  const input = String(raw ?? "").trim();
  if (!input) return Number.NaN;

  const normalized = input
    .replace(/\s+/g, "")
    .replace(/\^/g, "**")
    .replace(/[−–]/g, "-");

  if (/[^0-9+\-*/().*]/.test(normalized)) return Number.NaN;
  if (/\*{3,}/.test(normalized)) return Number.NaN;

  try {
    const value = Function(`"use strict"; return (${normalized});`)();
    return typeof value === "number" && Number.isFinite(value) ? value : Number.NaN;
  } catch (_) {
    return Number.NaN;
  }
}

function setQuestionFeedback(questionId, isCorrect) {
  const fb = document.getElementById(`fb-${questionId}`);
  if (!fb) return;
  fb.textContent = isCorrect ? "Correct" : "Not yet correct";
  fb.className = isCorrect ? "feedback-text good" : "feedback-text bad";
}

function getRevealAnswer(q, key) {
  const marker = key || q;
  if (q.type === "mcq") return marker.answer ?? "No answer available";
  if (q.type === "numeric") {
    if (typeof marker.answer === "number") return String(marker.answer);
    if (marker.answer != null) return String(marker.answer);
  }
  if (Array.isArray(marker.accepted) && marker.accepted.length) return marker.accepted[0];
  if (marker.answer != null) return String(marker.answer);
  return "No answer available";
}

function disableQuestionInputs(questionId) {
  const input = document.querySelector(`[name="${questionId}"]`);
  if (input) input.disabled = true;
  const checkBtn = document.querySelector(`.check-btn[data-question-id="${questionId}"]`);
  const giveUpBtn = document.querySelector(`.give-up-btn[data-question-id="${questionId}"]`);
  if (checkBtn) checkBtn.disabled = true;
  if (giveUpBtn) giveUpBtn.disabled = true;
}

function setGivenUpFeedback(questionId, q, key) {
  const fb = document.getElementById(`fb-${questionId}`);
  if (!fb) return;
  const answerText = getRevealAnswer(q, key);
  fb.innerHTML = `Answer: ${renderInlineMathSafe(formatDisplayMath(answerText))} <em>(recorded wrong)</em>`;
  fb.className = "feedback-text bad";
  maybeTypesetMath(fb);
}

function checkSingleQuestion(questionId) {
  if (state.givenUpQuestionIds[questionId]) return;
  const lesson = getLessonById(state.selectedLessonId);
  const q = getQuestionById(lesson, questionId);
  if (!q) return;
  const response = document.querySelector(`[name="${questionId}"]`)?.value ?? "";
  const key = getLessonKey(lesson, q.id);
  const isCorrect = gradeQuestion(q, response, key);
  state.currentQuestionState[questionId] = {
    response,
    correct: isCorrect,
    checked: true,
    strand: q.strand
  };
  setQuestionFeedback(questionId, isCorrect);
  persistCurrentLessonProgress();
}

function giveUpQuestion(questionId) {
  if (state.givenUpQuestionIds[questionId]) return;
  const lesson = getLessonById(state.selectedLessonId);
  const q = getQuestionById(lesson, questionId);
  if (!q) return;

  const response = document.querySelector(`[name="${questionId}"]`)?.value ?? "";
  const key = getLessonKey(lesson, q.id);
  state.givenUpQuestionIds[questionId] = true;
  state.currentQuestionState[questionId] = {
    response,
    correct: false,
    checked: true,
    gaveUp: true,
    strand: q.strand
  };

  setGivenUpFeedback(questionId, q, key);
  disableQuestionInputs(questionId);
  persistCurrentLessonProgress();
}

function calculateStrandAccuracyFromResults(results) {
  const map = {};
  for (const [k] of Object.entries(getActiveData().strands)) {
    map[k] = { attempted: 0, correct: 0, accuracy: 0 };
  }
  for (const item of results) {
    map[item.strand].attempted += 1;
    if (item.correct) map[item.strand].correct += 1;
  }
  for (const v of Object.values(map)) {
    v.accuracy = v.attempted ? (v.correct / v.attempted) * 100 : 0;
  }
  return map;
}

function renderResult(score, results, quizDef, targetId) {
  const resultBox = document.getElementById(targetId);
  const cls = score >= 85 ? "score-ok" : score >= 70 ? "score-mid" : "score-low";
  let html = `<p class="${cls}"><strong>Score: ${score.toFixed(1)}%</strong></p><ul>`;
  for (const r of results) {
    const q = quizDef.find((x) => x.id === r.questionId);
    const mark = r.correct ? "✅" : "❌";
    html += `<li>${mark} ${q.id} (${getActiveData().strands[r.strand]})</li>`;
  }
  html += "</ul>";
  resultBox.innerHTML = html;
  maybeTypesetMath(resultBox);
}

function buildStrandStats() {
  const stats = {};
  for (const key of Object.keys(getActiveData().strands)) {
    stats[key] = { attempted: 0, correct: 0, accuracy: 0 };
  }

  for (const attempt of state.attempts) {
    for (const item of attempt.results) {
      stats[item.strand].attempted += 1;
      if (item.correct) stats[item.strand].correct += 1;
    }
  }
  for (const key of Object.keys(stats)) {
    const s = stats[key];
    s.accuracy = s.attempted ? (s.correct / s.attempted) * 100 : 0;
  }
  return stats;
}

function determineWeakStrands(globalStats, latestStats) {
  const weak = [];
  for (const [strand, g] of Object.entries(globalStats)) {
    const latest = latestStats[strand];
    const weakNow = latest.attempted > 0 && latest.accuracy < 70;
    const weakGlobal = g.attempted >= 3 && g.accuracy < 75;
    if (weakNow || weakGlobal) weak.push(strand);
  }
  return weak;
}

function pickAdaptiveQuestions(strands) {
  const picked = [];
  for (const strand of strands) {
    const bank = getActiveData().adaptiveBank[strand] || [];
    if (!bank.length) continue;
    const q = bank[Math.floor(Math.random() * bank.length)];
    picked.push({ ...q, strand });
    if (picked.length >= 4) break;
  }
  return picked;
}

function hideAdaptiveSection() {
  state.adaptiveQuestions = [];
  document.getElementById("adaptiveSection").classList.add("hidden");
  document.getElementById("adaptiveForm").innerHTML = "";
  document.getElementById("adaptiveResult").innerHTML = "";
}

function renderAdaptiveSection(questions) {
  const section = document.getElementById("adaptiveSection");
  const form = document.getElementById("adaptiveForm");
  form.innerHTML = "";

  state.adaptiveQuestions.forEach((q, i) => {
    const wrap = document.createElement("div");
    wrap.className = "question";
    wrap.innerHTML = `
      <div><strong>A${i + 1}.</strong> ${renderInlineMathSafe(formatDisplayMath(q.prompt))}</div>
      <div class="strand">Strand: ${getActiveData().strands[q.strand]}</div>
      ${renderQuestionInput(q)}
    `;
    form.appendChild(wrap);
  });

  section.classList.remove("hidden");
  maybeTypesetMath(form);
}

function handleCompleteLesson() {
  const lesson = getLessonById(state.selectedLessonId);
  let correct = 0;
  const results = [];

  lesson.quiz.forEach((q) => {
    const response = document.querySelector(`[name="${q.id}"]`)?.value ?? "";
    const key = getLessonKey(lesson, q.id);
    const gaveUp = Boolean(state.givenUpQuestionIds[q.id]);
    const isCorrect = gaveUp ? false : gradeQuestion(q, response, key);
    state.currentQuestionState[q.id] = {
      response,
      correct: isCorrect,
      checked: true,
      gaveUp,
      strand: q.strand
    };
    if (gaveUp) {
      setGivenUpFeedback(q.id, q, key);
    } else {
      setQuestionFeedback(q.id, isCorrect);
    }
    if (isCorrect) correct += 1;
    results.push({ questionId: q.id, strand: q.strand, response: response || "", correct: isCorrect });
  });

  const score = (correct / lesson.quiz.length) * 100;
  state.attempts.push({
    lessonId: lesson.id,
    attemptType: "routine",
    timestamp: new Date().toISOString(),
    score,
    results
  });

  const globalStats = buildStrandStats();
  const latestStats = calculateStrandAccuracyFromResults(results);
  const weakStrands = determineWeakStrands(globalStats, latestStats);

  if (weakStrands.length) {
    state.adaptiveQuestions = pickAdaptiveQuestions(weakStrands);
    if (state.adaptiveQuestions.length) {
      renderAdaptiveSection(state.adaptiveQuestions);
    }
  } else {
    hideAdaptiveSection();
  }

  saveState();
  renderResult(score, results, lesson.quiz, "quizResult");
  renderAnalytics();
}

function handleCompleteChallenge() {
  const lesson = getLessonById(state.selectedLessonId);
  const challengeQuiz = lesson.challengeQuiz || [];
  if (!challengeQuiz.length) return;

  let correct = 0;
  const results = [];
  challengeQuiz.forEach((q) => {
    const response = document.querySelector(`[name="${q.id}"]`)?.value ?? "";
    const key = getLessonKey(lesson, q.id);
    const gaveUp = Boolean(state.givenUpQuestionIds[q.id]);
    const isCorrect = gaveUp ? false : gradeQuestion(q, response, key);
    state.currentQuestionState[q.id] = {
      response,
      correct: isCorrect,
      checked: true,
      gaveUp,
      strand: q.strand
    };
    if (gaveUp) {
      setGivenUpFeedback(q.id, q, key);
    } else {
      setQuestionFeedback(q.id, isCorrect);
    }
    if (isCorrect) correct += 1;
    results.push({ questionId: q.id, strand: q.strand, response: response || "", correct: isCorrect });
  });

  const score = (correct / challengeQuiz.length) * 100;
  state.attempts.push({
    lessonId: `${lesson.id}-CHAL`,
    attemptType: "challenge",
    timestamp: new Date().toISOString(),
    score,
    results
  });

  saveState();
  renderResult(score, results, challengeQuiz, "challengeResult");
  renderAnalytics();
}

function handleSubmitAdaptiveQuiz() {
  if (!state.adaptiveQuestions.length) return;
  const form = document.getElementById("adaptiveForm");
  const data = new FormData(form);

  let correct = 0;
  const results = [];
  state.adaptiveQuestions.forEach((q) => {
    const response = data.get(q.id);
    const isCorrect = gradeQuestion(q, response);
    if (isCorrect) correct += 1;
    results.push({ questionId: q.id, strand: q.strand, response: response || "", correct: isCorrect });
  });
  const score = (correct / state.adaptiveQuestions.length) * 100;
  const lesson = getLessonById(state.selectedLessonId);

  state.attempts.push({
    lessonId: `${lesson.id}-ADAPT`,
    attemptType: "adaptive",
    timestamp: new Date().toISOString(),
    score,
    results
  });

  saveState();
  renderResult(score, results, state.adaptiveQuestions, "adaptiveResult");
  renderAnalytics();
}

function renderAnalytics() {
  const stats = buildStrandStats();
  const summary = document.getElementById("summaryStats");
  const attemptsCount = state.attempts.length;
  const avgScore = attemptsCount ? state.attempts.reduce((a, b) => a + b.score, 0) / attemptsCount : 0;
  summary.innerHTML = `
    <p><strong>Student:</strong> ${escapeHtml(state.studentName || "Not set")}</p>
    <p><strong>Attempts:</strong> ${attemptsCount}</p>
    <p><strong>Average Score:</strong> ${avgScore.toFixed(1)}%</p>
    <p><strong>Saved:</strong> Performance is stored in local device database (IndexedDB) for future sessions.</p>
  `;

  const tableWrap = document.getElementById("weaknessTableWrap");
  let table = "<table class='table'><tr><th>Strand</th><th>Accuracy</th><th>Status</th></tr>";
  for (const [key, s] of Object.entries(stats)) {
    const statusClass = s.accuracy >= 85 ? "tag-high" : s.accuracy >= 70 ? "tag-mid" : "tag-low";
    const statusText = s.attempted === 0 ? "No data" : s.accuracy >= 85 ? "Strong" : s.accuracy >= 70 ? "Watch" : "Weak";
    table += `<tr><td>${getActiveData().strands[key]}</td><td>${s.accuracy.toFixed(1)}%</td><td class='${statusClass}'>${statusText}</td></tr>`;
  }
  table += "</table>";
  tableWrap.innerHTML = table;

  const focusList = document.getElementById("focusList");
  focusList.innerHTML = "";
  const weak = Object.entries(stats).filter(([, s]) => s.attempted >= 3 && s.accuracy < 75).sort((a, b) => a[1].accuracy - b[1].accuracy);
  if (!weak.length) {
    const li = document.createElement("li");
    li.textContent = "No urgent weakness detected yet. Keep building evidence with more quizzes.";
    focusList.appendChild(li);
  } else {
    for (const [key, s] of weak) {
      const li = document.createElement("li");
      li.textContent = `${getActiveData().strands[key]} (${s.accuracy.toFixed(1)}%) - assign targeted drills.`;
      focusList.appendChild(li);
    }
  }

  const recent = document.getElementById("recentAttempts");
  recent.innerHTML = "";
  [...state.attempts].slice(-8).reverse().forEach((a) => {
    const li = document.createElement("li");
    li.textContent = `${a.lessonId} [${a.attemptType || "lesson"}]: ${a.score.toFixed(1)}% (${new Date(a.timestamp).toLocaleString()})`;
    recent.appendChild(li);
  });
}

function exportCsv() {
  const stats = buildStrandStats();
  const rows = [["Student", state.studentName || ""], ["Generated", new Date().toISOString()], [], ["LessonId", "Type", "Timestamp", "Score"]];
  for (const attempt of state.attempts) {
    rows.push([attempt.lessonId, attempt.attemptType || "lesson", attempt.timestamp, attempt.score.toFixed(1)]);
  }
  rows.push([]);
  rows.push(["Strand", "Attempted", "Correct", "Accuracy"]);
  for (const [key, s] of Object.entries(stats)) {
    rows.push([getActiveData().strands[key], s.attempted, s.correct, s.accuracy.toFixed(1)]);
  }

  const csv = rows.map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `maths_supervisor_report_${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function printSummary() {
  const stats = buildStrandStats();
  const attemptsCount = state.attempts.length;
  const avgScore = attemptsCount ? state.attempts.reduce((a, b) => a + b.score, 0) / attemptsCount : 0;

  const lines = Object.entries(stats)
    .map(([k, s]) => `<tr><td>${getActiveData().strands[k]}</td><td>${s.attempted}</td><td>${s.correct}</td><td>${s.accuracy.toFixed(1)}%</td></tr>`)
    .join("");

  const recent = [...state.attempts].slice(-10).reverse().map((a) => `<li>${a.lessonId} (${a.attemptType || "lesson"}) - ${a.score.toFixed(1)}%</li>`).join("");

  const popup = window.open("", "_blank");
  if (!popup) return;
  popup.document.write(`
    <html><head><title>Supervisor Summary</title></head><body>
    <h1>Elite Maths Coach - Supervisor Summary</h1>
    <p><strong>Student:</strong> ${escapeHtml(state.studentName || "Not set")}</p>
    <p><strong>Attempts:</strong> ${attemptsCount}</p>
    <p><strong>Average Score:</strong> ${avgScore.toFixed(1)}%</p>
    <h2>Strand Performance</h2>
    <table border="1" cellpadding="6" cellspacing="0">
      <tr><th>Strand</th><th>Attempted</th><th>Correct</th><th>Accuracy</th></tr>
      ${lines}
    </table>
    <h2>Recent Attempts</h2>
    <ul>${recent}</ul>
    </body></html>
  `);
  popup.document.close();
  popup.focus();
  popup.print();
}

function bindEvents() {
  document.getElementById("completeLessonBtn").addEventListener("click", handleCompleteLesson);
  document.getElementById("completeChallengeBtn").addEventListener("click", handleCompleteChallenge);
  document.getElementById("submitAdaptiveBtn").addEventListener("click", handleSubmitAdaptiveQuiz);
  document.getElementById("exportCsvBtn").addEventListener("click", exportCsv);
  document.getElementById("printReportBtn").addEventListener("click", printSummary);

  document.getElementById("lessonTabs").addEventListener("click", (event) => {
    const btn = event.target.closest(".tab-btn");
    if (!btn) return;
    setActiveLessonTab(btn.dataset.tab, true);
  });

  const bindQuestionActions = (formId) => {
    document.getElementById(formId).addEventListener("click", (event) => {
      const btn = event.target.closest(".check-btn");
      if (btn) {
        checkSingleQuestion(btn.dataset.questionId);
        return;
      }

      const giveUpBtn = event.target.closest(".give-up-btn");
      if (giveUpBtn) {
        giveUpQuestion(giveUpBtn.dataset.questionId);
      }
    });
  };

  bindQuestionActions("quizForm");
  bindQuestionActions("challengeForm");

  const bindInputPersistence = (formId) => {
    document.getElementById(formId).addEventListener("input", () => {
      persistCurrentLessonProgress();
    });
  };

  bindInputPersistence("quizForm");
  bindInputPersistence("challengeForm");

  document.getElementById("saveStudentBtn").addEventListener("click", () => {
    persistCurrentLessonProgress();
    state.studentName = document.getElementById("studentName").value.trim();
    loadStudentProfile(state.studentName);
    saveState();
    renderAll();
  });

  document.getElementById("studentSelect").addEventListener("change", (event) => {
    persistCurrentLessonProgress();
    const key = event.target.value;
    if (!key || !state.profiles[key]) return;
    loadStudentProfile(state.profiles[key].displayName || key);
    saveState();
    renderAll();
  });

  document.getElementById("streamSelect").addEventListener("change", (e) => {
    persistCurrentLessonProgress();
    state.activeStream = e.target.value;
    state.selectedLessonId = getActiveData().lessons[0]?.id;
    saveState();
    renderAll();
  });

  document.getElementById("resetProgressBtn").addEventListener("click", () => {
    const yes = confirm("Reset all quiz attempts and weakness data?");
    if (!yes) return;
    state.attempts = [];
    state.lessonProgress = {};
    hideAdaptiveSection();
    saveState();
    renderAll();
  });
}

function renderAll() {
  if (!state.selectedLessonId || !getLessonById(state.selectedLessonId)) {
    state.selectedLessonId = getActiveData().lessons[0]?.id;
  }
  renderLessonList();
  renderLessonContent();
  renderLessonQuestionSets();
  renderAnalytics();
  document.getElementById("studentName").value = state.studentName;
  renderStudentSelector();

  const lessonSnapshot = state.lessonProgress?.[state.selectedLessonId] || null;
  const tabToShow = lessonSnapshot?.activeTab || state.activeLessonTab || "teaching";
  setActiveLessonTab(tabToShow, false);
}

async function init() {
  await loadState();
  bindEvents();
  renderAll();
}

init();
