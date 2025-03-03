import {  SchemaTypeDefinition } from 'sanity'
import sofa from './sofa'
import table  from './table'
import chair from './chair'
import outdoor from './outdoor'
import sets from './set'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [sofa, chair, table, sets, outdoor],
}
