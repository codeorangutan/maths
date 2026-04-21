# Lesson 15 (Elite Track)

## Program Stage
- Year: 10 (accelerated stream)
- Term: 2
- Week: 2
- Session: Lesson 15
- Duration: 100 minutes

## Lesson Title
Exponential and Logarithmic Modelling with Domain Discipline

## Lesson Purpose
Master exponential growth/decay modelling, solve logarithmic equations with rigorous domain verification, and interpret parameters in real-world contexts with precision.

## Learning Intentions
By the end of this lesson, the student will:
1. Solve exponential and logarithmic equations using index laws and log laws.
2. Apply change-of-base formula strategically for equation solving.
3. Model growth and decay scenarios with proper parameter interpretation.
4. Verify domain restrictions systematically for all logarithmic solutions.

## Success Criteria
- Core set: `>= 85%`
- Challenge set: `>= 70%`
- Timed sprint: complete in 15 min with `<= 1` domain error
- Domain checks: all log arguments verified positive in final answer

---

## Minute-by-Minute Flow (100 min)

### 0-8 min: Retrieval Warm-Up
1. Evaluate: \(\log_3 27\)
2. Solve: \(2^x=32\)
3. Simplify: \(\log_5 125 + \log_5 5\)
4. Write in exponential form: \(\log_2 x = 5\)
5. A culture doubles every 3 hours. Initial count 500. Find count after 9 hours.

**Answers:**
1. \(3\)
2. \(x=5\)
3. \(\log_5 625 = 4\)
4. \(x=2^5=32\)
5. \(500\cdot 2^3 = 4000\)

### 8-28 min: Explicit Teaching Block

#### Focus A: Exponential Forms and Laws

**Definition:** An exponential function has form \(f(x)=a\cdot b^x\) where \(b>0, b\neq 1\).

**Key Properties:**
- \(b^0=1\) for any \(b\neq 0\)
- \(b^{x+y}=b^x\cdot b^y\)
- \(b^{x-y}=\frac{b^x}{b^y}\)
- \((b^x)^y=b^{xy}\)

**Solving Strategy:**
1. Isolate the exponential term
2. Express both sides with same base if possible
3. Equate exponents: \(b^u=b^v \Rightarrow u=v\)
4. If bases differ, take logarithm of both sides

**Worked Example:** Solve \(3^{x+1}=27^{x-2}\)

**Solution:**
\[3^{x+1}=(3^3)^{x-2}=3^{3x-6}\]
\[x+1=3x-6\Rightarrow 2x=7\Rightarrow x=\frac{7}{2}\]

#### Focus B: Logarithm Definitions and Laws

**Definition:** \(\log_a b = c \iff a^c = b\) where \(a>0, a\neq 1, b>0\)

**Log Laws (must memorize):**
| Law | Statement |
|-----|-----------|
| Product | \(\log_a(MN)=\log_a M+\log_a N\) |
| Quotient | \(\log_a(M/N)=\log_a M-\log_a N\) |
| Power | \(\log_a(M^r)=r\log_a M\) |

**Change of Base:**
\[\log_a b=\frac{\log_c b}{\log_c a}\]

**Domain Restrictions:**
- \(\log_a b\) defined only when \(b>0\) and \(a>0, a\neq 1\)
- After solving, MUST check all original log arguments are positive

**Worked Example:** Solve \(\log_2(x+3)+\log_2(x-1)=3\)

**Solution:**
\[\log_2[(x+3)(x-1)]=3\]
\[(x+3)(x-1)=2^3=8\]
\[x^2+2x-3=8\Rightarrow x^2+2x-11=0\]
Using formula: \(x=\frac{-2\pm\sqrt{4+44}}{2}=\frac{-2\pm\sqrt{48}}{2}=-1\pm 2\sqrt{3}\)

**Domain Check:**
- For \(x=-1+2\sqrt{3}\approx 2.46\): \(x+3>0, x-1>0\) ✓
- For \(x=-1-2\sqrt{3}\approx -4.46\): \(x-1<0\) ✗

**Answer:** \(x=-1+2\sqrt{3}\)

#### Focus C: Growth and Decay Modelling

**Standard Models:**
- Discrete: \(N=N_0\cdot a^t\) where \(a\) is growth factor per unit time
- Continuous: \(N=N_0\cdot e^{kt}\) where \(k\) is continuous rate

**Parameter Interpretation:**
- \(N_0\): initial quantity at \(t=0\)
- \(a>1\) or \(k>0\): growth
- \(0<a<1\) or \(k<0\): decay
- Doubling time (growth): \(t_{double}=\frac{\ln 2}{k}\)
- Half-life (decay): \(t_{half}=\frac{\ln 2}{|k|}\)

---

### 28-68 min: Guided Core Set (40 min)

**Core Problem 1:** Solve: \(4^{x+1}=8^{x-1}\)

**Solution:**
\[(2^2)^{x+1}=(2^3)^{x-1}\Rightarrow 2^{2x+2}=2^{3x-3}\]
\[2x+2=3x-3\Rightarrow x=5\]

---

**Core Problem 2:** Solve: \(\log_3 x + \log_3(x+2)=1\)

**Solution:**
\[\log_3[x(x+2)]=1\Rightarrow x(x+2)=3\]
\[x^2+2x-3=0\Rightarrow(x+3)(x-1)=0\Rightarrow x=1\text{ or }x=-3\]

**Domain Check:** \(x=1\): \(\log_3 1=0\) and \(\log_3 3=1\) ✓
\(x=-3\): \(\log_3(-3)\) undefined ✗

**Answer:** \(x=1\)

---

**Core Problem 3:** Solve: \(5^{x-2}=7\) (give exact answer)

**Solution:**
\[x-2=\log_5 7\Rightarrow x=2+\log_5 7=2+\frac{\log 7}{\log 5}\]

---

**Core Problem 4:** Evaluate: \(\log_2 50 - \log_2 25 + \log_2 8\)

**Solution:**
\[=\log_2\frac{50}{25}+\log_2 8=\log_2 2 + \log_2 8=1+3=4\]

---

**Core Problem 5:** Solve: \(3\log_2 x = \log_2 64\)

**Solution:**
\[\log_2 x^3 = \log_2 64\Rightarrow x^3=64\Rightarrow x=4\]

**Domain Check:** \(x=4>0\) ✓

---

**Core Problem 6:** A population grows according to \(P=500\cdot e^{0.03t}\). Find population after 10 years.

**Solution:**
\[P=500\cdot e^{0.3}\approx 500\cdot 1.3499\approx 675\]

---

**Core Problem 7:** Solve: \(\log(x+2)-\log(x-1)=1\) (base 10)

**Solution:**
\[\log\frac{x+2}{x-1}=1\Rightarrow\frac{x+2}{x-1}=10\]
\[x+2=10x-10\Rightarrow 9x=12\Rightarrow x=\frac{4}{3}\]

**Domain Check:** \(x+2=\frac{10}{3}>0, x-1=\frac{1}{3}>0\) ✓

---

**Core Problem 8:** Find the half-life of a substance decaying by \(N=N_0e^{-0.05t}\).

**Solution:**
\[\frac{N_0}{2}=N_0e^{-0.05t}\Rightarrow\frac{1}{2}=e^{-0.05t}\]
\[-0.05t=\ln\frac{1}{2}=-\ln 2\Rightarrow t=\frac{\ln 2}{0.05}\approx 13.86\text{ years}\]

---

**Core Problem 9:** Solve: \(2^{2x}-5\cdot 2^x+4=0\)

**Solution:**
Let \(u=2^x\): \(u^2-5u+4=0\Rightarrow(u-1)(u-4)=0\Rightarrow u=1\text{ or }u=4\)
\(2^x=1\Rightarrow x=0\) or \(2^x=4\Rightarrow x=2\)

**Answer:** \(x=0\) or \(x=2\)

---

**Core Problem 10:** The value of a car depreciates by 15% per year. Initial value $20000. Find value after 5 years.

**Solution:**
\[V=20000\cdot(0.85)^5\approx 20000\cdot 0.4437\approx \$8874\]

---

### 68-83 min: Challenge Block (15 min)

**Challenge 1:** Solve: \(\log_2 x \cdot \log_x 4 = 3\)

**Method:** Use change of base: \(\log_x 4=\frac{\log_2 4}{\log_2 x}=\frac{2}{\log_2 x}\)
Let \(u=\log_2 x\): \(u\cdot\frac{2}{u}=3\Rightarrow 2=3\)? Contradiction!

Wait, let me check: actually \(u\cdot\frac{2}{u}=2\), so equation becomes \(2=3\) which is impossible.

Re-reading problem - perhaps different interpretation needed. Try: \(\frac{\log x}{\log 2}\cdot\frac{\log 4}{\log x}=\frac{\log 4}{\log 2}=2\neq 3\)

Hmm, seems no solution. Or problem meant something else. Try base 10:
\(\log_2 x = \frac{\ln x}{\ln 2}, \log_x 4 = \frac{\ln 4}{\ln x}\)
Product: \(\frac{\ln 4}{\ln 2}=\frac{2\ln 2}{\ln 2}=2\)

So the product always equals 2, never 3. **No solution exists.**

---

**Challenge 2:** If \(\log_a b = 2\) and \(\log_b c = 3\), find \(\log_a c\).

**Method:**
\(\log_a c = \log_a b \cdot \log_b c = 2\cdot 3 = 6\) (chain rule)

Or: \(b=a^2, c=b^3=(a^2)^3=a^6\), so \(\log_a c = 6\)

**Answer:** \(6\)

---

**Challenge 3:** A radioactive sample has half-life 10 days. Starting with 100g, how much remains after 30 days?

**Method:**
30 days = 3 half-lives. Amount remaining = \(100\cdot(\frac{1}{2})^3=100\cdot\frac{1}{8}=12.5\)g

Or using formula: \(k=\frac{\ln 2}{10}\), so \(N=100e^{-\frac{\ln 2}{10}\cdot 30}=100e^{-3\ln 2}=100\cdot\frac{1}{8}=12.5\)g

**Answer:** \(12.5\)g

---

### 83-98 min: Timed ATAR-Style Sprint (15 min)

**Sprint 1:** Solve: \(\log_5(2x-1)=2\)

**Sprint 2:** Find exact value: \(3^{x+2}=5^{x}\) (hint: take logs)

**Sprint 3:** A culture grows from 200 to 800 in 6 hours. Find growth rate \(k\) assuming \(N=N_0e^{kt}\).

---

### Sprint Solutions

**Sprint 1:**
\[2x-1=25\Rightarrow 2x=26\Rightarrow x=13\]
Domain: \(2(13)-1=25>0\) ✓

**Sprint 2:**
\[(x+2)\ln 3=x\ln 5\Rightarrow x\ln 3+2\ln 3=x\ln 5\]
\[2\ln 3=x(\ln 5-\ln 3)=x\ln\frac{5}{3}\]
\[x=\frac{2\ln 3}{\ln(5/3)}=\frac{\ln 9}{\ln(5/3)}\]

**Sprint 3:**
\[800=200e^{6k}\Rightarrow 4=e^{6k}\Rightarrow 6k=\ln 4\Rightarrow k=\frac{\ln 4}{6}=\frac{\ln 2}{3}\approx 0.231\text{ per hour}\]

---

### 98-100 min: Exit Commitment
- State the three log laws from memory.
- Write the domain condition for \(\log_a b\).
- Commit to: "I will always check domain before finalizing log equation answers."

---

## Homework

### Core
1. Solve: \(9^x=27^{x-1}\)
2. Solve: \(\log_2 x - \log_2(x-2)=3\)
3. Evaluate: \(\log_3 54 + \log_3 2 - \log_3 4\)
4. Solve: \(5^{x-1}=2\) (exact form)
5. A substance decays by 8% per year. Find percentage remaining after 20 years.

### Extension
6. Solve: \(4^x-3\cdot 2^x-4=0\)
7. If \(\log_a 2 = 0.4\) and \(\log_a 3 = 0.6\), find \(\log_a 72\).
8. Find the doubling time for a population growing at 5% per year (continuous).

---

## Teacher Diagnostic Notes

Track after Lesson 15:
- `EL` (Exponential law application)
- `LL` (Log law fluency)
- `CO` (Change of base usage)
- `DO` (Domain verification discipline)
- `MO` (Modelling interpretation)
- `TM` (Time management)

Intervention rules:
- Domain check omissions > 20%: mandatory checklist protocol for all log problems
- Log law errors: flashcard drill with 20 rapid-fire applications
- Modelling confusion: separate initial value from rate explicitly in setup

---

## Strand Links
- `NA` (Number and Algebra): index and log laws
- `FG` (Functions and Graphs): exponential and logarithmic functions
