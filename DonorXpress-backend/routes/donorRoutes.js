const express = require("express");
const router = express.Router();
const Donor = require("../models/Donor");

router.post("/", async (req, res) => {
    const donor = await Donor.create(req.body);
    res.json(donor);
});

router.get("/", async (req, res) => {
    const { group } = req.query;
    const donors = await Donor.find(group ? { bloodGroup: group } : {});
    res.json(donors);
});

router.patch("/:id", async (req, res) => {
    const donor = await Donor.findByIdAndUpdate(
        req.params.id,
        { available: req.body.available },
        { new: true }
    );
    res.json(donor);
});

module.exports = router;
