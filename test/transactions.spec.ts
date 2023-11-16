import { expect, test, beforeAll, afterAll } from 'vitest'
import request from 'supertest'
import { app } from '../src/app'

beforeAll(async () => {
  await app.ready()
})

afterAll(async () => {
  await app.close()
})

test('Create a transaction', async () => {
  await request(app.server)
    .post('/transactions')
    .send({
      title: 'test',
      amount: 100,
      type: 'debit',
    })
    .expect(201)
})

// test('Get all transaction', async () => {
//   await request(app.server).get('/transactions').expect(200)
// })
