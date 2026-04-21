# Lesson 17 (Elite Track)

## Program Stage
- Year: 10 (accelerated stream)
- Term: 2
- Week: 3
- Session: Lesson 17
- Duration: 100 minutes

## Lesson Title
Circle Geometry in the Coordinate Plane

## Lesson Purpose
Master circle equation forms, develop systematic tangent finding procedures, and connect geometric properties with algebraic methods for solving circle-related constraints.

## Learning Intentions
By the end of this lesson, the student will:
1. Convert between standard and general forms of circle equations.
2. Find equations of tangents to circles at given points.
3. Determine line-circle intersection using discriminant analysis.
4. Solve geometric problems involving circles and distances.

## Success Criteria
- Core set: `>= 85%`
- Challenge set: `>= 70%`
- Timed sprint: complete in 15 min with `<= 1` sign error
- Tangent equations: all verified by perpendicularity check

---

## Minute-by-Minute Flow (100 min)

### 0-8 min: Retrieval Warm-Up
1. Write equation of circle centre \((3,-2)\), radius 4.
2. Find centre and radius of \(x^2+y^2-6x+4y-12=0\)
3. Find gradient of line perpendicular to slope 2.
4. Does point \((1,3)\) lie on circle \((x-1)^2+(y-2)^2=1\)?
5. Find distance from \((3,4)\) to origin.

**Answers:**
1. \((x-3)^2+(y+2)^2=16\)
2. Centre \((3,-2)\), radius \(r=5\)
3. \(-\frac{1}{2}\)
4. \((1-1)^2+(3-2)^2=1\), yes
5. \(5\)

### 8-28 min: Explicit Teaching Block

#### Focus A: Circle Equation Forms

**Standard Form:**
\[(x-h)^2+(y-k)^2=r^2\]
- Centre: \((h,k)\)
- Radius: \(r\)

**General Form:**
\[x^2+y^2+Dx+Ey+F=0\]

**Conversion Method (General → Standard):**
1. Group \(x\) and \(y\) terms: \((x^2+Dx)+(y^2+Ey)=-F\)
2. Complete square for \(x\): add \((\frac{D}{2})^2\)
3. Complete square for \(y\): add \((\frac{E}{2})^2\)
4. Balance equation: add same values to RHS
5. Write as \((x-h)^2+(y-k)^2=r^2\)

**Worked Example:** Find centre and radius of \(x^2+y^2-4x+6y-3=0\)

**Solution:**
\[(x^2-4x)+(y^2+6y)=3\]
\[(x-2)^2-4+(y+3)^2-9=3\]
\[(x-2)^2+(y+3)^2=16\]

Centre: \((2,-3)\), Radius: \(4\)

#### Focus B: Tangents to Circles

**Tangent Theorem:** The radius to the point of contact is perpendicular to the tangent line.

**Finding Tangent Equation - Method:**
1. Identify point of contact \(P(x_1,y_1)\) on circle
2. Find gradient of radius \(CP\): \(m_{radius}=\frac{y_1-k}{x_1-h}\)
3. Gradient of tangent: \(m_{tangent}=-\frac{1}{m_{radius}}\) (negative reciprocal)
4. Use point-slope form: \(y-y_1=m_{tangent}(x-x_1)\)

**Worked Example:** Find tangent to circle \((x-2)^2+(y-1)^2=25\) at point \((5,5)\).

**Solution:**
- Centre \(C(2,1)\), point \(P(5,5)\)
- Radius gradient: \(m=\frac{5-1}{5-2}=\frac{4}{3}\)
- Tangent gradient: \(m=-\frac{3}{4}\)
- Equation: \(y-5=-\frac{3}{4}(x-5)\Rightarrow 4y-20=-3x+15\Rightarrow 3x+4y=35\)

#### Focus C: Line-Circle Intersection

**Method 1 - Substitution:**
1. Substitute line equation \(y=mx+c\) into circle
2. Form quadratic in \(x\)
3. Use discriminant:
   - \(\Delta>0\): 2 intersections (secant)
   - \(\Delta=0\): 1 intersection (tangent)
   - \(\Delta<0\): no intersection

**Method 2 - Distance:**
Distance from centre to line equals radius → tangent
Distance \(<\) radius → secant
Distance \(>\) radius → no intersection

**Distance from point \((x_0,y_0)\) to line \(ax+by+c=0\):**
\[d=\frac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}}\]

---

### 28-68 min: Guided Core Set (40 min)

**Core Problem 1:** Find centre and radius of \(x^2+y^2+8x-2y-8=0\).

**Solution:**
\[(x+4)^2-16+(y-1)^2-1=8\]
\[(x+4)^2+(y-1)^2=25\]
Centre: \((-4,1)\), Radius: \(5\)

---

**Core Problem 2:** Write equation of circle with centre \((-1,3)\) passing through \((2,-1)\).

**Solution:**
\[r^2=(2-(-1))^2+(-1-3)^2=9+16=25\]
\[(x+1)^2+(y-3)^2=25\]

---

**Core Problem 3:** Find tangent to \(x^2+y^2=25\) at point \((3,4)\).

**Solution:**
- Centre \((0,0)\), point \((3,4)\)
- Radius gradient: \(\frac{4}{3}\)
- Tangent gradient: \(-\frac{3}{4}\)
- Equation: \(y-4=-\frac{3}{4}(x-3)\Rightarrow 3x+4y=25\)

---

**Core Problem 4:** Show line \(y=2x+1\) is tangent to circle \((x-1)^2+(y-3)^2=5\).

**Solution:**
Substitute: \((x-1)^2+(2x+1-3)^2=5\)
\[(x-1)^2+(2x-2)^2=5\Rightarrow(x-1)^2+4(x-1)^2=5\]
\[5(x-1)^2=5\Rightarrow(x-1)^2=1\Rightarrow x=0\text{ or }x=2\]

Two points! Not tangent. Let me recalculate...
Actually: two solutions means it's a secant, not tangent. The line intersects at two points.

---

**Core Problem 5:** Find where line \(y=x+2\) meets circle \(x^2+y^2=10\).

**Solution:**
\[x^2+(x+2)^2=10\Rightarrow x^2+x^2+4x+4=10\]
\[2x^2+4x-6=0\Rightarrow x^2+2x-3=0\Rightarrow(x+3)(x-1)=0\]
\(x=-3\): \(y=-1\); \(x=1\): \(y=3\)
Points: \((-3,-1)\) and \((1,3)\)

---

**Core Problem 6:** Find equation of circle with diameter endpoints \((2,3)\) and \((6,7)\).

**Solution:**
- Centre (midpoint): \((\frac{2+6}{2},\frac{3+7}{2})=(4,5)\)
- Radius (half distance): \(\frac{1}{2}\sqrt{(6-2)^2+(7-3)^2}=\frac{1}{2}\sqrt{32}=2\sqrt{2}\)
- \(r^2=8\)
- Equation: \((x-4)^2+(y-5)^2=8\)

---

**Core Problem 7:** Find tangent to circle \((x+2)^2+(y-1)^2=13\) at point \((1,3)\).

**Solution:**
- Centre \((-2,1)\), point \((1,3)\)
- Radius gradient: \(\frac{3-1}{1-(-2)}=\frac{2}{3}\)
- Tangent gradient: \(-\frac{3}{2}\)
- Equation: \(y-3=-\frac{3}{2}(x-1)\Rightarrow 2y-6=-3x+3\Rightarrow 3x+2y=9\)

---

**Core Problem 8:** Determine if line \(3x+4y=25\) is tangent, secant, or misses circle \(x^2+y^2=25\).

**Solution:**
Distance from \((0,0)\) to line: \(d=\frac{|25|}{\sqrt{9+16}}=\frac{25}{5}=5=r\)
Since \(d=r\), the line is **tangent**.

---

**Core Problem 9:** Find \(k\) such that \(y=kx+3\) is tangent to \(x^2+y^2=9\).

**Solution:**
Substitute: \(x^2+(kx+3)^2=9\Rightarrow x^2+k^2x^2+6kx+9=9\)
\[(1+k^2)x^2+6kx=0\Rightarrow x[(1+k^2)x+6k]=0\]

One solution at \(x=0\) always. For tangent (only one solution), need the other factor to give same point:
\[(1+k^2)x+6k=0\Rightarrow x=-\frac{6k}{1+k^2}=0\Rightarrow k=0\]

When \(k=0\): \(y=3\), tangent at \((0,3)\).

**Answer:** \(k=0\)

---

**Core Problem 10:** Find the length of tangent from point \((6,8)\) to circle \(x^2+y^2=25\).

**Solution:**
Distance from point to centre: \(d=\sqrt{36+64}=10\)
Radius: \(r=5\)
Tangent length: \(\sqrt{d^2-r^2}=\sqrt{100-25}=\sqrt{75}=5\sqrt{3}\)

---

### 68-83 min: Challenge Block (15 min)

**Challenge 1:** Find equations of tangents from point \((5,5)\) to circle \(x^2+y^2=16\).

**Method:**
Point is outside (distance \(\sqrt{50}>4\)).
Tangent lines have form: \(y-5=m(x-5)\) or \(y=mx+(5-5m)\)
Substitute into circle and set discriminant = 0 for tangency...

\[x^2+(mx+5-5m)^2=16\]
\[(1+m^2)x^2+2m(5-5m)x+(5-5m)^2-16=0\]

Discriminant = 0 for tangency...
After algebra: \(9m^2-50m+9=0\Rightarrow(9m-1)(m-9)=0\)

\(m=\frac{1}{9}\) or \(m=9\)

Tangents: \(y-5=\frac{1}{9}(x-5)\) and \(y-5=9(x-5)\)

---

**Challenge 2:** Find equation of circle through points \((0,0), (4,0), (0,6)\).

**Method:**
General form: \(x^2+y^2+Dx+Ey+F=0\)
- \((0,0)\): \(F=0\)
- \((4,0)\): \(16+4D=0\Rightarrow D=-4\)
- \((0,6)\): \(36+6E=0\Rightarrow E=-6\)

Equation: \(x^2+y^2-4x-6y=0\) or \((x-2)^2+(y-3)^2=13\)

**Answer:** Centre \((2,3)\), radius \(\sqrt{13}\)

---

**Challenge 3:** Show that for any point \(P\) outside circle, tangent lengths to circle are equal.

**Method:**
Use power of a point theorem or coordinate geometry with two tangent equations showing equal lengths.

---

### 83-98 min: Timed ATAR-Style Sprint (15 min)

**Sprint 1:** Find centre and radius of \(x^2+y^2-6x+8y=0\).

**Sprint 2:** Find tangent to \(x^2+y^2=13\) at point \((2,3)\).

**Sprint 3:** Find intersection of line \(y=x+1\) with circle \((x-2)^2+(y-1)^2=10\).

---

### Sprint Solutions

**Sprint 1:**
\[(x-3)^2-9+(y+4)^2-16=0\Rightarrow(x-3)^2+(y+4)^2=25\]
Centre: \((3,-4)\), Radius: \(5\)

**Sprint 2:**
Radius gradient: \(\frac{3}{2}\), tangent gradient: \(-\frac{2}{3}\)
\[y-3=-\frac{2}{3}(x-2)\Rightarrow 2x+3y=13\]

**Sprint 3:**
\[(x-2)^2+(x+1-1)^2=10\Rightarrow(x-2)^2+x^2=10\]
\[x^2-4x+4+x^2=10\Rightarrow 2x^2-4x-6=0\Rightarrow x^2-2x-3=0\]
\[(x-3)(x+1)=0\Rightarrow x=3\text{ or }x=-1\]
Points: \((3,4)\) and \((-1,0)\)

---

### 98-100 min: Exit Commitment
- State standard circle equation and identify each parameter.
- Write the tangent gradient relationship to radius.
- Commit to: always check if point lies on circle before finding tangent.

---

## Homework

### Core
1. Find centre/radius: \(x^2+y^2+4x-6y-3=0\)
2. Find tangent to \((x-1)^2+(y+2)^2=20\) at point \((3,2)\)
3. Find where \(y=2x-3\) meets \(x^2+y^2=9\)
4. Write circle equation with centre \((2,-1)\), radius 3
5. Find \(k\) such that \(y=x+k\) is tangent to \(x^2+y^2=8\)

### Extension
6. Find tangent lines from \((6,8)\) to \(x^2+y^2=25\)
7. Find circle through \((1,1), (3,5), (5,-1)\)
8. Prove perpendicular from centre to chord bisects the chord

---

## Teacher Diagnostic Notes

Track after Lesson 17:
- `CF` (Circle form conversion)
- `CT` (Centre/radius extraction)
- `TA` (Tangent equation finding)
- `LC` (Line-circle intersection)
- `DI` (Distance application)
- `GE` (Geometric interpretation)

Intervention rules:
- Sign errors in centre coordinates > 20%: explicit \(x-h, y-k\) reminder
- Tangent gradient errors: re-teach perpendicularity with gradient product = -1
- Intersection errors: emphasize discriminant check after substitution

---

## Strand Links
- `CG` (Coordinate Geometry): circles, distances, lines
- `FG` (Functions and Graphs): curve analysis
