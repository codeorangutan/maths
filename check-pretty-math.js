const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = __dirname;
const dataPath = path.join(root, "data.js");
const appPath = path.join(root, "app.js");

function readUtf8(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function hasMathJaxDelimiters(text) {
  return /\\\(.+?\\\)|\\\[.+?\\\]|\$[^$]+\$/.test(text);
}

function looksMathy(text) {
  if (!text || hasMathJaxDelimiters(text)) return false;

  const patterns = [
    /sqrt|√|\^|<=|>=|!=|≠|≤|≥/i,
    /\b\d+\s*\/\s*\d+\b/,
    /\b[a-z]\s*[=<>]/i,
    /\b[a-z]\^\d+/i,
    /\|[^|]+\|/,
    /\b[fgh]\([^)]+\)/i,
    /\([^)]+,[^)]+\)/
  ];

  return patterns.some((re) => re.test(text));
}

function extractOverrideKeys(appSource) {
  const blockMatch = appSource.match(/const\s+DISPLAY_MATH_OVERRIDES\s*=\s*\{([\s\S]*?)\n\};/);
  if (!blockMatch) {
    throw new Error("Could not find DISPLAY_MATH_OVERRIDES block in app.js");
  }

  const keys = new Set();
  const keyRegex = /"((?:\\"|[^"])*)"\s*:/g;
  let match;
  while ((match = keyRegex.exec(blockMatch[1])) !== null) {
    keys.add(match[1].replace(/\\"/g, '"'));
  }
  return keys;
}

function loadData(dataSource) {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(dataSource, sandbox, { filename: "data.js" });

  const data = sandbox.window.ELITE_MATHS_DATA;
  if (!data) {
    throw new Error("window.ELITE_MATHS_DATA not found after evaluating data.js");
  }
  return data;
}

function collectDisplayStrings(data) {
  const items = [];

  for (const lesson of data.lessons || []) {
    for (const topic of lesson.objectives || []) {
      items.push({ location: `lessons.${lesson.id}.objectives[]`, text: topic });
    }
    for (const point of lesson.teachingPoints || []) {
      items.push({ location: `lessons.${lesson.id}.teachingPoints[]`, text: point });
    }
    for (const q of lesson.quiz || []) {
      items.push({ location: `lessons.${lesson.id}.quiz.${q.id}.prompt`, text: q.prompt });
      if (Array.isArray(q.options)) {
        q.options.forEach((opt, idx) => {
          items.push({ location: `lessons.${lesson.id}.quiz.${q.id}.options[${idx}]`, text: opt });
        });
      }
    }
  }

  for (const [strand, bank] of Object.entries(data.adaptiveBank || {})) {
    for (const q of bank || []) {
      items.push({ location: `adaptiveBank.${strand}.${q.id}.prompt`, text: q.prompt });
      if (Array.isArray(q.options)) {
        q.options.forEach((opt, idx) => {
          items.push({ location: `adaptiveBank.${strand}.${q.id}.options[${idx}]`, text: opt });
        });
      }
    }
  }

  return items;
}

function main() {
  const appSource = readUtf8(appPath);
  const dataSource = readUtf8(dataPath);

  const overrides = extractOverrideKeys(appSource);
  const data = loadData(dataSource);
  const displayItems = collectDisplayStrings(data);

  const issues = [];
  for (const item of displayItems) {
    const text = String(item.text ?? "");
    if (!looksMathy(text)) continue;
    if (overrides.has(text)) continue;
    if (hasMathJaxDelimiters(text)) continue;

    issues.push(item);
  }

  if (!issues.length) {
    console.log("PASS: All math-like display strings are prettified (MathJax or DISPLAY_MATH_OVERRIDES).");
    process.exit(0);
  }

  console.error("FAIL: Found math-like display strings without prettification rules:");
  for (const issue of issues) {
    console.error(`- ${issue.location}: ${issue.text}`);
  }
  console.error("\nAdd inline MathJax in data.js or add an exact key in DISPLAY_MATH_OVERRIDES in app.js.");
  process.exit(1);
}

main();
