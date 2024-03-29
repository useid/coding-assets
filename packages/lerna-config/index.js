
module.exports = {
  "packages": [ "packages/*" ],
  "command": {
    "bootstrap": {
      "ignorePrepublish": true,
    },
    "version": {
      "allowBranch": [ "main" ],
      "conventionalCommits": true,
      "exact": true,
      "forcePublish": true,
      "message": "chore: release %s",
      "granularPathspec": false,
      "tag-version-prefix": "",
      "changelogPreset": {
        "name": "conventionalcommits",
        "types": [
          { "type": "feat", "section": "**Features**" },
          { "type": "fix", "section": "**Bug Fixes**" },
          { "type": "docs", "section": "**Documentation**" },
          { "type": "chore", "hidden": true },
          { "type": "build", "hidden": true },
          { "type": "test", "hidden": true }
        ],
        "releaseCommitMessageFormat": "chore: release v{{currentTag}}"
      }
    }
  }
}
