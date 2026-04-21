# Lesson 13 (Elite Track)

## Program Stage
- Year: 10 (accelerated stream)
- Term: 2
- Week: 1
- Session: Lesson 13
- Duration: 100 minutes

## Lesson Title
Polynomial Identities, Remainder Theorem, and Inequality Control

## Lesson Purpose
Build fluent control of polynomial algebra through strategic identity use, remainder theorem applications, and rigorous inequality solving with full interval analysis.

## Learning Intentions
By the end of this lesson, the student will:
1. Apply polynomial identities strategically to simplify complex expressions.
2. Use the Remainder and Factor Theorems to extract roots and factor polynomials.
3. Solve polynomial and rational inequalities with complete sign-chart analysis.
4. Write proof-quality justifications for divisibility and identity verification.

## Success Criteria
- Core set: `>= 85%`
- Challenge set: `>= 70%`
- Timed sprint: complete in 15 min with `<= 1` procedural error
- Sign charts: all critical points identified, all intervals tested, notation exact

---

## Minute-by-Minute Flow (100 min)

### 0-8 min: Retrieval Warm-Up
1. Factor: \(x^3-8\)
2. Expand: \((2x-3)^3\)
3. If \(x+\frac1x=5\), find \(x^2+\frac1{x^2}\)
4. Remainder when \(x^3+2x-1\) divided by \(x-1\)?
5. Solve: \((x-2)(x+3)>0\)

**Answers:**
1. \((x-2)(x^2+2x+4)\)
2. \(8x^3-36x^2+54x-27\)
3. \(23\)
4. \(2\)
5. \((-\infty,-3)\cup(2,\infty)\)

### 8-28 min: Explicit Teaching Block

#### Focus A: Polynomial Identities

**Definition:** A polynomial identity is an equation that holds for all values of the variable.

**Essential Identities:**
- Difference of squares: \(a^2-b^2=(a-b)(a+b)\)
- Perfect squares: \((a\pm b)^2=a^2\pm 2ab+b^2\)
- Sum/difference of cubes:
  - \(a^3+b^3=(a+b)(a^2-ab+b^2)\)
  - \(a^3-b^3=(a-b)(a^2+ab+b^2)\)

**Reciprocal Substitution Pattern:**
If \(x+\frac{1}{x}=k\), then:
- \(x^2+\frac{1}{x^2}=k^2-2\)
- \(x^3+\frac{1}{x^3}=k^3-3k\)

#### Focus B: Remainder and Factor Theorems

**Remainder Theorem:** When polynomial \(P(x)\) is divided by \((x-a)\), the remainder is \(P(a)\).

**Factor Theorem:** \((x-a)\) is a factor of \(P(x)\) iff \(P(a)=0\).

**Worked Example:**
Find remainder when \(P(x)=2x^3-5x^2+3x-7\) divided by \((x-2)\).

\[P(2)=2(8)-5(4)+3(2)-7=16-20+6-7=-5\]

Remainder is \(-5\).

#### Focus C: Polynomial Inequality Method

**Systematic Approach:**
1. Move all terms to LHS, factor completely
2. Identify critical points (zeros and undefined values)
3. Plot on number line
4. Test sign in each interval
5. Select intervals matching inequality
6. Include/exclude endpoints based on \(\le\) vs \(<\)

**Worked Example:** Solve \(\frac{x-1}{x+2}\le 0\)

- Critical points: \(x=1\) (zero), \(x=-2\) (undefined)
- Intervals: \((-\infty,-2)\), \((-2,1]\), \((1,\infty)\)
- Test signs: \((-)/(-)=+\), \((-)/(+)=-\), \((+)/(+)=+\)
- Solution: \((-2,1]\)

---

### 28-68 min: Guided Core Set (40 min)

**Core Problem 1:** Factor completely using appropriate identity:
\[(3x+2)^2-(2x-1)^2\]

**Solution:**
\[=[(3x+2)-(2x-1)][(3x+2)+(2x-1)]=(x+3)(5x+1)\]

---

**Core Problem 2:** Simplify and state restrictions:
\[\frac{x^3-27}{x^2-9}\cdot\frac{x+3}{x^2+3x+9}\]

**Solution:**
\[=\frac{(x-3)(x^2+3x+9)}{(x-3)(x+3)}\cdot\frac{x+3}{x^2+3x+9}=1,\quad x\neq 3,-3\]

---

**Core Problem 3:** Find remainder when \(x^4-3x^2+5x-2\) divided by \((x+2)\).

**Solution:**
\[P(-2)=16-12-10-2=-8\]
Remainder: \(-8\)

---

**Core Problem 4:** Find value of \(k\) such that \((x-3)\) is a factor of \(x^3-2x^2+kx+6\).

**Solution:**
\[P(3)=27-18+3k+6=0\Rightarrow 3k=-15\Rightarrow k=-5\]

---

**Core Problem 5:** Solve with full sign chart: \((x-1)(x+2)(x-3)\le 0\)

**Solution:**
- Critical points: \(-2,1,3\)
- Sign pattern: \(-,+,-,+\)
- Solution: \((-\infty,-2]\cup[1,3]\)

---

**Core Problem 6:** Solve: \(\frac{x+1}{x-2}\ge 0\)

**Solution:**
- Critical: \(x=-1,2\) (undefined at 2)
- Test: \((-\infty,-1]:+\), \((-1,2):-\), \((2,\infty):+\)
- Solution: \((-\infty,-1]\cup(2,\infty)\)

---

**Core Problem 7:** If \(x-\frac{1}{x}=4\), find \(x^2+\frac{1}{x^2}\).

**Solution:**
\[\left(x-\frac{1}{x}\right)^2=x^2-2+\frac{1}{x^2}=16\Rightarrow x^2+\frac{1}{x^2}=18\]

---

**Core Problem 8:** Prove \(n^3-n\) is divisible by 6 for all integers \(n\).

**Solution:**
\[n^3-n=n(n-1)(n+1)\]
Three consecutive integers contain a multiple of 2 and a multiple of 3, hence divisible by 6.

---

**Core Problem 9:** Factor \(8x^3+27y^3\).

**Solution:**
\[=(2x+3y)(4x^2-6xy+9y^2)\]

---

**Core Problem 10:** Given \(P(x)=x^3+ax^2+bx-6\) has factors \((x-1)\) and \((x+2)\), find \(a\) and \(b\).

**Solution:**
\[P(1)=1+a+b-6=0\Rightarrow a+b=5\]
\[P(-2)=-8+4a-2b-6=0\Rightarrow 4a-2b=14\Rightarrow 2a-b=7\]
Adding: \(3a=12\Rightarrow a=4\), then \(b=1\)

---

### 68-83 min: Challenge Block (15 min)

**Challenge 1:** Find all integers \(n\) such that \(n^2+5\) is divisible by \(n+1\).

**Method:** By remainder theorem, \(P(-1)=1+5=6\) must equal 0 for divisibility... so check factors of 6.
Actually: \(n^2+5=(n+1)(n-1)+6\), so \(n+1\) divides 6.
\(n+1\in\{\pm1,\pm2,\pm3,\pm6\}\Rightarrow n\in\{0,-2,1,-3,2,-4,5,-7\}\)

---

**Challenge 2:** If \(x+\frac{1}{x}=3\), find \(x^5+\frac{1}{x^5}\).

**Method:** Build powers:
- \(x^2+\frac{1}{x^2}=9-2=7\)
- \(x^3+\frac{1}{x^3}=27-9=18\)
- \(x^5+\frac{1}{x^5}=(x^2+\frac{1}{x^2})(x^3+\frac{1}{x^3})-(x+\frac{1}{x})=7\cdot18-3=123\)

**Answer:** \(123\)

---

**Challenge 3:** Solve: \(\frac{x^2-4}{x^2-1}\ge 0\)

**Solution:**
- Factor: \(\frac{(x-2)(x+2)}{(x-1)(x+1)}\ge 0\)
- Critical: \(-2,-1,1,2\) (undefined at \(\pm1\))
- Sign analysis: \(+, -, +, -, +\)
- Solution: \((-\infty,-2]\cup(-1,1)\cup[2,\infty)\)

---

### 83-98 min: Timed ATAR-Style Sprint (15 min)

**Sprint 1:** Find the value of \(a\) such that \(x^3+ax+6\) is divisible by \((x+3)\).

**Sprint 2:** Solve: \(\frac{2x-3}{x+1}\le 0\)

**Sprint 3:** If \(x+\frac{1}{x}=4\), find \(x^3+\frac{1}{x^3}\).

---

### Sprint Solutions

**Sprint 1:**
\[P(-3)=-27-3a+6=0\Rightarrow -3a=21\Rightarrow a=-7\]

**Sprint 2:**
- Critical: \(x=\frac{3}{2}, -1\) (undefined at -1)
- Test intervals: solution \((-1, \frac{3}{2}]\)

**Sprint 3:**
\[x^3+\frac{1}{x^3}=4^3-3(4)=64-12=52\]

---

### 98-100 min: Exit Commitment
- State one identity used today and when to apply it.
- Write the remainder theorem in your own words.
- Commit to target: next lesson error rate on sign charts.

---

## Homework

### Core
1. Factor: \((2x+1)^3-(2x-1)^3\)
2. Find remainder when \(x^4-2x^3+5x-1\) divided by \((x-2)\)
3. Solve: \((x-2)(x+1)(x-3)<0\)
4. Solve: \(\frac{x}{x-2}\ge 3\) (Hint: bring to LHS first)
5. If \(x-\frac{1}{x}=5\), find \(x^2+\frac{1}{x^2}\)

### Extension
6. If \(x+\frac{1}{x}=5\), find \(x^4+\frac{1}{x^4}\)
7. Find all \(k\) such that \(x^3+kx^2-4x+3\) has \((x-1)\) as factor.
8. Prove \(n^5-n\) is divisible by 5 for all integers \(n\).

---

## Teacher Diagnostic Notes

Track after Lesson 13:
- `PI` (Polynomial identity recognition)
- `RT` (Remainder/Factor theorem application)
- `SC` (Sign chart accuracy)
- `IV` (Interval notation precision)
- `PR` (Proof structure quality)
- `TM` (Time management)

Intervention rules:
- Sign chart errors > 30%: assign 5 extra sign-chart drills before Lesson 14
- Identity recognition < 75%: review Lesson 02 identity block
- Remainder theorem errors: re-teach with explicit substitution protocol

---

## Strand Links
- `NA` (Number and Algebra): identities, divisibility proofs
- `FG` (Functions and Graphs): polynomial behavior, critical points
