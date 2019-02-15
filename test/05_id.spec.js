import { typeMap as T } from '../src/types'
import { check } from './utils'

describe('========== Id ==========', () => {
  it('default', () => {
    check({
      t: 'id',
      str: {
        sql: 'bigint',
        jot: 'joi.number().integer().greater(100000000000000)',
        swt: 'type: \'integer\',\n  format: \'int64\'',
      },
    })
  })
  it('id-auto', () => {
    check({
      t: 'id-auto',
      str: {
        jot: 'joi.number().integer().greater(100000000000000)',
        swt: 'type: \'integer\',\n  format: \'int64\'',
      },
    })
    T.get('id-auto').sql('schemaName').should.equal('bigint NOT NULL DEFAULT "schemaName".schemaName_id()')
  })
  it('id-seq', () => {
    check({
      t: 'id-seq',
      str: {
        jot: 'joi.number().integer()',
        swt: 'type: \'integer\',\n  format: \'int32\'',
      },
    })
    T.get('id-seq').sql().should.equal('serial')
  })
})
