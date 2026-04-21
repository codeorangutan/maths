# Lesson 21 (Elite Track)

## Program Stage
- Year: 10 (accelerated stream)
- Term: 3
- Week: 1
- Session: Lesson 21
- Duration: 100 minutes

## Lesson Title
Function Transformations, Compositions, and Inverse Chains

## Lesson Purpose
Master sequential function transformations, compute compositions with correct order of operations, and synthesize inverse function relationships with full verification protocols.

## Learning Intentions
By the end of this lesson, the student will:
1. Apply transformation sequences to functions in correct order.
2. Compute function compositions systematically.
3. Find and verify inverse functions with proper domain analysis.
4. Connect algebraic function forms to their geometric consequences.

## Success Criteria
- Core set: `>= 85%`
- Challenge set: `>= 70%`
- Timed sprint: complete in 15 min with `<= 1` order error
- Verification: all inverses checked by composition

---

## Minute-by-Minute Flow (100 min)

### 0-8 min: Retrieval Warm-Up
1. If \(f(x)=x^2\), find \(f(x-3)\)
2. If \(g(x)=2x+1\), find \(g(2x)\)
3. Find \((f\circ g)(x)\) where \(f(x)=x^2, g(x)=x+1\)
4. Find inverse of \(f(x)=3x-2\)
5. What transformation takes \(y=x^2\) to \(y=(x-2)^2+3\)?

**Answers:**
1. \((x-3)^2=x^2-6x+9\)
2. \(4x+1\)
3. \(f(g(x))=(x+1)^2\)
4. \(f^{-1}(x)=\frac{x+2}{3}\)
5. Right 2, up 3

### 8-28 min: Explicit Teaching Block

#### Focus A: Transformation Sequences

**From Parent Function \(y=f(x)\):**

| Transformation | New Equation | Effect on Graph |
|----------------|--------------|-----------------|
| Horizontal shift right \(h\) | \(y=f(x-h)\) | Move right by \(h\) |
| Horizontal shift left \(h\) | \(y=f(x+h)\) | Move left by \(h\) |
| Vertical shift up \(k\) | \(y=f(x)+k\) | Move up by \(k\) |
| Vertical shift down \(k\) | \(y=f(x)-k\) | Move down by \(k\) |
| Reflection in x-axis | \(y=-f(x)\) | Flip upside down |
| Reflection in y-axis | \(y=f(-x)\) | Flip left-right |
| Vertical stretch by \(a\) | \(y=af(x)\) | Stretch vertically by factor \(a\) |
| Horizontal compression by \(b\) | \(y=f(bx)\) | Compress horizontally by factor \(b\) |

**Order Matters:**
For \(y=af(b(x-h))+k\):
1. Horizontal compression/stretch (by \(b\))
2. Horizontal shift (by \(h\))
3. Vertical stretch (by \(a\))
4. Vertical shift (by \(k\))

**Worked Example:** Describe transformations from \(y=x^2\) to \(y=-2(x-1)^2+3\)

**Solution:**
1. Right 1 unit: \((x-1)^2\)
2. Vertical stretch by 2: \(2(x-1)^2\)
3. Reflection in x-axis: \(-2(x-1)^2\)
4. Up 3 units: \(-2(x-1)^2+3\)

#### Focus B: Function Composition

**Definition:** \((f\circ g)(x)=f(g(x))\)

**Procedure:**
1. Evaluate inner function \(g(x)\) first
2. Substitute result into outer function \(f\)
3. Simplify

**Domain Consideration:**
\(x\) must be in domain of \(g\), AND \(g(x)\) must be in domain of \(f\).

**Worked Example:** Find \((f\circ g)(x)\) and \((g\circ f)(x)\) where \(f(x)=\sqrt{x}, g(x)=x-4\)

**Solution:**
\((f\circ g)(x)=f(g(x))=\sqrt{x-4}\), domain: \(x\ge 4\)
\((g\circ f)(x)=g(f(x))=\sqrt{x}-4\), domain: \(x\ge 0\)

Note: \(f\circ g\neq g\circ f\) (not commutative)

#### Focus C: Inverse Functions and Verification

**Definition:** \(f^{-1}\) reverses \(f\). If \(f(a)=b\), then \(f^{-1}(b)=a\).

**Finding Inverse:**
1. Write \(y=f(x)\)
2. Swap \(x\) and \(y\)
3. Solve for \(y\)
4. Write \(f^{-1}(x)=\ldots\)
5. State domain restriction

**Verification Protocol:**
- Check \(f(f^{-1}(x))=x\)
- Check \(f^{-1}(f(x))=x\)
- Both must hold in valid domains

**Worked Example:** Find and verify inverse of \(f(x)=\frac{2x+1}{x-3}\)

**Solution:**
\[y=\frac{2x+1}{x-3}\Rightarrow y(x-3)=2x+1\Rightarrow yx-3y=2x+1\]
\[yx-2x=1+3y\Rightarrow x(y-2)=1+3y\Rightarrow x=\frac{1+3y}{y-2}\]

\[f^{-1}(x)=\frac{1+3x}{x-2},\quad x\neq 2\]

---

### 28-68 min: Guided Core Set (40 min)

**Core Problem 1:** Describe transformations from \(y=x^3\) to \(y=-(x+2)^3-1\).

**Solution:**
1. Left 2: \((x+2)^3\)
2. Reflect in x-axis: \(-(x+2)^3\)
3. Down 1: \(-(x+2)^3-1\)

---

**Core Problem 2:** Find \((f\circ g)(x)\) where \(f(x)=x^2+1, g(x)=3x-2\).

**Solution:**
\[f(g(x))=(3x-2)^2+1=9x^2-12x+4+1=9x^2-12x+5\]

---

**Core Problem 3:** Find inverse of \(f(x)=4x-7\) and verify.

**Solution:**
\[y=4x-7\Rightarrow x=\frac{y+7}{4}\Rightarrow f^{-1}(x)=\frac{x+7}{4}\]

Verification:
\[f(f^{-1}(x))=4(\frac{x+7}{4})-7=x+7-7=x\quad\checkmark\]

---

**Core Problem 4:** If \(f(x)=\sqrt{x+1}\) and \(g(x)=x^2-1\), find \((g\circ f)(x)\) and its domain.

**Solution:**
\[g(f(x))=(\sqrt{x+1})^2-1=x+1-1=x\]
Domain: \(x+1\ge 0\Rightarrow x\ge -1\)

Interesting: \(g\circ f\) simplifies to identity on \(x\ge -1\).

---

**Core Problem 5:** Find \((f\circ g)(2)\) where \(f(x)=\frac{1}{x}, g(x)=x^2-1\).

**Solution:**
\[g(2)=4-1=3\]
\[f(3)=\frac{1}{3}\]

---

**Core Problem 6:** Describe sequence of transformations: \(y=\sin x\) to \(y=3\sin(2x)+1\).

**Solution:**
1. Horizontal compression by 2: \(\sin(2x)\)
2. Vertical stretch by 3: \(3\sin(2x)\)
3. Up 1: \(3\sin(2x)+1\)

---

**Core Problem 7:** Find and verify inverse of \(f(x)=\frac{x+2}{x-1}\).

**Solution:**
\[y=\frac{x+2}{x-1}\Rightarrow yx-y=x+2\Rightarrow yx-x=y+2\]
\[x(y-1)=y+2\Rightarrow x=\frac{y+2}{y-1}\]

\[f^{-1}(x)=\frac{x+2}{x-1},\quad x\neq 1\]

Note: This function is its own inverse!

---

**Core Problem 8:** If \(f(x)=2^x\), find \(f(x+1)-f(x)\).

**Solution:**
\[2^{x+1}-2^x=2\cdot 2^x-2^x=2^x(2-1)=2^x\]

---

**Core Problem 9:** Find domain of \((f\circ g)(x)\) where \(f(x)=\sqrt{x}, g(x)=9-x^2\).

**Solution:**
\[(f\circ g)(x)=\sqrt{9-x^2}\]
Need \(9-x^2\ge 0\Rightarrow x^2\le 9\Rightarrow -3\le x\le 3\)
Domain: \([-3,3]\)

---

**Core Problem 10:** Find the transformation taking \(y=\frac{1}{x}\) to \(y=\frac{2}{x-3}+1\).

**Solution:**
\[y=\frac{2}{x-3}+1=2\cdot\frac{1}{x-3}+1\]
1. Right 3
2. Vertical stretch by 2
3. Up 1

---

### 68-83 min: Challenge Block (15 min)

**Challenge 1:** If \(f(x)=x^3-3x\) and \(g(x)=x^2+1\), find \((f\circ g)(x)\) and simplify.

**Method:**
\[f(g(x))=(x^2+1)^3-3(x^2+1)\]
\[=x^6+3x^4+3x^2+1-3x^2-3\]
\[=x^6+3x^4-2\]

---

**Challenge 2:** Find two functions \(f\) and \(g\) such that \(f(g(x))=\sqrt{x^2+1}\).

**Method:**
Many solutions. One: \(g(x)=x^2+1, f(x)=\sqrt{x}\)
Another: \(g(x)=x^2, f(x)=\sqrt{x+1}\)

---

**Challenge 3:** Find inverse of \(f(x)=\ln(x-2)+3\) and state domain.

**Method:**
\[y=\ln(x-2)+3\Rightarrow y-3=\ln(x-2)\Rightarrow x-2=e^{y-3}\Rightarrow x=2+e^{y-3}\]

\[f^{-1}(x)=2+e^{x-3},\quad \text{domain: all real }x\]
Range of original: all real numbers.

---

### 83-98 min: Timed ATAR-Style Sprint (15 min)

**Sprint 1:** Describe transformations from \(y=x^2\) to \(y=(x+1)^2-4\).

**Sprint 2:** Find \((f\circ g)(x)\) where \(f(x)=x+3, g(x)=2x-1\).

**Sprint 3:** Find inverse of \(f(x)=\frac{x}{x+2}\) for \(x>-2\).

---

### Sprint Solutions

**Sprint 1:**
Left 1, down 4.

**Sprint 2:**
\[f(g(x))=(2x-1)+3=2x+2\]

**Sprint 3:**
\[y=\frac{x}{x+2}\Rightarrow y(x+2)=x\Rightarrow yx+2y=x\Rightarrow 2y=x(1-y)\]
\[x=\frac{2y}{1-y}\Rightarrow f^{-1}(x)=\frac{2x}{1-x}\]
Domain of inverse: \(x<1\) (range of original)

---

### 98-100 min: Exit Commitment
- List transformation order for \(y=af(b(x-h))+k\).
- Write the composition definition.
- Commit to: always verify inverses by composition.

---

## Homework

### Core
1. Describe transformations: \(y=x^3\) to \(y=2(x-1)^3+3\)
2. Find \((f\circ g)(x)\): \(f(x)=\sqrt{x}, g(x)=x^2+4\)
3. Find inverse: \(f(x)=5x+2\)
4. If \(f(x)=x^2, g(x)=x+1, h(x)=2x\), find \(f(g(h(x)))\)
5. Find domain of \((f\circ g)(x)\) for \(f(x)=\frac{1}{x}, g(x)=x-3\)

### Extension
6. Find transformation sequence: \(y=\sin x\) to \(y=2\sin(3x-\pi)+1\)
7. Show that if \(f\) and \(g\) are both increasing, then \(f\circ g\) is increasing
8. Find two functions where \(f(g(x))=x^2+2x+1\) but \(g(f(x))\neq x^2+2x+1\)

---

## Teacher Diagnostic Notes

Track after Lesson 21:
- `TR` (Transformation recognition)
- `CO` (Composition order)
- `IN` (Inverse finding)
- `VE` (Verification protocol)
- `DO` (Domain analysis)
- `GE` (Geometric interpretation)

Intervention rules:
- Inside/outside confusion: emphasize "inside = horizontal, outside = vertical"
- Composition order errors: re-teach "inner first" with explicit examples
- Missing inverse domain: mandatory restriction statement

---

## Strand Links
- `FG` (Functions and Graphs): transformations, compositions, inverses
