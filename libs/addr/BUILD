load("@aspect_rules_ts//ts:defs.bzl", "ts_project")
load("@npm//:defs.bzl", "npm_link_all_packages")
load("@aspect_bazel_lib//lib:copy_file.bzl", "copy_file")

# Can either copy the tsconfig.json file from the root of the repo, or do a extends in the tsconfig.json file https://www.typescriptlang.org/tsconfig#extends 
# Doing a copy since it's easier to see what's going on
copy_file(
    # Name of the rule.
    name = "tsconfig.json",
    # A Label
    src = "//:tsconfig.json",
    # Path of the output file, relative to this package.
    out = "tsconfig.json",
)

copy_file(
    # Name of the rule.
    name = "jest.config.js",
    # A Label
    src = "//:jest.config.js",
    # Path of the output file, relative to this package.
    out = "jest.config.js",
)


npm_link_all_packages(
    name="node_modules"
)

ts_project(
    name="transpile",
    srcs = glob(["src/**/*.ts", "src/**/*.tsx", "src/**/*.js", "src/**/*.jsx"]),
    tsconfig= ":tsconfig.json",
    allow_js=True,
    resolve_json_module=True,
    validate=False,
    deps = ["//:node_modules"],
)

# ## Can't do direct source, so have to intersecpt the output group
# #https://stackoverflow.com/questions/59059699/testing-with-jest-in-typescript-using-a-bazel-custom-rule
filegroup(
    name = "js_src",
    srcs = [":transpile"],
    output_group = "es6_sources",
)

load("@aspect_rules_jest//jest:defs.bzl", "jest_test")

jest_test(
    name = "test",
    config = ":jest.config.js",
    data=[":js_src"],
    # data = glob(["src/**/*.ts", "src/**/*.tsx", "src/**/*.js", "src/**/*.jsx"]),
    node_modules = "//:node_modules",
)