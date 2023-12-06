import mongoose from 'mongoose';

const medicalRecordSchema = new mongoose.Schema(
  {
    nameOfMedicine: {
      type: String,
      required: true,
    },
    price: {
      type: String,
    },
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Patient',
    },
  },
  { timestamps: true }
);

export const MedicalRecord = mongoose.Model(
  'MedicalRecord',
  medicalRecordSchema
);
