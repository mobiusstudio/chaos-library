/* eslint-disable quotes */
import joi from 'joi'
import { Sql, Jot, Swt, Joi } from './base'

export const number = {
  default: {
    sql: ({ req, def }) => new Sql('double precision').tostring({ req, def }),
    swt: ({ req, def }) => new Swt(`type: 'number'`).tostring({ req, def }),
    jot: ({ req, def }) => new Jot('joi.number()').tostring({ req, def }),
    joi: ({ req, def }) => new Joi(joi.number()).torule({ req, def }),
  },

  int: {
    sql: ({ req, def }) => new Sql('integer').tostring({ req, def }),
    swt: ({ req, def }) => new Swt(`type: 'integer',\nformat: 'int32'`).tostring({ req, def }),
    jot: ({ req, def }) => new Jot('joi.number().integer()').tostring({ req, def }),
    joi: ({ req, def }) => new Joi(joi.number().integer()).torule({ req, def }),
  },

  bigint: {
    sql: ({ req, def }) => new Sql('bigint').tostring({ req, def }),
    swt: ({ req, def }) => new Swt(`type: 'integer',\nformat: 'int64'`).tostring({ req, def }),
    jot: ({ req, def }) => new Jot('joi.number().integer()').tostring({ req, def }),
    joi: ({ req, def }) => new Joi(joi.number().integer()).torule({ req, def }),
  },

  float: {
    sql: ({ req, def }) => new Sql('real').tostring({ req, def }),
    swt: ({ req, def }) => new Swt(`type: 'number',\nformat: 'float'`).tostring({ req, def }),
    jot: ({ req, def }) => new Jot('joi.number().precision()').tostring({ req, def }),
    joi: ({ req, def }) => new Joi(joi.number().precision()).torule({ req, def }),
  },

  double: {
    sql: ({ req, def }) => new Sql('double precision').tostring({ req, def }),
    swt: ({ req, def }) => new Swt(`type: 'number',\nformat: 'double'`).tostring({ req, def }),
    jot: ({ req, def }) => new Jot('joi.number().precision()').tostring({ req, def }),
    joi: ({ req, def }) => new Joi(joi.number().precision()).torule({ req, def }),
  },

  // numeric: {
  //   sql: ({ req, def }) => new Sql('numeric#numericParameters#').tostring({ req, def }),
  //   swt: ({ req, def }) => new Swt(`type: 'number',\nformat: 'double'`).tostring({ req, def }),
  //   jot: ({ req, def, scaleValue }) => new Jot(`joi.number().precision(${scaleValue})`).tostring({ req, def }),
  //   joi: ({ req, def, scaleValue }) => new Joi(joi.number().precision(scaleValue)).torule({ req, def }),
  // },

  money: {
    sql: ({ req, def }) => new Sql('money').tostring({ req, def }),
    swt: ({ req, def }) => new Swt(`type: 'number',\nformat: 'double'`).tostring({ req, def }),
    jot: ({ req, def }) => new Jot('joi.number().precision(2)').tostring({ req, def }),
    joi: ({ req, def }) => new Joi(joi.number().precision(2)).torule({ req, def }),
  },

  timestamp: {
    sql: ({ req, def }) => new Sql('bigint').tostring({ req, def }),
    swt: ({ req, def }) => new Swt(`type: 'integer',\nformat: 'int64'`).tostring({ req, def }),
    jot: ({ req, def }) => new Jot('joi.date().timestamp()').tostring({ req, def }),
    joi: ({ req, def }) => new Joi(joi.date().timestamp()).torule({ req, def }),
  },
}
