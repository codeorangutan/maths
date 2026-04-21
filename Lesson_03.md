# Lesson 03 (Elite Track)

## Program Stage
- Year: 10 (accelerated stream)
- Term: 1
- Week: 1
- Session: Lesson 3
- Duration: 100 minutes

## Lesson Title
Linear-Quadratic Mastery: Roots, Discriminant, Graph Logic, and Optimization

## Lesson Purpose
Develop elite command of quadratic behavior for high-level problem solving and future calculus readiness.

## Learning Intentions
By the end of this lesson, the student will:
1. Move flexibly across quadratic forms (standard/factored/vertex).
2. Use discriminant to classify roots and parameter constraints.
3. Solve linear-quadratic systems analytically and graphically.
4. Complete optimization and modelling tasks with full reasoning.

## Success Criteria
- Core section: `>= 85%`
- Challenge section: `>= 70%`
- Timed section complete with valid strategy and check
- All graph claims tied to algebraic evidence

---

## Minute-by-Minute Flow (100 min)

### 0-10 min: Retrieval Warm-Up
1. Factorize: \(x^2-5x+6\)
2. Solve: \(\frac{x-1}{x+2}\ge0\)
3. If \(x+\frac1x=3\), find exact \(x\)
4. Expand efficiently: \((2x+3)^2-(2x-3)^2\)
5. State discriminant formula for \(ax^2+bx+c=0\)

Answers:
1. \((x-2)(x-3)\)
2. \(( -\infty,-2)\cup[1,\infty)\)
3. \(\frac{3\pm\sqrt5}{2}\)
4. \(24x\)
5. \(\Delta=b^2-4ac\)

---

## Explicit Teaching (22 min)

### Focus A: Three forms, one parabola
- Standard: \(ax^2+bx+c\)
- Factored: \(a(x-r_1)(x-r_2)\)
- Vertex: \(a(x-h)^2+k\)

Key links:
- axis \(x=-\frac{b}{2a}\)
- vertex \((h,k)\)
- discriminant controls number of real roots

### Focus B: Discriminant as decision tool
- \(\Delta>0\): two distinct real roots
- \(\Delta=0\): repeated real root
- \(\Delta<0\): no real roots

### Focus C: Optimization structure
For \(a>0\), minimum at vertex; for \(a<0\), maximum.

Worked example:
\[
y=2x^2-12x+7=2(x-3)^2-11
\]
Minimum value \(-11\) at \(x=3\).

---

## Guided Core Set (25 min)

1. Convert to vertex form and state turning point:
\[
y=x^2-6x+5
\]

2. Solve by two methods and compare:
\[
x^2-7x+12=0
\]

3. For \(x^2+(k-1)x+9=0\), find all \(k\) such that roots are real.

4. Solve system:
\[
y=x^2-4x+1,\quad y=2x-3
\]

5. Find minimum value of:
\[
A(x)=x^2-10x+41
\]

6. A rectangle has perimeter 40 cm.
   Express area as function of one side and find maximum area.

### Core Solutions
1. \(y=(x-3)^2-4\), TP \((3,-4)\)
2. \((x-3)(x-4)=0\Rightarrow x=3,4\); quadratic formula confirms
3. \((k-1)^2-36\ge0\Rightarrow |k-1|\ge6\Rightarrow k\le-5\) or \(k\ge7\)
4. \(x^2-4x+1=2x-3\Rightarrow x^2-6x+4=0\Rightarrow x=3\pm\sqrt5\)
   Then \(y=2x-3=3\pm2\sqrt5\)
5. \(A=(x-5)^2+16\), minimum 16 at \(x=5\)
6. Let sides \(x\) and \(20-x\), \(A=x(20-x)= -x^2+20x\), maximum at \(x=10\), area 100 cm^2

---

## Singapore-Style Non-Routine Block (15 min)

### Problem 1 (parameterized intersection)
Find all values of \(m\) for which line \(y=mx+1\) touches parabola \(y=x^2-2x+5\).

Set equal:
\[
x^2-2x+5=mx+1 \Rightarrow x^2-(m+2)x+4=0
\]
Tangency: discriminant = 0:
\[
(m+2)^2-16=0\Rightarrow m+2=\pm4\Rightarrow m=2\text{ or }-6
\]

### Problem 2 (hidden structure)
If roots of \(x^2-px+q=0\) are \(a,b\), and \(a+b=6\), \(ab=5\), find equation and verify roots.

Equation: \(x^2-6x+5=0\), roots \(1,5\).

### Problem 3 (proof style)
Show that if \(x^2-4x+k=0\) has equal roots, then the root equals 2 and find \(k\).

Equal roots -> discriminant zero:
\[
(-4)^2-4(1)(k)=0\Rightarrow 16-4k=0\Rightarrow k=4
\]
Equation: \((x-2)^2=0\), repeated root \(x=2\).

---

## Timed ATAR-Style Mini Test (15 min)

1. For \(2x^2+(m-3)x+5=0\), find values of \(m\) so equation has no real roots.

2. Find equation of parabola with roots \(-1\) and 4 passing through \((2,-12)\).

3. Minimize
\[
E(x)=3x^2-12x+20
\]
and state minimum value and x-value.

### Solutions
1. \(\Delta<0\): \((m-3)^2-40<0\Rightarrow |m-3|<\sqrt{40}=2\sqrt{10}\)
   so \(3-2\sqrt{10}<m<3+2\sqrt{10}\)
2. \(y=a(x+1)(x-4)\), use \((2,-12)\):
\(-12=a(3)(-2)=-6a\Rightarrow a=2\)
\(y=2(x+1)(x-4)=2x^2-6x-8\)
3. \(E=3(x-2)^2+8\), minimum 8 at \(x=2\)

---

## Exit Ticket (10 min)

1. Determine \(k\) so \(x^2-2kx+k+3=0\) has exactly one real root.
2. Solve \(x^2-2x-8=0\).
3. One sentence: why is discriminant useful in graphing without plotting?

### Answers
1. \(\Delta=0\): \(( -2k)^2-4(1)(k+3)=0\Rightarrow4k^2-4k-12=0\Rightarrow k^2-k-3=0\)
\(k=\frac{1\pm\sqrt{13}}{2}\)
2. \((x-4)(x+2)=0\Rightarrow x=4,-2\)
3. It predicts number/type of x-intercepts instantly.

---

## Homework

### Core
1. Convert \(y=2x^2+8x-6\) to vertex form.
2. Find all \(m\) so \(x^2+mx+m+6=0\) has two distinct real roots.
3. Solve system: \(y=x^2+1\), \(y=3x-1\)
4. A projectile height model: \(h(t)=-5t^2+20t+3\). Find max height and time.

### Extension
5. If roots of \(x^2-sx+p=0\) differ by 4 and sum to 10, find equation.
6. Prove for \(a>0\), minimum of \(ax^2+bx+c\) is \(c-\frac{b^2}{4a}\).

---

## Teacher Diagnostic Notes
Track:
- `QF` quadratic form conversion
- `DS` discriminant strategy
- `SY` system solving quality
- `OP` optimization modelling
- `WR` written reasoning

Interventions before Lesson 4:
- If `DS < 75`: add focused discriminant drill set.
- If `SY < 75`: revisit substitution and algebraic accuracy.
- If `WR < 70`: require structured justification templates.
