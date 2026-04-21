# Lesson 18 (Elite Track)

## Program Stage
- Year: 10 (accelerated stream)
- Term: 2
- Week: 3
- Session: Lesson 18
- Duration: 100 minutes

## Lesson Title
Trigonometric Equations and Sinusoidal Modelling

## Lesson Purpose
Master trigonometric equation solving across specified intervals, apply identities strategically, and extract precise parameters from sinusoidal models for real-world interpretation.

## Learning Intentions
By the end of this lesson, the student will:
1. Solve trigonometric equations completely within given interval constraints.
2. Apply the Pythagorean identity and derived relationships to simplify expressions.
3. Extract amplitude, period, phase shift, and vertical shift from sinusoidal models.
4. Interpret trigonometric parameters in physical contexts.

## Success Criteria
- Core set: `>= 85%`
- Challenge set: `>= 70%`
- Timed sprint: complete in 15 min with `<= 1` sign or quadrant error
- Solution verification: all answers checked in original equation

---

## Minute-by-Minute Flow (100 min)

### 0-8 min: Retrieval Warm-Up
1. Exact value: \(\sin 60^\circ\)
2. Exact value: \(\cos 150^\circ\)
3. Solve: \(\sin x = \frac{1}{2}\) for \(x\in[0^\circ,360^\circ)\)
4. Simplify: \(\sin^2x+\cos^2x+\tan^2x\)
5. Period of \(y=\sin(2x)\)?

**Answers:**
1. \(\frac{\sqrt{3}}{2}\)
2. \(-\frac{\sqrt{3}}{2}\)
3. \(30^\circ, 150^\circ\)
4. \(1+\tan^2x=\sec^2x\)
5. \(\pi\) radians or \(180^\circ\)

### 8-28 min: Explicit Teaching Block

#### Focus A: Exact Values and Quadrant Signs

**Standard Angle Values (must be automatic):**

| Angle | \(\sin\) | \(\cos\) | \(\tan\) |
|-------|---------|---------|---------|
| \(0^\circ\) | 0 | 1 | 0 |
| \(30^\circ\) | \(\frac{1}{2}\) | \(\frac{\sqrt{3}}{2}\) | \(\frac{1}{\sqrt{3}}\) |
| \(45^\circ\) | \(\frac{1}{\sqrt{2}}\) | \(\frac{1}{\sqrt{2}}\) | 1 |
| \(60^\circ\) | \(\frac{\sqrt{3}}{2}\) | \(\frac{1}{2}\) | \(\sqrt{3}\) |
| \(90^\circ\) | 1 | 0 | undefined |

**Quadrant Sign Rules (CAST diagram):**
- Q1: All positive
- Q2: Sine positive
- Q3: Tangent positive
- Q4: Cosine positive

**Reference Angle Method:**
1. Find reference angle (acute angle to nearest x-axis)
2. Determine quadrants where function has correct sign
3. Calculate actual angles from reference

#### Focus B: Solving Trigonometric Equations

**Systematic Method:**
1. Isolate the trig function (e.g., \(\sin x = k\))
2. Find reference angle using inverse trig
3. Determine which quadrants have the required sign
4. Calculate all solutions in the given interval
5. Verify each solution in original equation

**Worked Example:** Solve \(\cos x = -\frac{1}{2}\) for \(x\in[0^\circ,360^\circ)\)

**Solution:**
- Reference angle: \(\cos^{-1}(\frac{1}{2})=60^\circ\)
- Negative cosine: Q2 and Q3
- Q2: \(180^\circ-60^\circ=120^\circ\)
- Q3: \(180^\circ+60^\circ=240^\circ\)
- Solutions: \(x=120^\circ, 240^\circ\)

#### Focus C: Sinusoidal Models

**General Form:** \(y=A\sin(Bx+C)+D\) or \(y=A\cos(Bx+C)+D\)

**Parameter Interpretation:**
| Parameter | Meaning | Formula |
|-----------|---------|---------|
| \(|A|\) | Amplitude (max deviation from midline) | \(|A|\) |
| \(\frac{2\pi}{|B|}\) | Period (radians) | \(\frac{2\pi}{|B|}\) |
| \(-\frac{C}{B}\) | Phase shift (horizontal displacement) | \(-\frac{C}{B}\) |
| \(D\) | Vertical shift (midline) | \(y=D\) |
| \(D+|A|\) | Maximum value | - |
| \(D-|A|\) | Minimum value | - |

**Frequency:** \(f=\frac{1}{\text{period}}=\frac{|B|}{2\pi}\)

**Angular frequency:** \(\omega=|B|\)

---

### 28-68 min: Guided Core Set (40 min)

**Core Problem 1:** Solve \(\sin x = \frac{\sqrt{3}}{2}\) for \(x\in[0^\circ,360^\circ)\).

**Solution:**
- Reference: \(60^\circ\)
- Positive sine: Q1 and Q2
- Q1: \(60^\circ\), Q2: \(180^\circ-60^\circ=120^\circ\)
- Solutions: \(x=60^\circ, 120^\circ\)

---

**Core Problem 2:** Solve \(\tan x = -1\) for \(x\in[0^\circ,360^\circ)\).

**Solution:**
- Reference: \(45^\circ\)
- Negative tangent: Q2 and Q4
- Q2: \(180^\circ-45^\circ=135^\circ\)
- Q4: \(360^\circ-45^\circ=315^\circ\) or \(-45^\circ+360^\circ=315^\circ\)
- Solutions: \(x=135^\circ, 315^\circ\)

---

**Core Problem 3:** Solve \(2\cos x - 1 = 0\) for \(x\in[0, 2\pi)\).

**Solution:**
\[\cos x = \frac{1}{2}\]
- Reference: \(\frac{\pi}{3}\)
- Positive cosine: Q1 and Q4
- Q1: \(\frac{\pi}{3}\), Q4: \(2\pi-\frac{\pi}{3}=\frac{5\pi}{3}\)
- Solutions: \(x=\frac{\pi}{3}, \frac{5\pi}{3}\)

---

**Core Problem 4:** Solve \(\sin^2x = \frac{3}{4}\) for \(x\in[0^\circ,360^\circ)\).

**Solution:**
\[\sin x = \pm\frac{\sqrt{3}}{2}\]
Positive: \(60^\circ, 120^\circ\)
Negative: \(240^\circ, 300^\circ\) (Q3, Q4)
- Solutions: \(x=60^\circ, 120^\circ, 240^\circ, 300^\circ\)

---

**Core Problem 5:** Given \(\sin\theta = \frac{3}{5}\) and \(\theta\) in Q2, find \(\cos\theta\).

**Solution:**
\[\cos^2\theta = 1-\frac{9}{25}=\frac{16}{25}\]
Q2: cosine negative
\[\cos\theta = -\frac{4}{5}\]

---

**Core Problem 6:** State amplitude, period, and midline of \(y=3\sin(2x)+1\).

**Solution:**
- Amplitude: \(|3|=3\)
- Period: \(\frac{2\pi}{2}=\pi\)
- Midline: \(y=1\)
- Max: \(1+3=4\), Min: \(1-3=-2\)

---

**Core Problem 7:** Find phase shift of \(y=\sin(2x-\frac{\pi}{3})\).

**Solution:**
\[y=\sin(2(x-\frac{\pi}{6}))\]
Phase shift: \(\frac{\pi}{6}\) to the right

---

**Core Problem 8:** Solve \(2\sin^2x - \sin x - 1 = 0\) for \(x\in[0^\circ,360^\circ)\).

**Solution:**
Let \(u=\sin x\): \(2u^2-u-1=0\Rightarrow(2u+1)(u-1)=0\)
\(u=1\) or \(u=-\frac{1}{2}\)

\(\sin x = 1\): \(x=90^\circ\)
\(\sin x = -\frac{1}{2}\): Q3, Q4
- Q3: \(180+30=210^\circ\)
- Q4: \(360-30=330^\circ\)

Solutions: \(x=90^\circ, 210^\circ, 330^\circ\)

---

**Core Problem 9:** A tidal model is \(h=2.5\sin(\frac{\pi t}{6})+3\) where \(h\) is height in meters, \(t\) is hours. Find maximum height and period.

**Solution:**
- Amplitude: \(2.5\), so max height: \(3+2.5=5.5\) meters
- Period: \(\frac{2\pi}{\pi/6}=12\) hours

---

**Core Problem 10:** Solve \(\cos x = \cos(60^\circ)\) for \(x\in[0^\circ,360^\circ)\).

**Solution:**
\(\cos x = \frac{1}{2}\)
- Q1: \(x=60^\circ\)
- Q4: \(x=360^\circ-60^\circ=300^\circ\)

Solutions: \(x=60^\circ, 300^\circ\)

---

### 68-83 min: Challenge Block (15 min)

**Challenge 1:** Solve \(\sin(2x)=\frac{1}{2}\) for \(x\in[0^\circ,360^\circ)\).

**Method:**
Let \(u=2x\), solve \(\sin u = \frac{1}{2}\) for \(u\in[0^\circ,720^\circ)\)
\(u=30^\circ, 150^\circ, 390^\circ, 510^\circ\) (add \(360^\circ\) for second cycle)
\(x=15^\circ, 75^\circ, 195^\circ, 255^\circ\)

---

**Challenge 2:** Given \(\sin x + \cos x = \frac{1}{5}\), find \(\sin(2x)\).

**Method:**
Square both sides:
\[\sin^2x+2\sin x\cos x+\cos^2x=\frac{1}{25}\]
\[1+\sin(2x)=\frac{1}{25}\Rightarrow\sin(2x)=\frac{1}{25}-1=-\frac{24}{25}\]

**Answer:** \(-\frac{24}{25}\)

---

**Challenge 3:** A mass on a spring oscillates with \(x=5\cos(4\pi t)\) cm. Find first two times when displacement is 2.5 cm.

**Method:**
\[5\cos(4\pi t)=2.5\Rightarrow\cos(4\pi t)=\frac{1}{2}\]
\[4\pi t=\frac{\pi}{3}, \frac{5\pi}{3}, \ldots\]
\[t=\frac{1}{12}, \frac{5}{12}\text{ seconds}\]

---

### 83-98 min: Timed ATAR-Style Sprint (15 min)

**Sprint 1:** Solve \(\cos x = -\frac{\sqrt{3}}{2}\) for \(x\in[0^\circ,360^\circ)\).

**Sprint 2:** State amplitude, period, and phase shift of \(y=2\sin(3x+\frac{\pi}{2})-1\).

**Sprint 3:** Solve \(2\cos^2x+\cos x-1=0\) for \(x\in[0,2\pi)\).

---

### Sprint Solutions

**Sprint 1:**
- Reference: \(30^\circ\)
- Negative cosine: Q2, Q3
- \(x=150^\circ, 210^\circ\)

**Sprint 2:**
- Amplitude: \(2\)
- Period: \(\frac{2\pi}{3}\)
- Phase shift: \(-\frac{\pi}{6}\) (left by \(\frac{\pi}{6}\))
- Midline: \(y=-1\)

**Sprint 3:**
Let \(u=\cos x\): \(2u^2+u-1=0\Rightarrow(2u-1)(u+1)=0\)
\(\cos x = \frac{1}{2}\) or \(\cos x = -1\)
\(x=\frac{\pi}{3}, \frac{5\pi}{3}, \pi\)

---

### 98-100 min: Exit Commitment
- Recite exact values for \(30^\circ, 45^\circ, 60^\circ\).
- Write the amplitude and period formulas.
- Commit to: always check answer in original equation when squared.

---

## Homework

### Core
1. Solve \(\sin x = -\frac{1}{2}\) for \(x\in[0^\circ,360^\circ)\)
2. Solve \(\tan x = \sqrt{3}\) for \(x\in[0,2\pi)\)
3. Find \(\cos\theta\) given \(\sin\theta=\frac{5}{13}\), \(\theta\) in Q1
4. State amplitude, period of \(y=4\cos(\frac{x}{2})+2\)
5. Solve \(2\sin x\cos x = \frac{\sqrt{3}}{2}\) for \(x\in[0^\circ,360^\circ)\)

### Extension
6. Solve \(\sin^2x-\sin x-2=0\) for \(x\in[0,2\pi)\)
7. If \(\sin x + \cos x = \frac{\sqrt{3}}{2}\), find \(\sin(2x)\)
8. For \(y=A\sin(B(x-C))+D\) with max 7, min 1, period \(\frac{\pi}{2}\), phase shift \(\frac{\pi}{4}\), find \(A,B,C,D\)

---

## Teacher Diagnostic Notes

Track after Lesson 18:
- `EV` (Exact value fluency)
- `QS` (Quadrant sign accuracy)
- `TE` (Trig equation solving)
- `ID` (Identity application)
- `PM` (Parameter interpretation)
- `VE` (Verification discipline)

Intervention rules:
- Exact value hesitation > 20%: daily 5-minute rapid recall drill
- Quadrant errors: CAST diagram visualization mandatory
- Period errors: emphasize \(\div|B|\) not \(\times|B|\)

---

## Strand Links
- `TG` (Trigonometry): equations, identities, modelling
- `FG` (Functions and Graphs): periodic functions, transformations
