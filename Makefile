# Get the value of a property from the package.json file. For nested properties,
# use the dot notation (e.g. "dependencies.express").
define GetFromPkg
	$(shell node -p "require('./package.json').$(1)")
endef

PKG_NAME    := $(call GetFromPkg,name)
PKG_VERSION := $(call GetFromPkg,version)
DESCRIPTION := $(call GetFromPkg,description)
PROJECT_URL := $(call GetFromPkg,homepage)
AUTHOR      := $(call GetFromPkg,author.name)

# A test command to verify the environment variables are being set.
display-variables:
	@echo "PKG_NAME = $(PKG_NAME)"
	@echo "PKG_VERSION = $(PKG_VERSION)"
	@echo "PROJECT_URL = $(PROJECT_URL)"
	@echo "AUTHOR = $(AUTHOR)"

clean:
	@rm -rf node_modules pnpm-lock.yaml dist

install-deps: clean
	@pnpm install

build: install-deps
	@pnpm run build

watch-build: install-deps
	@pnpm run build:watch

publish: install-deps
	@pnpm publish
