export const outputSet = new Set(['sql', 'joi', 'swg'])

export const resSet = new Set(['dir', 'def', 'req', 'dnr'])

export const specSet = new Set(['id-auto', 'id-seq'])

export const attributes = {
  sql: {
    def: 'DEFAULT #defaultValue#',
    req: 'NOT NULL',
    sep: ' ',
  },
  joi: {
    def: 'default(#defaultValue#)',
    req: 'required()',
    sep: '.',
  },
  swg: {
    def: 'default: #defaultValue#',
    req: 'required: true',
    sep: ',\n',
  },
}
