# Lesson 22 (Elite Track)

## Program Stage
- Year: 10 (accelerated stream)
- Term: 3
- Week: 1
- Session: Lesson 22
- Duration: 100 minutes

## Lesson Title
Differential Calculus: Curve Analysis and Optimisation

## Lesson Purpose
Master differentiation techniques, analyze curve behavior through derivative sign analysis, and apply calculus methods to solve optimisation problems with rigorous justification.

## Learning Intentions
By the end of this lesson, the student will:
1. Differentiate polynomial functions accurately using the power rule.
2. Locate and classify stationary points using sign analysis.
3. Determine intervals of increase and decrease from derivative sign.
4. Apply calculus methods to solve optimisation problems.

## Success Criteria
- Core set: `>= 85%`
- Challenge set: `>= 70%`
- Timed sprint: complete in 15 min with `<= 1` derivative error
- Justification: all stationary points classified with sign evidence

---

## Minute-by-Minute Flow (100 min)

### 0-8 min: Retrieval Warm-Up
1. Differentiate \(y=3x^4-2x^2+5x-1\)
2. Find \(\frac{d}{dx}(x^3-6x)\)
3. If \(f'(x)>0\), what does this tell us about \(f\)?
4. Solve \(6x-6=0\)
5. Stationary points occur when derivative equals...?

**Answers:**
1. \(12x^3-4x+5\)
2. \(3x^2-6\)
3. \(f\) is increasing
4. \(x=1\)
5. Zero

### 8-28 min: Explicit Teaching Block

#### Focus A: Differentiation Rules

**The Power Rule:**
\[\frac{d}{dx}(x^n)=nx^{n-1}\]

**Linearity (Sum and Constant Multiple):**
\[\frac{d}{dx}(af(x)+bg(x))=af'(x)+bg'(x)\]

**Special Cases:**
- Constant: \(\frac{d}{dx}(c)=0\)
- Linear: \(\frac{d}{dx}(x)=1\)
- Constant multiple: \(\frac{d}{dx}(cf(x))=cf'(x)\)

**Differentiation Strategy:**
1. Identify terms and their structure
2. Apply power rule to each term
3. Combine using linearity
4. Simplify result

**Worked Example:** Differentiate \(y=2x^3-5x^2+3x-7\)

**Solution:**
\[\frac{dy}{dx}=2(3x^2)-5(2x)+3(1)-0=6x^2-10x+3\]

#### Focus B: Stationary Points and Curve Analysis

**Definition:** A stationary point occurs where \(f'(x)=0\) (gradient is zero).

**Classification Method (First Derivative Test):**

| Sign Change | Type | Description |
|-------------|------|-------------|
| \(f': +\to -\) | Local Maximum | Peak (higher than neighbors) |
| \(f': -\to +\) | Local Minimum | Valley (lower than neighbors) |
| \(f': \text{no change}\) | Stationary Inflection | Flat point, continues same direction |

**Sign Chart Protocol:**
1. Find all critical points where \(f'(x)=0\)
2. Mark these on number line
3. Test sign of \(f'(x)\) in each interval
4. Record sign pattern
5. Classify each critical point

**Worked Example:** Find and classify stationary points of \(f(x)=x^3-3x^2\)

**Solution:**
\[f'(x)=3x^2-6x=3x(x-2)\]
Critical points: \(x=0, 2\)

Sign chart:
- \((-\infty, 0)\): test \(x=-1\), \(f'(-1)=3+6=9>0\) (+)
- \((0, 2)\): test \(x=1\), \(f'(1)=3-6=-3<0\) (-)
- \((2, \infty)\): test \(x=3\), \(f'(3)=27-18=9>0\) (+)

Pattern: \(+(0)-(2)+\)
- At \(x=0\): \(+\to-\), local **maximum**, value \(f(0)=0\)
- At \(x=2\): \(-\to+\), local **minimum**, value \(f(2)=8-12=-4\)

#### Focus C: Optimisation with Calculus

**Optimisation Method:**
1. Define objective function \(y=f(x)\) from context
2. State realistic domain constraints
3. Differentiate: find \(f'(x)\)
4. Solve \(f'(x)=0\) for critical points
5. Classify using first or second derivative test
6. Check boundary values if domain is closed
7. State answer with units and context

**Second Derivative Test (Alternative):**
- \(f''(x)>0\) at critical point → concave up → **minimum**
- \(f''(x)<0\) at critical point → concave down → **maximum**

**Worked Example:** Find maximum area of rectangle with perimeter 20m.

**Solution:**
Let width \(=w\), length \(=10-w\), so \(A(w)=w(10-w)=10w-w^2\)
Domain: \(0<w<10\)

\[A'(w)=10-2w=0\Rightarrow w=5\]
\[A''(w)=-2<0\Rightarrow\text{maximum}\]

Maximum area at \(w=5\): \(A=25\) m² (square 5m × 5m).

---

### 28-68 min: Guided Core Set (40 min)

**Core Problem 1:** Differentiate \(y=4x^3-6x^2+2x-5\).

**Solution:**
\[\frac{dy}{dx}=12x^2-12x+2\]

---

**Core Problem 2:** Find stationary points of \(y=x^2-4x+3\) and classify.

**Solution:**
\[\frac{dy}{dx}=2x-4=0\Rightarrow x=2\]
\(\frac{d^2y}{dx^2}=2>0\Rightarrow\) minimum
\(y(2)=4-8+3=-1\)
Minimum at \((2,-1)\).

---

**Core Problem 3:** Find intervals where \(f(x)=x^3-6x^2+9x\) is increasing.

**Solution:**
\[f'(x)=3x^2-12x+9=3(x^2-4x+3)=3(x-1)(x-3)\]
Critical: \(x=1, 3\)
Sign chart: \((-\infty,1):+\), \((1,3):-\), \((3,\infty):+\)
Increasing on \((-\infty,1)\cup(3,\infty)\).

---

**Core Problem 4:** Find and classify all stationary points of \(y=x^3-3x\).

**Solution:**
\[\frac{dy}{dx}=3x^2-3=3(x^2-1)=0\Rightarrow x=\pm 1\]

Sign chart:
- \((-\infty,-1)\): test \(x=-2\), \(y'=12-3=9>0\) (+)
- \((-1,1)\): test \(x=0\), \(y'=-3<0\) (-)
- \((1,\infty)\): test \(x=2\), \(y'=12-3=9>0\) (+)

\(x=-1\): \(+\to-\), max, \(y=-1+3=2\), point \((-1,2)\)
\(x=1\): \(-\to+\), min, \(y=1-3=-2\), point \((1,-2)\)

---

**Core Problem 5:** Find maximum value of \(y=-x^2+6x-5\) for \(x\in[0,6]\).

**Solution:**
\[\frac{dy}{dx}=-2x+6=0\Rightarrow x=3\]
\(\frac{d^2y}{dx^2}=-2<0\Rightarrow\) maximum

At \(x=3\): \(y=-9+18-5=4\)
Check endpoints: \(y(0)=-5, y(6)=-36+36-5=-5\)
Maximum value is 4 at \(x=3\).

---

**Core Problem 6:** A box with square base has surface area 150 cm². Find dimensions for maximum volume.

**Solution:**
Let base side \(=x\), height \(=h\).
Surface: \(2x^2+4xh=150\Rightarrow h=\frac{150-2x^2}{4x}=\frac{75-x^2}{2x}\)
Volume: \(V=x^2h=x^2\cdot\frac{75-x^2}{2x}=\frac{x(75-x^2)}{2}=\frac{75x-x^3}{2}\)

\[\frac{dV}{dx}=\frac{75-3x^2}{2}=0\Rightarrow 3x^2=75\Rightarrow x^2=25\Rightarrow x=5\]
\(h=\frac{75-25}{10}=5\)
Cube with side 5cm gives max volume \(=125\) cm³.

---

**Core Problem 7:** Find stationary points of \(y=x^4-4x^2\) and classify.

**Solution:**
\[\frac{dy}{dx}=4x^3-8x=4x(x^2-2)=0\Rightarrow x=0, \pm\sqrt{2}\]

Second derivative: \(\frac{d^2y}{dx^2}=12x^2-8\)
- \(x=0\): \(y''=-8<0\Rightarrow\) local max, \(y=0\)
- \(x=\sqrt{2}\): \(y''=24-8=16>0\Rightarrow\) local min, \(y=4-8=-4\)
- \(x=-\sqrt{2}\): \(y''=24-8=16>0\Rightarrow\) local min, \(y=4-8=-4\)

---

**Core Problem 8:** Find point on parabola \(y=x^2\) closest to point \((6,3)\).

**Solution:**
Minimize distance squared: \(D=(x-6)^2+(x^2-3)^2\)
\[=x^2-12x+36+x^4-6x^2+9\]
\[=x^4-5x^2-12x+45\]

This is quartic. Let's use calculus: \(\frac{dD}{dx}=4x^3-10x-12=0\)
\(x=2\): \(32-20-12=0\) ✓
\(y=4\), so point is \((2,4)\).
Distance: \(\sqrt{16+1}=\sqrt{17}\)

---

**Core Problem 9:** Show \(y=x^3\) has stationary inflection at origin.

**Solution:**
\[\frac{dy}{dx}=3x^2=0\Rightarrow x=0\]
Sign test: \((-\infty,0):+\), \((0,\infty):+\)
No sign change! Derivative is positive on both sides.
\(\Rightarrow\) stationary inflection at \((0,0)\).

---

**Core Problem 10:** Find values of \(k\) such that \(y=x^3+kx\) has no stationary points.

**Solution:**
\[\frac{dy}{dx}=3x^2+k\]
For no stationary points: \(3x^2+k=0\) has no real solutions.
\(3x^2=-k\). Since \(3x^2\ge 0\), need \(-k<0\), so \(k>0\).

---

### 68-83 min: Challenge Block (15 min)

**Challenge 1:** Find maximum of \(f(x)=xe^{-x}\) for \(x>0\).

**Method:**
Using product rule (if known) or recognize this requires advanced techniques.
Actually for Year 10, let's use: at max, \(f(x+\epsilon)<f(x)\) for small \(\epsilon\).

Better: this requires chain rule knowledge. Let's use a polynomial version:

**Revised Challenge 1:** Find maximum of \(f(x)=x(10-x)^2\) for \(x\in[0,10]\).

**Solution:**
\[f(x)=x(100-20x+x^2)=100x-20x^2+x^3\]
\[f'(x)=100-40x+3x^2=0\]
Using formula: \(x=\frac{40\pm\sqrt{1600-1200}}{6}=\frac{40\pm 20}{6}\)
\(x=10\) or \(x=\frac{10}{3}\)
At \(x=\frac{10}{3}\): \(f=\frac{10}{3}(\frac{20}{3})^2=\frac{4000}{27}\approx 148\)
At \(x=10\): \(f=0\)
Maximum is \(\frac{4000}{27}\) at \(x=\frac{10}{3}\).

---

**Challenge 2:** Show that for cubic \(y=ax^3+bx^2+cx+d\), the average of stationary points (if two exist) lies on the axis of symmetry of the quadratic derivative.

**Method:**
\(y'=3ax^2+2bx+c=0\)
By Vieta: sum of roots \(=-\frac{2b}{3a}\)
Average: \(-\frac{b}{3a}\)

Axis of symmetry of \(y'\): \(x=-\frac{2b}{2(3a)}=-\frac{b}{3a}\) ✓

---

**Challenge 3:** Find minimum distance from point \((4,0)\) to curve \(y=x^2\).

**Method:**
Minimize \(D^2=(x-4)^2+x^4\)
\(\frac{d(D^2)}{dx}=2(x-4)+4x^3=0\Rightarrow 2x^3+x-4=0\)
\(x=1\): \(2+1-4=-1\neq 0\). Let's try \(x=1.2\) approximately.
Actually by inspection or numerical methods, \(x\approx 1.13\).
Distance \(\approx\sqrt{(1.13-4)^2+(1.13)^4}\approx\sqrt{8.24+1.63}\approx 3.14\).

---

### 83-98 min: Timed ATAR-Style Sprint (15 min)

**Sprint 1:** Find derivative of \(y=x^4-8x^2+3\).

**Sprint 2:** Find and classify stationary point(s) of \(y=x^2-6x+5\).

**Sprint 3:** Find maximum of \(y=12x-x^3\) for \(x>0\).

---

### Sprint Solutions

**Sprint 1:**
\[\frac{dy}{dx}=4x^3-16x\]

**Sprint 2:**
\[\frac{dy}{dx}=2x-6=0\Rightarrow x=3\]
\(\frac{d^2y}{dx^2}=2>0\Rightarrow\) minimum at \((3,-4)\)

**Sprint 3:**
\[\frac{dy}{dx}=12-3x^2=0\Rightarrow x^2=4\Rightarrow x=2\] (take positive)
\(\frac{d^2y}{dx^2}=-6x=-12<0\Rightarrow\) maximum
\(y=24-8=16\)

---

### 98-100 min: Exit Commitment
- Write the power rule.
- State the first derivative test for max/min.
- Commit to: always find second derivative or sign chart before classifying.

---

## Homework

### Core
1. Differentiate \(y=2x^5-3x^3+x-7\)
2. Find stationary points of \(y=x^3-6x^2+9x+1\)
3. Find max/min of \(y=2x^2-8x+3\)
4. Where is \(y=x^3-3x^2\) decreasing?
5. Rectangle perimeter 40m. Find max area using calculus.

### Extension
6. Find max of \(y=x^2(8-x)\) for \(0<x<8\)
7. Show cubic always has at least one real root
8. Find \(\frac{d}{dx}(x^n)\) for negative integer \(n\) using first principles

---

## Teacher Diagnostic Notes

Track after Lesson 22:
- `DF` (Differentiation fluency)
- `SP` (Stationary point finding)
- `CL` (Classification accuracy)
- `IN` (Interval analysis)
- `OP` (Optimisation application)
- `JU` (Justification quality)

Intervention rules:
- Power rule errors: return to index law foundation
- Classification without evidence: mandatory sign chart or second derivative
- Solving \(f(x)=0\) instead of \(f'(x)=0\): emphasize "derivative = zero"

---

## Strand Links
- `CA` (Calculus): differentiation, curve sketching, optimisation
- `FG` (Functions and Graphs): function behavior, extrema
