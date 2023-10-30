/* eslint-disable comma-dangle */
/* eslint-disable indent */
/* eslint-disable object-curly-spacing */
import { initializeApp } from "firebase-admin";
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  // eslint-disable-next-line max-len
  "sk_test_51JLXWfSDd4ST6XXB0myZBxGbdhEQEGEndDeozhNW9KV1wYfbNDvi8MN2DnIcX6m7VUfxKNZrv9zXx1KvPJ1iiiXg00ya3M6n1k"
);

// API

// - App config

const app = express();

// - Middlewares

app.use(cors({ origin: true }));

app.use(express.json());

// - API routes

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

initializeApp();
// Example endpoint
// http://localhost:5001/challenge-4b2b2/us-central1/api
