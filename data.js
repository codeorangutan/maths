window.ELITE_MATHS_DATA = {
  strands: {
    NA: "Number & Algebra",
    FG: "Functions & Graphs",
    TG: "Trigonometry & Geometry",
    PS: "Probability & Statistics",
    RP: "Reasoning & Proof",
    TX: "Timed Execution"
  },
  lessons: [
    {
      id: "L01",
      title: "Lesson 01 - Diagnostic and Launch",
      meta: "Year 10 · Term 1 · Week 1",
      mdFile: "Lesson_01.md",
      objectives: [
        "Establish baseline across all strands",
        "Set target profile for top-100 trajectory",
        "Start error-log discipline"
      ],
      teachingPoints: [
        "All solutions need complete working and verification",
        "Proof-quality writing starts now, not in Year 12",
        "Weaknesses are tracked by strand and intervention priority"
      ],
      quiz: [
        {
          id: "L01Q1",
          strand: "NA",
          type: "numeric",
          prompt: "Simplify: (3^-2 + 2^-1) / (5^-1)",
          marks: 2
        },
        {
          id: "L01Q2",
          strand: "NA",
          type: "text",
          prompt: "Rationalise: \\(\\dfrac{4}{\\sqrt{3}-1}\\)",
          marks: 2
        },
        {
          id: "L01Q3",
          strand: "FG",
          type: "numeric",
          prompt: "If \\(f(x)=x^2-3x+1\\), find \\(f(x+2)-f(x)\\) when \\(x=5\\).",
          marks: 3
        },
        {
          id: "L01Q4",
          strand: "RP",
          type: "mcq",
          prompt: "Which statement is true for all integers n?",
          options: [
            "n^2+n is always odd",
            "n^2+n is always even",
            "n^2+n is always prime",
            "n^2+n is never divisible by 2"
          ],
          marks: 3
        },
        {
          id: "L01Q5",
          strand: "NA",
          type: "numeric",
          prompt: "Simplify: (2^-3 + 3^-1) / (6^-1)",
          marks: 2
        },
        {
          id: "L01Q6",
          strand: "NA",
          type: "mcq",
          prompt: "Solve |x-2| < 5",
          options: [
            "-3 < x < 7",
            "x < -3 or x > 7",
            "-5 < x < 5",
            "x > 2"
          ],
          marks: 2
        },
        {
          id: "L01Q7",
          strand: "FG",
          type: "numeric",
          prompt: "If x + 1/x = 4, find x^2 + 1/x^2",
          marks: 2
        },
        {
          id: "L01Q8",
          strand: "RP",
          type: "mcq",
          prompt: "Best reason n(n+1) is always even:",
          options: [
            "n is always even",
            "n+1 is always even",
            "Consecutive integers include one even number",
            "The product is always prime"
          ],
          marks: 2
        },
        {
          id: "L01Q9",
          strand: "NA",
          type: "text",
          prompt: "Rationalise: \\(\\dfrac{3}{\\sqrt{5}-1}\\)",
          marks: 2
        },
        {
          id: "L01Q10",
          strand: "FG",
          type: "numeric",
          prompt: "Find the gradient between (-2,3) and (4,-9)",
          marks: 2
        }
      ],
      answerKey: {
        L01Q1: { answer: 55 / 18, tolerance: 0.0001 },
        L01Q2: { accepted: ["2sqrt3+2", "2+2sqrt3", "2(\u221a3+1)"] },
        L01Q3: { answer: 18, tolerance: 0.0001 },
        L01Q4: { answer: "n^2+n is always even" },
        L01Q5: { answer: 11 / 4, tolerance: 0.0001 },
        L01Q6: { answer: "-3 < x < 7" },
        L01Q7: { answer: 14, tolerance: 0.0001 },
        L01Q8: { answer: "Consecutive integers include one even number" },
        L01Q9: { accepted: ["3(sqrt5+1)/4", "(3sqrt5+3)/4", "(3+3sqrt5)/4"] },
        L01Q10: { answer: -2, tolerance: 0.0001 }
      }
    },
    {
      id: "L02",
      title: "Lesson 02 - Algebraic Structure and Identities",
      meta: "Year 10 · Term 1 · Week 1",
      mdFile: "Lesson_02.md",
      objectives: [
        "Use structure-first simplification",
        "Apply identities efficiently",
        "Solve modulus/rational inequalities with sign logic"
      ],
      teachingPoints: [
        "Record domain restrictions before cancellation",
        "Use factor forms to avoid expansion overload",
        "Show sign charts explicitly for inequality questions"
      ],
      quiz: [
        {
          id: "L02Q1",
          strand: "NA",
          type: "numeric",
          prompt: "Evaluate: (2x+3)^2 - (2x-3)^2 when x=2",
          marks: 2
        },
        {
          id: "L02Q2",
          strand: "NA",
          type: "mcq",
          prompt: "Simplify (x^2-1)/(x-1) - (x^2-4)/(x-2), x!=1,2",
          options: ["1", "-1", "x", "x+1"],
          marks: 2
        },
        {
          id: "L02Q3",
          strand: "RP",
          type: "mcq",
          prompt: "n^3-n is divisible by 6 because:",
          options: [
            "it is always prime",
            "it is product of 3 consecutive integers",
            "it is always negative",
            "it has no factors"
          ],
          marks: 3
        },
        {
          id: "L02Q4",
          strand: "NA",
          type: "mcq",
          prompt: "Solve |3x+1| >= 7",
          options: [
            "x >= 2 or x <= -8/3",
            "-2 <= x <= 8/3",
            "x > 0 only",
            "No real solutions"
          ],
          marks: 2
        },
        {
          id: "L02Q5",
          strand: "NA",
          type: "numeric",
          prompt: "Simplify: \\(\\dfrac{2}{\\sqrt{3}}\\)",
          marks: 2
        },
        {
          id: "L02Q6",
          strand: "NA",
          type: "numeric",
          prompt: "For x≠4, simplify (x^2-16)/(x-4), then evaluate at x=6",
          marks: 2
        },
        {
          id: "L02Q7",
          strand: "NA",
          type: "mcq",
          prompt: "Solve (x-3)/(x+1) < 0",
          options: [
            "-1 < x < 3",
            "x < -1 or x > 3",
            "x > -1",
            "x < 3"
          ],
          marks: 2
        },
        {
          id: "L02Q8",
          strand: "FG",
          type: "numeric",
          prompt: "If x - 1/x = 2, find x^2 + 1/x^2",
          marks: 2
        },
        {
          id: "L02Q9",
          strand: "RP",
          type: "mcq",
          prompt: "n^3 - n can be written as:",
          options: [
            "n(n-1)(n+1)",
            "(n-1)^3",
            "n(n+1)",
            "n^2(n-1)"
          ],
          marks: 2
        },
        {
          id: "L02Q10",
          strand: "NA",
          type: "numeric",
          prompt: "Solve 7x - 5 = 2x + 20",
          marks: 1
        }
      ],
      answerKey: {
        L02Q1: { answer: 48, tolerance: 0.0001 },
        L02Q2: { answer: "-1" },
        L02Q3: { answer: "it is product of 3 consecutive integers" },
        L02Q4: { answer: "x >= 2 or x <= -8/3" },
        L02Q5: { answer: 2 * Math.sqrt(3) / 3, tolerance: 0.0001 },
        L02Q6: { answer: 10, tolerance: 0.0001 },
        L02Q7: { answer: "-1 < x < 3" },
        L02Q8: { answer: 6, tolerance: 0.0001 },
        L02Q9: { answer: "n(n-1)(n+1)" },
        L02Q10: { answer: 5, tolerance: 0.0001 }
      }
    },
    {
      id: "L03",
      title: "Lesson 03 - Quadratics, Discriminant, Optimization",
      meta: "Year 10 · Term 1 · Week 1",
      mdFile: "Lesson_03.md",
      objectives: [
        "Move between standard/factored/vertex forms",
        "Use discriminant for root classification",
        "Solve optimization and system problems rigorously"
      ],
      teachingPoints: [
        "Graph claims must be algebra-backed",
        "Discriminant is a decision tool, not just a formula",
        "Optimization links directly to vertex interpretation"
      ],
      quiz: [
        {
          id: "L03Q1",
          strand: "FG",
          type: "mcq",
          prompt: "Vertex of y = x^2 - 6x + 5 is:",
          options: ["(3,-4)", "(-3,4)", "(6,5)", "(3,4)"],
          marks: 2
        },
        {
          id: "L03Q2",
          strand: "FG",
          type: "mcq",
          prompt: "For x^2+(k-1)x+9=0 to have real roots, k must satisfy:",
          options: [
            "k > 0",
            "k <= -5 or k >= 7",
            "-5 < k < 7",
            "k = 1 only"
          ],
          marks: 3
        },
        {
          id: "L03Q3",
          strand: "FG",
          type: "numeric",
          prompt: "Minimum value of A(x)=x^2-10x+41",
          marks: 2
        },
        {
          id: "L03Q4",
          strand: "TG",
          type: "numeric",
          prompt: "Rectangle perimeter 40 cm. Maximum area?",
          marks: 2
        },
        {
          id: "L03Q5",
          strand: "TX",
          type: "mcq",
          prompt: "Best fast check for quadratic roots in factorised form?",
          options: [
            "Substitute both roots back quickly",
            "Redraw whole graph",
            "Ignore and move on",
            "Re-derive formula"
          ],
          marks: 1
        },
        {
          id: "L03Q6",
          strand: "FG",
          type: "numeric",
          prompt: "Find the axis of symmetry of y = 3x^2 - 12x + 1",
          marks: 2
        },
        {
          id: "L03Q7",
          strand: "FG",
          type: "mcq",
          prompt: "Discriminant of x^2 + 6x + 9 is:",
          options: ["0", "36", "-36", "9"],
          marks: 2
        },
        {
          id: "L03Q8",
          strand: "FG",
          type: "numeric",
          prompt: "If roots of x^2 - 5x + 6 = 0 are r1 and r2, find r1+r2",
          marks: 1
        },
        {
          id: "L03Q9",
          strand: "FG",
          type: "numeric",
          prompt: "Minimum value of y = 2x^2 + 8x + 3",
          marks: 2
        },
        {
          id: "L03Q10",
          strand: "FG",
          type: "mcq",
          prompt: "For line y = mx + 1 to be tangent to y = x^2 - 2x + 5, m can be:",
          options: ["2 or -6", "1 or -1", "4 only", "0 only"],
          marks: 3
        }
      ],
      answerKey: {
        L03Q1: { answer: "(3,-4)" },
        L03Q2: { answer: "k <= -5 or k >= 7" },
        L03Q3: { answer: 16, tolerance: 0.0001 },
        L03Q4: { answer: 100, tolerance: 0.0001 },
        L03Q5: { answer: "Substitute both roots back quickly" },
        L03Q6: { answer: 2, tolerance: 0.0001 },
        L03Q7: { answer: "0" },
        L03Q8: { answer: 5, tolerance: 0.0001 },
        L03Q9: { answer: -5, tolerance: 0.0001 },
        L03Q10: { answer: "2 or -6" }
      }
    },
    {
      id: "L09",
      title: "Lesson 09 - Sequences, Series, and Algebraic Pattern Proof",
      meta: "Year 10 · Term 1 · Week 3",
      mdFile: "Lesson_09.md",
      objectives: [
        "Generate and analyse arithmetic and geometric sequences",
        "Use nth-term forms and partial-sum formulas correctly",
        "Solve sequence parameter problems",
        "Prove pattern claims with clear algebraic argument"
      ],
      teachingPoints: [
        "Arithmetic: nth term and sum formulas",
        "Geometric: nth term and sum formulas with restriction",
        "Pattern-proof structure: conjecture, algebra, conclusion"
      ],
      quiz: [],
      answerKey: {}
    }
  ],
  adaptiveBank: {
    NA: [
      {
        id: "AD_NA_1",
        type: "numeric",
        prompt: "Evaluate: (3^2 - 5) * 2",
        answer: 8,
        tolerance: 0.0001
      },
      {
        id: "AD_NA_2",
        type: "mcq",
        prompt: "Factorise x^2 - 9",
        options: ["(x-3)(x+3)", "(x-9)(x+1)", "(x-3)^2", "Prime"],
        answer: "(x-3)(x+3)"
      },
      {
        id: "AD_NA_3",
        type: "numeric",
        prompt: "Solve for x: 5x - 12 = 18",
        answer: 6,
        tolerance: 0.0001
      }
    ],
    FG: [
      {
        id: "AD_FG_1",
        type: "mcq",
        prompt: "Vertex of y = x^2 - 4x + 1",
        options: ["(2,-3)", "(-2,3)", "(4,1)", "(2,3)"],
        answer: "(2,-3)"
      },
      {
        id: "AD_FG_2",
        type: "numeric",
        prompt: "If f(x)=x^2, find f(5)-f(3)",
        answer: 16,
        tolerance: 0.0001
      },
      {
        id: "AD_FG_3",
        type: "mcq",
        prompt: "For x^2 + 4x + 5 = 0, discriminant is:",
        options: ["-4", "4", "0", "20"],
        answer: "-4"
      }
    ],
    TG: [
      {
        id: "AD_TG_1",
        type: "numeric",
        prompt: "Area of triangle with base 10 and height 7",
        answer: 35,
        tolerance: 0.0001
      },
      {
        id: "AD_TG_2",
        type: "mcq",
        prompt: "In a right triangle with legs 6 and 8, hypotenuse is:",
        options: ["10", "12", "14", "8"],
        answer: "10"
      },
      {
        id: "AD_TG_3",
        type: "numeric",
        prompt: "Perimeter 40 rectangle max area",
        answer: 100,
        tolerance: 0.0001
      }
    ],
    PS: [
      {
        id: "AD_PS_1",
        type: "numeric",
        prompt: "A fair die: P(even)",
        answer: 0.5,
        tolerance: 0.0001
      },
      {
        id: "AD_PS_2",
        type: "mcq",
        prompt: "Bag has 3 red, 2 blue. P(red first) is:",
        options: ["3/5", "2/5", "1/2", "5/3"],
        answer: "3/5"
      },
      {
        id: "AD_PS_3",
        type: "numeric",
        prompt: "Mean of 4, 6, 10",
        answer: 20 / 3,
        tolerance: 0.0001
      }
    ],
    RP: [
      {
        id: "AD_RP_1",
        type: "mcq",
        prompt: "Best way to disprove a universal statement?",
        options: ["One counterexample", "More symbols", "Longer answer", "Graph only"],
        answer: "One counterexample"
      },
      {
        id: "AD_RP_2",
        type: "mcq",
        prompt: "n(n+1) is always even because:",
        options: ["consecutive integers include an even number", "n is always even", "n+1 is always prime", "it looks even"],
        answer: "consecutive integers include an even number"
      },
      {
        id: "AD_RP_3",
        type: "text",
        prompt: "Type exactly: valid counterexample",
        accepted: ["valid counterexample"]
      }
    ],
    TX: [
      {
        id: "AD_TX_1",
        type: "mcq",
        prompt: "In a timed exam, first pass should prioritise:",
        options: ["high-confidence questions", "random order", "hardest only", "long proofs first"],
        answer: "high-confidence questions"
      },
      {
        id: "AD_TX_2",
        type: "mcq",
        prompt: "Quick accuracy check after solving should include:",
        options: ["domain restrictions", "pen color", "question font", "none"],
        answer: "domain restrictions"
      },
      {
        id: "AD_TX_3",
        type: "numeric",
        prompt: "If 6 mins/question and 10 questions, total mins",
        answer: 60,
        tolerance: 0.0001
      }
    ]
  }
};
