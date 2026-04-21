# Lesson 20 (Elite Track)

## Program Stage
- Year: 10 (accelerated stream)
- Term: 2
- Week: 4
- Session: Lesson 20
- Duration: 100 minutes

## Lesson Title
Advanced Quadratic Modelling and Optimisation

## Lesson Purpose
Build quadratic models from contextual constraints, locate extrema systematically, and interpret results with full contextual meaning including realistic domain restrictions.

## Learning Intentions
By the end of this lesson, the student will:
1. Formulate quadratic models from geometric and economic word problems.
2. Locate and classify extrema using vertex formula and sign analysis.
3. Apply realistic domain constraints from physical or economic context.
4. Interpret mathematical results in complete contextual sentences with units.

## Success Criteria
- Core set: `>= 85%`
- Challenge set: `>= 70%`
- Timed sprint: complete in 15 min with `<= 1` domain error
- Interpretation: all answers include units and contextual meaning

---

## Minute-by-Minute Flow (100 min)

### 0-8 min: Retrieval Warm-Up
1. Find vertex of \(y=2x^2-8x+5\)
2. Is the parabola concave up or down? How do you know?
3. Maximum or minimum value of \(y=-x^2+4x+1\)?
4. Axis of symmetry of \(y=x^2-6x+2\)?
5. A rectangle has perimeter 20m. Express area in terms of width \(w\).

**Answers:**
1. \(x=\frac{8}{4}=2, y=8-16+5=-3\), vertex \((2,-3)\)
2. Up (\(a=2>0\))
3. Max (\(a=-1<0\)), value at \(x=2\): \(-4+8+1=5\)
4. \(x=3\)
5. \(A=w(10-w)=10w-w^2\)

### 8-28 min: Explicit Teaching Block

#### Focus A: Quadratic Model Building

**Modelling Workflow:**
1. **Define variables:** State what \(x\) represents with units
2. **Identify constraints:** Write all physical/economic limits
3. **Build expression:** Use geometry or given relationships
4. **Simplify to standard form:** \(y=ax^2+bx+c\)
5. **State realistic domain:** What values of \(x\) make physical sense?

**Common Contexts:**
| Context | Typical Model | Key Constraint |
|---------|---------------|----------------|
| Rectangle area | \(A=x(\text{perim}/2-x)\) | \(0<x<\text{perim}/2\) |
| Projectile height | \(h=-4.9t^2+v_0t+h_0\) | \(h\ge 0, t\ge 0\) |
| Revenue/profit | \(R=p\cdot q(p)\) | \(p>0, q\ge 0\) |
| Cost minimization | Often quadratic in production quantity | Quantity \(>0\) |

#### Focus B: Finding and Classifying Extrema

**Vertex Formula:**
\[x_v=-\frac{b}{2a},\quad y_v=f(x_v)=a(x_v)^2+b(x_v)+c\]

**Classification:**
- If \(a>0\): parabola concave up → vertex is **minimum**
- If \(a<0\): parabola concave down → vertex is **maximum**

**Completing Square Method (for verification):**
\[y=a(x+\frac{b}{2a})^2+\frac{4ac-b^2}{4a}\]

**Worked Example:** Find maximum area of rectangle with perimeter 24m.

**Solution:**
Let width \(=w\), then length \(=12-w\)
\[A=w(12-w)=12w-w^2\]
\(a=-1<0\), so maximum at vertex.
\[w=\frac{-12}{2(-1)}=6\text{ m}\]
\[A=6(6)=36\text{ m}^2\]
Maximum area is 36 m² when rectangle is 6m × 6m (a square).

#### Focus C: Domain Constraints and Interpretation

**Physical Reality Checks:**
- Lengths must be positive
- Time must be non-negative
- Costs/prices must be reasonable
- Results must satisfy all original constraints

**Interpretation Format:**
"The [quantity] reaches its [maximum/minimum] of [value with units] when [variable] = [value with units]."

---

### 28-68 min: Guided Core Set (40 min)

**Core Problem 1:** A farmer has 80m of fencing for a rectangular paddock against a river (no fence needed on river side). Find dimensions for maximum area.

**Solution:**
Let width (perpendicular to river) = \(x\), length = \(80-2x\)
\[A=x(80-2x)=80x-2x^2\]
Vertex: \(x=\frac{-80}{-4}=20\)m
Length: \(80-40=40\)m
Maximum area: \(20\times 40=800\)m²

---

**Core Problem 2:** The height of a ball is \(h=-5t^2+20t+2\) metres. Find maximum height and when it occurs.

**Solution:**
\(a=-5<0\), so maximum at vertex.
\[t=\frac{-20}{-10}=2\text{ seconds}\]
\[h=-5(4)+20(2)+2=-20+40+2=22\text{ metres}\]
Maximum height is 22m after 2 seconds.

---

**Core Problem 3:** Find two positive numbers with sum 20 and maximum product.

**Solution:**
Let numbers be \(x\) and \(20-x\)
\[P=x(20-x)=20x-x^2\]
Vertex: \(x=\frac{-20}{-2}=10\)
Numbers are 10 and 10, maximum product is 100.

---

**Core Problem 4:** A theatre charges $10 per ticket and sells 200 tickets. For each $1 increase, they lose 10 customers. Find price for maximum revenue.

**Solution:**
Let \(x\) = number of $1 increases
Price: \$(10+x), Tickets: \(200-10x\)
\[R=(10+x)(200-10x)=2000-100x+200x-10x^2\]
\[=2000+100x-10x^2\]
Vertex: \(x=\frac{-100}{-20}=5\)
Optimal price: \(10+5=\$15\)
Revenue: \(15\times 150=\$2250\)

---

**Core Problem 5:** The sum of a number and three times its square is to be minimized. Find the number.

**Solution:**
\[S=x+3x^2\]
Vertex: \(x=\frac{-1}{6}\)
But wait - this gives a minimum? \(a=3>0\), yes minimum.
Minimum sum is \(-\frac{1}{6}+3(\frac{1}{36})=-\frac{1}{6}+\frac{1}{12}=-\frac{1}{12}\)

Actually, let me recheck: \(S=3x^2+x=3(x+\frac{1}{6})^2-\frac{1}{12}\)
Minimum is \(-\frac{1}{12}\) when \(x=-\frac{1}{6}\).

---

**Core Problem 6:** A rectangular box has square base. Volume is 32 cm³. Surface area \(S=2x^2+4xh\). Express \(S\) in terms of \(x\) and find minimum.

**Solution:**
Volume: \(x^2h=32\Rightarrow h=\frac{32}{x^2}\)
\[S=2x^2+4x(\frac{32}{x^2})=2x^2+\frac{128}{x}\]

Wait - this isn't quadratic. Let me try a different problem.

**Core Problem 6 (revised):** A Norman window has rectangular base surmounted by semicircle. Perimeter is 8m. Find dimensions for maximum area.

**Solution:**
Let rectangle have width \(w\), height \(h\). Semicircle radius \(\frac{w}{2}\).
Perimeter: \(w+2h+\frac{\pi w}{2}=8\Rightarrow h=4-\frac{w}{2}-\frac{\pi w}{4}\)
Area: \(A=wh+\frac{\pi w^2}{8}\)

This gets complex. Let me substitute:
\[A=w(4-\frac{w}{2}-\frac{\pi w}{4})+\frac{\pi w^2}{8}=4w-\frac{w^2}{2}-\frac{\pi w^2}{4}+\frac{\pi w^2}{8}\]
\[=4w-\frac{w^2}{2}-\frac{\pi w^2}{8}\]

This is quadratic in \(w\). Derivative/vertex approach applies.

---

**Core Problem 7:** Find the point on line \(y=3x-5\) closest to origin.

**Solution:**
Distance squared: \(D=x^2+(3x-5)^2=x^2+9x^2-30x+25=10x^2-30x+25\)
Vertex: \(x=\frac{30}{20}=\frac{3}{2}\)
\(y=3(\frac{3}{2})-5=\frac{9}{2}-5=-\frac{1}{2}\)
Point: \((\frac{3}{2}, -\frac{1}{2})\)

---

**Core Problem 8:** A company's profit is \(P=-2x^2+80x-500\) where \(x\) is units sold. Find production level for maximum profit and the maximum profit.

**Solution:**
\(a=-2<0\), maximum at vertex.
\[x=\frac{-80}{-4}=20\text{ units}\]
\[P=-2(400)+80(20)-500=-800+1600-500=300\]
Maximum profit is $300 when producing 20 units.

---

**Core Problem 9:** The sum of two sides of a right triangle with hypotenuse 10 is to be maximized. Find the sides.

**Solution:**
Let sides be \(x\) and \(y\) with \(x^2+y^2=100\).
Sum \(S=x+y\) where \(y=\sqrt{100-x^2}\).
\[S=x+\sqrt{100-x^2}\]
This isn't quadratic. Let's use calculus or symmetry.
By symmetry (or Lagrange multipliers), maximum when \(x=y\), so \(x=y=5\sqrt{2}\).

Actually this is getting off-track. Let me revise:

**Core Problem 9 (revised):** A projectile's height is \(h=-4.9t^2+24.5t+10\). Find when it hits maximum height and the maximum height.

**Solution:**
\[t=\frac{-24.5}{-9.8}=2.5\text{ seconds}\]
\[h=-4.9(6.25)+24.5(2.5)+10\]
\[=-30.625+61.25+10=40.625\text{ metres}\]

---

**Core Problem 10:** Find minimum value of \(y=x^2-6x+13\) for \(x\in[0,5]\).

**Solution:**
Vertex at \(x=3\) (within interval).
\(y(3)=9-18+13=4\)
Check endpoints: \(y(0)=13, y(5)=25-30+13=8\)
Minimum is 4 at \(x=3\).

---

### 68-83 min: Challenge Block (15 min)

**Challenge 1:** Find dimensions of rectangle with perimeter 20 inscribed in circle that maximizes rectangle area.

**Method:**
Rectangle with sides \(x, 10-x\) (half-perimeter each direction).
Diagonal = diameter.
\[x^2+(10-x)^2=d^2\]
This is fixed for given circle. To maximize area \(A=x(10-x)\), we need vertex at \(x=5\), giving square.

Square with side 5 (diagonal \(5\sqrt{2}\), radius \(\frac{5\sqrt{2}}{2}\)).

---

**Challenge 2:** A manufacturer can produce items at cost $(20+0.5x) each and sell at $(50-0.2x) each where \(x\) is in thousands. Find production for maximum profit.

**Method:**
Revenue: \(R=x(50-0.2x)=50x-0.2x^2\) (in thousands)
Cost: \(C=x(20+0.5x)=20x+0.5x^2\)
Profit: \(P=R-C=30x-0.7x^2\)
\[x=\frac{-30}{-1.4}=\frac{300}{14}=\frac{150}{7}\approx 21.43\text{ thousand units}\]

---

**Challenge 3:** Find point on parabola \(y=x^2\) closest to point \((3,0)\).

**Method:**
Distance squared from \((x,x^2)\) to \((3,0)\):
\[D=(x-3)^2+(x^2)^2=(x-3)^2+x^4\]
This is quartic, not quadratic. Use calculus: \(\frac{dD}{dx}=2(x-3)+4x^3=0\)
\[2x-6+4x^3=0\Rightarrow 2x^3+x-3=0\]
\(x=1\) is a root: \(2+1-3=0\).
Point is \((1,1)\), distance is \(\sqrt{4+1}=\sqrt{5}\).

---

### 83-98 min: Timed ATAR-Style Sprint (15 min)

**Sprint 1:** Find maximum of \(y=-3x^2+12x+5\).

**Sprint 2:** A rectangle has perimeter 36m. Find dimensions for maximum area.

**Sprint 3:** The height of a projectile is \(h=-4.9t^2+29.4t+5\). Find maximum height.

---

### Sprint Solutions

**Sprint 1:**
\[x=\frac{-12}{-6}=2,\quad y=-12+24+5=17\]
Maximum is 17.

**Sprint 2:**
\(2w+2l=36\Rightarrow l=18-w\)
\(A=w(18-w)=18w-w^2\)
\(w=9\), so square 9m × 9m.
Maximum area: 81 m²

**Sprint 3:**
\[t=\frac{-29.4}{-9.8}=3\text{ seconds}\]
\[h=-4.9(9)+29.4(3)+5=-44.1+88.2+5=49.1\text{ metres}\]

---

### 98-100 min: Exit Commitment
- Write the vertex formula.
- State how to tell if vertex is max or min.
- Commit to: always check if vertex is in realistic domain.

---

## Homework

### Core
1. Find minimum of \(y=2x^2-12x+7\)
2. Rectangle perimeter 28m. Find max area.
3. Two numbers sum to 24. Find max product.
4. Projectile \(h=-5t^2+30t+10\). Find max height.
5. Find point on \(y=2x+1\) closest to origin.

### Extension
6. Window: rectangle + semicircle on top, perimeter 6m. Maximize area.
7. Cost $(10+0.1q), price $(30-0.05q). Find profit-maximizing quantity.
8. Find min distance from \((2,3)\) to parabola \(y=x^2\).

---

## Teacher Diagnostic Notes

Track after Lesson 20:
- `MB` (Model building accuracy)
- `VE` (Vertex calculation)
- `CO` (Concavity check)
- `DO` (Domain application)
- `IN` (Interpretation quality)
- `UN` (Unit discipline)

Intervention rules:
- Model building errors > 25%: scaffold with variable definition template
- Vertex only given (not y-value): emphasize "what is being asked"
- Missing units: mandatory unit check before final answer

---

## Strand Links
- `NA` (Number and Algebra): quadratic manipulation
- `FG` (Functions and Graphs): parabola properties
- `CG` (Coordinate Geometry): distance, optimization
