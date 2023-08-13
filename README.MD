# Update locks
bazel run -- @pnpm//:pnpm --dir $PWD install --lockfile-only
bazel sync