/**
 * Filter definitions.
 */
export default {
  atRules: [
    [
      { property: `type`, value: `atrule` },
    ],
  ],
  declarations: [
    [
      { property: `type`, value: `decl` },
    ],
  ],
  functions: [
    [
      { property: `type`, value: `atrule` },
      { property: `name`, value: `function` },
    ],
  ],
  mixins: [
    [
      { property: `type`, value: `atrule` },
      { property: `name`, value: `mixin` },
    ],
    [
      { property: `type`, value: `rule` },
      { property: `selector`, value: /\(.*\)/ },
    ],
  ],
  rules: [
    [
      { property: `type`, value: `rule` },
    ],
  ],
  silent: [
    [
      { property: `type`, value: `atrule` },
      { property: `name`, value: `debug` },
    ],
    [
      { property: `type`, value: `atrule` },
      { property: `name`, value: `error` },
    ],
    [
      { property: `type`, value: `atrule` },
      { property: `name`, value: `function` },
    ],
    [
      { property: `type`, value: `atrule` },
      { property: `name`, value: `mixin` },
    ],
    [
      { property: `type`, value: `atrule` },
      { property: `name`, value: `warn` },
    ],
    [
      { property: `type`, value: `decl` },
      { property: `prop`, value: /^[$|@]/ },
    ],
    [
      { property: `type`, value: `rule` },
      { property: `selector`, value: /%/ },
    ],
    [
      { property: `type`, value: `rule` },
      { property: `selector`, value: /\(.*\)/ },
    ],
  ],
  variables: [
    [
      { property: `type`, value: `decl` },
      { property: `prop`, value: /^[$|@]/ },
    ],
  ],
};
