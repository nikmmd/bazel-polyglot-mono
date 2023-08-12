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
    srcs = ["src/index.ts"],
    tsconfig= "//:tsconfig.json",
    allow_js=True,
    resolve_json_module=True,
    validate=False,
)

load("@aspect_rules_jest//jest:defs.bzl", "jest_test")

jest_test(
    name = "test",
    config = "//:jest.config.js",
    data = glob(["src/**/*.ts", "src/**/*.tsx", "src/**/*.js", "src/**/*.jsx"]),
    node_modules = ":node_modules",
)