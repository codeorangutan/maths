# Lesson 23 (Elite Track)

## Program Stage
- Year: 10 (accelerated stream)
- Term: 3
- Week: 2
- Session: Lesson 23
- Duration: 100 minutes

## Lesson Title
Integration: Area, Accumulation, and Signed Interpretation

## Lesson Purpose
Master basic integration techniques, compute areas under curves with proper bound handling, and interpret definite integrals as net accumulation with attention to signed area concepts.

## Learning Intentions
By the end of this lesson, the student will:
1. Find antiderivatives of polynomial and simple functions using basic rules.
2. Evaluate definite integrals using the Fundamental Theorem of Calculus.
3. Calculate areas between curves and under curves.
4. Distinguish between net signed area and total geometric area.

## Success Criteria
- Core set: `>= 85%`
- Challenge set: `>= 70%`
- Timed sprint: complete in 15 min with `<= 1` antiderivative error
- Interpretation: correct distinction between net and total area

---

## Minute-by-Minute Flow (100 min)

### 0-8 min: Retrieval Warm-Up
1. Find antiderivative: \(\int 3x^2 dx\)
2. Evaluate: \(\int_0^2 x dx\)
3. If \(\frac{d}{dx}(x^3)=3x^2\), what is \(\int 3x^2 dx\)?
4. Find area under \(y=x\) from 0 to 4 geometrically.
5. Evaluate: \([x^2]_1^3\)

**Answers:**
1. \(x^3+C\)
2. \([\frac{x^2}{2}]_0^2=2-0=2\)
3. \(x^3+C\)
4. Triangle: \(\frac{1}{2}\times 4\times 4=8\)
5. \(9-1=8\)

### 8-28 min: Explicit Teaching Block

#### Focus A: Antiderivatives and Basic Integration Rules

**Definition:** \(F(x)\) is an antiderivative of \(f(x)\) if \(F'(x)=f(x)\).

**The Constant of Integration:**
If \(F(x)\) is an antiderivative, so is \(F(x)+C\) for any constant \(C\).

**Basic Integration Rules:**

| Function | Antiderivative | Condition |
|----------|---------------|-----------|
| \(x^n\) | \(\frac{x^{n+1}}{n+1}+C\) | \(n\neq -1\) |
| \(k\) (constant) | \(kx+C\) | - |
| \(x^{-1}=\frac{1}{x}\) | \(\ln|x|+C\) | \(x\neq 0\) |

**Linearity of Integration:**
\[\int(af(x)+bg(x))dx=a\int f(x)dx+b\int g(x)dx\]

**Verification Method:**
Differentiate your answer to recover the original integrand.

**Worked Example:** Find \(\int(4x^3-6x+2)dx\)

**Solution:**
\[=4\cdot\frac{x^4}{4}-6\cdot\frac{x^2}{2}+2x+C=x^4-3x^2+2x+C\]

Check: \(\frac{d}{dx}(x^4-3x^2+2x+C)=4x^3-6x+2\) ✓

#### Focus B: Definite Integrals and Area

**Fundamental Theorem of Calculus (Part 2):**
\[\int_a^b f(x)dx=F(b)-F(a)=[F(x)]_a^b\]
where \(F\) is any antiderivative of \(f\).

**Notation:** \([F(x)]_a^b=F(b)-F(a)\)

**Area Interpretation:**
- If \(f(x)\ge 0\) on \([a,b]\): \(\int_a^b f(x)dx\) = area under curve
- If \(f(x)\le 0\) on \([a,b]\): integral is negative of area above curve
- Mixed: integral is **net signed area** (positive - negative)

**Geometric Area vs Signed Area:**
- **Total area** (always positive): \(\int_a^b|f(x)|dx\)
- **Net signed area**: \(\int_a^b f(x)dx\)

**Worked Example:** Find area between \(y=x^2\) and x-axis from 0 to 3.

**Solution:**
\[\text{Area}=\int_0^3 x^2 dx=[\frac{x^3}{3}]_0^3=\frac{27}{3}-0=9\]

#### Focus C: Advanced Applications

**Area Between Two Curves:**
\[\text{Area}=\int_a^b(\text{upper function}-\text{lower function})dx\]

**Accumulation Interpretation:**
If \(v(t)\) is velocity, then \(\int_{t_1}^{t_2} v(t)dt\) = displacement (net change in position).

**Signed Area Strategy for Mixed Regions:**
1. Find where \(f(x)=0\) (roots)
2. Split integral at these points
3. Compute each part separately
4. For total area: take absolute value of each part, then add

---

### 28-68 min: Guided Core Set (40 min)

**Core Problem 1:** Find \(\int(5x^4-3x^2+2)dx\).

**Solution:**
\[=5\cdot\frac{x^5}{5}-3\cdot\frac{x^3}{3}+2x+C=x^5-x^3+2x+C\]

---

**Core Problem 2:** Evaluate \(\int_1^4(2x+1)dx\).

**Solution:**
\[[x^2+x]_1^4=(16+4)-(1+1)=20-2=18\]

---

**Core Problem 3:** Find area between \(y=x^2+1\) and x-axis from \(x=-1\) to \(x=2\).

**Solution:**
Since \(y=x^2+1\ge 1>0\) always, area = integral.
\[\int_{-1}^2(x^2+1)dx=[\frac{x^3}{3}+x]_{-1}^2=(\frac{8}{3}+2)-(-\frac{1}{3}-1)\]
\[=\frac{8}{3}+2+\frac{1}{3}+1=\frac{9}{3}+3=3+3=6\]

---

**Core Problem 4:** Evaluate \(\int_0^2(3x^2-6x)dx\) and interpret geometrically.

**Solution:**
\[[x^3-3x^2]_0^2=(8-12)-0=-4\]

Geometric interpretation: The curve \(y=3x^2-6x=3x(x-2)\) is negative on \((0,2)\). Net signed area is -4. The actual geometric area is \(\int_0^2|3x^2-6x|dx=4\).

---

**Core Problem 5:** Find total area between \(y=x^2-4\) and x-axis from -3 to 3.

**Solution:**
Roots at \(x=\pm 2\). On \((-2,2)\), function is negative.

Split:
\[\int_{-3}^{-2}(x^2-4)dx+\int_{-2}^{2}(4-x^2)dx+\int_2^3(x^2-4)dx\]

First: \([\frac{x^3}{3}-4x]_{-3}^{-2}=(-\frac{8}{3}+8)-(-9+12)=\frac{16}{3}-3=\frac{7}{3}\)

Second: \([4x-\frac{x^3}{3}]_{-2}^{2}=(8-\frac{8}{3})-(-8+\frac{8}{3})=\frac{32}{3}\)

Third: \([\frac{x^3}{3}-4x]_2^3=(9-12)-(\frac{8}{3}-8)=\frac{7}{3}\)

Total area: \(\frac{7}{3}+\frac{32}{3}+\frac{7}{3}=\frac{46}{3}\)

---

**Core Problem 6:** Evaluate \(\int_1^3\frac{1}{x^2}dx\).

**Solution:**
\[=\int_1^3 x^{-2}dx=[-\frac{1}{x}]_1^3=-\frac{1}{3}+1=\frac{2}{3}\]

---

**Core Problem 7:** Find area between \(y=x\) and \(y=x^2\) from 0 to 1.

**Solution:**
Upper function: \(y=x\) (since \(x>x^2\) on \((0,1)\))
\[\int_0^1(x-x^2)dx=[\frac{x^2}{2}-\frac{x^3}{3}]_0^1=\frac{1}{2}-\frac{1}{3}=\frac{1}{6}\]

---

**Core Problem 8:** If velocity \(v(t)=6t-t^2\) m/s, find displacement from \(t=0\) to \(t=4\).

**Solution:**
\[\int_0^4(6t-t^2)dt=[3t^2-\frac{t^3}{3}]_0^4=(48-\frac{64}{3})-0=\frac{144-64}{3}=\frac{80}{3}\approx 26.67\text{ m}\]

---

**Core Problem 9:** Find \(\int(2x+1)^2dx\) by expanding first.

**Solution:**
\[(2x+1)^2=4x^2+4x+1\]
\[\int(4x^2+4x+1)dx=\frac{4x^3}{3}+2x^2+x+C\]

---

**Core Problem 10:** Evaluate \(\int_0^2 x^3dx\) and verify geometrically.

**Solution:**
\[[\frac{x^4}{4}]_0^2=\frac{16}{4}-0=4\]

---

### 68-83 min: Challenge Block (15 min)

**Challenge 1:** Find area between \(y=x^2\) and \(y=2x\).

**Method:**
Find intersection: \(x^2=2x\Rightarrow x=0,2\)
On \((0,2)\), \(2x>x^2\)
\[\text{Area}=\int_0^2(2x-x^2)dx=[x^2-\frac{x^3}{3}]_0^2=4-\frac{8}{3}=\frac{4}{3}\]

---

**Challenge 2:** Evaluate \(\int_{-2}^{2}(x^3-3x)dx\) and explain why the answer makes sense.

**Method:**
\[[\frac{x^4}{4}-\frac{3x^2}{2}]_{-2}^{2}=(4-6)-(4-6)=0\]

The integrand \(f(x)=x^3-3x\) is an **odd function** (\(f(-x)=-f(x)\)). Integrating over symmetric interval \([-a,a]\) always gives zero for odd functions.

---

**Challenge 3:** Find total distance traveled given velocity \(v(t)=3t^2-12t+9\) from \(t=0\) to \(t=4\).

**Method:**
Find when \(v=0\): \(3t^2-12t+9=0\Rightarrow t^2-4t+3=0\Rightarrow(t-1)(t-3)=0\)
\(t=1, 3\)

Split and take absolute values:
\[\int_0^1 v(t)dt+\int_1^3|v(t)|dt+\int_3^4 v(t)dt\]

\(v(t)=3(t-1)(t-3)\) is positive on \((0,1)\), negative on \((1,3)\), positive on \((3,4)\).

Compute each and add absolute values for total distance.

---

### 83-98 min: Timed ATAR-Style Sprint (15 min)

**Sprint 1:** Evaluate \(\int_0^3(2x+1)dx\).

**Sprint 2:** Find area under \(y=4-x^2\) from -2 to 2.

**Sprint 3:** Evaluate \(\int_1^2\frac{3}{x^2}dx\).

---

### Sprint Solutions

**Sprint 1:**
\[[x^2+x]_0^3=(9+3)-0=12\]

**Sprint 2:**
\[\int_{-2}^2(4-x^2)dx=[4x-\frac{x^3}{3}]_{-2}^2=(8-\frac{8}{3})-(-8+\frac{8}{3})=\frac{32}{3}\]

**Sprint 3:**
\[=3[-\frac{1}{x}]_1^2=3(-\frac{1}{2}+1)=3\cdot\frac{1}{2}=\frac{3}{2}\]

---

### 98-100 min: Exit Commitment
- Write the power rule for integration.
- State the difference between net signed area and total area.
- Commit to: always check antiderivative by differentiation.

---

## Homework

### Core
1. Find \(\int(6x^2-4x+3)dx\)
2. Evaluate \(\int_0^4(3x-2)dx\)
3. Find area under \(y=x^2+2\) from 0 to 2
4. Find area between \(y=x^2\) and \(y=x+2\)
5. Evaluate \(\int_1^4\frac{2}{x^2}dx\)

### Extension
6. Find total area between \(y=x^3-x\) and x-axis from -1 to 1
7. If velocity is \(v(t)=9-t^2\), find displacement and total distance from \(t=0\) to \(t=4\)
8. Prove \(\int_a^b f(x)dx=-\int_b^a f(x)dx\)

---

## Teacher Diagnostic Notes

Track after Lesson 23:
- `AN` (Antiderivative finding)
- `DE` (Definite evaluation)
- `AR` (Area calculation)
- `SI` (Signed interpretation)
- `BE` (Bound handling)
- `VE` (Verification by differentiation)

Intervention rules:
- Power rule errors (adding 1 to exponent): re-teach with pattern recognition
- Bound order confusion: emphasize upper minus lower
- Net vs total area errors: use visualization with color-coded regions

---

## Strand Links
- `CA` (Calculus): integration, area, accumulation
- `FG` (Functions and Graphs): curve analysis
