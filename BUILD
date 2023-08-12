load("@aspect_rules_ts//ts:defs.bzl", "ts_project")
load("@npm//:defs.bzl", "npm_link_all_packages")

npm_link_all_packages(
    name="node_modules"
)

export_files = [
    "jest.config.js",
]

ts_project(
    name="transpile",
    srcs = glob(["src/**/*.ts", "src/**/*.tsx", "src/**/*.js", "src/**/*.jsx"]),
    tsconfig= "//:tsconfig.json",
    allow_js=True,
    resolve_json_module=True,
    validate=False,
    deps = [":node_modules"],
)

## Can't do direct source, so have to intersecpt the output group
#https://stackoverflow.com/questions/59059699/testing-with-jest-in-typescript-using-a-bazel-custom-rule
filegroup(
    name = "js_src",
    srcs = [":transpile"],
    output_group = "es6_sources",
)

load("@aspect_rules_jest//jest:defs.bzl", "jest_test")

jest_test(
    name = "test",
    config = "//:jest.config.js",
    data=[":js_src"],
    # data = glob(["src/**/*.ts", "src/**/*.tsx", "src/**/*.js", "src/**/*.jsx"]),
    node_modules = ":node_modules",
)