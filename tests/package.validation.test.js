'use strict';

/**
 * Unit tests for package.json validation.
 * Testing framework: Node.js built-in test runner (node:test) with assert.
 */

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const packagePath = path.join(__dirname, '..', 'package.json');
const packageContent = fs.readFileSync(packagePath, 'utf8');

let packageJson;
try {
  packageJson = JSON.parse(packageContent);
} catch (error) {
  throw new Error(`Failed to parse package.json: ${error.message}`);
}

test('package.json structure: object with devDependencies and scripts', () => {
  assert.ok(packageJson, 'package.json should be defined');
  assert.strictEqual(typeof packageJson, 'object', 'package.json should be an object');
  assert.ok(!Array.isArray(packageJson), 'package.json should not be an array');
  assert.ok(packageJson.devDependencies, 'devDependencies should exist');
  assert.strictEqual(typeof packageJson.devDependencies, 'object', 'devDependencies should be an object');
  assert.ok(packageJson.scripts, 'scripts should exist');
  assert.strictEqual(typeof packageJson.scripts, 'object', 'scripts should be an object');
});

test('devDependencies include required packages with valid versions', () => {
  const { devDependencies } = packageJson;
  assert.ok(devDependencies.vitepress, 'vitepress should be listed');
  assert.ok(devDependencies.sitemap, 'sitemap should be listed');

  const semverPatterns = [
    /^[\^~]?\d+\.\d+\.\d+$/,
    /^[\^~]?\d+\.\d+\.\d+-[0-9A-Za-z.-]+$/
  ];

  Object.entries(devDependencies).forEach(([name, version]) => {
    assert.ok(typeof version === 'string' && version.length > 0, `${name} should have a non-empty version string`);
    const matchesPattern = semverPatterns.some((pattern) => pattern.test(version));
    assert.ok(matchesPattern, `${name} version "${version}" should match allowed semver patterns`);
  });

  const dependencyNames = Object.keys(devDependencies);
  const uniqueNames = new Set(dependencyNames);
  assert.strictEqual(dependencyNames.length, uniqueNames.size, 'devDependencies should not contain duplicate keys');
});

test('scripts include VitePress commands and run node:test', () => {
  const { scripts } = packageJson;
  const expectedDocsScripts = {
    'docs:dev': 'vitepress dev',
    'docs:build': 'vitepress build',
    'docs:preview': 'vitepress preview'
  };

  Object.entries(expectedDocsScripts).forEach(([scriptName, expectedCommand]) => {
    assert.strictEqual(
      scripts[scriptName],
      expectedCommand,
      `${scriptName} should be "${expectedCommand}"`
    );
  });

  assert.strictEqual(
    scripts.test,
    'node --test tests/package.validation.test.js',
    'test script should run node:test on package validation tests'
  );

  assert.strictEqual(
    scripts['test:package'],
    'node --test tests/package.validation.test.js',
    'test:package script should run node:test on package validation tests'
  );

  Object.entries(scripts).forEach(([name, command]) => {
    assert.ok(typeof command === 'string' && command.trim().length > 0, `${name} command should be a non-empty string`);
    assert.ok(!command.includes('..'), `${name} command should not contain directory traversal`);
    const dangerousPatterns = [
      /rm\s+-rf\s+\//,
      /:\(\)\{.*\|.*&\};:/,
      /eval\s*\(/,
      />\s*\/dev\/sd/
    ];
    dangerousPatterns.forEach((pattern) => {
      assert.ok(!pattern.test(command), `${name} command should not match dangerous pattern ${pattern}`);
    });
  });
});

test('dependencies field is absent or empty', () => {
  const dependencies = packageJson.dependencies;
  if (dependencies) {
    assert.strictEqual(
      Object.keys(dependencies).length,
      0,
      'documentation project should not declare production dependencies'
    );
  } else {
    assert.ok(true, 'dependencies field is optional and may be omitted');
  }
});

test('no dependency name conflicts between dependencies and devDependencies', () => {
  const dependencies = packageJson.dependencies || {};
  const devDependencies = packageJson.devDependencies || {};
  const intersection = Object.keys(dependencies).filter((name) => Object.prototype.hasOwnProperty.call(devDependencies, name));
  assert.strictEqual(intersection.length, 0, 'packages should not be listed in both dependencies and devDependencies');
});

test('package.json formatting: no trailing commas and reasonable size', () => {
  const trailingCommaPattern = /,\s*[}\]]/;
  assert.ok(!trailingCommaPattern.test(packageContent), 'package.json should not contain trailing commas');

  const stats = fs.statSync(packagePath);
  assert.ok(stats.size > 0, 'package.json should not be empty');
  assert.ok(stats.size < 1024 * 1024, 'package.json should not be excessively large');
});

test('optional fields are safely accessible', () => {
  const optionalFields = ['name', 'version', 'description', 'repository', 'author', 'license'];
  optionalFields.forEach((field) => {
    assert.doesNotThrow(() => packageJson[field], `accessing ${field} should not throw`);
  });
});

test('VitePress version is compatible with v2', () => {
  const vitepressVersion = packageJson.devDependencies.vitepress;
  assert.ok(
    vitepressVersion.includes('2.0.0-alpha') || /^([\^~]?2\.)/.test(vitepressVersion),
    `vitepress version "${vitepressVersion}" should be compatible with VitePress 2.x`
  );
});

test('scripts reference known executables', () => {
  const knownExecutables = new Set(['vitepress', 'node', 'npm', 'pnpm', 'yarn']);
  Object.entries(packageJson.scripts).forEach(([name, command]) => {
    const [executable] = command.split(/\s+/);
    assert.ok(knownExecutables.has(executable), `${name} should start with a known executable`);
  });
});

test('all dependency versions share consistent whitespace formatting', () => {
  const devDependencies = packageJson.devDependencies || {};
  Object.values(devDependencies).forEach((version) => {
    assert.strictEqual(version.trim(), version, `version "${version}" should not have leading or trailing whitespace`);
  });
});

test('package.json stringifies without circular references', () => {
  assert.doesNotThrow(() => JSON.stringify(packageJson), 'JSON.stringify should not throw for package.json');
});