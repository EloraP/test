import {defineField, defineType} from 'sanity'

export const child = defineType({
    name: 'child',
    title: 'Child',
    type: 'document',
    fields: [
        {
          name: 'parent',
          title: 'Parent Driver',
          type: 'reference',
          to: [{ type: 'parentDriver' }],
            description: 'Select the parent driver this child inherits from.',
        },
        {
          name: 'exeFile',
          title: 'Executable File',
          type: 'file',
        },
        {
          name: 'version',
          title: 'Version',
          type: 'string',
        },
        {
            name: 'organisations',
            title: 'Organisations',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'List the organisations that can access this driver.',
          },

    ]
})