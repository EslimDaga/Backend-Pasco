import District from "../models/District";

export const getDistrict = async(req,res) => {
  const districts = await District.find();
  res.json(districts);
}

export const getDistrictById = async(req,res) => {
  const district = await District.findById(req.params.districtId);
  res.status(200).json(district);
}

export const createDistrict = async(req,res) => {
  const { name, region, province, latitude, longitude, altitude, imagesUrl } = req.body;
  const newDistrict = new District({ name, region, province, latitude, longitude, altitude, imagesUrl });
  const districtSaved = await newDistrict.save();
  res.status(201).json(districtSaved);
}

export const updateDistrict = async(req,res) => {
  const updateDistrict = await District.findByIdAndUpdate(req.params.districtId, req.body, {
    new : true
  });
  res.status(200).json(updateDistrict);
}

export const deleteDistrict = async(req,res) => {
  const { districtId } = req.params;
  await District.findByIdAndDelete(districtId);
  res.status(204).json();
}