load("@npm//:defs.bzl", "npm_link_all_packages")

npm_link_all_packages(
    name="node_modules",
)

exports_files(
    ["jest.config.js","tsconfig.json"],
    visibility = ["//visibility:public"]
)
