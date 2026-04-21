# Lesson 19 (Elite Track)

## Program Stage
- Year: 10 (accelerated stream)
- Term: 2
- Week: 4
- Session: Lesson 19
- Duration: 100 minutes

## Lesson Title
Rational Expressions, Restrictions, and Nonlinear Systems

## Lesson Purpose
Master manipulation of rational expressions with strict domain discipline, solve rational equations systematically, and handle mixed algebraic systems with reciprocal structure while eliminating extraneous solutions.

## Learning Intentions
By the end of this lesson, the student will:
1. Simplify rational expressions by factoring and canceling common factors only.
2. State domain restrictions before solving rational equations.
3. Solve rational equations using LCD or cross-multiplication methods.
4. Solve systems involving rational functions and verify solutions against original equations.

## Success Criteria
- Core set: `>= 85%`
- Challenge set: `>= 70%`
- Timed sprint: complete in 15 min with `<= 1` restriction error
- Domain discipline: all restrictions stated before solving

---

## Minute-by-Minute Flow (100 min)

### 0-8 min: Retrieval Warm-Up
1. Simplify: \(\frac{x^2-9}{x-3}\), state restrictions
2. Solve: \(\frac{1}{x}=2\)
3. Find LCD of \(\frac{1}{x}\) and \(\frac{1}{x+1}\)
4. Restrictions for \(\frac{x+2}{x^2-4}\)?
5. Solve: \(\frac{x}{2}=\frac{3}{x}\)

**Answers:**
1. \(x+3\), \(x\neq 3\)
2. \(x=\frac{1}{2}\)
3. \(x(x+1)\)
4. \(x\neq\pm 2\)
5. \(x^2=6\Rightarrow x=\pm\sqrt{6}\)

### 8-28 min: Explicit Teaching Block

#### Focus A: Rational Expression Simplification

**Definition:** A rational expression is a quotient of two polynomials \(\frac{P(x)}{Q(x)}\) where \(Q(x)\neq 0\).

**Simplification Rules:**
1. Factor numerator and denominator completely
2. Cancel only common **factors** (never cancel terms across + or -)
3. State all restrictions: values making any denominator zero
4. Write simplified form with restrictions

**Worked Example:** Simplify \(\frac{x^2-5x+6}{x^2-4}\)

**Solution:**
\[=\frac{(x-2)(x-3)}{(x-2)(x+2)}=\frac{x-3}{x+2},\quad x\neq 2, -2\]

Note: \(x=2\) creates a hole (removable discontinuity), \(x=-2\) is a vertical asymptote.

#### Focus B: Solving Rational Equations

**Method 1 - LCD (Preferred):**
1. Factor all denominators
2. Identify LCD
3. Multiply every term by LCD
4. Solve resulting polynomial equation
5. Check all solutions against original restrictions
6. Reject extraneous solutions

**Method 2 - Cross-Multiplication:**
If \(\frac{A}{B}=\frac{C}{D}\), then \(AD=BC\) provided \(B\neq 0, D\neq 0\)

**Worked Example:** Solve \(\frac{2}{x-1}+\frac{1}{x+1}=\frac{4}{x^2-1}\)

**Solution:**
Restrictions: \(x\neq 1, -1\)
LCD: \((x-1)(x+1)=x^2-1\)

Multiply:
\[2(x+1)+(x-1)=4\]
\[2x+2+x-1=4\Rightarrow 3x=3\Rightarrow x=1\]

But \(x=1\) violates restriction! **No solution.**

#### Focus C: Systems with Rational Functions

**System Solving Strategy:**
1. Substitute to eliminate one variable
2. Form single equation (often rational)
3. Solve with full restriction checking
4. Back-substitute to find all variable values
5. Verify in **original** system equations

**Worked Example:** Solve: \(y=\frac{2}{x}\) and \(y=x-1\)

**Solution:**
Substitute: \(\frac{2}{x}=x-1\)
Multiply by \(x\): \(2=x^2-x\Rightarrow x^2-x-2=0\Rightarrow(x-2)(x+1)=0\)
\(x=2\): \(y=\frac{2}{2}=1\) or \(y=2-1=1\) 
\(x=-1\): \(y=\frac{2}{-1}=-2\) or \(y=-1-1=-2\) 

Solutions: \((2,1)\) and \((-1,-2)\)

---

### 28-68 min: Guided Core Set (40 min)

**Core Problem 1:** Simplify \(\frac{x^2-4x+4}{x^2-4}\) and state restrictions.

**Solution:**
\[=\frac{(x-2)^2}{(x-2)(x+2)}=\frac{x-2}{x+2},\quad x\neq 2, -2\]

---

**Core Problem 2:** Solve \(\frac{3}{x}+\frac{2}{x+1}=1\).

**Solution:**
Restrictions: \(x\neq 0, -1\)
LCD: \(x(x+1)\)
\[3(x+1)+2x=x(x+1)\]
\[5x+3=x^2+x\Rightarrow x^2-4x-3=0\]
\[x=\frac{4\pm\sqrt{16+12}}{2}=\frac{4\pm\sqrt{28}}{2}=2\pm\sqrt{7}\]

Both valid (not 0 or -1).

---

**Core Problem 3:** Solve \(\frac{x}{x-2}=\frac{3}{x-2}+2\).

**Solution:**
Restriction: \(x\neq 2\)
Multiply by \((x-2)\): \(x=3+2(x-2)\)
\[x=3+2x-4\Rightarrow -x=-1\Rightarrow x=1\]

Check: valid!

---

**Core Problem 4:** Simplify \(\frac{\frac{1}{x}-\frac{1}{y}}{\frac{1}{x^2}-\frac{1}{y^2}}\).

**Solution:**
\[=\frac{\frac{y-x}{xy}}{\frac{y^2-x^2}{x^2y^2}}=\frac{y-x}{xy}\cdot\frac{x^2y^2}{(y-x)(y+x)}=\frac{xy}{x+y}\]
Restrictions: \(x\neq 0, y\neq 0, x\neq\pm y\)

---

**Core Problem 5:** Solve \(\frac{2x}{x-3}-\frac{6}{x+3}=\frac{36}{x^2-9}\).

**Solution:**
Restrictions: \(x\neq 3, -3\)
LCD: \((x-3)(x+3)\)
\[2x(x+3)-6(x-3)=36\]
\[2x^2+6x-6x+18=36\Rightarrow 2x^2=18\Rightarrow x=\pm 3\]

Both violate restrictions! **No solution.**

---

**Core Problem 6:** Solve system: \(y=\frac{1}{x}\) and \(y=2x-3\).

**Solution:**
\[\frac{1}{x}=2x-3\Rightarrow 1=2x^2-3x\Rightarrow 2x^2-3x-1=0\]
\[x=\frac{3\pm\sqrt{9+8}}{4}=\frac{3\pm\sqrt{17}}{4}\]

\(y=\frac{4}{3\pm\sqrt{17}}\cdot\frac{3\mp\sqrt{17}}{3\mp\sqrt{17}}=\frac{4(3\mp\sqrt{17})}{9-17}=-\frac{3\mp\sqrt{17}}{2}\)

Solutions: \((\frac{3+\sqrt{17}}{4}, \frac{\sqrt{17}-3}{2})\) and \((\frac{3-\sqrt{17}}{4}, \frac{-3-\sqrt{17}}{2})\)

---

**Core Problem 7:** Simplify \(\frac{x^3-8}{x^2-4}\).

**Solution:**
\[=\frac{(x-2)(x^2+2x+4)}{(x-2)(x+2)}=\frac{x^2+2x+4}{x+2},\quad x\neq 2, -2\]

---

**Core Problem 8:** Solve \(\frac{1}{x-1}+\frac{1}{x+1}=\frac{2}{x^2-1}\).

**Solution:**
Restrictions: \(x\neq 1, -1\)
LCD: \(x^2-1\)
\[(x+1)+(x-1)=2\Rightarrow 2x=2\Rightarrow x=1\]

Violates restriction! **No solution.**

---

**Core Problem 9:** Solve \(\frac{x+2}{x-1}=3\).

**Solution:**
Restriction: \(x\neq 1\)
\[x+2=3(x-1)\Rightarrow x+2=3x-3\Rightarrow 5=2x\Rightarrow x=\frac{5}{2}\]
Valid!

---

**Core Problem 10:** Simplify \(\frac{\frac{x}{y}+\frac{y}{x}}{\frac{1}{x}+\frac{1}{y}}\).

**Solution:**
Numerator: \(\frac{x^2+y^2}{xy}\)
Denominator: \(\frac{x+y}{xy}\)

\[=\frac{x^2+y^2}{xy}\cdot\frac{xy}{x+y}=\frac{x^2+y^2}{x+y}\]
Restrictions: \(x\neq 0, y\neq 0, x\neq -y\)

---

### 68-83 min: Challenge Block (15 min)

**Challenge 1:** Solve \(\frac{x}{x-2}+\frac{2}{x+2}=\frac{8}{x^2-4}\).

**Method:**
Restrictions: \(x\neq 2, -2\)
LCD: \(x^2-4\)
\[x(x+2)+2(x-2)=8\]
\[x^2+2x+2x-4=8\Rightarrow x^2+4x-12=0\Rightarrow(x+6)(x-2)=0\]
\(x=-6\): valid; \(x=2\): invalid

**Answer:** \(x=-6\)

---

**Challenge 2:** Solve system: \(y=\frac{x+1}{x-1}\) and \(y=2x+1\).

**Method:**
\[\frac{x+1}{x-1}=2x+1\Rightarrow x+1=(2x+1)(x-1)\]
\[x+1=2x^2-2x+x-1=2x^2-x-1\]
\[2x^2-2x-2=0\Rightarrow x^2-x-1=0\Rightarrow x=\frac{1\pm\sqrt{5}}{2}\]

\(y=2\cdot\frac{1\pm\sqrt{5}}{2}+1=2\pm\sqrt{5}\)

**Answer:** \((\frac{1+\sqrt{5}}{2}, 2+\sqrt{5})\) and \((\frac{1-\sqrt{5}}{2}, 2-\sqrt{5})\)

---

**Challenge 3:** Simplify: \(\frac{\frac{a}{b}-\frac{b}{a}}{\frac{1}{a}-\frac{1}{b}}\).

**Method:**
Numerator: \(\frac{a^2-b^2}{ab}\)
Denominator: \(\frac{b-a}{ab}=-\frac{a-b}{ab}\)

\[=\frac{(a-b)(a+b)}{ab}\cdot\frac{ab}{-(a-b)}=-(a+b)\]

**Answer:** \(-(a+b)\) or \(-a-b\) (where \(a\neq b, a\neq 0, b\neq 0\))

---

### 83-98 min: Timed ATAR-Style Sprint (15 min)

**Sprint 1:** Simplify \(\frac{x^2-9}{x^2+6x+9}\) and state restrictions.

**Sprint 2:** Solve \(\frac{2}{x-1}=1+\frac{2}{x+1}\).

**Sprint 3:** Solve: \(y=\frac{3}{x}\) and \(y=x+2\).

---

### Sprint Solutions

**Sprint 1:**
\[=\frac{(x-3)(x+3)}{(x+3)^2}=\frac{x-3}{x+3},\quad x\neq -3\]

**Sprint 2:**
Restrictions: \(x\neq 1, -1\)
LCD: \((x-1)(x+1)\)
\[2(x+1)=(x-1)(x+1)+2(x-1)\]
\[2x+2=x^2-1+2x-2\Rightarrow x^2=5\Rightarrow x=\pm\sqrt{5}\]
Both valid.

**Sprint 3:**
\[\frac{3}{x}=x+2\Rightarrow 3=x^2+2x\Rightarrow x^2+2x-3=0\Rightarrow(x+3)(x-1)=0\]
\(x=-3\): \(y=-1\); \(x=1\): \(y=3\)
Solutions: \((-3,-1), (1,3)\)

---

### 98-100 min: Exit Commitment
- State the three steps for simplifying rational expressions.
- Write the domain restriction warning for rational equations.
- Commit to: always state restrictions before solving.

---

## Homework

### Core
1. Simplify \(\frac{x^2-16}{x^2-8x+16}\) with restrictions
2. Solve \(\frac{1}{x}+\frac{1}{x+2}=\frac{1}{2}\)
3. Solve \(\frac{x}{x-1}=2+\frac{1}{x-1}\)
4. Solve system: \(y=\frac{2}{x}\), \(y=x-1\)
5. Simplify \(\frac{\frac{1}{a^2}-\frac{1}{b^2}}{\frac{1}{a}-\frac{1}{b}}\)

### Extension
6. Solve \(\frac{3x}{x-2}-\frac{6}{x+2}=\frac{24}{x^2-4}\)
7. If \(\frac{x}{y}=\frac{3}{4}\) and \(\frac{y}{z}=\frac{5}{6}\), find \(\frac{x}{z}\)
8. Solve system: \(y=\frac{x^2-1}{x}\), \(y=2x-2\)

---

## Teacher Diagnostic Notes

Track after Lesson 19:
- `SI` (Simplification accuracy)
- `RE` (Restriction enumeration)
- `SE` (Solving method)
- `EX` (Extraneous solution detection)
- `SY` (System solving)
- `VE` (Verification discipline)

Intervention rules:
- Restriction omissions > 20%: mandatory "state first" protocol
- Extraneous solutions accepted: emphasize back-substitution check
- Complex fraction errors: re-teach LCD method for numerator/denominator

---

## Strand Links
- `NA` (Number and Algebra): rational expressions, equation solving
- `FG` (Functions and Graphs): domain, asymptotes
