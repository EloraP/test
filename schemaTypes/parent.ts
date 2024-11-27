import {defineField, defineType} from 'sanity'

export const parent = defineType({
    name: 'parent',
    title: 'Parent',
    type: 'document',
    fields: [
        {
          name: 'name',
          title: 'Driver Name',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
        },
        {
          name: 'metadata',
          title: 'Metadata',
          type: 'object',
          fields: [
            { name: 'createdAt', title: 'Created At', type: 'datetime' },
            { name: 'updatedAt', title: 'Updated At', type: 'datetime' },
          ],
        }
    ]
})