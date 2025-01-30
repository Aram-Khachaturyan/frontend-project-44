install:
	npm ci

run-even:
	node bin/brain-even.js

run-calc:
	node bin/brain-calc.js

run-gcd:
	node bin/brain-gcd.js

run-prime:
	node bin/brain-prime.js

run-progression:
	node bin/brain-progression.js

publish:
	npm publish --dry-run

lint: 
	npx eslint .