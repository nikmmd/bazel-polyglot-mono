workspace(name = "bazel-polyglot-mono")
load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")


http_archive(
    name = "aspect_rules_ts",
    sha256 = "7d964d57c6e9a54b0ce20f27e5ea84e5b42b6db2148ab7eb18d7110a082380de",
    strip_prefix = "rules_ts-1.2.4",
    url = "https://github.com/aspect-build/rules_ts/releases/download/v1.2.4/rules_ts-v1.2.4.tar.gz",
)

http_archive(
    name = "aspect_rules_js",
    sha256 = "7b2a4d1d264e105eae49a27e2e78065b23e2e45724df2251eacdd317e95bfdfd",
    strip_prefix = "rules_js-1.31.0",
    url = "https://github.com/aspect-build/rules_js/releases/download/v1.31.0/rules_js-v1.31.0.tar.gz",
)

http_archive(
    name = "bazel_skylib",
    sha256 = "66ffd9315665bfaafc96b52278f57c7e2dd09f5ede279ea6d39b2be471e7e3aa",
    urls = [
        "https://mirror.bazel.build/github.com/bazelbuild/bazel-skylib/releases/download/1.4.2/bazel-skylib-1.4.2.tar.gz",
        "https://github.com/bazelbuild/bazel-skylib/releases/download/1.4.2/bazel-skylib-1.4.2.tar.gz",
    ],
)

load("@bazel_skylib//:workspace.bzl", "bazel_skylib_workspace")

bazel_skylib_workspace()

load("@aspect_rules_js//js:repositories.bzl", "rules_js_dependencies")

rules_js_dependencies()


##################
# rules_ts setup #
##################
# Fetches the rules_ts dependencies.
# If you want to have a different version of some dependency,
# you should fetch it *before* calling this.
# Alternatively, you can skip calling this function, so long as you've
# already fetched all the dependencies.
load("@aspect_rules_ts//ts:repositories.bzl", "rules_ts_dependencies")

rules_ts_dependencies(
    # This keeps the TypeScript version in-sync with the editor, \
    #which is typically best.
    ts_version_from = "//:package.json",

    # Alternatively, you could pick a specific version, or use
    # load("@aspect_rules_ts//ts:repositories.bzl", "LATEST_VERSION")
    # ts_version = LATEST_VERSION
)

# Fetch and register node, if you haven't already
load("@rules_nodejs//nodejs:repositories.bzl", "DEFAULT_NODE_VERSION", "nodejs_register_toolchains")


nodejs_register_toolchains(
    name= "nodejs",
    node_version = DEFAULT_NODE_VERSION,
)


load("@aspect_rules_js//npm:repositories.bzl", "npm_translate_lock")

# # Uses the pnpm-lock.yaml file to automate creation of npm_import rules
npm_translate_lock(
    # Creates a new repository named "@npm" - you could choose any name you like
    name = "npm",
    npm_package_lock= "//:package-lock.json",
    # Recommended attribute that also checks the .bazelignore file
    verify_node_modules_ignored = "//:.bazelignore",
    update_pnpm_lock = True,
    data = [
        "//:package.json",
        "//:pnpm-workspace.yaml",
        "//web/svelte-app:package.json",
    ]
)

load("@npm//:repositories.bzl", "npm_repositories")

npm_repositories()

# # ### jest ###

http_archive(
    name = "aspect_rules_jest",
    sha256 = "098186ffc450f2a604843d8ba14217088a0e259ea6a03294af5360a7f1bcd3e8",
    strip_prefix = "rules_jest-0.19.5",
    url = "https://github.com/aspect-build/rules_jest/releases/download/v0.19.5/rules_jest-v0.19.5.tar.gz",
)

# ####################
# # aspect_rules_jest setup #
# ####################
# # Fetches the aspect_rules_jest dependencies.
# # If you want to have a different version of some dependency,
# # you should fetch it *before* calling this.
# # Alternatively, you can skip calling this function, so long as you've
# # already fetched all the dependencies.

load("@aspect_rules_jest//jest:dependencies.bzl", "rules_jest_dependencies")

rules_jest_dependencies()


