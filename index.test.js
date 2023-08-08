// install dependencies
const { execSync } = require('child_process');
const { describe, expect, it } = require("@jest/globals");
execSync('npm install');
execSync('npm run seed');

const request = require("supertest")
const { db } = require('./db/connection');
const { Musician, Band } = require('./models/index')
const app = require('./src/app');
const seedMusician = require("./seedData");


describe('testing ./musicians endpoint', () => {
    // Write your tests here
    it('returns the desired information from /musicians', async () => {
        const response = await request(app).get("/musicians");
        const responseData = JSON.parse(response.text);
        expect(response.statusCode).toBe(200);
    });
    it('returns the desired information from /musicians/:id', async () => {
        const response = await request(app).get("/musicians/:1");
        const responseData = JSON.parse(response.text);
        console.log(responseData);
        expect(response.statusCode).toBe(200);
        // expect(responseData).toBe(response.text)
    });
    it('returns the desired information from /bands', async () => {
        const response = await request(app).get("/bands");
        const responseData = JSON.parse(response.text);
        expect(response.statusCode).toBe(200);
    });
});

module.exports = app;

