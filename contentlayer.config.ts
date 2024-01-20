import { ComputedFields, defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
  },
};

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    thumbnail: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      default: new Date().toISOString(),
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: 'content/projects',
  documentTypes: [Project],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode as any, //prevent type error
        {
          theme: 'one-dark-pro',
          keepBackground: false,
          grid: true,
          filterMetaString: (st: string) => st.replace(/filename="[^"]*"/, ''),

          onVisitLine(node: any) {
            // Prevent lines from collapsing in `display: grid` mode, and
            // allow empty lines to be copy/pasted
            if (!node) return;
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: '' }];
            }
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: 'anchor',
          },
        },
      ],
    ],
  },
});
