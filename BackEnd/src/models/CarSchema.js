const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema({
    id: {
      type: String,
      required: true
    },
    carname: {
      type: String,
      required: true
    },
    carposter: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    brandNo: {
      type: String,
      required: true
    },
    mileage: {
      type: String,
      required: true
    },
    engine: {
      type: String,
      required: true
    },
    transmission: {
      type: String,
      required: true
    },
    fueltype: {
      type: String,
      required: true
    },
    seatingcapacity: {
      type: String,
      required: true
    },
    drivetrain: {
      type: String,
      required: true
    },
    EmissionStandard: {
      type: String,
      required: true
    },
    mileages: [
      {
        id: {
          type: String,
          required: true
        },
        kmpl: {
          type: String,
          required: true
        },
        varient: {
          type: String,
          required: true
        },
        fueltype: {
          type: String,
          required: true
        }
      }
    ],
    colour: [
      {
        id: {
          type: String,
          required: true
        },
        color: {
          type: String,
          required: true
        },
        colorname: {
          type: String,
          required: true
        }
      }
    ]
  });

  const Car = mongoose.model('Car', CarSchema);
