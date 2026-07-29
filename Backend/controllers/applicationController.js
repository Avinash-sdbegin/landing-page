const db = require("../config/db");

const submitApplication = async (req, res) => {
  try {
    const {
      full_name,
      email,
      phone,
      city,
      education,
      graduation_year,
      status,
      occupation,
      linkedin,
      career_goal,
      reason,
      role,
      program,
      source,
    } = req.body;

    if (
      !full_name ||
      !email ||
      !phone ||
      !city ||
      !education ||
      !graduation_year ||
      !status ||
      !occupation ||
      !career_goal ||
      !reason
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    const query = `
      INSERT INTO applications
      (
        full_name,
        email,
        phone,
        city,
        education,
        graduation_year,
        status,
        occupation,
        linkedin,
        career_goal,
        reason,
        role,
        program,
        source
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    await db.execute(query, [
      full_name,
      email,
      phone,
      city,
      education,
      graduation_year,
      status,
      occupation,
      linkedin || null,
      career_goal,
      reason,
      role || null,
      program || null,
      source || null,
    ]);

    return res.status(201).json({
      success: true,
      message: "Application Submitted Successfully",
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  submitApplication,
};