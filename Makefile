export GH_TOKEN


all: install

h help:
	grep '^[a-z]' Makefile


install:
	npm install

run:
	source .env \
		&& npm run process
