import faker from 'faker/locale/ko'
import fakerEn from 'faker/locale/en'
import { filter, find, range } from 'fxjs/Strict'

export const random = faker.random

export const randomRange = {
  small: { min: 1, max: 4 },
  middle: { min: 4, max: 8 },
  big: { min: 4, max: 12 }
}

export const genId = (prefix, id) => id => `${prefix}${id}`

export function * genLorem (num, gen) {
  for (let i = 0; i < num; i++) {
    yield gen()
  }
}