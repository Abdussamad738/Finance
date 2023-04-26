import mongoose from "mongoose";
// import money from "money";
// import currency  from "currency";
// // import { loadType } from "mongoose-currency";
// const { money } = require('@paypal/sdk-core');
const Schema = mongoose.Schema;


// loadType(mongoose);
// money.defaultCurrency = 'CAD';
const daySchema = new Schema(
  {
    date: String,
    revenue: {
      type: Number,
      currency: "CAD",
      get: (v) => (v / 100).toFixed(2),
    },
    expenses: {
      type: Number,
      currency: "CAD",
      get: (v) => (v / 100).toFixed(2),
    },
  },
  { toJSON: { getters: true } }
);
const monthSchema = new Schema(
  {
    month: String,
    revenue: {
      type: Number,
      currency: "CAD",
      get: (v) => (v / 100).toFixed(2),
    },
    expenses: {
      type: Number,
      currency: "CAD",
      get: (v) => (v / 100).toFixed(2),
    },
    operationalExpenses: {
      type: Number,
      currency: "CAD",
      get: (v) => (v / 100).toFixed(2),
    },
    nonOperationalExpenses: {
      type: Number,
      currency: "CAD",
      get: (v) => (v / 100).toFixed(2),
    },
  },
  { toJSON: { getters: true } }
);

const KPISchema = new Schema(
  {
    totalProfit: {
      type: Number,
      currency: "CAD",
      get: (v) => (v / 100).toFixed(2),
    },
    totalRevenue: {
      type: Number,
      currency: "CAD",
      get: (v) => (v / 100).toFixed(2),
    },
    totalExpenses: {
      type: Number,
      currency: "CAD",
      get: (v) => (v / 100).toFixed(2),
    },
    expensesByCategory: {
      type: Map,
      of: {
        type: Number,
        currency: "CAD",
        get: (v) => (v / 100).toFixed(2),
      },
    },
    monthlyData: [monthSchema],
    dailyData: [daySchema],
  },
  { timestamps: true, toJSON: { getters: true } }
);
const KPI = mongoose.model("KPI", KPISchema);

export default KPI;





