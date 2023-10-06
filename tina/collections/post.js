/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "Blog Posts",
  name: "post",
  path: "content/post",
  fields: [
    {
      type: "object",
      label: "Blocks",
      name: "blocks",
      list: true,
      templates: [
        {
          type: "object",
          label: "Hero",
          name: "hero",
          fields: [
            {
              type: "string",
              label: "Label",
              name: "label"
            },
            {
              type: "object",
              label: "Appearance",
              name: "appearance",
              fields: [
                {
                  type: "string",
                  label: "Free Text",
                  name: "free_text",
                  // this won't work
                  ui: {
                    defaultItem: {
                      free_text: "placeholder"
                    }
                  }
                },
                {
                  type: "string",
                  label: "Size",
                  name: "size",
                  options: [
                    "sm",
                    "md"
                  ]
                },
                {
                  type: "string",
                  label: "Color",
                  name: "color",
                  options: [
                    "red",
                    "blue"
                  ],
                  // this won't work
                  ui: {
                    defaultItem: {
                      color: "blue"
                    }
                  }
                }
              ]
            }
          ],
          // this will work
          ui: {
            defaultItem: {
              appearance: {
                size: "md",
              }
            }
          }
        }
      ],
    }
  ],
  ui: {
    router: ({ document }) => {
      return `/posts/${document._sys.filename}`;
    },
  }
};
