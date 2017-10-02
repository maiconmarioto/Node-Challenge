const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema(
  {
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    participation: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
  },
  {
    versionKey: false
  }
);

EmployeeSchema.pre('save', next => {
  const dataAtual = new Date();
  if (!this.criadoEm) {
    this.criadoEm = dataAtual;
  }
  next();
});

module.exports = mongoose.model('employee', EmployeeSchema);
