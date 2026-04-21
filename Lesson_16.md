# Lesson 16 (Elite Track)

## Program Stage
- Year: 10 (accelerated stream)
- Term: 2
- Week: 2
- Session: Lesson 16
- Duration: 100 minutes

## Lesson Title
Function Analysis: Domains, Piecewise Logic, and Inverse Conditions

## Lesson Purpose
Master rigorous domain and range analysis, develop systematic piecewise function evaluation, and establish precise inverse function procedures with verification protocols.

## Learning Intentions
By the end of this lesson, the student will:
1. Determine domain and range for complex functions with multiple restrictions.
2. Evaluate piecewise functions accurately and test continuity at boundaries.
3. Find inverse functions with proper domain restrictions when needed.
4. Verify inverse relationships through composition testing.

## Success Criteria
- Core set: `>= 85%`
- Challenge set: `>= 70%`
- Timed sprint: complete in 15 min with `<= 1` domain/range error
- Inverse verification: all inverses checked by composition

---

## Minute-by-Minute Flow (100 min)

### 0-8 min: Retrieval Warm-Up
1. Find domain of \(f(x)=\frac{1}{x-2}\)
2. Evaluate: \(f(3)\) where \(f(x)=\begin{cases}x^2 & x<2\\3x-1 & x\ge 2\end{cases}\)
3. Find inverse of \(f(x)=3x+4\)
4. Is \(f(x)=x^2\) one-to-one? Explain.
5. Find range of \(f(x)=x^2+3\) for \(x\in[-2,2]\)

**Answers:**
1. \(x\neq 2\) or \((-\infty,2)\cup(2,\infty)\)
2. \(3(3)-1=8\) (use second branch)
3. \(f^{-1}(x)=\frac{x-4}{3}\)
4. No (fails horizontal line test, both \(x=2\) and \(x=-2\) give 4)
5. \([3,7]\)

### 8-28 min: Explicit Teaching Block

#### Focus A: Domain and Range Analysis

**Definition - Domain:** The set of all valid input values (\(x\)-values) for which the function is defined.

**Definition - Range:** The set of all possible output values (\(y\)-values) produced by the function.

**Domain Restrictions (Systematic Checklist):**
1. **Denominator:** Cannot equal zero
2. **Even roots:** Radicand must be \(\ge 0\)
3. **Logarithms:** Argument must be \(> 0\)
4. **Real-world constraints:** Time \(\ge 0\), length \(> 0\), etc.

**Range Finding Strategy:**
1. Analyze function behavior (turning points, asymptotes)
2. Solve \(y=f(x)\) for possible \(y\) values
3. Consider domain restrictions on outputs

**Worked Example:** Find domain and range of \(f(x)=\sqrt{x-1}+3\)

**Solution:**
- Domain: \(x-1\ge 0\Rightarrow x\ge 1\), so \([1,\infty)\)
- Range: \(\sqrt{x-1}\ge 0\Rightarrow \sqrt{x-1}+3\ge 3\), so \([3,\infty)\)

#### Focus B: Piecewise Functions

**Definition:** A function defined by different expressions on different intervals.

**Evaluation Protocol:**
1. Identify which interval contains the input value
2. Select the corresponding expression
3. Substitute and evaluate
4. **At boundaries:** Check which inequality includes the endpoint

**Continuity Test at Boundary \(x=a\):**
1. Left-hand limit: \(\lim_{x\to a^-}f(x)\)
2. Right-hand limit: \(\lim_{x\to a^+}f(x)\)
3. Function value: \(f(a)\)
4. **Continuous if:** All three are equal

**Worked Example:** For \(f(x)=\begin{cases}x+2 & x<1\\kx-1 & x\ge 1\end{cases}\), find \(k\) for continuity.

**Solution:**
- Left limit at \(x=1\): \(1+2=3\)
- Right limit: \(k(1)-1=k-1\)
- For continuity: \(k-1=3\Rightarrow k=4\)

#### Focus C: Inverse Functions

**Definition:** \(f^{-1}\) reverses \(f\). If \(f(a)=b\), then \(f^{-1}(b)=a\).

**Existence Condition:** \(f\) must be **one-to-one** (passes horizontal line test).

**Finding Inverse - Systematic Method:**
1. Write \(y=f(x)\)
2. Swap \(x\) and \(y\)
3. Solve for \(y\) in terms of \(x\)
4. Write \(f^{-1}(x)=\ldots\)
5. **State domain restriction** if original wasn't one-to-one
6. **Verify:** \(f(f^{-1}(x))=x\) and \(f^{-1}(f(x))=x\)

**Worked Example:** Find inverse of \(f(x)=\frac{2}{x-1}\) for \(x>1\).

**Solution:**
\[y=\frac{2}{x-1}\Rightarrow x-1=\frac{2}{y}\Rightarrow x=1+\frac{2}{y}\]
\[f^{-1}(x)=1+\frac{2}{x}\]

Domain of \(f^{-1}\): \(x>0\) (range of original)

**Verification:**
\[f(f^{-1}(x))=f(1+\frac{2}{x})=\frac{2}{(1+\frac{2}{x})-1}=\frac{2}{\frac{2}{x}}=x\quad\checkmark\]

---

### 28-68 min: Guided Core Set (40 min)

**Core Problem 1:** Find domain of \(f(x)=\frac{\sqrt{x+3}}{x-2}\)

**Solution:**
- Numerator: \(x+3\ge 0\Rightarrow x\ge -3\)
- Denominator: \(x-2\neq 0\Rightarrow x\neq 2\)
- Domain: \([-3,2)\cup(2,\infty)\)

---

**Core Problem 2:** Find range of \(f(x)=x^2-4x+5\).

**Solution:**
Complete the square: \(f(x)=(x-2)^2+1\ge 1\)
Range: \([1,\infty)\)

---

**Core Problem 3:** Evaluate \(f(-1), f(2), f(4)\) for:
\[f(x)=\begin{cases}2x+1 & x<2\\x^2-3 & 2\le x<4\\5 & x\ge 4\end{cases}\]

**Solution:**
- \(f(-1)\): use first branch, \(2(-1)+1=-1\)
- \(f(2)\): use second branch, \(2^2-3=1\)
- \(f(4)\): use third branch, \(5\)

---

**Core Problem 4:** Find \(k\) such that this function is continuous at \(x=2\):
\[f(x)=\begin{cases}x^2+k & x<2\\3x-1 & x\ge 2\end{cases}\]

**Solution:**
- Left: \(2^2+k=4+k\)
- Right: \(3(2)-1=5\)
- Continuous: \(4+k=5\Rightarrow k=1\)

---

**Core Problem 5:** Find inverse of \(f(x)=2x-6\) and verify.

**Solution:**
\[y=2x-6\Rightarrow x=\frac{y+6}{2}\Rightarrow f^{-1}(x)=\frac{x+6}{2}\]

Verification:
\[f(f^{-1}(x))=2(\frac{x+6}{2})-6=x+6-6=x\quad\checkmark\]

---

**Core Problem 6:** Explain why \(f(x)=x^2-2x\) is not one-to-one on \(\mathbb{R}\), then find inverse for \(x\ge 1\).

**Solution:**
\(f(0)=0\) and \(f(2)=0\), so not one-to-one.

For \(x\ge 1\): \(y=x^2-2x=(x-1)^2-1\Rightarrow (x-1)^2=y+1\Rightarrow x=1+\sqrt{y+1}\)

\[f^{-1}(x)=1+\sqrt{x+1},\quad x\ge -1\]

---

**Core Problem 7:** Find domain and range of \(f(x)=\ln(x-2)+1\).

**Solution:**
- Domain: \(x-2>0\Rightarrow x>2\), so \((2,\infty)\)
- Range: \(\ln(x-2)\in(-\infty,\infty)\), so adding 1: \((-\infty,\infty)\) or \(\mathbb{R}\)

---

**Core Problem 8:** For \(f(x)=\begin{cases}e^x & x<0\\1-x & 0\le x\le 1\\\sqrt{x-1} & x>1\end{cases}\), evaluate \(f(-1), f(0.5), f(5)\).

**Solution:**
- \(f(-1)=e^{-1}=\frac{1}{e}\)
- \(f(0.5)=1-0.5=0.5\)
- \(f(5)=\sqrt{5-1}=2\)

---

**Core Problem 9:** Find where \(f(x)=\frac{2x+1}{x-3}\) is undefined and state domain.

**Solution:**
Undefined when \(x-3=0\Rightarrow x=3\)
Domain: \((-\infty,3)\cup(3,\infty)\)

---

**Core Problem 10:** Find range of \(f(x)=\frac{1}{x-2}+3\) for \(x>2\).

**Solution:**
For \(x>2\): \(x-2>0\Rightarrow \frac{1}{x-2}>0\Rightarrow \frac{1}{x-2}+3>3\)
Range: \((3,\infty)\)

---

### 68-83 min: Challenge Block (15 min)

**Challenge 1:** Find \(f^{-1}(x)\) for \(f(x)=\frac{2x-1}{x+3}\) and state its domain.

**Method:**
\[y=\frac{2x-1}{x+3}\Rightarrow y(x+3)=2x-1\Rightarrow yx+3y=2x-1\]
\[yx-2x=-1-3y\Rightarrow x(y-2)=-(1+3y)\Rightarrow x=\frac{1+3y}{2-y}\]

\[f^{-1}(x)=\frac{1+3x}{2-x},\quad x\neq 2\]

---

**Challenge 2:** Find all \(k\) such that \(f(x)=\begin{cases}x^2 & x\le k\\2x+1 & x>k\end{cases}\) is continuous.

**Method:**
At \(x=k\): left value \(k^2\), right value \(2k+1\)
\[k^2=2k+1\Rightarrow k^2-2k-1=0\Rightarrow k=1\pm\sqrt{2}\]

**Answer:** \(k=1+\sqrt{2}\) or \(k=1-\sqrt{2}\)

---

**Challenge 3:** Find domain of \(f(x)=\sqrt{\frac{x+1}{x-2}}\).

**Method:**
Need \(\frac{x+1}{x-2}\ge 0\) AND \(x\neq 2\)

Critical points: \(x=-1, 2\)
Sign analysis:
- \((-\infty,-1]\): \((-)/(-)=+\) ✓
- \((-1,2)\): \((+)/( -)=-\) ✗
- \((2,\infty)\): \((+)/(+)=+\) ✓

Domain: \((-\infty,-1]\cup(2,\infty)\)

---

### 83-98 min: Timed ATAR-Style Sprint (15 min)

**Sprint 1:** Find domain of \(f(x)=\sqrt{5-2x}\).

**Sprint 2:** For \(f(x)=\begin{cases}3x+2 & x<1\\x^2+k & x\ge 1\end{cases}\), find \(k\) for continuity.

**Sprint 3:** Find inverse of \(f(x)=\frac{x}{x+1}\) for \(x>-1\).

---

### Sprint Solutions

**Sprint 1:**
\[5-2x\ge 0\Rightarrow 2x\le 5\Rightarrow x\le\frac{5}{2}\]
Domain: \((-\infty,\frac{5}{2}]\)

**Sprint 2:**
Left at 1: \(3(1)+2=5\)
Right at 1: \(1+k\)
Continuous: \(1+k=5\Rightarrow k=4\)

**Sprint 3:**
\[y=\frac{x}{x+1}\Rightarrow y(x+1)=x\Rightarrow yx+y=x\Rightarrow y=x(1-y)\]
\[x=\frac{y}{1-y}\Rightarrow f^{-1}(x)=\frac{x}{1-x}\]
Domain of inverse: \(x<1\) (range of original)

---

### 98-100 min: Exit Commitment
- List the three main domain restriction types.
- State the continuity condition in your own words.
- Write the inverse verification check.

---

## Homework

### Core
1. Find domain: \(f(x)=\frac{\sqrt{x-1}}{x-3}\)
2. Find range: \(f(x)=(x-2)^2+4\) for \(x\in[0,4]\)
3. Find \(k\) for continuity: \(f(x)=\begin{cases}2x+k & x<3\\x^2-1 & x\ge 3\end{cases}\)
4. Find inverse: \(f(x)=4x+7\)
5. Evaluate \(f(0), f(2), f(5)\) for: \(f(x)=\begin{cases}e^{x-1} & x<2\\\ln x & 2\le x\le 5\\x-4 & x>5\end{cases}\)

### Extension
6. Find domain of \(f(x)=\sqrt{\frac{x-3}{x+2}}\)
7. Find inverse of \(f(x)=\frac{3x+1}{2x-1}\) and verify by composition
8. Find all \(a\) such that \(f(x)=\begin{cases}x^2+a & x\le 1\\2ax & x>1\end{cases}\) is continuous

---

## Teacher Diagnostic Notes

Track after Lesson 16:
- `DO` (Domain analysis accuracy)
- `RA` (Range determination)
- `PI` (Piecewise evaluation)
- `CO` (Continuity testing)
- `IN` (Inverse function finding)
- `VE` (Verification discipline)

Intervention rules:
- Domain errors > 30%: systematic checklist protocol mandatory
- Piecewise confusion: explicit boundary marking drill
- Inverse errors: re-teach swap-and-solve method with composition check

---

## Strand Links
- `FG` (Functions and Graphs): domains, ranges, inverses
- `NA` (Number and Algebra): equation solving, inequality analysis
