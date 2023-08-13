load("@npm//:defs.bzl", "npm_link_all_packages")
load("@aspect_bazel_lib//lib:copy_file.bzl", "copy_file")
load("@aspect_rules_js//js:defs.bzl", "js_binary", "js_run_binary", "js_test", "js_run_devserver")
load("@aspect_bazel_lib//lib:copy_to_bin.bzl", "copy_to_bin")
load("@aspect_bazel_lib//lib:copy_directory.bzl", "copy_directory")

#if you install global vite and vitest
#load("@npm//:vite/package_json.bzl", vite_bin = "bin") 
# load("@npm//:vitest/package_json.bzl", vitest_bin = "bin") 
###

#else use sub per package
load("@npm//web/svelte-app:vite/package_json.bzl", vite_bin = "bin")
load("@npm//web/svelte-app:vitest/package_json.bzl", vitest_bin = "bin")


npm_link_all_packages(
    name="node_modules"
)

filegroup(
    name = "config",
    srcs = [
        "vite.config.ts",
        "package.json",
        "tsconfig.json",
        "tsconfig.node.json",
        "index.html",
    ],
)

filegroup(
    name = "vite_srcs_export",
    srcs = glob(["src/**/*"]),
    visibility = ["//visibility:public"],
)

filegroup(
    name = "vite_srcs_tests",
    srcs = glob(["src/**/*.spec.ts"]),
    visibility = ["//visibility:public"],
)

filegroup(
    name="vite_public_export",
    srcs = glob(["public/**/*"]),
    visibility = ["//visibility:public"],
)


###
vite_bin.vite(
    name = "build",
    srcs =  [":node_modules",":config", ":vite_srcs_export", ":vite_public_export"],
    args = ["build"],
    chdir = package_name(),
    out_dirs = ["dist"],
    visibility = ["//visibility:public"],
)

vitest_bin.vitest_test(
    name = "vitest",
    data =  [":node_modules",":config", ":vite_srcs_export", ":vite_public_export"],
    args = [
        "run",
        '--environment=jsdom',
    ],
    chdir = package_name(),
)
