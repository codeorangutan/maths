# Lesson 14 (Elite Track)

## Program Stage
- Year: 10 (accelerated stream)
- Term: 2
- Week: 1
- Session: Lesson 14
- Duration: 100 minutes

## Lesson Title
Quadratic Parameters, Root Analysis, and Line-Parabola Systems

## Lesson Purpose
Master discriminant-based reasoning for parameter problems and develop systematic methods for solving line-parabola intersection problems with full geometric interpretation.

## Learning Intentions
By the end of this lesson, the student will:
1. Use the discriminant as a tool to extract parameter constraints from root conditions.
2. Apply Vieta's formulas (sum and product of roots) to solve symmetric quadratic problems.
3. Solve line-parabola systems and interpret intersection cases geometrically.
4. Write clear connections between algebraic conditions and graph behavior.

## Success Criteria
- Core set: `>= 85%`
- Challenge set: `>= 70%`
- Timed sprint: complete in 15 min with `<= 1` discriminant error
- Geometric interpretation: all algebraic results linked to graph features

---

## Minute-by-Minute Flow (100 min)

### 0-8 min: Retrieval Warm-Up
1. Find discriminant of \(2x^2-5x+3=0\)
2. If roots of \(x^2+px+q=0\) are 2 and 5, find \(p\) and \(q\)
3. How many intersections between \(y=x^2\) and \(y=2x+1\)?
4. Find \(k\) such that \(x^2+kx+4=0\) has equal roots
5. Sum and product of roots of \(3x^2-6x+2=0\)?

**Answers:**
1. \(\Delta=25-24=1\)
2. \(p=-7, q=10\)
3. 2 (parabola opens up, line crosses)
4. \(k^2-16=0\Rightarrow k=\pm4\)
5. Sum \(=2\), Product \(=\frac{2}{3}\)

### 8-28 min: Explicit Teaching Block

#### Focus A: Discriminant as Decision Tool

**Definition:** For \(ax^2+bx+c=0\), the discriminant is \(\Delta=b^2-4ac\).

**Root Cases:**
| Condition | \(\Delta\) | Number of Real Roots |
|-----------|------------|---------------------|
| Two distinct | \(\Delta>0\) | 2 |
| One repeated | \(\Delta=0\) | 1 (double root) |
| None (complex) | \(\Delta<0\) | 0 |

**Parameter Extraction Strategy:**
1. Identify the condition (equal roots, real roots, specific root gap)
2. Write discriminant inequality/equation
3. Solve for parameter
4. Verify in original equation
5. Interpret geometrically

**Worked Example:** Find \(k\) such that \(kx^2-4x+1=0\) has exactly one solution.

**Solution:**
- Case \(k=0\): \(-4x+1=0\Rightarrow x=\frac{1}{4}\) ✓ (linear, one solution)
- Case \(k\neq0\): \(\Delta=16-4k=0\Rightarrow k=4\)
- Answer: \(k=0\) or \(k=4\)

#### Focus B: Vieta's Formulas (Root Relations)

**Theorem:** For \(ax^2+bx+c=0\) with roots \(\alpha, \beta\):
- Sum: \(\alpha+\beta=-\frac{b}{a}\)
- Product: \(\alpha\beta=\frac{c}{a}\)

**When to Use:**
- Symmetric expressions in roots (e.g., \(\alpha^2+\beta^2\), \(\frac{1}{\alpha}+\frac{1}{\beta}\))
- Forming new quadratics with related roots
- Finding one root given the other

**Worked Example:** If \(\alpha, \beta\) are roots of \(x^2-5x+3=0\), find \(\alpha^2+\beta^2\).

**Solution:**
\[\alpha^2+\beta^2=(\alpha+\beta)^2-2\alpha\beta=25-6=19\]

#### Focus C: Line-Parabola Systems

**Intersection Strategy:**
1. Substitute line equation into parabola (or set equal)
2. Form quadratic in one variable
3. Apply discriminant analysis:
   - \(\Delta>0\): 2 intersection points (secant)
   - \(\Delta=0\): 1 intersection point (tangent)
   - \(\Delta<0\): 0 intersection points (no contact)
4. Solve for coordinates when needed
5. State geometric conclusion

**Worked Example:** Find \(k\) such that \(y=kx+2\) is tangent to \(y=x^2+1\).

**Solution:**
\[x^2+1=kx+2\Rightarrow x^2-kx-1=0\]
\[\Delta=k^2+4=0\Rightarrow k^2=-4\]
No real \(k\) exists! The line cannot be tangent to this parabola.

---

### 28-68 min: Guided Core Set (40 min)

**Core Problem 1:** Find values of \(m\) such that \(x^2+mx+9=0\) has real roots.

**Solution:**
\[\Delta=m^2-36\ge 0\Rightarrow m\le -6\text{ or }m\ge 6\]

---

**Core Problem 2:** The equation \(kx^2-6x+k=0\) has equal roots. Find \(k\).

**Solution:**
\[\Delta=36-4k^2=0\Rightarrow k^2=9\Rightarrow k=\pm 3\]
(Note: \(k=0\) would make it linear, check: \(k\neq0\) for quadratic)

---

**Core Problem 3:** If \(\alpha, \beta\) are roots of \(2x^2-7x+3=0\), find \(\frac{1}{\alpha}+\frac{1}{\beta}\).

**Solution:**
\[\frac{1}{\alpha}+\frac{1}{\beta}=\frac{\alpha+\beta}{\alpha\beta}=\frac{7/2}{3/2}=\frac{7}{3}\]

---

**Core Problem 4:** Find the range of \(p\) such that \(y=2x+p\) intersects \(y=x^2-4x+5\) at two distinct points.

**Solution:**
\[x^2-4x+5=2x+p\Rightarrow x^2-6x+(5-p)=0\]
\[\Delta=36-4(5-p)>0\Rightarrow 36-20+4p>0\Rightarrow p>-4\]

---

**Core Problem 5:** One root of \(x^2+kx-8=0\) is 2. Find the other root and \(k\).

**Solution:**
- Product: \(2\cdot\beta=-8\Rightarrow\beta=-4\)
- Sum: \(2+(-4)=-k\Rightarrow k=2\)

---

**Core Problem 6:** Show that \(y=mx-1\) is tangent to \(y=x^2\) when \(m^2+4=0\) has no solution... wait, let me recalculate.

Actually: \(x^2=mx-1\Rightarrow x^2-mx+1=0\)
\[\Delta=m^2-4=0\Rightarrow m=\pm 2\]
So tangent when \(m=2\) or \(m=-2\).

---

**Core Problem 7:** Form a quadratic with roots 3 and \(-\frac{1}{2}\).

**Solution:**
- Sum \(=\frac{5}{2}\), Product \(=-\frac{3}{2}\)
- Equation: \(x^2-\frac{5}{2}x-\frac{3}{2}=0\) or \(2x^2-5x-3=0\)

---

**Core Problem 8:** Find \(k\) such that roots of \(x^2+(k+1)x+k=0\) differ by 1.

**Solution:**
Let roots be \(\alpha, \alpha+1\).
- Sum: \(2\alpha+1=-(k+1)\Rightarrow\alpha=-\frac{k+2}{2}\)
- Product: \(\alpha(\alpha+1)=k\)
Substituting: \(-\frac{k+2}{2}\cdot\frac{-k}{2}=k\Rightarrow\frac{k(k+2)}{4}=k\)
\[k(k+2)=4k\Rightarrow k^2-2k=0\Rightarrow k(k-2)=0\Rightarrow k=0\text{ or }k=2\]

---

**Core Problem 9:** The line \(y=x+k\) is tangent to parabola \(y=x^2-3x+5\). Find \(k\) and the point of contact.

**Solution:**
\[x^2-3x+5=x+k\Rightarrow x^2-4x+(5-k)=0\]
\[\Delta=16-4(5-k)=0\Rightarrow 16-20+4k=0\Rightarrow k=1\]
At \(k=1\): \(x^2-4x+4=0\Rightarrow(x-2)^2=0\Rightarrow x=2\)
Point: \((2, 3)\)

---

**Core Problem 10:** For what values of \(k\) does \(x^2+(k-2)x+4=0\) have no real roots?

**Solution:**
\[\Delta=(k-2)^2-16<0\Rightarrow(k-2)^2<16\Rightarrow-4<k-2<4\Rightarrow-2<k<6\]

---

### 68-83 min: Challenge Block (15 min)

**Challenge 1:** If \(\alpha, \beta\) are roots of \(x^2-3x+1=0\), find \(\alpha^3+\beta^3\).

**Method:**
\[\alpha^3+\beta^3=(\alpha+\beta)^3-3\alpha\beta(\alpha+\beta)=27-3(1)(3)=18\]

**Answer:** \(18\)

---

**Challenge 2:** Find all \(k\) such that the line \(y=kx+3\) intersects the circle \(x^2+y^2=9\) at exactly one point.

**Method:**
Substitute: \(x^2+(kx+3)^2=9\Rightarrow x^2+k^2x^2+6kx+9=9\)
\[(1+k^2)x^2+6kx=0\Rightarrow x[(1+k^2)x+6k]=0\]

For exactly one solution: either \(k=0\) (gives \(x=0\) only, but \(y=3\), point \((0,3)\) on circle ✓)
Or the quadratic has discriminant zero for the non-zero factor... Actually, always one solution at \(x=0\).

For tangency (one intersection total), need the other factor to give same point:
\[(1+k^2)x+6k=0\Rightarrow x=-\frac{6k}{1+k^2}\]

This equals 0 only when \(k=0\). So only \(k=0\) gives exactly one intersection? Let me check: at \(k=1\), we get \(x=0\) or \(x=-3\), two points.

**Answer:** \(k=0\) only

---

**Challenge 3:** The quadratic \(x^2+px+q=0\) has roots \(\alpha, 2\alpha\). Find a relationship between \(p\) and \(q\).

**Method:**
- Sum: \(3\alpha=-p\Rightarrow\alpha=-\frac{p}{3}\)
- Product: \(2\alpha^2=q\Rightarrow 2\cdot\frac{p^2}{9}=q\Rightarrow 2p^2=9q\)

**Answer:** \(2p^2=9q\) (or \(q=\frac{2p^2}{9}\))

---

### 83-98 min: Timed ATAR-Style Sprint (15 min)

**Sprint 1:** Find \(k\) such that \(x^2+kx+k=0\) has equal roots.

**Sprint 2:** If roots of \(3x^2-5x+1=0\) are \(\alpha, \beta\), find \(\alpha^2+\beta^2\).

**Sprint 3:** Find \(m\) such that \(y=mx+2\) is tangent to \(y=x^2+3x+1\).

---

### Sprint Solutions

**Sprint 1:**
\[\Delta=k^2-4k=0\Rightarrow k(k-4)=0\Rightarrow k=0\text{ or }k=4\]

**Sprint 2:**
\[\alpha+\beta=\frac{5}{3}, \alpha\beta=\frac{1}{3}\]
\[\alpha^2+\beta^2=\frac{25}{9}-\frac{2}{3}=\frac{25-6}{9}=\frac{19}{9}\]

**Sprint 3:**
\[x^2+3x+1=mx+2\Rightarrow x^2+(3-m)x-1=0\]
\[\Delta=(3-m)^2+4=0\Rightarrow(3-m)^2=-4\]
No real solution! The line cannot be tangent to this parabola (vertex at \((-\frac{3}{2}, -\frac{5}{4})\) and \(y\)-intercept at \(y=2\) is above minimum).

---

### 98-100 min: Exit Commitment
- State the discriminant formula and what each case means geometrically.
- Write Vieta's formulas from memory.
- Commit to checking: when solving for parameter, did I verify the original condition?

---

## Homework

### Core
1. Find \(m\) such that \(x^2+mx+16=0\) has equal roots
2. If one root of \(x^2+5x+k=0\) is \(-2\), find the other root and \(k\)
3. Find range of \(p\) for which \(y=x+p\) intersects \(y=x^2-2x+3\) at two points
4. Form a quadratic with sum of roots 4 and product \(-5\)
5. Find \(k\) such that roots of \(x^2-kx+9=0\) differ by 6

### Extension
6. If \(\alpha, \beta\) are roots of \(x^2-4x+2=0\), find \(\frac{\alpha}{\beta}+\frac{\beta}{\alpha}\)
7. Find \(k\) such that \(y=kx+1\) is tangent to \(x^2+y^2=1\) (unit circle)
8. Prove: if roots of \(x^2+px+q=0\) are in ratio 1:2, then \(9q=2p^2\)

---

## Teacher Diagnostic Notes

Track after Lesson 14:
- `DI` (Discriminant application accuracy)
- `VI` (Vieta's formula fluency)
- `SY` (System solving method)
- `GI` (Geometric interpretation quality)
- `PA` (Parameter extraction logic)
- `TM` (Time management)

Intervention rules:
- Discriminant errors > 25%: drill \(\Delta=b^2-4ac\) with 10 rapid problems
- Vieta confusion: re-teach with explicit sum/product formula cards
- System errors: emphasize substitution step before forming quadratic

---

## Strand Links
- `NA` (Number and Algebra): quadratic equations, parameter solving
- `FG` (Functions and Graphs): intersection analysis, tangency conditions
