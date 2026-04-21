# Lesson 02 (Elite Track)

## Program Stage
- Year: 10 (accelerated stream)
- Term: 1
- Week: 1
- Session: Lesson 2
- Duration: 100 minutes

## Lesson Title
Algebraic Structure, Identities, and Rigorous Manipulation

## Lesson Purpose
Move from routine algebra to elite algebraic thinking: detect structure quickly, choose efficient methods, and justify every transformation.

## Learning Intentions
By the end of this lesson, the student will:
1. Simplify complex expressions through structure-first strategy.
2. Use identities and restrictions correctly.
3. Solve absolute-value and rational inequalities with sign logic.
4. Write concise proof-quality arguments for divisibility statements.

## Success Criteria
- Core set: `>= 85%`
- Challenge set: `>= 70%`
- Timed mini-test: complete in time with <=1 avoidable algebra error
- Written reasoning: all domain restrictions and sign-chart logic explicitly stated

---

## Minute-by-Minute Flow (100 min)

### 0-10 min: Retrieval Warm-Up
1. \(\frac{1}{\sqrt5-2}\)
2. Solve \(|2x-5|<7\)
3. Factorize \(2x^3-8x\)
4. If \(x+\frac1x=4\), form a quadratic in \(x\)
5. One-line proof why \(n(n+1)\) is even

Answers:
1. \(\sqrt5+2\)
2. \(-1<x<6\)
3. \(2x(x-2)(x+2)\)
4. \(x^2-4x+1=0\)
5. consecutive integers include one even

### 10-28 min: Explicit Teaching

#### Focus A: Structural Simplification
- Prioritize factorization over expansion.
- Cancel only after domain restrictions are recorded.

Example:
\[
\frac{x^2-1}{x-1}-\frac{x^2-4}{x-2}
=(x+1)-(x+2)=-1,\quad x\neq1,2
\]

#### Focus B: Identity Selection
- \(a^2-b^2\), \((a\pm b)^2\), grouping strategy

Example:
\[
(2x+3)^2-(2x-3)^2 = [(2x+3)-(2x-3)][(2x+3)+(2x-3)] = 6\cdot 4x = 24x
\]

#### Focus C: Rational/Absolute Inequality Logic
- Critical points from numerator, denominator, and modulus boundaries.
- Use sign chart and interval testing.

---

## Guided Core Set (25 min)

1. Simplify fully:
\[
\frac{2x^2-8}{x^2-4}\cdot\frac{x+2}{x},\quad x\neq0,\pm2
\]

2. Simplify and state restrictions:
\[
\frac{x^2-9}{x^2-6x+9}\div\frac{x+3}{x-3}
\]

3. Solve:
\[
|3x-4|\le 8
\]

4. Solve:
\[
\frac{x-1}{x+2}\ge0
\]

5. If \(f(x)=x^2-4x+7\), find \(f(x+1)-f(x)\).

6. Prove \(n^3-n\) is divisible by 6 for all integers \(n\).

### Core Solutions
1. \(2\frac{x+2}{x}\)
2. \(\frac{(x-3)(x+3)}{(x-3)^2}\cdot\frac{x-3}{x+3}=1\), restrictions: \(x\neq3,-3\)
3. \(-\frac{4}{3}\le x\le4\)
4. \(( -\infty,-2)\cup[1,\infty)\)
5. \(2x-3\)
6. \(n^3-n=n(n-1)(n+1)\): one factor multiple of 3, at least one even -> multiple of 6

---

## Singapore-Style Non-Routine Block (15 min)

### Problem 1
Find all integers \(n\) such that \(n^2+2n\) is divisible by 3.

Method (mod 3): test residues 0,1,2.
- 0 -> 0
- 1 -> 1*0=0
- 2 -> 2*1=2

Answer: \(n\equiv0\) or \(1\pmod3\).

### Problem 2
Without full expansion, evaluate:
\[
\frac{101^2-99^2}{202}
\]
\[
\frac{(101-99)(101+99)}{202}=\frac{2\cdot200}{202}=\frac{200}{101}
\]

### Problem 3
If \(x-\frac1x=3\), find \(x^2+\frac1{x^2}\).
\[
(x-1/x)^2=x^2-2+1/x^2=9 \Rightarrow x^2+1/x^2=11
\]

---

## Timed ATAR-Style Mini Test (15 min)

1. Solve exactly:
\[
x+\frac1x=3,\;x\ne0
\]

2. Let \(p(x)=x^3-4x^2+ax+6\). Given \(x=2\) is a root, find \(a\).

3. Show for odd integer \(k\), \(k^2\equiv1\pmod8\).

### Solutions
1. \(x^2-3x+1=0\Rightarrow x=\frac{3\pm\sqrt5}{2}\)
2. \(8-16+2a+6=0\Rightarrow a=1\)
3. \(k=2m+1\Rightarrow k^2=4m(m+1)+1\), \(m(m+1)\) even -> term multiple of 8

---

## Exit Ticket (10 min)

1. Simplify:
\[
\frac{x^2-5x+6}{x^2-9}\div\frac{x-2}{x+3}
\]
2. Solve:
\[
|3x+1|\ge7
\]
3. One clean 3-line proof that \(n(n-1)\) is always even.

### Answers
1. 1, with restrictions \(x\ne\pm3,2\)
2. \(x\ge2\) or \(x\le-8/3\)
3. consecutive integers argument

---

## Homework

### Core
1. \(\frac{x^2-16}{x^2-8x+16}\cdot\frac{x-4}{x+4}\)
2. Solve \(|2x+5|>9\)
3. Solve \(\frac{2x-3}{x+1}<0\)
4. If \(x+1/x=5\), find \(x^2+1/x^2\)
5. Prove \(n^2-n\) divisible by 2.

### Extension
6. If \(x-1/x=4\), find \(x^3-1/x^3\)
7. Show \((a+b)^2\ge 4ab\) for real \(a,b\)

---

## Teacher Diagnostic Notes
Track after lesson:
- `AS` (Algebraic structure recognition)
- `ID` (Identity selection accuracy)
- `IN` (Inequality sign-chart reliability)
- `PR` (Proof coherence)
- `TM` (Time discipline)

Intervention trigger:
- any strand <75 -> targeted repair in Lesson 3 starter block.
